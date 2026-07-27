import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import EngagementRoadmap from '@/components/EngagementRoadmap';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'AI & Data · Training, assessments, consulting',
  description:
    'Governed AI from first briefing to production. Twelve engagements across training, assessments, and consulting, in five phases, run by the team that builds the Greyquill platform.',
  alternates: { canonical: 'https://greyquill.io/services/ai-and-data' },
};

const BUILD_ITEMS = [
  {
    title: 'LLM applications and retrieval',
    body: 'Assistants, copilots, and RAG systems grounded in your own data, with evaluation baked in.',
  },
  {
    title: 'Agentic systems',
    body: 'Multi-agent workflows with human-in-the-loop escalation and an audit trail assembled at runtime.',
  },
  {
    title: 'Master data and lineage',
    body: 'Golden records, quality repaired at source, and lineage you can query when the auditor asks.',
  },
  {
    title: 'Evaluation and monitoring',
    body: 'Eval sets, model cards, and runtime observability, so passing review once is not the finish line.',
  },
];

export default function AiAndDataPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/services" fallbackLabel="Back to services" currentName="AI & Data" />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-10 md:pb-14">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Services · AI &amp; data
          </div>
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-end">
            <div className="md:col-span-7">
              <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
                Governed AI,<br />
                <span className="text-brand-blue">from briefing to production.</span>
              </h1>
              <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
                Twelve engagements across training, assessments, and consulting, organised
                in five phases from boardroom to production. Run by the team that builds
                the Greyquill platform. Most clients start at Phase 01. Stop at any milestone.
              </p>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-xl bg-white/70 backdrop-blur ring-1 ring-black/[0.05] p-5">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-3">
                  How to read this
                </div>
                <ul className="space-y-2.5 text-[13px] text-brand-ink/80 leading-relaxed">
                  <li className="flex items-center gap-2 flex-wrap">
                    <span className="inline-flex items-center gap-1 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand-blue px-1.5 py-0.5 rounded-full bg-brand-blue/10">★ Recommended</span>
                    <span>is the core engagement at each phase.</span>
                  </li>
                  <li className="flex items-center gap-1.5 flex-wrap">
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand-ink/65 px-1.5 py-0.5 rounded-full bg-black/[0.04]"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Training</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand-ink/65 px-1.5 py-0.5 rounded-full bg-black/[0.04]"><span className="h-1.5 w-1.5 rounded-full bg-amber-500" />Assessment</span>
                    <span className="inline-flex items-center gap-1.5 text-[9.5px] font-semibold uppercase tracking-[0.16em] text-brand-ink/65 px-1.5 py-0.5 rounded-full bg-black/[0.04]"><span className="h-1.5 w-1.5 rounded-full bg-brand-blue" />Consulting</span>
                  </li>
                  <li>Click any service for details. Opens here.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ENGAGEMENT ROADMAP — single source of truth for the 12 AI & data
          engagements, organised by phase. Clicking any card opens the
          detail modal; /services/ai-and-data#<id> deep-links into it. */}
      <EngagementRoadmap />

      {/* ADVISORY THAT ENDS IN SOFTWARE */}
      <section className="bg-brand-mist/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 md:mb-10 max-w-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
              Beyond advisory
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
              Advisory that ends in working software.
            </h2>
            <p className="mt-4 text-brand-ink/75 text-[15px] md:text-base leading-relaxed">
              The roadmap is not a slide deck relay. The later phases are build phases,
              delivered by the same engineers who run the assessments, on the same
              platform we sell.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
            {BUILD_ITEMS.map((item) => (
              <div key={item.title} className="rounded-xl bg-white ring-1 ring-black/[0.05] p-5">
                <h3 className="font-display font-semibold text-[15.5px] text-brand-ink leading-snug mb-2">
                  {item.title}
                </h3>
                <p className="text-[13px] text-brand-ink/65 leading-relaxed">{item.body}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-[14px] text-brand-ink/70">
            The platform underneath all of it:{' '}
            <Link href="/platform" className="text-brand-blue font-semibold hover:text-brand-blue-dark transition-colors">
              see how the pieces fit together →
            </Link>
          </p>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Not sure which entry point fits?<br className="hidden md:block" />
              <span className="text-brand-blue-light">We scope the right one with you.</span>
            </h2>
            <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              30 minutes. Workshop, diagnostic, or implementation, you leave with a recommendation either way.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Book a call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
