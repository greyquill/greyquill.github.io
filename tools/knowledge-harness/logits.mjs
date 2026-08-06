import { fileURLToPath } from 'node:url';
/**
 * Throwaway: print the top rerank logit for a list of questions, so the
 * off-topic boundary can be set from measurement rather than guessed.
 */
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { AutoModelForSequenceClassification, AutoTokenizer, pipeline } from '@huggingface/transformers';

const NEXT_ROOT = fileURLToPath(new URL('../../next', import.meta.url));
const RERANK_K = 12;
const CURATED_PREFERENCE = 0.5;

const meta = JSON.parse(await readFile(path.join(NEXT_ROOT, 'public/knowledge/meta.json'), 'utf8'));
const vectors = new Int8Array(await readFile(path.join(NEXT_ROOT, 'public/knowledge/vectors.bin')));

const embedder = await pipeline('feature-extraction', meta.model, { dtype: meta.dtype });
const rtok = await AutoTokenizer.from_pretrained('Xenova/ms-marco-MiniLM-L-6-v2');
const rmodel = await AutoModelForSequenceClassification.from_pretrained('Xenova/ms-marco-MiniLM-L-6-v2', { dtype: 'q8' });

const embed = async (t) => Float32Array.from((await embedder([t], { pooling: 'mean', normalize: true })).tolist()[0]);
const textOf = (e) => (e.kind === 'qa' ? `${e.text} ${meta.answers[e.answerIndex].answer}` : e.text);

async function score(q) {
  const v = await embed(q);
  const scored = [];
  for (let i = 0; i < meta.count; i++) {
    let dot = 0;
    for (let d = 0; d < meta.dims; d++) dot += v[d] * (vectors[i * meta.dims + d] / 127);
    scored.push({ index: i, cosine: dot });
  }
  scored.sort((a, b) => b.cosine - a.cosine);
  const cands = scored.slice(0, RERANK_K);
  const inputs = rtok(cands.map(() => q), { text_pair: cands.map((c) => textOf(meta.entries[c.index])), padding: true, truncation: true });
  const { logits } = await rmodel(inputs);
  const out = cands
    .map((c, n) => ({
      ...c,
      logit: logits.data[n] + (meta.entries[c.index].kind === 'qa' ? CURATED_PREFERENCE : 0),
    }))
    .sort((a, b) => b.logit - a.logit);
  return out[0];
}

const QUESTIONS = JSON.parse(process.argv[2] ?? '[]');
for (const q of QUESTIONS) {
  const best = await score(q);
  const e = meta.entries[best.index];
  const label = e.kind === 'qa' ? `qa:${meta.answers[e.answerIndex].id}` : `pas:${e.heading}`;
  console.log(`${best.logit.toFixed(2).padStart(7)}  cos ${best.cosine.toFixed(2)}  ${JSON.stringify(q).padEnd(58)} -> ${label}`);
}
