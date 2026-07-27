import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Digital Transformation & Modernisation · Systems that can safely run themselves',
  description:
    'Legacy application modernisation, process automation, systems and data integration, and cloud migration. Step-by-step transformation with an audit trail at every step. No big-bang rewrites.',
  alternates: { canonical: 'https://greyquill.io/services/digital-transformation' },
};

const CAPABILITIES = [
  {
    id: 'modernisation',
    title: 'Legacy application modernisation',
    body: 'Incremental replacement of the systems everyone is afraid to touch. We carve out one capability at a time, run old and new side by side, and retire the legacy only when the numbers match. The business keeps running throughout.',
  },
  {
    id: 'automation',
    title: 'Process automation',
    body: 'Manual workflows turned into governed automation. Agentic where autonomy earns its keep, deterministic where it should be, and human-in-the-loop wherever the cost of a wrong decision is real. Every automated step leaves evidence.',
  },
  {
    id: 'integration',
    title: 'Systems and data integration',
    body: 'ERPs, CRMs, spreadsheets, and internal databases connected on a common data foundation, so the same customer, product, and transaction mean the same thing everywhere. This is the groundwork every serious AI program stands on.',
  },
  {
    id: 'cloud',
    title: 'Cloud migration and infrastructure',
    body: 'Migration to cloud or hybrid infrastructure that runs in your environment, under your keys. Infrastructure as code, observability from day one, and IBM foundations where they fit. Everything is yours to own when we leave.',
  },
];

const PATTERNS = [
  {
    industry: 'Telecom',
    href: '/industries/telecom',
    note: 'Legacy platform modernisation carried out while the platform stayed in production.',
  },
  {
    industry: 'BFSI · payments',
    href: '/industries/bfsi',
    note: 'High-volume reconciliation across payment rails, with drift caught at source.',
  },
  {
    industry: 'Retail',
    href: '/industries/retail',
    note: 'Process optimisation and reporting consolidation across disconnected operational systems.',
  },
];

const AUDIENCE = [
  {
    role: 'CIOs and modernisation leads',
    pain: 'You inherited systems that resist every change, and a board that wants AI on top of them next quarter.',
  },
  {
    role: 'COOs and heads of operations',
    pain: 'Your processes are held together by tenured people and spreadsheets, and both are getting harder to replace.',
  },
  {
    role: 'CISOs and risk leaders',
    pain: 'You are asked to approve automation you cannot inspect. You need controls and evidence in the runtime path, not in a policy document.',
  },
];

export default function DigitalTransformationPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/services" fallbackLabel="Back to services" currentName="Digital Transformation" />

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

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Services · Digital transformation &amp; modernisation
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.025em] text-brand-ink max-w-4xl">
            The autonomous enterprise starts with<br className="hidden md:block" />
            <span className="text-brand-blue">the systems you already run.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Legacy applications, manual processes, disconnected data. We modernise them
            step by step into systems that can safely run themselves, with an audit trail
            at every step. No big-bang rewrites, no eighteen-month blackouts.
          </p>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 md:mb-10 max-w-2xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
              What we do
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
              Four ways in. One direction of travel.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.id}
                id={cap.id}
                className="scroll-mt-28 rounded-2xl bg-white ring-1 ring-black/[0.05] p-6 md:p-7 hover:ring-brand-blue/30 transition-colors duration-300"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/70 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink leading-snug mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-brand-ink/70 text-[14px] leading-relaxed">{cap.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AUTONOMY BAND */}
      <section className="py-14 md:py-18 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -left-24 h-[400px] w-[400px] rounded-full bg-brand-blue/30 blur-[120px]" />
        <div className="relative mx-auto max-w-4xl px-5 md:px-8 py-4 text-center">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue-light mb-4">
            Why it matters
          </div>
          <h2 className="font-display text-2xl md:text-4xl leading-[1.15] tracking-tight">
            Autonomy is the destination.<br />
            <span className="text-brand-blue-light">Proof is the path.</span>
          </h2>
          <p className="mt-5 text-white/75 text-base md:text-lg leading-relaxed max-w-3xl mx-auto">
            Every modernisation step we take is designed so that when you are ready to let
            AI act, the data, the controls, and the audit evidence are already in place.
            That is the difference between an autonomous enterprise and an unaccountable one.
          </p>
        </div>
      </section>

      {/* PATTERNS WE HAVE SHIPPED */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 md:mb-10 flex items-end justify-between flex-wrap gap-3">
            <div className="max-w-2xl">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
                Track record
              </div>
              <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
                Patterns we have shipped.
              </h2>
            </div>
            <span className="text-xs text-brand-ink/45">Customer names withheld. Patterns are real.</span>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {PATTERNS.map((p) => (
              <Link
                key={p.industry}
                href={p.href}
                className="group rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
              >
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
                  {p.industry}
                </div>
                <p className="text-brand-ink/80 text-[14.5px] leading-relaxed mb-4">{p.note}</p>
                <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  More in this industry
                  <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-brand-mist/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="mb-8 md:mb-10">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
              Who this is for
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
              If you are a…
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {AUDIENCE.map((a) => (
              <div key={a.role} className="rounded-2xl bg-white ring-1 ring-black/[0.05] p-6 md:p-7">
                <h3 className="font-display font-semibold text-lg text-brand-ink leading-snug mb-2.5">
                  {a.role}
                </h3>
                <p className="text-brand-ink/70 text-[14px] leading-relaxed">{a.pain}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Tell us about the system everyone is afraid to touch.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            30 minutes. We will tell you honestly whether it should be modernised,
            replaced, or left alone.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/15"
            >
              Book a discovery call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
            <Link href="/industries" className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors">
              See industries we serve
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
