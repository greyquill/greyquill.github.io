import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductSubnav from '@/components/ProductSubnav';

export const metadata: Metadata = {
  title: 'ClarityAI · Score the clarity and risk of any initiative',
  description:
    'ClarityAI analyzes your PRDs, AI initiative briefs, and feature specs in seconds. Returns a clarity score, line-level fixes, and a board-ready summary. Built on the Greyquill Method.',
  alternates: { canonical: 'https://greyquill.io/products/clarity-ai' },
};

const CLARITY_URL = 'https://clarity.greyquill.io';

const CAPABILITIES = [
  {
    title: 'Ingest any specification',
    body: 'PRDs, AI initiative briefs, user stories, RFPs, statements of work. Drop in PDF, DOCX, or plain text.',
  },
  {
    title: 'Score across the dimensions that matter',
    body: 'Ambiguity. Testability. Edge-case coverage. Regulatory exposure. Dependency risk. Each scored, each defensible.',
  },
  {
    title: 'Pinpoint the fixes line by line',
    body: '"Should be fast" becomes "specify response time". Vague requirements get rewritten as concrete, testable language.',
  },
  {
    title: 'Hand the board a one-page summary',
    body: 'A clear go / hold / kill recommendation, with the three biggest risks named and the cheapest path to clarity.',
  },
];

const USE_CASES = [
  {
    role: 'Heads of AI · CDOs',
    title: 'Triaging the AI initiative backlog',
    body: 'You have 30 use cases proposed and budget for 5. ClarityAI ranks them by clarity, regulatory exposure, and data readiness in an afternoon.',
  },
  {
    role: 'Product · Engineering leadership',
    title: 'Pre-flight on every PRD',
    body: 'Catch ambiguity before sprint planning. Cut review cycles from three rounds to one. Stop arguing about what "fast" means.',
  },
  {
    role: 'Consulting · Agency teams',
    title: 'Discovery scoping that wins deals',
    body: "Hand a client a gap report on their RFP within hours. Show them what they didn't know they needed to specify.",
  },
];

function ScorePreview() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/[0.06]">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[11px] font-mono text-brand-ink/55 truncate">
          ai-initiative-fraud-detection-v2.pdf
        </span>
      </div>
      <div className="flex items-baseline gap-3 mb-3">
        <span className="font-display font-bold text-5xl text-brand-blue leading-none">62</span>
        <span className="text-xs uppercase tracking-[0.18em] text-brand-ink/55">
          Clarity score · of 100
        </span>
      </div>
      <div className="h-1.5 bg-black/[0.06] rounded-full overflow-hidden mb-5">
        <div className="h-full w-[62%] bg-gradient-to-r from-brand-blue to-brand-blue-light rounded-full" />
      </div>
      <div className="space-y-2 text-[12.5px]">
        <div className="flex items-start gap-2 p-2.5 bg-amber-50 rounded border-l-2 border-amber-400">
          <span className="font-semibold text-amber-800 shrink-0">Line 14</span>
          <span className="text-brand-ink/80">
            &quot;real-time decisioning&quot; — specify SLA (e.g. p99 &lt; 250ms)
          </span>
        </div>
        <div className="flex items-start gap-2 p-2.5 bg-red-50 rounded border-l-2 border-red-400">
          <span className="font-semibold text-red-700 shrink-0">Line 38</span>
          <span className="text-brand-ink/80">
            No fairness or explainability requirement; flagged for FCA / EU AI Act review
          </span>
        </div>
        <div className="flex items-start gap-2 p-2.5 bg-amber-50 rounded border-l-2 border-amber-400">
          <span className="font-semibold text-amber-800 shrink-0">Line 52</span>
          <span className="text-brand-ink/80">
            Training data lineage unstated — blocks MRM signoff
          </span>
        </div>
      </div>
      <div className="mt-5 pt-4 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        12 issues found · 4 critical · est. 2 days to remediate
      </div>
    </div>
  );
}

