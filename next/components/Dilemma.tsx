'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { easings } from '@/lib/motion';

/**
 * The Dilemma. AI adoption climbs steeply across milestones; trust and
 * governance climb shallowly. The widening gap between them is the risk.
 *
 * Path geometry: each milestone dot is a quadratic-bezier waypoint, so
 * the dots are mathematically on the curve, not eyeballed.
 *
 * Motion: one section-level fade-in, fast. No per-object choreography.
 */

// Adoption waypoints (each is a milestone)
const A = {
  start:    { x: 80,  y: 340 },
  pilot:    { x: 220, y: 322 },
  prod:     { x: 380, y: 270 },
  agentic:  { x: 560, y: 155 },
  everywhere: { x: 680, y: 95 },
};

// Governance waypoints
const G = {
  start:   { x: 80,  y: 348 },
  policy:  { x: 200, y: 343 },
  council: { x: 420, y: 322 },
  audit:   { x: 640, y: 270 },
};

// Smooth quadratic-bezier path through waypoints (control points placed so
// dots ARE on the line)
const ADOPTION_PATH = `
  M ${A.start.x} ${A.start.y}
  Q 150 336 ${A.pilot.x} ${A.pilot.y}
  Q 300 295 ${A.prod.x} ${A.prod.y}
  Q 470 200 ${A.agentic.x} ${A.agentic.y}
  Q 620 120 ${A.everywhere.x} ${A.everywhere.y}
`;

const GOVERNANCE_PATH = `
  M ${G.start.x} ${G.start.y}
  Q 140 346 ${G.policy.x} ${G.policy.y}
  Q 310 332 ${G.council.x} ${G.council.y}
  Q 530 295 ${G.audit.x} ${G.audit.y}
`;

// Gap polygon: adoption forward, governance reversed, close
const GAP_PATH = `
  M ${A.start.x} ${A.start.y}
  Q 150 336 ${A.pilot.x} ${A.pilot.y}
  Q 300 295 ${A.prod.x} ${A.prod.y}
  Q 470 200 ${A.agentic.x} ${A.agentic.y}
  Q 620 120 ${A.everywhere.x} ${A.everywhere.y}
  L ${G.audit.x} ${G.audit.y}
  Q 530 295 ${G.council.x} ${G.council.y}
  Q 310 332 ${G.policy.x} ${G.policy.y}
  Q 140 346 ${G.start.x} ${G.start.y}
  Z
`;

