'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

type Service = {
  id: string;
  label: string;
  meta?: string;
  blurb: string;
  detail: {
    summary: string;
    outcomes: string[];
    audience: string;
    format: string;
  };
};

type Group = {
  id: string;
  title: string;
  lead: string;
  headline: string;
  items: Service[];
};

const GROUPS: Group[] = [
  {
    id: 'training',
    title: 'Training',
    headline: 'The team you have, ready for the AI you are about to ship.',
    lead: 'Briefings and workshops that build the institutional muscle for governed AI. Senior-led guided programs.',
    items: [
      {
        id: 'training-exec-brief',
        label: 'AI governance executive briefing',
        meta: '90 minutes',
        blurb: 'A boardroom-grade briefing on what governance actually requires, what regulators ask for, and what failure looks like.',
        detail: {
          summary:
            'A 90-minute briefing tailored to your industry and your current AI portfolio. We walk your leadership team through what governance actually requires, what regulators and auditors will ask for, and where peer organisations have run into trouble. Concrete, not theoretical.',
          outcomes: [
            'Shared understanding of governance scope across your leadership team',
            'A risk picture specific to your AI portfolio, not generic',
            'A list of next-90-day actions, ranked by risk reduction',
            'Q&A with senior advisors on your most pressing concerns',
          ],
          audience: 'Boards, CEO, COO, CRO, CISO, audit committee chairs.',
          format: '90 minutes on-site or remote. One prep call beforehand to align on focus areas.',
        },
      },
      {
        id: 'training-data-foundation',
        label: 'Data foundation workshop',
        meta: '1 day',
        blurb: 'Working session with your data and AI teams to map gaps in lineage, master data, and sensitive-data classification.',
        detail: {
          summary:
            'A working session with your data and AI teams to map the gaps in lineage, master data, and sensitive-data classification that your in-flight AI initiatives depend on. Pragmatic and grounded in your real workloads.',
          outcomes: [
            'Inventory of data sources feeding priority AI workloads',
            'Heat map of lineage gaps and PII exposure',
            'Sequenced fix list aligned to your AI roadmap',
            'Working artefacts your team keeps after the day',
          ],
          audience: 'Data engineering, data architecture, AI program leaders.',
          format: 'One day, on-site preferred. Prep questionnaire one week in advance.',
        },
      },
      {
        id: 'training-model-risk',
        label: 'Model risk masterclass',
        meta: '2 days',
        blurb: 'Hands-on training on model risk tiering, evaluation harnesses, and ongoing monitoring, using your own models.',
        detail: {
          summary:
            'Hands-on training on model risk tiering, evaluation harnesses, drift monitoring, and incident response. We work with your own models and your own data, not pre-canned exercises, so the team leaves ready to apply what they learned.',
          outcomes: [
            'Team trained across the full model risk lifecycle',
            'Working evaluation harness operating on one of your models',
            'Risk-tier classification rubric tailored to your portfolio',
            'Drift and quality monitoring patterns the team can extend',
          ],
          audience: 'ML and MLOps engineers, model risk officers, data scientists.',
          format: 'Two consecutive days. Your data, your environment.',
        },
      },
      {
        id: 'training-reg-readiness',
        label: 'Regulatory readiness workshop',
        meta: '1 day',
        blurb: 'Translates EU AI Act, RBI, DPDP, and sector-specific obligations into concrete technical and operating-model requirements.',
        detail: {
          summary:
            'A working day that translates EU AI Act, RBI, DPDP, and sector-specific obligations into concrete technical and operating-model requirements for your stack. Not a deck of regulation summaries.',
          outcomes: [
            'Mapping of your in-flight AI to specific regulatory clauses',
            'Gap analysis with concrete remediation steps and owners',
            'Documentation templates for what auditors typically request',
            'Prioritised actions you can take this quarter',
          ],
          audience: 'Compliance, legal, risk, AI program leadership.',
          format: 'One day, on-site preferred. Target regulations confirmed in advance.',
        },
      },
    ],
  },
  {
    id: 'assessments',
    title: 'Assessments',
    headline: 'Know exactly where you stand, and what to fix first.',
    lead: 'Structured diagnostics that produce a defendable picture of where you stand and what to fix first.',
    items: [
      {
        id: 'assess-ai-maturity',
        label: 'AI maturity assessment',
        meta: '2 weeks',
        blurb: 'A maturity baseline across data, model, governance, and operating-model dimensions, scored and benchmarked.',
        detail: {
          summary:
            'A maturity baseline across data, model, governance, and operating-model dimensions. Scored against twelve sub-dimensions, benchmarked against peers in your sector, and presented with a sequenced uplift plan.',
          outcomes: [
            'Maturity score across 12 dimensions, with peer benchmarks',
            'Strengths and gaps relative to your stated AI ambitions',
            'Sequenced 6-12 month uplift plan',
            'Board-ready summary deck',
          ],
          audience: 'CDO, Head of AI, COO.',
          format: 'Two weeks. Document review plus six to eight stakeholder interviews.',
        },
      },
      {
        id: 'assess-model-inventory',
        label: 'Model inventory & risk classification',
        meta: '3 weeks',
        blurb: 'A complete inventory of every model, agent, and copilot across your estate, with risk tiers mapped to controls.',
        detail: {
          summary:
            'A complete inventory of every model, agent, and copilot in your estate, including shadow AI. Each entry is risk-tiered, mapped to required controls, and gaps in coverage are flagged.',
          outcomes: [
            'Auditable register of every model and agent in production or development',
            'Risk tier per model mapped to required controls',
            'Shadow AI discovery results',
            'Identified gaps where controls are missing or unenforced',
          ],
          audience: 'Model risk, AI governance, CISO.',
          format: 'Three weeks. Technical surveys plus system scans.',
        },
      },
      {
        id: 'assess-lineage',
        label: 'Data lineage diagnostic',
        meta: '2 weeks',
        blurb: 'Traces what data feeds which AI workload, where lineage breaks, and which fields carry sensitive-data exposure.',
        detail: {
          summary:
            'Traces what data feeds which AI workload, where lineage breaks, and which fields carry sensitive-data exposure. A critical diagnostic before scaling any AI workload to production.',
          outcomes: [
            'End-to-end lineage map for priority AI workloads',
            'Lineage break-points with remediation owner for each',
            'Sensitive-data inventory with classification',
            'Recommendations on tooling and operating-model fixes',
          ],
          audience: 'Data architecture, data governance, CISO.',
          format: 'Two weeks. System access plus stakeholder interviews.',
        },
      },
      {
        id: 'assess-audit',
        label: 'Audit-readiness review',
        meta: '2 weeks',
        blurb: 'Walks an auditor through your AI estate today, and tells you exactly what would fail before they get there.',
        detail: {
          summary:
            'A pre-audit aligned to your specific regulatory framework. We walk through your AI estate as an auditor would, and tell you exactly what would fail before they get there.',
          outcomes: [
            'Pre-audit findings prioritised by audit-blocker severity',
            'Remediation plan with owners and timelines',
            'Documentation set ready for external audit',
            'Mock audit Q&A run with your team',
          ],
          audience: 'Internal audit, compliance, AI governance.',
          format: 'Two weeks. Document review plus control walk-throughs.',
        },
      },
    ],
  },
  {
    id: 'consulting',
    title: 'Consulting',
    headline: 'Implementation, and integrations.',
    lead: 'Implementation engagements that ship the operating model. Greyquill engineers and senior advisors, deliver end to end, or work with your team to implement.',
    items: [
      {
        id: 'consult-program-design',
        label: 'AI program design & roadmap',
        meta: '4–6 weeks',
        blurb: 'A roadmap your board will fund and your CDO can execute, sequenced by risk reduction and business value.',
        detail: {
          summary:
            'A roadmap your board will fund and your CDO can execute. Sequenced by risk reduction and business value, packaged with the operating model needed to make it run.',
          outcomes: [
            '18-month AI program roadmap with phased investments',
            'Operating model for AI governance and delivery',
            'Business case packaged for board approval',
            'Talent and capability plan with hiring priorities',
          ],
          audience: 'CDO, Head of AI, CEO, CTO.',
          format: 'Four to six weeks. Mixed remote and on-site cadence.',
        },
      },
      {
        id: 'consult-data-buildout',
        label: 'Data foundation buildout',
        meta: '8–16 weeks',
        blurb: 'Stand up the GQData layer for priority domains: master data, lineage, quality, sensitive-data classification.',
        detail: {
          summary:
            'Stand up the GQData layer for one or two priority domains. Master data, active lineage, real-time quality, and sensitive-data classification, deployed and operational. Greyquill engineers end to end.',
          outcomes: [
            'Master data platform live for one to two priority domains',
            'Active lineage for AI-relevant flows',
            'Quality monitoring and PII classification operational',
            'Operational runbooks transferred to your team',
          ],
          audience: 'Data engineering, AI program leadership.',
          format: '8 to 16 weeks depending on domain count and complexity.',
        },
      },
      {
        id: 'consult-governance-impl',
        label: 'Governance framework implementation',
        meta: '8–12 weeks',
        blurb: 'Operationalise model lifecycle, evaluation, and audit-trail capture, mapped to your existing risk frameworks.',
        detail: {
          summary:
            'Operationalise model lifecycle management, evaluation, and audit-trail capture, mapped to your existing risk frameworks. Not a policy document. A working system.',
          outcomes: [
            'Model lifecycle workflow integrated with existing systems',
            'Evaluation harness running on production models',
            'Audit evidence captured automatically',
            'Governance committee charter and operating cadence',
          ],
          audience: 'Model risk, AI governance, compliance.',
          format: '8 to 12 weeks.',
        },
      },
      {
        id: 'consult-agentic',
        label: 'Agentic AI activation',
        meta: '12–20 weeks',
        blurb: 'Build, deploy, and operate a governed agent for one prioritised workflow. Proven in production, audit-ready.',
        detail: {
          summary:
            'Build, deploy, and operate a governed agent for one prioritised workflow. Proven in production, audit-ready, with hand-off documentation so your team can extend it.',
          outcomes: [
            'One agent live in production with full audit trail',
            'Reference architecture you can extend to other workflows',
            'Operational runbooks and on-call playbooks',
            'Capability transferred to your engineering team',
          ],
          audience: 'Engineering, AI program, the business owner of the workflow.',
          format: '12 to 20 weeks. Phased rollout: design, build, soak, hand-off.',
        },
      },
    ],
  },
];

