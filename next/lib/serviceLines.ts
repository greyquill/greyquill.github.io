/**
 * The three service lines. Shared by the header mega-menu, the footer,
 * and the /services hub so navigation and pages never drift apart.
 *
 * `capabilities` feed the hub cards; `navItems` feed the header
 * mega-menu (they can deep-link to anchors on the line's page, or to
 * engagement-roadmap hashes for AI & Data).
 */

export type ServiceLineItem = { label: string; href: string };

export type ServiceLineMeta = {
  slug: string;
  href: string;
  name: string;
  navLabel: string;
  tagline: string;
  summary: string;
  capabilities: string[];
  navItems: ServiceLineItem[];
};

export const SERVICE_LINES: ServiceLineMeta[] = [
  {
    slug: 'product-engineering',
    href: '/services/product-engineering',
    name: 'Product Engineering',
    navLabel: 'Product engineering',
    tagline: 'Software products, built by a team that ships its own.',
    summary:
      'Discovery to design to production. Web, mobile, and backend engineering, AI-native from day one, with the same discipline we apply to our own products.',
    capabilities: [
      'Discovery and scoping',
      'UX and product design',
      'Web, mobile, and backend engineering',
      'AI-native features',
      'QA and reliability',
      'DevOps and ongoing ownership',
    ],
    navItems: [
      { label: 'Discovery and scoping', href: '/services/product-engineering#discovery' },
      { label: 'UX and product design', href: '/services/product-engineering#design' },
      { label: 'Web, mobile, and backend engineering', href: '/services/product-engineering#build' },
      { label: 'AI-native features', href: '/services/product-engineering#ai-native' },
      { label: 'QA, DevOps, and reliability', href: '/services/product-engineering#quality' },
    ],
  },
  {
    slug: 'digital-transformation',
    href: '/services/digital-transformation',
    name: 'Digital Transformation & Modernisation',
    navLabel: 'Digital transformation',
    tagline: 'Modernise the systems your business actually runs on.',
    summary:
      'Legacy applications, manual processes, disconnected data. We modernise them step by step, with an audit trail at every step. No big-bang rewrites.',
    capabilities: [
      'Legacy application modernisation',
      'Process automation',
      'Systems and data integration',
      'Cloud migration and infrastructure',
    ],
    navItems: [
      { label: 'Legacy application modernisation', href: '/services/digital-transformation#modernisation' },
      { label: 'Process automation', href: '/services/digital-transformation#automation' },
      { label: 'Systems and data integration', href: '/services/digital-transformation#integration' },
      { label: 'Cloud migration and infrastructure', href: '/services/digital-transformation#cloud' },
    ],
  },
  {
    slug: 'ai-and-data',
    href: '/services/ai-and-data',
    name: 'AI & Data',
    navLabel: 'AI & data',
    tagline: 'Governed AI, from first briefing to production.',
    summary:
      'Training, assessments, and consulting across the full journey. Twelve engagements in five phases, run by the team that builds the Greyquill platform.',
    capabilities: [
      'Training and executive briefings',
      'Assessments and diagnostics',
      'Data foundation and governance buildout',
      'Agentic AI activation',
    ],
    navItems: [
      { label: 'AI maturity assessment', href: '/services/ai-and-data#assess-ai-maturity' },
      { label: 'AI program design & roadmap', href: '/services/ai-and-data#consult-program-design' },
      { label: 'Data foundation buildout', href: '/services/ai-and-data#consult-data-buildout' },
      { label: 'Agentic AI activation', href: '/services/ai-and-data#consult-agentic' },
      { label: 'All 12 engagements', href: '/services/ai-and-data' },
    ],
  },
];
