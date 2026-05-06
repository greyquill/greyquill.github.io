'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { CALENDLY_URL } from '@/lib/links';

const PRIMARY_NAV = [
  { href: '/industries', label: 'Industries' },
  { href: '/about-us', label: 'About' },
];

type ServiceItem = { href: string; label: string };
type ServiceColumn = { title: string; items: ServiceItem[] };

const SERVICES: ServiceColumn[] = [
  {
    title: 'Training',
    items: [
      { href: '/services#training-exec-brief',     label: 'AI governance executive briefing' },
      { href: '/services#training-data-foundation', label: 'Data foundation workshop' },
      { href: '/services#training-model-risk',     label: 'Model risk masterclass' },
      { href: '/services#training-reg-readiness',  label: 'Regulatory readiness workshop' },
    ],
  },
  {
    title: 'Assessments',
    items: [
      { href: '/services#assess-ai-maturity',    label: 'AI maturity assessment' },
      { href: '/services#assess-model-inventory', label: 'Model inventory & risk classification' },
      { href: '/services#assess-lineage',        label: 'Data lineage diagnostic' },
      { href: '/services#assess-audit',          label: 'Audit-readiness review' },
    ],
  },
  {
    title: 'Consulting',
    items: [
      { href: '/services#consult-program-design',  label: 'AI program design & roadmap' },
      { href: '/services#consult-data-buildout',   label: 'Data foundation buildout' },
      { href: '/services#consult-governance-impl', label: 'Governance framework implementation' },
      { href: '/services#consult-agentic',         label: 'Agentic AI activation' },
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
    sub: 'Retail intelligence',
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
        <Link href="/" aria-label="Greyquill home" className="relative flex flex-col items-start group shrink-0 leading-none">
          <Image
            src="/images/logo/CompanyLogo.png"
            alt="Greyquill"
            width={905}
            height={132}
            priority
            className="h-8 md:h-9 w-auto transition-opacity duration-300 ease-out-expo group-hover:opacity-80"
          />
          {/* Tagline overlaps slightly into the bottom of the logo, pushed
             right so it tucks under the wordmark rather than sitting flush
             with the icon. z-10 keeps it above the image. Hidden on small
             screens. */}
          <span
            aria-hidden
            className="hidden sm:inline-block relative z-10 -mt-2 md:-mt-2.5 pl-[58px] md:pl-[72px] text-[10.5px] md:text-[11px] font-medium leading-tight text-brand-ink/60 whitespace-nowrap"
          >
            The platform for governed AI.
          </span>
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

                <div className="mt-2 pt-2 border-t border-black/[0.06] px-3 pb-1.5 text-[9.5px] font-semibold uppercase tracking-[0.22em] text-brand-ink/45">
                  Built on the platform
                </div>
                <p className="px-3 pb-2 text-[11px] text-brand-ink/55 leading-snug">
                  Demonstrations of what the platform does in production.
                </p>
                {VERTICAL_PRODUCTS.map((p) => (
                  <Link
                    key={p.href}
                    href={p.href}
                    {...(p.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={closeOnClick}
                    className="group/item flex items-baseline justify-between gap-2 px-3 py-1.5 rounded-md hover:bg-brand-mist/40 transition-colors duration-200"
                  >
                    <span className="text-[12.5px] text-brand-ink/80 group-hover/item:text-brand-blue transition-colors">
                      <b>{p.label}</b>
                      <span className="text-brand-ink/45"> · {p.sub}</span>
                    </span>
                    {p.external && (
                      <svg viewBox="0 0 12 12" className="h-2.5 w-2.5 text-brand-ink/40 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
                        <path d="M4 4h4v4M8 4l-5 5" strokeLinecap="round" />
                      </svg>
                    )}
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
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener"
                    onClick={closeOnClick}
                    className="mt-4 inline-flex items-center justify-center gap-1.5 bg-brand-blue text-white text-[12.5px] font-semibold px-4 py-2.5 rounded-full hover:bg-brand-blue-dark transition-colors"
                  >
                    Book a discovery call
                    <span aria-hidden>↗</span>
                  </a>
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

        {/* Desktop: full-text pill. Mobile: compact circular icon button so the
            sticky header stays clean on narrow viewports. Same destination. */}
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          aria-label="Book a discovery call"
          className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-ink px-4 py-2 rounded-full hover:bg-brand-blue transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-md whitespace-nowrap"
        >
          Book a discovery call
          <span aria-hidden>↗</span>
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noopener"
          aria-label="Book a discovery call"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full bg-brand-ink text-white shadow-sm hover:bg-brand-blue transition-colors shrink-0"
        >
          <svg viewBox="0 0 20 20" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <rect x="3" y="4.5" width="14" height="13" rx="2" />
            <path d="M3 8.5h14" />
            <path d="M7 3v3M13 3v3" />
          </svg>
        </a>
      </div>
    </header>
  );
}
