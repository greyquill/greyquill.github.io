'use client';

import { usePathname } from 'next/navigation';
import { useLayoutEffect } from 'react';

/**
 * Mounts once in the root layout. On every pathname change, records
 * the previous path so any component on a subsequent page can know
 * where the user came from — without relying on `document.referrer`,
 * which Next.js client-side navigation does not update.
 *
 * Uses `useLayoutEffect` so the writes complete BEFORE any sibling
 * `useEffect` (e.g. ProductBackLink) reads — avoids a flash of the
 * wrong label.
 */

const CURRENT_KEY = 'gq:nav-current';
export const PREVIOUS_KEY = 'gq:nav-previous';

export default function NavigationTracker() {
  const pathname = usePathname();
  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    try {
      const old = sessionStorage.getItem(CURRENT_KEY);
      if (old && old !== pathname) {
        sessionStorage.setItem(PREVIOUS_KEY, old);
      }
      sessionStorage.setItem(CURRENT_KEY, pathname);
    } catch {
      // sessionStorage can throw in private/secure contexts — ignore.
    }
  }, [pathname]);
  return null;
}
