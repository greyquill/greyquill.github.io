/**
 * Browser-side retrieval over the static knowledge index.
 *
 * Two stages, both running on the visitor's device:
 *
 *  1. A bi-encoder embeds the question and compares it against every entry by
 *     dot product. Fast over the whole index, but it only measures topical
 *     overlap, so it cannot tell "can I get certified" from "is your team
 *     certified".
 *  2. A cross-encoder reranks the top handful, reading question and candidate
 *     together. Slow per pair, decisive about which one actually answers.
 *
 * Retrieval itself has no backend, no API key and no per-question cost: the
 * whole index and both models run here. Composition is a separate step and does
 * send the question on (see generate.ts), so this claim covers this file only.
 *
 * The bi-encoder and its quantization MUST match what built the index (see
 * scripts/knowledge/sources.mjs). Vectors from a different model live in an
 * unrelated space and ranking degrades to noise.
 */

import { loadReranker, rerankCandidates } from './rerank';

export type Source = { label: string; url: string };

export type FollowUp = { id: string; question: string };

/**
 * `high` is a curated answer the reranker was decisive about. `medium` is a
 * curated answer it was unsure of, which the UI must hedge rather than assert.
 * `low` is a raw extracted passage. `none` is an honest decline.
 */
export type Confidence = 'high' | 'medium' | 'low' | 'none';

export type Reply = {
  text: string;
  sources: Source[];
  followUps: FollowUp[];
  confidence: Confidence;
  kind?: 'answer';
  /**
   * The visitor typed essentially the question this answer was written for.
   *
   * Generation exists because retrieval can only return a pre-written answer
   * whole, so a narrow question gets the entire company profile. That argument
   * disappears at a near-verbatim match: the curated text already answers this
   * exact question, in copy we wrote, and passing it through a 1.5B model can
   * only lose detail. Measured on "What is the Greyquill Method?" (cosine
   * 0.99): the curated answer names Foundation, Govern and Activate with their
   * products, and the composed version returned one of the three.
   *
   * Skipping generation here is also the fastest path in the whole system.
   */
  verbatim?: boolean;
  /**
   * The passages this reply was drawn from, best first, and the real product
   * of retrieval.
   *
   * `text` is only the fallback shown if generation is unavailable. The
   * composed answer is written from these, so they are attached on every
   * answer path including the weak ones: the case where retrieval is least
   * sure is exactly the case a model reading the passages rescues.
   */
  grounding?: string[];
  /**
   * Which curated entry answered, where one did. Absent on a passage match.
   *
   * Carried purely for the transcript log. A question and an answer say what
   * was asked; this says which piece of the bank fired, which is what turns
   * "visitors keep asking about X" into an entry to write or fix.
   */
  entryId?: string;
};

type Answer = {
  id: string;
  questions: string[];
  answer: string;
  links?: Source[];
  followUps?: string[];
};

type Entry =
  | { kind: 'qa'; answerIndex: number; text: string }
  | {
      kind: 'passage';
      title: string;
      heading: string;
      url: string;
      source: 'site' | 'dc';
      text: string;
    };

type Meta = {
  model: string;
  dtype: string;
  dims: number;
  count: number;
  builtAt: string;
  /** Content hash of vectors.bin, used as its cache key. */
  vectorsVersion?: string;
  answers: Answer[];
  entries: Entry[];
};

/** How many bi-encoder candidates the cross-encoder rescores. */
const RERANK_K = 12;

/**
 * Above this cosine the question is a near-verbatim match for a curated
 * phrasing, so reranking cannot change the outcome and is skipped. Worth about
 * a second in the browser, where the cross-encoder runs under WASM: it is the
 * difference between an instant reply to a suggested prompt and a visible wait.
 */
const RERANK_SKIP = 0.95;

/**
 * Above this, the reranker is decisive that a candidate answers the question.
 * Measured with tools/knowledge-harness/logits.mjs: relevant answers score +5
 * to +11, genuinely off-topic ones bottom out near -10.6.
 */
