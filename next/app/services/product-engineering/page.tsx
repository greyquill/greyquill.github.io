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
    body: 'A structured discovery, typically one to two weeks: stakeholder interviews, domain walkthroughs, and workflow mapping, ending in a scoped specification with a prioritised backlog and an honest estimate. Every brief also runs through ClarityAI, the same clarity and risk scoring we sell, so ambiguity surfaces before it becomes rework.',
    examples: ['Discovery workshops', 'Domain and workflow mapping', 'ClarityAI risk scoring', 'Scoped backlog and estimate'],
  },
  {
    id: 'design',
    title: 'UX and product design',
    body: 'User journeys, wireframes, and clickable prototypes tested with real users before a line of production code is written. We build a design system alongside the product so screens stay coherent as the product grows, and we design for accessibility from the start rather than retrofitting it.',
    examples: ['Figma prototypes', 'Design systems', 'Usability testing', 'WCAG accessibility'],
  },
  {
    id: 'build',
    title: 'Web, mobile, and backend engineering',
    body: 'Full-stack platforms built API-first, in short iterations you can see running every week or two. Typed end to end, with the integrations that connect the product to the systems you already run: ERPs, CRMs, payment rails, and internal databases. Modular architecture, so the parts you buy today do not box you in tomorrow.',
    examples: ['React · Next.js · TypeScript', 'Node.js · Python backends', 'React Native mobile', 'REST and event-driven APIs', 'PostgreSQL and cloud data stores'],
  },
  {
    id: 'ai-native',
    title: 'AI-native features',
    body: 'LLM applications, retrieval over your own documents, copilots, and agents designed into the product rather than bolted on. Every AI feature ships with an evaluation set, guardrails, and an audit trail, because a demo that works once is not a feature.',
    examples: ['RAG over your data', 'Copilots and agents', 'IBM watsonx and frontier LLMs', 'Evaluation suites and guardrails'],
  },
  {
    id: 'quality',
    title: 'QA and reliability',
    body: 'Automated test suites that run on every commit, release gates that block regressions, performance budgets, and security review before anything faces a customer. Our own GST Co-Pilot ships with 162 tests and 88 percent coverage. Your product gets the same bar.',
    examples: ['Automated tests in CI', 'Release gates', 'Performance and load testing', 'Security reviews'],
  },
  {
    id: 'operate',
    title: 'DevOps and ongoing product management',
    body: 'CI/CD pipelines, infrastructure as code, and observability on the cloud you already use: AWS, Azure, Google Cloud, IBM Cloud, or your own data centre. After launch we can stay on as the product team, running the roadmap, releases, and support. Either way, everything is yours to own: code, infrastructure definitions, and the knowledge to run them.',
    examples: ['GitHub Actions CI/CD', 'Terraform · Docker · Kubernetes', 'AWS · Azure · Google Cloud · IBM Cloud', 'Roadmap and release management'],
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
          <div className="mb-8 md:mb-10 max-w-3xl">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
              What we do
            </div>
            <h2 className="font-display font-semibold text-2xl md:text-4xl text-brand-ink leading-tight">
              End-to-end product development and management.
            </h2>
            <p className="mt-4 text-brand-ink/75 text-[15px] md:text-base leading-relaxed">
              From the first discovery workshop to the release pipeline that ships
              version fifty. One team owns the outcome across design, engineering,
              quality, and operations, and you see working software every step of the way.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {CAPABILITIES.map((cap, i) => (
              <div
                key={cap.id}
                id={cap.id}
                className="scroll-mt-28 flex flex-col rounded-2xl bg-white ring-1 ring-black/[0.05] p-6 md:p-7 hover:ring-brand-blue/30 transition-colors duration-300"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/70 mb-3">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink leading-snug mb-2.5">
                  {cap.title}
                </h3>
                <p className="text-brand-ink/70 text-[14px] leading-relaxed flex-1">{cap.body}</p>
                <ul className="mt-4 pt-4 border-t border-black/[0.05] flex flex-wrap gap-1.5">
                  {cap.examples.map((ex) => (
                    <li
                      key={ex}
                      className="text-[11px] font-medium text-brand-ink/65 px-2 py-1 rounded-full bg-brand-mist/60"
                    >
                      {ex}
                    </li>
                  ))}
                </ul>
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
