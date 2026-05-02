import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'Products · The Greyquill platform',
  description:
    'Four products across the AI journey: ClarityAI scores readiness, GQData makes the foundation trustworthy, GQ Agents runs governed workflows, GST Co-Pilot proves the stack in production.',
  alternates: { canonical: 'https://greyquill.io/products' },
};

type Product = {
  name: string;
  href: string;
  tier: string;
  tagline: string;
  body: string;
  live?: boolean;
  cta: string;
  /** External live site, used to fetch a screenshot preview */
  previewUrl?: string;
  /** Fallback gradient for products without a standalone site */
  gradient?: string;
};

const PRODUCTS: Product[] = [
  {
    name: 'ClarityAI',
    href: '/products/clarity-ai',
    tier: 'Diagnose',
    tagline: 'Score the clarity and risk of any initiative, before you fund it.',
    body: 'Drop in a PRD, AI brief, or RFP. Get a clarity score, line-by-line fixes, and a one-page summary in minutes.',
    live: true,
    cta: 'Try it free',
    previewUrl: 'https://clarity.greyquill.io',
  },
  {
    name: 'GQData',
    href: '/products/gqdata',
    tier: 'Govern',
    tagline: 'The trusted-data layer beneath every AI decision.',
    body: 'Master data unification, real-time quality, queryable lineage, sensitive-data classification. The foundation under everything else.',
    cta: 'Explore',
    gradient: 'linear-gradient(135deg, #0B4F88 0%, #1a6bb5 100%)',
  },
  {
    name: 'GQ Agents',
    href: '/products/agents',
    tier: 'Activate',
    tagline: 'Multi-agent orchestration with audit trails built in.',
    body: 'Work-packet provenance, human-in-the-loop checkpoints, replayable execution. Designed for regulated workloads.',
    cta: 'Explore',
    gradient: 'linear-gradient(135deg, #083d6a 0%, #0B4F88 100%)',
  },
  {
    name: 'GST Co-Pilot',
    href: '/products/gst-copilot',
    tier: 'Activate',
    tagline: 'A vertical proof point. Agentic AI for Indian tax reconciliation.',
    body: 'A four-agent system that turns 40+ hours/month of manual GST work into hours. The reference architecture for governed agentic AI in production.',
    cta: 'Explore',
    gradient: 'linear-gradient(135deg, #1a6bb5 0%, #0a1628 100%)',
  },
];

/**
 * Product card preview image. For products with a live external site
 * (`previewUrl`), uses the Microlink screenshot CDN so the card always
 * shows the current homepage. For internal products, falls back to a
 * branded gradient with the product name. Once we have hosted
 * screenshots in /public/images/products/, swap the previewUrl path.
 */
