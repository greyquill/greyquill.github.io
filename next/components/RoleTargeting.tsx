'use client';

import { motion } from 'framer-motion';
import { easings } from '@/lib/motion';

const ROLES = [
  { label: 'Head of AI', sub: 'shipping use cases your board will defend' },
  { label: 'Chief Data Officer', sub: 'making data trustworthy at the speed of AI' },
  { label: 'Chief Risk / Compliance Officer', sub: 'turning AI policy into runtime evidence' },
  { label: 'CIO / CTO', sub: 'modernising the foundation underneath the agents' },
];

const PAINS = [
  'Pilots that never reach production because nobody can vouch for the data.',
  'Policies that exist in slide decks but not in the runtime path.',
  'Vendors selling you a "platform" — not a defensible operating model.',
  'A board asking for an answer in two weeks that takes six months to assemble.',
];

export default function RoleTargeting() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="mx-auto max-w-6xl px-5 md:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-4 inline-flex items-center gap-2">
            <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
            Who this is for
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-brand-ink">
            If you are a&hellip;
          </h2>
          <ul className="mt-8 space-y-5">
            {ROLES.map((r, i) => (
              <motion.li
                key={r.label}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ delay: i * 0.08, duration: 0.5, ease: easings.outExpo }}
                className="group"
              >
                <div className="flex items-baseline gap-3">
                  <span aria-hidden className="text-brand-blue text-lg leading-none transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                    →
                  </span>
                  <div>
                    <span className="font-display text-xl md:text-2xl text-brand-ink">{r.label}</span>
                    <span className="block text-brand-ink/65 text-sm md:text-base mt-0.5">{r.sub}</span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-7 lg:pl-6 lg:border-l lg:border-black/5">
          <p className="font-display text-2xl md:text-3xl leading-snug text-brand-ink mb-7">
            &hellip;you already know the pain.
          </p>
          <ul className="space-y-4">
            {PAINS.map((p, i) => (
              <motion.li
                key={p}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5, ease: easings.outExpo }}
                className="flex gap-4 p-5 rounded-xl bg-brand-mist/40 ring-1 ring-black/[0.04] hover:ring-brand-blue/30 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
              >
                <span aria-hidden className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                <span className="text-brand-ink/80 leading-relaxed">{p}</span>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
