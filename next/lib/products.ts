/**
 * Canonical product taxonomy. Three platform pillars (Foundation →
 * Govern → Activate) form the spine of the journey; GQ Studio is the
 * single shell that ties them together (not sold alone); vertical
 * products are commercial accelerators built on top of the platform;
 * tools are standalone products that work independently of the platform.
 */

export type ProductMeta = {
  name: string;
  tier: string;
  href: string;
  external?: boolean;
};

export const PILLARS: ProductMeta[] = [
  { name: 'GQData',    tier: 'Foundation', href: '/products/gqdata' },
  { name: 'GQ Govern', tier: 'Govern',     href: '/products/govern' },
  { name: 'GQ Agents', tier: 'Activate',   href: '/products/agents' },
];

export const STUDIO: ProductMeta = {
  name: 'GQ Studio',
  tier: 'The shell',
  href: '/dc/studio',
  external: true,
};

export const VERTICALS: ProductMeta[] = [
  { name: 'GST Co-Pilot',     tier: 'Indian tax',  href: '/products/gst-copilot' },
  { name: 'Commerce Synapse', tier: 'Retail',      href: 'https://commerce-synapse.com', external: true },
  { name: 'Umami',            tier: 'Healthcare',  href: 'https://umami.greyquill.io',   external: true },
];

export const TOOLS: ProductMeta[] = [
  { name: 'ClarityAI', tier: 'Standalone tool', href: '/products/clarity-ai' },
];

/** Used by ProductSiblingChips for the cross-link rail at the bottom of
 *  every product detail page. */
export const PRODUCTS_ORDER: ProductMeta[] = [...PILLARS, VERTICALS[0]];
