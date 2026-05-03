import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import ProductSiblingChips from '@/components/ProductSiblingChips';
import ProductSubnav from '@/components/ProductSubnav';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'GQ Agents · Multi-agent orchestration with audit trails',
  description:
    'GQ Agents runs multi-agent workflows with provenance built in. Every action is a work packet. Every result is logged. Every decision is replayable. Designed for regulated workloads.',
  alternates: { canonical: 'https://greyquill.io/products/agents' },
};

const CAPABILITIES = [
  {
    title: 'Work packets, not opaque chains',
    body:
      'Every unit of agent work is a structured envelope: instruction, context, success criteria, test command, invoker. Nothing happens off the record.',
  },
  {
    title: 'Peer agents, not hidden hierarchy',
    body:
      'Agents discover and invoke each other through a shared registry. No black-box framework deciding which model gets which task in production.',
  },
  {
    title: 'Replayable execution',
    body:
      'Every packet, every result, every shared-memory write is appended to an event log. Re-run any decision a regulator asks about. Show exactly what happened.',
  },
  {
    title: 'Human-in-the-loop where it matters',
    body:
      'Configurable escalation. Threshold-based handoff to a human reviewer. Approval gates for destructive or high-stakes actions. Built into the protocol, not patched on.',
  },
];

const FOR = [
  {
    role: 'Heads of AI · MLOps leads',
    body: 'Ship agentic workflows that pass model risk management on the first review, not the third. Hand the audit team a query, not a forensics project.',
  },
  {
    role: 'Risk and compliance officers',
    body: 'Approve agentic systems with confidence because every action is named, every output is traced, and every override is recorded.',
  },
  {
    role: 'Engineering leadership',
    body: 'Move past prompt-spaghetti. A protocol your team can reason about, debug, extend, and reuse across product lines.',
  },
];

function PacketFlowVisual() {
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-5 md:p-7">
      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-4">
        Work packet flow · live trace
      </div>

      {/* Three agent nodes with packets between them */}
      <div className="space-y-3">
        {/* Agent A → packet */}
        <div className="flex items-start gap-3">
          <div className="shrink-0 h-10 w-10 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-[11px] font-bold text-brand-blue font-mono">
            A
          </div>
          <div className="flex-1 rounded-lg border border-black/[0.06] bg-brand-mist/35 p-2.5 text-[11.5px]">
            <div className="text-[9px] font-semibold tracking-[0.18em] text-brand-blue/70 mb-1">
              PACKET · pkt_8a4f
            </div>
            <div className="text-brand-ink leading-snug">
              <span className="text-brand-ink/55">instruction:</span> classify invoice
            </div>
            <div className="text-brand-ink/65 leading-snug">
              <span className="text-brand-ink/45">success:</span> high-confidence label, citation
            </div>
          </div>
          <span className="text-brand-blue/60 text-[10px] mt-3">→ B</span>
        </div>

        {/* Agent B → packet */}
        <div className="flex items-start gap-3 pl-6">
          <div className="shrink-0 h-10 w-10 rounded-lg bg-brand-blue/10 border border-brand-blue/30 flex items-center justify-center text-[11px] font-bold text-brand-blue font-mono">
            B
          </div>
          <div className="flex-1 rounded-lg border border-black/[0.06] bg-brand-mist/35 p-2.5 text-[11.5px]">
            <div className="text-[9px] font-semibold tracking-[0.18em] text-brand-blue/70 mb-1">
              PACKET · pkt_8b1c
            </div>
            <div className="text-brand-ink leading-snug">
              <span className="text-brand-ink/55">instruction:</span> verify against ledger
            </div>
            <div className="text-brand-ink/65 leading-snug">
              <span className="text-brand-ink/45">human-review:</span> required if &gt; ₹50k
            </div>
          </div>
          <span className="text-brand-blue/60 text-[10px] mt-3">→ C</span>
        </div>

        {/* Agent C → result */}
        <div className="flex items-start gap-3 pl-12">
          <div className="shrink-0 h-10 w-10 rounded-lg bg-brand-ink text-white flex items-center justify-center text-[11px] font-bold font-mono">
            C
          </div>
          <div className="flex-1 rounded-lg border-2 border-brand-blue/30 bg-white p-2.5 text-[11.5px]">
            <div className="flex items-center gap-1.5 mb-1">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-semibold tracking-[0.18em] text-emerald-700">RESULT</span>
            </div>
            <div className="text-brand-ink leading-snug">Approved · ledger match 0.991</div>
            <div className="text-brand-ink/55 leading-snug font-mono text-[10px] mt-0.5">
              event_log.jsonl +3 entries
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-black/[0.06] grid grid-cols-3 gap-3 text-[10.5px]">
        <div>
          <div className="text-brand-ink/55">Provenance</div>
          <div className="font-semibold text-brand-ink">queryable</div>
        </div>
        <div>
          <div className="text-brand-ink/55">Replay</div>
          <div className="font-semibold text-brand-ink">deterministic</div>
        </div>
        <div>
          <div className="text-brand-ink/55">HITL</div>
          <div className="font-semibold text-brand-ink">protocol-native</div>
        </div>
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
              Multi-agent orchestration
              <br />
              with audit trails built in.
            </h1>

            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              Every action is a work packet. Every result is logged. Every decision is
              replayable. Designed for environments where you must prove what an agent
              did, why, and on whose behalf.
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
            <PacketFlowVisual />
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
        intro="Most agentic frameworks give you LLM calls and a prayer. When the regulator, auditor, or board member asks what your agent did and why, you have a transcript, not an answer. GQ Agents makes the answer the protocol."
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            { h: '95%', p: 'of GenAI pilots deliver zero P&L impact (MIT, 2025).' },
            { h: '63%', p: 'of organisations have no formal AI governance in place (IBM/Reco, 2025).' },
            { h: '11 wk', p: 'median wait for an agentic workload to clear MRM when provenance is missing.' },
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
        eyebrow="What GQ Agents does"
        title={
          <>
            A protocol designed <br className="hidden md:block" />
            <span className="text-brand-blue">for an audit, not a demo.</span>
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
            Three roles that need <br className="hidden md:block" />
            <span className="text-brand-blue">agents to be accountable.</span>
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
            The activation tier <br className="hidden md:block" />
            <span className="text-brand-blue">over a trusted foundation.</span>
          </>
        }
        intro="GQ Agents runs on top of GQData. Without trusted data, an audit-ready agent is still wrong, just provably wrong. With it, you ship governed AI that holds up to scrutiny. GST Co-Pilot is what GQ Agents looks like in production for a real regulated workload."
      >
        <ProductSiblingChips currentHref="/products/agents" />
      </Section>

      {/* FINAL CTA */}
      <section className="py-20 md:py-28 bg-brand-ink text-white relative overflow-hidden">
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
