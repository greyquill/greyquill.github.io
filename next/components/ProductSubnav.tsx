import Link from 'next/link';
import { PRODUCTS_ORDER } from '@/lib/products';

/**
 * Sticky strip mounted below the main header on every product page.
 * Always-visible "you are inside the products section" cue, plus a
 * one-click jump between products.
 *
 * Top offsets match the main header heights (h-16 mobile, h-20 md+)
 * so the strip nests right under it.
 */

export default function ProductSubnav({ currentHref }: { currentHref: string }) {
  return (
    <div className="sticky top-16 md:top-20 z-30 bg-white/85 backdrop-blur-md border-b border-black/[0.06]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-12 flex items-center gap-2 overflow-x-auto">
        <Link
          href="/products"
          aria-label="Back to all products"
          className="group/back inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-ink/55 hover:text-brand-blue hover:bg-brand-mist/60 transition-colors shrink-0 mr-1"
        >
          <svg viewBox="0 0 16 16" className="h-3 w-3 transition-transform duration-200 ease-out-expo group-hover/back:-translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
            <path d="M11 4l-4 4 4 4" />
          </svg>
          <span className="underline-offset-[5px] decoration-brand-blue/70 group-hover/back:underline transition-all duration-200">
            Products
          </span>
        </Link>
        {PRODUCTS_ORDER.map((p) => {
          const active = p.href === currentHref;
          return (
            <Link
              key={p.href}
              href={p.href}
              aria-current={active ? 'page' : undefined}
              className={
                active
                  ? 'text-xs font-semibold text-white bg-brand-blue px-3.5 py-1.5 rounded-full whitespace-nowrap shadow-sm shadow-brand-blue/25'
                  : 'text-xs font-medium text-brand-ink/65 hover:text-brand-blue hover:bg-brand-mist/60 ring-1 ring-transparent hover:ring-brand-blue/20 px-3.5 py-1.5 rounded-full whitespace-nowrap transition-all duration-200 ease-out-expo'
              }
            >
              {p.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
