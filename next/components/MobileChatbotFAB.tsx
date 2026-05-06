'use client';

/**
 * Mobile-only floating chat button. On screens below `lg` (where the
 * embedded HeroChatbot card is hidden), this renders a small circular
 * FAB pinned to the bottom-right that opens the same chatbot UI inside
 * a bottom sheet. Same component, same data, presentation tuned for
 * a small viewport — desktop is unchanged.
 */

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { easings } from '@/lib/motion';
import HeroChatbot from './HeroChatbot';

export default function MobileChatbotFAB() {
  const [open, setOpen] = useState(false);

  // Lock body scroll while the sheet is open so the page underneath
  // doesn't scroll when the user touches the chat surface.
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // ESC closes the sheet
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <>
      {/* FAB */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open chat"
        aria-expanded={open}
        className="lg:hidden fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-brand-ink text-white shadow-xl shadow-brand-blue/25 hover:bg-brand-blue transition-colors"
        style={{
          // Respect iOS safe-area at the bottom
          marginBottom: 'env(safe-area-inset-bottom, 0px)',
        }}
      >
        <span className="relative flex h-6 w-6 items-center justify-center" aria-hidden>
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a4 4 0 0 1-4 4H8l-5 4V7a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4z" />
          </svg>
          {/* Pulse to draw attention without being noisy */}
          <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-400 ring-2 ring-brand-ink" />
        </span>
      </button>

      {/* Bottom sheet */}
      <AnimatePresence>
        {open && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-sm"
              onClick={() => setOpen(false)}
              aria-hidden
            />
            <motion.div
              key="sheet"
              role="dialog"
              aria-modal="true"
              aria-label="Greyquill chat"
              initial={{ y: '100%' }}
              animate={{ y: 0 }}
              exit={{ y: '100%' }}
              transition={{ duration: 0.32, ease: easings.outExpo }}
              className="lg:hidden fixed inset-x-0 bottom-0 z-50 max-h-[88dvh] flex flex-col bg-white rounded-t-2xl shadow-2xl"
              style={{ paddingBottom: 'env(safe-area-inset-bottom, 0px)' }}
            >
              <div className="flex items-center justify-between px-4 pt-3 pb-2">
                <span className="block h-1 w-10 rounded-full bg-black/15 mx-auto" aria-hidden />
              </div>
              <div className="flex items-center justify-between px-4 pb-2">
                <span className="font-display font-semibold text-sm text-brand-ink">
                  Ask us anything
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close chat"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full text-brand-ink/70 hover:bg-black/5"
                >
                  <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden>
                    <path d="M5 5l10 10M15 5L5 15" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 min-h-0 overflow-hidden px-3 pb-3">
                {/* Reuse the same chatbot UI inside the sheet. The wrapper
                    drops max-width/margin constraints so it fills the sheet. */}
                <div className="h-full">
                  <HeroChatbot variant="sheet" />
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
