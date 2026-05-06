'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { easings } from '@/lib/motion';

/**
 * The Dilemma. Built to match the user-provided exhibit exactly:
 * four bars centered on a horizontal axis, decreasing in height and
 * shade, with red drop annotations between them naming the loss reasons.
 */

const STAGES = [
  { label: 'STARTED',       count: 100, fill: '#1f4e79', text: 'white', sizeIn: true  },
  { label: 'REACH EVAL',    count: 60,  fill: '#4d7faa', text: 'white', sizeIn: true  },
  { label: 'PASS EVAL',     count: 25,  fill: '#7fa3c2', text: 'white', sizeIn: true  },
  { label: 'IN PRODUCTION', count: 5,   fill: '#b8cdde', text: '#0a1628', sizeIn: false },
];

const LOSSES = [
  {
    n: 40,
    heading: 'Data not AI-ready',
    body: 'No master data, lineage, or quality at source.',
  },
  {
    n: 35,
    heading: 'Cannot pass evaluation',
    body: 'No eval set, model card, or model risk management evidence.',
  },
  {
    n: 20,
    heading: 'Cannot run in production',
    body: 'No runtime controls, guardrails, or observability.',
  },
];

// Chart geometry (SVG units)
const VB_W = 1240;
const VB_H = 440;                              // chart ends just past the drop lines; the −N now lives in HTML below
const COL_W = VB_W / STAGES.length;          // 310
const BAR_W = 150;
const CENTER_Y = 240;                          // horizontal axis line
const MAX_BAR_H = 320;                         // bar height for count = 100
const HEADER_Y = 30;                           // column header text Y
const DROP_BOT = 420;                          // where each red drop line ends (just before HTML annotations)

