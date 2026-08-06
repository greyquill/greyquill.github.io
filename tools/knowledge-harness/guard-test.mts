import { fileURLToPath } from 'node:url';
/**
 * Throwaway: does the grounding guard reject the fabrications without
 * rejecting the correct answers? Uses real composed text from gen-run.log and
 * real grounding assembled the same way the runtime does.
 */
import { readFileSync } from 'node:fs';

const ROOT = fileURLToPath(new URL('../../next', import.meta.url));
const meta = JSON.parse(readFileSync(`${ROOT}/public/knowledge/meta.json`, 'utf8'));
const answerOf = (id: string) => meta.answers.find((a: any) => a.id === id).answer;

// Copied from lib/knowledge/generate.ts. Kept in sync by hand because the real
// one is not exported; if this drifts the test is worthless, so it is checked
// against the source below.
const src = readFileSync(`${ROOT}/lib/knowledge/generate.ts`, 'utf8');
for (const marker of ['FABRICATED_CLAIM', 'supportedByGrounding', 'NUMBER_WORDS']) {
  if (!src.includes(marker)) throw new Error(`generate.ts no longer defines ${marker}`);
}

const NUMBER_WORDS: Record<string, string> = {
  two: '2', three: '3', four: '4', five: '5', six: '6', seven: '7', eight: '8',
  nine: '9', ten: '10', eleven: '11', twelve: '12', thirteen: '13',
  fourteen: '14', fifteen: '15', sixteen: '16', seventeen: '17',
  eighteen: '18', nineteen: '19', twenty: '20',
};
function quantities(text: string) {
  const found = new Set<string>();
  for (const m of text.matchAll(/\d[\d,.]*/g)) {
    found.add(m[0].replace(/[,.]+$/, '').replace(/,/g, ''));
  }
  for (const [w, d] of Object.entries(NUMBER_WORDS)) {
    if (new RegExp(`\\b${w}\\b`, 'i').test(text)) found.add(d);
  }
  return found;
}
const FABRICATED_CLAIM =
  /\b(biggest|largest|main|top|key|primary|flagship)\s+(client|customer|account)\b|\bclients?\s+(include|are)\b|\bfree\s+for\s+(our\s+)?(customers?|clients?|users?)\b/i;

function supported(text: string, grounding: string[]) {
  const source = grounding.join(' ');
  if (/[$₹£€]/.test(text) && !/[$₹£€]/.test(source)) return false;
  if (FABRICATED_CLAIM.test(text) && !FABRICATED_CLAIM.test(source)) return false;
  const known = quantities(source);
  for (const q of quantities(text)) if (!known.has(q)) return false;
  return true;
}

type Case = { label: string; text: string; ground: string[]; expect: boolean };

const CASES: Case[] = [
  // --- must be rejected: fabrication observed in the live run ---
  {
    label: 'invented price list',
    text: 'GQData tier 1 (Foundation): $50 per month GQData tier 2 (Govern): $75 per month GQData tier 3 (Agents & GST Co-Pilot): $100 per month.',
    ground: [answerOf('what-is-gqdata'), answerOf('pricing')],
    expect: false,
  },
  {
    label: 'said the product is free',
    text: 'GQData is free for our customers who choose to use it as part of their data strategy; pricing varies based on usage, please contact us for more information.',
    ground: [answerOf('what-is-gqdata'), answerOf('pricing')],
    expect: false,
  },
  {
    label: 'agreed with a wrong number in the question',
    text: 'Yes, the GST Copilot performs three matching passes (1-3) to ensure accurate reconciliation between purchase register lines and GSTR-2B entries.',
    ground: [answerOf('gst-invoice-matching')],
    expect: false,
  },
  {
    label: 'invented a client',
    text: "Greyquill's biggest client is an international bank known for our robust compliance systems and a commitment to innovation in the financial sector.",
    ground: [answerOf('who-is-greyquill'), answerOf('customer-references')],
    expect: false,
  },

  // --- must survive: correct answers from the same run ---
  {
    label: 'banks answer, no digits',
    text: 'Yes, we work extensively with banks in their AI implementations, ensuring compliance with regulatory standards like RBI, SEBI, DPDP, FCA, PRA and FFIEC.',
    ground: [answerOf('industry-bfsi')],
    expect: true,
  },
  {
    label: 'compliance answer citing SOC 2',
    text: 'We ensure compliance by verifying controls against established frameworks like the EU AI Act, GDPR, and SOC 2, linking them directly to our policies.',
    ground: [answerOf('compliance-frameworks'), answerOf('what-is-gq-govern')],
    expect: true,
  },
  {
    label: 'data residency, no digits',
    text: 'No, we do not store or ship your raw data; it remains in place where you have set up the platform.',
    ground: [answerOf('data-residency')],
    expect: true,
  },
  {
    label: 'method answer with a real count',
    text: 'The Greyquill Method runs three sequenced phases: Foundation, Govern and Activate.',
    ground: [answerOf('method-overview')],
    expect: true,
  },
  {
    label: 'declines to price, correctly',
    text: 'We do not publish rates. Scope drives the number, so the team works it out with you on a call.',
    ground: [answerOf('pricing')],
    expect: true,
  },
  {
    label: 'prose "one" must not count as a claim',
    text: 'Govern is one layer of the platform, and it turns your rules into controls the system can prove it followed.',
    ground: [answerOf('what-is-gq-govern')],
    expect: true,
  },
  {
    label: 'discovery call with its real duration',
    text: 'The fastest route is a 30-minute discovery call with the team.',
    ground: [answerOf('how-to-start')],
    expect: true,
  },
];

let bad = 0;
for (const c of CASES) {
  const got = supported(c.text, c.ground);
  const ok = got === c.expect;
  if (!ok) bad++;
  console.log(
    `${ok ? 'ok  ' : 'BAD '} ${c.expect ? 'keep  ' : 'reject'} -> ${got ? 'kept  ' : 'rejected'}  ${c.label}`,
  );
}
console.log(`\n${CASES.length - bad}/${CASES.length} correct`);
