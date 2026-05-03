import type { Metadata } from 'next';
import Link from 'next/link';
import {
  ShieldCheck,
  Handshake,
  UserLock,
  Banknote,
  FileText,
  Code2,
  Check,
} from 'lucide-react';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'Policies · Greyquill Software',
  description:
    'How Greyquill Software handles data privacy, client engagement, intellectual property, billing, quality, and ongoing support.',
  alternates: { canonical: 'https://greyquill.io/policies' },
};

type Policy = {
  Icon: React.ComponentType<{ className?: string }>;
  title: string;
  lead: string;
  items: string[];
  footer: string;
};

const POLICIES: Policy[] = [
  {
    Icon: UserLock,
    title: 'Data privacy',
    lead: 'We take the security and privacy of your data seriously.',
    items: [
      'We collect only the information necessary to provide the service',
      'We use industry-standard security controls to protect it',
      'We do not sell your data to third parties',
      'We provide clear procedures for data access and deletion',
    ],
    footer: 'Practices are aligned with GDPR, DPDP, and CCPA.',
  },
  {
    Icon: Handshake,
    title: 'Client engagement',
    lead: 'Every client relationship is run on the same principles.',
    items: [
      'Clear, honest communication throughout the project',
      'Regular progress updates and milestone reviews',
      'Dedicated points of contact for project management',
      'Commitment to timeline adherence and scope management',
    ],
    footer: 'Successful projects start with strong relationships.',
  },
  {
    Icon: Code2,
    title: 'Intellectual property',
    lead: 'We respect intellectual property rights, ours and yours.',
    items: [
      'Clients receive full ownership of custom-developed code on completion',
      'We document any third-party components used in deliverables',
      'Open-source components are used in compliance with their licenses',
      'Confidentiality agreements cover all aspects of an engagement',
    ],
    footer: 'You can fully use and own everything we deliver.',
  },
  {
    Icon: Banknote,
    title: 'Billing and payment',
    lead: 'Our approach to billing is transparent.',
    items: [
      'Clear project quotes with defined payment milestones',
      'No hidden fees or unexpected charges',
      'Detailed invoices itemizing all services provided',
      'Value-based pricing aligned with business outcomes',
    ],
    footer: 'Fair, transparent pricing that reflects the value we provide.',
  },
  {
    Icon: ShieldCheck,
    title: 'Quality assurance',
    lead: 'We maintain high quality standards through:',
    items: [
      'Comprehensive testing throughout development',
      'Code reviews and adherence to best practices',
      'Documentation of all system components',
      'A warranty period for every delivered solution',
    ],
    footer: 'Quality is built into every step of our process.',
  },
  {
    Icon: FileText,
    title: 'Support and maintenance',
    lead: 'Our ongoing support commitment.',
    items: [
      'Defined SLAs for issue response and resolution',
      'Regular system maintenance and security updates',
      'Multiple support channels for issue reporting',
      'Knowledge transfer so your team can stand on their own',
    ],
    footer: 'We make sure what we build keeps working.',
  },
];

export default function PoliciesPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Policies" />
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
            Transparency and trust
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Our policies.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            How we handle data, intellectual property, billing, quality, and
            ongoing support across every engagement.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-2 gap-5 md:gap-6">
          {POLICIES.map(({ Icon, title, lead, items, footer }) => (
            <article
              key={title}
              className="rounded-2xl ring-1 ring-black/[0.05] bg-white overflow-hidden"
            >
              <div className="flex items-center gap-3 px-6 py-4 border-b border-black/[0.05]">
                <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center shrink-0">
                  <Icon className="h-5 w-5" />
                </div>
                <h2 className="font-display text-lg text-brand-ink leading-tight">
                  {title}
                </h2>
              </div>
              <div className="p-6 md:p-7">
                <p className="text-brand-ink/75 text-[15px] leading-relaxed mb-4">
                  {lead}
                </p>
                <ul className="space-y-2.5 mb-4">
                  {items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2.5 text-[14.5px] text-brand-ink/85 leading-relaxed"
                    >
                      <Check
                        className="h-4 w-4 text-brand-blue shrink-0 mt-1"
                        aria-hidden
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-xs text-brand-ink/55 italic">{footer}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] p-8 md:p-10">
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-brand-ink mb-3">
              Need more detail?
            </h2>
            <p className="text-brand-ink/75 leading-relaxed max-w-2xl mb-6">
              For detailed policy documents or specific questions about our
              terms of engagement, get in touch.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 ease-out-expo"
            >
              Contact us
              <span aria-hidden>→</span>
            </Link>
          </div>
          <p className="mt-6 text-center text-xs text-brand-ink/50">
            Our policies are reviewed regularly to reflect current best practices.
            Last updated: March 2025.
          </p>
        </div>
      </section>
    </>
  );
}
