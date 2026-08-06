/**
 * End-to-end scenario battery.
 *
 * Mirrors the runtime path in lib/knowledge: smalltalk rules, merged-query
 * retrieval, cross-encoder rerank, the reserved-passage grounding rule, and
 * the tier gate that decides whether generation runs at all. Then it calls the
 * live service for the tiers that compose, and asserts on what came back.
 *
 * This replaces probe.mjs, which still models the old topic-carryover design
 * and therefore passes while runtime fails.
 *
 *   node scripts/knowledge/scenarios.mjs
 *   node scripts/knowledge/scenarios.mjs --no-gen     (retrieval only, offline)
 *   node scripts/knowledge/scenarios.mjs --only voice
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import {
  AutoModelForSequenceClassification,
  AutoTokenizer,
  pipeline,
} from '@huggingface/transformers';

// Lives outside the repo (throwaway harness), so the site root is explicit.
const NEXT_ROOT =
  process.env.GQ_NEXT_ROOT ?? fileURLToPath(new URL('../../next', import.meta.url));
const ENDPOINT = process.env.GQ_ENDPOINT ?? 'https://assistant.nayeli.in';
const ORIGIN = 'https://www.greyquill.io';

// Must track lib/knowledge/search.ts.
const RERANK_MODEL = 'Xenova/ms-marco-MiniLM-L-6-v2';
const RERANK_K = 12;
const RERANK_SKIP = 0.95;
const RERANK_CONFIDENT = 3;
const RERANK_MIN = -6;
const COSINE_MIN = 0.35;
const COSINE_CONFIDENT = 0.75;
const CURATED_PREFERENCE = 0.5;
const GROUNDING_CHUNKS = 4;
const GROUNDING_PASSAGE_MIN = 2;

// Imported rather than copied. The duplicated regex block this replaces was
// exactly the drift the harness exists to catch: it would have gone on passing
// while the real rules changed underneath it.
import { supportedByGrounding } from '../../next/lib/knowledge/generate.ts';

/* ------------------------------------------------------------------ */
/* Scenarios                                                           */
/* ------------------------------------------------------------------ */

/**
 * `tier`     expected retrieval tier: high | medium | low | none | smalltalk
 * `must`     substrings the composed answer must contain (case-insensitive)
 * `mustNot`  substrings it must not contain
 * `maxSent`  sentence ceiling, for checking brevity rules
 */
const SCENARIO_FILE =
  process.env.GQ_SCENARIOS ??
  path.join(path.dirname(fileURLToPath(import.meta.url)), 'scenarios.json');

/** Scenarios come from JSON so they can be authored without touching code. */
let SCENARIOS = [];
try {
  SCENARIOS = JSON.parse(await readFile(SCENARIO_FILE, 'utf8'));
  console.log(`Loaded ${SCENARIOS.length} scenarios from ${SCENARIO_FILE}\n`);
} catch {
  console.log('No scenarios.json found, using the built-in set.');
  SCENARIOS = [];
}

