import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'Products · The Greyquill platform and the verticals built on it',
  description:
    'Every Greyquill product in one place. The platform pillars GQData, GQ Govern, and GQ Agents, the shell that ties them together in GQ Studio, and the vertical products built on them: GST Co-Pilot, Commerce Synapse, and Umami.',
  alternates: { canonical: 'https://greyquill.io/products' },
};

type ProductCard = {
  name: string;
  tier: string;
  tagline: string;
  body: string;
  href: string;
  cta: string;
  external?: boolean;
  /** Same-origin hard navigation (e.g. into the separate `dc` app) — a
   *  plain anchor so the browser leaves the Next.js app, but no new tab
   *  and no "External" badge since it's not really a different site. */
  hardNav?: boolean;
  live?: boolean;
  previewUrl?: string;
  gradient?: string;
};

type Group = {
  label: string;
  description: string;
  items: ProductCard[];
};

const GROUPS: Group[] = [
  {
    label: 'The platform',
    description:
      'Three products, one journey: Foundation, Govern, Activate. Each stands alone; together they run governed AI end to end. GQ Studio is the single shell that ties them together.',
    items: [
      {
        name: 'GQData',
        tier: 'Foundation',
        tagline: 'The trusted-data layer beneath every AI decision.',
        body: 'Master data unification, quality repaired at source, active lineage, and sensitivity classification.',
        href: '/products/gqdata',
        gradient: 'linear-gradient(135deg, #0B4F88 0%, #083d6a 100%)',
        cta: 'Read more',
      },
      {
        name: 'GQ Govern',
        tier: 'Govern',
        tagline: 'The policy layer that makes AI defensible.',
        body: 'Controls checked against the EU AI Act, GDPR, SOC 2, ISO 27001, and more, each one tied to the policy that actually enforces it. Owns Diagnose: AI-maturity, model inventory, document intelligence.',
        href: '/products/govern',
        gradient: 'linear-gradient(135deg, #0e7490 0%, #0a5063 100%)',
        cta: 'Read more',
      },
      {
        name: 'GQ Agents',
        tier: 'Activate',
        tagline: 'Multi-agent orchestration with audit trails built in.',
        body: 'Replayable execution from an append-only event log, with human-in-the-loop escalation in the protocol.',
        href: '/products/agents',
        gradient: 'linear-gradient(135deg, #1a6bb5 0%, #0B4F88 100%)',
        cta: 'Read more',
      },
      {
        name: 'GQ Studio',
        tier: 'The shell',
        hardNav: true,
        tagline: 'One application shell for the whole platform.',
        body: 'Not sold alone. The workspaces, screens, and low-code customization layer that tie GQ Data, GQ Govern, and GQ Agents into one product experience.',
        href: '/dc/studio',
        gradient: 'linear-gradient(135deg, #4338ca 0%, #2c2483 100%)',
        cta: 'See GQ Studio',
      },
    ],
  },
  {
    label: 'Vertical products',
    description:
      'Industry-specific products built on the Greyquill platform. Each one is a reference architecture for governed agentic AI in production, in a real domain.',
    items: [
      {
        name: 'GST Co-Pilot',
        tier: 'Indian tax',
        tagline: 'Forty hours of GST a month, compressed to an afternoon.',
        body: 'A four-agent system for invoice ingestion, extraction, GSTR-2B reconciliation, and exception resolution.',
        href: '/products/gst-copilot',
        gradient: 'linear-gradient(135deg, #1a6bb5 0%, #0a1628 100%)',
        cta: 'Read more',
      },
      {
        name: 'Commerce Synapse',
        tier: 'Retail · commerce',
        external: true,
        tagline: 'AI-orchestrated commerce on a trusted product and customer foundation.',
        body: 'Operations, pricing, and merchandising decisions running on unified product and customer data.',
        href: 'https://commerce-synapse.com',
        previewUrl: 'https://commerce-synapse.com',
        cta: 'Visit site',
      },
      {
        name: 'Umami',
        tier: 'Healthcare',
        external: true,
        tagline: 'AI-powered practice management built for clinical workflows.',
        body: 'Practice management for medical clinics, with audit trails and clinical-workflow controls baked in.',
        href: 'https://umami.greyquill.io',
        previewUrl: 'https://umami.greyquill.io',
        cta: 'Visit site',
      },
    ],
  },
  {
    label: 'Standalone tools',
    description:
      'Tools that work independently of the platform, useful on their own, without deploying GQ Data or GQ Govern.',
    items: [
      {
        name: 'ClarityAI',
        tier: 'Requirements scoring',
        live: true,
        tagline: 'Score the clarity and risk of any initiative, before you fund it.',
        body: 'Ingests PRDs, AI briefs, and SOWs. Scores ambiguity, testability, and regulatory exposure, with line-by-line fixes.',
        href: '/products/clarity-ai',
        previewUrl: 'https://clarity.greyquill.io',
        cta: 'Read more',
      },
    ],
  },
];

