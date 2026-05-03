'use client';

import { useState, type CSSProperties, type ReactNode } from 'react';
import Link from 'next/link';
import clsx from 'clsx';
import { Plug2 } from 'lucide-react';
import Section from './Section';
import {
  SapGlyph,
  GoogleDriveGlyph,
  OutlookGlyph,
  GmailGlyph,
  ExcelGlyph,
  TallyGlyph,
  ScanGlyph,
  GstPortalGlyph,
} from './sources/SourceIcons';

/**
 * Three-layer platform pipeline with a use-case toggle.
 *
 * Layout: three columns side-by-side (Clarity | Data | Agents). Each
 * column shows Sources → Engine → Output flowing top-to-bottom inside
 * it. Two angled connectors sit between columns and carry a small
 * token during the hand-off windows.
 *
 * The same 15s shared cycle drives every animated element; layer
 * delays are 0s / 5s / 10s. Switching tabs re-mounts the stage so the
 * cycle restarts cleanly.
 *
 * Brand source glyphs (SAP, Google Drive, Outlook, Tally, Excel, Gmail,
 * GST portal, scan) live in components/sources/SourceIcons.tsx.
 */

type SourceKey = 'sap' | 'gdrive' | 'outlook' | 'gmail' | 'excel' | 'tally' | 'scan' | 'gst';

const SOURCE_RENDER: Record<SourceKey, (size: number) => ReactNode> = {
  sap: (size) => <SapGlyph size={size} />,
  gdrive: (size) => <GoogleDriveGlyph size={size} />,
  outlook: (size) => <OutlookGlyph size={size} />,
  gmail: (size) => <GmailGlyph size={size} />,
  excel: (size) => <ExcelGlyph size={size} />,
  tally: (size) => <TallyGlyph size={size} />,
  scan: (size) => <ScanGlyph size={size} />,
  gst: (size) => <GstPortalGlyph size={size} />,
};

type Source = { key: SourceKey; label: string; sub?: string };
type EngineStep = { label: string };
type OutputField = { k: string; v: string };

type Layer = {
  product: string;
  role: string;
  description: string;
  /** Only used for layer 0 (ClarityAI). Layers 1 and 2 take whatever the
   *  previous layer just produced and render an "incoming" arrow instead. */
  sourcesLabel?: string;
  sources?: Source[];
  engineLabel: string;
  steps: EngineStep[];
  outputLabel: string;
  outputTitle: string;
  outputFields: OutputField[];
  outputFooter?: string;
};

type UseCase = {
  id: string;
  tab: string;
  tabSub: string;
  intro: string;
  layers: [Layer, Layer, Layer];
};

