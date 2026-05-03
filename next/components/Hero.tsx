'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { easings } from '@/lib/motion';
import { CALENDLY_URL } from '@/lib/links';
import HeroChatbot from './HeroChatbot';

/**
 * Hero, text-led. The hero photograph has been retired from this section
 * (it lives elsewhere on the site). The visual interest is carried by an
 * animated background: drifting brand-blue orbs distributed across the
 * full width, a faint dot grid with a soft radial fade, and a slow shine
 * sweep. All animation is transform/opacity only, GPU-cheap at 60fps.
 */

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
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 min-h-[78vh] md:min-h-[82vh] flex items-center py-16 md:py-20">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center w-full">
          {/* Left: text — single section-level fade only, no stagger */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
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
                  We help regulated enterprises ship trusted, governed AI by fixing the data foundation first. Build Products, accelerators, and senior advisors to assist Heads of AI, CDOs, and Chief Risk Officers in their AI journey.

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
                Trusted across BFSI, telecom, retail
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Senior advisors, not staffed teams
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Built on enterprise-grade foundations
              </span>
            </div>
          </motion.div>

          {/* Right: chatbot demo */}
          <div className="lg:col-span-5">
            <HeroChatbot />
          </div>
        </div>
      </div>
    </section>
  );
}
