import Image from 'next/image';
import Link from 'next/link';

/**
 * Small, contained credibility strip on the homepage. The single place
 * IBM is named outside /partnerships, intentionally restrained: badge
 * + one-line statement + link to the full partnerships page.
 */

export default function PartnershipStrip() {
  return (
    <section className="bg-brand-mist/45 border-y border-black/[0.05]">
      <div className="mx-auto max-w-6xl px-5 md:px-8 py-5 md:py-6 grid md:grid-cols-12 gap-5 md:gap-6 items-center">
        <div className="md:col-span-2 flex justify-center md:justify-start">
          <Image
            src="/images/partners/ibm-partner-plus-silver.png"
            alt="IBM Partner Plus · Silver Partner"
            width={600}
            height={420}
            className="w-auto h-auto max-w-[120px] md:max-w-[140px]"
          />
        </div>

        <div className="md:col-span-7 text-center md:text-left">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-1.5">
            We are
          </div>
          <p className="font-display font-semibold text-base md:text-lg text-brand-ink leading-snug">
            An IBM Business Partner.{' '}
            <span className="text-brand-ink/70 font-normal">
              Enterprise-grade foundations, portable when you need them.
            </span>
          </p>
        </div>

        <div className="md:col-span-3 flex md:justify-end justify-center">
          <Link
            href="/partnerships"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors"
          >
            See our partnerships
            <span aria-hidden className="transition-transform duration-200 ease-out-expo group-hover:translate-x-0.5">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