const RERANK_CONFIDENT = 3;

/**
 * Below this the retrieved text is too weak to show as-is.
 *
 * Set well under zero on purpose. The reranker scores a passage that withholds
 * the requested fact as irrelevant, so an honest refusal like the pricing
 * answer ("We do not publish rates") lands at -2.65 for "how much does this
 * cost". A bar at 0 would discard every "we do not do X" answer in the bank.
 *
 * No longer a gate. Every question now reaches the model, which reads the
 * passages and decides for itself whether they answer it, and declines in its
 * own words when they do not. This threshold only picks which fallback text to
 * carry in case generation is unavailable, so a dead endpoint does not answer
 * "what is the circus?" with an unrelated curated paragraph.
 *
 * What this replaced: a logit gate at -6, a cosine gate at 0.35, a vocabulary
 * built from the index, a three-way classifier over off-topic / gibberish /
 * unpublished, three rotating catalogs of decline copy, a consecutive-miss
 * counter, and a nearest-topic lead. All of it existed to make a 1.5B decline
 * gracefully. A capable model does it unprompted, and better: asked "what is
 * the circus?" it answers "that is outside what we can help with", and asked
 * to invent a price list it refuses and says why.
 */
const WEAK_MATCH = -6;

/**
 * The bi-encoder is a sentence-similarity model, so it judges question against
 * question well, which is exactly the comparison the reranker is weakest at.
 * A decisive cosine therefore also earns full confidence.
 */
const COSINE_CONFIDENT = 0.75;

/**
 * A curated entry is a written reply carrying links and follow-ups, so it is a
 * better artifact than a raw paragraph the reranker scored similarly.
 */
const CURATED_PREFERENCE = 0.5;

/**
 * Follow-ups are handled by retrieving twice: once for the question as typed,
 * once for it appended to the previous question, then merging both candidate
 * sets.
 *
 * Two earlier attempts to detect a follow-up and rewrite the query are gone.
 * Word count could not tell a fragment from a short complete question and
 * caused three wrong answers ("where is your office?" is four words). An
 * anaphoric-opener regex was better but still a guess about grammar, and a
 * question like "what is the company like to work with?" opens with nothing
 * unusual while still depending on context.
 *
 * Retrieving both ways needs no such guess. The union is reranked against the
 * question as typed, and the model additionally receives the conversation
 * itself, so continuity comes from understanding rather than pattern matching.
 */
const HISTORY_QUERY_TURNS = 1;

/**
 * Curated answers already served word for word in this session.
 *
 * The bypass exists so a headline question gets the copy we wrote rather than a
 * paraphrase of it, and that argument only holds the first time. Serving the
 * same paragraph twice teaches the visitor nothing and reads as a stuck
 * machine, which is exactly what "what is Champ?" followed by "can you tell me
 * more?" produced: the identical five sentences, twice, in 38ms.
 *
 * After the first time the model composes instead. It has the same passages,
 * plus the conversation, so a second ask gets a different angle on the same
 * material rather than a copy of the first answer.
 *
 * Module scope, so it spans the conversation and resets on reload, which is the
 * right lifetime: a returning visitor should get the good copy again.
 */
const servedVerbatim = new Set<string>();

const INDEX_BASE = '/knowledge';

let metaPromise: Promise<Meta> | null = null;
let vectorsPromise: Promise<Int8Array> | null = null;
let ready = false;

/**
 * Whether the models and index have finished loading.
 *
 * The UI uses this to distinguish "thinking" from "still downloading ~46MB of
 * models", which on a first visit is the difference between a normal pause and
 * something that looks broken.
 */
