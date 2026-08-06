'use client';

/**
 * The guided walkthrough.
 *
 * Drives the real site rather than a slideshow of it: a pointer moves the way
 * a hand does (see lib/cursor.ts), the page scrolls, the pointer tracks along
 * the text as though reading it, and a character speaks from a cloud beside
 * the section being discussed. Between stops it navigates routes, so the
 * visitor ends up having genuinely seen the site.
 *
 * Mounted once in the root layout, which persists across navigation, and it
 * reads its position from sessionStorage so a route change resumes the tour
 * rather than restarting it.
 *
 * The cursor is written straight to the DOM through a ref. Driving a 60fps
 * animation through React state would re-render the whole overlay, and the
 * cloud beneath it, on every frame.
 *
 * Nothing blocks the page: the overlay is pointer-events-none apart from its
 * own controls, so a visitor can stop watching and start clicking at any
 * moment without hunting for an exit first.
 */

import { useCallback, useEffect, useRef, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { easings } from '@/lib/motion';
import {
  STOPS,
  autoTargets,
  findTarget,
  readingLines,
  readingTimeMs,
  readTour,
  writeTour,
} from '@/lib/tour';
import { dwell, movePoint, type Pt } from '@/lib/cursor';
import TourCharacter from './TourCharacter';

/**
 * True until the first mount after a full document load.
 *
 * Module scope is what makes this work: a client-side route change reuses this
 * module, so the flag stays false and the tour resumes across pages, which it
 * must in order to walk the site. A reload re-evaluates the module and the flag
 * is true again, which is how a refresh ends the tour.
 *
 * sessionStorage alone cannot tell the two apart: it survives both.
 */
let freshDocument = true;

/** Pace of the reading sweep along one line of body text. */
const PER_LINE_MS = 900;

/**
 * Scatter a duration.
 *
 * Constant timings are what made the walkthrough feel like a machine reading a
 * script: every sweep took the same time, every pause was the same length, and
 * the eye picks that up within two stops. Real attention is lumpy, so every
 * duration here is drawn from a range instead of a constant.
 */
const vary = (ms: number, spread = 0.4) => ms * (1 + (Math.random() * 2 - 1) * spread);

export default function SiteTour() {
  const [index, setIndex] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [anchor, setAnchor] = useState<Pt | null>(null);

  const cursorRef = useRef<HTMLDivElement>(null);
  const posRef = useRef<Pt>({ x: 0, y: 0 });
  const cancelRef = useRef<(() => void)[]>([]);
  const runRef = useRef(0);

  const router = useRouter();
  const pathname = usePathname();

  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

  const cancelAll = () => {
    cancelRef.current.forEach((c) => c());
    cancelRef.current = [];
  };

  /** Write the pointer position without re-rendering. */
  const paint = useCallback((p: Pt) => {
    posRef.current = p;
    const el = cursorRef.current;
    if (el) el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0)`;
  }, []);

  const stop = useCallback(() => {
    runRef.current += 1;
    cancelAll();
    writeTour(null);
    setIndex(null);
    setAnchor(null);
  }, []);

  const goTo = useCallback((next: number) => {
    runRef.current += 1;
    cancelAll();
    if (next >= STOPS.length) {
      writeTour(null);
      setIndex(null);
      setAnchor(null);
      return;
    }
    writeTour({ index: next, startedAt: Date.now() });
    setIndex(next);
  }, []);

  // Resume after a client-side route change, but never after a reload.
  useEffect(() => {
    if (freshDocument) {
      freshDocument = false;
      // Reloading is how someone says "stop". Honour it rather than dropping
      // them back into a tour they thought they had escaped.
      writeTour(null);
      setIndex(null);
      return;
    }
    const state = readTour();
    setIndex(state ? state.index : null);
  }, [pathname]);

  // The assistant asking to start.
  useEffect(() => {
    const onStart = () => {
      // Begin from wherever the real pointer last was, if we know, so the
      // first move does not teleport in from the corner.
      paint({ x: window.innerWidth * 0.5, y: window.innerHeight * 0.62 });
      writeTour({ index: 0, startedAt: Date.now() });
      setIndex(0);
      setPaused(false);
    };
    window.addEventListener('gq:tour-start', onStart);
    return () => window.removeEventListener('gq:tour-start', onStart);
  }, [paint]);

  // Play the current stop.
  useEffect(() => {
    if (index === null || index >= STOPS.length || paused) return;
    const current = STOPS[index];

    // Wrong page: navigate, and let this effect run again on arrival.
    if (current.path !== pathname) {
      writeTour({ index, startedAt: Date.now() });
      router.push(current.path);
      return;
    }

    const run = ++runRef.current;
    const alive = () => run === runRef.current;

    const step = <T extends { done: Promise<void>; cancel: () => void }>(anim: T) => {
      cancelRef.current.push(anim.cancel);
      return anim.done;
    };

    (async () => {
      // Let the incoming route paint before measuring anything.
      await new Promise((r) => setTimeout(r, 340));
      if (!alive()) return;

      // A stop either names a section, or walks whatever that page contains.
      // The second case used to fall through to "scroll to the top and wait",
      // which meant four of the nine stops narrated a masthead.
      const named = findTarget(current.match);
      const targets = named ? [named] : autoTargets(3);

      // The cloud must stay readable for the whole stop, so the budget comes
      // from the copy and is then shared across however many sections we walk.
      const budget = readingTimeMs(current.line);

      if (targets.length === 0) {
        const home = { x: window.innerWidth * 0.42, y: window.innerHeight * 0.44 };
        setAnchor(home);
        if (!reduced) await step(movePoint(posRef.current, home, paint, { targetWidth: 300 }));
        if (!alive()) return;
        await step(dwell(posRef.current, budget, paint));
        if (alive()) goTo(index + 1);
        return;
      }

      const perTarget = budget / targets.length;

      for (const target of targets) {
        if (!alive()) return;

        // Scroll first, then measure. Reading coordinates before the scroll
        // settles gives positions wrong by the scroll delta, which is what
        // made the pointer appear to hover over nothing.
        target.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'center' });
        await new Promise((r) => setTimeout(r, reduced ? 60 : vary(760, 0.25)));
        if (!alive()) return;

        const box = target.getBoundingClientRect();
        const headingPoint = {
          x: box.left + Math.min(box.width * 0.35, 180),
          y: box.top + box.height / 2,
        };
        setAnchor(headingPoint);

        if (reduced) {
          await new Promise((r) => setTimeout(r, perTarget));
          continue;
        }

        await step(movePoint(posRef.current, headingPoint, paint, { targetWidth: box.width }));
        if (!alive()) return;
        setClicking(true);
        setTimeout(() => setClicking(false), 260);
        await step(dwell(headingPoint, vary(650, 0.45), paint));
        if (!alive()) return;

        // Track along the prose under this heading, line by line.
        const lines = readingLines(target, 5);
        let spent = 0;
        for (const line of lines) {
          if (!alive()) return;
          if (spent > perTarget) break;
          const from = { x: line.left + 12, y: line.top + line.height / 2 };
          const to = { x: line.right - 8, y: line.top + line.height / 2 };
          await step(movePoint(posRef.current, from, paint, { targetWidth: 60, scale: 0.5 }));
          if (!alive()) return;
          const sweep = vary(PER_LINE_MS, 0.3);
          await step(
            movePoint(from, to, paint, {
              targetWidth: line.width,
              settle: false,
              scale: sweep / 260,
            }),
          );
          if (!alive()) return;

          // Stop at the end of the line before starting the next one. Sweeping
          // continuously from line to line reads as scanning, not reading, and
          // gave the visitor nowhere to catch up.
          const rest = vary(520, 0.55);
          await step(dwell(posRef.current, rest, paint));
          spent += sweep + rest;
        }

        // Whatever of this section's share is left, spend it holding still so
        // the visitor can finish both the page and the cloud.
        if (!alive()) return;
        await step(dwell(posRef.current, Math.max(perTarget - spent, vary(1900, 0.35)), paint));
      }

      if (alive()) goTo(index + 1);
    })();

    return cancelAll;
  }, [index, pathname, paused, reduced, router, goTo, paint]);

  useEffect(() => cancelAll, []);

  if (index === null || index >= STOPS.length) return null;
  const current = STOPS[index];

  // Keep the cloud on screen when the pointer is near an edge.
  const left = anchor
    ? Math.min(Math.max(anchor.x - 12, 16), Math.max(window.innerWidth - 380, 16))
    : 24;
  const top = anchor
    ? Math.min(Math.max(anchor.y + 30, 16), Math.max(window.innerHeight - 210, 16))
    : 24;

  return (
    <div className="fixed inset-0 z-[60] pointer-events-none" aria-live="polite">
      {/* Pointer */}
      {!reduced && (
        <div ref={cursorRef} className="absolute top-0 left-0 will-change-transform">
          <span className="relative block">
            {clicking && (
              <motion.span
                className="absolute -inset-4 rounded-full border-2 border-brand-blue/60"
                initial={{ scale: 0.4, opacity: 0.9 }}
                animate={{ scale: 1.5, opacity: 0 }}
                transition={{ duration: 0.45, ease: 'easeOut' }}
              />
            )}
            <motion.span
              className="block"
              animate={{ scale: clicking ? 0.82 : 1 }}
              transition={{ duration: 0.14 }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M5 2.5l14.5 8.2-6.3 1.6-2.9 6.2z"
                  fill="#fff"
                  stroke="#123B6D"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.span>
          </span>
        </div>
      )}

      {/* Speech cloud */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 12, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -8, scale: 0.98 }}
          transition={{ duration: 0.4, ease: easings.outExpo }}
          className="absolute pointer-events-auto w-[340px] max-w-[calc(100vw-32px)] rounded-2xl rounded-tl-md bg-white/95 backdrop-blur-md border border-brand-blue/15 shadow-xl shadow-brand-blue/10 px-4 py-3.5"
          style={{ left, top }}
        >
          <div className="flex gap-3">
            <TourCharacter name={current.character} />
            <p className="text-[13px] leading-relaxed text-brand-ink flex-1">{current.line}</p>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1" aria-hidden>
              {STOPS.map((_, i) => (
                <span
                  key={i}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    i === index ? 'w-4 bg-brand-blue' : 'w-1 bg-brand-ink/20'
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setPaused((p) => !p)}
                className="text-[11.5px] text-brand-ink/60 hover:text-brand-blue px-2 py-1 rounded-md hover:bg-brand-mist/60 transition-colors"
              >
                {paused ? 'Resume' : 'Pause'}
              </button>
              <button
                onClick={() => goTo(index + 1)}
                className="text-[11.5px] text-brand-blue px-2 py-1 rounded-md hover:bg-brand-mist/60 transition-colors"
              >
                Next
              </button>
              <button
                onClick={stop}
                className="text-[11.5px] text-brand-ink/60 hover:text-brand-ink px-2 py-1 rounded-md hover:bg-brand-mist/60 transition-colors"
              >
                Exit
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
