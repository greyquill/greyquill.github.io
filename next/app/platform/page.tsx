import type { Metadata } from 'next';
import Link from 'next/link';
import Section from '@/components/Section';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'The platform · One foundation, three layers',
  description:
    'The Greyquill platform: ClarityAI scores readiness, GQData makes the data foundation trustworthy, GQ Agents runs governed workflows. One foundation across the AI lifecycle.',
  alternates: { canonical: 'https://greyquill.io/platform' },
};

type Pillar = {
  eyebrow: string;
  product: string;
  heading: string;
  lead: string;
  bullets: string[];
  closer: string;
  href: string;
  ctaLabel: string;
  /** Live URL screenshot — rendered via Microlink. Falls back to the
   *  inline SVG illustration when the screenshot isn't available. */
  previewUrl?: string;
  Illustration: React.ComponentType<{ className?: string }>;
};

function microlinkSrc(url: string) {
  const params = new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '800',
    type: 'jpeg',
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

function PillarVisual({ pillar }: { pillar: Pillar }) {
  if (pillar.previewUrl) {
    return (
      <div className="bg-white rounded-2xl ring-1 ring-black/[0.05] shadow-xl shadow-brand-blue/5 overflow-hidden w-full max-w-[560px]">
        <div className="flex items-center gap-1.5 px-3 py-2 bg-brand-mist/50 border-b border-black/[0.05]">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="ml-2 text-[10.5px] text-brand-ink/55 font-mono truncate">
            {pillar.previewUrl.replace(/^https?:\/\//, '')}
          </span>
        </div>
        <div className="aspect-[16/10] bg-brand-mist/30 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={microlinkSrc(pillar.previewUrl)}
            alt={`${pillar.product} live preview`}
            loading="lazy"
            className="w-full h-full object-cover object-top"
          />
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-2xl ring-1 ring-black/[0.05] shadow-xl shadow-brand-blue/5 p-3 md:p-4 w-full max-w-[560px]">
      <pillar.Illustration className="w-full h-auto" />
    </div>
  );
}

/* ----------------------------- Illustrations ---------------------------- */

function ClarityIllustration({ className }: { className?: string }) {
  // Score gauge — diagnostic / scoring metaphor.
  return (
    <svg viewBox="0 0 600 440" className={className} aria-hidden>
      <defs>
        <linearGradient id="clarityArc" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#0B4F88" stopOpacity="0.15" />
          <stop offset="55%" stopColor="#0B4F88" stopOpacity="1" />
          <stop offset="100%" stopColor="#1a6bb5" stopOpacity="1" />
        </linearGradient>
      </defs>
      {/* Backing card */}
      <rect x="40" y="40" width="520" height="360" rx="18" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.06" />
      <text x="68" y="74" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="600" fill="#0B4F88" letterSpacing="2">
        CLARITY SCORE
      </text>
      <text x="68" y="92" fontFamily="Inter, system-ui" fontSize="10.5" fill="#5b6573">
        Initiative · Q3 fraud-detection rollout
      </text>

      {/* Gauge arc — track */}
      <path
        d="M 130 290 A 170 170 0 0 1 470 290"
        fill="none"
        stroke="#0a1628"
        strokeOpacity="0.08"
        strokeWidth="22"
        strokeLinecap="round"
      />
      {/* Gauge arc — fill (74%) */}
      <path
        d="M 130 290 A 170 170 0 0 1 425 192"
        fill="none"
        stroke="url(#clarityArc)"
        strokeWidth="22"
        strokeLinecap="round"
      />

      {/* Score number */}
      <text x="300" y="278" textAnchor="middle" fontFamily="var(--font-display), system-ui" fontSize="68" fontWeight="700" fill="#0a1628" letterSpacing="-2">
        74
      </text>
      <text x="300" y="304" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="11" fill="#5b6573" letterSpacing="1.5">
        OUT OF 100
      </text>

      {/* Risk markers along arc */}
      {[
        { angle: 195, label: 'Data lineage' },
        { angle: 235, label: 'Reg exposure' },
        { angle: 290, label: 'Dependencies' },
        { angle: 345, label: 'Ownership' },
      ].map((m, i) => {
        const r = 192;
        const cx = 300 + r * Math.cos((m.angle * Math.PI) / 180);
        const cy = 290 + r * Math.sin((m.angle * Math.PI) / 180);
        return (
          <g key={i}>
            <circle cx={cx} cy={cy} r="4" fill="#0B4F88" />
            <circle cx={cx} cy={cy} r="9" fill="#0B4F88" fillOpacity="0.18" />
          </g>
        );
      })}

      {/* Risk callouts */}
      <g fontFamily="Inter, system-ui" fontSize="10" fill="#0a1628">
        <rect x="68" y="332" width="208" height="40" rx="6" fill="#fafbfc" stroke="#0a1628" strokeOpacity="0.08" />
        <text x="80" y="348" fontWeight="600" fill="#0B4F88" fontSize="9" letterSpacing="0.5">FIX · 3</text>
        <text x="80" y="364">Data lineage missing for 2 sources</text>
        <rect x="324" y="332" width="208" height="40" rx="6" fill="#fafbfc" stroke="#0a1628" strokeOpacity="0.08" />
        <text x="336" y="348" fontWeight="600" fill="#0B4F88" fontSize="9" letterSpacing="0.5">FIX · 2</text>
        <text x="336" y="364">Owner unassigned for model risk tier</text>
      </g>
    </svg>
  );
}

function DataIllustration({ className }: { className?: string }) {
  // Three stacked layers with lineage threads — the foundation metaphor.
  return (
    <svg viewBox="0 0 600 440" className={className} aria-hidden>
      <rect x="40" y="40" width="520" height="360" rx="18" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.06" />
      <text x="68" y="74" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="600" fill="#0e7490" letterSpacing="2">
        DATA FOUNDATION
      </text>
      <text x="68" y="92" fontFamily="Inter, system-ui" fontSize="10.5" fill="#5b6573">
        Master record · INV-MASTER-882341
      </text>

      {/* Three stacked layers */}
      {[
        { y: 124, label: 'Sources', sub: 'SAP · Tally · Drive · CRM' },
        { y: 196, label: 'Quality + classification', sub: 'PII flagged · Vendor matched · Quality 0.97' },
        { y: 268, label: 'Master record', sub: 'Lineage · Audit log · Versioned' },
      ].map((l, i) => (
        <g key={i}>
          <rect x="68" y={l.y} width="464" height="58" rx="10" fill={i === 2 ? '#eefbff' : '#fafbfc'} stroke={i === 2 ? '#0e7490' : '#0a1628'} strokeOpacity={i === 2 ? '0.5' : '0.08'} strokeWidth={i === 2 ? '1.2' : '1'} />
          <text x="84" y={l.y + 24} fontFamily="var(--font-display), system-ui" fontSize="13" fontWeight="600" fill="#0a1628">
            {l.label}
          </text>
          <text x="84" y={l.y + 42} fontFamily="Inter, system-ui" fontSize="10.5" fill="#5b6573">
            {l.sub}
          </text>
          {/* layer index */}
          <circle cx="500" cy={l.y + 30} r="14" fill={i === 2 ? '#0e7490' : '#fafbfc'} stroke="#0e7490" strokeOpacity={i === 2 ? 0 : 0.4} />
          <text x="500" y={l.y + 34} textAnchor="middle" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="700" fill={i === 2 ? '#ffffff' : '#0e7490'}>
            {i + 1}
          </text>
        </g>
      ))}

      {/* lineage threads */}
      <g stroke="#0e7490" strokeWidth="1" fill="none" strokeOpacity="0.45">
        <path d="M 160 182 L 160 196" />
        <path d="M 280 182 L 280 196" />
        <path d="M 400 182 L 400 196" />
        <path d="M 200 254 L 200 268" />
        <path d="M 360 254 L 360 268" />
      </g>

      <text x="68" y="356" fontFamily="Inter, system-ui" fontSize="10" fill="#5b6573" letterSpacing="0.5">
        EVERY FIELD CARRIES LINEAGE BACK TO ITS SOURCE
      </text>
    </svg>
  );
}

function AgentsIllustration({ className }: { className?: string }) {
  // A multi-agent run: source → two agents in series → human checkpoint
  // → routing agent. Below, a focused work-packet card for one of the
  // agents, then a longer immutable audit-trail strip.
  const ACCENT = '#4338ca';
  return (
    <svg viewBox="0 0 600 440" className={className} aria-hidden>
      <rect x="20" y="20" width="560" height="400" rx="18" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.06" />

      {/* Top bar */}
      <text x="44" y="50" fontFamily="var(--font-display), system-ui" fontSize="10.5" fontWeight="600" fill={ACCENT} letterSpacing="2">
        AGENT EXECUTION · INVOICE RECONCILE
      </text>
      <text x="44" y="68" fontFamily="Inter, system-ui" fontSize="10.5" fill="#5b6573">
        Multi-agent run · 4 actors · all provenance logged
      </text>
      <g transform="translate(444 42)">
        <rect width="112" height="20" rx="10" fill="#eef2ff" stroke={ACCENT} strokeOpacity="0.35" />
        <circle cx="11" cy="10" r="3" fill="#22c55e" />
        <text x="22" y="14" fontFamily="Inter, system-ui" fontSize="10" fontWeight="500" fill="#0a1628">
          Run · WR-3204 · live
        </text>
      </g>

      {/* Agent graph row — every box widened to comfortably fit its
         labels and bars without horizontal overflow. */}
      {/* Source node */}
      <g transform="translate(28 96)">
        <rect width="100" height="60" rx="8" fill="#fafbfc" stroke="#0a1628" strokeOpacity="0.18" />
        <text x="10" y="18" fontFamily="Inter, system-ui" fontSize="9" fontWeight="600" fill="#5b6573" letterSpacing="0.4">SOURCE</text>
        <text x="10" y="34" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="600" fill="#0a1628">Master record</text>
        <text x="10" y="50" fontFamily="ui-monospace, monospace" fontSize="9" fill="#5b6573">INV-MASTER-882341</text>
      </g>

      {/* Agent A — Reconcile */}
      <g transform="translate(150 88)">
        <rect width="124" height="76" rx="10" fill="#ffffff" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.2" />
        <text x="12" y="18" fontFamily="Inter, system-ui" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.5">AGENT · v1.4</text>
        <text x="12" y="34" fontFamily="var(--font-display), system-ui" fontSize="12" fontWeight="600" fill="#0a1628">Reconcile</text>
        <text x="12" y="48" fontFamily="Inter, system-ui" fontSize="9.5" fill="#5b6573">Match against GSTR-2B</text>
        <g transform="translate(12 56)">
          <rect width="100" height="11" rx="2.5" fill="#eef2ff" />
          <rect width="95" height="11" rx="2.5" fill={ACCENT} fillOpacity="0.85" />
          <text x="50" y="8" fontFamily="Inter, system-ui" fontSize="7" fontWeight="600" fill="#ffffff" textAnchor="middle" letterSpacing="0.3">41 / 42 LINES MATCHED</text>
        </g>
      </g>

      {/* Agent B — Risk score */}
      <g transform="translate(296 88)">
        <rect width="124" height="76" rx="10" fill="#ffffff" stroke={ACCENT} strokeOpacity="0.45" strokeWidth="1.2" />
        <text x="12" y="18" fontFamily="Inter, system-ui" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.5">AGENT · v0.9</text>
        <text x="12" y="34" fontFamily="var(--font-display), system-ui" fontSize="12" fontWeight="600" fill="#0a1628">ITC Risk Score</text>
        <text x="12" y="48" fontFamily="Inter, system-ui" fontSize="9.5" fill="#5b6573">Score eligibility</text>
        <g transform="translate(12 58)">
          <text x="0" y="8" fontFamily="ui-monospace, monospace" fontSize="9" fill="#0a1628">conf</text>
          <text x="100" y="8" textAnchor="end" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="700" fill="#0a1628">0.97</text>
        </g>
      </g>

      {/* Human checkpoint */}
      <g transform="translate(442 86)">
        <path d="M 40 0 L 80 40 L 40 80 L 0 40 Z" fill="#fef3c7" stroke="#d97706" strokeOpacity="0.6" strokeWidth="1.2" />
        <text x="40" y="36" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="8" fontWeight="600" fill="#92400e" letterSpacing="0.6">HUMAN</text>
        <text x="40" y="52" textAnchor="middle" fontFamily="var(--font-display), system-ui" fontSize="11" fontWeight="600" fill="#0a1628">Approver</text>
      </g>

      {/* Edges — all land at y=126 (row centre line). */}
      <g stroke={ACCENT} strokeOpacity="0.55" strokeWidth="1.4" fill="none">
        <path d="M 128 126 L 150 126" />
        <path d="M 274 126 L 296 126" />
        <path d="M 420 126 L 442 126" />
      </g>
      {[150, 296, 442].map((x, i) => (
        <path key={i} d={`M ${x - 6} 122 L ${x} 126 L ${x - 6} 130`} fill="none" stroke={ACCENT} strokeOpacity="0.55" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
      ))}

      {/* Work packet detail card */}
      <g transform="translate(44 196)">
        <rect width="512" height="68" rx="10" fill="#fafbfc" stroke={ACCENT} strokeOpacity="0.25" />
        <text x="14" y="18" fontFamily="Inter, system-ui" fontSize="9" fontWeight="600" fill={ACCENT} letterSpacing="0.6">WORK PACKET · WP-3204-A</text>
        {/* Field grid: 4 columns */}
        {[
          { k: 'ACTION', v: 'matched' },
          { k: 'BY', v: 'Agent · Reconcile' },
          { k: 'EVIDENCE', v: 'GSTR-2B · a91f8c…' },
          { k: 'AT', v: '12:04:14 IST' },
        ].map((f, i) => (
          <g key={f.k} transform={`translate(${14 + i * 124} 30)`}>
            <text x="0" y="10" fontFamily="Inter, system-ui" fontSize="8.5" fontWeight="600" fill="#5b6573" letterSpacing="0.6">{f.k}</text>
            <text x="0" y="26" fontFamily="ui-monospace, monospace" fontSize="10.5" fill="#0a1628">{f.v}</text>
          </g>
        ))}
      </g>

      {/* Audit log strip */}
      <g transform="translate(44 280)">
        <rect width="512" height="124" rx="10" fill="#0a1628" />
        <text x="14" y="20" fontFamily="var(--font-display), system-ui" fontSize="9.5" fontWeight="700" fill="#ffffff" letterSpacing="2">
          AUDIT TRAIL · IMMUTABLE · CHAIN-HASHED
        </text>

        {/* Column headers */}
        <g fontFamily="Inter, system-ui" fontSize="8" fontWeight="600" fill="#94a3b8" letterSpacing="0.6">
          <text x="14" y="38">TIME</text>
          <text x="78" y="38">ACTOR</text>
          <text x="208" y="38">ACTION</text>
          <text x="372" y="38">EVIDENCE / HASH</text>
        </g>
        <line x1="14" y1="44" x2="498" y2="44" stroke="#ffffff" strokeOpacity="0.1" />

        {/* Rows */}
        {[
          { t: '12:04:12', actor: 'Reconcile · v1.4', action: 'pulled GSTR-2B', ev: 'a91f8c · 12.4 KB' },
          { t: '12:04:14', actor: 'Reconcile · v1.4', action: 'matched 41/42 lines', ev: '6e22d4 · diff(1)' },
          { t: '12:04:14', actor: 'Risk Score · v0.9', action: 'scored ITC · 0.97', ev: '4c1c0a · model 4b' },
          { t: '12:04:15', actor: 'human · finance.lead', action: 'approved with note', ev: '8b07a1 · sig=...' },
          { t: '12:04:15', actor: 'Router · v1.0', action: 'routed → Finance', ev: 'd2f5ee · final' },
        ].map((row, i) => (
          <g key={i} transform={`translate(0 ${56 + i * 13})`} fontFamily="ui-monospace, monospace" fontSize="9.5" fill="#e2e8f0">
            <text x="14">{row.t}</text>
            <text x="78">{row.actor}</text>
            <text x="208">{row.action}</text>
            <text x="372" fillOpacity="0.78">{row.ev}</text>
          </g>
        ))}
      </g>
    </svg>
  );
}

function HeroIllustration({ className }: { className?: string }) {
  // Compressed snapshot of the home-page LayeredStory section: three
  // layer cards stacked, each showing input → engine bars → output, in
  // its layer accent. Connector dots between cards convey flow.
  type Row = {
    y: number;
    accent: string;
    eyebrow: string;
    product: string;
    bars: number[];
    sources?: { label: string; bg: string; fg: string }[];
    output: { eyebrow: string; value: string };
  };
  const ROWS: Row[] = [
    {
      y: 44,
      accent: '#0B4F88',
      eyebrow: 'DIAGNOSE',
      product: 'ClarityAI',
      bars: [0.9, 0.75, 0.55],
      sources: [
        { label: 'SAP', bg: '#003f7d', fg: '#ffffff' },
        { label: 'O',   bg: '#0072c6', fg: '#ffffff' },
        { label: 'PDF', bg: '#cf2027', fg: '#ffffff' },
      ],
      output: { eyebrow: 'SCORE', value: '74' },
    },
    {
      y: 200,
      accent: '#0e7490',
      eyebrow: 'GOVERN',
      product: 'GQData',
      bars: [1, 0.85, 0.72, 0.6],
      output: { eyebrow: 'MASTER', value: 'INV-882341' },
    },
    {
      y: 356,
      accent: '#4338ca',
      eyebrow: 'ACTIVATE',
      product: 'GQ Agents',
      bars: [0.95, 0.7, 0.5],
      output: { eyebrow: 'DECISION', value: 'Matched' },
    },
  ];

  return (
    <svg viewBox="0 0 540 540" className={className} aria-hidden>
      <rect x="14" y="14" width="512" height="512" rx="22" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.06" />

      {ROWS.map((row, i) => (
        <g key={i}>
          {/* card body */}
          <rect x="44" y={row.y} width="452" height="140" rx="14" fill="#fafbfc" stroke={row.accent} strokeOpacity="0.35" />
          {/* accent strip on the left */}
          <rect x="44" y={row.y} width="5" height="140" rx="2.5" fill={row.accent} />

          {/* Header row: eyebrow + product name + status chip */}
          <text x="68" y={row.y + 26} fontFamily="Inter, system-ui" fontSize="9.5" fontWeight="700" fill={row.accent} letterSpacing="2">
            {row.eyebrow}
          </text>
          <text x="68" y={row.y + 50} fontFamily="var(--font-display), system-ui" fontSize="22" fontWeight="700" fill="#0a1628" letterSpacing="-0.5">
            {row.product}
          </text>
          <g transform={`translate(412 ${row.y + 16})`}>
            <rect width="68" height="18" rx="9" fill="#ffffff" stroke={row.accent} strokeOpacity="0.4" />
            <circle cx="11" cy="9" r="3" fill={row.accent} />
            <text x="22" y="13" fontFamily="Inter, system-ui" fontSize="9" fontWeight="500" fill="#0a1628">
              running
            </text>
          </g>

          {/* Bottom row: input | engine bars | output */}
          {/* INPUT — sources for row 0, "from previous" chevron otherwise */}
          {i === 0 && row.sources ? (
            <g transform={`translate(68 ${row.y + 84})`}>
              <text x="0" y="-2" fontFamily="Inter, system-ui" fontSize="8.5" fontWeight="600" fill="#5b6573" letterSpacing="0.6">SOURCES</text>
              {row.sources.map((s, si) => (
                <g key={si} transform={`translate(${si * 30} 8)`}>
                  <rect width="24" height="24" rx="4" fill={s.bg} />
                  <text x="12" y="16" textAnchor="middle" fontFamily="var(--font-display), system-ui" fontSize="9" fontWeight="700" fill={s.fg}>{s.label}</text>
                </g>
              ))}
              {/* +N chip */}
              <g transform={`translate(${row.sources.length * 30 + 4} 8)`}>
                <rect width="24" height="24" rx="4" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.18" />
                <text x="12" y="16" textAnchor="middle" fontFamily="Inter, system-ui" fontSize="10" fill="#5b6573">+12</text>
              </g>
            </g>
          ) : (
            <g transform={`translate(68 ${row.y + 84})`}>
              <text x="0" y="-2" fontFamily="Inter, system-ui" fontSize="8.5" fontWeight="600" fill="#5b6573" letterSpacing="0.6">INCOMING</text>
              <g transform="translate(0 8)">
                <rect width="100" height="24" rx="6" fill="#ffffff" stroke="#0a1628" strokeOpacity="0.12" />
                <circle cx="14" cy="12" r="6" fill={row.accent} fillOpacity="0.12" />
                <path d={`M 10 12 L 18 12 M 14 8 L 18 12 L 14 16`} fill="none" stroke={row.accent} strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
                <text x="28" y="16" fontFamily="Inter, system-ui" fontSize="10" fill="#0a1628" fillOpacity="0.78">from {ROWS[i - 1].product}</text>
              </g>
            </g>
          )}

          {/* ENGINE BARS — middle column */}
          <g transform={`translate(216 ${row.y + 78})`}>
            <text x="0" y="0" fontFamily="Inter, system-ui" fontSize="8.5" fontWeight="600" fill="#5b6573" letterSpacing="0.6">ENGINE</text>
            {row.bars.map((fill, bi) => (
              <g key={bi} transform={`translate(0 ${10 + bi * 10})`}>
                <rect width="120" height="6" rx="3" fill="#0a1628" fillOpacity="0.06" />
                <rect width={120 * fill} height="6" rx="3" fill={row.accent} fillOpacity={0.85} />
              </g>
            ))}
          </g>

          {/* OUTPUT — right column, small card */}
          <g transform={`translate(360 ${row.y + 76})`}>
            <rect width="120" height="48" rx="8" fill="#ffffff" stroke={row.accent} strokeOpacity="0.35" />
            <text x="10" y="16" fontFamily="Inter, system-ui" fontSize="8.5" fontWeight="700" fill={row.accent} letterSpacing="1">
              {row.output.eyebrow}
            </text>
            <text x="10" y="36" fontFamily="var(--font-display), system-ui" fontSize="14" fontWeight="700" fill="#0a1628" letterSpacing="-0.3">
              {row.output.value}
            </text>
          </g>
        </g>
      ))}

      {/* Inter-card connectors — three short threads with a small dot
         indicating the result flowing into the next layer. */}
      <g>
        {[
          { y1: 184, y2: 200 }, // between row 0 → 1
          { y1: 340, y2: 356 }, // between row 1 → 2
        ].map((c, i) => (
          <g key={i}>
            {[100, 270, 420].map((x, xi) => (
              <path key={xi} d={`M ${x} ${c.y1} L ${x} ${c.y2}`} stroke="#0a1628" strokeOpacity="0.18" strokeDasharray="2.5 3" strokeWidth="1" fill="none" />
            ))}
            {/* travelling-result dot — inherits next layer's accent */}
            <circle cx="420" cy={(c.y1 + c.y2) / 2} r="2.5" fill={ROWS[i + 1].accent} />
          </g>
        ))}
      </g>
    </svg>
  );
}

/* -------------------------------- Pillars ------------------------------- */

const PILLARS: Pillar[] = [
  {
    eyebrow: 'Diagnose',
    product: 'ClarityAI',
    heading: 'See the risk in any AI initiative before you fund it.',
    lead: 'Most AI initiatives stall at the briefing stage. ClarityAI scores any initiative (a PRD, an AI brief, a vendor RFP) for clarity, regulatory exposure, and dependency risk. In days, not months.',
    bullets: [
      'Drop in any document and get a numerical clarity score with line-by-line fixes.',
      'Surface hidden requirement gaps and regulatory exposure tied to specific clauses.',
      'Generate a board-ready summary, with citations, you can stand behind.',
    ],
    closer: 'For program leaders who need to qualify ideas before they consume budget.',
    href: '/products/clarity-ai',
    ctaLabel: 'Read more',
    previewUrl: 'https://clarity.greyquill.io',
    Illustration: ClarityIllustration,
  },
  {
    eyebrow: 'Govern',
    product: 'GQData',
    heading: 'AI is only as good as the data it stands on.',
    lead: 'GQData unifies, classifies, and stamps lineage on the data your models and agents will touch, before they touch it. The trusted-data layer beneath every AI decision.',
    bullets: [
      'Master-data unification across SAP, CRM, scanners, and custom sources.',
      'Real-time quality + completeness checks, with PII and sensitive-data classification.',
      'Active lineage queryable in one click. Every field traceable to its source.',
    ],
    closer: 'Every model, every agent, every decision runs on data you can stand behind.',
    href: '/products/gqdata',
    ctaLabel: 'Read more',
    Illustration: DataIllustration,
  },
  {
    eyebrow: 'Activate',
    product: 'GQ Agents',
    heading: 'Multi-agent orchestration with audit trails built in.',
    lead: 'Run governed workflows where you can prove what each agent did, why, and on what evidence, even months later. Audit-ready by default, on day one.',
    bullets: [
      'Work-packet provenance attached to every action an agent takes.',
      'Human-in-the-loop checkpoints, with replayable execution from any step.',
      'Immutable audit log mapped to your existing compliance frameworks.',
    ],
    closer: 'Designed for regulated environments where "because the model said so" isn\'t an acceptable answer.',
    href: '/products/agents',
    ctaLabel: 'Read more',
    Illustration: AgentsIllustration,
  },
];

/* --------------------------------- Page --------------------------------- */

export default function PlatformPage() {
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
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-16 md:pb-24 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
              <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
              The platform
            </div>
            <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl lg:text-[64px] leading-[1.0] tracking-[-0.025em] text-brand-ink">
              One foundation.<br />
              <span className="text-brand-blue">Three governed layers.</span>
            </h1>
            <p className="mt-7 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
              The Greyquill platform is a single foundation for compliant enterprise AI:
              ClarityAI scores readiness, GQData makes the data trustworthy, GQ Agents
              runs the workloads. Each layer ships value on its own and composes with
              the others.
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
                href="#pillars"
                className="inline-flex items-center gap-2 text-brand-ink/85 hover:text-brand-blue font-semibold px-3 py-3.5 transition-colors"
              >
                See how it works
                <span aria-hidden>↓</span>
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="bg-white rounded-2xl ring-1 ring-black/[0.05] shadow-xl shadow-brand-blue/5 p-4 md:p-6 max-w-[440px]">
              <HeroIllustration className="w-full h-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* WHY A PLATFORM */}
      <Section
        eyebrow="Why a platform"
        title={
          <>
            AI initiatives stall on the same three things.<br />
            <span className="text-brand-blue">A platform addresses all three.</span>
          </>
        }
        intro="Programs lose months guessing at risk, fixing data after the fact, and bolting governance onto already-running agents. The platform layers the work so each step is solved once."
      >
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              k: 'Diagnose',
              h: 'Stop funding ideas you can\'t defend.',
              p: 'Score every initiative for clarity, risk, and dependencies before it hits the roadmap.',
            },
            {
              k: 'Govern',
              h: 'Trust the data before you trust the model.',
              p: 'Master, classify, and stamp lineage on the data your models and agents will use.',
            },
            {
              k: 'Activate',
              h: 'Ship workloads regulators recognise.',
              p: 'Run agents with provenance, checkpoints, and an audit trail your auditor can read.',
            },
          ].map((c) => (
            <div key={c.k} className="rounded-2xl bg-white ring-1 ring-black/[0.06] p-6 md:p-7">
              <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
                {c.k}
              </div>
              <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink leading-snug mb-2">
                {c.h}
              </h3>
              <p className="text-brand-ink/70 text-sm md:text-[15px] leading-relaxed">
                {c.p}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* THREE PILLARS — alternating sections */}
      <section id="pillars" className="bg-brand-mist/30">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-16 md:py-24 space-y-20 md:space-y-28">
          {PILLARS.map((p, i) => {
            const imageRight = i % 2 === 0; // alternate: 0 right, 1 left, 2 right
            return (
              <div
                key={p.product}
                className={`grid lg:grid-cols-12 gap-10 lg:gap-14 items-center`}
              >
                {/* Content */}
                <div className={`lg:col-span-6 ${imageRight ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/85 mb-3 inline-flex items-center gap-2">
                    <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
                    {p.eyebrow}
                  </div>
                  {/* Product name — big and bold so the pillar is unmistakable. */}
                  <div className="font-display font-bold text-[56px] md:text-[80px] leading-[0.95] tracking-[-0.03em] text-brand-ink mb-4">
                    {p.product}
                  </div>
                  <h2 className="font-display font-semibold text-2xl md:text-[30px] leading-[1.15] tracking-[-0.01em] text-brand-ink/85 mb-5">
                    {p.heading}
                  </h2>
                  <p className="text-brand-ink/75 text-lg leading-[1.6] mb-6">
                    {p.lead}
                  </p>
                  <ul className="space-y-3 mb-7">
                    {p.bullets.map((b, bi) => (
                      <li key={bi} className="flex gap-3 items-start">
                        <span aria-hidden className="mt-[9px] h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0" />
                        <span className="text-brand-ink/80 text-[15px] leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-brand-ink/70 text-[15px] leading-relaxed mb-7 italic">
                    {p.closer}
                  </p>
                  <Link
                    href={p.href}
                    className="group inline-flex items-center gap-2 bg-brand-ink text-white font-semibold px-5 py-3 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:bg-brand-blue hover:shadow-lg hover:shadow-brand-blue/25"
                  >
                    {p.ctaLabel} about {p.product}
                    <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                  </Link>
                </div>

                {/* Illustration / live preview */}
                <div className={`lg:col-span-6 ${imageRight ? 'lg:order-2' : 'lg:order-1'} flex justify-center`}>
                  <PillarVisual pillar={p} />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-20 md:py-28 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Your teams are already building with AI.
              <br className="hidden md:block" />
              <span className="text-brand-blue-light">The question is whether you can prove it.</span>
            </h2>
            <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              Bring the AI initiatives you have running today. We will show you how the
              platform makes them defensible, governed, and audit-ready.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Book a demo
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
