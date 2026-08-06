/**
 * Curated answer bank.
 *
 * Each question phrasing is embedded as its own vector pointing at a shared
 * answer. Matching a visitor's question against other *questions* scores far
 * higher than matching it against marketing prose, which is why the headline
 * prompts ("How does the Greyquill Method work?") need this layer to land.
 */

import { existsSync } from 'node:fs';
import { readFile } from 'node:fs/promises';
import path from 'node:path';

const NEXT_ROOT = path.resolve(import.meta.dirname, '..', '..');

/** Curated files, merged in order. `qa.draft.json` is optional. */
const FILES = ['content/knowledge/qa.json', 'content/knowledge/qa.draft.json'];

async function loadFile(rel) {
  const abs = path.join(NEXT_ROOT, rel);
  if (!existsSync(abs)) return [];
  const parsed = JSON.parse(await readFile(abs, 'utf8'));
  return parsed.entries ?? [];
}

/**
 * @returns {Promise<{answers: Array, queries: Array<{text: string, answerIndex: number}>}>}
 */
export async function loadAnswerBank({ log = () => {} } = {}) {
  const entries = [];
  const seenIds = new Set();

  for (const file of FILES) {
    for (const entry of await loadFile(file)) {
      if (seenIds.has(entry.id)) {
        log(`  ! duplicate id "${entry.id}" ignored (${file})`);
        continue;
      }
      seenIds.add(entry.id);
      entries.push(entry);
    }
  }

  // A follow-up chip pointing at a missing id would render a dead button.
  for (const entry of entries) {
    const dangling = (entry.followUps ?? []).filter((id) => !seenIds.has(id));
    if (dangling.length) {
      log(`  ! "${entry.id}" follows up to unknown id(s): ${dangling.join(', ')}`);
      entry.followUps = (entry.followUps ?? []).filter((id) => seenIds.has(id));
    }
  }

  const queries = [];
  entries.forEach((entry, answerIndex) => {
    for (const text of entry.questions ?? []) queries.push({ text, answerIndex });
  });

  return { answers: entries, queries };
}