function previewSrc(url: string) {
  const params = new URLSearchParams({
    url,
    screenshot: 'true',
    meta: 'false',
    embed: 'screenshot.url',
    'viewport.width': '1280',
    'viewport.height': '720',
    type: 'jpeg',
  });
  return `https://api.microlink.io/?${params.toString()}`;
}

function CardPreview({ item }: { item: ProductCard }) {
  if (item.previewUrl) {
    return (
      <div className="aspect-[16/9] bg-brand-mist/30 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={previewSrc(item.previewUrl)}
          alt={`${item.name} homepage preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
        />
      </div>
    );
  }
  return (
    <div
      className="aspect-[16/9] flex items-center justify-center relative overflow-hidden"
      style={{ background: item.gradient ?? 'linear-gradient(135deg, #0B4F88 0%, #1a6bb5 100%)' }}
      aria-hidden
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1.5px)',
          backgroundSize: '24px 24px',
        }}
      />
      <span className="relative font-display font-semibold text-white text-3xl md:text-4xl tracking-tight">
        {item.name}
      </span>
    </div>
  );
}

function Card({ item }: { item: ProductCard }) {
  const inner = (
    <>
      <CardPreview item={item} />
      <div className="p-6 md:p-7 flex flex-col flex-1">
        <div className="flex items-center gap-2 mb-4 flex-wrap">
          <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10">
            {item.tier}
          </span>
          {item.live && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-1 rounded bg-emerald-500/10 inline-flex items-center gap-1.5">
              <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Live
            </span>
          )}
          {item.external && (
            <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 px-2 py-1 rounded bg-black/[0.04]">
              External
            </span>
          )}
        </div>
        <h3 className="font-display text-xl md:text-[22px] text-brand-ink mb-2 leading-tight">
          {item.name}
        </h3>
        <p className="text-brand-ink font-semibold text-[15px] md:text-base leading-snug mb-2.5">
          {item.tagline}
        </p>
        <p className="text-brand-ink/70 leading-relaxed text-[14px] flex-1">{item.body}</p>
        <span className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
          {item.cta}
          <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
            {item.external ? '↗' : '→'}
          </span>
        </span>
      </div>
    </>
  );
  const cls =
    'group relative flex flex-col bg-white rounded-2xl ring-1 ring-black/[0.05] overflow-hidden hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo';

  if (item.external) {
    return (
      <a key={item.name} href={item.href} target="_blank" rel="noopener" className={cls}>
        {inner}
      </a>
    );
  }
  if (item.hardNav) {
    return (
      <a key={item.name} href={item.href} className={cls}>
        {inner}
      </a>
    );
  }
  return (
    <Link key={item.name} href={item.href} className={cls}>
      {inner}
    </Link>
  );
}

export default function ProductsPage() {
  return (
    <>
      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
          }}
        />

        <div className="relative">
          <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Products" />
        </div>

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-10 md:pt-14 pb-12 md:pb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Products
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            One platform.<br />
            <span className="text-brand-blue">Products at every layer.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Three platform products, foundation to governed activation, tied together
            by GQ Studio, and the vertical products built on them: tax reconciliation,
            retail commerce, healthcare practice management. Each vertical is a
            reference architecture you can adapt to your own domain.{' '}
            <Link href="/platform" className="text-brand-blue font-semibold hover:text-brand-blue-dark">
              See how the platform fits together →
            </Link>
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 space-y-16 md:space-y-20">
          {GROUPS.map((group) => (
            <div key={group.label}>
              <div className="mb-7 md:mb-9 flex items-baseline justify-between flex-wrap gap-3">
                <div className="max-w-2xl">
                  <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-2">
                    {group.label}
                  </div>
                  <p className="text-brand-ink/70 text-sm md:text-base leading-relaxed">
                    {group.description}
                  </p>
                </div>
                <span className="text-xs text-brand-ink/45 shrink-0">
                  {group.items.length} {group.items.length === 1 ? 'product' : 'products'}
                </span>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
                {group.items.map((item) => (
                  <Card key={item.name} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
