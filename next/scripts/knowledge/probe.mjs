/**
 * Retrieval probe. Mirrors the two-stage selection in lib/knowledge/search.ts
 * so the CLI reports the decision the UI will actually make, including the
 * confidence tier, rather than a bare top-3 by score.
 *
 * KEEP IN SYNC with lib/knowledge/search.ts. The thresholds below are the
 * whole point of this tool; if they drift, it lies.
 *
 *   npm run knowledge:probe                          regression battery
 *   npm run knowledge:probe -- "your question"       one-off
 *   npm run knowledge:probe -- --topic "Who is Greyquill?" "what about it"
 */

import { readFile } from 'node:fs/promises';
import path from 'node:path';

import {
  AutoModelForSequenceClassification,
  AutoTokenizer,
  pipeline,
} from '@huggingface/transformers';

const NEXT_ROOT = path.resolve(import.meta.dirname, '..', '..');

const RERANK_MODEL = 'Xenova/ms-marco-MiniLM-L-6-v2';
const RERANK_K = 12;
const RERANK_SKIP = 0.95;
const RERANK_CONFIDENT = 3;
const RERANK_MIN = -6;
const COSINE_CONFIDENT = 0.75;
const CURATED_PREFERENCE = 0.5;
const ANAPHORIC_OPENER =
  /^\s*(and|but|so|also|ok|okay|then|what about|how about|what if|and what about)\b/i;

/** Cases that previously produced a confidently wrong answer, plus controls. */
const BATTERY = [
  { q: 'How does the Greyquill Method work?', want: 'high', wantId: 'method-overview' },
  { q: 'What does GQData do?', want: 'high', wantId: 'what-is-gqdata' },
  { q: 'Do you work in regulated industries?', want: 'high', wantId: 'regulated-industries' },
  { q: 'where does my data live?', want: 'high', wantId: 'data-residency' },
  { q: 'how much does this cost', want: 'high', wantId: 'pricing' },
  { q: 'what is champ', want: 'high', wantId: 'champ-swarm' },
  { q: 'can you work with our legacy mainframe', want: 'high', wantId: 'legacy-integration' },
  // Topical neighbours a bi-encoder alone cannot separate from Greyquill's own
  // certifications.
  { q: 'I need to be greyquill certified', want: 'high', wantId: 'training-and-certification' },
  { q: 'can I get certified', want: 'high', wantId: 'training-and-certification' },
  { q: 'how do I become a partner', want: 'high', wantId: 'become-a-partner' },
  // A short but self-contained question must never inherit the running topic:
  // a four-word rule answered this one with GQData.
  { q: 'where is your office?', want: 'high', wantId: 'who-is-greyquill' },
  { q: 'where is your office?', topic: 'What does GQData do?', want: 'high', wantId: 'who-is-greyquill' },
  // Off topic entirely, including with a stale topic in play.
  { q: 'what is the weather in paris today', want: 'none' },
  { q: 'why is the universe s obig?', want: 'none' },
  { q: 'why is the universe s obig?', topic: 'What does Greyquill do?', want: 'none' },
  // Genuine ellipsis: carryover should still rescue this.
  { q: 'what about healthcare?', topic: 'Do you work in regulated industries?', want: 'any' },
];

const meta = JSON.parse(
  await readFile(path.join(NEXT_ROOT, 'public/knowledge/meta.json'), 'utf8'),
);
const buf = await readFile(path.join(NEXT_ROOT, 'public/knowledge/vectors.bin'));
const packed = new Int8Array(buf.buffer, buf.byteOffset, buf.byteLength);

const embedder = await pipeline('feature-extraction', meta.model, { dtype: meta.dtype });
const tokenizer = await AutoTokenizer.from_pretrained(RERANK_MODEL);
const reranker = await AutoModelForSequenceClassification.from_pretrained(RERANK_MODEL, {
  dtype: 'q8',
});

function candidateText(entry) {
  return entry.kind === 'qa'
    ? `${entry.text} ${meta.answers[entry.answerIndex].answer}`
    : entry.text;
}

function entryLabel(entry) {
  return entry.kind === 'qa'
    ? `QA:${meta.answers[entry.answerIndex].id}`
    : `${entry.source}:${entry.heading.slice(0, 38)}`;
}

