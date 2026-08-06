/**
 * Knowledge index build.
 *
 *   npm run build:knowledge              reuse cached Document Center pages
 *   npm run build:knowledge -- --refresh re-fetch the Document Center
 *
 * Reads only published output (see sources.mjs) and emits two static
 * assets: meta.json (chunk text + provenance) and vectors.bin (int8).
 */

import { createHash } from 'node:crypto';
import { existsSync } from 'node:fs';
import { mkdir, readdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

import { buildChunks } from './chunk.mjs';
import { crawlDocumentCenter } from './crawl.mjs';
import { embedAll, quantize } from './embed.mjs';
import { extractSections } from './extract.mjs';
import { loadAnswerBank } from './qa.mjs';
import {
  EMBED_DIMS,
  EMBED_DTYPE,
  EMBED_MODEL,
  SITE_EXCLUDE,
  SITE_ORIGIN,
  SITE_OUT_DIR,
} from './sources.mjs';

const NEXT_ROOT = path.resolve(import.meta.dirname, '..', '..');
const log = (msg) => console.log(msg);

/** Every `index.html` under `out/`, which is exactly the set of public routes. */
async function findSitePages(dir, base = '') {
  const entries = await readdir(path.join(NEXT_ROOT, dir), { withFileTypes: true });
  const pages = [];

  for (const entry of entries) {
    const rel = base ? `${base}/${entry.name}` : entry.name;

    if (entry.isDirectory()) {
      if (entry.name.startsWith('_') || SITE_EXCLUDE.has(entry.name)) continue;
      pages.push(...(await findSitePages(path.join(dir, entry.name), rel)));
    } else if (entry.name === 'index.html') {
      const route = base ? `/${base}/` : '/';
      pages.push({ file: path.join(NEXT_ROOT, dir, entry.name), url: `${SITE_ORIGIN}${route}` });
    }
  }

  return pages;
}

async function main() {
  const refresh = process.argv.includes('--refresh');

  log('Reading published site output...');
  const sitePages = await findSitePages(SITE_OUT_DIR);
  if (sitePages.length === 0) {
    throw new Error(
      `No pages found in ${SITE_OUT_DIR}/. Run \`npm run build\` first so there is published output to index.`,
    );
  }

  const pages = [];
  for (const { file, url } of sitePages) {
    const html = await readFile(file, 'utf8');
    pages.push(extractSections(html, url, 'site'));
  }
  log(`  ${sitePages.length} pages`);

  log(`Crawling Document Center${refresh ? ' (refreshing cache)' : ''}...`);
  const dcPages = await crawlDocumentCenter({ refresh, log });
  for (const { url, html } of dcPages) {
    pages.push(extractSections(html, url, 'dc'));
  }

  log('Chunking...');
  const chunks = buildChunks(pages);
  log(`  ${chunks.length} passages`);

  log('Loading curated answers...');
  const { answers, queries } = await loadAnswerBank({ log });
  log(`  ${answers.length} answers, ${queries.length} question phrasings`);

  // Curated question phrasings come first so a tie between a curated answer
  // and an extracted passage resolves to the curated one.
  const entries = [
    ...queries.map((q) => ({ kind: 'qa', answerIndex: q.answerIndex, text: q.text })),
    ...chunks.map(({ title, heading, url, source, text }) => ({
      kind: 'passage',
      title,
      heading,
      url,
      source,
      text,
    })),
  ];

  log(`Embedding ${entries.length} vectors with ${EMBED_MODEL} (${EMBED_DTYPE})...`);
  const vectors = await embedAll(entries.map((e) => e.text), { log });

  const packed = quantize(vectors, EMBED_DIMS);

  const meta = {
    model: EMBED_MODEL,
    dtype: EMBED_DTYPE,
    dims: EMBED_DIMS,
    count: entries.length,
    builtAt: new Date().toISOString(),
    // Cache key for vectors.bin. The runtime revalidates meta.json on every
    // load but requests the vectors at a content-addressed URL, so a rebuilt
    // index reaches returning visitors instead of sitting behind a stale
    // browser cache until it happens to expire.
    vectorsVersion: createHash('sha1').update(packed).digest('hex').slice(0, 12),
    answers,
    entries,
  };

  const metaJson = JSON.stringify(meta);
  const vectorBuf = Buffer.from(packed.buffer);

  // `public/` is the source of truth and what `next dev` serves. `out/` is
  // already built by this point, so the index has to be copied in there too
  // or the deployed site would ship without it.
  const targets = [path.join(NEXT_ROOT, 'public', 'knowledge')];
  const outKnowledge = path.join(NEXT_ROOT, SITE_OUT_DIR, 'knowledge');
  if (existsSync(path.join(NEXT_ROOT, SITE_OUT_DIR))) targets.push(outKnowledge);

  for (const dir of targets) {
    await mkdir(dir, { recursive: true });
    await writeFile(path.join(dir, 'meta.json'), metaJson, 'utf8');
    await writeFile(path.join(dir, 'vectors.bin'), vectorBuf);
  }

  const metaKb = Math.round(metaJson.length / 1024);
  const vecKb = Math.round(packed.byteLength / 1024);
  log(`\nWrote meta.json (${metaKb} KB) and vectors.bin (${vecKb} KB)`);
  log(`  -> ${targets.map((t) => path.relative(NEXT_ROOT, t)).join(', ')}`);
  log(`${entries.length} vectors: ${queries.length} curated, ${chunks.length} passages from ${pages.length} pages.`);
}

main().catch((err) => {
  console.error(`\nKnowledge build failed: ${err.message}`);
  process.exit(1);
});
