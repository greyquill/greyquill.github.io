import Link from 'next/link';
import Section from './Section';

const PRODUCTS = [
  {
    name: 'ClarityAI',
    href: '/products/clarity-ai',
    tagline: 'Score the clarity and risk of any AI initiative before you fund it.',
    body: 'Built for AI program leaders who need to defend roadmap decisions to the board. Surfaces hidden requirement gaps, regulatory exposure, and dependency risk in days, not months.',
    tier: 'Diagnose',
    live: true,
  },
  {
    name: 'GQData',
    href: '/products/gqdata',
    tagline: 'The trusted-data layer beneath every AI decision.',
    body: 'Master data unification, lineage, real-time quality, and sensitive-data protection. So every model, agent, and decision runs on data you can stand behind.',
    tier: 'Govern',
  },
  {
    name: 'GQ Agents',
    href: '/products/agents',
    tagline: 'Multi-agent orchestration with audit trails built in.',
    body: 'Work-packet provenance, human-in-the-loop checkpoints, and replayable execution. Designed for regulated environments where you must prove what an agent did and why.',
    tier: 'Activate',
  },
  {
    name: 'GST Co-Pilot',
    href: '/products/gst-copilot',
    tagline: 'A vertical proof point. Agentic AI for Indian tax reconciliation.',
    body: 'Demonstrates our governed-agentic-AI stack in production for SMB and mid-market tax teams. The reference architecture you can adapt to your vertical.',
    tier: 'Activate',
  },
];

export default function Platform() {
  return (
    <Section
      eyebrow="The platform"
      title={
        <>
          Productised accelerators,<br />not consulting hours.
        </>
      }
      intro="Four products, designed to compose. Each one solves a specific stage of the journey, and ships value on its own."
      tone="mist"
    >
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {PRODUCTS.map((p) => (
          <Link
            key={p.name}
            href={p.href}
            className="group relative block h-full bg-white rounded-2xl p-7 md:p-8 ring-1 ring-black/[0.05] hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo"
          >
            <div className="flex items-center gap-2 mb-5">
              <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10">
                {p.tier}
              </span>
              {p.live && (
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-1 rounded bg-emerald-500/10 inline-flex items-center gap-1.5">
                  <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                  Live
                </span>
              )}
            </div>
            <h3 className="font-display text-2xl md:text-[28px] text-brand-ink mb-2">
              {p.name}
            </h3>
            <p className="text-brand-ink font-semibold text-base md:text-lg leading-snug mb-3">
              {p.tagline}
            </p>
            <p className="text-brand-ink/70 leading-relaxed">{p.body}</p>
            <span className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
              Explore
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
            </span>
          </Link>
        ))}
      </div>
    </Section>
  );
}
