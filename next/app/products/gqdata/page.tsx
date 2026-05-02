import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'GQData · Master data and lineage for AI-ready data',
  description:
    'GQData unifies master data, repairs quality at source, makes lineage queryable, and classifies sensitivity. The trusted-data foundation under every model and agent.',
  alternates: { canonical: 'https://greyquill.io/products/gqdata' },
};

const CAPABILITIES = [
  {
    title: 'Master data unification',
    body:
      'Resolve fragmented customer, product, vendor, and account records into a golden record. Probabilistic and deterministic matching, survivorship rules you can defend.',
  },
  {
    title: 'Quality repaired at source',
    body:
      'Cleansing, deduplication, validation, and standardisation enforced where data enters, not in a downstream report. Issues fixed once, not patched every quarter.',
  },
  {
    title: 'Active lineage that you can query',
    body:
      'Every field traced from its system of record through every transformation to every consuming model, agent, or dashboard. One query answers "where did this number come from?".',
  },
  {
    title: 'Sensitivity classification by default',
    body:
      'PII, PCI, PHI, and jurisdiction-specific categories detected and tagged automatically. Access controls and masking enforced at runtime, not in policy documents.',
  },
];

const FOR = [
  {
    role: 'Chief Data Officers',
    body: 'Stop your AI roadmap stalling on "the data isn\'t ready". Make readiness measurable and the path to ready visible.',
  },
  {
    role: 'Heads of AI / ML platform leads',
    body: 'Give every model and agent the same trusted feature surface. Stop debugging "why is this score wrong" only to find a stale join.',
  },
  {
    role: 'Risk and compliance officers',
    body: 'Hand the regulator one query that answers "show me lineage and access trail for this decision". Without spreadsheets.',
  },
];

function DataUnificationVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-4">
        Customer 360 · golden record
      </div>

      <div className="grid grid-cols-[1fr_auto_1fr] gap-3 items-stretch">
        {/* Source records */}
        <div className="space-y-2">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
            Source records
          </div>
          {[
            { sys: 'CRM', name: 'Acme Holdings Ltd', id: 'C-44182', addr: '11 Park Ave' },
            { sys: 'BILLING', name: 'ACME Holdings', id: 'BX-9912', addr: '11 Park Avenue' },
            { sys: 'SUPPORT', name: 'Acme Hldg.', id: 'SF-30021', addr: '11 Park Av., NY' },
          ].map((r) => (
            <div key={r.sys} className="rounded-lg border border-black/[0.06] bg-brand-mist/35 p-2.5">
              <div className="text-[9px] font-semibold tracking-[0.2em] text-brand-blue/70 mb-1">
                {r.sys}
              </div>
              <div className="text-[12px] font-semibold text-brand-ink leading-tight">{r.name}</div>
              <div className="text-[10.5px] text-brand-ink/55 font-mono mt-0.5">{r.id}</div>
              <div className="text-[10.5px] text-brand-ink/55 mt-0.5 truncate">{r.addr}</div>
            </div>
          ))}
        </div>

        {/* Resolution arrow */}
        <div className="flex items-center justify-center">
          <svg viewBox="0 0 32 16" className="w-7 h-4 text-brand-blue/70" aria-hidden>
            <path d="M0 8 H 24 M 18 3 L 24 8 L 18 13" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>

        {/* Golden record */}
        <div className="space-y-2 flex flex-col">
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-1">
            Golden entity
          </div>
          <div className="rounded-lg border-2 border-brand-blue/40 bg-white p-3 flex-1">
            <div className="flex items-center gap-1.5 mb-1.5">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-semibold tracking-[0.2em] text-brand-blue">RESOLVED</span>
            </div>
            <div className="text-[13px] font-semibold text-brand-ink leading-tight">
              Acme Holdings Limited
            </div>
            <div className="text-[10.5px] text-brand-ink/55 font-mono mt-1">GQ-001-44182</div>
            <div className="text-[10.5px] text-brand-ink/55 mt-1">11 Park Avenue, NY 10016</div>
            <div className="mt-2.5 pt-2 border-t border-black/[0.05] flex flex-wrap gap-1">
              {['CRM', 'BILL', 'CS'].map((t) => (
                <span key={t} className="text-[9px] font-mono text-brand-blue/70 bg-brand-blue/8 px-1.5 py-0.5 rounded">
                  {t}
                </span>
              ))}
            </div>
            <div className="mt-2 text-[10px] text-brand-ink/55">
              Confidence <span className="font-semibold text-brand-ink/75">0.97</span> · 3 sources
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-black/[0.06] grid grid-cols-3 gap-3 text-[10.5px]">
        <div>
          <div className="text-brand-ink/55">Lineage</div>
          <div className="font-semibold text-brand-ink">queryable</div>
        </div>
        <div>
          <div className="text-brand-ink/55">PII</div>
          <div className="font-semibold text-brand-ink">classified</div>
        </div>
        <div>
          <div className="text-brand-ink/55">Freshness</div>
          <div className="font-semibold text-brand-ink">&lt; 5 min</div>
        </div>
      </div>
    </div>
  );
}

