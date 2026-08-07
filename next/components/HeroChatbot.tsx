'use client';

/**
 * Hero chat assistant.
 *
 * Retrieval runs against a static knowledge index built at deploy time from
 * the published site and Document Center, searched entirely in the visitor's
 * browser (see lib/knowledge/search.ts).
 *
 * The reply itself is composed by a hosted model (see lib/knowledge/generate.ts),
 * so the question and the matched passages do leave the device. That is
 * disclosed in the UI rather than glossed over: this assistant argues for
 * governed AI, so it has to be accurate about where the data goes.
 */

import {
  useEffect,
  useRef,
  useState,
  type FormEvent,
  type KeyboardEvent,
} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { easings } from '@/lib/motion';
import {
  answerById,
  askKnowledge,
  isKnowledgeReady,
  preloadKnowledge,
  type Confidence,
  type FollowUp,
  type Source,
  type Turn,
} from '@/lib/knowledge/search';
import { generateAnswer, isGenerationEnabled } from '@/lib/knowledge/generate';
import { nextStatus, type Phase } from '@/lib/knowledge/status';


/**
 * How many prior turns travel with a question.
 *
 * Enough for a visitor to say "and what does that cost?" three exchanges in,
 * short enough that the prompt stays small on a CPU-bound model where every
 * token of context costs measurable latency.
 */
const HISTORY_TURNS = 6;

/**
 * The conversation so far, in the shape retrieval and the model expect.
 *
 * Only settled text is included: a message still streaming would send the
 * model half of its own sentence.
 */
function conversationTurns(messages: Message[]): Turn[] {
  return messages
    .filter((m) => !m.pending && m.text.trim())
    .slice(-HISTORY_TURNS)
    .map((m) => ({
      role: m.role === 'user' ? ('user' as const) : ('assistant' as const),
      text: m.text,
    }));
}

type Message = {
  role: 'user' | 'bot';
  text: string;
  sources?: Source[];
  followUps?: FollowUp[];
  confidence?: Confidence;
  kind?: 'answer';
  /** Composed text is still streaming; links and chips stay hidden until it settles. */
  pending?: boolean;
  /**
   * The model wrote this text rather than it being served whole from the
   * index. A composed reply answers the question directly, so the uncertainty
   * caption below would contradict it.
   */
  composed?: boolean;
  /**
   * What a "Tell me more" tap would re-ask, and the passages to answer it
   * from. Present only while the offer is still open: it is cleared once
   * taken, so the same answer cannot be expanded twice.
   */
  expand?: { question: string; grounding: string[] };
  /** How long this answer took end to end, and what produced it. */
  timing?: { ms: number; engine: 'hosted' | 'index' };
};

/** Human-scale duration. Sub-second matters here, so milliseconds show. */
const took = (ms: number) => (ms < 1000 ? `${Math.round(ms)}ms` : `${(ms / 1000).toFixed(1)}s`);

/**
 * Shown above the retrieved text on the rare path where generation did not
 * produce anything usable, so the visitor is reading raw index content.
 *
 * `medium` used to carry "I'm not certain that's what you meant. The closest
 * thing we have:" and no longer does. That path shows a *curated* answer, which
 * is a written reply to a real question; a reranker that was merely less than
 * decisive about it is not grounds for telling the visitor it is probably
 * wrong. The hedge undermined good answers and bought nothing.
 *
 * `low` stays. That one really is raw page copy, written as prose for a page
 * rather than as an answer to anything, and presenting it as a reply without
 * saying so would be the misleading option.
 */
const HEDGE: Partial<Record<Confidence, string>> = {
  low: "I don't have a written answer for that. Here's the closest passage from our site:",
};

/**
 * Opening line only. Everything after the first tick comes from the rotating
 * catalog in lib/knowledge/status.ts, because one fixed label for the whole
 * wait reads as a spinner with a word on it.
 */
const LABEL_THINKING = 'Thinking';
/** How often the status line changes while the assistant is busy. */
const STATUS_ROTATE_MS = 2400;

const SUGGESTIONS = [
  'How does the Greyquill Method work?',
  'What does GQData do?',
  'Do you work in regulated industries?',
];

