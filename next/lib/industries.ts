/**
 * Industries we serve. Lead three: BFSI (incl. payments), Telecom, Retail.
 * Each industry page is rendered from the same Industry shape so structure
 * stays consistent and the content is the only thing that varies.
 */

export type IndustryRegulator = {
  abbr: string;
  full: string;
};

export type IndustrySolution = {
  title: string;
  body: string;
};

export type IndustryCrossLink = {
  name: string;
  blurb: string;
  href: string;
};

export type Industry = {
  slug: 'bfsi' | 'telecom' | 'retail';
  /** Short label for breadcrumbs and nav. */
  shortLabel: string;
  /** Display word(s) that fill the hero slab. Kept short so the type can
   *  scale very large without wrapping awkwardly. */
  displayWord: string;
  /** One-line stake that sits under the display word in the hero. */
  stake: string;
  /** Hero gradient. Kept inline so each vertical reads distinctly without
   *  adding tokens to tailwind.config. Dark, tonal, low-saturation. */
  heroGradient: string;
  /** Accent color used for chip outlines, eyebrow rules, dot decoration. */
  accent: string;
  /** Page metadata. */
  metaTitle: string;
  metaDescription: string;
  /** Buyers — who actually picks up the phone. */
  buyers: string[];
  /** Regulators / frameworks that shape decisions in this vertical. */
  regulators: IndustryRegulator[];
  /** What we have learned from real engagements. Punchy, opinionated. */
  learnings: string[];
  /** Anonymized engagements. Situation → what we built, in one paragraph. */
  solutions: IndustrySolution[];
  /** Relevant platform pillars / vertical products. */
  crossLinks: IndustryCrossLink[];
};

