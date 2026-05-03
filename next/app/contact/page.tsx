import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import ProductBackLink from '@/components/ProductBackLink';

export const metadata: Metadata = {
  title: 'Contact · Greyquill Software',
  description:
    'Reach Greyquill Software. Based in Bengaluru, India. Call +91 80 5052 2809 or email amarnath@greyquill.io. We respond within one business day.',
  alternates: { canonical: 'https://greyquill.io/contact' },
};

const FAQS: { q: string; a: string }[] = [
  {
    q: 'What is your typical response time?',
    a: 'We aim to respond to every inquiry within one business day. Mention urgency in your message if you need us sooner.',
  },
  {
    q: 'Do you offer remote consultations?',
    a: 'Yes. Most of our consultations happen over video to accommodate clients in different geographies.',
  },
  {
    q: 'How do I request a quote for my project?',
    a: 'Use the form and choose "Request a quote" as the inquiry type. Include enough detail about your project for us to give a meaningful estimate.',
  },
  {
    q: 'What should I prepare for our first call?',
    a: 'A short overview of the business, the current challenge, and what success looks like. That gives us enough to make the call useful instead of introductory.',
  },
];

const ORG_LD = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  mainEntity: {
    '@type': 'Organization',
    name: 'Greyquill Software',
    telephone: '+91-80-5052-2809',
    email: 'amarnath@greyquill.io',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Bengaluru',
      addressCountry: 'IN',
    },
  },
};

function InfoCard() {
  return (
    <aside className="rounded-2xl ring-1 ring-black/[0.06] bg-white p-6 md:p-7">
      <h2 className="font-display text-xl text-brand-ink mb-5">Contact information</h2>
      <address className="not-italic space-y-5 text-[15px]">
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
            Location
          </h3>
          <p className="text-brand-ink/85">Bengaluru, India</p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
            Phone
          </h3>
          <p>
            <a
              href="tel:+918050522809"
              className="text-brand-ink/85 hover:text-brand-blue transition-colors"
            >
              +91 80 5052 2809
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
            Email
          </h3>
          <p className="break-all">
            <a
              href="mailto:amarnath@greyquill.io"
              className="text-brand-ink/85 hover:text-brand-blue transition-colors"
            >
              amarnath@greyquill.io
            </a>
          </p>
        </div>
        <div>
          <h3 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-ink/55 mb-1">
            Business hours
          </h3>
          <p className="text-brand-ink/85">Monday to Saturday, 9am to 6pm IST</p>
        </div>
      </address>
    </aside>
  );
}

export default function ContactPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="Contact" />
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_LD) }}
      />

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
            Reach out
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Get in touch.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Tell us what you are trying to ship and what is in the way. We
            answer every inquiry within one business day.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="md:col-span-1">
            <InfoCard />
          </div>
          <div className="md:col-span-2">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl mb-10 md:mb-12">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              Frequently asked
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-[1.08] tracking-tight">
              Before you write to us.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {FAQS.map((faq) => (
              <div
                key={faq.q}
                className="rounded-2xl ring-1 ring-black/[0.05] bg-white p-6 md:p-7"
              >
                <h3 className="font-display text-lg text-brand-ink mb-2 leading-snug">
                  {faq.q}
                </h3>
                <p className="text-brand-ink/70 leading-relaxed text-[14.5px]">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
