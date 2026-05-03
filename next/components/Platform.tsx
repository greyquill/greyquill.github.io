import Link from 'next/link';
import Section from './Section';

type Product = {
  name: string;
  href: string;
  stage: string;
  tagline: string;
  body: string;
  live?: boolean;
  /** Suffix used to wire each card's gear glow to its own active window. */
  slot: 'a' | 'b' | 'c';
};

const PIPELINE: Product[] = [
  {
    name: 'ClarityAI',
    href: '/products/clarity-ai',
    stage: 'Diagnose',
    tagline: 'Score the clarity and risk of any AI initiative before you fund it.',
    body: 'Surfaces hidden requirement gaps, regulatory exposure, and dependency risk in days, not months. For program leaders defending roadmap calls to the board.',
    live: true,
    slot: 'a',
  },
  {
    name: 'GQData',
    href: '/products/gqdata',
    stage: 'Govern',
    tagline: 'The trusted-data layer beneath every AI decision.',
    body: 'Master data unification, lineage, real-time quality, and sensitive-data protection, so every model and agent runs on data you can stand behind.',
    slot: 'b',
  },
  {
    name: 'GQ Agents',
    href: '/products/agents',
    stage: 'Activate',
    tagline: 'Multi-agent orchestration with audit trails built in.',
    body: 'Work-packet provenance, human-in-the-loop checkpoints, replayable execution. Designed for regulated environments where you must prove what an agent did and why.',
    slot: 'c',
  },
];

function Gear({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <path d="M12 15.5a3.5 3.5 0 100-7 3.5 3.5 0 000 7z" />
      <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 11-4 0v-.09A1.65 1.65 0 008.5 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.65 1.65 0 00.33-1.82 1.65 1.65 0 00-1.51-1H2.5a2 2 0 110-4h.09A1.65 1.65 0 004.6 8.5a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 112.83-2.83l.06.06a1.65 1.65 0 001.82.33H9a1.65 1.65 0 001-1.51V2.5a2 2 0 114 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 112.83 2.83l-.06.06a1.65 1.65 0 00-.33 1.82V9a1.65 1.65 0 001.51 1H21a2 2 0 110 4h-.09a1.65 1.65 0 00-1.51 1z" />
    </svg>
  );
}

/**
 * Angled connectors between cards, with tokens that traverse the diagonal
 * during the corresponding card's "transit" window. The SVG sits BEHIND
 * the cards (z-0) so dotted segments only show in the inter-card gaps,
 * which reads as "data leaving one card, entering the next."
 *
 * preserveAspectRatio="none" means the viewBox stretches with the row.
 * Strokes use vectorEffect="non-scaling-stroke" so they stay crisp.
 *
 * Timing is locked to the same 9s cycle as the gear glows in globals.css:
 *   0–11%  card 1 active   (gear A glows)
 *   11–33% transit 1 → 2   (token 1 visible, traveling)
 *   33–44% card 2 active   (gear B glows)
 *   44–66% transit 2 → 3   (token 2 visible, traveling)
 *   66–77% card 3 active   (gear C glows)
 *   77–100% reset
 */
function Connectors() {
  return (
    <svg
      aria-hidden
      className="hidden md:block pointer-events-none absolute inset-0 w-full h-full z-0"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
    >
      {/* Connector 1: card 1 lower-right port → card 2 upper-left port */}
      <path
        d="M 31 70 L 35 30"
        stroke="rgba(11,79,136,0.28)"
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />
      {/* Connector 2: card 2 lower-right port → card 3 upper-left port */}
      <path
        d="M 65 70 L 69 30"
        stroke="rgba(11,79,136,0.28)"
        strokeWidth="1"
        strokeDasharray="3 4"
        fill="none"
        vectorEffect="non-scaling-stroke"
      />

      {/* Token 1 */}
      <circle r="0.9" fill="#0B4F88">
        <animateMotion
          path="M 31 70 L 35 30"
          dur="9s"
          keyPoints="0;0;1;1;1"
          keyTimes="0;0.11;0.33;0.335;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.105;0.11;0.33;0.335;1"
          dur="9s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>

      {/* Token 2 */}
      <circle r="0.9" fill="#0B4F88">
        <animateMotion
          path="M 65 70 L 69 30"
          dur="9s"
          keyPoints="0;0;0;1;1"
          keyTimes="0;0.439;0.44;0.66;1"
          calcMode="linear"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0;0;1;1;0;0"
          keyTimes="0;0.435;0.44;0.66;0.665;1"
          dur="9s"
          calcMode="linear"
          repeatCount="indefinite"
        />
      </circle>
    </svg>
  );
}

