'use client';

import { motion } from 'framer-motion';
import Section from './Section';
import { easings } from '@/lib/motion';

/**
 * The Greyquill Method, redrawn as a swim-lane flow.
 *
 * Three lanes, each a workstream we own end to end. Work units inside
 * each lane chain left to right. The whole thing sits between a
 * "Today" entry state and a "KPIs that move" exit state.
 *
 * The lanes ARE the workstreams. No more 7-phase grid; no more
 * separate workstream cards underneath. One picture, one story.
 */

const TODAY = ['Siloed data', 'Broken processes', 'Policy on paper'];

const LANES: {
  name: string;
  thesis: string;
  steps: { title: string; sub: string }[];
}[] = [
  {
    name: 'Trusted data foundation',
    thesis: 'AI is only as good as the data it stands on.',
    steps: [
      { title: 'Unify master data', sub: 'Golden record across systems' },
      { title: 'Repair quality at source', sub: 'Cleansing, dedupe, validation' },
      { title: 'Active lineage & sensitivity', sub: 'Queryable provenance and PII classification' },
    ],
  },
  {
    name: 'Re-imagined process',
    thesis: 'We do not stitch AI onto broken APIs.',
    steps: [
      { title: 'Discover the real process', sub: 'Process intelligence from event logs' },
      { title: 'Redesign with AI inside', sub: 'Capability mapping, decision rights' },
      { title: 'Human + agent operating model', sub: 'Roles, hand-offs, escalation paths' },
    ],
  },
  {
    name: 'Governed activation',
    thesis: 'Policy in a slide deck is not a control.',
    steps: [
      { title: 'Evaluation harness', sub: 'Eval sets, red team, drift checks' },
      { title: 'Evidence packs at runtime', sub: 'One-query audit answers' },
      { title: 'Change management & adoption', sub: 'Operating model your team owns' },
    ],
  },
];

const KPIS = [
  'Case cycle time',
  'Cost-to-serve',
  'Audit pass rate',
  'Model approval velocity',
  'First-contact resolution',
  'Pilot to production rate',
];

function Arrow() {
  return (
    <svg viewBox="0 0 32 16" className="w-7 h-4 text-brand-blue/60 shrink-0" aria-hidden>
      <path d="M0 8 H 24 M 18 3 L 24 8 L 18 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function DownArrow() {
  return (
    <svg viewBox="0 0 16 32" className="h-7 w-4 text-brand-blue/50" aria-hidden>
      <path d="M8 0 V 24 M 3 18 L 8 24 L 13 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Method() {
  return (
    <Section
      eyebrow="The Greyquill Method"
      title={
        <>
          From <span className="text-brand-blue">policy</span> to <span className="text-brand-blue">proof</span>,<br />
          across one pipeline.
        </>
      }
      intro="We do not bolt AI on top of broken processes. We rebuild the pipeline. Trusted data, re-imagined process, governed activation. So the KPIs you committed to actually move."
    >
      {/* TODAY */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: easings.outExpo }}
        className="max-w-3xl mx-auto bg-white rounded-2xl ring-1 ring-black/[0.06] p-5 md:p-6 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Today
        </span>
        {TODAY.map((t) => (
          <span key={t} className="text-sm md:text-base text-brand-ink/75">
            {t}
          </span>
        ))}
      </motion.div>

      <div className="flex justify-center my-3">
        <DownArrow />
      </div>

      {/* LANES */}
      <div className="space-y-6">
        {LANES.map((lane, li) => (
          <motion.div
            key={lane.name}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ delay: li * 0.1, duration: 0.6, ease: easings.outExpo }}
            className="bg-white rounded-2xl ring-1 ring-black/[0.06] p-5 md:p-7"
          >
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-start">
              {/* Lane header (left) */}
              <div className="lg:col-span-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-2">
                  Workstream 0{li + 1}
                </div>
                <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink leading-tight">
                  {lane.name}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/65 leading-snug">{lane.thesis}</p>
              </div>

              {/* Steps (right) */}
              <ol className="lg:col-span-9 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 md:gap-2">
                {lane.steps.map((s, si) => (
                  <li key={s.title} className="contents">
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.4 }}
                      transition={{ delay: 0.15 + si * 0.1, duration: 0.45, ease: easings.outExpo }}
                      className="group rounded-xl bg-brand-mist/45 ring-1 ring-black/[0.04] p-3.5 md:p-4 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
                    >
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-brand-blue/70">
                          {String(si + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display font-semibold text-[15px] text-brand-ink leading-tight">
                          {s.title}
                        </span>
                      </div>
                      <div className="text-[12.5px] text-brand-ink/65 leading-snug">{s.sub}</div>
                    </motion.div>
                    {si < lane.steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center">
                        <Arrow />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="flex justify-center my-3">
        <DownArrow />
      </div>

      {/* KPIs that move */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.55, ease: easings.outExpo }}
        className="bg-brand-ink text-white rounded-2xl p-6 md:p-8"
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/60">
            KPIs that move
          </span>
          <span className="text-xs text-white/55">Pick the ones your board cares about.</span>
        </div>
        <ul className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-3">
          {KPIS.map((k) => (
            <li key={k} className="flex items-center gap-2.5 text-sm md:text-[15px] text-white/90">
              <span aria-hidden className="h-1 w-3 rounded-full bg-brand-blue" />
              {k}
            </li>
          ))}
        </ul>
      </motion.div>
    </Section>
  );
}