/** Shown only if the index or model genuinely fails to load. */
const ERROR_ANSWER =
  "Something went wrong reaching our knowledge base just now. A 30-minute discovery call is the fastest route to a real answer, or drop us a line through the contact form.";

const ERROR_SOURCES: Source[] = [
  { label: 'Book a discovery call', url: 'https://calendly.com/greyquill/30min' },
  { label: 'Contact us', url: '/contact/' },
];

type Props = {
  /**
   * `card` (default) is the embedded glass card used in the desktop hero.
   * `sheet` strips the outer card chrome and entry animation so the chat
   * UI fits inside an already-framed container (e.g. mobile bottom sheet).
   */
  variant?: 'card' | 'sheet';
};

export default function HeroChatbot({ variant = 'card' }: Props = {}) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [thinking, setThinking] = useState(false);
  const [busyLabel, setBusyLabel] = useState(LABEL_THINKING);
  /** Which family of status lines to draw from while busy. */
  const [phase, setPhase] = useState<Phase>('searching');
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);
  // Last matched topic, so a short follow-up ("what about healthcare?")
  // still retrieves against the subject under discussion.
  const topicRef = useRef<string | null>(null);
  /**
   * Whether the previous answer was grounded in a real match. A conversational
   * turn carries no subject, so merging it into the next retrieval query makes
   * the follow-up worse rather than better.
   */
  const groundedRef = useRef(true);


  /**
   * Rotate the status line while the assistant is busy.
   *
   * A single fixed label reads as a spinner with words on it. These describe
   * the stage the pipeline is genuinely in, and change often enough that the
   * wait feels like work happening rather than time passing.
   */
  useEffect(() => {
    if (!thinking) return;
    setBusyLabel(nextStatus(phase));
    const id = setInterval(() => setBusyLabel(nextStatus(phase)), STATUS_ROTATE_MS);
    return () => clearInterval(id);
  }, [thinking, phase]);

  // Fetch the index and embedding model on idle. Nothing blocks on this:
  // a question asked before it finishes simply waits on the same promises.
  useEffect(() => {
    preloadKnowledge();
  }, []);

  /**
   * Return focus to the input once an answer has settled.
   *
   * Mid-conversation the next thing a visitor wants is to type again, and
   * having to click back into the box each turn is friction the assistant
   * itself created by taking focus during the wait.
   *
   * Two guards make this polite rather than pushy. If anything else already
   * holds focus, the visitor put it there on purpose (a source link, a
   * follow-up chip) and it is left alone. And on touch
   * devices focusing the field summons the on-screen keyboard, which covers
   * the answer they were about to read, so it only runs where there is a real
   * pointer.
   */
  useEffect(() => {
    if (thinking || messages.length === 0) return;
    if (messages[messages.length - 1]?.pending) return;
    if (typeof window === 'undefined') return;
    if (!window.matchMedia?.('(pointer: fine)').matches) return;

    const active = document.activeElement;
    if (active && active !== document.body && active !== inputRef.current) return;

    inputRef.current?.focus();
  }, [thinking, messages]);

  // Keep the message list pinned to the bottom as it grows
  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
  }, [messages, thinking]);

  // Auto-grow the textarea: starts at 2 rows, grows up to ~6 rows.
  // Scrollbar is hidden via CSS (see className) so the box stays clean.
  useEffect(() => {
    const el = inputRef.current;
    if (!el) return;
    el.style.height = 'auto';
    el.style.height = `${Math.min(Math.max(el.scrollHeight, 36), 160)}px`;
  }, [input]);

  async function submitQuestion(q: string) {
    if (!q.trim() || thinking) return;
    setMessages((m) => [...m, { role: 'user', text: q.trim() }]);
    setInput('');
    setPhase(isKnowledgeReady() ? 'searching' : 'warming');
    setThinking(true);
    // Started here rather than around the fetch, so it measures what the
    // visitor actually waited for: retrieval, generation and all.
    const startedAt = performance.now();

    try {
      // The conversation so far, so retrieval can widen on a follow-up and the
      // model can resolve what "it" or "they" refers to.
      const history = conversationTurns(messages);
      const reply = await askKnowledge(q, history, groundedRef.current);
      topicRef.current = reply.topic;
      // Set on every path, including the verbatim one that never composes, or
      // a curated answer would leave the flag reading whatever came before it.
      groundedRef.current = reply.confidence !== 'none';

      // Generation composes a reply to the question actually asked, grounded
      // in the passages retrieval selected. It only ever replaces the retrieved
      // text after succeeding, so a failure is invisible.
      // `verbatim` is excluded deliberately. On a near-verbatim match the
      // curated answer was written for this exact question, so composing can
      // only paraphrase copy we already wrote, and it costs the visitor the
      // whole generation wait to do it. Answering instantly from the bank is
      // both the better text and the fastest reply in the system.
      const canCompose =
        isGenerationEnabled() &&
        reply.kind === 'answer' &&
        !reply.verbatim &&
        !!reply.grounding?.length;

      const index = messages.length + 1;
      setMessages((m) => [
        ...m,
        {
          role: 'bot',
          // Empty while composing. Showing the retrieved text here would put a
          // visibly wrong answer on screen for the whole generation wait and
          // then swap it, which reads worse than waiting.
          text: canCompose ? '' : reply.text,
          sources: reply.sources,
          followUps: reply.followUps,
          confidence: reply.confidence,
          kind: reply.kind,
          // Hold links and chips back until the composed text settles, so the
          // answer does not visibly reflow underneath them.
          pending: canCompose,
          // A curated answer skips generation, but there is usually more
          // material behind it, so the offer to go deeper still stands.
          expand:
            reply.verbatim && (reply.grounding?.length ?? 0) > 1
              ? { question: q, grounding: reply.grounding! }
              : undefined,
          // Answered from the index alone, so there is a number to show right
          // away. Composed answers get theirs once the text settles.
          timing: canCompose
            ? undefined
            : { ms: performance.now() - startedAt, engine: 'index' },
        },
      ]);

      if (canCompose) {
        // The wait is the model writing, which on the self-hosted box takes
        // real seconds. Keep the indicator up until words actually appear.
        setPhase('writing');
        const composed = await generateAnswer(
              q,
              reply.grounding!,
              (partial) => {
                setThinking(false);
                setMessages((m) =>
                  m.map((msg, i) => (i === index ? { ...msg, text: partial } : msg)),
                );
              },
              history,
            );

        const elapsed = performance.now() - startedAt;
        // Whether retrieval actually found something. On a miss the model still
        // answers, and answers well, but nothing it said came from a page.
        const grounded = reply.confidence !== 'none';

        setMessages((m) =>
          m.map((msg, i) =>
            i === index
              ? {
                  ...msg,
                  text: composed ?? reply.text,
                  pending: false,
                  composed: composed !== null,
                  // Links and chips belong to the retrieved answer, and when
                  // nothing was retrieved they belong to the fallback sentence
                  // rather than to whatever the model wrote instead. Left
                  // attached, a greeting arrived carrying "Book a discovery
                  // call", which reads as a company that cannot say hello
                  // without selling.
                  sources: grounded ? msg.sources : [],
                  followUps: grounded ? msg.followUps : [],
                  // Offer the longer version only when there is genuinely more
                  // to say: a real match, and unused material behind it. On a
                  // greeting the grounding is arbitrary passages, so expanding
                  // would invent a second paragraph about nothing.
                  expand:
                    composed && grounded && (reply.grounding?.length ?? 0) > 1
                      ? { question: q, grounding: reply.grounding! }
                      : undefined,
                  timing: { ms: elapsed, engine: 'hosted' as const },
                }
              : msg,
          ),
        );
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: ERROR_ANSWER, sources: ERROR_SOURCES },
      ]);
    } finally {
      setThinking(false);
    }
  }

  /**
   * "Tell me more": re-ask the same question against the same passages, with
   * the model allowed a longer answer.
   *
   * Retrieval does not run again. The passages behind the short answer are
   * already the right ones, so re-retrieving would cost a second to arrive at
   * the same place. The offer is withdrawn as it is taken, so an answer cannot
   * be expanded repeatedly.
   */
  async function submitExpand(index: number) {
    const source = messages[index]?.expand;
    if (!source || thinking) return;

    setMessages((m) => m.map((msg, i) => (i === index ? { ...msg, expand: undefined } : msg)));
    setPhase('writing');
    setThinking(true);

    const target = messages.length;
    setMessages((m) => [...m, { role: 'bot', text: '', pending: true }]);

    try {
      const more = await generateAnswer(
        source.question,
        source.grounding,
        () => {},
        conversationTurns(messages),
        true,
      );
      setMessages((m) =>
        more
          ? m.map((msg, i) =>
              i === target ? { ...msg, text: more, pending: false, composed: true } : msg,
            )
          : // Nothing came back, so drop the placeholder rather than leaving an
            // empty bubble. The short answer above still stands on its own.
            m.filter((_, i) => i !== target),
      );
    } catch {
      setMessages((m) => m.filter((_, i) => i !== target));
    } finally {
      setThinking(false);
    }
  }

  /** Follow-up chips resolve by id, skipping retrieval entirely. */
  async function submitFollowUp(followUp: FollowUp) {
    if (thinking) return;
    setMessages((m) => [...m, { role: 'user', text: followUp.question }]);
    setPhase(isKnowledgeReady() ? 'searching' : 'warming');
    setThinking(true);

    try {
      const reply = await answerById(followUp.id);
      if (reply) {
        topicRef.current = reply.topic;
        setMessages((m) => [
          ...m,
          {
            role: 'bot',
            text: reply.text,
            sources: reply.sources,
            followUps: reply.followUps,
          },
        ]);
      }
    } catch {
      setMessages((m) => [
        ...m,
        { role: 'bot', text: ERROR_ANSWER, sources: ERROR_SOURCES },
      ]);
    } finally {
      setThinking(false);
    }
  }

  function handleSubmit(e?: FormEvent) {
    e?.preventDefault();
    submitQuestion(input);
  }

  function handleKey(e: KeyboardEvent<HTMLTextAreaElement>) {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      submitQuestion(input);
    }
  }

  const empty = messages.length === 0 && !thinking;
  const isSheet = variant === 'sheet';

  // Choose between the glass card chrome (hero) and a transparent
  // pass-through wrapper (sheet, where the parent provides the chrome).
  const Wrapper = isSheet ? 'div' : motion.div;
  const wrapperProps: Record<string, unknown> = isSheet
    ? { className: 'flex h-full flex-col' }
    : {
        initial: { y: 16, scale: 0.98 },
        animate: { y: 0, scale: 1 },
        transition: { duration: 0.7, delay: 0.4, ease: easings.outExpo },
        className:
          'relative z-10 rounded-2xl overflow-hidden ring-1 ring-white/55 shadow-2xl shadow-brand-blue/10',
        style: {
          background:
            'linear-gradient(180deg, rgba(214,234,247,0.55) 0%, rgba(186,217,238,0.42) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
        },
      };

  return (
    <div className={isSheet ? 'h-full' : 'relative w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-0'}>
      <Wrapper {...(wrapperProps as Record<string, never>)}>
        {!isSheet && (
          <>
            {/* Top-edge highlight, gives the glass a real reflective edge */}
            <div
              aria-hidden
              className="absolute inset-x-0 top-0 h-px"
              style={{
                background:
                  'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.9) 50%, transparent 100%)',
              }}
            />
            {/* Header */}
            <div className="flex items-center gap-2.5 px-5 py-3.5 border-b border-white/40">
              <span className="relative flex h-2 w-2" aria-hidden>
                <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
              </span>
              <span className="font-display font-semibold text-sm text-brand-ink whitespace-nowrap">
                Ask us anything
              </span>
              {/* Says what is actually answering. A company that sells
                  governed AI should not be vague about its own stack.

                  It no longer has to set expectations about the wait, which is
                  what the earlier wording was really for: answers took 17 to 33
                  seconds when this was written and now take under a second. */}
              <span className="ml-auto text-[9.5px] text-brand-ink/40 leading-tight text-right hidden sm:block">
                <span className="block uppercase tracking-wider text-brand-ink/30">
                  Powered by
                </span>
                {/* Replaced the old list once generation moved to the hosted
                    chain, which made four of its six phrases false: "a small
                    model", "minimal hardware", "no GPU" and "no API" all
                    described the Optiplex, now the last fallback rather than
                    the norm.

                    Both surviving claims are accurate. The harness is
                    everything around the model: browser-side retrieval, the
                    cross-encoder rerank, the grounding rules and the guards in
                    generate.ts. The knowledge management is the index itself,
                    built from the published site and Document Center and
                    searched entirely on the visitor's device. */}
                a custom harness and advanced
                <span className="block">knowledge management</span>
              </span>
            </div>
          </>
        )}

        {/* Messages */}
        <div
          ref={scrollRef}
          className={
            isSheet
              ? 'flex-1 min-h-0 overflow-y-auto flex flex-col gap-3.5 scroll-smooth px-1 py-3'
              : 'px-5 py-5 min-h-[420px] max-h-[520px] overflow-y-auto flex flex-col gap-3.5 scroll-smooth'
          }
        >
          {empty ? (
            <div className="flex flex-col gap-3">
              <p className="text-sm text-brand-ink/55 leading-relaxed">
                Ask me anything about our work. I answer from what we have published, and I will say so when we have not.
              </p>

              <div className="flex flex-col gap-2">
                {SUGGESTIONS.map((s, i) => (
                  <motion.button
                    key={s}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4, ease: easings.outExpo }}
                    onClick={() => submitQuestion(s)}
                    className="group/sug text-left text-[13px] text-brand-blue bg-brand-mist/50 hover:bg-brand-mist border border-brand-blue/15 hover:border-brand-blue/40 rounded-xl px-3.5 py-2.5 transition-all duration-200 ease-out-expo flex items-center justify-between gap-2"
                  >
                    <span>{s}</span>
                    <span aria-hidden className="text-brand-blue/60 transition-transform duration-200 ease-out-expo group-hover/sug:translate-x-0.5">→</span>
                  </motion.button>
                ))}
              </div>
            </div>
          ) : (
            <>
              <AnimatePresence initial={false}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, ease: easings.outExpo }}
                    className={
                      m.role === 'user' ? 'flex justify-end' : 'flex items-start gap-2.5'
                    }
                  >
                    {m.role === 'bot' && (
                      <div className="shrink-0 mt-1 h-7 w-7 rounded-full bg-brand-ink text-white flex items-center justify-center text-[11px] font-bold tracking-wider font-display">
                        G
                      </div>
                    )}
                    {m.role === 'user' ? (
                      <div className="bg-brand-blue text-white rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[85%] text-sm leading-snug shadow-md shadow-brand-blue/20">
                        {m.text}
                      </div>
                    ) : (
                      <div className="flex flex-col gap-2 max-w-[85%] min-w-0">
                        {!m.composed && !m.pending && m.confidence && HEDGE[m.confidence] && (
                          <p className="text-[12px] text-brand-ink/50 italic leading-snug">
                            {HEDGE[m.confidence]}
                          </p>
                        )}
                        {/* Empty only in the gap between the message being
                            created and the model's first word arriving. An
                            empty bubble next to the typing indicator reads as
                            a broken reply. */}
                        {m.text && (
                          <div className="bg-brand-mist/70 rounded-2xl rounded-tl-md px-4 py-2.5 text-sm text-brand-ink leading-relaxed whitespace-pre-line">
                            {m.text}
                          </div>
                        )}

                        {/* What it cost, and where it ran. A company arguing
                            that AI systems should evidence what they did can
                            afford to say how long its own answer took. */}
                        {m.timing && !m.pending && (
                          <p className="text-[11px] text-brand-ink/40 leading-snug">
                            {m.timing.engine === 'index' ? (
                              <>Answered from the index in your browser, {took(m.timing.ms)}.</>
                            ) : (
                              <>Retrieved here, composed in {took(m.timing.ms)}.</>
                            )}
                          </p>
                        )}

                        {/* Every answer traces back to a real page, so the
                            visitor can verify rather than take our word. */}
                        {!m.pending && !!m.sources?.length && (
                          <div className="flex flex-wrap gap-1.5">
                            {m.sources.map((s) => (
                              <a
                                key={s.url}
                                href={s.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1 text-[12px] text-brand-blue bg-white/70 hover:bg-white border border-brand-blue/20 hover:border-brand-blue/45 rounded-lg px-2.5 py-1.5 transition-all duration-200 ease-out-expo"
                              >
                                <span>{s.label}</span>
                                <span aria-hidden className="text-brand-blue/55">
                                  ↗
                                </span>
                              </a>
                            ))}
                          </div>
                        )}

                        {/* Answers stay to one sentence. Where there is more
                            in the retrieved passages, the offer is made once
                            and only acted on if taken. */}
                        {!m.pending && m.expand && (
                          <button
                            onClick={() => submitExpand(i)}
                            disabled={thinking}
                            className="self-start text-[12.5px] text-brand-blue/85 hover:text-brand-blue bg-transparent hover:bg-brand-mist/60 border border-brand-blue/20 hover:border-brand-blue/45 rounded-lg px-2.5 py-1.5 transition-all duration-200 ease-out-expo disabled:opacity-40"
                          >
                            Tell me more
                          </button>
                        )}

                        {!m.pending && !!m.followUps?.length && (
                          <div className="flex flex-col gap-1.5 pt-0.5">
                            {m.followUps.map((f) => (
                              <button
                                key={f.id}
                                onClick={() => submitFollowUp(f)}
                                disabled={thinking}
                                className="group/fu text-left text-[12.5px] text-brand-ink/75 hover:text-brand-blue bg-transparent hover:bg-brand-mist/60 border border-black/[0.07] hover:border-brand-blue/30 rounded-lg px-2.5 py-1.5 transition-all duration-200 ease-out-expo flex items-center justify-between gap-2 disabled:opacity-40"
                              >
                                <span>{f.question}</span>
                                <span
                                  aria-hidden
                                  className="text-brand-ink/35 group-hover/fu:text-brand-blue/60 transition-transform duration-200 ease-out-expo group-hover/fu:translate-x-0.5"
                                >
                                  →
                                </span>
                              </button>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </motion.div>
                ))}
              </AnimatePresence>

              {thinking && (
                <motion.div
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.25, ease: easings.outExpo }}
                  className="flex items-center gap-3 text-xs text-brand-ink/65 self-start pl-1"
                  aria-live="polite"
                >
                  <span className="flex gap-1" aria-hidden>
                    {[0, 1, 2].map((i) => (
                      <motion.span
                        key={i}
                        className="h-1.5 w-1.5 rounded-full bg-brand-blue"
                        animate={{ opacity: [0.25, 1, 0.25], scale: [0.85, 1.05, 0.85] }}
                        transition={{
                          duration: 1.0,
                          repeat: Infinity,
                          delay: i * 0.15,
                          ease: 'easeInOut',
                        }}
                      />
                    ))}
                  </span>
                  <span>{busyLabel}</span>
                </motion.div>
              )}
            </>
          )}
        </div>

        {/* Composer */}
        <form
          onSubmit={handleSubmit}
          className={
            isSheet
              ? 'px-1 py-2 border-t border-black/[0.08]'
              : 'px-3 py-3 border-t border-white/40 bg-white/30'
          }
        >
          {/* A visible field. Previously the textarea was transparent and
              borderless on the card background, so the placeholder read as
              body copy and nothing signalled that it could be typed in. */}
          <div className="flex items-center gap-1 rounded-2xl bg-white/85 border border-brand-blue/20 shadow-sm pl-1.5 pr-1.5 py-1.5 transition-all duration-200 focus-within:bg-white focus-within:border-brand-blue/50 focus-within:ring-2 focus-within:ring-brand-blue/15">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask a question…"
              rows={1}
              disabled={thinking}
              aria-label="Your question"
              className="composer-input flex-1 bg-transparent text-sm text-brand-ink placeholder:text-brand-ink/45 outline-none resize-none px-2.5 py-1.5 leading-snug min-h-[36px]"
              style={{ scrollbarWidth: 'none' }}
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send"
              className="inline-flex shrink-0 self-center items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white disabled:bg-brand-ink/15 disabled:text-brand-ink/40 transition-all duration-200 ease-out-expo hover:bg-brand-blue-dark disabled:hover:bg-brand-ink/15 enabled:hover:-translate-y-0.5 enabled:hover:shadow-md enabled:hover:shadow-brand-blue/30"
            >
              <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                <path d="M2 8 L 14 8 M 9 3 L 14 8 L 9 13" />
              </svg>
            </button>
          </div>
        </form>
      </Wrapper>
    </div>
  );
}
