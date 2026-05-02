import Section from './Section';

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

const TIERS = [
  {
    n: '01',
    name: 'Diagnose',
    Icon: DiagnoseIcon,
    headline: 'See your AI risk and readiness clearly.',
    body: 'Maturity assessments, model inventories, regulatory gap analyses, and a board-ready risk picture. Nothing built until we know what to build.',
    bullets: [
      'AI Readiness Diagnostic (10-day)',
      'Multi-jurisdiction regulatory gap analysis',
      'Model inventory + risk classification',
    ],
  },
  {
    n: '02',
    name: 'Govern',
    Icon: GovernIcon,
    headline: 'Put trusted data and runtime controls in place.',
    body: 'Master data, lineage, sensitive-data classification, model lifecycle controls, real-time monitoring. The foundation under every use case.',
    bullets: [
      'Trusted data foundation (MDM + lineage)',
      'Model lifecycle governance with evidence trails',
      'Policy → control translation with runtime enforcement',
    ],
  },
  {
    n: '03',
    name: 'Activate',
    Icon: ActivateIcon,
    headline: 'Ship governed AI use cases with oversight that scales.',
    body: 'Productionised generative and agentic workloads, audit-ready by default. Activation that you can keep shipping after we leave.',
    bullets: [
      'Governed agentic workflows (with audit trails)',
      'Vertical AI accelerators (e.g. tax, payments, telecom ops)',
      'Internal enablement so your team owns the system',
    ],
  },
];

export default function JourneyTiers() {
  return (
    <Section
      id="approach"
      eyebrow="Our approach"
      title={
        <>
          A three-step approach,<br />
          <span className="text-brand-blue">for your success in your AI journey.</span>
        </>
      }
      intro="Diagnose what's actually broken. Govern the data and the model lifecycle. Activate use cases that pass an audit on day one, not day ninety."
    >
      <div className="relative">
        {/* Static connector spine */}
        <div className="absolute left-[27px] md:left-[35px] top-3 bottom-3 w-px bg-brand-blue/30" aria-hidden />

        <ol className="space-y-12 md:space-y-16">
          {TIERS.map((tier) => (
            <li key={tier.n} className="relative pl-16 md:pl-24">
              <div className="absolute left-0 top-0 flex flex-col items-center gap-3">
                <div className="relative h-14 w-14 md:h-[72px] md:w-[72px] rounded-full bg-white ring-2 ring-brand-blue flex items-center justify-center text-brand-blue">
                  <span className="absolute -top-2 -right-2 bg-brand-blue text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full font-body tracking-wide">
                    {tier.n}
                  </span>
                  <span className="h-7 w-7 md:h-9 md:w-9 block">
                    <tier.Icon />
                  </span>
                </div>
              </div>

              <div className="grid md:grid-cols-12 gap-6 md:gap-10">
                <div className="md:col-span-5">
                  <div className="text-xs font-semibold uppercase tracking-[0.22em] text-brand-blue mb-2">
                    {tier.name}
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl leading-tight text-brand-ink">
                    {tier.headline}
                  </h3>
                </div>
                <div className="md:col-span-7">
                  <p className="text-brand-ink/75 text-lg leading-relaxed mb-5">{tier.body}</p>
                  <ul className="space-y-2">
                    {tier.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-brand-ink/80">
                        <span aria-hidden className="text-brand-blue/70 mt-1.5">▸</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </Section>
  );
}
