import Section from './Section';

/**
 * "Our approach + The Greyquill Method" merged into one section.
 *
 * Two altitudes of the same story:
 *   - TOP: three sequenced phases (Diagnose -> Govern -> Activate),
 *     showing WHEN we work.
 *   - BOTTOM: three workstream lanes (Trusted data / Re-imagined
 *     process / Governed activation) running across every phase,
 *     showing WHAT we work on. Today on top, KPIs at the end.
 *
 * Replaces the previous separate JourneyTiers section.
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

const PHASES = [
  {
    n: '01',
    name: 'Diagnose',
    Icon: DiagnoseIcon,
    headline: 'See your AI risk and readiness clearly.',
    sub: 'Maturity assessments, model inventories, regulatory gap analyses, board-ready risk picture.',
  },
  {
    n: '02',
    name: 'Govern',
    Icon: GovernIcon,
    headline: 'Put trusted data and runtime controls in place.',
    sub: 'Master data, lineage, sensitivity classification, model lifecycle controls, real-time monitoring.',
  },
  {
    n: '03',
    name: 'Activate',
    Icon: ActivateIcon,
    headline: 'Ship governed AI use cases with oversight that scales.',
    sub: 'Productionised generative and agentic workloads. Audit-ready by default, on day one.',
  },
];

const TODAY = ['Siloed data', 'Broken processes', 'Policy on paper'];

const LANES: { name: string; thesis: string; steps: { title: string; sub: string }[] }[] = [
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
      id="approach"
      eyebrow="Our approach · The Greyquill Method"
      title={
        <>
          A three-step approach,<br />
          <span className="text-brand-blue">for your success in your AI journey.</span>
        </>
      }
      intro="Three sequenced phases above. Three workstreams running through every phase below. One pipeline from policy to proof, so the KPIs you committed to actually move."
    >
      {/* PHASES (former JourneyTiers content, compressed) */}
      <div className="grid md:grid-cols-3 gap-4 md:gap-5">
        {PHASES.map((phase) => (
          <div
            key={phase.n}
            className="group bg-white rounded-2xl ring-1 ring-black/[0.06] p-6 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
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
          </div>
        ))}
      </div>

      {/* Bridge: phases above, workstreams below */}
      <div className="flex flex-col items-center my-12 md:my-14">
        <DownArrow />
        <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Across every phase, three workstreams
        </p>
      </div>

      {/* TODAY */}
      <div className="max-w-3xl mx-auto bg-white rounded-2xl ring-1 ring-black/[0.06] p-5 md:p-6 flex flex-wrap items-center gap-x-6 gap-y-2 justify-center">
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Today
        </span>
        {TODAY.map((t) => (
          <span key={t} className="text-sm md:text-base text-brand-ink/75">
            {t}
          </span>
        ))}
      </div>

      <div className="flex justify-center my-3">
        <DownArrow />
      </div>

      {/* LANES — steps flow horizontally with arrows between (original layout) */}
      <div className="space-y-6">
        {LANES.map((lane, li) => (
          <div key={lane.name} className="bg-white rounded-2xl ring-1 ring-black/[0.06] p-5 md:p-7">
            <div className="grid lg:grid-cols-12 gap-5 lg:gap-6 items-start">
              <div className="lg:col-span-3">
                <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-2">
                  Workstream 0{li + 1}
                </div>
                <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink leading-tight">
                  {lane.name}
                </h3>
                <p className="mt-2 text-sm text-brand-ink/65 leading-snug">{lane.thesis}</p>
              </div>

              <ol className="lg:col-span-9 grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr] items-stretch gap-3 md:gap-2">
                {lane.steps.map((s, si) => (
                  <li key={s.title} className="contents">
                    <div className="group relative rounded-xl p-3.5 md:p-4 bg-gradient-to-b from-white/85 to-brand-mist/80 backdrop-blur-sm ring-1 ring-brand-blue/15 shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_1px_2px_rgba(10,22,40,0.04)] hover:ring-brand-blue/45 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.9),0_6px_18px_rgba(11,79,136,0.10)] hover:-translate-y-0.5 transition-all duration-300 ease-out-expo">
                      <div className="flex items-baseline gap-2 mb-1">
                        <span className="text-[10px] font-semibold tracking-[0.18em] text-brand-blue/70">
                          {String(si + 1).padStart(2, '0')}
                        </span>
                        <span className="font-display font-semibold text-[15px] text-brand-ink leading-tight">
                          {s.title}
                        </span>
                      </div>
                      <div className="text-[12.5px] text-brand-ink/65 leading-snug">{s.sub}</div>
                    </div>
                    {si < lane.steps.length - 1 && (
                      <div className="hidden md:flex items-center justify-center">
                        <Arrow />
                      </div>
                    )}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-3">
        <DownArrow />
      </div>

      {/* KPIs */}
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
