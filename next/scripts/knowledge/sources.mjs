/**
 * Source allowlist for the knowledge index.
 *
 * SAFETY INVARIANT: every source here is *published output*, never repo
 * source files. The main site is read from `out/` (what `next build`
 * actually ships) and the Document Center is fetched over HTTPS from the
 * live domain. Internal planning docs (businessstrategy.md, REDESIGN_PLAN.md,
 * SITE_INVENTORY.md, WEBSITE_REVIEW.md, docs/*.md) are therefore
 * unreachable by construction, not merely excluded by a filter.
 *
 * The emitted index is a public static asset. Anything that reaches it is
 * published. Do not add a source that reads outside `out/` or the live site.
 */

export const SITE_ORIGIN = 'https://www.greyquill.io';

/** Built output of this repo. Relative to `next/`. */
export const SITE_OUT_DIR = 'out';

/** Routes excluded from the index: error pages and anything with no prose. */
export const SITE_EXCLUDE = new Set(['404']);

/**
 * Document Center lives in a separate repo (github.com/greyquill/dc) and
 * deploys under the same domain, so it cannot be read from this checkout.
 * We crawl it from the public URL instead, starting here and following
 * in-scope links. New documents are picked up automatically on rebuild.
 */
export const DC_ROOT = `${SITE_ORIGIN}/dc/`;

/** Crawl depth from DC_ROOT. 2 covers section index pages plus their documents. */
export const DC_MAX_DEPTH = 2;

/** Hard ceiling so a link loop can never run the crawler away. */
export const DC_MAX_PAGES = 120;

/** Embedding model. MUST match the model the browser loads at runtime, or
 *  the query and document vectors land in different spaces and ranking
 *  becomes noise. Also match `dtype` (see embed.mjs). */
export const EMBED_MODEL = 'Xenova/all-MiniLM-L6-v2';
export const EMBED_DTYPE = 'q8';
export const EMBED_DIMS = 384;
