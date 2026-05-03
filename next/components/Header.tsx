'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

const PRIMARY_NAV = [
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/about-us', label: 'About' },
];

type ServiceItem = { href: string; label: string };
type ServiceColumn = { title: string; items: ServiceItem[] };

const SERVICES: ServiceColumn[] = [
  {
    title: 'Training',
    items: [
      { href: '/services#training', label: 'AI governance executive briefing' },
      { href: '/services#training', label: 'Data foundation workshop' },
      { href: '/services#training', label: 'Model risk masterclass' },
      { href: '/services#training', label: 'Regulatory readiness workshop' },
    ],
  },
  {
    title: 'Assessments',
    items: [
      { href: '/services#assessments', label: 'AI maturity assessment' },
      { href: '/services#assessments', label: 'Model inventory & risk classification' },
      { href: '/services#assessments', label: 'Data lineage diagnostic' },
      { href: '/services#assessments', label: 'Audit-readiness review' },
    ],
  },
  {
    title: 'Consulting',
    items: [
      { href: '/services#consulting', label: 'AI program design & roadmap' },
      { href: '/services#consulting', label: 'Data foundation buildout' },
      { href: '/services#consulting', label: 'Governance framework implementation' },
      { href: '/services#consulting', label: 'Agentic AI activation' },
    ],
  },
];

const PILLARS = [
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
];

const VERTICAL_PRODUCTS = [
  {
    href: '/products/gst-copilot',
    label: 'GST Co-Pilot',
    sub: 'Agentic AI for Indian tax reconciliation',
    external: false,
  },
  {
    href: 'https://commerce-synapse.com',
    label: 'Commerce Synapse',
    sub: 'Retail intelligence and orchestration',
    external: true,
  },
  {
    href: 'https://umami.greyquill.io',
    label: 'Umami',
    sub: 'Conversational analytics for operators',
    external: true,
  },
];

export default function Header() {
  const pathname = usePathname();
  // After a navigation the cursor is still hovering the dropdown, which
  // keeps :hover open. Force-hide the panel for ~350ms when the route
  // changes so the user has to move their cursor to re-trigger it.
  // We also fire `closeOnClick` from any link in the dropdown so the
  // panel dismisses even when the click is to a hash on the current
  // page (which usePathname does not register as a change).
  const [suppressMenu, setSuppressMenu] = useState(false);
  useEffect(() => {
    setSuppressMenu(true);
    const t = setTimeout(() => setSuppressMenu(false), 350);
    return () => clearTimeout(t);
  }, [pathname]);
  function closeOnClick() {
    setSuppressMenu(true);
    setTimeout(() => setSuppressMenu(false), 350);
  }

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
          {/* Platform dropdown — three platform pillars on top, the
             products built on top of them below. */}
          <div className="relative group/menu">
            <Link
              href="/platform"
              className="relative inline-flex items-center gap-1 text-brand-ink/75 hover:text-brand-ink transition-colors py-1"
            >
              <span>Platform</span>
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60 transition-transform duration-200 ease-out-expo group-hover/menu:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M3 5l3 3 3-3" />
              </svg>
              <span aria-hidden className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover/menu:w-full" />
            </Link>

            <div
              className={`absolute left-0 top-full pt-3 invisible opacity-0 translate-y-1
                         group-hover/menu:visible group-hover/menu:opacity-100 group-hover/menu:translate-y-0
                         group-focus-within/menu:visible group-focus-within/menu:opacity-100 group-focus-within/menu:translate-y-0
                         transition-all duration-200 ease-out-expo z-50
                         ${suppressMenu ? '!invisible !opacity-0 !pointer-events-none' : ''}`}
            >
              <div className="w-[380px] bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-3">
                <div className="px-3 pt-1 pb-2 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-brand-ink/45">
                  Three platform pillars
                </div>
                {PILLARS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    onClick={closeOnClick}
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

                <div className="mt-2 pt-2 border-t border-black/[0.06] px-3 pb-2 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-brand-ink/45">
                  Products built on the platform
                </div>
                {VERTICAL_PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={closeOnClick}
                    className="group/item block p-3 rounded-xl hover:bg-brand-mist/40 transition-colors duration-200"
                  >
                    <div className="flex items-baseline justify-between gap-2 mb-0.5">
                      <span className="font-display font-semibold text-[15px] text-brand-ink group-hover/item:text-brand-blue transition-colors">
                        {p.label}
                      </span>
                      {p.external && (
                        <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-brand-ink/40" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                          <path d="M4 4h4v4M8 4l-5 5" strokeLinecap="round" />
                        </svg>
                      )}
                    </div>
                    <div className="text-xs text-brand-ink/65 leading-snug">{p.sub}</div>
                  </Link>
                ))}

                <Link
                  href="/platform"
                  onClick={closeOnClick}
                  className="block px-3 py-2.5 mt-1 border-t border-black/[0.06] text-xs font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
                >
                  Explore the full platform →
                </Link>
              </div>
            </div>
          </div>

          {/* Services dropdown — three-column wide menu plus a featured panel */}
          <div className="relative group/svc">
            <Link
              href="/services"
              className="relative inline-flex items-center gap-1 text-brand-ink/75 hover:text-brand-ink transition-colors py-1"
            >
              <span>Services</span>
              <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 opacity-60 transition-transform duration-200 ease-out-expo group-hover/svc:rotate-180" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden>
                <path d="M3 5l3 3 3-3" />
              </svg>
              <span aria-hidden className="absolute left-0 -bottom-0.5 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover/svc:w-full" />
            </Link>

            <div
              className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 invisible opacity-0 translate-y-1
                         group-hover/svc:visible group-hover/svc:opacity-100 group-hover/svc:translate-y-0
                         group-focus-within/svc:visible group-focus-within/svc:opacity-100 group-focus-within/svc:translate-y-0
                         transition-all duration-200 ease-out-expo z-50
                         ${suppressMenu ? '!invisible !opacity-0 !pointer-events-none' : ''}`}
            >
              <div className="w-[920px] bg-white rounded-2xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-6 grid grid-cols-[1fr_1fr_1fr_auto] gap-x-8 gap-y-2">
                {SERVICES.map((col) => (
                  <div key={col.title}>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/45 mb-3">
                      {col.title}
                    </div>
                    <ul className="space-y-2.5">
                      {col.items.map((it) => (
                        <li key={it.label}>
                          <Link
                            href={it.href}
                            onClick={closeOnClick}
                            className="block text-[13.5px] text-brand-ink/85 hover:text-brand-blue transition-colors leading-snug"
                          >
                            {it.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                {/* Featured panel */}
                <div className="w-[230px] rounded-xl ring-1 ring-brand-blue/30 bg-gradient-to-b from-white to-brand-mist/40 p-5 flex flex-col">
                  <div className="font-display font-semibold text-[17px] text-brand-ink leading-snug mb-2">
                    Senior-led, partnership-backed.
                  </div>
                  <p className="text-[12.5px] text-brand-ink/65 leading-relaxed flex-1">
                    A tailored governance plan for your stack in two weeks. No subcontractors.
                  </p>
                  <Link
                    href="/contact"
                    onClick={closeOnClick}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 bg-brand-blue text-white text-[12.5px] font-semibold px-4 py-2.5 rounded-full hover:bg-brand-blue-dark transition-colors"
                  >
                    Talk to us
                    <span aria-hidden>→</span>
                  </Link>
                </div>
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