const SUPPLY_CHAIN: UseCase = {
  id: 'supply',
  tab: 'Supply chain',
  tabSub: '3-way match',
  intro: 'A purchase order, a goods receipt, and a vendor invoice arrive from three different systems. Watch one transaction travel through every layer.',
  layers: [
    {
      product: 'ClarityAI',
      role: 'Understanding',
      description: 'Reads documents, scans, and source records. Extracts entities, classifies content, outputs structured fields.',
      sourcesLabel: 'Sources',
      sources: [
        { key: 'sap', label: 'SAP', sub: 'Purchase orders' },
        { key: 'scan', label: 'Scan', sub: 'Goods receipt' },
        { key: 'outlook', label: 'Outlook', sub: 'Vendor invoice' },
      ],
      engineLabel: 'Clarity engine',
      steps: [
        { label: 'Detect document type' },
        { label: 'Parse text + tables' },
        { label: 'Extract entities' },
      ],
      outputLabel: 'Structured fields',
      outputTitle: 'PO-2026-04812',
      outputFields: [
        { k: 'Vendor', v: 'Acme Industrial' },
        { k: 'Qty ord', v: '500 units' },
        { k: 'Qty rcv', v: '498 units' },
        { k: 'Inv amt', v: '₹4,98,000' },
      ],
    },
    {
      product: 'GQData',
      role: 'Foundation',
      description: 'Promotes structured fields into a master record. Links to existing entities, classifies sensitive fields, stamps lineage.',
      engineLabel: 'Data operations',
      steps: [
        { label: 'Link to vendor master' },
        { label: 'Classify PII fields' },
        { label: 'Quality + completeness' },
        { label: 'Stamp lineage' },
      ],
      outputLabel: 'Master record',
      outputTitle: 'PO-MASTER-04812',
      outputFields: [
        { k: 'Vendor', v: 'VND-00482' },
        { k: 'Delta', v: '−2 units · −₹2,000' },
        { k: 'PII', v: 'Tax ID, Bank A/C' },
        { k: 'Lineage', v: 'PO + GRN + INV' },
      ],
    },
    {
      product: 'GQ Agents',
      role: 'Activation',
      description: 'Master records flow into purpose-built agents. This one runs three-way match, decides routing, logs the audit trail.',
      engineLabel: 'Agent · 3-way match',
      steps: [
        { label: 'Compare PO vs GRN vs INV' },
        { label: 'Apply tolerance rules' },
        { label: 'Route + log audit' },
      ],
      outputLabel: 'Decision',
      outputTitle: 'Hold for buyer review',
      outputFields: [
        { k: 'Confidence', v: '0.94' },
        { k: 'Routed', v: 'Procurement · Tier 2' },
        { k: 'Audit', v: '7 steps · immutable' },
      ],
      outputFooter: 'Quantity variance exceeds 0.5% tolerance.',
    },
  ],
};

const FINANCE_GST: UseCase = {
  id: 'finance',
  tab: 'Finance · GST',
  tabSub: 'ITC reconciliation',
  intro: 'Vendor invoices arrive across email, Tally, and the GST portal. A single invoice flows through the platform and ends up either matched or routed for review.',
  layers: [
    {
      product: 'ClarityAI',
      role: 'Understanding',
      description: 'Reads invoices in any shape- PDF, scanned image, email body, or Tally export. Extracts GSTIN, line items, and totals.',
      sourcesLabel: 'Sources',
      sources: [
        { key: 'tally', label: 'Tally', sub: 'Vendor ledger' },
        { key: 'gmail', label: 'Gmail', sub: 'Forwarded invoice' },
        { key: 'gdrive', label: 'Drive', sub: 'Scanned PDF' },
      ],
      engineLabel: 'Clarity engine',
      steps: [
        { label: 'Identify invoice format' },
        { label: 'Extract GSTIN + line items' },
        { label: 'Classify input type' },
      ],
      outputLabel: 'Structured invoice',
      outputTitle: 'INV-2026-882341',
      outputFields: [
        { k: 'Vendor', v: 'Acme Corp' },
        { k: 'Amount', v: '₹1,18,000' },
        { k: 'GSTIN', v: '29AABCM1234F1Z5' },
        { k: 'Date', v: '15-Apr-2026' },
      ],
    },
    {
      product: 'GQData',
      role: 'Foundation',
      description: 'Promotes the invoice into a master record. Links to vendor master, classifies PII (Tax ID), stamps lineage.',
      engineLabel: 'Data operations',
      steps: [
        { label: 'Match to vendor master' },
        { label: 'Classify PII fields' },
        { label: 'Quality check' },
        { label: 'Stamp lineage' },
      ],
      outputLabel: 'Master record',
      outputTitle: 'INV-MASTER-882341',
      outputFields: [
        { k: 'Vendor', v: 'VND-00482 · Acme' },
        { k: 'Amount', v: '₹1,18,000' },
        { k: 'PII', v: 'Tax ID flagged' },
        { k: 'Lineage', v: 'Clarity v2.1' },
      ],
    },
    {
      product: 'GQ Agents',
      role: 'Activation',
      description: 'Reconciliation agent matches the invoice against the GSTR-2B from the GST portal, scores ITC risk, routes the result.',
      engineLabel: 'Agent · reconcile',
      steps: [
        { label: 'Match against GSTR-2B' },
        { label: 'Score ITC risk' },
        { label: 'Route to approver' },
        { label: 'Log audit trail' },
      ],
      outputLabel: 'Outcome',
      outputTitle: 'Matched · ITC OK',
      outputFields: [
        { k: 'Confidence', v: '0.97' },
        { k: 'Routed', v: 'Finance approver' },
        { k: 'Audit', v: '3 steps · immutable' },
      ],
      outputFooter: 'Clarity → Data → Agent · logged.',
    },
  ],
};