export const INDUSTRIES: Industry[] = [
  {
    slug: 'bfsi',
    shortLabel: 'BFSI & Payments',
    displayWord: 'Banking, financial services, and payments.',
    stake:
      'AI in BFSI lives or dies on auditability. We build the data foundations and governed automations that let risk, compliance, and product ship at the same speed.',
    heroGradient: 'linear-gradient(135deg, #0a1628 0%, #0B4F88 55%, #103a6b 100%)',
    accent: '#7cc4ff',
    metaTitle: 'Banking, financial services, and payments · Greyquill',
    metaDescription:
      'Governed AI and high-volume processing for BFSI and payments. Reconciliation, risk scoring, and audit-ready automations on a trusted data foundation.',
    buyers: [
      'Heads of AI, Data, and Analytics',
      'Chief Risk Officers and Heads of Compliance',
      'Payments product leaders and Heads of Reconciliation',
      'CIOs and platform engineering leaders',
    ],
    regulators: [
      { abbr: 'RBI', full: 'Reserve Bank of India' },
      { abbr: 'SEBI', full: 'Securities and Exchange Board of India' },
      { abbr: 'DPDP', full: 'Digital Personal Data Protection Act (India)' },
      { abbr: 'FCA', full: 'Financial Conduct Authority (UK)' },
      { abbr: 'PRA', full: 'Prudential Regulation Authority (UK)' },
      { abbr: 'FFIEC', full: 'Federal Financial Institutions Examination Council (US)' },
      { abbr: 'OCC', full: 'Office of the Comptroller of the Currency (US)' },
      { abbr: 'EU AI Act', full: 'European Union Artificial Intelligence Act' },
      { abbr: 'PCI-DSS', full: 'Payment Card Industry Data Security Standard' },
      { abbr: 'SOC 2', full: 'System and Organization Controls 2' },
      { abbr: 'ISO 27001', full: 'ISO/IEC 27001 Information Security' },
      { abbr: 'Basel III', full: 'Basel III operational risk framework' },
    ],
    learnings: [
      'Reconciliation is where governance gets tested. The hard cases hide in the small percentage of transactions that fail to match, and any AI assist has to explain itself line by line or risk teams will never sign off.',
      'Legacy core systems leak context at every integration boundary. Before any model can be trusted, the data crossing those boundaries needs lineage and a single, durable definition.',
      '"Faster approvals" is the wrong KPI for governed AI in BFSI. Audit completeness and time-to-evidence matter more, because that is what regulators actually ask for under examination.',
      'In payments, throughput and provenance are equally non-negotiable. Designs that win on one and lose on the other do not ship past production review.',
    ],
    solutions: [
      {
        title: 'High-volume payment processing platform',
        body: 'Built a multi-rail payment processing layer for a payments client handling tens of thousands of transactions per minute. API gateway in front, pluggable rails behind, idempotent retries, and an end-to-end audit envelope that follows each transaction from intake to settlement. Operations got a single source of truth across rails; manual reconciliation effort dropped sharply.',
      },
      {
        title: 'Reconciliation drift detection on a multi-rail ledger',
        body: 'A payment gateway client was bleeding analyst time chasing mismatched ledgers across rails. We built a reconciliation engine with rule-based first-pass matching, ML-assisted second-pass for fuzzy matches, and a human review queue with full lineage on every decision. Drift was caught within minutes instead of days.',
      },
      {
        title: 'AI risk and readiness scoring for a financial services AI program',
        body: 'Stood up the data foundations and policy controls so the team could run governed pilots without going around procurement or legal each time. ClarityAI scored each proposed initiative for clarity and risk before funding, so portfolio review became an evidence conversation instead of a turf fight.',
      },
    ],
    crossLinks: [
      { name: 'GQData', blurb: 'Trusted-data foundation with lineage and policy controls.', href: '/products/gqdata' },
      { name: 'GQ Agents', blurb: 'Multi-agent orchestration with audit-grade work-packet provenance.', href: '/products/agents' },
      { name: 'ClarityAI', blurb: 'Score the clarity and risk of any AI initiative before you fund it.', href: '/products/clarity-ai' },
    ],
  },
  {
    slug: 'telecom',
    shortLabel: 'Telecom',
    displayWord: 'Telecom.',
    stake:
      'Telecom estates carry decades of legacy, billions of records, and customer data spread across a dozen systems. We help operators modernize what runs the business and add AI where it actually pays.',
    heroGradient: 'linear-gradient(135deg, #1a1140 0%, #2b2466 50%, #1f3a78 100%)',
    accent: '#a8a4ff',
    metaTitle: 'Telecom · Greyquill',
    metaDescription:
      'Legacy modernization, trusted customer data, and governed agentic automations for Tier-1 telecom operators. Ship quarterly wins instead of multi-year cutovers.',
    buyers: [
      'Heads of AI, Customer Data, and Analytics',
      'VPs of OSS/BSS and billing platform owners',
      'Customer experience and contact center leaders',
      'CIOs and modernization leads',
    ],
    regulators: [
      { abbr: 'TRAI', full: 'Telecom Regulatory Authority of India' },
      { abbr: 'DoT', full: 'Department of Telecommunications (India)' },
      { abbr: 'Ofcom', full: 'Office of Communications (UK)' },
      { abbr: 'FCC', full: 'Federal Communications Commission (US)' },
      { abbr: 'ACMA', full: 'Australian Communications and Media Authority' },
      { abbr: 'GDPR', full: 'General Data Protection Regulation (EU)' },
      { abbr: 'DPDP', full: 'Digital Personal Data Protection Act (India)' },
      { abbr: 'ETSI', full: 'European Telecommunications Standards Institute' },
      { abbr: 'NIST CSF', full: 'NIST Cybersecurity Framework' },
      { abbr: 'ISO 27001', full: 'ISO/IEC 27001 Information Security' },
    ],
    learnings: [
      'The hardest part of telecom AI is rarely the model. It is reconciling customer identity across CRM, billing, OSS, and a long tail of regional systems before any model is allowed to act.',
      'Modernizing one module at a time beats a re-platform program. Operators that ship quarterly wins keep their budget; operators that promise a three-year cutover lose it.',
      'Contact center automations stall when agents do not trust the AI. Early investment in agent-facing transparency (why the model said this) pays back faster than any accuracy gain.',
      'Network and customer data live in different organizations with different politics. Governance has to be designed for that org chart, not against it.',
    ],
    solutions: [
      {
        title: 'Legacy modernization with new modules and AI integrations',
        body: 'A telecom client needed to retire pieces of an aging platform without freezing the rest of the business. We built new modules in parallel, integrated them with existing OSS/BSS, layered automations on the workflows that hurt most, and added AI assist where it had measurable lift (agent assist, churn signal, anomaly detection on usage). Each module shipped with its own audit trail, so risk and compliance could approve incrementally.',
      },
      {
        title: 'Trusted customer data layer for a Tier-1 operator',
        body: 'Built a master-data layer that unified customer identity across CRM, billing, and OSS feeds, with lineage and policy controls baked in. Downstream AI use cases (churn prediction, next-best-action, fraud signals) inherited the same data foundation, so every model spoke the same definition of "customer".',
      },
      {
        title: 'Agentic automations for back-office workflows',
        body: 'Replaced a stack of brittle RPA scripts with multi-agent orchestrations that handled exceptions, asked humans when uncertain, and left a clean audit log. The work-packet pattern from GQ Agents kept every automated decision traceable, end to end.',
      },
    ],
    crossLinks: [
      { name: 'GQData', blurb: 'Master-data layer with lineage across CRM, billing, and OSS.', href: '/products/gqdata' },
      { name: 'GQ Agents', blurb: 'Governed multi-agent automations with full audit trails.', href: '/products/agents' },
      { name: 'ClarityAI', blurb: 'Score AI initiatives for clarity and risk before you fund them.', href: '/products/clarity-ai' },
    ],
  },
  {
    slug: 'retail',
    shortLabel: 'Retail & Commerce',
    displayWord: 'Retail and commerce.',
    stake:
      'Retail decisions happen daily and add up over millions of SKUs and customers. We sharpen the data and the processes underneath those decisions so AI shows up as judgment, not noise.',
    heroGradient: 'linear-gradient(135deg, #2a1810 0%, #5c3a1f 55%, #8a5b2c 100%)',
    accent: '#ffc98a',
    metaTitle: 'Retail and commerce · Greyquill',
    metaDescription:
      'Process optimization, governed data foundations, and decision surfaces for national retailers. Cut dashboard sprawl and bolt AI onto workflows that actually compound.',
    buyers: [
      'Heads of Data, Analytics, and Merchandising',
      'Supply chain and operations leaders',
      'Marketing leaders running personalization and CRM',
      'CIOs and digital transformation leads',
    ],
    regulators: [
      { abbr: 'DPDP', full: 'Digital Personal Data Protection Act (India)' },
      { abbr: 'GDPR', full: 'General Data Protection Regulation (EU)' },
      { abbr: 'CCPA', full: 'California Consumer Privacy Act' },
      { abbr: 'PCI-DSS', full: 'Payment Card Industry Data Security Standard' },
      { abbr: 'Consumer Protection', full: 'Consumer protection law (multi-jurisdiction)' },
      { abbr: 'Product Safety', full: 'Product safety and recall regulations' },
      { abbr: 'ESG', full: 'ESG and sustainability reporting frameworks' },
      { abbr: 'SOC 2', full: 'System and Organization Controls 2' },
    ],
    learnings: [
      'Retail teams drown in dashboards. The pain is not "no data", it is too many slightly different versions of the same metric across teams. Consolidation beats new analytics every time.',
      'Personalization models are easy to build and hard to keep fresh. The bottleneck is the data refresh cadence, not the algorithm.',
      'Demand and supply teams optimize against each other when the underlying data does not match. A shared data definition is the cheapest forecasting improvement available.',
      'Process re-engineering is where retail AI actually compounds. Models that bolt onto a broken process inherit the brokenness.',
    ],
    solutions: [
      {
        title: 'Process optimization for a national retailer',
        body: 'A retail client had grown by acquisition and inherited five overlapping ways of doing the same operational tasks: replenishment, returns, store ops, vendor onboarding, promotions. We mapped the actual workflows, simplified the ones that had drifted, and deployed governed automations on top. Cycle times dropped on the workflows we touched, and the team kept the playbook for the rest.',
      },
      {
        title: 'From dashboard sprawl to a single decision surface',
        body: 'Consolidated dozens of conflicting dashboards into a single decision surface backed by a governed data layer. Merch, marketing, and supply chain stopped disagreeing about definitions and started disagreeing about strategy, which is the disagreement that actually moves the business.',
      },
      {
        title: 'Demand and inventory signal fusion',
        body: 'Built a data foundation that combined point-of-sale, e-commerce, and supplier signals with lineage, then layered ML-assisted demand forecasting on top. The forecasting team could explain every adjustment to the planning team, which is what made the rollout stick.',
      },
    ],
    crossLinks: [
      { name: 'Commerce Synapse', blurb: 'AI-orchestrated commerce on unified product and customer data.', href: 'https://commerce-synapse.com' },
      { name: 'GQData', blurb: 'Trusted-data foundation across POS, e-commerce, and supplier feeds.', href: '/products/gqdata' },
      { name: 'GQ Agents', blurb: 'Governed automations on top of optimized workflows.', href: '/products/agents' },
    ],
  },
];

export function getIndustry(slug: Industry['slug']): Industry {
  const found = INDUSTRIES.find((i) => i.slug === slug);
  if (!found) throw new Error(`Unknown industry slug: ${slug}`);
  return found;
}
