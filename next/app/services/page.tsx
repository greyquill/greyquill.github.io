import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import { SERVICE_LINES } from '@/lib/serviceLines';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Services · Product engineering, digital transformation, AI & data',
  description:
    'Three service lines, one senior team. Greyquill builds new products, modernises the systems that run your business, and puts AI to work with governance you can prove.',
  alternates: { canonical: 'https://greyquill.io/services' },
};

export default function ServicesPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Services" />

      {/* HERO */}
      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.18] pointer-events-none"
          style={{
            backgroundImage: 'radial-gradient(circle, #0B4F88 1.2px, transparent 1.6px)',
            backgroundSize: '30px 30px',
            maskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
            WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at center, black 30%, transparent 90%)',
          }}
        />

        <div className="relative mx-auto max-w-6xl px-5 md:px-8 pt-16 md:pt-24 pb-12 md:pb-16">
          <div className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue mb-5">
            <span className="h-px w-7 bg-brand-blue/60" aria-hidden />
            Services
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.02] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Everyone promises the autonomous enterprise.<br />
            <span className="text-brand-blue">We build the version you can audit.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Three service lines, one team of senior engineers. We build new products,
            modernise the systems that run your business, and put AI to work with
            governance you can prove. Every engagement is senior-led. No subcontractors.
          </p>
        </div>
      </section>

      {/* THE THREE LINES */}
      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {SERVICE_LINES.map((line, i) => (
              <Link
                key={line.slug}
                href={line.href}
                className="group relative flex flex-col bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7 hover:ring-brand-blue/40 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo"
              >
                <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/70 mb-4">
                  {String(i + 1).padStart(2, '0')}
                </div>
                <h2 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink leading-tight mb-2">
                  {line.name}
                </h2>
                <p className="text-brand-ink font-semibold text-[15px] leading-snug mb-3">
                  {line.tagline}
                </p>
                <p className="text-brand-ink/70 text-[14px] leading-relaxed mb-5">
                  {line.summary}
                </p>
                <ul className="space-y-1.5 mb-6 flex-1">
                  {line.capabilities.map((cap) => (
                    <li key={cap} className="flex items-start gap-2 text-[13px] text-brand-ink/75 leading-snug">
                      <span aria-hidden className="mt-[7px] h-1 w-1 rounded-full bg-brand-blue/70 shrink-0" />
                      {cap}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  Explore {line.navLabel}
                  <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">→</span>
                </span>
              </Link>
            ))}
          </div>

          {/* How the lines connect */}
          <div className="mt-10 md:mt-12 rounded-xl bg-brand-mist/40 ring-1 ring-black/[0.04] p-5 md:p-6 md:flex items-center justify-between gap-6">
            <p className="text-[14px] md:text-[15px] text-brand-ink/75 leading-relaxed max-w-3xl">
              The lines are not silos. A modernisation engagement lays the data foundation
              an AI program needs. A product build inherits the governance discipline of
              the platform it runs on. Each engagement leaves groundwork the next can build on.
            </p>
            <Link
              href="/platform"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm shrink-0 hover:text-brand-blue-dark transition-colors"
            >
              See the platform underneath →
            </Link>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Tell us where you are stuck.<br className="hidden md:block" />
              <span className="text-brand-blue-light">We will tell you what to do next.</span>
            </h2>
            <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              30 minutes. Build, modernise, or govern, you leave with a recommendation either way.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="group inline-flex items-center gap-2 bg-white text-brand-ink font-semibold px-6 py-3.5 rounded-full transition-all duration-200 ease-out-expo hover:-translate-y-0.5 hover:shadow-xl hover:shadow-brand-blue/30"
            >
              Book a call
              <span aria-hidden className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1">↗</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