export default function ClarityAIPage() {
  return (
    <>
      <ProductSubnav currentHref="/products/clarity-ai" />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)',
          }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.25] pointer-events-none"
          style={{
            backgroundImage:
              'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
            backgroundSize: '30px 30px',
            maskImage:
              'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Product · Diagnose tier
              <span className="ml-1 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-700">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                Live
              </span>
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              <span className="text-brand-blue">ClarityAI.</span>
              <br />
              Score the clarity and risk of any initiative,
              <br />
              before you fund it.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              Drop in a PRD, an AI initiative brief, or an RFP. ClarityAI returns a
              clarity score, line-by-line fixes, and a one-page summary you can take
              into a steering committee. Minutes, not weeks.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CLARITY_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Try ClarityAI free
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
              </a>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                Talk to us first
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
              </Link>
            </div>

            <div className="mt-12 pt-6 border-t border-black/[0.08] flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-brand-ink/60">
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                No signup required to try
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                PDF, DOCX, plain text
              </span>
              <span className="inline-flex items-center gap-2">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue" />
                Results in 30 seconds
              </span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ScorePreview />
          </div>
        </div>
      </section>

      {/* THE DILEMMA */}
      <Section
        tone="mist"
        eyebrow="The dilemma it solves"
        title={
          <>
            Most projects fail before <br className="hidden md:block" />
            <span className="text-brand-blue">a single line of code.</span>
          </>
        }
        intro="Vague requirements are the single biggest cause of stalled software and AI initiatives. The cost is paid in re-scoping, missed audits, and engineering rework that nobody planned for."
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              h: '70%',
              p: 'of software projects fail because of unclear requirements, not bad code.',
            },
            {
              h: '60%',
              p: 'of AI projects will be abandoned without AI-ready specifications by 2026.',
            },
            {
              h: '11 weeks',
              p: 'is the median wait for an AI use case to clear MRM when the brief is incomplete.',
            },
          ].map((s) => (
            <div
              key={s.h}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6"
            >
              <div className="font-display font-semibold text-3xl md:text-4xl text-brand-blue leading-none">
                {s.h}
              </div>
              <p className="mt-3 text-brand-ink/75 leading-relaxed text-[15px]">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CAPABILITIES */}
      <Section
        eyebrow="What ClarityAI does"
        title={
          <>
            Four moves, in <span className="text-brand-blue">under a minute</span>.
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-5 md:gap-6">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 md:p-8 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/70 mb-2.5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink mb-2">
                {c.title}
              </h3>
              <p className="text-brand-ink/70 leading-relaxed">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* USE CASES */}
      <Section
        tone="mist"
        eyebrow="Who uses it"
        title={
          <>
            Three teams, one tool, <br className="hidden md:block" />
            three different wins.
          </>
        }
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {USE_CASES.map((u) => (
            <div
              key={u.title}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo flex flex-col"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/80 mb-3">
                {u.role}
              </div>
              <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink mb-2.5">
                {u.title}
              </h3>
              <p className="text-brand-ink/70 leading-relaxed text-[15px]">{u.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHERE IT FITS */}
      <Section
        eyebrow="Where it fits"
        title={
          <>
            The diagnose tier <br className="hidden md:block" />
            <span className="text-brand-blue">of the Greyquill platform.</span>
          </>
        }
        intro="ClarityAI tells you whether to fund an initiative. GQData makes the data underneath trustworthy. GQ Agents runs governed workflows. GST Co-Pilot is what those workflows look like in production."
      >
        <ProductSiblingChips currentHref="/products/clarity-ai" />
      </Section>

      {/* FINAL CTA */}
      <section className="py-16 md:py-24 bg-brand-ink text-white relative overflow-hidden">
        <div
          aria-hidden
          className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]"
        />
        <div
          aria-hidden
          className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]"
        />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-5">
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Ready to see it
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Score your next initiative <br className="hidden md:block" />
            in under a minute.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            ClarityAI lives at its own address. Drop in a brief and see the score yourself.
            No signup, no email gate.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a
              href={CLARITY_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/15"
            >
              Open ClarityAI
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
            <Link
              href="/contact"
              className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors"
            >
              Or talk to us first
            </Link>
          </div>
          <div className="mt-6 text-[11px] text-white/45">
            Opens at clarity.greyquill.io in a new tab
          </div>
        </div>
      </section>
    </>
  );
}