export default function GQDataPage() {
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

        <div className="relative">
          <ProductBackLink currentName="GQData" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-10 md:pt-14 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Product · Govern tier
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              <span className="text-brand-blue">GQData.</span>
              <br />
              The trusted-data layer
              <br />
              beneath every AI decision.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              Master data unified into golden records. Quality repaired at source.
              Lineage made queryable. Sensitivity classified by default. So every model,
              agent, and decision runs on a record you can stand behind.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Book a discovery call
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

          <div className="lg:col-span-5">
            <DataUnificationVisual />
          </div>
        </div>
      </section>

      {/* DILEMMA */}
      <Section
        tone="mist"
        eyebrow="The dilemma it solves"
        title={
          <>
            AI is only as good as the data <br className="hidden md:block" />
            <span className="text-brand-blue">it stands on.</span>
          </>
        }
        intro="The reason most AI initiatives stall is not the model. It is the data underneath: fragmented across systems, of unknown lineage, with sensitivity nobody can vouch for. GQData fixes the foundation."
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            { h: '60%', p: 'of AI projects abandoned without AI-ready data by 2026 (Gartner).' },
            { h: '38%', p: 'of CDOs cite data quality and trust as the top blocker to AI value (Deloitte).' },
            { h: '11×', p: 'higher cost to fix a data quality issue at the report than at the source.' },
          ].map((s) => (
            <div key={s.h} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6">
              <div className="font-display font-semibold text-3xl md:text-4xl text-brand-blue leading-none">{s.h}</div>
              <p className="mt-3 text-brand-ink/75 leading-relaxed text-[15px]">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section
        eyebrow="What GQData does"
        title={
          <>
            Four foundations under <br className="hidden md:block" />
            <span className="text-brand-blue">every model and agent.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {CAPABILITIES.map((c, i) => (
            <div key={c.title} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 md:p-8 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/70 mb-2.5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink mb-2">{c.title}</h3>
              <p className="text-brand-ink/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHO USES IT */}
      <Section
        tone="mist"
        eyebrow="Who uses it"
        title={
          <>
            Three roles, <br className="hidden md:block" />
            <span className="text-brand-blue">one defensible foundation.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {FOR.map((u) => (
            <div key={u.role} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/80 mb-3">{u.role}</div>
              <p className="text-brand-ink/80 leading-relaxed text-[15px]">{u.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHERE IT FITS */}
      <Section
        eyebrow="Where it fits"
        title={
          <>
            The foundation <br className="hidden md:block" />
            <span className="text-brand-blue">under everything else.</span>
          </>
        }
        intro="GQData is the Govern tier of the Greyquill journey. ClarityAI says whether to fund the initiative. GQData makes sure the data underneath can carry it. GQ Agents and GST Co-Pilot are what becomes possible once the foundation holds."
      >
        <ProductSiblingChips currentHref="/products/gqdata" />
      </Section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Make your data the part of AI <br className="hidden md:block" />
            you can defend.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Thirty minutes. Bring your hardest data question. We&apos;ll tell you, honestly,
            whether GQData solves it and what the path to production looks like.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/15"
            >
              Book a discovery call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
            </Link>
            <Link href="/case-studies" className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors">
              Read case studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
