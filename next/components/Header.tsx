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
      <div className="mx-auto max-w-6xl px-5 md:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group" aria-label="Greyquill home">
          <Image
            src="/images/logo/CompanyLogo.png"
            alt=""
            width={32}
            height={32}
            priority
            className="transition-transform duration-300 ease-out-expo group-hover:-rotate-6"
          />
          <span className="font-display text-lg tracking-tight text-brand-ink">Greyquill</span>
        </Link>

        <nav className="hidden md:flex items-center gap-7 text-sm">
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-brand-ink/80 hover:text-brand-ink transition-colors"
            >
              <span>{item.label}</span>
              <span
                aria-hidden
                className="absolute left-0 -bottom-1 h-px w-0 bg-brand-blue transition-[width] duration-300 ease-out-expo group-hover:w-full"
              />
            </Link>
          ))}
        </nav>

        <Link
          href="/contact"
          className="inline-flex items-center gap-2 text-sm font-semibold text-white bg-brand-blue px-4 py-2 rounded-full hover:bg-brand-blue-dark transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-md"
        >
          Book a discovery call
          <span aria-hidden>→</span>
        </Link>
      </div>
    </header>
  );
}