export function isKnowledgeReady(): boolean {
  return ready;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let embedderPromise: Promise<any> | null = null;

async function loadMeta(): Promise<Meta> {
  // `no-cache` revalidates rather than skipping the cache: a 304 costs almost
  // nothing, and without it a rebuilt index never reaches returning visitors.
  metaPromise ??= fetch(`${INDEX_BASE}/meta.json`, { cache: 'no-cache' }).then((r) => {
    if (!r.ok) throw new Error(`knowledge index unavailable (${r.status})`);
    return r.json() as Promise<Meta>;
  });
  return metaPromise;
}

async function loadVectors(): Promise<Int8Array> {
  // Content-addressed, so this one can be cached hard and still stay correct.
  vectorsPromise ??= loadMeta()
    .then((meta) => fetch(`${INDEX_BASE}/vectors.bin?v=${meta.vectorsVersion ?? ''}`))
    .then((r) => {
      if (!r.ok) throw new Error(`knowledge vectors unavailable (${r.status})`);
      return r.arrayBuffer();
    })
    .then((buf) => new Int8Array(buf));
  return vectorsPromise;
}

async function loadEmbedder(model: string, dtype: string) {
  embedderPromise ??= (async () => {
    // Dynamic import keeps the ONNX backend out of the initial page bundle; it
    // only loads when someone opens the chat.
    const { pipeline, env } = await import('@huggingface/transformers');
    // No local model files are served from this origin; go straight to the CDN.
    env.allowLocalModels = false;
    return pipeline('feature-extraction', model, { dtype: dtype as 'q8' });
  })();
  return embedderPromise;
}

/**
 * Warm both models and the index ahead of the first question.
 *
 * Safe to call on page load: it is idle-scheduled and the two model fetches
 * (~46MB combined, cached by the browser afterwards) compete with nothing on
 * the critical path. Failures are swallowed because a cold path still works,
 * just more slowly.
 */
export function preloadKnowledge(): void {
  if (typeof window === 'undefined') return;

  const warm = async () => {
    try {
      const meta = await loadMeta();
      await Promise.all([
        loadVectors(),
        loadEmbedder(meta.model, meta.dtype),
        loadReranker(),
      ]);
      ready = true;
    } catch {
      // Retrieval degrades to the fallback reply; nothing to surface here.
    }
  };

  // Older Safari has no requestIdleCallback; a short timer is close enough.
  const idle: typeof window.requestIdleCallback | undefined = window.requestIdleCallback;
  if (typeof idle === 'function') {
    idle(() => void warm(), { timeout: 4000 });
  } else {
    window.setTimeout(() => void warm(), 1200);
  }
}

async function embed(text: string): Promise<Float32Array> {
  const meta = await loadMeta();
  const embedder = await loadEmbedder(meta.model, meta.dtype);
  const out = await embedder([text], { pooling: 'mean', normalize: true });
  return Float32Array.from(out.tolist()[0] as number[]);
}

/**
 * Indices of the best `k` entries by cosine similarity. Vectors are unit
 * length, so a dot product is the whole calculation.
 */
function topCandidates(
  query: Float32Array,
  vectors: Int8Array,
  meta: Meta,
  k: number,
): Array<{ index: number; cosine: number }> {
  const { dims, count } = meta;
  const scored: Array<{ index: number; cosine: number }> = [];

  for (let i = 0; i < count; i++) {
    const offset = i * dims;
    let dot = 0;
    for (let d = 0; d < dims; d++) dot += query[d] * (vectors[offset + d] / 127);
    scored.push({ index: i, cosine: dot });
  }

  scored.sort((a, b) => b.cosine - a.cosine);
  return scored.slice(0, k);
}

/**
 * What the cross-encoder reads for an entry: the phrasing plus its answer.
 *
 * Question-only text was tried and is worse. The reranker is trained on
 * (query, passage) pairs, so a bare one-line question scores below a rich
 * site paragraph and passages win matches they should lose.
 */
function candidateText(meta: Meta, entry: Entry): string {
  return entry.kind === 'qa'
    ? `${entry.text} ${meta.answers[entry.answerIndex].answer}`
    : entry.text;
}

/**
 * How many passages are handed to the generation service as grounding.
 *
 * More than three because the model, not the ranker, now decides what is
 * relevant, and leaving a useful passage out of the payload is worse than
 * ranking it last.
 *
 * Four rather than six is a latency decision. Each chunk is roughly 40 tokens
 * of prompt, and the host evaluates prompts at ~116 tok/s before writing a
 * single word, so the fifth and sixth chunks cost most of a second of dead
 * wait. Four still holds both reserved passage slots, which is what fixed the
 * ranking problem. It is also the service's cap, so anything more is trimmed
 * there anyway.
 */
const GROUNDING_CHUNKS = 4;

/**
 * At least this many grounding slots are reserved for raw site passages.
 *
 * Curated entries carry a scoring bonus and there are far more phrasings of
 * them, so they can sweep the whole slate. Measured on "what is the company
 * like to work with?": the top eight matches were all curated, and the passage
 * that actually answered it ("we walk alongside our clients through the
 * operating life of the software") ranked ninth. Taking the top N by score
 * alone would have excluded the only useful text in the index.
 */
const GROUNDING_PASSAGE_MIN = 2;

/**
 * Distinct source texts to compose from, best first.
 *
 * More than one matters: a question spanning two topics ("do you work in
 * banking, and can you prove compliance?") needs both entries present or the
 * composed answer can only address half of it.
 */
function groundingTexts(meta: Meta, matches: Match[]): string[] {
  const textOf = (entry: Entry) =>
    entry.kind === 'qa' ? meta.answers[entry.answerIndex].answer : entry.text;

  const seen = new Set<string>();
  const out: string[] = [];
  const add = (text: string) => {
    if (seen.has(text) || out.length >= GROUNDING_CHUNKS) return;
    seen.add(text);
    out.push(text);
  };

  // Best overall first, leaving room for the reserved passage slots.
  for (const match of matches) {
    if (out.length >= GROUNDING_CHUNKS - GROUNDING_PASSAGE_MIN) break;
    add(textOf(meta.entries[match.index]));
  }

  // Then the best passages, wherever they landed in the ranking.
  for (const match of matches) {
    if (meta.entries[match.index].kind !== 'passage') continue;
    add(textOf(meta.entries[match.index]));
  }

  // Any remaining room goes back to the ranking.
  for (const match of matches) add(textOf(meta.entries[match.index]));

  return out;
}

function followUpChips(meta: Meta, answer: Answer): FollowUp[] {
  return (answer.followUps ?? [])
    .map((id) => {
      const target = meta.answers.find((a) => a.id === id);
      return target ? { id, question: target.questions[0] } : null;
    })
    .filter((f): f is FollowUp => f !== null);
}

function chips(meta: Meta, ids: string[]): FollowUp[] {
  return ids
    .map((id) => {
      const answer = meta.answers.find((a) => a.id === id);
      return answer ? { id, question: answer.questions[0] } : null;
    })
    .filter((f): f is FollowUp => f !== null);
}

/**
 * Shown only if generation is unreachable and retrieval found nothing worth
 * showing. One sentence, because it is a last resort rather than a feature.
 */
const FALLBACK =
  "I can't answer that from what we have published. A 30-minute discovery call is the quickest way to put it to the team.";

const FALLBACK_SOURCES: Source[] = [
  { label: 'Book a discovery call', url: 'https://calendly.com/greyquill/30min' },
  { label: 'Contact us', url: 'https://www.greyquill.io/contact/' },
];

/** Suggestions offered when the retrieved entry carries none of its own. */
const DEFAULT_CHIPS = ['method-overview', 'what-is-gqdata', 'regulated-industries'];

type Match = {
  index: number;
  logit: number;
  /** Best score across the typed question and the merged follow-up query. */
  cosine: number;
  /** Score for the question exactly as typed, which alone gates the bypass. */
  direct: number;
};

/**
 * Retrieve, then rerank. Returns every candidate in final order, because the
 * runners-up are what tell us whether the winner was actually decisive.
 */
async function rankMatches(
  question: string,
  queries: string[],
  vectors: Int8Array,
  meta: Meta,
): Promise<Match[]> {
  // One bi-encoder pass per query, unioned by entry so a passage found by both
  // is scored once. Embedding is milliseconds; the reranker is the expensive
  // stage and it sees each candidate exactly once either way.
  const pooled = new Map<number, number>();
  // Scores from the question exactly as typed, kept apart from the pool.
  //
  // The pool deliberately mixes in the question merged with the previous one,
  // which is what makes follow-ups retrieve well. That merged score must never
  // decide the verbatim bypass, though: "can you tell me more?" merged with
  // "what is Champ?" scores above 0.95 against the Champ entry, so the bypass
  // fired and re-served the identical answer in 38ms, having learned nothing
  // from the follow-up. Widening what is considered is a different job from
  // deciding the question was already answered word for word.
  const direct = new Map<number, number>();

  for (const [n, query] of queries.entries()) {
    for (const c of topCandidates(await embed(query), vectors, meta, RERANK_K)) {
      pooled.set(c.index, Math.max(pooled.get(c.index) ?? -Infinity, c.cosine));
      if (n === 0) direct.set(c.index, c.cosine);
    }
  }

  const candidates = [...pooled.entries()]
    .map(([index, cosine]) => ({ index, cosine, direct: direct.get(index) ?? -1 }))
    .sort((a, b) => b.cosine - a.cosine)
    .slice(0, RERANK_K);
  if (candidates.length === 0) return [];

  // Fast path: a near-verbatim hit on a curated phrasing needs no adjudication.
  // Judged on the typed cosine alone, for the reason above.
  const top = candidates[0];
  if (top.direct >= RERANK_SKIP && meta.entries[top.index].kind === 'qa') {
    return [{ index: top.index, logit: RERANK_CONFIDENT, cosine: top.cosine, direct: top.direct }];
  }

  // Reranked against the question as typed. The expanded query is only a way
  // to widen what gets considered; it must not decide what wins, or a
  // follow-up would keep answering the previous question.
  const logits = await rerankCandidates(
    question,
    candidates.map((c) => candidateText(meta, meta.entries[c.index])),
  );

  return candidates
    .map((candidate, n) => ({
      index: candidate.index,
      // Nudge curated entries ahead of passages they merely tie with.
      logit:
        logits[n] + (meta.entries[candidate.index].kind === 'qa' ? CURATED_PREFERENCE : 0),
      cosine: candidate.cosine,
      direct: candidate.direct,
    }))
    .sort((a, b) => b.logit - a.logit);
}

/** One prior turn of the conversation, oldest first. */
export type Turn = { role: 'user' | 'assistant'; text: string };

/**
 * Answer a visitor's question.
 *
 * Retrieval no longer picks the reply. It gathers the best passages and hands
 * them up as `grounding`; the caller sends those plus the conversation to the
 * generation service, which writes the answer. `text` is what the visitor sees
 * if that service is unreachable, so it is still a real answer rather than a
 * placeholder.
 *
 * @param question what the visitor typed
 * @param history  earlier turns, used to widen retrieval for follow-ups
 */
export async function askKnowledge(
  question: string,
  history: Turn[] = [],
  /**
   * Whether the previous turn had a subject worth carrying into this query.
   *
   * Merging the previous question into the retrieval query is what makes short
   * follow-ups work, and it is worth a great deal when there was a topic:
   * "how do you do that?" scores 0.80 alone and 8.26 merged with "what is the
   * Greyquill Method?". But merged with a conversational turn that matched
   * nothing, the same follow-up drops to -1.92 and lands on the partner entry.
   * A greeting has no subject, so carrying it forward only adds noise.
   */
  carryTopic = true,
): Promise<Reply & { topic: string | null }> {
  const trimmed = question.trim();
  const topic = [...history].reverse().find((t) => t.role === 'user')?.text ?? null;

  const [meta, vectors] = await Promise.all([loadMeta(), loadVectors()]);
  if (!trimmed) {
    return {
      text: FALLBACK,
      sources: FALLBACK_SOURCES,
      followUps: chips(meta, DEFAULT_CHIPS),
      confidence: 'none',
      topic,
    };
  }

  // The question as typed, plus the same question carrying the previous one.
  // Both feed the candidate pool; only the first decides the ranking.
  const priorQuestions = carryTopic
    ? history
        .filter((t) => t.role === 'user')
        .slice(-HISTORY_QUERY_TURNS)
        .map((t) => t.text)
    : [];
  const queries = [trimmed, ...priorQuestions.map((p) => `${p} ${trimmed}`)];

  const matches = await rankMatches(trimmed, queries, vectors, meta);
  // Reaching here means both models and the index resolved.
  ready = true;
  const best: Match | undefined = matches[0];
  const grounding = groundingTexts(meta, matches);

  // Everything below decides what the visitor sees IF generation is
  // unavailable, and which links hang off the answer. Nothing here decides
  // whether to answer at all: that judgement now belongs to the model, which
  // holds the question, the conversation and the passages, and is far better
  // placed to make it than a threshold.
  const entry = best ? meta.entries[best.index] : undefined;

  if (!best || !entry || best.logit < WEAK_MATCH) {
    return {
      text: FALLBACK,
      sources: FALLBACK_SOURCES,
      followUps: chips(meta, DEFAULT_CHIPS),
      confidence: 'none',
      // Still an answer path. The model reads the passages and, when they do
      // not answer the question, says so in its own words, which beats any
      // canned sentence we could write for it.
      kind: 'answer',
      grounding,
      topic,
    };
  }

  if (entry.kind === 'qa') {
    const answer = meta.answers[entry.answerIndex];
    // Either model being decisive is enough; they are strong at different
    // things and the weak case is when neither is sure.
    const confident = best.logit >= RERANK_CONFIDENT || best.cosine >= COSINE_CONFIDENT;

    // Two conditions, and both must hold. The typed cosine stops a follow-up
    // inheriting its predecessor's score; the session set stops the same copy
    // being served twice however it was reached.
    const verbatim = best.direct >= RERANK_SKIP && !servedVerbatim.has(answer.id);
    if (verbatim) servedVerbatim.add(answer.id);

    return {
      text: answer.answer,
      // Only cited when retrieval was decisive.
      //
      // A source link asserts "this answer came from here", and on a weak match
      // the model has usually declined rather than used the passages, so the
      // link contradicts the answer above it. Observed on a bare "no", which
      // matched the pricing entry at -3.95: the model correctly answered the
      // conversation, and "Digital transformation" and "The parallel run" were
      // still hanging underneath it.
      sources: confident ? answer.links ?? [] : [],
      followUps: followUpChips(meta, answer),
      confidence: confident ? 'high' : 'medium',
      kind: 'answer',
      // Same bar the rerank fast path uses, and for the same reason: above it
      // the question and the curated phrasing are the same question, so the
      // copy is served as written and nothing is generated at all.
      verbatim,
      grounding,
      entryId: answer.id,
      topic: answer.questions[0],
    };
  }

  // Raw site prose. It was written as page copy rather than as a reply to
  // anything, so it is the weakest fallback text and the strongest argument
  // for letting the model rewrite it into an actual answer.
  const confidentPassage =
    best.logit >= RERANK_CONFIDENT || best.cosine >= COSINE_CONFIDENT;

  return {
    text: entry.text,
    // Same rule as above, for the same reason.
    sources: confidentPassage
      ? [{ label: entry.title.split('·')[0].trim() || 'Read more', url: entry.url }]
      : [],
    followUps: [],
    confidence: 'low',
    kind: 'answer',
    grounding,
    topic: entry.heading,
  };
}

/** Look up a curated answer directly, used by follow-up chips. */
export async function answerById(id: string): Promise<(Reply & { topic: string | null }) | null> {
  const meta = await loadMeta();
  const answer = meta.answers.find((a) => a.id === id);
  if (!answer) return null;

  return {
    text: answer.answer,
    sources: answer.links ?? [],
    followUps: followUpChips(meta, answer),
    confidence: 'high',
    entryId: answer.id,
    topic: answer.questions[0],
  };
}
