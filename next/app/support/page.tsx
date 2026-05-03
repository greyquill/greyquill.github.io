import type { Metadata } from 'next';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'Support · Greyquill Software',
  description:
    'Answers to common questions about Greyquill Software. How we work, typical timelines, ongoing support, security, and integration with existing systems.',
  alternates: { canonical: 'https://greyquill.io/support' },
};

type FaqEntry = { q: string; a: string };

const FAQS: FaqEntry[] = [
  {
    q: 'What does Greyquill actually do?',
    a: 'We build governed AI in regulated enterprises. The platform has three pillars: ClarityAI (AI risk and readiness scoring), GQData (trusted-data foundation), and GQ Agents (multi-agent orchestration with audit trails). On top of those we run consulting engagements (training, assessments, custom builds) and ship vertical products like GST Co-Pilot.',
  },
  {
    q: 'How does your discovery process work?',
    a: 'Discovery starts with an intake to understand your business goals and constraints. From there we run stakeholder interviews, a working session with the team that owns the problem, and a business and technical analysis. The output is a clear scope and a recommendation on whether the bottleneck is data, process, or model. We do not write code until everyone agrees on what we are building and why.',
  },
  {
    q: 'What are typical project timelines?',
    a: 'It depends on scope and complexity. A typical custom build runs three to six months from discovery to deployment. Smaller assessments and training engagements run in weeks. We will give you a specific timeline at the end of discovery, not before.',
  },
  {
    q: 'Do you provide ongoing support after launch?',
    a: 'Yes. We build long-term partnerships, not one-shot projects. Options include maintenance agreements, enhancement work, and training so your team can run the system on their own.',
  },
  {
    q: 'How do you approach data security and privacy?',
    a: 'Security and privacy are built into every engagement. We follow secure development practices, encrypt sensitive data, and align with regulations relevant to your jurisdiction (GDPR, DPDP, CCPA, PCI-DSS, and others depending on your industry). Our partnerships page lists the platform certifications we hold.',
  },
  {
    q: 'Can you work with our existing systems?',
    a: 'Yes. Most of what we build integrates into existing estates: legacy core systems, OSS/BSS, ERPs, data warehouses, identity providers. The Greyquill platform is designed to layer onto what you have rather than replace it.',
  },
];

const RESOURCES = [
  { href: '/platform', title: 'The platform', body: 'Three pillars: ClarityAI, GQData, GQ Agents.' },
  { href: '/industries', title: 'Industries', body: 'Where we have shipped governed AI.' },
  { href: '/policies', title: 'Policies', body: 'How we handle data, IP, billing, and support.' },
  { href: '/news', title: 'News and updates', body: 'Recent announcements and writing.' },
];

const FAQ_LD = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function SupportPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Support" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(FAQ_LD) }}
      />

      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22] pointer-events-none"
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
            Help and support
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Support.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Answers to the questions we get most often. If your question is not
            here, write to us and we will respond within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-4xl px-5 md:px-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            Frequently asked
          </div>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.08] tracking-tight mb-10 md:mb-12">
            Common questions, direct answers.
          </h2>
          <div className="space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-2xl ring-1 ring-black/[0.06] bg-white open:ring-brand-blue/30 open:shadow-md open:shadow-brand-blue/5 transition-all duration-300"
              >
                <summary className="list-none cursor-pointer px-6 py-5 flex items-center justify-between gap-4">
                  <h3 className="font-display text-base md:text-lg text-brand-ink leading-snug pr-2">
                    {faq.q}
                  </h3>
                  <ChevronDown
                    aria-hidden
                    className="h-5 w-5 text-brand-blue shrink-0 transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="px-6 pb-6 text-brand-ink/75 leading-relaxed text-[15px]">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] p-8 md:p-10 md:flex md:items-center md:justify-between gap-8">
            <div className="max-w-2xl">
              <h2 className="font-display text-2xl md:text-3xl leading-tight text-brand-ink mb-2">
                Did not find your answer?
              </h2>
              <p className="text-brand-ink/75 leading-relaxed">
                Send us a note. We respond within one business day.
              </p>
            </div>
            <Link
              href="/contact"
              className="mt-6 md:mt-0 inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 ease-out-expo shrink-0"
            >
              Contact us
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            More to read
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-tight mb-8 md:mb-10">
            Where to go next.
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {RESOURCES.map((r) => (
              <Link
                key={r.href}
                href={r.href}
                className="group rounded-2xl ring-1 ring-black/[0.05] bg-white p-6 hover:ring-brand-blue/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 ease-out-expo"
              >
                <h3 className="font-display text-lg text-brand-ink mb-2 leading-tight">
                  {r.title}
                </h3>
                <p className="text-brand-ink/70 text-[14.5px] leading-relaxed mb-5">
                  {r.body}
                </p>
                <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  Visit
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
