import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Product Engineering · Built by a team that ships its own products',
  description:
    'Discovery, UX and product design, web, mobile, and backend engineering, AI-native features, QA and DevOps. Senior-led product engineering from the team behind ClarityAI and GST Co-Pilot.',
  alternates: { canonical: 'https://greyquill.io/services/product-engineering' },
};

const CAPABILITIES = [
  {
    id: 'discovery',
    title: 'Discovery and scoping',
    body: 'A short, structured discovery that turns an idea into a scoped, testable specification. Every brief runs through ClarityAI, the same clarity and risk scoring we sell, so ambiguity surfaces before it becomes rework.',
  },
  {
    id: 'design',
    title: 'UX and product design',
    body: 'Flows, wireframes, and clickable prototypes before a line of production code. A design system that keeps the product coherent as it grows, designed alongside the engineers who will build it.',
  },
  {
    id: 'build',
    title: 'Web, mobile, and backend engineering',
    body: 'Full-stack web platforms, mobile applications, APIs, and the integrations that connect them to the systems you already run. Modular architecture, so the parts you buy today do not box you in tomorrow.',
  },
  {
    id: 'ai-native',
    title: 'AI-native features',
    body: 'LLM applications, retrieval, copilots, and agents designed into the product rather than bolted on. Guardrails, evaluation, and audit trails are part of the feature, not an afterthought.',
  },
  {
    id: 'quality',
    title: 'QA and reliability',
    body: 'Automated test suites, performance budgets, and release gates. Our own GST Co-Pilot ships with 162 tests and 88 percent coverage. Your product gets the same bar.',
  },
  {
    id: 'operate',
    title: 'DevOps and ongoing ownership',
    body: 'CI/CD, observability, and documentation written for the team that inherits the system. Everything we build is yours to own: code, infrastructure definitions, and the knowledge to run them.',
  },
];

const PROOF = [
  {
    name: 'ClarityAI',
    note: 'Live product. Scores the clarity and risk of any initiative.',
    href: '/products/clarity-ai',
    external: false,
  },
  {
    name: 'GST Co-Pilot',
    note: 'Four-agent tax reconciliation. 162 tests, 88 percent coverage.',
    href: '/products/gst-copilot',
    external: false,
  },
  {
    name: 'Commerce Synapse',
    note: 'Retail and commerce intelligence.',
    href: 'https://commerce-synapse.com',
    external: true,
  },
  {
    name: 'Umami',
    note: 'AI-powered practice management for clinics.',
    href: 'https://umami.greyquill.io',
    external: true,
  },
];

const AUDIENCE = [
  {
    role: 'Founders and product leaders',
    pain: 'You have a validated idea and need a senior team that can take it from brief to first customers without a hiring round.',
  },
  {
    role: 'CTOs and VPs of Engineering',
    pain: 'Your roadmap is bigger than your team. You need a defined product or module delivered, not bodies on seats.',
  },
  {
    role: 'Enterprise product owners',
    pain: 'You need AI features added to an existing product, with the governance and audit posture your customers will ask about.',
  },
];

export default function ProductEngineeringPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/services" fallbackLabel="Back to services" currentName="Product Engineering" />

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
            Services · Product engineering
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            We ship our own products.<br />
            <span className="text-brand-blue">We will ship yours.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Discovery to design to production, from a senior team that has taken its own
            products live. Web, mobile, and backend, AI-native from day one, built with
            the same discipline we stake our own name on.
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
              Six capabilities, one accountable team.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
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

      {/* PROOF */}
      <section className="bg-brand-mist/30 py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
                Why trust us with a build
              </div>
              <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
                The proof is what we ship for ourselves.
              </h2>
              <p className="mt-4 text-brand-ink/75 text-[15px] md:text-base leading-relaxed">
                Most services firms show you slides. We can show you working software:
                products we designed, built, and run with the same team you would hire.
                Try them, click around, judge the craft directly.
              </p>
            </div>
            <div className="md:col-span-7 grid sm:grid-cols-2 gap-4">
              {PROOF.map((p) =>
                p.external ? (
                  <a
                    key={p.name}
                    href={p.href}
                    target="_blank"
                    rel="noopener"
                    className="group rounded-xl bg-white ring-1 ring-black/[0.05] p-5 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
                  >
                    <div className="font-display font-semibold text-brand-ink mb-1.5 flex items-center gap-1.5">
                      {p.name}
                      <span aria-hidden className="text-brand-ink/40 text-xs">↗</span>
                    </div>
                    <p className="text-[13px] text-brand-ink/65 leading-snug">{p.note}</p>
                  </a>
                ) : (
                  <Link
                    key={p.name}
                    href={p.href}
                    className="group rounded-xl bg-white ring-1 ring-black/[0.05] p-5 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo"
                  >
                    <div className="font-display font-semibold text-brand-ink mb-1.5">{p.name}</div>
                    <p className="text-[13px] text-brand-ink/65 leading-snug">{p.note}</p>
                  </Link>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* WHO THIS IS FOR */}
      <section className="bg-white py-12 md:py-16">
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
              <div key={a.role} className="rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7">
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
            Have a product in mind?
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bring the idea. We will bring the hard questions, and a scoped plan for
            answering them.
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
            <Link href="/products" className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors">
              See what we have built
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
