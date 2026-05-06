import Section from './Section';

/**
 * Deployment posture, homepage section.
 *
 * Answers the second question every technical evaluator asks after
 * "what does it do?": "how does this run in my environment?". Uses
 * only positioning claims we already make (in your environment, IBM
 * foundations, customer-owned configuration, no data movement). Deeper
 * technical content lives in the architecture brief.
 */

const POSTURE = [
  {
    eyebrow: 'Where it runs',
    title: 'In your environment.',
    body: 'Inside your perimeter, on infrastructure you already control.',
  },
  {
    eyebrow: 'What it stands on',
    title: 'On IBM foundations.',
    body: 'The enterprise stack your security team already trusts.',
  },
  {
    eyebrow: 'Where your data sits',
    title: 'Your data, your keys.',
    body: 'Records, lineage, and audit trail never cross our boundary.',
  },
  {
    eyebrow: 'What you take with you',
    title: 'Yours to own.',
    body: 'Open standards across the stack. No vendor capture.',
  },
];

export default function Deployment() {
  return (
    <Section
      eyebrow="Deployment posture"
      title={
        <>
          How it lands<br />
          <span className="text-brand-blue">in your environment.</span>
        </>
      }
      intro="Most regulated buyers ask the same second question: where does it run, and where does the data sit. Here is the short version. The architecture brief has the long one."
    >
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {POSTURE.map((p) => (
          <div
            key={p.eyebrow}
            className="bg-white rounded-2xl ring-1 ring-black/[0.06] p-6 hover:ring-brand-blue/40 hover:-translate-y-0.5 transition-all duration-300 ease-out-expo flex flex-col"
          >
            <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-3">
              {p.eyebrow}
            </div>
            <h3 className="font-display font-semibold text-lg md:text-xl text-brand-ink leading-tight mb-2.5">
              {p.title}
            </h3>
            <p className="text-[14px] text-brand-ink/70 leading-relaxed">
              {p.body}
            </p>
          </div>
        ))}
      </div>

      <p className="mt-8 text-[13px] text-brand-ink/55 max-w-3xl leading-relaxed">
        For a CISO or InfoSec reviewer who needs more, the architecture and governance brief covers deployment topology, identity, key management, audit evidence flow, and IBM stack components in 2 to 3 pages.{' '}
        <a
          href="#brief"
          className="text-brand-blue hover:text-brand-blue-dark font-semibold underline underline-offset-2"
        >
          Get the brief →
        </a>
      </p>
    </Section>
  );
}
