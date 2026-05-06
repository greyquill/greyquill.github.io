'use client';

/**
 * Hero chat assistant. Functional input: visitors can type a real
 * question, see their message, get a placeholder response.
 *
 * Backend is intentionally absent. When it lands, replace the
 * `submitQuestion` body with a real API call (likely an SSE/streaming
 * route) and remove the canned response.
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

type Message = { role: 'user' | 'bot'; text: string };

const SUGGESTIONS = [
  'How does the Greyquill Method work?',
  'What does GQData do?',
  'Do you work in regulated industries?',
];

const PLACEHOLDER_ANSWER =
  "Thanks for asking. We're still wiring up the assistant to our knowledge base. The fastest way to a real answer is a 30-minute discovery call, or drop us a line through the contact form. We'll respond personally.";

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
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

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
    el.style.height = `${Math.min(Math.max(el.scrollHeight, 56), 160)}px`;
  }, [input]);

  async function submitQuestion(q: string) {
    if (!q.trim() || thinking) return;
    setMessages((m) => [...m, { role: 'user', text: q.trim() }]);
    setInput('');
    setThinking(true);

    // TODO(backend): replace with a real call to the assistant endpoint.
    await new Promise((r) => setTimeout(r, 1300));

    setMessages((m) => [...m, { role: 'bot', text: PLACEHOLDER_ANSWER }]);
    setThinking(false);
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
          'relative rounded-2xl overflow-hidden ring-1 ring-white/55 shadow-2xl shadow-brand-blue/10',
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
              <span className="font-display font-semibold text-sm text-brand-ink">
                Ask us anything
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
                Curious about our products, method, or industries? Start with one of these or type your own.
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
                    <div
                      className={
                        m.role === 'user'
                          ? 'bg-brand-blue text-white rounded-2xl rounded-tr-md px-4 py-2.5 max-w-[85%] text-sm leading-snug shadow-md shadow-brand-blue/20'
                          : 'bg-brand-mist/70 rounded-2xl rounded-tl-md px-4 py-2.5 max-w-[85%] text-sm text-brand-ink leading-relaxed'
                      }
                    >
                      {m.text}
                    </div>
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
                  <span>Thinking</span>
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
              : 'px-3 py-2.5 border-t border-white/40 bg-white/30'
          }
        >
          <div className="flex items-end gap-2">
            <textarea
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask about models, data freshness, evidence, controls. Or anything else about your business."
              rows={2}
              disabled={thinking}
              aria-label="Your question"
              className="composer-input flex-1 bg-transparent text-sm text-brand-ink placeholder:text-brand-ink/40 outline-none resize-none px-2 py-2 leading-snug min-h-[56px]"
              style={{ scrollbarWidth: 'none' }}
            />
            <button
              type="submit"
              disabled={!input.trim() || thinking}
              aria-label="Send"
              className="inline-flex items-center justify-center h-8 w-8 rounded-full bg-brand-blue text-white disabled:bg-brand-ink/15 disabled:text-brand-ink/40 transition-all duration-200 ease-out-expo hover:bg-brand-blue-dark disabled:hover:bg-brand-ink/15 enabled:hover:-translate-y-0.5 enabled:hover:shadow-md enabled:hover:shadow-brand-blue/30"
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