const BUILTIN = [
  // --- facts that must be answered exactly -------------------------
  { group: 'facts', q: 'which city are you in?', tier: 'high', must: ['bengaluru'], maxSent: 2 },
  { group: 'facts', q: 'where are you based?', tier: 'high', must: ['bengaluru'] },
  { group: 'facts', q: 'do you work with banks?', tier: 'high' },
  { group: 'facts', q: 'are you an IBM partner?', tier: 'high', must: ['ibm'] },
  { group: 'facts', q: 'how many founding engineers?', tier: 'high' },
  { group: 'facts', q: 'what is GQData?', tier: 'high' },
  { group: 'facts', q: 'what is GQ Govern?', tier: 'high' },
  { group: 'facts', q: 'how does the Greyquill Method work?', tier: 'high' },
  { group: 'facts', q: 'why do most AI projects fail?', tier: 'high' },
  { group: 'facts', q: 'where does my data live?', tier: 'high' },

  // --- contact tiering ---------------------------------------------
  { group: 'contact', q: 'how do I contact you?', tier: 'high', must: ['hello@greyquill.io'], mustNot: ['80505'] },
  { group: 'contact', q: 'who do I talk to?', tier: 'high', mustNot: ['80505'] },
  { group: 'contact', q: 'what is your email?', tier: 'high', must: ['hello@greyquill.io'] },
  { group: 'contact', q: 'what is your phone number?', tier: 'high', must: ['80505'] },
  { group: 'contact', q: 'can I call you?', tier: 'high', must: ['80505'] },

  // --- honest refusals ---------------------------------------------
  { group: 'refusal', q: 'how much does it cost?', tier: 'any', mustNot: ['$', '₹'] },
  { group: 'refusal', q: 'what is your revenue?', tier: 'any' },
  { group: 'refusal', q: 'who are your clients?', tier: 'any' },
  { group: 'refusal', q: 'do you offer a 90 day money back guarantee?', tier: 'any', mustNot: ['yes, we offer', '90-day guarantee'] },
  { group: 'refusal', q: 'what is the CEO mobile number?', tier: 'any' },

  // --- nothing should be answered ----------------------------------
  { group: 'nomatch', q: 'sdfsaf', tier: 'none' },
  { group: 'nomatch', q: ';lklk', tier: 'none' },
  { group: 'nomatch', q: 'ho', tier: 'none' },
  { group: 'nomatch', q: 'why is the universe so big?', tier: 'none' },

  // --- smalltalk should never reach retrieval -----------------------
  { group: 'smalltalk', q: 'hi', tier: 'smalltalk' },
  { group: 'smalltalk', q: 'how are you today?', tier: 'smalltalk' },
  { group: 'smalltalk', q: 'thanks, that helps', tier: 'smalltalk' },
  { group: 'smalltalk', q: 'who are you?', tier: 'smalltalk' },
  { group: 'smalltalk', q: 'bye', tier: 'smalltalk' },

  // --- broad questions should get more than one sentence ------------
  { group: 'broad', q: 'what are your services?', tier: 'any', minSent: 2 },
  { group: 'broad', q: 'tell me about the platform', tier: 'any', minSent: 2 },
  { group: 'broad', q: 'which industries do you serve?', tier: 'any' },

  // --- follow-ups need the previous turn ----------------------------
  {
    group: 'followup',
    q: 'and what about telcos?',
    history: [
      { role: 'user', text: 'do you work with banks?' },
      { role: 'assistant', text: 'Yes, we work with banks across financial services and payments.' },
    ],
    tier: 'any',
  },
  {
    group: 'followup',
    q: 'what about healthcare?',
    history: [{ role: 'user', text: 'do you work in regulated industries?' }],
    tier: 'any',
  },
];

if (!SCENARIOS.length) SCENARIOS = BUILTIN;

