/**
 * Records each completed turn, so we can see what visitors actually ask.
 *
 * This lives in the browser rather than on the server because that is the only
 * place the whole conversation exists. Retrieval runs here, so a curated
 * answer, a follow-up chip and an expansion never reach the service at all,
 * and counting requests there would have shown the questions we answered worst
 * while hiding every one we answered best.
 *
 * Everything here is best effort. A blocked request, an ad blocker, a closed
 * tab or a dead service loses the record and changes nothing the visitor sees.
 */

const ENDPOINT = process.env.NEXT_PUBLIC_ASSISTANT_URL ?? '';

/** Which path produced the answer. */
export type Route =
  /** Composed by the model from retrieved passages. */
  | 'composed'
  /** Near-verbatim match, served from the curated bank without generating. */
  | 'verbatim'
  /** Retrieved text shown as-is: generation was off, or it failed. */
  | 'index'
  /** A follow-up chip, resolved by id with no retrieval and no network. */
  | 'followup'
  /** "Tell me more" against the passages behind an existing answer. */
  | 'expand'
  /** Retrieval or generation threw, and the visitor saw the error copy. */
  | 'error';

export type TurnRecord = {
  route: Route;
  question: string;
  answer: string;
  confidence?: string;
  kind?: string;
  entry?: string;
  provider?: string;
  grounded?: boolean;
  ms?: number;
  sources?: string[];
};

/**
 * A conversation, not a visitor.
 *
 * sessionStorage rather than localStorage on purpose. It gives exactly what
 * reading the log needs, which is knowing that six questions were one person
 * working through a topic, and it expires with the tab rather than following
 * anyone between visits.
 */
const SESSION_KEY = 'gq.chat.session';

/**
 * The same browser across visits, so a conversation can be recognised as the
 * second one somebody has had. localStorage, first party, never sent anywhere
 * but our own service, and it identifies a browser rather than a person.
 */
const VISITOR_KEY = 'gq.chat.visitor';

let session = '';
let turn = 0;

function randomId(): string {
  return typeof crypto !== 'undefined' && crypto.randomUUID
    ? crypto.randomUUID().slice(0, 18)
    : Math.random().toString(36).slice(2, 12) + Math.random().toString(36).slice(2, 10);
}

/**
 * An id held in the given store, minted on first use.
 *
 * Every storage call is guarded. Safari in private mode and a third-party
 * partitioned context both throw on access rather than returning null, and an
 * exception here would take the answer down with it.
 */
function heldId(store: () => Storage, key: string, memo: string): string {
  if (memo) return memo;
  try {
    const held = store().getItem(key);
    if (held) return held;
  } catch {
    // Storage unavailable. An in-memory id still groups this page.
  }
  const minted = randomId();
  try {
    store().setItem(key, minted);
  } catch {
    // As above.
  }
  return minted;
}

function sessionId(): string {
  session = heldId(() => sessionStorage, SESSION_KEY, session);
  return session;
}

/**
 * What the browser knows about where it is, which the edge cannot always tell
 * us. The timezone is the useful one: it survives a VPN, and it separates
 * Asia/Kolkata from Asia/Dubai when the address says neither.
 */
function context() {
  const safely = <T>(fn: () => T, fallback: T): T => {
    try {
      return fn();
    } catch {
      return fallback;
    }
  };
  return {
    tz: safely(() => Intl.DateTimeFormat().resolvedOptions().timeZone, ''),
    lang: safely(() => navigator.language, ''),
    screen: safely(() => `${window.innerWidth}x${window.innerHeight}`, ''),
    visitor: heldId(() => localStorage, VISITOR_KEY, ''),
  };
}

export function logTurn(record: TurnRecord): void {
  if (!ENDPOINT || typeof window === 'undefined') return;

  turn += 1;
  const body = JSON.stringify({
    session: sessionId(),
    turn,
    page: location.pathname,
    referrer: document.referrer,
    ...context(),
    ...record,
  });

  try {
    void fetch(`${ENDPOINT}/log`, {
      method: 'POST',
      // No Content-Type header, deliberately. A JSON one would make this a
      // non-simple request and buy a preflight OPTIONS round trip per turn,
      // to declare something the service does not read. As a plain string
      // body the browser sends text/plain and skips the preflight entirely.
      body,
      // Survives the visitor closing the tab on the last answer, which is
      // exactly the turn worth having.
      keepalive: true,
    }).catch(() => {});
  } catch {
    // Never allow a logging failure to reach the visitor.
  }
}
