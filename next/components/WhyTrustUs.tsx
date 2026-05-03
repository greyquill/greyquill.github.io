import Link from 'next/link';
import Section from './Section';

/**
 * Replaces the previous Testimonials section.
 *
 * The site has no customers yet, so anonymous quotes were a net-negative
 * signal for a CRO/CDO buyer. This panel does the honest pre-PMF move
 * instead: name what we are not pretending, then list the credibility
 * sources we actually have. Material is sourced from the About page,
 * which the founder confirms is accurate.
 */

const PILLARS = [
  {
    eyebrow: 'The team',
    headline: 'Senior engineers, 50+ years combined.',
    body: 'Four senior engineers across architecture, business analysis, infrastructure, and design. Careers spent shipping enterprise software in regulated sectors.',
    cta: { label: 'Meet the team', href: '/about-us' },
  },
  {
    eyebrow: 'The track record',
    headline: 'Shipped in BFSI, telecom, retail, insurance.',
    body: 'Enterprise software for banking, financial services, insurance, retail, and telecom. Most of those projects shipped. Most of those clients came back.',
    cta: { label: 'How we work', href: '/about-us' },
  },
  {
    eyebrow: 'The foundation',
    headline: 'Built on IBM, owned by you.',
    body: 'Greyquill is an IBM Business Partner. The platform stands on enterprise-grade IBM foundations. Your data, your governance configuration, and your agent definitions are yours to take.',
    cta: { label: 'See our partnerships', href: '/partnerships' },
  },
];

export default function WhyTrustUs() {
  return (
    <Section
      eyebrow="Why trust us"
      title={
        <>
          No customer logos yet.<br />
          <span className="text-brand-blue">Here is what we have.</span>
        </>
      }
      intro="We are early. So, instead of testimonials or logos (coming soon), here is what we will stake the engagement on."
    >
      <div className="grid md:grid-cols-3 gap-5 md:gap-6">
        {PILLARS.map((p) => (
          <div
            key={p.eyebrow}
            className="bg-white rounded-2xl p-7 md:p-8 ring-1 ring-black/[0.05] hover:ring-brand-blue/30 transition-all duration-400 ease-out-expo flex flex-col"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              {p.eyebrow}
            </div>
            <h3 className="font-display font-semibold text-xl md:text-[22px] text-brand-ink leading-tight mb-3">
              {p.headline}
            </h3>
            <p className="text-brand-ink/75 leading-relaxed text-[15px] flex-1">
              {p.body}
            </p>
            <Link
              href={p.cta.href}
              className="mt-5 pt-5 border-t border-black/[0.06] text-sm font-semibold text-brand-blue hover:text-brand-blue-dark transition-colors inline-flex items-center gap-1.5"
            >
              {p.cta.label}
              <span aria-hidden>→</span>
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-8 text-center text-[13px] text-brand-ink/55 max-w-2xl mx-auto leading-relaxed">
        If you want a customer reference before signing, we may not have one yet. <br/>Based on our 50+ collective experience, If you want a half-day diagnostic of your AI risk and readiness, we will have one in two weeks. It doubles as your evaluation of us.
      </p>
    </Section>
  );
}
