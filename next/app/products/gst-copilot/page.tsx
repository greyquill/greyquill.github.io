import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductSubnav from '@/components/ProductSubnav';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'GST Co-Pilot · Governed agentic AI for Indian tax reconciliation',
  description:
    'A four-agent system that turns 40+ hours/month of manual GST work into hours. Built for Indian SMB and mid-market tax teams. The reference architecture for governed agentic AI in production.',
  alternates: { canonical: 'https://greyquill.io/products/gst-copilot' },
};

const AGENTS = [
  {
    name: 'Ingestion',
    body: 'Pulls invoices from email, drives, and ERP exports. SHA-256 deduplication, file-type validation, vendor hint extraction.',
  },
  {
    name: 'Extraction',
    body: 'Vision-language models extract line items, GSTIN, HSN, taxable values, and tax splits from PDFs and scans. Outputs a structured invoice record with confidence scores.',
  },
  {
    name: 'Reconciliation',
    body: 'Match engine compares purchase register lines against GSTR-2B. Probabilistic matching, fuzzy GSTIN handling, period-shift tolerance, ITC eligibility checks.',
  },
  {
    name: 'Resolution',
    body: 'Drafts vendor follow-ups, generates exception summaries, escalates above the human-review threshold. Hands the CFO a filing-ready summary at month end.',
  },
];

const PROOF = [
  {
    h: '40+ hrs/mo',
    p: 'spent by an average mid-market tax team on manual reconciliation. Compressed to hours with the co-pilot.',
  },
  {
    h: '₹13–17 L/yr',
    p: 'spent on GST compliance overhead per business. Most of it is rework that disappears when reconciliation is governed.',
  },
  {
    h: '162 tests',
    p: 'in the AI service. 88% coverage. Engineering rigor designed for an audit, not a demo.',
  },
];

const FOR = [
  {
    role: 'CFOs · Heads of Finance',
    body: 'Stop month-end being a fire drill. Get a filing-ready summary with exceptions named, reasons surfaced, and human review only where it matters.',
  },
  {
    role: 'CA firms and AP teams',
    body: 'Triple your throughput per analyst. Spend the saved hours on advisory work, not on chasing GSTR-2B mismatches.',
  },
  {
    role: 'CIOs · CTOs',
    body: 'A reference architecture for governed agentic AI in production. Adapt the same pattern to AP, vendor risk, audit readiness.',
  },
];

function ReconciliationVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="flex items-baseline justify-between mb-3">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Reconciliation summary · Apr 2026
        </div>
        <div className="text-[10px] text-brand-ink/55 font-mono">GSTIN · 27AABCG1234F1ZP</div>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-3">
        <div className="rounded-lg bg-emerald-500/8 border border-emerald-500/20 p-2 text-center">
          <div className="text-[9px] font-semibold tracking-[0.18em] text-emerald-700">MATCHED</div>
          <div className="font-display font-bold text-xl text-emerald-700 mt-1 leading-none">142</div>
        </div>
        <div className="rounded-lg bg-amber-500/8 border border-amber-500/20 p-2 text-center">
          <div className="text-[9px] font-semibold tracking-[0.18em] text-amber-700">EXCEPTIONS</div>
          <div className="font-display font-bold text-xl text-amber-700 mt-1 leading-none">8</div>
        </div>
        <div className="rounded-lg bg-red-500/8 border border-red-500/20 p-2 text-center">
          <div className="text-[9px] font-semibold tracking-[0.18em] text-red-700">MISSING</div>
          <div className="font-display font-bold text-xl text-red-700 mt-1 leading-none">3</div>
        </div>
      </div>

      <div className="space-y-1.5">
        {[
          { row: 'Acme Holdings · ₹2,84,500', state: 'matched', note: 'Full match · ITC eligible' },
          { row: 'Vector Logistics · ₹1,12,000', state: 'exception', note: 'Period mismatch · GSTR-2B Mar' },
          { row: 'Bluestone Mfg · ₹64,200', state: 'missing', note: 'Vendor not filed · auto-draft sent' },
        ].map((r) => (
          <div key={r.row} className="flex items-start gap-2 text-[12px] p-2 rounded border border-black/[0.05] bg-brand-mist/30">
            <span
              aria-hidden
              className={
                r.state === 'matched'
                  ? 'mt-1 h-1.5 w-1.5 rounded-full bg-emerald-500 shrink-0'
                  : r.state === 'exception'
                  ? 'mt-1 h-1.5 w-1.5 rounded-full bg-amber-500 shrink-0'
                  : 'mt-1 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0'
              }
            />
            <div className="min-w-0 flex-1">
              <div className="text-brand-ink font-semibold leading-tight">{r.row}</div>
              <div className="text-brand-ink/60 text-[11px] leading-tight">{r.note}</div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-[11px]">
        <span className="text-brand-ink/55">
          Human review queue · <span className="font-semibold text-brand-ink/75">2 items</span>
        </span>
        <span className="text-brand-blue font-semibold">Filing-ready ✓</span>
      </div>
    </div>
  );
}

export default function GSTCoPilotPage() {
  return (
    <>
      <ProductSubnav currentHref="/products/gst-copilot" />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div aria-hidden className="absolute inset-0" style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }} />
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

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Product · Activate tier · Vertical proof
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              <span className="text-brand-blue">GST Co-Pilot.</span>
              <br />
              From forty hours a month
              <br />
              to an afternoon.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              A four-agent system that handles invoice ingestion, extraction, GSTR-2B
              reconciliation, and exception resolution for Indian SMB and mid-market tax
              teams. The reference architecture for what governed agentic AI looks like
              in production.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Book a demo
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
              </a>
              <Link
                href="/products/agents"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See the agentic stack
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ReconciliationVisual />
          </div>
        </div>
      </section>

      {/* THE PAIN */}
      <Section
        tone="mist"
        eyebrow="The dilemma it solves"
        title={
          <>
            GST compliance is a tax <br className="hidden md:block" />
            <span className="text-brand-blue">on every Indian business.</span>
          </>
        }
        intro="Manual invoice handling. Manual data entry into Tally and Zoho. Manual GSTR-2B reconciliation. Vendor follow-ups for missing invoices. Audit trail panic. The cost is paid in finance team hours that should be spent advising the business, not chasing mismatches."
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {PROOF.map((s) => (
            <div key={s.h} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6">
              <div className="font-display font-semibold text-3xl md:text-4xl text-brand-blue leading-none">{s.h}</div>
              <p className="mt-3 text-brand-ink/75 leading-relaxed text-[15px]">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* THE FOUR AGENTS */}
      <Section
        eyebrow="How it works"
        title={
          <>
            Four agents, <br className="hidden md:block" />
            <span className="text-brand-blue">one supervisor, one filing.</span>
          </>
        }
        intro="An orchestrator agent reads intent, routes work, and escalates to a human reviewer above a configurable threshold. Four domain agents do the work. Every action is logged, every output is traced, every override is recorded."
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {AGENTS.map((a, i) => (
            <div key={a.name} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="text-[10px] font-semibold tracking-[0.2em] text-brand-blue/70">
                  AGENT 0{i + 1}
                </span>
              </div>
              <h3 className="font-display font-semibold text-lg text-brand-ink mb-2">{a.name}</h3>
              <p className="text-brand-ink/70 leading-relaxed text-[14px]">{a.body}</p>
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
            <span className="text-brand-blue">three reasons it matters.</span>
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
        eyebrow="Why it matters as proof"
        title={
          <>
            What governed agentic AI <br className="hidden md:block" />
            <span className="text-brand-blue">looks like in production.</span>
          </>
        }
        intro="GST Co-Pilot is not a prototype. It is the same pattern we use for every governed agentic engagement, applied to a domain we know cold. Everything ClarityAI scores, GQData feeds, and GQ Agents runs is visible here, end to end, on a real workload that already moves money."
      >
        <ProductSiblingChips currentHref="/products/gst-copilot" />
      </Section>

      {/* OTHER VERTICAL ACCELERATORS */}
      <Section
        tone="mist"
        eyebrow="Other live verticals"
        title={
          <>
            Same pattern, <br className="hidden md:block" />
            <span className="text-brand-blue">different domain.</span>
          </>
        }
        intro="GST Co-Pilot is one of several vertical accelerators we ship. Each one applies governed agentic AI to a specific industry."
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {[
            {
              name: 'Commerce Synapse',
              domain: 'Retail and commerce',
              body: 'AI-orchestrated commerce operations on a trusted product and customer foundation.',
              href: 'https://commerce-synapse.com',
            },
            {
              name: 'Umami',
              domain: 'Healthcare · medical practices',
              body: 'AI-powered practice management built for clinical workflows and audit trails.',
              href: 'https://umami.greyquill.io',
            },
          ].map((v) => {
            const params = new URLSearchParams({
              url: v.href,
              screenshot: 'true',
              meta: 'false',
              embed: 'screenshot.url',
              'viewport.width': '1280',
              'viewport.height': '720',
              type: 'jpeg',
            });
            const previewSrc = `https://api.microlink.io/?${params.toString()}`;
            return (
              <a
                key={v.name}
                href={v.href}
                target="_blank"
                rel="noopener"
                className="group block bg-white rounded-2xl ring-1 ring-black/[0.05] overflow-hidden hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo"
              >
                <div className="aspect-[16/9] bg-brand-mist/30 overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={previewSrc}
                    alt={`${v.name} homepage preview`}
                    loading="lazy"
                    className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
                  />
                </div>
                <div className="p-7 md:p-8">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-3">
                    {v.domain}
                  </div>
                  <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink mb-2">
                    {v.name}
                  </h3>
                  <p className="text-brand-ink/70 leading-relaxed text-[15px]">{v.body}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                    Visit site
                    <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </Section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Get this month&apos;s GST done <br className="hidden md:block" />
            without the all-nighters.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            We&apos;ll walk you through a real reconciliation cycle on your own data,
            in a controlled environment. You see exactly where the hours go.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/15">
              Book a demo
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
            <Link href="/products" className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors">
              See the platform
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
