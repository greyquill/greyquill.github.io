import type { ReactNode } from 'react';
import Section from './Section';

/**
 * The Greyquill Method, compressed.
 *
 * Three sequenced phases (Diagnose → Govern → Activate). Each phase
 * is implemented by one platform layer (Clarity / GQData / GQ Agents),
 * which is called out explicitly so the Dilemma → Method → Platform
 * spine reads as one consistent story rather than three altitudes of
 * the same content.
 *
 * The previous "workstreams" lane and "today" strip have been removed
 * because they restated the same content at a different altitude, and
 * forced the reader to remember 18+ items to follow the page.
 */

const DiagnoseIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <circle cx="28" cy="28" r="14" />
    <path d="M38 38l10 10" />
    <path d="M22 28h12M28 22v12" opacity=".55" />
    <circle cx="28" cy="28" r="4" fill="currentColor" opacity=".15" />
  </svg>
);

const GovernIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M32 8l20 8v14c0 12-8 22-20 26-12-4-20-14-20-26V16l20-8z" />
    <path d="M22 32l7 7 13-14" />
    <path d="M12 22h40" opacity=".35" />
  </svg>
);

const ActivateIcon = () => (
  <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M14 38l8-22 22 8-22 14z" />
    <path d="M22 16l4 14 14 4" opacity=".55" />
    <circle cx="44" cy="22" r="3" fill="currentColor" />
    <path d="M14 50l10-4M14 56l16-6" opacity=".7" />
  </svg>
);

type Phase = {
  n: string;
  name: string;
  Icon: () => ReactNode;
  headline: string;
  sub: string;
  layer: { name: string; tag: string; accent: string };
  fixes: string;
};

const PHASES: Phase[] = [
  {
    n: '01',
    name: 'Diagnose',
    Icon: DiagnoseIcon,
    headline: 'See your AI risk and readiness clearly.',
    sub: 'Maturity assessment, model inventory, regulatory gap analysis, board-ready risk picture.',
    layer: { name: 'ClarityAI', tag: 'Understanding', accent: '#0B4F88' },
    fixes: 'Fixes the 40 lost to data not being AI-ready.',
  },
  {
    n: '02',
    name: 'Govern',
    Icon: GovernIcon,
    headline: 'Put trusted data and runtime controls in place.',
    sub: 'Master data, lineage, sensitivity classification, model lifecycle controls, real-time monitoring.',
    layer: { name: 'GQData', tag: 'Foundation', accent: '#0e7490' },
    fixes: 'Fixes the 35 lost at evaluation.',
  },
  {
    n: '03',
    name: 'Activate',
    Icon: ActivateIcon,
    headline: 'Ship governed AI use cases with oversight that scales.',
    sub: 'Productionised generative and agentic workloads, with evidence assembled while the agent runs.',
    layer: { name: 'GQ Agents', tag: 'Activation', accent: '#4338ca' },
    fixes: 'Fixes the 20 lost in production.',
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
      id="approach"
      eyebrow="Our approach · The Greyquill Method"
      title={
        <>
          A three-step approach,<br />
          <span className="text-brand-blue">for success in your AI journey.</span>
        </>
      }
      intro="Three sequenced phases. Each one is implemented by one layer of the platform. Each one moves a KPI your board cares about."
    >
      <div className="grid md:grid-cols-3 gap-4 md:gap-5">
        {PHASES.map((phase) => (
          <div
            key={phase.n}
            className="group bg-white rounded-2xl ring-1 ring-black/[0.06] p-6 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo flex flex-col"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="relative h-12 w-12 rounded-full bg-brand-blue/8 ring-1 ring-brand-blue/30 flex items-center justify-center text-brand-blue">
                <span className="absolute -top-1.5 -right-1.5 bg-brand-blue text-white text-[9px] font-semibold px-1.5 py-0.5 rounded-full font-body tracking-wide">
                  {phase.n}
                </span>
                <span className="h-6 w-6 block">
                  <phase.Icon />
                </span>
              </span>
              <div>
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80">
                  Phase {phase.n}
                </div>
                <div className="font-display font-semibold text-lg text-brand-ink leading-tight">
                  {phase.name}
                </div>
              </div>
            </div>
            <p className="font-display font-semibold text-brand-ink text-base leading-snug mb-2">
              {phase.headline}
            </p>
            <p className="text-sm text-brand-ink/65 leading-relaxed">{phase.sub}</p>

            {/* Platform-layer mapping. The bridge between Method and
               the Platform section that follows: each phase runs on
               one named layer, with the layer's accent colour. */}
            <div className="mt-5 pt-4 border-t border-black/[0.06] space-y-2">
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/50">
                  Runs on
                </span>
                <span
                  className="text-[10px] font-semibold uppercase tracking-[0.18em]"
                  style={{ color: phase.layer.accent }}
                >
                  {phase.layer.tag}
                </span>
              </div>
              <div
                className="font-display font-semibold text-[15px]"
                style={{ color: phase.layer.accent }}
              >
                {phase.layer.name}
              </div>
              <p className="text-[12px] text-brand-ink/55 leading-snug">
                {phase.fixes}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-10 md:my-12">
        <DownArrow />
      </div>

      <div className="bg-brand-ink text-white rounded-2xl p-6 md:p-8">
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
      </div>
    </Section>
  );
}
