'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { easings } from '@/lib/motion';

export default function FinalCTA() {
  return (
    <section className="py-24 md:py-32 bg-brand-ink text-white relative overflow-hidden">
      {/* Signature motion: a soft, slow drifting orb behind the copy */}
      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.4 }}
        className="absolute -top-40 -right-32 h-[480px] w-[480px] rounded-full bg-brand-blue/40 blur-[120px]"
      />
      <motion.div
        aria-hidden
        animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-32 -left-20 h-[360px] w-[360px] rounded-full bg-brand-blue/25 blur-[100px]"
      />

      <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: easings.outExpo }}
          className="font-display text-4xl md:text-6xl leading-[1.05] tracking-tight"
        >
          Let&apos;s design the AI foundation <br className="hidden md:block" />
          your strategy actually deserves.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.12, duration: 0.6, ease: easings.outExpo }}
          className="mt-6 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          A 30-minute discovery call. No pitch deck. We listen, ask the hard questions,
          and tell you, honestly, whether we&apos;re the right partner.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.22, duration: 0.6, ease: easings.outExpo }}
          className="mt-9 flex flex-wrap items-center justify-center gap-4"
        >
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/10"
          >
            Book a discovery call
            <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
          </Link>
          <Link
            href="/case-studies"
            className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors"
          >
            Read case studies
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
