'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { PILLARS, VERTICALS } from '@/lib/products';

/**
 * Sticky strip below the main header on every product page.
 *
 * Always visible: a "Products" back-link, the three platform pillars
 * (ClarityAI · GQData · GQ Agents) as direct pills, then a thin
 * separator and a "Vertical products" dropdown pill. The dropdown
 * lists vertical products (some internal, some external). When the
 * user is on a vertical product page, the dropdown pill shows the
 * active vertical's name and is highlighted in the active style.
 */

export default function ProductSubnav({ currentHref }: { currentHref: string }) {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  // Click outside / ESC closes the dropdown.
  useEffect(() => {
    if (!open) return;
    function onDocClick(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onDocClick);
    document.addEventListener('keydown', onKey);
    return () => {
      document.removeEventListener('mousedown', onDocClick);
      document.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const activeVertical = VERTICALS.find((v) => v.href === currentHref);
  const verticalActive = Boolean(activeVertical);

  return (
    // Outer strip lets the dropdown overflow downwards. Only the
    // scrolling pills container clips horizontally; the verticals
    // dropdown lives outside that scroll context so its panel renders
    // unclipped.
    <div className="sticky top-16 md:top-20 z-30 bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-12 flex items-center gap-2">
        <Link
          href="/"
          aria-label="Back to home"
          className="group/back inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 hover:text-brand-blue hover:bg-brand-mist/60 transition-colors shrink-0 mr-1"
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-200 ease-out-expo group-hover/back:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 4l-4 4 4 4" />
          </svg>
          <span className="underline-offset-[5px] decoration-brand-blue/70 group-hover/back:underline transition-all duration-200">
            Back
          </span>
        </Link>

        {/* Pillar pills — scroll horizontally on small screens */}
        <div className="flex items-center gap-2 overflow-x-auto min-w-0 flex-1">
          {PILLARS.map((p) => {
            const active = p.href === currentHref;
            return (
              <Link
                key={p.href}
                href={p.href}
                aria-current={active ? 'page' : undefined}
                className={
                  active
                    ? 'text-xs font-semibold text-white bg-brand-blue px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm shadow-brand-blue/25 shrink-0'
                    : 'text-xs font-medium text-brand-ink/65 hover:text-brand-blue hover:bg-brand-mist/60 ring-1 ring-transparent hover:ring-brand-blue/20 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ease-out-expo shrink-0'
                }
              >
                {p.name}
              </Link>
            );
          })}
        </div>

        {/* Separator */}
        <span aria-hidden className="h-5 w-px bg-brand-ink/20 mx-1.5 shrink-0" />

        {/* Verticals dropdown pill — outside the scroll container so the
            dropdown panel renders unclipped over the page below. */}
        <div ref={wrapRef} className="relative shrink-0">
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-haspopup="menu"
            aria-expanded={open}
            className={
              verticalActive
                ? 'inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-brand-blue px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm shadow-brand-blue/25'
                : 'inline-flex items-center gap-1.5 text-xs font-medium text-brand-ink/65 hover:text-brand-blue hover:bg-brand-mist/60 ring-1 ring-transparent hover:ring-brand-blue/20 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ease-out-expo'
            }
          >
            <span>{activeVertical ? activeVertical.name : 'Vertical products'}</span>
            <svg
              viewBox="0 0 12 12"
              className={`h-2.5 w-2.5 opacity-70 transition-transform duration-200 ease-out-expo ${open ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden
            >
              <path d="M3 5l3 3 3-3" />
            </svg>
          </button>

          {open && (
            <div
              role="menu"
              className="absolute left-0 top-full mt-2 w-[280px] bg-white rounded-xl ring-1 ring-black/[0.06] shadow-2xl shadow-brand-blue/10 p-2 z-50"
            >
              {VERTICALS.map((v) => {
                const isActive = v.href === currentHref;
                const baseCls =
                  'group/item block px-3 py-2.5 rounded-lg transition-colors duration-150';
                const activeCls = isActive
                  ? `${baseCls} bg-brand-mist/60`
                  : `${baseCls} hover:bg-brand-mist/40`;
                const inner = (
                  <>
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="font-display font-semibold text-[14px] text-brand-ink group-hover/item:text-brand-blue transition-colors">
                        {v.name}
                      </span>
                      <span className="text-[9px] font-semibold uppercase tracking-[0.18em] text-brand-ink/45 shrink-0">
                        {v.tier}
                        {v.external && ' ↗'}
                      </span>
                    </div>
                  </>
                );
                return v.external ? (
                  <a
                    key={v.href}
                    href={v.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={activeCls}
                  >
                    {inner}
                  </a>
                ) : (
                  <Link
                    key={v.href}
                    href={v.href}
                    onClick={() => setOpen(false)}
                    aria-current={isActive ? 'page' : undefined}
                    className={activeCls}
                  >
                    {inner}
                  </Link>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
