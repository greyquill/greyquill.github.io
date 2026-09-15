import type { Metadata } from 'next';
import Link from 'next/link';
import { CircleHelp, FileCode2, FileText, Link2, MapPin, Mic, Paperclip, Phone, User } from 'lucide-react';
import { CAREERS_EMAIL } from '@/lib/careers';

export const metadata: Metadata = {
  title: 'Forward deployed engineer intern · Greyquill Software',
  description:
    'A founding internship in Bengaluru. Write code for our products and help sell them to companies in regulated industries. No resume in the first round.',
  alternates: { canonical: 'https://greyquill.io/careers/fde-intern' },
};

const TITLE = 'Forward deployed engineer intern';

const META = ['Bengaluru, in person', 'Full time', '2 openings', 'Internship'];

const ENGINEERING = [
  'Pick up real items from our tracker, including data ingestion, entity resolution, product screens, internal tools, tests, and the small agents we use to run the company.',
  'Write Go, Python and TypeScript. If you do not know one of them, we will teach you.',
  'Have every change reviewed by someone on the team.',
];

const SALES = [
  'Research companies we want to sell to and find the right person to contact.',
  'Write to them, make the call, sit in on the demo and write the follow up.',
  'Log each conversation so the next one starts with what we learned.',
];

const TERMS = [
  'Months 1 to 3 are unpaid. You work full days in our Bengaluru office. If you are still in college, we will work around your classes.',
  'If it is not working, either of us can say so in the first month. At the end of month three we tell you whether you are continuing.',
  'From month 4, you move to a stipend of 15,000 to 20,000 a month.',
  'We offer a full time role once you are doing the work of one. There is no fixed date for that, and we will tell you where you stand along the way.',
];

const LOOK_FOR = [
  'You have built something nobody asked you to, such as a bot, a club, or a tool your college fest ran on.',
  'You can explain in plain words how a company you admire makes money.',
  'You write programs that work, and you can read and debug code someone else wrote.',
  'You keep going when nothing has worked for twenty minutes.',
  'You can explain your reasoning step by step, say which step you are unsure of, and change your mind when someone has a better argument.',
  'You listen more than you talk, and you can tell a polite no from a firm one.',
  'You can hear no on ten calls and still be friendly on the eleventh.',
  'When something breaks, you come with two possible fixes and say which one you would pick.',
  'You say "I do not know, I will find out", and then you do. We sell audit evidence, so we need people who are straight about gaps.',
];

const BEFORE = [
  'The first three months are unpaid. Decide whether you can manage that before you spend three hours on the task.',
  'Many calls are cold calls, and most of them end in a no.',
  'The team is small, so everyone sees your work.',
  'We tell you directly when your work is wrong, and when it is good.',
  'We do not promise a full time offer up front.',
];

const RECORDS_FILE = '/careers/fde-intern/customer-records.csv';

const FOUR_THINGS: [string, React.ReactNode][] = [
  ['A program.', (
    <>
      Download the{' '}
      <a
        href={RECORDS_FILE}
        download
        className="text-brand-blue font-semibold underline decoration-brand-blue/30 underline-offset-2 hover:decoration-brand-blue"
      >
        customer records file
      </a>{' '}
      (CSV, 254 rows). It is messy, with duplicates, typos, and the same person written several ways. Write a program that groups the records belonging to the same person. Add a short note on the decisions you made and where your approach would fail. Our product solves a larger version of this problem.
    </>
  )],
  ['Under 200 words on a company.', 'Pick any company. Explain how it makes money and one thing you would change.'],
  ['A 90 second voice note.', 'Pitch us anything, or tell us about a time someone said no to you and what you did next. Do not read from a script.'],
  ['A question you could not answer.', 'Something you tried to look up recently and could not find.'],
];

