import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import type { Industry } from '@/lib/industries';
import { CALENDLY_URL } from '@/lib/links';

function IndustryHero({ industry }: { industry: Industry }) {
  return (
    <section
      className="relative overflow-hidden isolate text-white"
      style={{ background: industry.heroGradient }}
    >
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.18] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(0deg, rgba(255,255,255,0.0) 0%, rgba(255,255,255,0.06) 100%), repeating-linear-gradient(90deg, rgba(255,255,255,0.06) 0 1px, transparent 1px 80px)',
        }}
      />
      <div
        aria-hidden
        className="absolute -top-40 -right-40 w-[640px] h-[640px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: industry.accent }}
      />

      <div className="relative">
        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-8 md:pt-10">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[12px] font-medium text-white/70 hover:text-white transition-colors"
          >
            <span aria-hidden>←</span> All industries
          </Link>
        </div>

        <div className="mx-auto max-w-6xl px-5 md:px-8 pt-10 md:pt-16 pb-14 md:pb-20">
          <div
            className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] mb-6"
            style={{ color: industry.accent }}
          >
            <span
              className="h-px w-7"
              style={{ background: industry.accent, opacity: 0.7 }}
              aria-hidden
            />
            Industry · {industry.shortLabel}
          </div>

          <h1 className="font-display font-semibold text-[44px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[0.98] tracking-[-0.03em] max-w-5xl">
            {industry.displayWord}
          </h1>

          <p className="mt-7 md:mt-9 text-lg md:text-xl text-white/80 max-w-3xl leading-[1.55]">
            {industry.stake}
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
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md ring-1 ring-white/30 text-white font-semibold text-sm hover:ring-white/60 hover:bg-white/[0.06] transition-all duration-300 ease-out-expo"
            >
              Talk to us
              <span aria-hidden>→</span>
            </Link>
          </div>

          <div className="mt-12 md:mt-14">
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-white/55 mb-3">
              The regulatory ground
            </div>
            <ul className="flex flex-wrap gap-2">
              {industry.regulators.map((r) => (
                <li
                  key={r.abbr}
                  title={r.full}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-medium text-white/85 ring-1 ring-white/20 bg-white/[0.04] hover:bg-white/[0.08] transition-colors"
                >
                  {r.abbr}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Buyers({ industry }: { industry: Industry }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              Who this is for
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight">
              The roles we build alongside.
            </h2>
          </div>
          <ul className="space-y-3 md:pt-2">
            {industry.buyers.map((b) => (
              <li
                key={b}
                className="flex items-start gap-3 text-brand-ink/85 leading-relaxed"
              >
                <span
                  aria-hidden
                  className="mt-2 h-1.5 w-1.5 rounded-full bg-brand-blue/70 shrink-0"
                />
                <span className="text-[17px]">{b}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Learnings({ industry }: { industry: Industry }) {
  return (
    <section className="bg-brand-mist/40 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            What we have learned
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight">
            The lessons that survived contact with production.
          </h2>
        </div>
        <ol className="grid md:grid-cols-2 gap-5 md:gap-6">
          {industry.learnings.map((l, i) => (
            <li
              key={i}
              className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7 flex gap-5"
            >
              <span
                aria-hidden
                className="font-display text-2xl md:text-3xl text-brand-blue/40 shrink-0 leading-none mt-1"
              >
                0{i + 1}
              </span>
              <p className="text-brand-ink/85 leading-relaxed text-[15.5px]">
                {l}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Solutions({ industry }: { industry: Industry }) {
  return (
    <section className="bg-white py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl mb-10 md:mb-14">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            Solutions we have delivered
          </div>
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight">
            Anonymized engagements, real outcomes.
          </h2>
          <p className="mt-4 text-brand-ink/65 text-[15.5px] leading-relaxed">
            Customer names withheld. Patterns are real.
          </p>
        </div>
        <div className="space-y-5 md:space-y-6">
          {industry.solutions.map((s, i) => (
            <article
              key={s.title}
              className="grid md:grid-cols-[80px_1fr] gap-5 md:gap-8 bg-white rounded-2xl ring-1 ring-black/[0.06] p-6 md:p-8 hover:ring-brand-blue/30 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 ease-out-expo"
            >
              <div
                aria-hidden
                className="font-display text-3xl md:text-4xl text-brand-blue/35 leading-none"
              >
                0{i + 1}
              </div>
              <div>
                <h3 className="font-display text-xl md:text-2xl text-brand-ink leading-tight mb-3">
                  {s.title}
                </h3>
                <p className="text-brand-ink/75 leading-relaxed text-[15.5px]">
                  {s.body}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function CrossLinks({ industry }: { industry: Industry }) {
  return (
    <section className="bg-brand-mist/40 py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <div className="max-w-3xl mb-10 md:mb-12">
          <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
            What we use to deliver
          </div>
          <h2 className="font-display text-3xl md:text-4xl leading-[1.08] tracking-tight">
            The platform pieces that show up most often in {industry.shortLabel} work.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-5 md:gap-6">
          {industry.crossLinks.map((link) => {
            const isExternal = link.href.startsWith('http');
            const inner = (
              <>
                <h3 className="font-display text-lg text-brand-ink mb-2">
                  {link.name}
                </h3>
                <p className="text-brand-ink/70 leading-relaxed text-[14.5px] flex-1">
                  {link.blurb}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                  Read more
                  <span
                    aria-hidden
                    className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                  >
                    {isExternal ? '↗' : '→'}
                  </span>
                </span>
              </>
            );
            const cls =
              'group flex flex-col bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7 hover:ring-brand-blue/40 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/10 transition-all duration-300 ease-out-expo';
            return isExternal ? (
              <a
                key={link.name}
                href={link.href}
                target="_blank"
                rel="noopener"
                className={cls}
              >
                {inner}
              </a>
            ) : (
              <Link key={link.name} href={link.href} className={cls}>
                {inner}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function FinalCTA({ industry }: { industry: Industry }) {
  return (
    <section className="relative overflow-hidden isolate bg-brand-ink text-white py-14 md:py-20">
      <div
        aria-hidden
        className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl"
        style={{ background: industry.accent }}
      />
      <div className="relative mx-auto max-w-6xl px-5 md:px-8">
        <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight max-w-3xl">
          Considering a {industry.shortLabel.toLowerCase()} initiative?
        </h2>
        <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
          Bring us the messy version. We will tell you whether the data foundation,
          the process, or the model is the real bottleneck, and what we would build first.
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
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-md ring-1 ring-white/30 text-white font-semibold text-sm hover:ring-white/60 hover:bg-white/[0.06] transition-all duration-300 ease-out-expo"
          >
            Talk to us
            <span aria-hidden>→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function IndustryPage({ industry }: { industry: Industry }) {
  return (
    <>
      <ProductBackLink fallbackHref="/industries" fallbackLabel="Back to industries" currentName={industry.shortLabel} />
      <IndustryHero industry={industry} />
      <Buyers industry={industry} />
      <Learnings industry={industry} />
      <Solutions industry={industry} />
      <CrossLinks industry={industry} />
      <FinalCTA industry={industry} />
    </>
  );
}