export default function Platform() {
  return (
    <Section
      eyebrow="The platform"
      title={
        <>
          Diagnose.<br />Govern. Activate.
        </>
      }
      intro="Three products. One pipeline. Each ships value on its own and composes with the others."
      tone="mist"
    >
      <div className="pipeline-rail relative">
        <Connectors />

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 relative">
          {PIPELINE.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group relative block h-full rounded-2xl p-7 md:p-8 bg-gradient-to-br from-white/85 via-white/70 to-white/55 backdrop-blur-md ring-1 ring-white/70 shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_10px_30px_rgba(11,79,136,0.06)] hover:ring-brand-blue/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.95),0_18px_44px_rgba(11,79,136,0.14)] hover:-translate-y-1 transition-all duration-400 ease-out-expo"
            >
              {/* Gear: continuously spinning; halo pulses during this card's active window */}
              <div className="absolute top-5 right-5 h-11 w-11">
                <span
                  aria-hidden
                  className={`absolute inset-0 -m-1 rounded-full bg-brand-blue/45 blur-[2px] pipeline-glow-${p.slot}`}
                />
                <span
                  aria-hidden
                  className={`absolute inset-0 rounded-full ring-1 ring-brand-blue/25 bg-white/60 backdrop-blur-sm`}
                />
                <span className="absolute inset-0 flex items-center justify-center text-brand-blue">
                  <Gear className={`h-6 w-6 pipeline-gear pipeline-gear-${p.slot}`} />
                </span>
              </div>

              <div className="flex items-center gap-2 mb-5 pr-14">
                <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10">
                  {p.stage}
                </span>
                {p.live && (
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-1 rounded bg-emerald-500/10 inline-flex items-center gap-1.5">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                    Live
                  </span>
                )}
              </div>
              <h3 className="font-display text-2xl md:text-[28px] text-brand-ink mb-2">
                {p.name}
              </h3>
              <p className="text-brand-ink font-semibold text-base md:text-lg leading-snug mb-3">
                {p.tagline}
              </p>
              <p className="text-brand-ink/70 leading-relaxed">{p.body}</p>
              <span className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                Explore
                <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
              </span>
            </Link>
          ))}
        </div>

        {/* Vertical proof point */}
        <div className="mt-8 md:mt-10">
          <Link
            href="/products/gst-copilot"
            className="group flex flex-col md:flex-row md:items-center gap-3 md:gap-6 rounded-xl bg-white/55 backdrop-blur-md ring-1 ring-white/60 hover:ring-brand-blue/35 px-6 py-5 transition-all duration-300 ease-out-expo shadow-[inset_0_1px_0_rgba(255,255,255,0.9)]"
          >
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/60 shrink-0">
              Vertical proof point
            </span>
            <div className="flex-1">
              <span className="font-display text-xl text-brand-ink">GST Co-Pilot</span>
              <span className="text-brand-ink/70"> &middot; agentic AI for Indian tax reconciliation, running the same governed stack in production for SMB and mid-market tax teams.</span>
            </div>
            <span className="text-brand-blue font-semibold text-sm inline-flex items-center gap-2 shrink-0">
              See it
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
            </span>
          </Link>
        </div>
      </div>
    </Section>
  );
}