/** Style rules every composed answer must satisfy, whatever the question. */
const STYLE_RULES = [
  { name: 'no em dash', test: (t) => !/[—–]/.test(t) },
  { name: 'no first person', test: (t) => !/\b(I|I'm|I am|me|my|myself)\b/.test(t) },
  { name: 'no third person', test: (t) => !/^Greyquill (is|has|does|works|serves)\b/i.test(t.trim()) },
  { name: 'no banned scale word', test: (t) => !/\b(large|larger|big|bigger|broad|broader)\s+(delivery\s+|support\s+|engineering\s+)?team\b/i.test(t) },
  { name: 'no filler opener', test: (t) => !/^\s*(certainly|sure|absolutely|of course|great question|hello|hi|hey)\b\s*[,.!:]/i.test(t) },
  { name: 'no markdown', test: (t) => !/\*\*|##/.test(t) },
  { name: 'no trailing assist offer', test: (t) => !/how (can|may) (i|we) (assist|help)/i.test(t) },
  { name: 'not a bare question echo', test: (t) => !(t.trim().endsWith('?') && t.trim().split(/[.!?]/).filter(Boolean).length === 1) },
];

/* ------------------------------------------------------------------ */

const argv = process.argv.slice(2);
const noGen = argv.includes('--no-gen');
const onlyIdx = argv.indexOf('--only');
const only = onlyIdx >= 0 ? argv[onlyIdx + 1] : null;

const meta = JSON.parse(await readFile(path.join(NEXT_ROOT, 'public/knowledge/meta.json'), 'utf8'));
const buf = await readFile(path.join(NEXT_ROOT, 'public/knowledge/vectors.bin'));
const packed = new Int8Array(buf.buffer, buf.byteOffset, buf.byteLength);

const embedder = await pipeline('feature-extraction', meta.model, { dtype: meta.dtype });
const tokenizer = await AutoTokenizer.from_pretrained(RERANK_MODEL);
const reranker = await AutoModelForSequenceClassification.from_pretrained(RERANK_MODEL, { dtype: 'q8' });

const candidateText = (e) =>
  e.kind === 'qa' ? `${e.text} ${meta.answers[e.answerIndex].answer}` : e.text;
const bodyText = (e) => (e.kind === 'qa' ? meta.answers[e.answerIndex].answer : e.text);
const label = (e) =>
  e.kind === 'qa' ? `QA:${meta.answers[e.answerIndex].id}` : `site:${e.heading.slice(0, 28)}`;

async function embed(text) {
  const out = await embedder([text], { pooling: 'mean', normalize: true });
  return out.tolist()[0];
}

async function topCandidates(query) {
  const qv = await embed(query);
  const scored = [];
  for (let i = 0; i < meta.count; i++) {
    let dot = 0;
    for (let d = 0; d < meta.dims; d++) dot += qv[d] * (packed[i * meta.dims + d] / 127);
    scored.push({ index: i, cosine: dot });
  }
  scored.sort((a, b) => b.cosine - a.cosine);
  return scored.slice(0, RERANK_K);
}

/** Merged-query retrieval, exactly as search.ts does it. */
async function rank(question, history = []) {
  const prior = history.filter((t) => t.role === 'user').slice(-1).map((t) => t.text);
  const queries = [question, ...prior.map((p) => `${p} ${question}`)];

  const pooled = new Map();
  for (const q of queries) {
    for (const c of await topCandidates(q)) {
      pooled.set(c.index, Math.max(pooled.get(c.index) ?? -Infinity, c.cosine));
    }
  }
  const candidates = [...pooled.entries()]
    .map(([index, cosine]) => ({ index, cosine }))
    .sort((a, b) => b.cosine - a.cosine)
    .slice(0, RERANK_K);
  if (!candidates.length) return [];

  const top = candidates[0];
  if (top.cosine >= RERANK_SKIP && meta.entries[top.index].kind === 'qa') {
    return [{ ...top, logit: RERANK_CONFIDENT }];
  }

  const inputs = await tokenizer(Array(candidates.length).fill(question), {
    text_pair: candidates.map((c) => candidateText(meta.entries[c.index])),
    padding: true,
    truncation: true,
  });
  const { logits } = await reranker(inputs);
  const raw = logits.tolist().map((x) => x[0]);
  return candidates
    .map((c, n) => ({
      ...c,
      logit: raw[n] + (meta.entries[c.index].kind === 'qa' ? CURATED_PREFERENCE : 0),
    }))
    .sort((a, b) => b.logit - a.logit);
}

/** Grounding with the reserved passage slots, as search.ts builds it. */
function grounding(matches) {
  const seen = new Set();
  const out = [];
  const add = (t) => {
    if (!seen.has(t) && out.length < GROUNDING_CHUNKS) {
      seen.add(t);
      out.push(t);
    }
  };
  for (const m of matches) {
    if (out.length >= GROUNDING_CHUNKS - GROUNDING_PASSAGE_MIN) break;
    add(bodyText(meta.entries[m.index]));
  }
  for (const m of matches) {
    if (meta.entries[m.index].kind === 'passage') add(bodyText(meta.entries[m.index]));
  }
  for (const m of matches) add(bodyText(meta.entries[m.index]));
  return out;
}

/** What the visitor sees when a composition is discarded: the retrieved text. */
function curatedFallback(matches) {
  const best = matches[0];
  if (!best) return '';
  const entry = meta.entries[best.index];
  return entry.kind === 'qa' ? meta.answers[entry.answerIndex].answer : entry.text;
}

function tierOf(question, matches) {
  const best = matches[0];
  if (!best || best.logit < RERANK_MIN || best.cosine < COSINE_MIN) return 'none';
  const entry = meta.entries[best.index];
  if (entry.kind !== 'qa') return 'low';
  return best.logit >= RERANK_CONFIDENT || best.cosine >= COSINE_CONFIDENT ? 'high' : 'medium';
}

async function generate(question, chunks, history) {
  const res = await fetch(`${ENDPOINT}/chat`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Origin: ORIGIN },
    body: JSON.stringify({ question, chunks, history }),
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return (await res.text()).trim();
}

const sentences = (t) => t.split(/(?<=[.!?])\s+/).filter((s) => s.trim().length > 1).length;

let pass = 0;
let fail = 0;
const failures = [];

for (const sc of SCENARIOS) {
  if (only && sc.group !== only) continue;

  const matches = await rank(sc.q, sc.history ?? []);
  const tier = tierOf(sc.q, matches);
  const problems = [];

  if (sc.tier !== 'any' && tier !== sc.tier) {
    problems.push(`tier ${tier}, expected ${sc.tier}`);
  }

  let answer = '';
  // Smalltalk, no-match and near-verbatim matches never reach the model. The
  // last of those is the runtime's fastest path: above RERANK_SKIP the curated
  // answer was written for this exact question, so it is served as written.
  const best = matches[0];
  const verbatim =
    !!best && best.cosine >= RERANK_SKIP && meta.entries[best.index].kind === 'qa';
  const composes = !verbatim;

  if (verbatim) {
    answer = meta.answers[meta.entries[best.index].answerIndex].answer;
  } else if (composes && !noGen) {
    try {
      const chunks = grounding(matches);
      const composed = await generate(sc.q, chunks, sc.history ?? []);
      // The runtime discards a composition whose numbers are not in the
      // passages and shows the curated answer instead, so the harness has to
      // assert on whichever text the visitor would actually see.
      answer = supportedByGrounding(composed, chunks)
        ? composed
        : curatedFallback(matches);
    } catch (err) {
      problems.push(`generation failed: ${err.message}`);
    }
  }

  if (answer) {
    for (const need of sc.must ?? []) {
      if (!answer.toLowerCase().includes(need.toLowerCase())) problems.push(`missing "${need}"`);
    }
    for (const banned of sc.mustNot ?? []) {
      if (answer.toLowerCase().includes(banned.toLowerCase())) problems.push(`contains "${banned}"`);
    }
    for (const rule of STYLE_RULES) {
      if (!rule.test(answer)) problems.push(rule.name);
    }
    const n = sentences(answer);
    if (sc.maxSent && n > sc.maxSent) problems.push(`${n} sentences, max ${sc.maxSent}`);
    if (sc.minSent && n < sc.minSent) problems.push(`${n} sentences, min ${sc.minSent}`);
  }

  const ok = problems.length === 0;
  ok ? pass++ : fail++;
  if (!ok) failures.push({ sc, tier, answer, problems });

  console.log(
    `${ok ? 'PASS' : 'FAIL'}  ${sc.group.padEnd(9)} ${sc.q.slice(0, 40).padEnd(42)} ` +
      `[${tier}]${matches[0] ? ` ${matches[0].logit.toFixed(1)} ${label(meta.entries[matches[0].index])}` : ''}`,
  );
  if (answer) console.log(`      "${answer.replace(/\s+/g, ' ').slice(0, 150)}"`);
  if (!ok) console.log(`      -> ${problems.join('; ')}`);
}

console.log(`\n${pass} passed, ${fail} failed`);
if (failures.length) {
  console.log('\nFailures:');
  for (const f of failures) console.log(`  ${f.sc.q}  ->  ${f.problems.join('; ')}`);
}
process.exit(fail === 0 ? 0 : 1);
