import { Tektur, Titillium_Web } from 'next/font/google';

export const display = Tektur({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const body = Titillium_Web({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '600', '700'],
});
