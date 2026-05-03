/**
 * Canonical product taxonomy. Three platform pillars (Diagnose →
 * Govern → Activate) form the spine of the journey; vertical products
 * are commercial accelerators built on top of the platform.
 */

export type ProductMeta = {
  name: string;
  tier: string;
  href: string;
  external?: boolean;
};

export const PILLARS: ProductMeta[] = [
  { name: 'ClarityAI', tier: 'Diagnose', href: '/products/clarity-ai' },
  { name: 'GQData',    tier: 'Govern',   href: '/products/gqdata' },
  { name: 'GQ Agents', tier: 'Activate', href: '/products/agents' },
];

export const VERTICALS: ProductMeta[] = [
  { name: 'GST Co-Pilot',     tier: 'Indian tax',  href: '/products/gst-copilot' },
  { name: 'Commerce Synapse', tier: 'Retail',      href: 'https://commerce-synapse.com', external: true },
  { name: 'Umami',            tier: 'Healthcare',  href: 'https://umami.greyquill.io',   external: true },
];

/** Used by ProductSiblingChips for the cross-link rail at the bottom of
 *  every product detail page. */
export const PRODUCTS_ORDER: ProductMeta[] = [...PILLARS, VERTICALS[0]];
