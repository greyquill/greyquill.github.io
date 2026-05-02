import Link from 'next/link';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/[0.06] mt-24">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-10 grid gap-8 md:grid-cols-4 text-sm text-brand-ink/70">
        <div className="space-y-2">
          <div className="font-display text-base text-brand-ink">Greyquill</div>
          <p className="leading-relaxed">
            Compliant AI on a foundation you can prove.
          </p>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-brand-ink">Platform</div>
          <ul className="space-y-1">
            <li><Link href="/products/clarity-ai" className="hover:text-brand-blue">ClarityAI</Link></li>
            <li><Link href="/products/gqdata" className="hover:text-brand-blue">GQData</Link></li>
            <li><Link href="/products/agents" className="hover:text-brand-blue">GQ Agents</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-brand-ink">Company</div>
          <ul className="space-y-1">
            <li><Link href="/about-us" className="hover:text-brand-blue">About</Link></li>
            <li><Link href="/case-studies" className="hover:text-brand-blue">Case studies</Link></li>
            <li><Link href="/partnerships" className="hover:text-brand-blue">Partnerships</Link></li>
            <li><Link href="/news" className="hover:text-brand-blue">News</Link></li>
          </ul>
        </div>
        <div className="space-y-2">
          <div className="font-semibold text-brand-ink">Resources</div>
          <ul className="space-y-1">
            <li><Link href="/contact" className="hover:text-brand-blue">Contact</Link></li>
            <li><Link href="/support" className="hover:text-brand-blue">Support</Link></li>
            <li><Link href="/policies" className="hover:text-brand-blue">Policies</Link></li>
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
