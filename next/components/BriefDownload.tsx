import Section from './Section';
import BriefDownloadForm from './BriefDownloadForm';

/**
 * Architecture + governance brief download section.
 *
 * Sits near the bottom of the homepage, before FinalCTA. Gives the
 * technical evaluator (CISO, InfoSec reviewer, internal champion) a
 * forwardable artifact, and gives the booking CTA an alternative path
 * for visitors who are not ready for a call.
 */

const COVERS = [
  'Deployment topology: your cloud, on-prem, or air-gapped',
  'Data residency: what stays inside your perimeter, and how we keep it that way',
  'IBM stack components used, and which parts are replaceable',
  'Identity and SSO: bring your own IdP',
  'Audit evidence flow: what is captured, where it lives, who can query it',
  'What you take with you when the engagement ends',
];

export default function BriefDownload() {
  return (
    <Section
      id="brief"
      eyebrow="For your security team"
      title={
        <>
          The architecture<br />
          <span className="text-brand-blue">and governance brief.</span>
        </>
      }
      intro="Two to three pages, written for the people inside your organisation who have to approve this before procurement signs. Send it sideways to your CISO, your internal audit lead, or whoever asks the hard questions."
    >
      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        <div className="lg:col-span-5">
          <div className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-blue/80 mb-4">
            What it covers
          </div>
          <ul className="space-y-3">
            {COVERS.map((c) => (
              <li key={c} className="flex gap-3 items-baseline">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-brand-blue shrink-0 translate-y-1.5" />
                <span className="text-[15px] text-brand-ink/80 leading-relaxed">{c}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:col-span-7">
          <BriefDownloadForm />
        </div>
      </div>
    </Section>
  );
}
