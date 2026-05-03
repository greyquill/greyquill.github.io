'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { PREVIOUS_KEY } from './NavigationTracker';

/**
 * Breadcrumb math. A back link is only honoured if the user's
 * previous path is a hierarchical ANCESTOR of the current path —
 * otherwise the breadcrumb would point sideways or downward, which
 * isn't a "back" in URL hierarchy terms.
 *
 * Examples:
 *   isAncestor('/',         '/products')              → true
 *   isAncestor('/products', '/products/gst-copilot')  → true
 *   isAncestor('/products/gst-copilot', '/products')  → false (descendant)
 *   isAncestor('/contact',  '/products')              → false (sibling)
 */
function isAncestor(maybeAncestor: string, current: string): boolean {
  if (maybeAncestor === current) return false;
  if (maybeAncestor === '/') return current !== '/' && current.startsWith('/');
  return current.startsWith(maybeAncestor + '/');
}

/** Compute the canonical parent of a URL path. `/products/x` → `/products`. */
function parentOf(path: string): string {
  if (path === '/' || path === '') return '/';
  const segs = path.split('/').filter(Boolean);
  segs.pop();
  return segs.length === 0 ? '/' : '/' + segs.join('/');
}

/**
 * Subtle breadcrumb shown above the hero on inner pages. Visually
 * quiet, doubles as the differentiator that makes inner pages feel
 * distinct from the homepage.
 *
 * Smart back behaviour: on mount, checks `document.referrer`. If the
 * user came from another same-origin page, the back link points there
 * with a contextual label ("Back to home", "Back to products", "Back to
 * GQData", etc.). If there's no usable referrer (direct visit, new tab,
 * external source), it falls back to the page-defined default.
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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const current = window.location.pathname;

    // Read the path the user actually came from. The tracker uses
    // useLayoutEffect so this is reliably set before our useEffect
    // runs. Falls back to document.referrer for the first navigation
    // of a session, when the tracker has nothing to hand over.
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

    // Only honour the candidate if it's a hierarchical ancestor.
    // Otherwise fall back to the canonical parent of the current
    // path. Either way, the back link goes UP the tree, never sideways
    // or down.
    const target =
      candidate && isAncestor(candidate, current)
        ? candidate
        : parentOf(current);

    if (target && target !== current) {
      const friendly = PATH_LABELS[target];
      setHref(target);
      setLabel(friendly ? `Back to ${friendly}` : 'Back');
    }
  }, []);

  return (
    <div className="mx-auto max-w-6xl px-5 md:px-8 pt-6 md:pt-8">
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-xs text-brand-ink/55 hover:text-brand-blue transition-colors"
      >
        <span aria-hidden className="transition-transform duration-200 ease-out-expo group-hover:-translate-x-0.5">
          ←
        </span>
        <span>{label}</span>
        {currentName && (
          <>
            <span aria-hidden className="text-brand-ink/30">/</span>
            <span className="text-brand-ink/75 font-semibold">{currentName}</span>
          </>
        )}
      </Link>
    </div>
  );
}
