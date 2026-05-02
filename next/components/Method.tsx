'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { easings } from '@/lib/motion';

const PHASES = [
  { n: 1, name: 'Illuminate', d: 'Business context map' },
  { n: 2, name: 'Interview', d: 'Stakeholder needs matrix' },
  { n: 3, name: 'Ideate', d: 'Solution options' },
  { n: 4, name: 'Investigate', d: 'Technical feasibility' },
  { n: 5, name: 'Illustrate', d: 'Working prototype' },
  { n: 6, name: 'Integrate', d: 'Project blueprint' },
  { n: 7, name: 'Initiate', d: 'Roadmap & kickoff' },
];

export default function Method() {
  return (
    <Section
      eyebrow="The Greyquill Method"
      title="How we de-risk every engagement."
      intro="Seven phases, sequenced. We don't write a line of production code until we know — and you know — exactly what should be built and why."
    >
      <div className="grid grid-cols-2 md:grid-cols-7 gap-3 md:gap-4">
        {PHASES.map((p, i) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: i * 0.05, duration: 0.5, ease: easings.outExpo }}
            className="group relative bg-white rounded-xl p-4 md:p-5 ring-1 ring-black/[0.05] hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
          >
            <div className="text-[10px] font-semibold tracking-[0.2em] text-brand-blue/70 mb-2">
              0{p.n}
            </div>
            <div className="font-display text-base md:text-lg text-brand-ink">{p.name}</div>
            <div className="text-xs md:text-sm text-brand-ink/60 mt-1 leading-snug">{p.d}</div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
