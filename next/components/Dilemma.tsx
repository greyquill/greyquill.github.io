'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Section from './Section';
import { easings } from '@/lib/motion';

/**
 * The Dilemma — single visual that names the pain in three lines.
 * Two SVG paths animate their stroke-dasharray on scroll-into-view:
 * adoption climbs steeply, governance/clarity climbs barely.
 *
 * Design intent: feel hand-drawn, not chart-library generated.
 */

export default function Dilemma() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.4 });

  // Path lengths (rough — close enough for the stroke-dash trick)
  const adoptionLen = 520;
  const governanceLen = 480;

  return (
    <Section
      tone="mist"
      eyebrow="The dilemma"
      title={
        <>
          AI is accelerating.<br />
          <span className="text-brand-blue">Trust and governance aren&apos;t.</span>
        </>
      }
      intro="The risk isn't the model. It's deploying it on data you can't vouch for, with controls you can't prove. That gap is where careers, audits, and reputations break."
    >
      <div ref={ref} className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        <div className="lg:col-span-7 relative">
          <div className="relative aspect-[16/10] rounded-2xl bg-white ring-1 ring-black/5 shadow-xl shadow-brand-blue/5 p-6 md:p-8 overflow-hidden">
            {/* Subtle grid */}
            <svg className="absolute inset-0 w-full h-full opacity-[0.06]" aria-hidden>
              <defs>
                <pattern id="grid" width="32" height="32" patternUnits="userSpaceOnUse">
                  <path d="M 32 0 L 0 0 0 32" fill="none" stroke="#0B4F88" strokeWidth="1" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

            <svg viewBox="0 0 600 360" className="relative w-full h-full" aria-label="GenAI adoption is accelerating; governance and data trust are not keeping pace.">
              {/* Axes */}
              <line x1="60" y1="40" x2="60" y2="320" stroke="#0a162822" strokeWidth="1.5" />
              <line x1="60" y1="320" x2="560" y2="320" stroke="#0a162822" strokeWidth="1.5" />

              {/* Y-axis label */}
              <text x="30" y="180" fontSize="11" fill="#0a162888" transform="rotate(-90 30 180)" fontFamily="var(--font-body)">
                Capability
              </text>
              {/* X-axis label */}
              <text x="300" y="350" fontSize="11" fill="#0a162888" textAnchor="middle" fontFamily="var(--font-body)">
                Time
              </text>

              {/* Governance — slow, almost flat with shallow rise */}
              <motion.path
                d="M 60 280 C 160 278, 240 270, 320 258 S 480 232, 560 220"
                fill="none"
                stroke="#0B4F88"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray={governanceLen}
                strokeDashoffset={governanceLen}
                animate={inView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 2.0, ease: easings.outExpo, delay: 0.1 }}
              />
              <motion.text
                x="566" y="218" fontSize="13" fontWeight="600" fill="#0B4F88" fontFamily="var(--font-body)"
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.6, duration: 0.5, ease: easings.outExpo }}
              >
                Governance
              </motion.text>

              {/* Adoption — steep curve climbing into the corner */}
              <motion.path
                d="M 60 300 C 180 296, 260 280, 340 240 S 480 110, 560 60"
                fill="none"
                stroke="#0a1628"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeDasharray={adoptionLen}
                strokeDashoffset={adoptionLen}
                animate={inView ? { strokeDashoffset: 0 } : {}}
                transition={{ duration: 1.8, ease: easings.outExpo, delay: 0.4 }}
              />
              <motion.text
                x="566" y="58" fontSize="13" fontWeight="700" fill="#0a1628" fontFamily="var(--font-body)"
                initial={{ opacity: 0, x: -8 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 1.9, duration: 0.5, ease: easings.outExpo }}
              >
                AI adoption
              </motion.text>

              {/* The gap shading */}
              <motion.path
                d="M 60 300 C 180 296, 260 280, 340 240 S 480 110, 560 60 L 560 220 C 480 232, 320 258, 240 270 S 160 278, 60 280 Z"
                fill="#0B4F88"
                fillOpacity="0.06"
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 1.8, duration: 0.8 }}
              />

              {/* Gap callout */}
              <motion.g
                initial={{ opacity: 0, y: 6 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2.2, duration: 0.6, ease: easings.outExpo }}
              >
                <line x1="430" y1="160" x2="430" y2="195" stroke="#0a1628" strokeWidth="1" strokeDasharray="2 3" />
                <rect x="345" y="135" width="170" height="30" rx="6" fill="white" stroke="#0B4F88" strokeWidth="1.2" />
                <text x="430" y="155" fontSize="12" fontWeight="700" fill="#0B4F88" textAnchor="middle" fontFamily="var(--font-body)">
                  This gap is your risk.
                </text>
              </motion.g>
            </svg>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-7">
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
              h: 'Frameworks ≠ enforcement.',
              p: 'A policy in a PDF is not a control. We build governance that runs at runtime, with evidence you can hand to anyone who asks.',
            },
          ].map((row, i) => (
            <motion.div
              key={row.h}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease: easings.outExpo }}
              className="border-l-2 border-brand-blue/30 pl-5"
            >
              <h3 className="font-display text-lg md:text-xl text-brand-ink mb-1.5">{row.h}</h3>
              <p className="text-brand-ink/70 leading-relaxed">{row.p}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
