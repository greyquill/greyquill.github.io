import Image from 'next/image';
import Link from 'next/link';

const PRIMARY_NAV = [
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/about-us', label: 'About' },
];

const PRODUCTS = [
  {
    href: '/products/clarity-ai',
    label: 'ClarityAI',
    sub: 'Score the clarity and risk of any initiative',
    tier: 'Diagnose',
  },
  {
    href: '/products/gqdata',
    label: 'GQData',
    sub: 'Master data + lineage for AI-ready data',
    tier: 'Govern',
  },
  {
    href: '/products/agents',
    label: 'GQ Agents',
    sub: 'Multi-agent orchestration with audit trails',
    tier: 'Activate',
  },
  {
    href: '/products/gst-copilot',
    label: 'GST Co-Pilot',
    sub: 'Vertical proof: governed agentic AI in production',
    tier: 'Activate',
  },
];

export default function Header() {
  return (
    <header className="border-b border-black/[0.06] sticky top-0 z-40 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" aria-label="Greyquill home" className="flex items-center group shrink-0">
          <Image
            src="/images/logo/CompanyLogo.png"
            alt="Greyquill"
            width={905}
            height={132}
            priority
            className="h-8 md:h-9 w-auto transition-opacity duration-300 ease-out-expo group-hover:opacity-80"
          />
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {/* Products dropdown */}
          <div className="relative group/menu">
            <Link
              href="/products"
              className="relative inline-flex items-center gap-1 text-brand-ink/75 hover:text-brand-ink transition-colors py-1"
            >
              <span>Products</span>
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60 transition-transform duration-200 ease-out-expo group-hover/menu:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M3 5l3 3 3-3" />
              </svg>
              <span aria-hidden className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover/menu:w-full" />
            </Link>

            <div
              className="absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1
                         group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0
                         group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-focus-within/menu:translate-y-0
                         transition-all duration-200 ease-out-expo z-50"
            >
              <div className="w-[360px] bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-3">
                {PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    className="group/item block p-3 rounded-xl hover:bg-brand-mist/40 transition-colors duration-200"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <span className="font-display font-semibold text-[15px] text-brand-ink group-hover/item:text-brand-blue transition-colors">
                        {p.label}
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-blue/70 px-1.5 py-0.5 rounded bg-brand-blue/10">
                        {p.tier}
                      </span>
                    </div>
                    <div className="text-xs text-brand-ink/65 leading-snug">{p.sub}</div>
                  </Link>
                ))}
                <Link
                  href="/products"
                  className="block px-3 py-2.5 mt-1 border-t border-black/[0.06] text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  See all products →
                </Link>
              </div>
            </div>
          </div>

          {PRIMARY_NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group/nav relative text-brand-ink/75 hover:text-brand-ink transition-colors py-1"
            >
              <span>{item.label}</span>
              <span aria-hidden className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover/nav:w-full" />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-ink px-4 py-2 rounded-full hover:bg-brand-blue transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-md"
        >
          Book a call
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
