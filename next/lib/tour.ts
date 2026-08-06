/**
 * Guided walkthrough of the site.
 *
 * The assistant can answer a question, but a visitor who does not know what to
 * ask learns nothing from it. The tour is the other half: it drives the site
 * itself, moving a cursor, reading, scrolling and following links, so someone
 * can see what the business does without typing anything.
 *
 * The copy is written as one argument rather than nine captions. Each stop
 * ends somewhere the next one begins, because a list of features persuades
 * nobody and a visitor who loses the thread closes the tab.
 *
 * State lives in sessionStorage rather than React, because the tour navigates
 * between routes and the component that runs it is torn down and rebuilt each
 * time. Session scope is deliberate: a tour should not resume days later in a
 * new tab.
 */

/** Which character appears alongside a stop. See TourCharacter. */
export type CharacterKey =
  | 'guide'
  | 'broken'
  | 'compass'
  | 'data'
  | 'shield'
  | 'agent'
  | 'sector'
  | 'team'
  | 'spark';

export type Stop = {
  /** Route this stop lives on. The tour navigates if not already there. */
  path: string;
  /**
   * Text to find in a heading on that page. Matched against the live DOM at
   * runtime rather than a CSS selector, because the headings are rendered by
   * shared components and a selector would break the first time one is
   * refactored. Omit to simply land at the top of the page.
   */
  match?: string;
  /** What the assistant says at this stop. */
  line: string;
  /** Who appears beside it. */
  character: CharacterKey;
  /**
   * Whether the cursor should trace the section's text as though reading it.
   * Off for stops that are scene-setting rather than pointing at something.
   */
  read?: boolean;
};

export const STOPS: Stop[] = [
  {
    path: '/',
    character: 'guide',
    line: 'Every enterprise has been promised that AI changes everything. Most have watched it stall somewhere between a promising pilot and anything a regulator would accept. Let me show you what we do about that.',
  },
  {
    path: '/',
    match: 'fail',
    read: true,
    character: 'broken',
    line: 'Start with the uncomfortable number. Of every hundred GenAI ideas an enterprise begins, roughly five reach production. The other ninety-five do not fail mysteriously, they fail in three predictable places.',
  },
  {
    path: '/',
    match: 'Method',
    read: true,
    character: 'compass',
    line: 'So we built the method backwards from those failures. One phase for each: get the data ready to be trusted, turn your policy into controls that can be proven, then ship with oversight that survives contact with real users.',
  },
  {
    path: '/platform/',
    character: 'data',
    line: 'Each phase has a product behind it, because a method nobody can execute is just a slide. This is the platform.',
  },
  {
    path: '/products/',
    read: true,
    character: 'shield',
    line: 'GQData makes the evidence an AI system stands on. GQ Govern turns written policy into controls the system can show it followed. GQ Agents puts the use case in front of people with oversight built in.',
  },
  {
    path: '/services/',
    read: true,
    character: 'agent',
    line: 'Some teams want the products. Others want us in the room building it with them. Three service lines exist for that, run by the same senior people who wrote the software.',
  },
  {
    path: '/industries/',
    read: true,
    character: 'sector',
    line: 'We work where being right is not enough and you have to prove you were right. Banking and payments, telecom, insurance, retail. Places where an unexplainable model is not a clever shortcut, it is a finding.',
  },
  {
    path: '/about-us/',
    read: true,
    character: 'team',
    line: 'Behind all of it is a deliberately senior team, an IBM Business Partner, working out of Bengaluru. You would be talking to the people who build it, not an account layer in front of them.',
  },
  {
    path: '/contact/',
    character: 'spark',
    line: 'That is the whole argument. If any of it sounds like the problem on your desk, thirty minutes with us will tell you quickly whether we can help. Or ask me anything, I am still here.',
  },
];

const KEY = 'gq-tour';

export type TourState = { index: number; startedAt: number };

export function readTour(): TourState | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = sessionStorage.getItem(KEY);
    return raw ? (JSON.parse(raw) as TourState) : null;
  } catch {
    return null;
  }
}

export function writeTour(state: TourState | null): void {
  if (typeof window === 'undefined') return;
  try {
    if (state) sessionStorage.setItem(KEY, JSON.stringify(state));
    else sessionStorage.removeItem(KEY);
  } catch {
    // Private browsing can refuse storage. The tour then simply does not
    // survive a navigation, which is better than throwing.
  }
}

/**
 * How long the cloud must stay up for this line to be readable.
 *
 * Average adult prose reading is roughly 200 words per minute, and a visitor
 * is also watching the page move, so this runs deliberately slower than that
 * and never drops below a floor. The previous fixed 2.6s dwell was written
 * against one-line captions and became unreadable once the copy became a
 * narrative.
 */
export function readingTimeMs(text: string): number {
  const words = text.trim().split(/\s+/).length;
  return Math.min(Math.max((words / 150) * 60_000, 6500), 18_000);
}

/**
 * The sections to walk on a stop that names no specific heading.
 *
 * Without this a stop with no `match` scrolled to the top of the page and sat
 * there, which is the opposite of a tour: the visitor was told about products
 * while looking at a masthead. Picking the page's own headings means the tour
 * moves through whatever that page actually contains, and keeps working when
 * the page is edited.
 */
export function autoTargets(limit = 3): HTMLElement[] {
  if (typeof document === 'undefined') return [];
  const main = document.querySelector('main') ?? document.body;
  return Array.from(main.querySelectorAll<HTMLElement>('h2'))
    .filter((h) => {
      const text = (h.textContent ?? '').trim();
      const box = h.getBoundingClientRect();
      return text.length > 3 && box.width > 0;
    })
    .slice(0, limit);
}

/**
 * Find the element a stop points at.
 *
 * Scans headings for the match text. Returns null when nothing matches, which
 * the caller treats as "stay where you are" rather than an error: a missing
 * section should never break the tour.
 */
export function findTarget(match?: string): HTMLElement | null {
  if (typeof document === 'undefined' || !match) return null;
  const needle = match.toLowerCase();
  const headings = Array.from(document.querySelectorAll<HTMLElement>('h1, h2, h3'));
  const heading =
    headings.find((h) => (h.textContent ?? '').toLowerCase().includes(needle)) ?? null;
  return heading;
}

/**
 * The line boxes of the prose belonging to a section, in reading order.
 *
 * Uses Range rectangles rather than element boxes, so a wrapped paragraph
 * yields one rect per visual line. That is what lets the cursor travel along
 * the text the way an eye does instead of hopping between blocks.
 */
export function readingLines(heading: HTMLElement, limit = 6): DOMRect[] {
  const out: DOMRect[] = [];
  // The heading itself, then whatever prose immediately follows it.
  const blocks: Element[] = [heading];
  let node: Element | null = heading.nextElementSibling;
  let guard = 0;
  while (node && blocks.length < 4 && guard++ < 8) {
    if (/^(P|UL|OL|DIV)$/.test(node.tagName) && (node.textContent ?? '').trim().length > 40) {
      blocks.push(node);
    }
    node = node.nextElementSibling;
  }

  for (const block of blocks) {
    const range = document.createRange();
    range.selectNodeContents(block);
    for (const rect of Array.from(range.getClientRects())) {
      // Skip slivers from inline elements and empty wrappers.
      if (rect.width > 60 && rect.height > 6) out.push(rect);
      if (out.length >= limit) return out;
    }
    range.detach?.();
  }
  return out;
}
