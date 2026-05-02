import type { Transition, Variants } from 'framer-motion';

/**
 * Shared motion language for the Greyquill site.
 * Goal: feel hand-crafted at 60fps. Animate transform/opacity only.
 */

export const easings = {
  outExpo: [0.22, 1, 0.36, 1] as const,
  inOutQuint: [0.83, 0, 0.17, 1] as const,
  springSoft: [0.34, 1.56, 0.64, 1] as const,
};

export const durations = {
  micro: 0.18,
  short: 0.34,
  base: 0.6,
  long: 0.9,
};

export const heroEntrance: Transition = {
  duration: durations.base,
  ease: easings.outExpo,
};

/** Stagger children of a hero section in deliberate sequence */
export const heroStagger: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.05,
    },
  },
};

export const riseIn: Variants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easings.outExpo },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.short, ease: easings.outExpo },
  },
};

/** Spring-loaded scale for buttons / interactive cards */
export const pressSpring = {
  type: 'spring' as const,
  stiffness: 420,
  damping: 28,
  mass: 0.8,
};
