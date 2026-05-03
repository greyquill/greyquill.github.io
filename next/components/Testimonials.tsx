import Section from './Section';

const TESTIMONIALS = [
  {
    quote:
      'They didn\'t just hand us a model. They handed us the lineage, the controls, and an answer for the regulator the same week.',
    attribution: 'Head of Data, Tier-1 Telecom Group',
    sector: 'Telecom',
  },
  {
    quote:
      'We\'d been told governance would slow us down. With Greyquill it became the reason we shipped. Leadership finally trusted the numbers underneath.',
    attribution: 'Director of Analytics, National Retail Chain',
    sector: 'Retail',
  },
  {
    quote:
      'Reconciliation drift across rails was costing us nights. Within a quarter we had a system that explained every mismatch and self-corrected the recurring ones.',
    attribution: 'VP Engineering, Payment Gateway',
    sector: 'Financial Services',
  },
];

export default function Testimonials() {
  return (
    <Section
      eyebrow="Proof"
      title={
        <>
          What clients say <br className="hidden md:block" />when the audit lands.
        </>
      }
      intro="We can't always name them. We can tell you what changed."
      className="!py-16 md:!py-24"
    >
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {TESTIMONIALS.map((t) => (
          <figure
            key={t.attribution}
            className="relative bg-white rounded-2xl p-7 md:p-8 ring-1 ring-black/[0.05] hover:ring-brand-blue/30 transition-all duration-400 ease-out-expo flex flex-col"
          >
            <span aria-hidden className="font-display text-6xl text-brand-blue/15 leading-none mb-1">
              &ldquo;
            </span>
            <blockquote className="text-brand-ink/85 text-lg leading-relaxed flex-1 -mt-4">
              {t.quote}
            </blockquote>
            <figcaption className="mt-6 pt-5 border-t border-black/[0.06]">
              <div className="text-brand-ink font-semibold text-sm">{t.attribution}</div>
              <div className="text-brand-blue/80 text-xs font-semibold uppercase tracking-[0.16em] mt-1">
                {t.sector}
              </div>
            </figcaption>
          </figure>
        ))}
      </div>
    </Section>
  );
}
