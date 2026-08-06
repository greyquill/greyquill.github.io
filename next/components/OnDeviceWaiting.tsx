'use client';

/**
 * Everything the visitor sees while the on-device model downloads.
 *
 * Two surfaces, one source of truth:
 *
 *  - `OnDeviceWaitingPanel` is the full panel inside the chat card.
 *  - `OnDeviceIndicator` is a small pill mounted in the root layout, so the
 *    download stays visible after they wander off to read something.
 *
 * Both subscribe to the module-level store in lib/knowledge/ondevice.ts rather
 * than holding their own copy, because the download outlives the chat card and
 * has to keep reporting once that card has unmounted.
 */

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { subscribeOnDevice, type LoadProgress } from '@/lib/knowledge/ondevice';

/**
 * Rotating copy for the wait.
 *
 * A progress bar alone invites someone to sit and watch it, which makes a
 * two-minute download feel like ten. These build anticipation for the thing
 * being downloaded and keep pointing back at the site.
 */
const MESSAGES = [
  'You are about to see what an AI running entirely on your own machine can do.',
  'No API key, no server, no per-question cost. After this it works offline.',
  'The weights are being cached by your browser, so this only ever happens once.',
  'Everything you type next stays on this device. Nothing is sent anywhere.',
  'Meanwhile, have a look around. The download keeps going while you read.',
  'This is the same idea we build for clients: put the model where the data is.',
];

const ROTATE_MS = 5000;

/** Somewhere to go while waiting. Client-side links only, see below. */
const WHILE_YOU_WAIT = [
  { label: 'The platform', href: '/platform/', note: 'Three products, one per phase' },
  { label: 'What we do', href: '/services/', note: 'Three service lines' },
  { label: 'About us', href: '/about-us/', note: 'Who you would be working with' },
];

function humanEta(seconds: number | null): string {
  if (seconds === null || !Number.isFinite(seconds)) return '';
  if (seconds < 45) return 'under a minute';
  const mins = Math.round(seconds / 60);
  return `about ${mins} minute${mins === 1 ? '' : 's'}`;
}

/** Subscribe to the shared download state. */
export function useOnDeviceProgress(): LoadProgress | null {
  const [progress, setProgress] = useState<LoadProgress | null>(null);
  useEffect(() => subscribeOnDevice(setProgress), []);
  return progress;
}

function useRotatingMessage(active: boolean): string {
  const [i, setI] = useState(0);
  useEffect(() => {
    if (!active) return;
    const id = setInterval(() => setI((n) => (n + 1) % MESSAGES.length), ROTATE_MS);
    return () => clearInterval(id);
  }, [active]);
  return MESSAGES[i];
}

export function OnDeviceWaitingPanel({ progress }: { progress: LoadProgress }) {
  const message = useRotatingMessage(true);
  const pct = Math.round((progress.ratio ?? 0.02) * 100);
  const eta = humanEta(progress.etaSeconds);

  return (
    <div className="flex flex-col gap-3">
      <div className="min-h-[42px]">
        <AnimatePresence mode="wait">
          <motion.p
            key={message}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.35 }}
            className="text-sm text-brand-ink leading-relaxed"
          >
            {message}
          </motion.p>
        </AnimatePresence>
      </div>

      <div>
        <div className="h-1.5 w-full rounded-full bg-brand-mist/70 overflow-hidden">
          <div
            className="h-full bg-brand-blue transition-all duration-500 ease-out"
            style={{ width: `${pct}%` }}
          />
        </div>
        <p className="mt-1.5 text-[11.5px] text-brand-ink/50">
          {progress.label}
          {eta && ` · hold tight, ${eta} to go`}
        </p>
      </div>

      {/* next/link, never a plain anchor: a full document load would tear down
          the module holding the in-flight download and cancel it, which is
          precisely what we just invited the visitor to do. */}
      <div className="flex flex-col gap-2 pt-0.5">
        {WHILE_YOU_WAIT.map((w) => (
          <Link
            key={w.href}
            href={w.href}
            prefetch
            className="group/w text-left text-[13px] text-brand-blue bg-brand-mist/50 hover:bg-brand-mist border border-brand-blue/15 hover:border-brand-blue/40 rounded-xl px-3.5 py-2.5 transition-all duration-200 ease-out-expo flex items-center justify-between gap-2"
          >
            <span>
              {w.label}
              <span className="block text-[11.5px] text-brand-ink/45">{w.note}</span>
            </span>
            <span
              aria-hidden
              className="text-brand-blue/60 transition-transform duration-200 ease-out-expo group-hover/w:translate-x-0.5"
            >
              →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}

/**
 * The travelling indicator.
 *
 * Mounted in the root layout so it persists across client-side navigation.
 * Deliberately small and corner-anchored: it is reassurance that the download
 * survived the page change, not a thing to watch.
 */
export function OnDeviceIndicator() {
  const progress = useOnDeviceProgress();
  const message = useRotatingMessage(!!progress);
  const [dismissed, setDismissed] = useState(false);

  const finished = progress?.ratio === 1;

  // Clear itself shortly after the model is ready.
  useEffect(() => {
    if (!finished) return;
    const id = setTimeout(() => setDismissed(true), 6000);
    return () => clearTimeout(id);
  }, [finished]);

  if (!progress || dismissed) return null;
  const pct = Math.round((progress.ratio ?? 0.02) * 100);
  const eta = humanEta(progress.etaSeconds);

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-4 right-4 z-[55] w-[300px] max-w-[calc(100vw-32px)] rounded-2xl bg-white/95 backdrop-blur-md border border-brand-blue/15 shadow-xl shadow-brand-blue/10 px-4 py-3"
      role="status"
      aria-live="polite"
    >
      <div className="flex items-center gap-2.5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/on-device-ai.png"
          alt=""
          width={20}
          height={20}
          className="rounded shrink-0 mix-blend-multiply"
        />
        <span className="text-[12px] font-medium text-brand-ink flex-1">
          {finished ? 'On-device model ready' : 'Preparing your on-device AI'}
        </span>
        <button
          onClick={() => setDismissed(true)}
          className="text-brand-ink/35 hover:text-brand-ink text-[15px] leading-none px-1"
          aria-label="Hide"
        >
          ×
        </button>
      </div>

      <div className="mt-2 h-1 w-full rounded-full bg-brand-mist/70 overflow-hidden">
        <div
          className="h-full bg-brand-blue transition-all duration-500 ease-out"
          style={{ width: `${pct}%` }}
        />
      </div>

      <p className="mt-1.5 text-[11px] text-brand-ink/50 leading-snug">
        {finished ? 'Head back to the chat and ask it something.' : message}
        {!finished && eta && ` (${eta})`}
      </p>
    </motion.div>
  );
}
