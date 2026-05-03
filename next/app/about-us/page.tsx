import type { Metadata } from 'next';
import Link from 'next/link';
import { Lightbulb, Handshake, CheckCircle2, Award } from 'lucide-react';
import ProductBackLink from '@/components/ProductBackLink';
import { CALENDLY_URL } from '@/lib/links';

export const metadata: Metadata = {
  title: 'About · Greyquill Software',
  description:
    'Greyquill was founded by engineers who watched too many well-coded projects fail because the requirements were unclear. Meet the team and the principles we work by.',
  alternates: { canonical: 'https://greyquill.io/about-us' },
};

type Value = { Icon: React.ComponentType<{ className?: string }>; title: string; body: string };

const VALUES: Value[] = [
  {
    Icon: Lightbulb,
    title: 'Process before code',
    body: 'We understand and reshape the business process before we write the software. Technology serves the goal, not the other way around.',
  },
  {
    Icon: Handshake,
    title: 'Long-term partnership',
    body: 'We walk alongside our clients through the operating life of the software, not just the build. Most of our work is repeat work.',
  },
  {
    Icon: CheckCircle2,
    title: 'Ownership and accountability',
    body: 'We take full responsibility for what we ship. If something we built breaks, you do not have to read the contract to find out whose problem it is.',
  },
  {
    Icon: Award,
    title: 'Enterprise-grade by default',
    body: 'Audit trails, governance, security, and operational readiness are not features we add when asked. They are how we build, every time.',
  },
];

type Member = { name: string; role: string; expertise: string; experience: string };

const TEAM: Member[] = [
  {
    name: 'Amarnath',
    role: 'Chief Technology Officer',
    expertise: 'Enterprise architecture, cloud platforms',
    experience: '15+ years in software architecture',
  },
  {
    name: 'Srinivas Reddy',
    role: 'Lead Business Analyst',
    expertise: 'Process optimization, requirements engineering',
    experience: '10+ years optimizing business workflows',
  },
  {
    name: 'Charan Sreedhar',
    role: 'Senior Infrastructure Engineer',
    expertise: 'Infrastructure, cloud solutions',
    experience: '12+ years building scalable applications',
  },
  {
    name: 'Anusha K',
    role: 'UX/UI Design Lead',
    expertise: 'User-centered design, interface architecture',
    experience: '12+ years creating intuitive interfaces',
  },
];

export default function AboutPage() {
  return (
    <>
      <ProductBackLink fallbackHref="/" fallbackLabel="Back to home" currentName="About" />
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
            About Greyquill
          </div>
          <h1 className="font-display font-semibold text-[40px] sm:text-5xl md:text-6xl leading-[1.0] tracking-[-0.025em] text-brand-ink max-w-4xl">
            Founded by engineers who got tired<br />
            <span className="text-brand-blue">of watching projects fail.</span>
          </h1>
          <p className="mt-6 text-lg md:text-xl text-brand-ink/75 max-w-2xl leading-[1.55]">
            After decades in enterprise software we noticed a pattern. The
            best-coded projects still failed when the requirements were unclear.
            So we built a company around fixing that problem first.
          </p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="grid md:grid-cols-[280px_1fr] gap-10 md:gap-16">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
                Our story
              </div>
              <h2 className="font-display text-3xl md:text-4xl leading-[1.1] tracking-tight">
                Why we exist.
              </h2>
            </div>
            <div className="space-y-5 md:pt-2 text-brand-ink/85 text-[16px] leading-[1.7] max-w-2xl">
              <p>
                We have spent our careers building enterprise-grade software
                for banking, financial services, insurance, retail, and
                telecom. Most of those projects shipped. Most of those clients
                came back.
              </p>
              <p>
                Even on the wins, our team kept asking the same question. How
                could this have gone better? Where did vague requirements cost
                us a week? Where did a misalignment we should have caught
                earlier eat into the timeline? We are perfectionists, and the
                hardest critic of any Greyquill engagement has always been the
                Greyquill team that ran it.
              </p>
              <p>
                Alongside our own work, we watched other teams and other
                companies ship projects that did not land. The root cause was
                almost always the same: nobody truly understood what needed to
                be built. Vague requirements, misaligned stakeholders,
                assumptions instead of facts. Six months later, software that
                technically worked but did not solve the actual problem.
              </p>
              <p>
                We founded Greyquill to fix that pattern up front. Our answer
                is the Greyquill Method, a rigorous process that maps the
                business reality before we write a single line of code, and a
                platform (ClarityAI, GQData, GQ Agents) that makes governed AI
                work shippable in regulated environments.
              </p>
              <p>
                The result is projects that deliver what is actually needed,
                on time, with no surprises. We are not the cheapest option. We
                might be the only one that guarantees clarity.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-mist/40 py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              Our principles
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight">
              How we work.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {VALUES.map(({ Icon, title, body }) => (
              <div
                key={title}
                className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="h-10 w-10 rounded-full bg-brand-blue text-white flex items-center justify-center">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-display text-lg text-brand-ink leading-tight">
                    {title}
                  </h3>
                </div>
                <p className="text-brand-ink/75 leading-relaxed text-[15px]">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="max-w-3xl mb-10 md:mb-14">
            <div className="text-[11px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              The team
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight">
              The people you will actually work with.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-5 md:gap-6">
            {TEAM.map((m) => (
              <div
                key={m.name}
                className="bg-white rounded-2xl ring-1 ring-black/[0.05] p-6 md:p-7 flex items-start gap-5"
              >
                <div
                  aria-hidden
                  className="h-14 w-14 rounded-full bg-brand-blue/10 text-brand-blue font-display font-semibold text-xl flex items-center justify-center shrink-0"
                >
                  {m.name.charAt(0)}
                </div>
                <div>
                  <h3 className="font-display text-lg text-brand-ink leading-tight">
                    {m.name}
                  </h3>
                  <p className="text-brand-blue text-sm font-semibold mt-0.5">
                    {m.role}
                  </p>
                  <p className="text-brand-ink/75 text-[14.5px] mt-2 leading-relaxed">
                    {m.expertise}
                  </p>
                  <p className="text-brand-ink/55 text-[12.5px] mt-1">
                    {m.experience}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden isolate bg-brand-ink text-white py-14 md:py-20">
        <div
          aria-hidden
          className="absolute -top-32 -left-24 w-[520px] h-[520px] rounded-full opacity-20 blur-3xl bg-brand-blue"
        />
        <div className="relative mx-auto max-w-6xl px-5 md:px-8">
          <h2 className="font-display text-3xl md:text-5xl leading-[1.06] tracking-tight max-w-3xl">
            Want to know if we are the right partner?
          </h2>
          <p className="mt-5 text-white/75 text-lg md:text-xl max-w-2xl leading-relaxed">
            Bring us the messiest version of what you are trying to ship. We
            will tell you, honestly, where the bottleneck actually is and
            whether we are the right team to help you clear it.
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
