import Image from 'next/image';
import Link from 'next/link';

const NAV = [
  { href: '/products', label: 'Products' },
  { href: '/industries', label: 'Industries' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/about-us', label: 'About' },
];

export default function Header() {
  return (
    <header className="border-b border-black/[0.06] sticky top-0 z-40 bg-white/85 backdrop-blur-md">
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 md:h-20 flex items-center justify-between">
        <Link href="/" aria-label="Greyquill home" className="flex items-center group shrink-0">
          {/* Wordmark logo (905×132), kept as-is from the existing site */}
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
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group/nav relative text-brand-ink/75 hover:text-brand-ink transition-colors py-1"
            >
              <span>{item.label}</span>
              <span
                aria-hidden
                className="pointer-events-none absolute left-0 -bottom-0.5 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover/nav:w-full"
              />
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