export default function Dilemma() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.25 });

  return (
    <Section
      tone="mist"
      eyebrow="The dilemma"
      title={
        <>
          AI is racing ahead.<br />
          <span className="text-brand-blue">Trust isn&apos;t.</span>
        </>
      }
      intro="The risk isn't the model. It's deploying it on data you can't vouch for, with controls you can't prove. That gap is where careers, audits, and reputations break."
    >
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.35, ease: easings.outExpo }}
        className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center"
      >
        <div className="lg:col-span-8 relative">
          <div className="relative rounded-2xl bg-white ring-1 ring-black/5 shadow-2xl shadow-brand-blue/5 p-5 sm:p-7 md:p-8 overflow-hidden">
            <div className="flex items-center justify-between mb-4">
              <div className="text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-ink/55">
                Capability over time
              </div>
              <div className="hidden sm:flex items-center gap-4 text-[11px] text-brand-ink/65">
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-brand-ink" /> AI adoption
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-sm bg-brand-blue" /> Governance &amp; trust
                </span>
              </div>
            </div>

            {/* viewBox: tight on left, generous on right so end-of-line labels fit */}
            <svg viewBox="-78 0 920 460" className="block w-full h-auto" role="img" aria-label="A line chart showing AI adoption climbing steeply across milestones from pilot to agentic production while governance and trust capability climbs slowly, leaving a widening risk gap between them.">
              <defs>
                <pattern id="risk-stripes" width="8" height="8" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="8" stroke="#0B4F88" strokeWidth="1.4" opacity="0.18" />
                </pattern>
                <pattern id="grid-fine" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0a1628" strokeOpacity="0.05" strokeWidth="1" />
                </pattern>
                <linearGradient id="adoption-glow" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0a1628" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="#0a1628" stopOpacity="0" />
                </linearGradient>
              </defs>

              {/* Plot area */}
              <rect x="80" y="40" width="620" height="340" fill="url(#grid-fine)" />

              {/* Y-axis */}
              <line x1="80" y1="40" x2="80" y2="380" stroke="#0a162833" strokeWidth="1.5" />
              {[
                { y: 80,  label: 'Audit-ready' },
                { y: 160, label: 'Production' },
                { y: 240, label: 'Internal use' },
                { y: 320, label: 'Pilot' },
              ].map((row) => (
                <g key={row.label}>
                  <line x1="78" y1={row.y} x2="700" y2={row.y} stroke="#0a162812" strokeWidth="1" strokeDasharray="2 4" />
                  <text x="72" y={row.y + 4} fontSize="12" fill="#0a162899" textAnchor="end" fontFamily="var(--font-body)">
                    {row.label}
                  </text>
                </g>
              ))}

              {/* X-axis */}
              <line x1="80" y1="380" x2="700" y2="380" stroke="#0a162833" strokeWidth="1.5" />
              {[
                { x: 130, label: '2022' },
                { x: 270, label: '2023' },
                { x: 410, label: '2024' },
                { x: 550, label: '2025' },
                { x: 680, label: '2026' },
              ].map((tick) => (
                <g key={tick.label}>
                  <line x1={tick.x} y1="380" x2={tick.x} y2="384" stroke="#0a162866" strokeWidth="1.2" />
                  <text x={tick.x} y="402" fontSize="11" fill="#0a162888" textAnchor="middle" fontFamily="var(--font-body)">
                    {tick.label}
                  </text>
                </g>
              ))}

              {/* The widening risk gap (diagonal stripes) */}
              <path d={GAP_PATH} fill="url(#risk-stripes)" />

              {/* Glow under the AI adoption line */}
              <path d={`${ADOPTION_PATH} L 700 380 L 80 380 Z`} fill="url(#adoption-glow)" />

              {/* Governance line */}
              <path d={GOVERNANCE_PATH} fill="none" stroke="#0B4F88" strokeWidth="3" strokeLinecap="round" />

              {/* Governance milestones (dots are path waypoints, so they're ON the line) */}
              {[
                { p: G.policy,  label: 'Policy drafted', tw: 86 },
                { p: G.council, label: 'Council formed', tw: 92 },
                { p: G.audit,   label: 'Audit readiness?', tw: 104 },
              ].map((m) => (
                <g key={m.label}>
                  <circle cx={m.p.x} cy={m.p.y} r="5" fill="white" stroke="#0B4F88" strokeWidth="2" />
                  <rect x={m.p.x - m.tw / 2} y={m.p.y + 12} width={m.tw} height="16" rx="3" fill="white" opacity="0.95" />
                  <text x={m.p.x} y={m.p.y + 23} fontSize="10.5" fill="#0B4F88" textAnchor="middle" fontWeight="600" fontFamily="var(--font-body)">
                    {m.label}
                  </text>
                </g>
              ))}

              {/* AI adoption line */}
              <path d={ADOPTION_PATH} fill="none" stroke="#0a1628" strokeWidth="3.5" strokeLinecap="round" />

              {/* Adoption milestones */}
              {[
                { p: A.pilot,      label: 'First pilot',         tw: 70 },
                { p: A.prod,       label: 'GenAI in prod',       tw: 92 },
                { p: A.agentic,    label: 'Agentic workflows',   tw: 116 },
                { p: A.everywhere, label: 'Everywhere',          tw: 80 },
              ].map((m) => (
                <g key={m.label}>
                  <circle cx={m.p.x} cy={m.p.y} r="5.5" fill="#0a1628" />
                  <rect x={m.p.x - m.tw / 2} y={m.p.y - 26} width={m.tw} height="16" rx="3" fill="white" opacity="0.95" />
                  <text x={m.p.x} y={m.p.y - 14} fontSize="10.5" fill="#0a1628" textAnchor="middle" fontWeight="700" fontFamily="var(--font-body)">
                    {m.label}
                  </text>
                </g>
              ))}

              {/* "This gap is your risk" callout, anchored over the gap */}
              <g>
                <line x1="495" y1="290" x2="495" y2="248" stroke="#0a1628" strokeWidth="1" strokeDasharray="2 3" />
                <rect x="402" y="218" width="186" height="34" rx="8" fill="white" stroke="#0B4F88" strokeWidth="1.4" />
                <text x="495" y="235" fontSize="12" fontWeight="700" fill="#0B4F88" textAnchor="middle" fontFamily="var(--font-body)">
                  This gap is your risk.
                </text>
                <text x="495" y="247" fontSize="10" fill="#0a162888" textAnchor="middle" fontFamily="var(--font-body)">
                  Audit · regulator · board · brand
                </text>
              </g>

              {/* End-of-line series labels (extra right-side viewBox room ensures no clipping) */}
              <text x="710" y="92" fontSize="12" fontWeight="700" fill="#0a1628" fontFamily="var(--font-body)">
                <tspan x="710" dy="0">AI</tspan>
                <tspan x="710" dy="14">adoption</tspan>
              </text>
              <text x="710" y="266" fontSize="12" fontWeight="600" fill="#0B4F88" fontFamily="var(--font-body)">
                <tspan x="710" dy="0">Governance</tspan>
                <tspan x="710" dy="14">&amp; trust</tspan>
              </text>

              {/* Axis titles */}
              <text x="-66" y="210" fontSize="11" fontWeight="600" fill="#0a162888" textAnchor="middle" transform="rotate(-90 -66 210)" fontFamily="var(--font-body)" letterSpacing="1">
                CAPABILITY
              </text>
              <text x="390" y="436" fontSize="11" fontWeight="600" fill="#0a162888" textAnchor="middle" fontFamily="var(--font-body)" letterSpacing="1">
                TIME
              </text>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-4 space-y-7">
          {[
            {
              h: 'Models ship in weeks. Trust takes years.',
              p: 'Most AI initiatives stall not at the model, but at the moment a regulator, auditor, or board member asks: "How do you know this is safe?"',
            },
            {
              h: 'Your data is the audit.',
              p: 'Lineage, quality, sensitivity classification, access controls. If those aren\'t in place, no governance framework will save you.',
            },
            {
              h: 'Frameworks are not enforcement.',
              p: 'A policy in a PDF is not a control. We build governance that runs at runtime, with evidence you can hand to anyone who asks.',
            },
          ].map((row) => (
            <div key={row.h} className="border-l-2 border-brand-blue/30 pl-5">
              <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink mb-1.5">{row.h}</h3>
              <p className="text-brand-ink/70 leading-relaxed">{row.p}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
