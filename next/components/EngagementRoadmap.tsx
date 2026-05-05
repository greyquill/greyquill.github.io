'use client';

import type { ReactElement } from 'react';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { CALENDLY_URL } from '@/lib/links';

/* ------------------------------------------------------------------ */
/* Types                                                              */
/* ------------------------------------------------------------------ */

type ServiceType = 'training' | 'assessment' | 'consulting';

type Service = {
  id: string;
  label: string;
  meta: string;
  type: ServiceType;
  blurb: string;
  recommended?: boolean;
  free?: boolean;
  detail: {
    summary: string;
    outcomes: string[];
    audience: string;
    format: string;
  };
};

type Phase = {
  id: string;
  n: string;
  name: string;
  headline: string;
  body: string;
  bring: string;
  walkAway: string;
  Character: () => ReactElement;
  services: Service[];
};

/* ------------------------------------------------------------------ */
/* Phase value-animations. Each one shows what that phase actually     */
/* DOES, in 80x80 viewBox. CSS keyframes live in globals.css (vp-*).   */
/* Tinted by the dominant service type for that phase.                 */
/* ------------------------------------------------------------------ */

// CSS custom properties on inline style need a cast.
const cssvar = (vars: Record<string, string>) => vars as React.CSSProperties;

// Phase 01 — Align: scattered dots converge into one cluster (emerald = training).
const VAlign = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
    <circle className="vp-align-dot vp-d1" cx="15" cy="20" r="2.6" fill="#10b981" style={cssvar({ '--tx': '25px', '--ty': '20px' })} />
    <circle className="vp-align-dot vp-d2" cx="65" cy="22" r="2.6" fill="#10b981" style={cssvar({ '--tx': '-25px', '--ty': '18px' })} />
    <circle className="vp-align-dot vp-d3" cx="12" cy="45" r="2.6" fill="#10b981" style={cssvar({ '--tx': '28px', '--ty': '-5px' })} />
    <circle className="vp-align-dot vp-d4" cx="68" cy="50" r="2.6" fill="#10b981" style={cssvar({ '--tx': '-28px', '--ty': '-10px' })} />
    <circle className="vp-align-dot vp-d5" cx="20" cy="68" r="2.6" fill="#10b981" style={cssvar({ '--tx': '20px', '--ty': '-28px' })} />
    <circle className="vp-align-dot vp-d6" cx="60" cy="65" r="2.6" fill="#10b981" style={cssvar({ '--tx': '-20px', '--ty': '-25px' })} />
    <circle className="vp-align-ring" cx="40" cy="40" r="14" fill="none" stroke="#10b981" strokeWidth="1.5" strokeDasharray="2 3" />
  </svg>
);

// Phase 02 — Diagnose: 3x3 grid scanned by a line, cells flip good/bad (amber = assessment).
const VDiagnose = () => {
  const cells: Array<{ x: number; y: number; cls: 'good' | 'bad'; n: number }> = [
    { x: 16, y: 16, cls: 'good', n: 1 },
    { x: 33, y: 16, cls: 'good', n: 2 },
    { x: 50, y: 16, cls: 'bad',  n: 3 },
    { x: 16, y: 33, cls: 'bad',  n: 4 },
    { x: 33, y: 33, cls: 'good', n: 5 },
    { x: 50, y: 33, cls: 'good', n: 6 },
    { x: 16, y: 50, cls: 'good', n: 7 },
    { x: 33, y: 50, cls: 'bad',  n: 8 },
    { x: 50, y: 50, cls: 'good', n: 9 },
  ];
  return (
    <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
      {cells.map((c) => (
        <rect key={c.n} className={`vp-diag-cell vp-${c.cls} vp-c${c.n}`} x={c.x} y={c.y} width="14" height="14" rx="2" />
      ))}
      <line className="vp-diag-scan" x1="40" y1="12" x2="40" y2="68" />
    </svg>
  );
};