async function topCandidates(question) {
  const out = await embedder([question], { pooling: 'mean', normalize: true });
  const qv = out.tolist()[0];
  const scored = [];
  for (let i = 0; i < meta.count; i++) {
    let dot = 0;
    for (let d = 0; d < meta.dims; d++) dot += qv[d] * (packed[i * meta.dims + d] / 127);
    scored.push({ score: dot, index: i });
  }
  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, RERANK_K);
}

async function bestMatch(question) {
  const candidates = await topCandidates(question);
  const top = candidates[0];
  if (top && top.score >= RERANK_SKIP && meta.entries[top.index].kind === 'qa') {
    return { index: top.index, logit: RERANK_CONFIDENT, cosine: top.score, skipped: true };
  }
  const inputs = await tokenizer(Array(candidates.length).fill(question), {
    text_pair: candidates.map((c) => candidateText(meta.entries[c.index])),
    padding: true,
    truncation: true,
  });
  const { logits } = await reranker(inputs);
  const raw = logits.tolist().map((r) => r[0]);

  let best = { index: -1, logit: -Infinity, cosine: 0 };
  candidates.forEach((c, n) => {
    const adjusted =
      raw[n] + (meta.entries[c.index].kind === 'qa' ? CURATED_PREFERENCE : 0);
    if (adjusted > best.logit) best = { index: c.index, logit: adjusted, cosine: c.score };
  });
  return best;
}

async function decide(question, topic) {
  let best = await bestMatch(question);
  let carried = false;

  const isFragment = ANAPHORIC_OPENER.test(question.trim());
  if (topic && isFragment && best.logit < RERANK_CONFIDENT) {
    const retry = await bestMatch(`${topic}. ${question}`);
    if (retry.logit >= RERANK_CONFIDENT && retry.logit > best.logit) {
      best = retry;
      carried = true;
    }
  }

  if (best.index < 0 || best.logit < RERANK_MIN) {
    return { confidence: 'none', carried, ...best,
      label: 'no confident match', text: '(declines, offers discovery call)' };
  }

  const entry = meta.entries[best.index];
  const confident = best.logit >= RERANK_CONFIDENT || best.cosine >= COSINE_CONFIDENT;
  const confidence = entry.kind !== 'qa' ? 'low' : confident ? 'high' : 'medium';
  const text =
    entry.kind === 'qa' ? meta.answers[entry.answerIndex].answer : entry.text;

  return { confidence, carried, ...best, label: entryLabel(entry), text };
}

const argv = process.argv.slice(2);
const topicFlag = argv.indexOf('--topic');
const cliTopic = topicFlag >= 0 ? argv[topicFlag + 1] : null;
// Guard on topicFlag >= 0: without it, `topicFlag + 1` is 0 when there is no
// --topic, which silently drops the first question and runs the battery instead.
const cliQuestions = argv.filter(
  (a, i) => !a.startsWith('--') && (topicFlag < 0 || i !== topicFlag + 1),
);

const cases = cliQuestions.length
  ? cliQuestions.map((q) => ({ q, topic: cliTopic, want: 'any' }))
  : BATTERY;

let failures = 0;
for (const c of cases) {
  const r = await decide(c.q, c.topic);
  const tierOk =
    c.want === 'any' ||
    (c.want === 'not-high' ? r.confidence !== 'high' : r.confidence === c.want);
  const idOk = !c.wantId || r.label === `QA:${c.wantId}`;
  const ok = tierOk && idOk;
  if (!ok) failures++;

  const mark = c.want === 'any' ? ' ' : ok ? '✓' : '✗';
  console.log(
    `${mark} [${r.confidence.padEnd(6)}] logit ${r.logit.toFixed(2).padStart(6)}` +
      ` cos ${r.cosine.toFixed(2)}${r.carried ? ' (carryover)' : ''}` +
      `  "${c.q}"${c.topic ? ` <topic: ${c.topic}>` : ''}`,
  );
  console.log(`             -> ${r.label}: ${r.text.slice(0, 88)}`);
}

if (cliQuestions.length === 0) {
  console.log(`\n${failures === 0 ? 'All battery cases pass.' : `${failures} case(s) FAILED.`}`);
  process.exit(failures === 0 ? 0 : 1);
}
