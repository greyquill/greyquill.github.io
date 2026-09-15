import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import { CAREERS_EMAIL, OPENINGS } from '@/lib/careers';

export const metadata: Metadata = {
  title: 'Careers · Greyquill Software',
  description:
    'Open roles at Greyquill Software in Bengaluru. We build trust and governance software for companies whose decisions get audited.',
  alternates: { canonical: 'https://greyquill.io/careers' },
};

export default function CareersPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Careers" />
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
            Careers
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Careers at Greyquill.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            We build governance software for companies whose decisions get
            audited. We are a small team based in Bengaluru.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-5">
            Open roles · {OPENINGS.length}
          </div>
          <div className="space-y-5 md:space-y-6">
            {OPENINGS.map(({ slug, title, summary, terms }) => (
              <Link key={slug} href={`/careers/${slug}`} className="block">
                <article className="group rounded-2xl ring-1 ring-black/[0.06] bg-white p-6 md:p-8 hover:ring-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 ease-out-expo">
                  <h2 className="font-display text-xl md:text-2xl text-brand-ink leading-tight mb-3">
                    {title}
                  </h2>
                  <p className="text-brand-ink/75 leading-relaxed text-[15.5px] mb-4 max-w-2xl">
                    {summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {terms.map((t) => (
                      <span
                        key={t}
                        className="text-xs text-brand-ink/65 bg-brand-mist/60 ring-1 ring-black/[0.05] rounded-full px-3 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                    Read the role
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </article>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-brand-ink mb-3">
              Nothing here that fits?
            </h2>
            <p className="text-brand-ink/75 leading-relaxed max-w-2xl mb-6">
              Write to us anyway. Tell us what you have built and what you
              want to work on next. We keep what you send and come back to you
              when a role opens.
            </p>
            <a
              href={`mailto:${CAREERS_EMAIL}`}
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-ink text-white font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out-expo"
            >
              {CAREERS_EMAIL}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
