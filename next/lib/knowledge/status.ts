/**
 * What the assistant says while it works.
 *
 * One word each, rotating. A sentence has to be read, which makes a status
 * line compete with the answer for attention; a single word is absorbed at a
 * glance and just tells you the machine is alive.
 *
 * Every one of them is TRUE. That constraint is not decoration: this chat sits
 * on a site arguing that AI systems should be able to evidence what they did,
 * so inventing a description of its own internals would undercut the exact
 * claim it exists to demonstrate. The pipeline is genuinely interesting, so the
 * honest lines are also the impressive ones.
 *
 * Reference for anyone editing these:
 *   - the question is embedded by all-MiniLM-L6-v2 into 384 dimensions
 *   - compared by dot product against 734 int8 vectors, in the browser
 *   - the top candidates are re-scored by a ms-marco cross-encoder
 *   - the winning passages are sent to a hosted model, which composes the reply
 *   - nothing is retrieved that was not published on the site
 * If a line stops being true, delete it.
 */

/** Phase one: retrieval, all of it on the visitor's own machine. */
const SEARCHING = [
  'Embedding',
  'Searching',
  'Comparing',
  'Scoring',
  'Matching',
  'Sifting',
  'Ranking',
  'Reranking',
  'Shortlisting',
  'Narrowing',
  'Weighing',
  'Judging',
  'Gathering',
  'Grounding',
];

/** Phase two: composition. */
const WRITING = [
  'Composing',
  'Drafting',
  'Writing',
  'Phrasing',
  'Distilling',
  'Condensing',
  'Trimming',
  'Checking',
  'Verifying',
  'Refining',
];

/** Shown when generation runs on the visitor's own device instead. */
const ON_DEVICE = [
  'Composing',
  'Thinking',
  'Locally',
  'On device',
  'Offline',
];

/** First visit, when the models themselves are still arriving. */
const WARMING = [
  'Fetching',
  'Unpacking',
  'Loading',
  'Warming up',
  'Preparing',
];

export type Phase = 'warming' | 'searching' | 'writing' | 'ondevice';

const CATALOG: Record<Phase, string[]> = {
  warming: WARMING,
  searching: SEARCHING,
  writing: WRITING,
  ondevice: ON_DEVICE,
};

/**
 * Recently shown lines, so rotation does not repeat inside a conversation.
 * Module scope, so it spans questions rather than resetting each time.
 */
const recent = new Set<string>();

export function nextStatus(phase: Phase): string {
  const pool = CATALOG[phase];
  const fresh = pool.filter((line) => !recent.has(line));
  // Everything has been used: start the cycle again rather than repeating
  // the most recent line immediately.
  const choices = fresh.length > 0 ? fresh : pool;
  const pick = choices[Math.floor(Math.random() * choices.length)];

  if (fresh.length === 0) recent.clear();
  recent.add(pick);
  // Keep the memory bounded; older lines become eligible again over time.
  if (recent.size > 24) recent.delete(recent.values().next().value as string);
  return pick;
}
