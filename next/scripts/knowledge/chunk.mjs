/**
 * Sections -> retrieval chunks.
 *
 * Chunks carry their heading inline because the embedding sees only the
 * chunk text: a passage that reads "It reconciles invoices nightly" is
 * unmatchable without "GST Co-Pilot / Reconciliation engine" attached.
 */

/** Target chunk size in characters. Comfortably inside the model's 256-token window. */
const TARGET = 900;

/** Carry-over between split chunks so a sentence spanning the seam stays findable. */
const OVERLAP = 150;

/** Below this a chunk is too thin to answer anything. */
const MIN_CHARS = 80;

function splitLong(text) {
  if (text.length <= TARGET) return [text];

  const out = [];
  let start = 0;

  while (start < text.length) {
    let end = Math.min(start + TARGET, text.length);

    // Prefer a sentence boundary near the end of the window.
    if (end < text.length) {
      const window = text.slice(start, end);
      const boundary = Math.max(
        window.lastIndexOf('. '),
        window.lastIndexOf('? '),
        window.lastIndexOf('! '),
      );
      if (boundary > TARGET * 0.5) end = start + boundary + 1;
    }

    out.push(text.slice(start, end).trim());
    if (end >= text.length) break;
    start = Math.max(end - OVERLAP, start + 1);
  }

  return out.filter((s) => s.length >= MIN_CHARS);
}

/**
 * @param {Array<{title: string, url: string, source: string, sections: Array}>} pages
 * @returns {Array<{id: number, title: string, heading: string, url: string, source: string, text: string}>}
 */
export function buildChunks(pages) {
  const chunks = [];
  const seen = new Set();

  for (const page of pages) {
    for (const section of page.sections) {
      for (const body of splitLong(section.text)) {
        // Heading context is prepended for the embedding and kept in `text`
        // so the runtime can show it verbatim.
        const heading = section.heading || page.title;
        const text = `${heading}. ${body}`;

        // Boilerplate repeated across pages (CTAs, strap lines) would
        // otherwise crowd out real answers.
        const fingerprint = text.slice(0, 200).toLowerCase();
        if (seen.has(fingerprint)) continue;
        seen.add(fingerprint);

        chunks.push({
          id: chunks.length,
          title: page.title,
          heading,
          url: section.anchor ? `${page.url}#${section.anchor}` : page.url,
          source: page.source,
          text,
        });
      }
    }
  }

  return chunks;
}
