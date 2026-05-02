import Link from 'next/link';

const PLATFORM = [
  { href: '/products/clarity-ai', label: 'ClarityAI' },
  { href: '/products/gqdata', label: 'GQData' },
  { href: '/products/agents', label: 'GQ Agents' },
];

const VERTICALS: { href: string; label: string; external?: boolean }[] = [
  { href: '/products/gst-copilot', label: 'GST Co-Pilot' },
  { href: 'https://commerce-synapse.com', label: 'Commerce Synapse', external: true },
  { href: 'https://umami.greyquill.io', label: 'Umami', external: true },
];

const COMPANY = [
  { href: '/about-us', label: 'About' },
  { href: '/case-studies', label: 'Case studies' },
  { href: '/partnerships', label: 'Partnerships' },
  { href: '/news', label: 'News' },
];

const RESOURCES = [
  { href: '/contact', label: 'Contact' },
  { href: '/support', label: 'Support' },
  { href: '/policies', label: 'Policies' },
];

function FooterLink({
  href,
  children,
  external,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  if (external) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener"
        className="hover:text-brand-blue transition-colors inline-flex items-center gap-1"
      >
        {children}
        <span aria-hidden className="text-brand-ink/40 text-[10px]">↗</span>
      </a>
    );
  }
  return (
    <Link href={href} className="hover:text-brand-blue transition-colors">
      {children}
    </Link>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/[0.06] mt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 grid gap-8 md:grid-cols-2 lg:grid-cols-12 text-sm text-brand-ink/70">
        <div className="lg:col-span-3 space-y-2">
          <div className="font-display text-base text-brand-ink">Greyquill</div>
          <p className="leading-relaxed">
            Compliant AI on a foundation you can prove.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-2">
          <div className="font-semibold text-brand-ink">Platform</div>
          <ul className="space-y-1">
            {PLATFORM.map((l) => (
              <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-2">
          <div className="font-semibold text-brand-ink">Verticals</div>
          <ul className="space-y-1">
            {VERTICALS.map((l) => (
              <li key={l.href}>
                <FooterLink href={l.href} external={l.external}>{l.label}</FooterLink>
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-2 space-y-2">
          <div className="font-semibold text-brand-ink">Company</div>
          <ul className="space-y-1">
            {COMPANY.map((l) => (
              <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>
            ))}
          </ul>
        </div>

        <div className="lg:col-span-3 space-y-2">
          <div className="font-semibold text-brand-ink">Resources</div>
          <ul className="space-y-1">
            {RESOURCES.map((l) => (
              <li key={l.href}><FooterLink href={l.href}>{l.label}</FooterLink></li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-black/[0.04]">
        <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 text-xs text-brand-ink/55 flex flex-wrap items-center justify-between gap-3">
          <span>© {year} Greyquill Software</span>
          <span>Built with care · Bengaluru</span>
        </div>
      </div>
    </footer>
  );
}
