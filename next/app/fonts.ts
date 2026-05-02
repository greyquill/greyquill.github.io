import { Sora, Inter } from 'next/font/google';

/**
 * Display: Sora — modern geometric sans with subtle character. Confident,
 *   used by tech/AI brands that want to feel current without being generic.
 * Body:    Inter — neutral, highly legible, the gold standard for product UI.
 *
 * If this combination doesn't feel right, candidates to try next:
 *   - Bricolage Grotesque (more distinctive display)
 *   - General Sans + Inter
 *   - Space Grotesk + Inter
 */

export const display = Sora({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const body = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});