// Phase 03 — Plan: loose items snap into structured rows on rails (blue = consulting).
const VPlan = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
    <line className="vp-plan-rail" x1="15" y1="32" x2="65" y2="32" stroke="#0B4F88" strokeWidth="1" />
    <line className="vp-plan-rail" x1="15" y1="52" x2="65" y2="52" stroke="#0B4F88" strokeWidth="1" />
    <rect className="vp-plan-item vp-pi1" x="14" y="14" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '8px',  '--gy': '15px' })} />
    <rect className="vp-plan-item vp-pi2" x="56" y="18" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '-12px','--gy': '11px' })} />
    <rect className="vp-plan-item vp-pi3" x="34" y="62" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '0px',  '--gy': '-13px' })} />
    <rect className="vp-plan-item vp-pi4" x="16" y="64" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '8px',  '--gy': '-15px' })} />
    <rect className="vp-plan-item vp-pi5" x="60" y="12" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '-16px','--gy': '17px' })} />
    <rect className="vp-plan-item vp-pi6" x="14" y="44" width="10" height="6" rx="1" fill="#0B4F88" style={cssvar({ '--gx': '36px','--gy': '5px' })} />
  </svg>
);

// Phase 04 — Build: input flows → hub processes → audited output emerges (blue).
const VBuild = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
    {/* track guide */}
    <line x1="10" y1="40" x2="70" y2="40" stroke="#0B4F88" strokeWidth="0.5" opacity="0.18" strokeDasharray="2 3" />
    {/* input */}
    <rect className="vp-build-input" x="36" y="35" width="10" height="10" rx="2" fill="#0B4F88" />
    {/* hub */}
    <circle className="vp-build-hub" cx="40" cy="40" r="14" fill="none" stroke="#0B4F88" strokeWidth="2" />
    <circle cx="40" cy="40" r="3.5" fill="#0B4F88" opacity="0.3" />
    {/* output with check */}
    <g>
      <rect className="vp-build-output" x="34" y="35" width="14" height="10" rx="2" fill="#10b981" />
      <path className="vp-build-check" d="M64 39 L 67.5 42.5 L 73 36" stroke="#10b981" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

// Phase 05 — Ship: heartbeat waveform with periodic alerts that resolve themselves (blue).
const VShip = () => (
  <svg viewBox="0 0 80 80" className="w-full h-full" aria-hidden>
    <path
      className="vp-ship-wave"
      d="M 8 40 L 16 40 L 19 30 L 22 50 L 25 40 L 33 40 L 36 32 L 39 48 L 42 40 L 50 40 L 53 30 L 56 50 L 59 40 L 72 40"
      stroke="#0B4F88"
      strokeWidth="1.6"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle className="vp-ship-alert vp-a1" cx="22" cy="40" r="3.2" />
    <circle className="vp-ship-alert vp-a2" cx="56" cy="40" r="3.2" />
  </svg>
);

/* ------------------------------------------------------------------ */
/* Service-type styling                                                */
/* ------------------------------------------------------------------ */

const TYPE_LABEL: Record<ServiceType, string> = {
  training: 'Training',
  assessment: 'Assessment',
  consulting: 'Consulting',
};

const TYPE_DOT: Record<ServiceType, string> = {
  training: 'bg-emerald-500',
  assessment: 'bg-amber-500',
  consulting: 'bg-brand-blue',
};

/* ------------------------------------------------------------------ */
/* Roadmap data — all 12 services arranged by phase                   */
/* ------------------------------------------------------------------ */

