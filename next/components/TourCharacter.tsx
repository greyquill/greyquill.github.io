'use client';

/**
 * The small animated figure that appears beside each tour stop.
 *
 * Inline SVG rather than image files: they are a few hundred bytes each, they
 * inherit brand colour, they stay sharp at any size, and the walkthrough never
 * waits on a network request to draw one.
 *
 * The style is deliberately abstract. A cartoon mascot would undercut a page
 * arguing about audit evidence and the EU AI Act, so these read as diagrams
 * with a pulse rather than characters with a personality.
 */

import { motion } from 'framer-motion';
import type { CharacterKey } from '@/lib/tour';

const INK = '#123B6D';
const ACCENT = '#2F6FD0';

/** Gentle idle motion shared by every character, so none feel like a static icon. */
const float = {
  animate: { y: [0, -3, 0] },
  transition: { duration: 3.2, repeat: Infinity, ease: 'easeInOut' as const },
};

function Guide() {
  return (
    <motion.g {...float}>
      <circle cx="24" cy="24" r="13" fill="none" stroke={INK} strokeWidth="1.6" />
      <motion.circle
        cx="24"
        cy="24"
        r="5"
        fill={ACCENT}
        animate={{ scale: [1, 1.15, 1], opacity: [0.85, 1, 0.85] }}
        transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.circle
        cx="24"
        cy="24"
        r="19"
        fill="none"
        stroke={ACCENT}
        strokeWidth="1"
        animate={{ scale: [0.85, 1.1], opacity: [0.5, 0] }}
        transition={{ duration: 2.6, repeat: Infinity, ease: 'easeOut' }}
      />
    </motion.g>
  );
}

/** Ninety-five of a hundred ideas falling over: a broken pipeline. */
function Broken() {
  return (
    <motion.g {...float}>
      <rect x="7" y="14" width="13" height="9" rx="2" fill="none" stroke={INK} strokeWidth="1.6" />
      <rect x="28" y="26" width="13" height="9" rx="2" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M20 18.5h4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M31 30.5h-4" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      {/* The gap where it fails */}
      <motion.path
        d="M25 20l-2 4m2 2l-2 4"
        stroke="#C2410C"
        strokeWidth="1.8"
        strokeLinecap="round"
        animate={{ opacity: [1, 0.25, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.g>
  );
}

function Compass() {
  return (
    <motion.g {...float}>
      <circle cx="24" cy="24" r="14" fill="none" stroke={INK} strokeWidth="1.6" />
      <motion.path
        d="M24 14l4 10-4 10-4-10z"
        fill={ACCENT}
        style={{ originX: '24px', originY: '24px' }}
        animate={{ rotate: [0, 118, 238, 360] }}
        transition={{ duration: 7, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.g>
  );
}

/** Layers of evidence stacking up. */
function Data() {
  return (
    <motion.g {...float}>
      {[0, 1, 2].map((i) => (
        <motion.ellipse
          key={i}
          cx="24"
          cy={17 + i * 7}
          rx="13"
          ry="4.5"
          fill="none"
          stroke={i === 0 ? ACCENT : INK}
          strokeWidth="1.6"
          animate={{ opacity: [0.45, 1, 0.45] }}
          transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.35, ease: 'easeInOut' }}
        />
      ))}
    </motion.g>
  );
}

/** Policy becoming a control that holds. */
function Shield() {
  return (
    <motion.g {...float}>
      <path
        d="M24 10l12 5v9c0 7.5-5 12.5-12 15-7-2.5-12-7.5-12-15v-9z"
        fill="none"
        stroke={INK}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <motion.path
        d="M18 24l4.5 4.5L31 20"
        fill="none"
        stroke={ACCENT}
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: [0, 1, 1, 0] }}
        transition={{ duration: 3.2, repeat: Infinity, times: [0, 0.35, 0.8, 1] }}
      />
    </motion.g>
  );
}

/** An agent working, under supervision. */
function Agent() {
  return (
    <motion.g {...float}>
      <rect x="12" y="16" width="24" height="19" rx="5" fill="none" stroke={INK} strokeWidth="1.6" />
      <path d="M24 10v6" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="24" cy="9" r="2.2" fill={ACCENT} />
      <motion.circle
        cx="19"
        cy="25"
        r="2"
        fill={INK}
        animate={{ scaleY: [1, 0.15, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.06, 0.12], ease: 'easeInOut' }}
      />
      <motion.circle
        cx="29"
        cy="25"
        r="2"
        fill={INK}
        animate={{ scaleY: [1, 0.15, 1] }}
        transition={{ duration: 3.4, repeat: Infinity, times: [0, 0.06, 0.12], ease: 'easeInOut' }}
      />
    </motion.g>
  );
}

/** Regulated sectors, each with its own gate. */
function Sector() {
  return (
    <motion.g {...float}>
      <path d="M11 34V21l13-8 13 8v13" fill="none" stroke={INK} strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M8 34h32" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      {[17, 24, 31].map((x, i) => (
        <motion.path
          key={x}
          d={`M${x} 34v-8`}
          stroke={i === 1 ? ACCENT : INK}
          strokeWidth="1.6"
          strokeLinecap="round"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3, ease: 'easeInOut' }}
        />
      ))}
    </motion.g>
  );
}

/** Senior people, few of them, working together. */
function Team() {
  return (
    <motion.g {...float}>
      <circle cx="18" cy="19" r="4.5" fill="none" stroke={INK} strokeWidth="1.6" />
      <circle cx="30" cy="19" r="4.5" fill="none" stroke={ACCENT} strokeWidth="1.6" />
      <path d="M10 34c0-5 3.6-8 8-8s8 3 8 8" fill="none" stroke={INK} strokeWidth="1.6" strokeLinecap="round" />
      <path d="M22 34c0-5 3.6-8 8-8s8 3 8 8" fill="none" stroke={ACCENT} strokeWidth="1.6" strokeLinecap="round" />
    </motion.g>
  );
}

function Spark() {
  return (
    <motion.g {...float}>
      <motion.path
        d="M24 9l3.6 9.8L37 22l-9.4 3.2L24 35l-3.6-9.8L11 22l9.4-3.2z"
        fill={ACCENT}
        animate={{ scale: [1, 1.08, 1], opacity: [0.85, 1, 0.85] }}
        style={{ originX: '24px', originY: '22px' }}
        transition={{ duration: 2.2, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.g>
  );
}

const CHARACTERS: Record<CharacterKey, () => React.ReactElement> = {
  guide: Guide,
  broken: Broken,
  compass: Compass,
  data: Data,
  shield: Shield,
  agent: Agent,
  sector: Sector,
  team: Team,
  spark: Spark,
};

export default function TourCharacter({ name }: { name: CharacterKey }) {
  const Figure = CHARACTERS[name] ?? Guide;
  return (
    <svg viewBox="0 0 48 48" width="40" height="40" aria-hidden className="shrink-0">
      <Figure />
    </svg>
  );
}
