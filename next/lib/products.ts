/**
 * Canonical product order across the platform. The order matches the
 * three-step journey on the homepage: Diagnose -> Govern -> Activate ->
 * vertical proof. Cross-link chips on every product page use this order
 * to decide which arrow direction to render (← for earlier, → for later).
 */

export type ProductMeta = {
  name: string;
  tier: string;
  href: string;
};

export const PRODUCTS_ORDER: ProductMeta[] = [
  { name: 'ClarityAI',    tier: 'Diagnose', href: '/products/clarity-ai' },
  { name: 'GQData',       tier: 'Govern',   href: '/products/gqdata' },
  { name: 'GQ Agents',    tier: 'Activate', href: '/products/agents' },
  { name: 'GST Co-Pilot', tier: 'Activate', href: '/products/gst-copilot' },
];
