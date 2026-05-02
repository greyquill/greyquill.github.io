import Link from 'next/link';
import { PRODUCTS_ORDER } from '@/lib/products';

/**
 * Cross-link chips for a product page. Renders the three sibling
 * products in canonical order. Each chip's arrow direction reflects the
 * sibling's position relative to the current product:
 *   - sibling earlier in the order  ->  ← prefix
 *   - sibling later in the order    ->  → suffix
 */

export default function ProductSiblingChips({ currentHref }: { currentHref: string }) {
  const currentIdx = PRODUCTS_ORDER.findIndex((p) => p.href === currentHref);
  const siblings = PRODUCTS_ORDER.filter((p) => p.href !== currentHref).map((p) => ({
    ...p,
    before: PRODUCTS_ORDER.findIndex((x) => x.href === p.href) < currentIdx,
  }));

  return (
    <div className="flex flex-wrap gap-3">
      {siblings.map((s) => (
        <Link
          key={s.href}
          href={s.href}
          className="group inline-flex items-center gap-2 bg-white ring-1 ring-black/[0.05] hover:ring-brand-blue/40 hover:-translate-y-0.5 hover:shadow-md hover:shadow-brand-blue/10 rounded-full px-5 py-2.5 text-sm font-semibold text-brand-ink transition-all duration-200 ease-out-expo"
        >
          {s.before && (
            <span aria-hidden className="text-brand-blue/70 transition-transform duration-200 ease-out-expo group-hover:-translate-x-0.5">
              ←
            </span>
          )}
          <span>{s.name}</span>
          <span className="text-brand-ink/55 font-normal">· {s.tier}</span>
          {!s.before && (
            <span aria-hidden className="text-brand-blue/70 transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">
              →
            </span>
          )}
        </Link>
      ))}
    </div>
  );
}
