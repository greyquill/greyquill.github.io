'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { heroStagger, riseIn, easings, durations } from '@/lib/motion';

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Subtle gradient wash — animates only opacity, no layout cost */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: easings.outExpo }}
        className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-mist via-white to-white"
      />

      <div className="mx-auto max-w-6xl px-5 md:px-8 pt-16 pb-20 md:pt-24 md:pb-28 grid md:grid-cols-12 gap-10 items-center">
        <motion.div
          variants={heroStagger}
          initial="hidden"
          animate="visible"
          className="md:col-span-7"
        >
          <motion.div
            variants={riseIn}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-5"
          >
            <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
            Compliant AI · Trusted Data
          </motion.div>

          <motion.h1
            variants={riseIn}
            className="font-display text-4xl md:text-6xl leading-[1.05] text-brand-ink"
          >
            Compliant AI starts with{' '}
            <span className="relative inline-block">
              <span className="relative z-10">governance you can prove.</span>
              <motion.span
                aria-hidden
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55, duration: durations.long, ease: easings.outExpo }}
                className="absolute left-0 right-0 bottom-1 h-[6px] md:h-[10px] bg-brand-blue/15 -z-0"
              />
            </span>
          </motion.h1>

          <motion.p
            variants={riseIn}
            className="mt-6 text-lg md:text-xl text-brand-ink/70 max-w-2xl leading-relaxed"
          >
            We help regulated enterprises ship trusted, governed AI — by fixing the
            data foundation first. Products, accelerators, and senior advisors for
            Heads of AI, CDOs, and Chief Risk Officers.
          </motion.p>

          <motion.div variants={riseIn} className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-3 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20"
            >
              Book a discovery call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
            </Link>
            <Link
              href="#approach"
              className="inline-flex items-center gap-2 text-brand-ink/80 hover:text-brand-blue font-semibold px-3 py-3 transition-colors"
            >
              See how it works
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.9, ease: easings.outExpo }}
          className="md:col-span-5 relative"
        >
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden ring-1 ring-black/5 shadow-2xl shadow-brand-blue/10">
            <Image
              src="/images/hero/banner-pic.jpeg"
              alt="Greyquill — engineering trusted, governed AI for regulated enterprises"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
            {/* Tiny decorative accent — the "signature" detail */}
            <motion.div
              aria-hidden
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6, ease: easings.outExpo }}
              className="absolute bottom-4 left-4 right-4 bg-white/85 backdrop-blur-sm rounded-lg px-4 py-3 text-xs text-brand-ink/80 ring-1 ring-black/5"
            >
              <span className="font-semibold text-brand-blue">Trusted data</span> ·
              real-time lineage · governed model lifecycle
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