function CardPreview({ product }: { product: Product }) {
  if (product.previewUrl) {
    const params = new URLSearchParams({
      url: product.previewUrl,
      screenshot: 'true',
      meta: 'false',
      embed: 'screenshot.url',
      'viewport.width': '1280',
      'viewport.height': '720',
      type: 'jpeg',
    });
    const src = `https://api.microlink.io/?${params.toString()}`;
    return (
      <div className="aspect-[16/9] bg-brand-mist/30 overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt={`${product.name} homepage preview`}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.02] transition-transform duration-500 ease-out-expo"
        />
      </div>
    );
  }
  return (
    <div
      className="aspect-[16/9] flex items-center justify-center relative overflow-hidden"
      style={{ background: product.gradient }}
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
        {product.name}
      </span>
    </div>
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
            The platform
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Four products,<br />
            <span className="text-brand-blue">one continuous AI pipeline.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Designed to compose. ClarityAI scores readiness. GQData makes the foundation
            trustworthy. GQ Agents runs governed workflows. GST Co-Pilot{' '}
            <a href="#verticals" className="text-brand-blue underline decoration-brand-blue/30 underline-offset-4 hover:decoration-brand-blue transition-colors">
              and more
            </a>{' '}
            prove the whole stack works in production.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-5 md:gap-6">
          {PRODUCTS.map((p) => (
            <Link
              key={p.name}
              href={p.href}
              className="group relative block bg-white rounded-2xl ring-1 ring-black/[0.05] overflow-hidden hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo"
            >
              <CardPreview product={p} />
              <div className="p-7 md:p-8">
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 px-2 py-1 rounded bg-brand-blue/10">
                    {p.tier}
                  </span>
                  {p.live && (
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-700 px-2 py-1 rounded bg-emerald-500/10 inline-flex items-center gap-1.5">
                      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Live
                    </span>
                  )}
                </div>
                <h2 className="font-display text-2xl md:text-[28px] text-brand-ink mb-2">{p.name}</h2>
                <p className="text-brand-ink font-semibold text-base md:text-lg leading-snug mb-3">{p.tagline}</p>
                <p className="text-brand-ink/70 leading-relaxed">{p.body}</p>
                <span className="mt-6 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  {p.cta}
                  <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Vertical accelerators */}
      <section id="verticals" className="bg-brand-mist/30 py-20 md:py-24 scroll-mt-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-4">
              <span className="h-px w-6 bg-brand-blue/50" aria-hidden />
              Vertical accelerators
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.08] tracking-tight text-brand-ink">
              Governed AI, <span className="text-brand-blue">applied to a domain.</span>
            </h2>
            <p className="mt-5 text-lg md:text-xl leading-relaxed text-brand-ink/70 max-w-2xl">
              The platform proves itself in production through vertical accelerators we
              already ship. Each one is a reference architecture for governed agentic AI
              in a specific industry.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {(
              [
                {
                  name: 'GST Co-Pilot',
                  domain: 'Indian tax · SMB and mid-market',
                  body: 'Four-agent system that turns 40+ hours/month of GST reconciliation into hours.',
                  href: '/products/gst-copilot',
                  external: false,
                  cta: 'Read more',
                  gradient: 'linear-gradient(135deg, #1a6bb5 0%, #0a1628 100%)',
                },
                {
                  name: 'Commerce Synapse',
                  domain: 'Retail and commerce',
                  body: 'AI-orchestrated commerce operations on a trusted product and customer foundation.',
                  href: 'https://commerce-synapse.com',
                  external: true,
                  cta: 'Visit site',
                  previewUrl: 'https://commerce-synapse.com',
                },
                {
                  name: 'Umami',
                  domain: 'Healthcare · medical practices',
                  body: 'AI-powered practice management built for clinical workflows and audit trails.',
                  href: 'https://umami.greyquill.io',
                  external: true,
                  cta: 'Visit site',
                  previewUrl: 'https://umami.greyquill.io',
                },
              ] as Array<{
                name: string;
                domain: string;
                body: string;
                href: string;
                external: boolean;
                cta: string;
                previewUrl?: string;
                gradient?: string;
              }>
            ).map((v) => {
              const previewProduct: Product = {
                name: v.name,
                href: v.href,
                tier: '',
                tagline: '',
                body: '',
                cta: v.cta,
                previewUrl: v.previewUrl,
                gradient: v.gradient,
              };
              const inner = (
                <>
                  <CardPreview product={previewProduct} />
                  <div className="p-7 md:p-8">
                    <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-brand-blue/80 mb-3">
                      {v.domain}
                    </div>
                    <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink mb-2">
                      {v.name}
                    </h3>
                    <p className="text-brand-ink/70 leading-relaxed text-[15px]">{v.body}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                      {v.cta}
                      <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">
                        {v.external ? '↗' : '→'}
                      </span>
                    </span>
                  </div>
                </>
              );
              const cls =
                'group relative block bg-white rounded-2xl ring-1 ring-black/[0.05] overflow-hidden hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo';
              return v.external ? (
                <a key={v.name} href={v.href} target="_blank" rel="noopener" className={cls}>
                  {inner}
                </a>
              ) : (
                <Link key={v.name} href={v.href} className={cls}>
                  {inner}
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
