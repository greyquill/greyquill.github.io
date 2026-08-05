import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductSubnav from '@/components/ProductSubnav';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'GQ Govern · Controls that have to prove themselves',
  description:
    'GQ Govern checks a control automatically where it can and asks for a dated attestation where it can\'t, ties every pass to the policy actually enforcing it, and turns a miss into a tracked exception instead of a silent bypass. Owns the Diagnose role: AI-maturity assessment, model inventory, document intelligence.',
  alternates: { canonical: 'https://greyquill.io/products/govern' },
};

const CAPABILITIES = [
  {
    title: 'Policy registry',
    body:
      'A policy is authored, versioned, and approved like a record. A new save is a new version; anything that ran under version 3 stays explainable under version 3.',
  },
  {
    title: 'Workflow gates',
    body:
      'A workflow names its policy gates. GQ Govern evaluates them: pass, hold for approval, or refuse, with the policy named.',
  },
  {
    title: 'Evidence',
    body:
      'A pass names the policy actually enforcing it, in the words the person who set it up would use, not just a green checkmark.',
  },
  {
    title: 'Exceptions',
    body:
      'A miss gets a reason, a compensating action, a target date, and a name tied to a role, CFO or DPO, not just whoever was logged in.',
  },
  {
    title: 'Diagnose',
    body:
      'AI-maturity assessment, model inventory, and document intelligence over the policies a customer already has.',
  },
  {
    title: 'Standards library',
    body:
      'Five standards checkable today. Dozens more mapped by domain and region, so a workspace can find the one it actually needs.',
  },
];

function GateDecisionVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7 max-w-md mx-auto">
      <div className="flex items-center gap-2 mb-4 pb-3 border-b border-black/[0.06]">
        <span className="h-2 w-2 rounded-full bg-red-400" />
        <span className="h-2 w-2 rounded-full bg-amber-400" />
        <span className="h-2 w-2 rounded-full bg-emerald-400" />
        <span className="ml-2 text-[11px] font-mono text-brand-ink/55 truncate">
          workflow · promote-to-production · step 4
        </span>
      </div>

      <div className="space-y-2.5">
        {[
          { label: 'Data classification gate', status: 'Passed', tone: 'ok' },
          { label: 'Model risk sign-off gate', status: 'Passed', tone: 'ok' },
          { label: 'Disparate-impact threshold', status: 'Hold for approval', tone: 'hold' },
        ].map((g) => (
          <div
            key={g.label}
            className={`flex items-center justify-between gap-3 rounded-lg p-2.5 text-[12.5px] ${
              g.tone === 'ok' ? 'bg-emerald-50' : 'bg-amber-50'
            }`}
          >
            <span className="text-brand-ink/80">{g.label}</span>
            <span
              className={`shrink-0 font-semibold ${g.tone === 'ok' ? 'text-emerald-700' : 'text-amber-800'}`}
            >
              {g.status}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-5 pt-4 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        Routed to Model Risk · 2 approvals required · evidence pack drafting
      </div>
    </div>
  );
}

function EvidenceVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-4">
        Control · GDPR · Art. 5
      </div>
      <div className="rounded-lg border border-emerald-400/40 bg-emerald-50 p-3 mb-2.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[12.5px] font-semibold text-brand-ink">PII is classified and masked before use</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-emerald-700 shrink-0">Passing</span>
        </div>
      </div>
      <div className="space-y-2 pl-1">
        <div className="text-[11.5px] text-brand-ink/60 leading-snug">
          <span className="text-brand-ink/40 font-mono text-[10px] uppercase tracking-wide mr-1.5">checked</span>
          no PolicyHolder record carries an unmasked national_id or email
        </div>
        <div className="text-[11.5px] text-brand-ink/60 leading-snug">
          <span className="text-brand-ink/40 font-mono text-[10px] uppercase tracking-wide mr-1.5">enforced by</span>
          <span className="text-brand-blue font-medium">Mask PII · EU strict</span>, applied on every intake workflow
        </div>
      </div>
      <div className="mt-4 pt-3 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        The first line is a fact the verifier found. The second is why it&apos;s true, named once by the person who set it up.
      </div>
    </div>
  );
}

