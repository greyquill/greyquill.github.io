import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductSubnav from '@/components/ProductSubnav';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'GQ Agents · Multi-agent orchestration with audit trails',
  description:
    'GQ Agents scopes what an agent can see, masks what it should not read in the clear, gates the step that needs a person, and proves it worked by checking the actual result through an independent harness.',
  alternates: { canonical: 'https://greyquill.io/products/agents' },
};

const OFFERS = [
  { title: 'Create', body: 'Define a playbook once: what it does, what it may read, what triggers it. Portable and declarative.' },
  { title: 'Compose', body: 'Agents invoke each other through packets. No hidden hierarchy decides who does what.' },
  { title: 'Scope & mask', body: 'An agent sees exactly the attributes its playbook names, and nothing else.' },
  { title: 'Gate', body: 'A threshold decides when a person has to sign off before the run continues.' },
  { title: 'Verify', body: 'An independent harness checks the actual result the run produced.' },
  { title: 'Observe', body: 'Token spend, cost, and latency, visible per run and per step as it happens.' },
];

function ScopeMaskVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="flex items-center justify-between mb-4">
        <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55">
          Playbook · claims-triage
        </div>
        <span className="text-[10px] font-mono text-brand-ink/40">scope</span>
      </div>

      <div className="space-y-2.5">
        <div className="rounded-lg border border-black/[0.06] bg-brand-mist/35 p-3">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="font-display font-semibold text-[13px] text-brand-ink">Claim</span>
            <span className="text-[10px] font-mono text-brand-ink/50">all attributes</span>
          </div>
          <div className="text-[11.5px] text-brand-ink/65">amount, status, filed_at, adjuster_id …</div>
        </div>

        <div className="rounded-lg border border-amber-400/40 bg-amber-50 p-3">
          <div className="flex items-baseline justify-between gap-2 mb-1">
            <span className="font-display font-semibold text-[13px] text-brand-ink">PolicyHolder</span>
            <span className="text-[10px] font-mono text-amber-700">full_name, address</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11.5px] text-brand-ink/65">
            <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-amber-500" />
            masked · tok_9f21ac30, never the value itself
          </div>
        </div>

        <div className="rounded-lg border border-black/[0.06] bg-white p-3 text-[11px] text-brand-ink/45">
          Every other attribute on PolicyHolder: not handed to the agent, in any form.
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        An attribute not named here never reaches the agent, masked or not.
      </div>
    </div>
  );
}

function GateVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-4">
        Same playbook · the gate
      </div>

      <div className="space-y-2">
        <div className="rounded-lg bg-brand-mist/40 p-3 text-[12.5px] text-brand-ink/80">
          Claim.amount is <span className="font-mono">₹62,400</span> — above the ₹50,000 threshold
        </div>
        <div className="flex justify-center py-0.5">
          <svg viewBox="0 0 16 16" className="h-3.5 w-3.5 text-brand-ink/30" aria-hidden>
            <path d="M8 2v10M4 9l4 4 4-4" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <div className="rounded-lg border border-amber-400/40 bg-amber-50 p-3 flex items-center justify-between gap-3">
          <span className="text-[12.5px] text-amber-900">Run pauses · routed to <span className="font-mono">gqdata:steward</span></span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-amber-700 shrink-0">A person decides</span>
        </div>
      </div>

      <div className="mt-4 pt-3 border-t border-black/[0.06] text-[11px] text-brand-ink/55">
        Under ₹50,000, the same gate lets the run continue on its own. The threshold lives in policy, so changing it doesn't touch code.
      </div>
    </div>
  );
}

function VerificationVisual() {
  const steps = [
    { label: 'Agent finishes a step', detail: 'and reports done' },
    { label: 'An independent check runs', detail: 'against the artifact it actually produced' },
    { label: 'Pass or fail is recorded', detail: 'before the agent ever sees the answer' },
  ];
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-5">
        How a pass earns its name
      </div>
      <div className="grid grid-cols-3 gap-3">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col">
            <div className="h-7 w-7 rounded-full bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-[11px] font-bold text-brand-blue font-mono mb-2.5">
              {i + 1}
            </div>
            <div className="text-[12.5px] font-semibold text-brand-ink leading-snug">{s.label}</div>
            <div className="text-[11px] text-brand-ink/55 leading-snug mt-0.5">{s.detail}</div>
          </div>
        ))}
      </div>
      <div className="mt-5 pt-4 border-t border-black/[0.06] text-[11.5px] text-brand-ink/65 leading-relaxed">
        Before a check ships, a do-nothing agent has to fail it and a correct answer has to pass it, every time.
        A check that lets a lazy answer through never goes live.
      </div>
    </div>
  );
}

