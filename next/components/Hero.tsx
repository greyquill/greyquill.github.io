'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroStagger, riseIn, easings } from '@/lib/motion';

/**
 * Hero — large image extends from center to right edge of the viewport,
 * fading on its left edge into the page background. Text floats over the
 * faded portion. On mobile, image stacks below text.
 *
 * Motion: choreographed entrance. The image scales subtly while easing
 * in — feels like the page is settling into place rather than appearing.
 */

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white">
      {/* Background wash (only animates opacity) */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easings.outExpo }}
        className="absolute inset-0 -z-20 bg-gradient-to-br from-brand-mist/60 via-white to-white"
      />

      {/* Hero image — full bleed on the right, fades on its left edge */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: easings.outExpo }}
        className="absolute inset-y-0 right-0 -z-10 w-full md:w-[68%] lg:w-[62%]"
      >
        <Image
          src="/images/hero/banner-pic.jpeg"
          alt=""
          fill
          priority
          sizes="(min-width: 768px) 68vw, 100vw"
          className="object-cover object-center"
        />
        {/* Left-edge fade into page background — the "text overlap" effect */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-r from-white via-white/60 to-transparent md:from-white md:via-white/85 md:to-transparent"
          style={{
            // Keep the fade controlled so the right side stays vivid
            backgroundImage:
              'linear-gradient(to right, rgba(255,255,255,0.98) 0%, rgba(255,255,255,0.92) 28%, rgba(255,255,255,0.55) 50%, rgba(255,255,255,0) 75%)',
          }}
        />
        {/* Subtle vignette on the right for depth */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            backgroundImage:
              'radial-gradient(ellipse at 80% 50%, rgba(11,79,136,0.12), transparent 60%)',
          }}
        />
      </motion.div>

      {/* Content */}
      <div className="relative mx-auto max-w-6xl px-5 md:px-8 min-h-[78vh] md:min-h-[86vh] flex items-center py-16 md:py-24">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="max-w-2xl md:max-w-[640px]"
        >
          <motion.div
            variants={riseIn}
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-6"
          >
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Compliant AI · Trusted Data
          </motion.div>

          <motion.h1
            variants={riseIn}
            className="font-display font-semibold text-[42px] sm:text-5xl md:text-[64px] lg:text-7xl leading-[1.02] tracking-[-0.02em] text-brand-ink"
          >
            Compliant AI starts with{' '}
            <span className="text-brand-blue">governance</span>{' '}
            you can prove.
          </motion.h1>

          <motion.p
            variants={riseIn}
            className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-xl leading-[1.55]"
          >
            We help regulated enterprises ship trusted, governed AI by fixing
            the data foundation first. Products, accelerators, and senior advisors
            for Heads of AI, CDOs, and Chief Risk Officers.
          </motion.p>

          <motion.div variants={riseIn} className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-brand-ink text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/20 hover:bg-brand-blue"
            >
              Book a discovery call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#approach"
              className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
            >
              See how it works
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">↓</span>
            </Link>
          </motion.div>

          {/* Subtle credential strip — text-only, no fabricated metrics */}
          <motion.div
            variants={riseIn}
            className="mt-12 pt-7 border-t border-black/[0.07] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-brand-ink/60"
          >
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
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