const PHASES: Phase[] = [
  {
    id: 'align',
    n: '01',
    name: 'Align',
    headline: 'Align the board.',
    body: 'A picture you need before signing the next contract or engagement. And, well before a line of code.',
    bring: 'AI initiatives in flight. Your top three worries.',
    walkAway: 'Shared risk view. 90-day action list.',
    Character: VAlign,
    services: [
      {
        id: 'training-exec-brief',
        label: 'AI Governance Executive Briefing',
        meta: '90 minutes',
        type: 'training',
        recommended: true,
        free: true,
        blurb: 'What governance requires. What regulators ask for. What failure looks like. Complimentary.',
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
        id: 'training-reg-readiness',
        label: 'Regulatory Readiness Workshop',
        meta: '1 day',
        type: 'training',
        blurb: 'EU AI Act, RBI, DPDP, sector rules. Translated into technical and operating-model requirements.',
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
    id: 'diagnose',
    n: '02',
    name: 'Diagnose',
    headline: 'Know where you stand.',
    body: 'A defendable picture of your AI estate. Start with the maturity baseline. Go deeper where you already suspect trouble.',
    bring: 'Leadership access. 6 to 8 interviews. Current AI and data docs.',
    walkAway: 'Scored baseline. Peer benchmarks. Sequenced uplift plan.',
    Character: VDiagnose,
    services: [
      {
        id: 'assess-ai-maturity',
        label: 'AI Maturity Assessment',
        meta: '2 weeks',
        type: 'assessment',
        recommended: true,
        blurb: 'Scored baseline across data, model, governance, and operating model. Benchmarked against peers.',
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
        label: 'Model Inventory & Risk Classification',
        meta: '3 weeks',
        type: 'assessment',
        blurb: 'Every model, agent, and copilot in your estate. Risk-tiered. Controls mapped. Shadow AI surfaced.',
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
        label: 'Data Lineage Diagnostic',
        meta: '2 weeks',
        type: 'assessment',
        blurb: 'What data feeds which workload. Where lineage breaks. Which fields carry PII.',
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
        label: 'Audit-Readiness Review',
        meta: '2 weeks',
        type: 'assessment',
        blurb: 'Walk through your AI estate as an auditor would. Find what would fail, before they do.',
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
    id: 'plan',
    n: '03',
    name: 'Plan',
    headline: 'Build the plan.',
    body: 'A program the board will fund and the CDO can execute. Add the data workshop when engineering needs to align first.',
    bring: 'Diagnose baseline. A clear AI ambition.',
    walkAway: '18-month roadmap. Operating model. Board-ready business case.',
    Character: VPlan,
    services: [
      {
        id: 'consult-program-design',
        label: 'AI Program Design & Roadmap',
        meta: '4 to 6 weeks',
        type: 'consulting',
        recommended: true,
        blurb: 'A roadmap the board will fund and the CDO can execute. Sequenced by risk and value.',
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
        id: 'training-data-foundation',
        label: 'Data Foundation Workshop',
        meta: '1 day',
        type: 'training',
        blurb: 'One day with your data and AI teams. Map gaps in lineage, master data, and PII classification.',
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
    ],
  },
  {
    id: 'build',
    n: '04',
    name: 'Build',
    headline: 'Stand up the system.',
    body: 'We ship the operating model. Add the model risk masterclass when your team should run it from day one.',
    bring: 'Approved roadmap. Executive sponsor. Named delivery owner.',
    walkAway: 'Live governance, wired into your existing risk frameworks.',
    Character: VBuild,
    services: [
      {
        id: 'consult-governance-impl',
        label: 'Governance Framework Implementation',
        meta: '8 to 12 weeks',
        type: 'consulting',
        recommended: true,
        blurb: 'Model lifecycle, evaluation, and audit trail. Live and wired to your risk frameworks. Not a policy doc.',
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
        id: 'consult-data-buildout',
        label: 'Data Foundation Buildout',
        meta: '8 to 16 weeks',
        type: 'consulting',
        blurb: 'GQData stood up for one to two domains. Master data, lineage, quality, PII classification, operational.',
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
        id: 'training-model-risk',
        label: 'Model Risk Masterclass',
        meta: '2 days',
        type: 'training',
        blurb: 'Hands-on. Risk tiering, evaluation harnesses, drift monitoring. Your models, your data.',
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
    ],
  },
  {
    id: 'ship',
    n: '05',
    name: 'Ship',
    headline: 'Get one governed agent into production.',
    body: 'A reference workflow, deployed and operating, with the architecture transferred so your team can extend to the next ten.',
    bring: 'One business workflow with an owner who will actually use the agent.',
    walkAway: 'A production agent, runbooks, and capability transferred to your team.',
    Character: VShip,
    services: [
      {
        id: 'consult-agentic',
        label: 'Agentic AI Activation',
        meta: '12 to 20 weeks',
        type: 'consulting',
        recommended: true,
        blurb: 'One governed agent. Built, deployed, operating. Production-proven. Audit-ready.',
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

/* ------------------------------------------------------------------ */
/* Modal — flips in with service detail                                */
/* ------------------------------------------------------------------ */

function ServiceModal({ service, onClose }: { service: Service; onClose: () => void }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setOpen(true));
    return () => cancelAnimationFrame(id);
  }, []);

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
      <button
        type="button"
        aria-label="Close"
        onClick={handleClose}
        className={`absolute inset-0 bg-brand-ink/55 backdrop-blur-sm transition-opacity duration-300 ease-out ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />
      <div className="absolute inset-0 flex items-center justify-center p-4 md:p-8 pointer-events-none">
        <div
          className="pointer-events-auto relative w-full max-w-2xl bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/15 overflow-hidden transition-all duration-400 ease-out-expo"
          style={{
            transformStyle: 'preserve-3d',
            transform: open
              ? 'rotateY(0deg) scale(1) translateY(0)'
              : 'rotateY(-14deg) scale(0.94) translateY(16px)',
            opacity: open ? 1 : 0,
          }}
        >
          <div className="px-6 md:px-8 pt-6 pb-4 border-b border-black/[0.05] flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/65 px-2 py-1 rounded bg-black/[0.04]">
                  <span className={clsx('h-1.5 w-1.5 rounded-full', TYPE_DOT[service.type])} />
                  {TYPE_LABEL[service.type]}
                </span>
                <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10">
                  {service.meta}
                </span>
                {service.free && (
                  <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-1 rounded bg-emerald-100">
                    Free
                  </span>
                )}
              </div>
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

/* ------------------------------------------------------------------ */
/* Service card                                                        */
/* ------------------------------------------------------------------ */

function ServiceCard({
  service,
  onOpen,
  size = 'md',
}: {
  service: Service;
  onOpen: (s: Service) => void;
  size?: 'lg' | 'md';
}) {
  const isLg = size === 'lg';
  return (
    <button
      type="button"
      id={service.id}
      onClick={() => onOpen(service)}
      aria-haspopup="dialog"
      className={clsx(
        'group text-left w-full scroll-mt-24 rounded-2xl bg-white transition-all duration-300 ease-out-expo focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue/60 hover:-translate-y-0.5',
        isLg
          ? 'p-5 md:p-6 ring-2 ring-brand-blue/35 shadow-md shadow-brand-blue/10 hover:ring-brand-blue/60 hover:shadow-lg'
          : 'p-4 md:p-5 ring-1 ring-black/[0.07] hover:ring-brand-blue/35 hover:shadow-md hover:shadow-brand-blue/10',
      )}
    >
      <div className="flex flex-wrap items-center gap-1.5 mb-2">
        {service.recommended && (
          <span className="inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue px-2 py-0.5 rounded-full bg-brand-blue/10">
            <span aria-hidden>★</span> Recommended
          </span>
        )}
        {service.free && (
          <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-0.5 rounded-full bg-emerald-100">
            Free
          </span>
        )}
        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/60 px-2 py-0.5 rounded-full bg-black/[0.04]">
          <span className={clsx('h-1.5 w-1.5 rounded-full', TYPE_DOT[service.type])} />
          {TYPE_LABEL[service.type]}
        </span>
        <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-0.5 rounded-full bg-brand-blue/10 ml-auto">
          {service.meta}
        </span>
      </div>
      <h4
        className={clsx(
          'font-display font-semibold text-brand-ink leading-snug',
          isLg ? 'text-lg md:text-xl' : 'text-[15.5px] md:text-base',
        )}
      >
        {service.label}
      </h4>
      <p
        className={clsx(
          'mt-1.5 text-brand-ink/70 leading-relaxed',
          isLg ? 'text-[14.5px] md:text-[15px]' : 'text-[13.5px]',
        )}
      >
        {service.blurb}
      </p>
      <span className="mt-3 inline-flex items-center gap-1.5 text-brand-blue font-semibold text-[12.5px]">
        See details
        <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-0.5">→</span>
      </span>
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* The roadmap                                                         */
/* ------------------------------------------------------------------ */

// Flat lookup for deep-linking from header / external URLs.
const SERVICE_INDEX: Record<string, { service: Service; phaseId: string }> = (() => {
  const out: Record<string, { service: Service; phaseId: string }> = {};
  for (const phase of PHASES) {
    for (const s of phase.services) out[s.id] = { service: s, phaseId: phase.id };
  }
  return out;
})();

export default function EngagementRoadmap() {
  const [active, setActive] = useState<Service | null>(null);

  // Deep-link: if the URL hash matches a known service id, scroll to its phase
  // and open the service modal. Also matches a phase id alone (just scrolls).
  useEffect(() => {
    const open = () => {
      const raw = window.location.hash.replace(/^#/, '');
      if (!raw) return;
      const hit = SERVICE_INDEX[raw];
      if (hit) {
        // Scroll to the card itself (it carries its service id), instant so
        // it completes before the modal locks body scroll. Defer the modal
        // open one frame so the scroll position settles first.
        const cardEl = document.getElementById(hit.service.id);
        if (cardEl) cardEl.scrollIntoView({ block: 'center' });
        requestAnimationFrame(() => setActive(hit.service));
        return;
      }
      if (PHASES.some((p) => p.id === raw)) setActive(null);
    };
    // Defer the initial run a frame so all phase / card ids are in the DOM.
    const id = requestAnimationFrame(open);
    window.addEventListener('hashchange', open);
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener('hashchange', open);
    };
  }, []);

  return (
    <>
      {/* The roadmap. Hero / intro lives on the page (services/page.tsx). */}
      <section id="roadmap" className="relative bg-white pt-10 md:pt-14 pb-16 md:pb-24">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <ol className="relative">
            {/* spine */}
            <span
              aria-hidden
              className="absolute left-[39px] md:left-[47px] top-2 bottom-2 w-px bg-gradient-to-b from-brand-blue/0 via-brand-blue/40 to-brand-blue/0"
            />

            {PHASES.map((phase, i) => {
              const recommended = phase.services.find((s) => s.recommended);
              const others = phase.services.filter((s) => !s.recommended);
              return (
                <li key={phase.id} id={phase.id} className="relative pl-24 md:pl-28 pb-12 last:pb-0 scroll-mt-24">
                  {/* phase value-animation */}
                  <div className="absolute left-0 top-0 w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-white ring-1 ring-brand-blue/25 shadow-md shadow-brand-blue/10 flex items-center justify-center p-2 overflow-hidden">
                    <phase.Character />
                  </div>

                  {/* phase header */}
                  <div className="mb-4 md:mb-5">
                    <div className="flex items-baseline gap-3 mb-1.5">
                      <span className="font-display text-sm md:text-base font-semibold text-brand-blue/70 tracking-[0.18em]">
                        PHASE {phase.n}
                      </span>
                      <span className="font-display text-2xl md:text-3xl font-semibold text-brand-ink">
                        {phase.name}
                      </span>
                    </div>
                    <p className="text-[14.5px] md:text-[15.5px] text-brand-ink/75 leading-relaxed max-w-3xl">
                      {phase.body}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      <span className="inline-flex items-start gap-1.5 text-[12px] text-brand-ink/75 bg-brand-mist/50 ring-1 ring-black/[0.04] px-2.5 py-1.5 rounded-md">
                        <span className="font-semibold text-brand-ink/55 uppercase text-[9.5px] tracking-[0.18em] mt-0.5">Bring</span>
                        <span className="leading-snug">{phase.bring}</span>
                      </span>
                      <span className="inline-flex items-start gap-1.5 text-[12px] text-brand-ink/75 bg-brand-blue/[0.06] ring-1 ring-brand-blue/15 px-2.5 py-1.5 rounded-md">
                        <span className="font-semibold text-brand-blue/80 uppercase text-[9.5px] tracking-[0.18em] mt-0.5">Leave with</span>
                        <span className="leading-snug">{phase.walkAway}</span>
                      </span>
                    </div>
                  </div>

                  {/* recommended card */}
                  {recommended && (
                    <ServiceCard service={recommended} onOpen={setActive} size="lg" />
                  )}

                  {/* alternatives */}
                  {others.length > 0 && (
                    <div className="mt-4">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/50 mb-2.5">
                        Also at this phase
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3 md:gap-4">
                        {others.map((s) => (
                          <ServiceCard key={s.id} service={s} onOpen={setActive} />
                        ))}
                      </div>
                    </div>
                  )}

                  {/* connector arrow */}
                  {i < PHASES.length - 1 && (
                    <div aria-hidden className="absolute left-[35px] md:left-[43px] -bottom-1 w-3 h-3 text-brand-blue/40">
                      <svg viewBox="0 0 12 12" fill="currentColor">
                        <path d="M6 10 L1 4 L11 4 Z" transform="rotate(180 6 6)" />
                      </svg>
                    </div>
                  )}
                </li>
              );
            })}
          </ol>

          {/* bottom CTA */}
          <div className="mt-10 md:mt-12 rounded-2xl bg-brand-mist/40 ring-1 ring-black/[0.05] p-6 md:p-8 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h3 className="font-display text-xl md:text-2xl text-brand-ink leading-tight">
                Not sure which entry point fits?
              </h3>
              <p className="mt-1.5 text-[14.5px] text-brand-ink/70 leading-relaxed max-w-xl">
                30 minutes. We scope the right one for where you actually are.
              </p>
            </div>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 bg-brand-blue text-white font-semibold px-5 py-3 rounded-full hover:bg-brand-blue-dark transition-colors shrink-0"
            >
              Talk through your starting point
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      {active && <ServiceModal service={active} onClose={() => setActive(null)} />}
    </>
  );
}