export default function GQAgentsPage() {
  return (
    <>
      <ProductSubnav currentHref="/products/agents" />

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
              Product · Activate tier
            </div>

            <h1 className="font-display font-semibold text-[44px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.0] tracking-[-0.025em] text-brand-ink">
              <span className="text-brand-blue">GQ Agents.</span>
              <br />
              Every result passes
              <br />
              through a verification harness.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              An agent only sees what its playbook names. A threshold decides when a
              person steps in. And a pass is something an independent harness found by
              checking the actual result.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener"
                className="group inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30 hover:bg-brand-blue-dark"
              >
                Book a walkthrough
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
              </a>
              <Link
                href="/products/gst-copilot"
                className="group inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See it in production
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            <ScopeMaskVisual />
          </div>
        </div>
      </section>

      {/* DILEMMA */}
      <Section
        tone="mist"
        eyebrow="The dilemma it solves"
        title={
          <>
            Agents are easy to demo. <br className="hidden md:block" />
            <span className="text-brand-blue">Hard to defend.</span>
          </>
        }
        intro="When the regulator or the board asks what an agent did and why, most teams can only hand over a transcript."
      >
        <div className="grid sm:grid-cols-2 gap-5 md:gap-6 max-w-2xl">
          {[
            { h: '95%', p: 'of GenAI pilots deliver zero P&L impact (MIT, 2025).' },
            { h: '63%', p: 'of organisations have no formal AI governance in place (IBM/Reco, 2025).' },
          ].map((s) => (
            <div key={s.h} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6">
              <div className="font-display font-semibold text-3xl md:text-4xl text-brand-blue leading-none">{s.h}</div>
              <p className="mt-3 text-brand-ink/75 leading-relaxed text-[15px]">{s.p}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHAT IT OFFERS — the centerpiece: the full breadth, up front */}
      <Section
        eyebrow="What GQ Agents offers"
        title={
          <>
            Everything it takes to run <br className="hidden md:block" />
            <span className="text-brand-blue">an agent you can defend.</span>
          </>
        }
        intro="Six things happen around every action an agent takes. The three below have a visual, because they're the ones worth seeing rather than reading about."
      >
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {OFFERS.map((o, i) => (
            <div key={o.title} className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 hover:ring-brand-blue/30 transition-all duration-300 ease-out-expo">
              <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-brand-blue/70 mb-2.5">
                {String(i + 1).padStart(2, '0')}
              </div>
              <h3 className="font-display font-semibold text-[17px] text-brand-ink mb-1.5">{o.title}</h3>
              <p className="text-brand-ink/70 leading-relaxed text-[14px]">{o.body}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* HOW IT WORKS — visual, grounded in the real playbook model */}
      <Section
        tone="mist"
        eyebrow="How it works"
        title={
          <>
            The same playbook, <br className="hidden md:block" />
            <span className="text-brand-blue">two decisions made before it runs.</span>
          </>
        }
      >
        <div className="grid md:grid-cols-2 gap-6">
          <ScopeMaskVisual />
          <GateVisual />
        </div>
      </Section>

      {/* INDEPENDENT VERIFICATION */}
      <Section eyebrow="Independent verification">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5">
            <h3 className="font-display font-semibold text-2xl md:text-[28px] text-brand-ink leading-tight mb-3">
              We don&apos;t take an agent&apos;s word for it.
            </h3>
            <p className="text-brand-ink/75 leading-relaxed text-[15px]">
              Every check that decides whether a run passed is tested against a correct
              answer and a wrong one before it ever grades a real run. If a lazy or wrong
              result can slip through, the check doesn&apos;t ship. That discipline, built
              for our own agent workforce, is what a pass on your workload means too.
            </p>
          </div>
          <div className="lg:col-span-7">
            <VerificationVisual />
          </div>
        </div>
      </Section>

      {/* WHERE IT FITS */}
      <Section
        eyebrow="Where it fits"
        title={
          <>
            The activation tier <br className="hidden md:block" />
            <span className="text-brand-blue">over a trusted foundation.</span>
          </>
        }
        intro="GQ Agents runs on top of GQData and asks GQ Govern's gates before every governed step. Without trusted data and an enforced policy, an audit-ready agent is still wrong, just provably wrong. GST Co-Pilot is what GQ Agents looks like in production for a real regulated workload."
      >
        <ProductSiblingChips currentHref="/products/agents" />
      </Section>

      {/* FINAL CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 text-center">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
            Ship agents you can <br className="hidden md:block" />
            answer the regulator about.
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Bring a workflow you wish you could automate but can&apos;t defend yet.
            We&apos;ll walk you through how GQ Agents would handle it, end to end.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <a href={CALENDLY_URL} target="_blank" rel="noopener" className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-2xl hover:shadow-white/15">
              Book a walkthrough
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
            <Link href="/products/gst-copilot" className="text-white/85 hover:text-white font-semibold px-3 py-3.5 transition-colors">
              See the production proof
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