const USE_CASES: UseCase[] = [SUPPLY_CHAIN, FINANCE_GST];

const LAYER_ACCENTS = ['#0B4F88', '#0e7490', '#4338ca'];
const LAYER_DELAYS = [0, 5, 10]; // seconds; matches keyframes in globals.css

/**
 * Inter-column handoff. A dotted line spans the gap; an animated dot
 * crosses it left → right, timed to fire just after the previous
 * layer's engine completes. The dot inherits the next layer's accent
 * so it visually "becomes" what enters the next column. The dot rides
 * an invisible track whose width equals the line's width — translating
 * the track 0% → 100% moves the dot from one end to the other.
 */
function Connector({ delay, accent }: { delay: number; accent: string }) {
  return (
    <div className="hidden md:flex items-center justify-center self-stretch px-2">
      <div className="relative w-14 h-px bg-brand-ink/15">
        {/* arrowhead at the right end */}
        <svg viewBox="0 0 10 10" className="absolute right-[-3px] top-1/2 -translate-y-1/2 w-2.5 h-2.5 text-brand-ink/45" aria-hidden>
          <path d="M1.5 1.5 L 8 5 L 1.5 8.5" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        {/* animated track containing the travelling dot */}
        <div
          className="ls-handoff absolute inset-y-0 left-0 right-0"
          style={{ animationDelay: `${delay}s` }}
        >
          <div
            className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full shadow-[0_0_10px_rgba(11,79,136,0.45)]"
            style={{ background: accent }}
          />
        </div>
      </div>
    </div>
  );
}

function SourceTile({ source, delay }: { source: Source; delay: number }) {
  return (
    <div
      className="ls-source flex flex-col items-center gap-1.5 py-1 px-1"
      title={source.sub ? `${source.label} · ${source.sub}` : source.label}
      style={{ animationDelay: `${delay}s` }}
    >
      <span className="inline-flex">{SOURCE_RENDER[source.key](28)}</span>
      <span className="text-[9.5px] font-medium text-brand-ink/65 leading-none truncate max-w-full">{source.label}</span>
    </div>
  );
}

/**
 * For layers 1 and 2, the input is whatever the previous layer just
 * produced. The animated handoff lives on the inter-column connector
 * (Connector component above), so this is just a quiet "arrives from
 * <previous>" marker — no graphic of its own.
 */
function IncomingFromPrevious({ fromLabel, accent }: { fromLabel: string; accent: string }) {
  return (
    <div className="flex items-center gap-2.5">
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full"
        style={{ background: `${accent}1a` }}
      >
        <svg viewBox="0 0 10 10" className="w-3 h-3" aria-hidden style={{ color: accent }}>
          <path d="M1 5 H 8 M 5 2 L 8 5 L 5 8" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </span>
      <div className="text-[11px] leading-tight">
        <div className="text-brand-ink/55 uppercase tracking-[0.18em] text-[9.5px] font-semibold">From</div>
        <div className="text-brand-ink font-medium">{fromLabel}</div>
      </div>
    </div>
  );
}

function EngineBar({ accent, delay }: { accent: string; delay: number }) {
  return (
    <div className="relative flex-1 h-1.5 rounded-full bg-brand-ink/8 overflow-hidden">
      <div
        className="ls-bar absolute left-0 top-0 h-full rounded-full"
        style={{ background: accent, animationDelay: `${delay}s` }}
      />
    </div>
  );
}

