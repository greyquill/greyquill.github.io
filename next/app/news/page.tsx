import type { Metadata } from 'next';
import Link from 'next/link';
import { Award, ScanLine, Bot, Layers } from 'lucide-react';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'News and updates · Greyquill Software',
  description:
    'Recent milestones from Greyquill Software. Partnerships, product launches, and platform updates.',
  alternates: { canonical: 'https://greyquill.io/news' },
};

type Milestone = {
  Icon: React.ComponentType<{ className?: string }>;
  category: string;
  title: string;
  body: string;
  href: string;
  external?: boolean;
};

const MILESTONES: Milestone[] = [
  {
    Icon: Award,
    category: 'Partnership',
    title: 'IBM Silver Business Partner',
    body: 'Greyquill is now an IBM Silver Business Partner, certified across the watsonx and Cloud Pak stack. The certifications back the platform without locking clients into one vendor.',
    href: '/partnerships',
  },
  {
    Icon: ScanLine,
    category: 'Product',
    title: 'ClarityAI is live',
    body: 'Score the clarity and risk of any AI initiative before you fund it. ClarityAI is in production at clarity.greyquill.io and behind the platform on /platform.',
    href: '/products/clarity-ai',
  },
  {
    Icon: Bot,
    category: 'Product',
    title: 'GST Co-Pilot, vertical proof point',
    body: 'An agentic AI co-pilot for Indian GST reconciliation. Forty hours of GST a month compressed to an afternoon, with audit trails and human review baked in.',
    href: '/products/gst-copilot',
  },
  {
    Icon: Layers,
    category: 'Platform',
    title: 'The Greyquill platform',
    body: 'Three pillars: ClarityAI to diagnose, GQData to govern, GQ Agents to activate. One foundation across the AI lifecycle, in regulated environments.',
    href: '/platform',
  },
];

export default function NewsPage() {
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
            News and updates
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Recent milestones.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            Partnerships, product launches, and platform updates from Greyquill.
            We will add dated press releases and longer write-ups here as they
            come.
          </p>
        </div>
      </section>

      <section className="bg-white py-12 md:py-16">
        <div className="mx-auto max-w-5xl px-5 md:px-8 space-y-5 md:space-y-6">
          {MILESTONES.map(({ Icon, category, title, body, href, external }) => {
            const inner = (
              <article className="group grid md:grid-cols-[200px_1fr] gap-5 md:gap-8 rounded-2xl ring-1 ring-black/[0.06] bg-white p-6 md:p-8 hover:ring-brand-blue/40 hover:shadow-lg hover:shadow-brand-blue/5 transition-all duration-300 ease-out-expo">
                <div className="flex md:flex-col items-center md:items-start gap-3 md:gap-2">
                  <div className="h-12 w-12 rounded-full bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Icon className="h-6 w-6" />
                  </div>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80">
                    {category}
                  </span>
                </div>
                <div>
                  <h2 className="font-display text-xl md:text-2xl text-brand-ink leading-tight mb-3">
                    {title}
                  </h2>
                  <p className="text-brand-ink/75 leading-relaxed text-[15.5px] mb-4">
                    {body}
                  </p>
                  <span className="inline-flex items-center gap-2 text-brand-blue font-semibold text-sm">
                    Read more
                    <span
                      aria-hidden
                      className="transition-transform duration-300 ease-out-expo group-hover:translate-x-1"
                    >
                      {external ? '↗' : '→'}
                    </span>
                  </span>
                </div>
              </article>
            );
            return external ? (
              <a key={title} href={href} target="_blank" rel="noopener">
                {inner}
              </a>
            ) : (
              <Link key={title} href={href}>
                {inner}
              </Link>
            );
          })}
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="rounded-2xl bg-white ring-1 ring-black/[0.06] p-8 md:p-10">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              Press inquiries
            </div>
            <h2 className="font-display text-2xl md:text-3xl leading-tight text-brand-ink mb-3">
              Talking to us about a story?
            </h2>
            <p className="text-brand-ink/75 leading-relaxed max-w-2xl mb-6">
              For media inquiries, interview requests, or additional
              information, write to our communications team and we will get
              back to you quickly.
            </p>
            <a
              href="mailto:press@greyquill.io"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-brand-ink text-white font-semibold text-sm hover:-translate-y-0.5 hover:shadow-lg transition-all duration-300 ease-out-expo"
            >
              press@greyquill.io
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden isolate bg-brand-ink text-white py-16 md:py-24">
        <div
          aria-hidden
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl bg-brand-blue"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight max-w-3xl">
            Want to talk about your project?
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            Tell us what you are trying to ship and what is in the way. We
            answer every inquiry within one business day.
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