function ExceptionVisual() {
  const fields = [
    { k: 'Reason', v: 'Bias audit for the underwriting model is still in progress.' },
    { k: 'Compensating action', v: 'Manual review on every declined application above ₹2L.' },
    { k: 'Target date', v: '2026-09-30' },
    { k: 'Approved by', v: 'Chief Risk Officer' },
  ];
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="flex items-center justify-between gap-2 mb-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Control · disparate-impact threshold
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700">Documented exception</span>
      </div>
      <div className="space-y-2.5">
        {fields.map((f) => (
          <div key={f.k} className="rounded-lg bg-brand-mist/40 p-2.5">
            <div className="text-[9.5px] font-semibold uppercase tracking-[0.18em] text-brand-ink/45 mb-0.5">{f.k}</div>
            <div className="text-[12.5px] text-brand-ink/85 leading-snug">{f.v}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 pt-3 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        Past the target date, this stops reading as an exception and starts reading as overdue.
      </div>
    </div>
  );
}

export default function GQGovernPage() {
  return (
    <>
      <ProductSubnav currentHref="/products/govern" />

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

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-20 pb-16 md:pb-20 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              Product · Govern tier
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              <span className="text-brand-blue">GQ Govern.</span>
              <br />
              Controls that have
              <br />
              to prove themselves.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              Regulated enterprises rarely fail audits for lack of dashboards. They fail
              because the rule lived in a wiki, the exception got granted over email with
              no record, and nobody could produce the evidence when someone finally asked
              for it. GQ Govern stores the rule, records the exception, and keeps the
              evidence somewhere it can actually be produced on request.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Book a discovery call
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
              </a>
              <Link
                href="/platform"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See the platform
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <GateDecisionVisual />
          </div>
        </div>
      </section>

      {/* DILEMMA */}
      <Section
        tone="mist"
        eyebrow="The dilemma it solves"
        title={
          <>
            A rule nobody can produce <br className="hidden md:block" />
            <span className="text-brand-blue">is not a rule.</span>
          </>
        }
        intro="Policy scattered across wikis. Exceptions granted over email with no record anywhere. Evidence assembled by hand the week before an audit, if it gets assembled at all. GQ Govern stores each one and can produce it on its own when asked."
      >
        <></>
      </Section>

      {/* WHAT IT OFFERS — the centerpiece: the full breadth, up front */}
      <Section
        eyebrow="What GQ Govern offers"
        title={
          <>
            Five modules and a library <br className="hidden md:block" />
            <span className="text-brand-blue">that grows with you.</span>
          </>
        }
        intro="The two below have a visual, because a passing control and a documented exception are easier to see than to read about."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CAPABILITIES.map((c, i) => (
            <div
              key={c.title}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo"
            >
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/70 mb-2.5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-[17px] text-brand-ink mb-1.5">
                {c.title}
              </h3>
              <p className="text-brand-ink/70 leading-relaxed text-[14px]">{c.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS — visual, grounded in the real control model */}
      <Section
        tone="mist"
        eyebrow="How it works"
        title={
          <>
            Two controls, <br className="hidden md:block" />
            <span className="text-brand-blue">the same catalogue, two different outcomes.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-6">
          <EvidenceVisual />
          <ExceptionVisual />
        </div>
      </Section>

      {/* DIAGNOSE */}
      <Section
        eyebrow="How an engagement starts"
        title={
          <>
            Diagnose is the front door. <br className="hidden md:block" />
            <span className="text-brand-blue">Govern is what it becomes.</span>
          </>
        }
      >
        <div className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-7 md:p-9">
          <p className="text-brand-ink/75 leading-relaxed text-[15px] md:text-base max-w-3xl">
            Before an enterprise has a policy registry, it usually just has a question:
            how mature is our AI use, really. GQ Govern&apos;s Diagnose role answers that
            first, with an AI-maturity assessment and score, a model inventory of what
            exists and who owns it, and document intelligence that reads a customer&apos;s
            existing policies and drafts registry entries for a person to confirm. What
            Diagnose produces becomes the first version in the registry. It doesn&apos;t
            get filed away as a report nobody opens again.
          </p>
        </div>
      </Section>

      {/* WHERE IT FITS */}
      <Section
        eyebrow="Where it fits"
        title={
          <>
            The govern tier, <br className="hidden md:block" />
            <span className="text-brand-blue">between the data and the action.</span>
          </>
        }
        intro="GQData makes the data underneath trustworthy. GQ Govern turns that trust into an enforceable, evidenced rule. GQ Agents asks GQ Govern's gates before every governed step, and GST Co-Pilot is what that looks like running in production."
      >
        <ProductSiblingChips currentHref="/products/govern" />
      </Section>

      {/* FINAL CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Make the rule something <br className="hidden md:block" />
            the system can produce.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Thirty minutes. Bring your hardest policy or audit question. We&apos;ll tell
            you, honestly, whether GQ Govern solves it and what the path to production
            looks like.
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
