import type { Metadata } from 'next';
import Link from 'next/link';
import { INDUSTRIES } from '@/lib/industries';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Industries · Greyquill',
  description:
    'Where Greyquill has shipped governed AI in production: BFSI and payments, telecom, retail and commerce. Each industry has its own data, regulators, and lessons.',
  alternates: { canonical: 'https://greyquill.io/industries' },
};

export default function IndustriesIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden isolate">
        <div
          aria-hidden
          className="absolute inset-0"
          style={{ background: 'linear-gradient(180deg, #ffffff 0%, #f4fbff 60%, #eaf6fc 100%)' }}
        />
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.22] pointer-events-none"
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
            Industries
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Where we have shipped<br />
            <span className="text-brand-blue">governed AI in production.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Three verticals where Greyquill consultants have done the work end to end: data
            foundations, governed automations, and AI on top of workflows that
            actually compound. Each has its own regulators, its own legacy, and
            its own lessons.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-3 gap-5 md:gap-6">
          {INDUSTRIES.map((industry) => (
            <Link
              key={industry.slug}
              href={`/industries/${industry.slug}`}
              className="group relative flex flex-col overflow-hidden rounded-2xl ring-1 ring-black/[0.06] hover:-translate-y-1 hover:shadow-xl hover:shadow-brand-blue/10 transition-all duration-400 ease-out-expo"
            >
              <div
                className="aspect-[16/10] relative overflow-hidden"
                style={{ background: industry.heroGradient }}
              >
                <div
                  aria-hidden
                  className="absolute -top-20 -right-20 w-[260px] h-[260px] rounded-full opacity-30 blur-2xl"
                  style={{ background: industry.accent }}
                />
                <div className="absolute inset-0 p-6 md:p-7 flex flex-col justify-between text-white">
                  <div
                    className="text-[10px] font-semibold uppercase tracking-[0.22em]"
                    style={{ color: industry.accent }}
                  >
                    {industry.shortLabel}
                  </div>
                  <h2 className="font-display text-2xl md:text-[28px] leading-[1.04] tracking-tight max-w-[16ch]">
                    {industry.displayWord}
                  </h2>
                </div>
              </div>
              <div className="p-6 md:p-7 bg-white flex flex-col flex-1">
                <p className="text-brand-ink/75 leading-relaxed text-[14.5px] flex-1">
                  {industry.stake}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  Read more
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  >
                    →
                  </span>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            We also serve
          </div>
          <h2 className="font-display text-2xl md:text-3xl leading-[1.1] tracking-tight max-w-3xl">
            Healthcare and public sector teams, where the governance bar is just
            as high.
          </h2>
          <p className="mt-4 text-brand-ink/70 leading-relaxed max-w-2xl text-[15.5px]">
            We have shipped in healthcare (practice management with{' '}
            <a
              href="https://umami.greyquill.io"
              target="_blank"
              rel="noopener"
              className="text-brand-blue font-semibold hover:text-brand-blue-dark underline-offset-4 hover:underline"
            >
              Umami
            </a>
            ) and public-sector-adjacent contexts. We do not claim deep
            references in either vertical yet, but the platform travels.
          </p>
        </div>
      </section>

      <section className="relative overflow-hidden isolate bg-brand-ink text-white py-16 md:py-24">
        <div
          aria-hidden
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl bg-brand-blue"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight max-w-3xl">
            Wondering whether your industry is on this list?
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            The platform is industry-agnostic. The lessons are not. Tell us what
            you are trying to ship and we will tell you whether we have seen the
            shape of your problem before.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white text-brand-ink font-semibold text-sm hover:-translate-y-0.5 hover:shadow-xl transition-all duration-300 ease-out-expo"
            >
              Book a discovery call
              <span aria-hidden>↗</span>
            </a>
            <Link
              href="/platform"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md ring-1 ring-white/30 text-white font-semibold text-sm hover:ring-white/60 hover:bg-white/[0.06] transition-all duration-300 ease-out-expo"
            >
              See the platform
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