export default function Dilemma() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <Section
      tone="mist"
      eyebrow="The dilemma"
      title={
        <>
          100 ideas in.<br />
          <span className="text-brand-blue">~5 in production.</span>
        </>
      }
      intro="Most AI initiatives never reach production. The drop offs happen at three predictable stages, and every one of them has a known cause and a known fix."
    >
      <motion.div
        ref={ref}
        initial={{ y: 8 }}
        animate={inView ? { y: 0 } : {}}
        transition={{ duration: 0.35, ease: easings.outExpo }}
      >
        <div className="bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-xl shadow-brand-blue/5 p-6 md:p-10">
          {/* Exhibit header */}
          <div>
            <h3 className="font-display font-bold text-2xl md:text-[28px] lg:text-[32px] text-brand-ink leading-tight">
              Of every 100 GenAI ideas started, only ~5 reach production.
            </h3>
            <p className="mt-2.5 text-brand-ink/65 text-sm md:text-base">
              The 95% drop off at three predictable stages. Every one has a known cause and a known fix.
            </p>
          </div>

          <div className="mt-6 pt-6 border-t border-black/[0.08]">
            {/* Mobile: stacked vertical funnel. The SVG below scales to
                ~4px text on a 390px viewport, so we render a stripped
                stack here. Hidden on `md`+ where the SVG is legible. */}
            <div className="md:hidden">
              {STAGES.map((s, i) => {
                const widthPct = Math.max(8, s.count); // floor for tiny bars
                const loss = LOSSES[i];
                return (
                  <div key={s.label}>
                    <div className="flex items-center gap-3">
                      <div className="w-12 text-right shrink-0">
                        <div className="font-display font-bold text-2xl text-brand-ink leading-none">
                          {s.count}
                        </div>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
                          {s.label}
                        </div>
                        <div className="h-3 w-full rounded-full bg-brand-mist/60 overflow-hidden">
                          <div
                            className="h-full rounded-full"
                            style={{ width: `${widthPct}%`, background: s.fill }}
                          />
                        </div>
                      </div>
                    </div>
                    {loss && (
                      <div className="my-3 ml-12 pl-3 border-l-2 border-[#c0392b]/40">
                        <div className="flex items-baseline gap-2">
                          <span className="font-display font-bold text-lg text-[#c0392b] leading-none">
                            −{loss.n}
                          </span>
                          <span className="text-[10px] font-bold tracking-[0.18em] text-[#c0392b]">
                            LOST
                          </span>
                        </div>
                        <div className="font-semibold text-brand-ink text-[14px] leading-snug mt-1.5">
                          {loss.heading}
                        </div>
                        <div className="text-[12.5px] text-brand-ink/65 leading-relaxed mt-1">
                          {loss.body}
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Desktop / tablet: original SVG funnel. */}
            <svg viewBox={`0 0 ${VB_W} ${VB_H}`} className="hidden md:block w-full h-auto" role="img" aria-label="Funnel chart: 100 ideas started, 60 reach evaluation, 25 pass evaluation, 5 in production. Loss reasons annotated between each stage.">
              {/* Column headers */}
              {STAGES.map((s, i) => {
                const cx = i * COL_W + COL_W / 2;
                return (
                  <text
                    key={s.label}
                    x={cx}
                    y={HEADER_Y}
                    fontSize="14"
                    fontWeight="700"
                    fill="#0a162888"
                    textAnchor="middle"
                    fontFamily="var(--font-body)"
                    letterSpacing="2"
                  >
                    {s.label}
                  </text>
                );
              })}

              {/* Horizontal axis line through centerline */}
              <line x1="0" y1={CENTER_Y} x2={VB_W} y2={CENTER_Y} stroke="#0a162833" strokeWidth="1" />

              {/* Bars (centered vertically on CENTER_Y) */}
              {STAGES.map((s, i) => {
                const cx = i * COL_W + COL_W / 2;
                const h = (s.count / 100) * MAX_BAR_H;
                const x = cx - BAR_W / 2;
                const y = CENTER_Y - h / 2;
                // Number font size shrinks with bar
                const numFont = Math.max(28, Math.min(64, h * 0.22));
                return (
                  <g key={s.label}>
                    <rect x={x} y={y} width={BAR_W} height={h} fill={s.fill} />
                    {s.sizeIn ? (
                      <text
                        x={cx}
                        y={CENTER_Y}
                        fontSize={numFont}
                        fontWeight="700"
                        fill={s.text}
                        textAnchor="middle"
                        dominantBaseline="middle"
                        fontFamily="var(--font-body)"
                        letterSpacing="-1"
                      >
                        {s.count}
                      </text>
                    ) : (
                      // For tiny bars, place the number BELOW the bar in dark
                      <text
                        x={cx}
                        y={y + h + 30}
                        fontSize="28"
                        fontWeight="700"
                        fill="#0a1628"
                        textAnchor="middle"
                        fontFamily="var(--font-body)"
                      >
                        {s.count}
                      </text>
                    )}
                  </g>
                );
              })}

              {/* Red drop lines between bars + −N number with LOST inline */}
              {LOSSES.map((loss, i) => {
                const dropX = (i + 1) * COL_W;
                return (
                  <g key={loss.heading}>
                    <line
                      x1={dropX}
                      y1={CENTER_Y}
                      x2={dropX}
                      y2={394}
                      stroke="#c0392b"
                      strokeWidth="1.6"
                    />
                    <text x={dropX + 6} y={420} fontFamily="var(--font-body)">
                      <tspan fontSize="24" fontWeight="700" fill="#c0392b" letterSpacing="-0.5">
                        −{loss.n}
                      </tspan>
                      <tspan fontSize="11" fontWeight="700" fill="#c0392b" letterSpacing="2" dx="10">
                        LOST
                      </tspan>
                    </text>
                  </g>
                );
              })}
            </svg>

            {/* Loss annotations: heading + body only (the −N and LOST live in the SVG above).
                Cols 2/3/4 of a 4-col grid land flush with the drop lines at 25/50/75%.
                Hidden on mobile where the stacked version already inlines them. */}
            <div className="hidden md:grid grid-cols-4 gap-x-4 md:gap-x-6 mt-2">
              <div aria-hidden />
              {LOSSES.map((loss) => (
                <div key={loss.heading}>
                  <div className="font-semibold text-brand-ink text-[15px] md:text-base leading-snug">
                    {loss.heading}
                  </div>
                  <div className="text-[13px] md:text-sm text-brand-ink/65 leading-relaxed mt-1.5">
                    {loss.body}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Source footer */}
          <div className="mt-8 pt-4 border-t border-black/[0.06] text-[11px] text-brand-ink/55 italic leading-relaxed">
            <span className="font-semibold not-italic text-brand-ink/65">Source: </span>
            Stage counts illustrate the funnel pattern reported across Gartner (2025), Deloitte CDO Survey (2025), and IBM IBV CEO Study (2025).
          </div>
        </div>

        {/* The reasoning bullets that previously ran beside the chart now sit
            below it, full width — gives the exhibit room to breathe. */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {[
            {
              h: 'Models ship in weeks. Trust takes years.',
              p: 'Most AI initiatives stall not at the model, but at the moment a regulator, auditor, or board member asks: "How do you know this is safe?"',
            },
            {
              h: 'Your data is the audit.',
              p: 'Lineage, quality, sensitivity classification, access controls. If those aren\'t in place, no governance framework will save you.',
            },
            {
              h: 'Frameworks are not enforcement.',
              p: 'A policy in a PDF is not a control. We build governance that runs at runtime, with evidence you can hand to anyone who asks.',
            },
          ].map((row) => (
            <div key={row.h} className="border-l-2 border-brand-blue/30 pl-5">
              <h3 className="font-display font-semibold text-lg text-brand-ink mb-1.5">{row.h}</h3>
              <p className="text-brand-ink/70 leading-relaxed text-[15px]">{row.p}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </Section>
  );
}
