/**
 * HTML -> clean prose sections.
 *
 * Works on both the Next.js static export and the hand-written Document
 * Center pages, so it stays deliberately structural: drop chrome, take the
 * main content region, then split on headings.
 */

import * as cheerio from 'cheerio';

/** Elements that never contain answerable prose, wherever they appear. */
const STRIP = ['script', 'style', 'noscript', 'svg', 'form', 'button', '[aria-hidden="true"]'];

/**
 * Site chrome. Only stripped on pages with no `<main>`, because scoping to
 * `<main>` already excludes it. Stripping `header` unconditionally would
 * also delete every *section* header: `Section` wraps each eyebrow, title,
 * and intro in one, which is the highest-value copy on the page.
 */
const CHROME = ['header', 'footer', 'nav'];

/** Collapse runs of whitespace; HTML indentation otherwise pollutes text. */
function tidy(s) {
  return s.replace(/\s+/g, ' ').trim();
}

/**
 * Elements that imply a visual break. Text either side of one must not be
 * glued together: cheerio's `.text()` would turn `<h2>A three-step
 * approach,<br/>for success</h2>` into "approach,for success".
 */
const BLOCK = new Set([
  'address', 'article', 'aside', 'blockquote', 'br', 'dd', 'div', 'dl', 'dt',
  'figcaption', 'figure', 'footer', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header',
  'hr', 'li', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'tbody', 'td',
  'tfoot', 'th', 'thead', 'tr', 'ul',
]);

const HEADINGS = new Set(['h1', 'h2', 'h3']);

/**
 * Linearise a subtree into ordered heading and text events.
 *
 * Deliberately walks every element rather than a tag allowlist: this design
 * system carries a lot of meaningful copy in `<div>` and `<span>` (phase
 * names, layer labels, stat captions), and a `p`/`li`-only pass silently
 * drops whole sections.
 */
function linearise($, el, events) {
  el.children?.forEach((node) => {
    if (node.type === 'text') {
      const text = tidy(node.data ?? '');
      if (text) events.push({ kind: 'text', text });
      return;
    }
    if (node.type !== 'tag') return;

    const tag = node.tagName.toLowerCase();

    if (HEADINGS.has(tag)) {
      const text = blockText($, node);
      if (text) events.push({ kind: 'heading', text, anchor: $(node).attr('id') || null });
      return;
    }

    if (BLOCK.has(tag)) events.push({ kind: 'break' });
    linearise($, node, events);
    if (BLOCK.has(tag)) events.push({ kind: 'break' });
  });
}

/** Text of a single element with block boundaries respected. */
function blockText($, el) {
  const events = [];
  linearise($, el, events);
  return tidy(
    events.map((e) => (e.kind === 'break' ? ' ' : e.text)).join(' '),
  );
}

/**
 * Split a page into heading-anchored sections.
 *
 * @param {string} html raw page HTML
 * @param {string} url canonical public URL for the page
 * @param {string} source label used for provenance in the UI ('site' | 'dc')
 * @returns {{title: string, sections: Array<{heading: string, anchor: string|null, text: string}>}}
 */
export function extractSections(html, url, source) {
  const $ = cheerio.load(html);

  const title = tidy($('title').first().text()) || url;

  STRIP.forEach((sel) => $(sel).remove());

  // Prefer the semantic content region; fall back to body for pages that
  // predate the convention (several Document Center pages do).
  const hasMain = $('main').length > 0;
  if (!hasMain) CHROME.forEach((sel) => $(sel).remove());
  const root = hasMain ? $('main').first() : $('body').first();

  const events = [];
  linearise($, root.get(0), events);

  const sections = [];
  let current = { heading: '', anchor: null, parts: [] };

  const flush = () => {
    const text = tidy(current.parts.join(' '));
    // Very short fragments are navigation residue, not answers.
    if (text.length >= 80) {
      sections.push({ heading: current.heading, anchor: current.anchor, text });
    }
  };

  for (const event of events) {
    if (event.kind === 'heading') {
      flush();
      current = { heading: event.text, anchor: event.anchor, parts: [] };
    } else if (event.kind === 'text') {
      current.parts.push(event.text);
    } else {
      current.parts.push(' ');
    }
  }
  flush();

  // A page whose prose never sat under a heading still deserves indexing.
  if (sections.length === 0) {
    const whole = blockText($, root.get(0));
    if (whole.length >= 80) {
      sections.push({ heading: title, anchor: null, text: whole });
    }
  }

  return { title, url, source, sections };
}

/**
 * In-scope links for the Document Center crawl: same-origin, under /dc/,
 * HTML only, fragment and query stripped.
 */
export function extractLinks(html, pageUrl, scopePrefix) {
  const $ = cheerio.load(html);
  const found = new Set();

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    if (!href) return;
    let resolved;
    try {
      resolved = new URL(href, pageUrl);
    } catch {
      return;
    }
    resolved.hash = '';
    resolved.search = '';
    const s = resolved.toString();
    if (!s.startsWith(scopePrefix)) return;
    if (/\.(pdf|png|jpe?g|svg|gif|zip|css|js|woff2?)$/i.test(resolved.pathname)) return;
    found.add(s);
  });

  return [...found];
}