/**
 * Modal that flip-opens with the service detail. Closes on backdrop
 * click, the X button, or ESC. Body scroll is locked while open.
 */
function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  // Mount → next frame → set open=true so the entrance transition runs.
  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, []);

  // ESC + body scroll lock.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') handleClose();
    };
    window.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleClose() {
    setOpen(false);
    setTimeout(onClose, 280);
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby={`svc-${service.id}-title`}
      className="fixed inset-0 z-[60]"
      style={{ perspective: '1400px' }}
    >
      {/* Backdrop */}
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        className={`absolute inset-0 bg-brand-ink/55 backdrop-blur-sm transition-opacity duration-300 ease-out
                   ${open ? 'opacity-100' : 'opacity-0'}`}
      />

      {/* Panel */}
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <div
          className={`pointer-events-auto relative w-full max-w-2xl bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/15 overflow-hidden transition-all duration-400 ease-out-expo`}
          style={{
            transformStyle: 'preserve-3d',
            transform: open
              ? 'rotateY(0deg) scale(1) translateY(0)'
              : 'rotateY(-14deg) scale(0.94) translateY(16px)',
            opacity: open ? 1 : 0,
          }}
        >
          {/* Header strip */}
          <div className="px-6 md:px-8 pt-6 pb-4 border-b border-black/[0.05] flex items-start justify-between gap-4">
            <div>
              {service.meta && (
                <div className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10 mb-3">
                  {service.meta}
                </div>
              )}
              <h2
                id={`svc-${service.id}-title`}
                className="font-display font-semibold text-2xl md:text-[28px] leading-tight text-brand-ink"
              >
                {service.label}
              </h2>
            </div>
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close"
              className="shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full text-brand-ink/55 hover:text-brand-ink hover:bg-black/[0.04] transition-colors"
            >
              <svg viewBox="0 0 14 14" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M2 2 L 12 12 M 12 2 L 2 12" />
              </svg>
            </button>
          </div>

          {/* Body — scrollable if tall */}
          <div className="px-6 md:px-8 py-6 max-h-[70vh] overflow-y-auto">
            <p className="text-brand-ink/80 text-[15px] md:text-base leading-relaxed">
              {service.detail.summary}
            </p>

            <div className="mt-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
                What you walk away with
              </div>
              <ul className="space-y-2.5">
                {service.detail.outcomes.map((o) => (
                  <li key={o} className="flex gap-3 items-start">
                    <span aria-hidden className="mt-[8px] h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                    <span className="text-brand-ink/80 text-[14.5px] leading-relaxed">{o}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              <div className="rounded-xl bg-brand-mist/40 ring-1 ring-black/[0.04] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-1.5">
                  Audience
                </div>
                <div className="text-[13.5px] text-brand-ink/85 leading-snug">
                  {service.detail.audience}
                </div>
              </div>
              <div className="rounded-xl bg-brand-mist/40 ring-1 ring-black/[0.04] p-4">
                <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 mb-1.5">
                  Format
                </div>
                <div className="text-[13.5px] text-brand-ink/85 leading-snug">
                  {service.detail.format}
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="px-6 md:px-8 py-4 bg-brand-mist/30 border-t border-black/[0.05] flex items-center justify-between gap-4">
            <div className="text-xs text-brand-ink/55 hidden sm:block">
              Talk to us about how this fits your stack.
            </div>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handleClose}
                className="text-[13px] text-brand-ink/65 hover:text-brand-ink font-semibold px-3 py-2 transition-colors"
              >
                Close
              </button>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-brand-blue text-white text-[13px] font-semibold px-4 py-2.5 rounded-full hover:bg-brand-blue-dark transition-colors"
              >
                Discuss this engagement
                <span aria-hidden>→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ServiceGroups() {
  const [active, setActive] = useState<Service | null>(null);

  return (
    <>
      {GROUPS.map((g, gi) => (
        <section
          key={g.id}
          id={g.id}
          className={clsx(
            // Tighter rhythm than Section's default — these three groups
            // are siblings of the same taxonomy, not chapter breaks.
            'py-12 md:py-14',
            gi === 1 ? 'bg-brand-mist/40' : 'bg-white',
          )}
        >
          <div className="mx-auto max-w-6xl px-5 md:px-8">
            <header className="max-w-3xl mb-8 md:mb-10">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-3">
                <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
                {g.title}
              </div>
              <h2 className="font-display text-3xl md:text-[40px] leading-[1.1] tracking-tight">
                {g.headline}
              </h2>
              <p className="mt-4 text-base md:text-lg text-brand-ink/70 leading-relaxed max-w-2xl">
                {g.lead}
              </p>
            </header>
            <div className="grid md:grid-cols-2 gap-5 md:gap-6">
              {g.items.map((it) => (
                <button
                  type="button"
                  key={it.id}
                  onClick={() => setActive(it)}
                  aria-haspopup="dialog"
                  className="group text-left rounded-2xl bg-white ring-1 ring-black/[0.06] p-6 md:p-7 hover:ring-brand-blue/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 ease-out-expo focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60"
                >
                  <div className="flex items-baseline justify-between gap-3 mb-2">
                    <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink leading-snug">
                      {it.label}
                    </h3>
                    {it.meta && (
                      <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10 shrink-0">
                        {it.meta}
                      </span>
                    )}
                  </div>
                  <p className="text-brand-ink/70 text-sm md:text-[15px] leading-relaxed">
                    {it.blurb}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-brand-blue font-semibold text-[13px]">
                    See details
                    <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </section>
      ))}

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </>
  );
}
