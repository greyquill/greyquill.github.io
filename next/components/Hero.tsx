'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { easings } from '@/lib/motion';
import { CALENDLY_URL } from '@/lib/links';
import HeroChatbot from './HeroChatbot';
import MobileChatbotFAB from './MobileChatbotFAB';

export default function Hero() {
  return (
    <section className="relative overflow-hidden isolate">
      {/* Base wash. Top fades in from the (white) header, bottom fades into
          the next section's mist tone, so the section has no hard edges. */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easings.outExpo }}
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, #ffffff 0%, #f4fbff 40%, #eaf6fc 100%)',
        }}
      />

      {/* Dot grid, full width with a soft radial fade. Additionally
          masked at top and bottom so it dissolves cleanly into the
          header above and the next section below. */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.30] pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
          backgroundSize: '30px 30px',
          maskImage:
            'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%), linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          WebkitMaskImage:
            'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%), linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)',
          maskComposite: 'intersect',
          WebkitMaskComposite: 'source-in',
        }}
      />

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 py-20 md:py-32">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Left: text. Slide-only on mount so content is readable even if
              JS or animations fail; opacity is intentionally not gated. */}
          <motion.div
            initial={{ y: 10 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5, ease: easings.outExpo }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-6">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Compliant AI · Trusted Data
            </div>

            <h1 className="font-display font-semibold text-[38px] sm:text-5xl md:text-6xl lg:text-[64px] xl:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              Compliant AI with{' '}
              <span className="text-brand-blue">governance</span>{' '}
              you can prove.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-xl leading-[1.55]">
              Greyquill helps regulated enterprises put AI into production without losing the audit. Deployed in your environment, built on IBM foundations, designed so the audit answer is one query, not three weeks.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 bg-brand-ink text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/20 hover:bg-brand-blue"
              >
                Book a discovery call
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
              </a>
              <Link
                href="#approach"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See how it works
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↓</span>
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-brand-ink/60">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Built on IBM foundations
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Senior engineers · 50+ years combined
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                BFSI · telecom · retail · insurance
              </span>
            </div>
          </motion.div>

          {/* Right: chatbot. Doubles as a "talk to us" surface and a
             listening channel for raw qualitative signal from anonymous
             visitors. Hidden below `lg` so the embedded card doesn't
             compete with hero text on small viewports — on those screens
             the FAB below opens the same chatbot in a bottom sheet. */}
          <div className="hidden lg:block lg:col-span-5">
            <HeroChatbot />
          </div>
        </div>
      </div>
      {/* Floating chat icon for tablet/mobile. Renders nothing on `lg`+. */}
      <MobileChatbotFAB />
    </section>
  );
}
