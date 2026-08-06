/**
 * Cross-encoder reranking.
 *
 * The bi-encoder in search.ts embeds the question and each passage separately,
 * so it can only compare topic vectors. That makes it blind to direction: "can
 * I get certified" and "is your team certified" are near-identical to it.
 *
 * A cross-encoder reads question and candidate together in a single pass with
 * attention across both, so it scores whether the candidate *answers* the
 * question. It is far too slow to run over the whole index, which is why it
 * only ever sees the top handful of bi-encoder candidates.
 *
 * Scores are raw logits, unbounded and on a completely different scale from
 * cosine similarity. Measured on this index: relevant answers land between
 * +4.5 and +10.5, and off-topic questions bottom out near -11.
 */

const RERANK_MODEL = 'Xenova/ms-marco-MiniLM-L-6-v2';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
let rerankerPromise: Promise<{ tokenizer: any; model: any }> | null = null;

export async function loadReranker() {
  rerankerPromise ??= (async () => {
    const { AutoModelForSequenceClassification, AutoTokenizer, env } = await import(
      '@huggingface/transformers'
    );
    env.allowLocalModels = false;

    const [tokenizer, model] = await Promise.all([
      AutoTokenizer.from_pretrained(RERANK_MODEL),
      AutoModelForSequenceClassification.from_pretrained(RERANK_MODEL, { dtype: 'q8' }),
    ]);
    return { tokenizer, model };
  })();
  return rerankerPromise;
}

/**
 * Score each candidate against the question.
 *
 * @returns one logit per candidate, in the order supplied
 */
export async function rerankCandidates(
  question: string,
  candidates: string[],
): Promise<number[]> {
  if (candidates.length === 0) return [];

  const { tokenizer, model } = await loadReranker();

  const inputs = await tokenizer(Array(candidates.length).fill(question), {
    text_pair: candidates,
    padding: true,
    truncation: true,
  });

  const { logits } = await model(inputs);
  return (logits.tolist() as number[][]).map((row) => row[0]);
}
