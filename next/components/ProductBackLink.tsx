'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PREVIOUS_KEY } from './NavigationTracker';

/**
 * Subtle breadcrumb shown above the hero on inner pages.
 *
 * Behaviour: pop the browser history (`history.back()`) on click so
 * back means back, not "swap to the most recent prior page". The link
 * still renders with an `href` pointing at the previous tracked path
 * so middle-click and right-click open-in-new-tab work, and so the
 * label can read "Back to industries" instead of just "Back". When
 * there is no session history (direct entry, hard refresh into this
 * page), the link falls back to navigating to the page-defined
 * fallback.
 */

const PATH_LABELS: Record<string, string> = {
  '/':                       'home',
  '/products':               'products',
  '/products/clarity-ai':    'ClarityAI',
  '/products/gqdata':        'GQData',
  '/products/agents':        'GQ Agents',
  '/products/gst-copilot':   'GST Co-Pilot',
  '/industries':             'industries',
  '/about-us':               'about',
  '/contact':                'contact',
  '/partnerships':           'partnerships',
  '/news':                   'news',
  '/support':                'support',
};

type Props = {
  /** Default destination when no usable referrer is found. */
  fallbackHref?: string;
  /** Default label when no usable referrer is found. */
  fallbackLabel?: string;
  /** Current page name shown after the slash. */
  currentName?: string;
};

export default function ProductBackLink({
  fallbackHref = '/products',
  fallbackLabel = 'Back to products',
  currentName,
}: Props) {
  const [href, setHref] = useState(fallbackHref);
  const [label, setLabel] = useState(fallbackLabel);
  // True when there is a tracked previous path inside this session,
  // which means `history.back()` will land somewhere meaningful. Stays
  // false on direct entry, so the link falls back to a normal navigation.
  const [hasSessionHistory, setHasSessionHistory] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const current = window.location.pathname;

    let candidate: string | null = null;
    try {
      const tracked = sessionStorage.getItem(PREVIOUS_KEY);
      if (tracked && tracked !== current) candidate = tracked;
    } catch {
      // ignore
    }
    if (!candidate && document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.origin === window.location.origin) {
          const path = refUrl.pathname.replace(/\/$/, '') || '/';
          if (path !== current) candidate = path;
        }
      } catch {
        // ignore
      }
    }

    if (candidate) {
      const friendly = PATH_LABELS[candidate];
      setHref(candidate);
      setLabel(friendly ? `Back to ${friendly}` : 'Back');
      setHasSessionHistory(true);
    }
  }, []);

  function onClick(e: React.MouseEvent<HTMLAnchorElement>) {
    // Let users open the previous page in a new tab / window via the
    // usual modifier clicks. Only intercept the plain left click.
    if (
      e.button !== 0 ||
      e.metaKey ||
      e.ctrlKey ||
      e.shiftKey ||
      e.altKey
    ) {
      return;
    }
    if (!hasSessionHistory) return;
    e.preventDefault();
    window.history.back();
  }

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 pt-4 md:pt-5 -mb-8 md:-mb-10 relative z-10">
      <div className="inline-flex items-center gap-2 text-xs text-brand-ink/55">
        <Link
          href={href}
          onClick={onClick}
          className="group inline-flex items-center gap-2 hover:text-brand-blue transition-colors"
        >
          <span aria-hidden className="transition-transform duration-200 ease-out-expo group-hover:-translate-x-0.5">
            ←
          </span>
          <span>{label}</span>
        </Link>
        {currentName && (
          <>
            <span aria-hidden className="text-brand-ink/30">/</span>
            <span className="text-brand-ink/75 font-semibold">{currentName}</span>
          </>
        )}
      </div>
    </div>
  );
}
