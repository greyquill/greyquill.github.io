import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/Section';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Partnerships · IBM Business Partner',
  description:
    'Greyquill is an IBM Business Partner (Silver tier) with sales and technical certifications across watsonx.ai, watsonx.data, watsonx.governance, and IBM Verify. By choice, not by lock-in.',
  alternates: { canonical: 'https://greyquill.io/partnerships' },
};

const SIGNALS = [
  {
    h: 'Foundations the regulator already knows',
    p: 'watsonx carries lineage, model governance, and audit primitives that risk and compliance teams recognize. Less work to defend.',
  },
  {
    h: 'Open by contract',
    p: 'Your data, governance configuration, and agent definitions are yours. Partnership is a multiplier, not a contractual trap.',
  },
  {
    h: 'Senior-led, not subcontracted',
    p: 'The partnership gives us depth in the stack. The work is done by Greyquill engineers, not handed off downstream.',
  },
  {
    h: 'Best fit, not single source',
    p: 'We choose the IBM stack where it earns its place. Our platform composes with other systems where they are stronger.',
  },
];

type Cert = {
  product: string;
  area?: string;
  capabilities: string;
};

const CERTS: { group: string; items: Cert[] }[] = [
  {
    group: 'watsonx',
    items: [
      {
        product: 'watsonx.ai',
        area: 'Generative AI tools',
        capabilities:
          'Foundation model selection and fine-tuning, agent design, prompt and RAG patterns, governed GenAI use-case delivery.',
      },
      {
        product: 'watsonx.data',
        capabilities:
          'Lakehouse architecture, federated query across stores, building AI-ready data products on hybrid stacks.',
      },
      {
        product: 'watsonx.data intelligence',
        area: 'Data governance · data lineage',
        capabilities:
          'Active metadata and catalog design, automated lineage capture, policy enforcement on data products.',
      },
      {
        product: 'watsonx.data integration',
        area: 'ETL/ELT · real-time streaming',
        capabilities:
          'Real-time streaming pipelines, ETL/ELT, change data capture, event-driven data flows into the lakehouse.',
      },
      {
        product: 'watsonx.governance',
        capabilities:
          'Model lifecycle governance, evaluation harness setup, bias and drift monitoring, audit evidence capture.',
      },
    ],
  },
  {
    group: 'IBM Security',
    items: [
      {
        product: 'IBM Verify Identity Protection',
        capabilities:
          'AI access controls, identity governance for human and agent users, zero-trust patterns for governed AI workloads.',
      },
    ],
  },
  {
    group: 'IBM Automation',
    items: [
      {
        product: 'IBM Business Automation',
        capabilities:
          'Process orchestration, workflow and decision automation, document understanding, back-office automation paired with governed AI.',
      },
    ],
  },
];

export default function PartnershipsPage() {
  return (
    <>
      {/* HERO */}
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

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Partnerships
            </div>

            <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.0] tracking-[-0.025em] text-brand-ink">
              An IBM Business Partner.
              <br />
              <span className="text-brand-blue">Enterprise-grade. Portable when you need it.</span>
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              Greyquill is a Silver-tier IBM Partner Plus member, certified across watsonx and IBM Verify. We chose this foundation deliberately: it gives our customers enterprise-grade reliability, supports regulatory requirements out of the box, and keeps the architecture flexible as things change.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Talk to us about your AI stack
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
              </Link>
              <Link
                href="/products"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See the platform
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            {/* IBM Partner Plus Silver mark — pos silver variant on light bg.
                Clear space and minimum size honour IBM Partner Marks Guidelines v1.4. */}
            <div className="bg-white rounded-2xl ring-1 ring-black/[0.05] shadow-xl shadow-brand-blue/5 p-10 md:p-14">
              <Image
                src="/images/partners/ibm-partner-plus-silver.png"
                alt="IBM Partner Plus · Silver Partner"
                width={600}
                height={420}
                priority
                className="w-auto h-auto max-w-[220px] md:max-w-[260px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT THIS SIGNALS */}
      <Section
        eyebrow="What this signals"
        title={
          <>
            Why we partner, <br className="hidden md:block" />
            <span className="text-brand-blue">and what it means for you.</span>
          </>
        }
        intro="A partnership is meaningful only when both parties bring something the other cannot, and when the customer keeps every option. That is the only kind we are interested in."
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {SIGNALS.map((s) => (
            <div
              key={s.h}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 md:p-8 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo"
            >
              <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink mb-2.5">
                {s.h}
              </h3>
              <p className="text-brand-ink/70 leading-relaxed text-[15px]">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CERTIFICATIONS */}
      <Section
        tone="mist"
        eyebrow="Where we hold certifications"
        title={
          <>
            Technical depth <br className="hidden md:block" />
            <span className="text-brand-blue">across the stack we ship on.</span>
          </>
        }
        intro="Every product in the platform is built and operated by engineers who hold current certifications across the underlying IBM stack. The work is done by the same people who understand it end to end."
      >
        <div className="space-y-8">
          {CERTS.map((group) => (
            <div key={group.group}>
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-4">
                {group.group}
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {group.items.map((c) => (
                  <div
                    key={c.product}
                    className="bg-white rounded-xl ring-1 ring-black/[0.05] p-5 md:p-6 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo flex flex-col"
                  >
                    <h4 className="font-display font-semibold text-brand-ink text-base md:text-lg leading-tight">
                      {c.product}
                    </h4>
                    {c.area && (
                      <p className="mt-1.5 text-[12px] uppercase tracking-[0.14em] text-brand-blue/70 font-semibold leading-snug">
                        {c.area}
                      </p>
                    )}
                    <p className="mt-4 pt-4 border-t border-black/[0.06] text-[13.5px] text-brand-ink/75 leading-relaxed flex-1">
                      {c.capabilities}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA — dark, with reverse-white IBM badge */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Bring your stack. <br className="hidden md:block" />
              We will tell you what fits.
            </h2>
            <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              A 30-minute call. Bring your current architecture, regulatory regime, or
              planned use case. We will tell you honestly where the IBM stack belongs,
              where it does not, and what the alternatives look like.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
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
                See the platform
              </Link>
            </div>
          </div>

          <div className="md:col-span-4 flex justify-center md:justify-end">
            <Image
              src="/images/partners/ibm-partner-plus-silver-white.png"
              alt="IBM Partner Plus · Silver Partner"
              width={600}
              height={420}
              className="w-auto h-auto max-w-[180px] md:max-w-[200px] opacity-95"
            />
          </div>
        </div>
      </section>
    </>
  );
}
