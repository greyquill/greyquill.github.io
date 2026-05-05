import type { Metadata } from 'next';
import Link from 'next/link';
import ProductBackLink from '@/components/ProductBackLink';
import EngagementRoadmap from '@/components/EngagementRoadmap';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'Services · Training, assessments, consulting',
  description:
    'Greyquill services across training, assessments, and consulting. Senior-led engagements that turn AI governance from a line item into a working operating model.',
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
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Training. Assessments.<br />
            <span className="text-brand-blue">Consulting that ships.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Senior-led engagements across the AI governance lifecycle. Each one composes
            with the platform, but stands up on its own.
          </p>
        </div>
      </section>

      {/* ENGAGEMENT ROADMAP — single source of truth for services.
          All 12 engagements organised by phase, with the recommended core
          highlighted at each phase and parallel options inline alongside.
          Clicking any service card opens the detail modal. */}
      <EngagementRoadmap />

      {/* CLOSING CTA */}
      <section className="py-14 md:py-20 bg-brand-ink text-white relative overflow-hidden">
        <div aria-hidden className="absolute -top-32 -right-24 h-[440px] w-[440px] rounded-full bg-brand-blue/40 blur-[120px]" />
        <div aria-hidden className="absolute -bottom-24 -left-20 h-[320px] w-[320px] rounded-full bg-brand-blue/25 blur-[100px]" />

        <div className="relative mx-auto max-w-4xl px-5 md:px-8 grid md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-8">
            <h2 className="font-display text-3xl md:text-5xl leading-[1.05] tracking-tight">
              Tell us where you are stuck.<br className="hidden md:block" />
              <span className="text-brand-blue-light">We will help you with what to do next.</span>
            </h2>
            <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
              A 30-minute call to scope the right engagement. Whether that means a workshop, a diagnostic, or an implementation, you walk away with a recommendation either way.
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