function LayerColumn({ layer, index, prevProduct }: { layer: Layer; index: number; prevProduct?: string }) {
  const accent = LAYER_ACCENTS[index];
  const layerDelay = LAYER_DELAYS[index];
  const sourceDelay = layerDelay;
  const barStartOffset = 0.6;
  const barStep = 0.9;
  // Each engine bar takes ~1.05s to fill (ls-bar 2% → 9% of 15s). With
  // bars staggered every 0.9s, the LAST bar finishes filling at
  //   layerDelay + barStartOffset + (N-1)*barStep + 1.05s.
  // A small beat (0.5s) after that, the output flashes so it reads as
  // "engine finished, then result settled."
  const barFillDuration = 1.05;
  const lastBarFinish = layerDelay + barStartOffset + (layer.steps.length - 1) * barStep + barFillDuration;
  const flashDelay = lastBarFinish + 0.5;

  const eyebrowStyle: CSSProperties = { color: accent };

  return (
    <div className="flex flex-col gap-5 rounded-2xl bg-white/70 backdrop-blur-md ring-1 ring-white/60 p-5 md:p-6 shadow-[0_10px_30px_rgba(10,22,40,0.05)]">
      {/* Header */}
      <div>
        <div className="flex items-baseline justify-between gap-3 mb-1">
          <div className="font-display text-xl md:text-[22px] font-semibold text-brand-ink leading-tight">
            {layer.product}
          </div>
          <div className="text-[10px] font-semibold uppercase tracking-[0.18em]" style={eyebrowStyle}>
            {layer.role}
          </div>
        </div>
        <p className="text-[12.5px] text-brand-ink/65 leading-relaxed">{layer.description}</p>
      </div>

      {/* Sources / Incoming */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/50 mb-2">
          {index === 0 ? layer.sourcesLabel : 'Incoming'}
        </div>
        {index === 0 ? (
          <div className="grid grid-cols-4 gap-2">
            {(layer.sources ?? []).map((s, i) => (
              <SourceTile key={`${s.key}-${i}`} source={s} delay={sourceDelay + i * 0.12} />
            ))}
            {/* "Custom sources" — anything else the customer plugs in
               (APIs, internal databases, niche ERPs, scanners). Flat
               treatment matching SourceTile so it doesn't read as CTA. */}
            <div
              className="ls-source flex flex-col items-center justify-center gap-1.5 py-1 px-1 text-brand-ink/55"
              title="Custom sources — APIs, internal databases, ERPs, scanners"
              style={{ animationDelay: `${sourceDelay + (layer.sources?.length ?? 0) * 0.12}s` }}
              aria-label="Custom sources"
            >
              <Plug2 size={26} strokeWidth={1.6} aria-hidden />
              <span className="text-[9.5px] font-medium text-brand-ink/65 leading-none">Custom</span>
            </div>
          </div>
        ) : (
          <IncomingFromPrevious fromLabel={prevProduct ?? ''} accent={accent} />
        )}
      </div>

      {/* Engine */}
      <div>
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] mb-2" style={eyebrowStyle}>
          {layer.engineLabel}
        </div>
        <div className="rounded-xl bg-brand-mist/40 ring-1 ring-black/5 p-3 md:p-4 space-y-2.5">
          {layer.steps.map((step, i) => (
            <div key={step.label} className="flex items-center gap-3">
              <div className="text-[11px] text-brand-ink/80 flex-1 leading-tight">{step.label}</div>
              <EngineBar accent={accent} delay={layerDelay + barStartOffset + i * barStep} />
            </div>
          ))}
        </div>
      </div>

      {/* Output — sticks to the bottom so all three columns line up at
         the same baseline. Flashes a halo when its layer's last bar
         finishes. */}
      <div className="mt-auto">
        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/50 mb-2">
          {layer.outputLabel}
        </div>
        <div className="relative">
          <div
            aria-hidden
            className="ls-output-flash absolute -inset-1 rounded-2xl pointer-events-none"
            style={{ background: accent, animationDelay: `${flashDelay}s` }}
          />
          <div
            className="relative rounded-xl bg-white p-3.5 md:p-4 ring-1 ring-black/[0.06]"
            style={{ boxShadow: '0 4px 14px rgba(10,22,40,0.04)' }}
          >
            <div className="font-display font-semibold text-[14.5px] text-brand-ink leading-tight mb-2" style={{ color: accent }}>
              {layer.outputTitle}
            </div>
            <div className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 text-[11px]">
              {layer.outputFields.map((f) => (
                <div key={f.k} className="contents">
                  <span className="text-brand-ink/50 uppercase tracking-wide text-[9.5px] font-semibold pt-[2px]">{f.k}</span>
                  <span className="text-brand-ink">{f.v}</span>
                </div>
              ))}
            </div>
            {layer.outputFooter && (
              <div className="mt-2 pt-2 border-t border-black/5 text-[10.5px] text-brand-ink/60 leading-snug">
                {layer.outputFooter}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Platform() {
  const [activeId, setActiveId] = useState<string>(USE_CASES[0].id);
  const useCase = USE_CASES.find((u) => u.id === activeId) ?? USE_CASES[0];

  return (
    <Section
      eyebrow="The platform"
      title={
        <>
          Inputs become understanding.<br />
          Understanding becomes data.<br />
          <span className="text-brand-blue">Data becomes action.</span>
        </>
      }
      intro="One pipeline, three layers. Watch a single artifact travel from raw input to executed automation, on systems you already use."
      tone="mist"
      className="!py-16 md:!py-24"
    >
      {/* Use-case toggle */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 md:mb-8">
        <div className="inline-flex p-1 rounded-full bg-white ring-1 ring-black/5 shadow-[0_2px_8px_rgba(10,22,40,0.04)]">
          {USE_CASES.map((uc) => {
            const isActive = uc.id === activeId;
            return (
              <button
                key={uc.id}
                type="button"
                onClick={() => setActiveId(uc.id)}
                className={clsx(
                  'px-4 py-2 rounded-full text-[13px] font-medium transition-all duration-300 ease-out-expo',
                  isActive
                    ? 'bg-brand-blue text-white shadow-sm'
                    : 'text-brand-ink/65 hover:text-brand-ink',
                )}
              >
                {uc.tab}
                <span className={clsx('hidden sm:inline ml-1.5 text-[11.5px]', isActive ? 'text-white/75' : 'text-brand-ink/45')}>
                  · {uc.tabSub}
                </span>
              </button>
            );
          })}
        </div>
        <p className="text-[12px] text-brand-ink/55 max-w-md">
          {useCase.intro}
        </p>
      </div>

      {/* Stage — `key` re-mounts on tab change so animations restart.
         Each connector's dot fires shortly after the previous layer
         finishes (lastBarFinish of layer N + 0.7s buffer) and inherits
         the next layer's accent so the colour reads as "what's about
         to land." */}
      {(() => {
        const handoffDelay = (i: number) => {
          const prev = useCase.layers[i];
          return LAYER_DELAYS[i] + 0.6 + (prev.steps.length - 1) * 0.9 + 1.05 + 0.7;
        };
        return (
          <div
            key={useCase.id}
            className="layered-stage grid md:grid-cols-[1fr_auto_1fr_auto_1fr] gap-4 md:gap-2 items-stretch"
          >
            <LayerColumn layer={useCase.layers[0]} index={0} />
            <Connector delay={handoffDelay(0)} accent={LAYER_ACCENTS[1]} />
            <LayerColumn layer={useCase.layers[1]} index={1} prevProduct={useCase.layers[0].product} />
            <Connector delay={handoffDelay(1)} accent={LAYER_ACCENTS[2]} />
            <LayerColumn layer={useCase.layers[2]} index={2} prevProduct={useCase.layers[1].product} />
          </div>
        );
      })()}

      {/* Cycle hint */}
      <div className="mt-6 flex flex-wrap items-center justify-between gap-3 text-[11px] text-brand-ink/55">
        <div>A complete pipeline cycle runs every 15 seconds. Hover any column to pause.</div>
        <Link
          href="/products/gst-copilot"
          className="font-semibold text-brand-blue hover:text-brand-blue-light inline-flex items-center gap-1.5"
        >
          See GST Co-Pilot in production
          <span aria-hidden>→</span>
        </Link>
      </div>
    </Section>
  );
}
