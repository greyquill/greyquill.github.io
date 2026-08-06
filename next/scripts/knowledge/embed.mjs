/**
 * Embedding, build side.
 *
 * Runs the exact model and quantization the browser will run. That is not
 * an optimisation detail: cosine similarity between vectors from different
 * models (or meaningfully different quantizations) is noise, so the two
 * sides have to agree. See EMBED_MODEL / EMBED_DTYPE in sources.mjs.
 */

import { pipeline } from '@huggingface/transformers';

import { EMBED_DTYPE, EMBED_MODEL } from './sources.mjs';

/** Batch size: large enough to amortise call overhead, small enough to stay flat on memory. */
const BATCH = 32;

/**
 * @param {string[]} texts
 * @returns {Promise<Float32Array[]>} unit-length embedding per input
 */
export async function embedAll(texts, { log = () => {} } = {}) {
  const extractor = await pipeline('feature-extraction', EMBED_MODEL, {
    dtype: EMBED_DTYPE,
  });

  const vectors = [];

  for (let i = 0; i < texts.length; i += BATCH) {
    const batch = texts.slice(i, i + BATCH);
    const out = await extractor(batch, { pooling: 'mean', normalize: true });
    for (const row of out.tolist()) vectors.push(Float32Array.from(row));
    log(`  embedded ${Math.min(i + BATCH, texts.length)}/${texts.length}`);
  }

  return vectors;
}

/**
 * Pack unit-length vectors into int8.
 *
 * Inputs are normalized so every component sits in [-1, 1]; scaling by 127
 * costs about 0.4% per component, which is far below the gap between a
 * relevant and an irrelevant passage. Cuts the payload 4x versus float32.
 */
export function quantize(vectors, dims) {
  const packed = new Int8Array(vectors.length * dims);

  vectors.forEach((vec, row) => {
    for (let d = 0; d < dims; d++) {
      const q = Math.round(vec[d] * 127);
      packed[row * dims + d] = Math.max(-127, Math.min(127, q));
    }
  });

  return packed;
}
