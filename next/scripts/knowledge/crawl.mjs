/**
 * Document Center crawler.
 *
 * The Document Center is a separate repo deployed under the same domain,
 * so it is read over HTTPS rather than from disk. Responses are cached to
 * `.cache/` so repeat builds are fast and work offline; pass `--refresh`
 * to the build to force a re-fetch.
 */

import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { extractLinks } from './extract.mjs';
import { DC_MAX_DEPTH, DC_MAX_PAGES, DC_ROOT } from './sources.mjs';

const CACHE_DIR = path.join(import.meta.dirname, '.cache');

function cachePath(url) {
  return path.join(CACHE_DIR, `${createHash('sha1').update(url).digest('hex')}.html`);
}

async function fetchPage(url, { refresh }) {
  const file = cachePath(url);

  if (!refresh) {
    try {
      return await readFile(file, 'utf8');
    } catch {
      // Cache miss falls through to the network.
    }
  }

  const res = await fetch(url, {
    headers: { 'user-agent': 'greyquill-knowledge-indexer' },
  });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);

  const html = await res.text();
  await mkdir(CACHE_DIR, { recursive: true });
  await writeFile(file, html, 'utf8');
  return html;
}

/**
 * Breadth-first crawl of the Document Center.
 *
 * @returns {Promise<Array<{url: string, html: string}>>}
 */
export async function crawlDocumentCenter({ refresh = false, log = () => {} } = {}) {
  const seen = new Set([DC_ROOT]);
  const pages = [];
  let frontier = [DC_ROOT];

  for (let depth = 0; depth <= DC_MAX_DEPTH && frontier.length; depth++) {
    const next = [];

    for (const url of frontier) {
      if (pages.length >= DC_MAX_PAGES) {
        log(`  ! page ceiling (${DC_MAX_PAGES}) reached, stopping crawl`);
        return pages;
      }

      let html;
      try {
        html = await fetchPage(url, { refresh });
      } catch (err) {
        // A single unreachable document should not fail the whole build.
        log(`  ! skip ${url} (${err.message})`);
        continue;
      }

      pages.push({ url, html });
      log(`  + ${url}`);

      if (depth < DC_MAX_DEPTH) {
        for (const link of extractLinks(html, url, DC_ROOT)) {
          if (seen.has(link)) continue;
          seen.add(link);
          next.push(link);
        }
      }
    }

    frontier = next;
  }

  return pages;
}