const NEXT_STEPS = [
  'Someone on the team reads your task. You hear back either way.',
  'Within a week, a 30 minute call about your code, your reasoning, and what you want from the internship.',
  'A half day with us, working on one real item and sitting in on calls.',
  'Within two days of that, a yes or no, with the reason.',
];

const ATTACHMENTS = [
  { Icon: FileCode2, name: 'record-grouping.zip', meta: 'Program and notes' },
  { Icon: FileText, name: 'company.txt', meta: '186 words' },
  { Icon: Mic, name: 'voice-note.m4a', meta: '1:30' },
  { Icon: CircleHelp, name: 'question.txt', meta: '1 question' },
];

/** Illustration of a complete application email. Not a form. */
function SampleEmail() {
  return (
    <figure className="my-8">
      <div
        role="img"
        aria-label={`Example application email to ${CAREERS_EMAIL}, with your name, phone number, city, links, and four attachments`}
        className="rounded-xl ring-1 ring-black/[0.08] bg-white shadow-xl shadow-brand-blue/[0.06] overflow-hidden text-[14px] leading-normal"
      >
        <div aria-hidden className="flex items-center gap-1.5 px-4 py-2.5 bg-brand-mist/60 border-b border-black/[0.06]">
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-brand-ink/15" />
          <span className="ml-3 text-xs text-brand-ink/50">New message</span>
        </div>

        <div aria-hidden>
          <div className="px-4 md:px-5 py-2 border-b border-black/[0.05] flex gap-3">
            <span className="text-brand-ink/45 w-14 shrink-0">To</span>
            <span className="text-brand-ink">{CAREERS_EMAIL}</span>
          </div>
          <div className="px-4 md:px-5 py-2 border-b border-black/[0.05] flex gap-3">
            <span className="text-brand-ink/45 w-14 shrink-0">Subject</span>
            <span className="text-brand-ink font-semibold">{TITLE}</span>
          </div>

          <div className="px-4 md:px-5 py-4 space-y-3 text-brand-ink/80">
            <p>Hi Greyquill,</p>
            <p>My application is attached.</p>
            <dl className="grid grid-cols-[auto_1fr] gap-x-3 gap-y-1.5">
              <dt className="flex items-center gap-2 text-brand-ink/45"><User className="h-3.5 w-3.5" />Name</dt>
              <dd>Your name</dd>
              <dt className="flex items-center gap-2 text-brand-ink/45"><Phone className="h-3.5 w-3.5" />Phone</dt>
              <dd>+91 98xxx xxxxx</dd>
              <dt className="flex items-center gap-2 text-brand-ink/45"><MapPin className="h-3.5 w-3.5" />City</dt>
              <dd>Your city</dd>
              <dt className="flex items-center gap-2 self-start text-brand-ink/45"><Link2 className="h-3.5 w-3.5" />Links</dt>
              <dd className="text-brand-blue break-all">
                github.com/you
                <br />
                linkedin.com/in/you
                <br />
                something-you-built.app
              </dd>
            </dl>
          </div>

          <div className="px-4 md:px-5 pb-5">
            <div className="flex items-center gap-1.5 text-xs text-brand-ink/50 mb-2">
              <Paperclip className="h-3.5 w-3.5" />4 attachments
            </div>
            <div className="grid sm:grid-cols-2 gap-2">
              {ATTACHMENTS.map(({ Icon, name, meta }) => (
                <div key={name} className="flex items-center gap-3 rounded-lg ring-1 ring-black/[0.07] bg-brand-mist/30 px-3 py-2">
                  <span className="h-8 w-8 rounded-md bg-brand-blue/10 text-brand-blue flex items-center justify-center shrink-0">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-brand-ink truncate">{name}</span>
                    <span className="block text-xs text-brand-ink/50">{meta}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-sm text-brand-ink/55 text-center">
        Roughly what a complete application looks like.
      </figcaption>
    </figure>
  );
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-xl md:text-2xl text-brand-ink leading-tight mt-12 mb-4">
      {children}
    </h2>
  );
}

function H3({ children }: { children: React.ReactNode }) {
  return <h3 className="font-semibold text-brand-ink mt-6 mb-2">{children}</h3>;
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="list-disc pl-5 space-y-2 marker:text-brand-ink/35">
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  );
}

export default function FdeInternPage() {
  const mailto = `mailto:${CAREERS_EMAIL}?subject=${encodeURIComponent(TITLE)}`;
  const applyButton = (
    <a
      href={mailto}
      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-ink text-white font-semibold text-sm hover:bg-brand-blue transition-colors"
    >
      Apply by email
    </a>
  );

  return (
    <article className="mx-auto max-w-3xl px-5 md:px-8 pt-10 md:pt-14 pb-8 text-brand-ink/85 text-[16px] leading-[1.7]">
      <Link href="/careers" className="text-sm text-brand-ink/55 hover:text-brand-blue transition-colors">
        ← All openings
      </Link>

      <header className="mt-6 pb-8 border-b border-black/[0.08]">
        <h1 className="font-display font-semibold text-3xl md:text-4xl leading-tight tracking-tight text-brand-ink">
          {TITLE}
        </h1>
        <p className="mt-3 text-[15px] text-brand-ink/60">
          Greyquill Software · {META.join(' · ')}
        </p>
        <div className="mt-6">{applyButton}</div>
      </header>

      <H2>About Greyquill</H2>
      <p>
        Greyquill builds governance software for companies whose decisions get
        audited, in financial services, insurance, retail, telecom and
        healthcare. When a regulator or a board asks why an AI system made a
        decision, our software gives them the evidence.
      </p>

      <H2>About the role</H2>
      <div className="space-y-4">
        <p>
          We are a small team hiring two people early in their careers. You
          will split your week between engineering and sales.
        </p>
        <p>
          We think each makes you better at the other. An engineer who has
          heard a prospect say &quot;we already have a data catalogue&quot;
          builds different features. Someone who has read the code describes
          the product more accurately.
        </p>
      </div>

      <H2>What you will do</H2>
      <H3>Engineering</H3>
      <Bullets items={ENGINEERING} />
      <H3>Sales</H3>
      <Bullets items={SALES} />

      <H2>Pay and terms</H2>
      <Bullets items={TERMS} />

      <H2>What we look for</H2>
      <p className="mb-4">
        Where you studied matters less to us than what you have done.
      </p>
      <Bullets items={LOOK_FOR} />

      <H2>Before you apply</H2>
      <Bullets items={BEFORE} />

      <H2>How to apply</H2>
      <p className="mb-4">
        There is no resume in the first round. Send us these four things. They
        take about three hours.
      </p>
      <ol className="list-decimal pl-5 space-y-3 marker:text-brand-ink/50">
        {FOUR_THINGS.map(([title, body]) => (
          <li key={title}>
            <span className="font-semibold text-brand-ink">{title}</span> {body}
          </li>
        ))}
      </ol>
      <p className="mt-4">
        You can use AI tools, and please tell us which ones and how. In the
        call we will go through your code together and ask you to change part
        of it while we watch. Send something you can explain line by line.
      </p>
      <p className="mt-4">
        Include your name, phone number, the city you live in, and any links
        you want us to see, such as GitHub, LinkedIn, or something you have
        built that is live.
      </p>
      <SampleEmail />
      <p className="text-[14.5px] text-brand-ink/60">
        We keep your application so we can contact you about this role or a
        later one. Ask us to delete it and we will.
      </p>

      <H2>What happens next</H2>
      <ol className="list-decimal pl-5 space-y-2 marker:text-brand-ink/50">
        {NEXT_STEPS.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ol>

      <div className="mt-12 pt-8 border-t border-black/[0.08] flex flex-wrap items-center gap-4">
        {applyButton}
        <span className="text-sm text-brand-ink/60">{CAREERS_EMAIL}</span>
      </div>
    </article>
  );
}
