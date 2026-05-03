'use client';

import { useRef, useState } from 'react';
import { WEB3FORMS_KEY } from '@/lib/links';

/**
 * Gated download form for the architecture + governance brief PDF.
 *
 * Lighter than ContactForm by design (name + email + company + role
 * only). On submit it sends the lead to amarnath@greyquill.io via
 * Web3Forms in the background, then immediately triggers download of
 * the PDF from /public so the buyer is not gated past the form by a
 * "we will email it to you" delay.
 */

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const BRIEF_FILENAME = 'greyquill-platform-architecture-brief.pdf';

type FormState = {
  name: string;
  email: string;
  company: string;
  role: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  company: '',
  role: '',
};

export default function BriefDownloadForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState('');
  const downloadAnchorRef = useRef<HTMLAnchorElement>(null);

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  function triggerDownload() {
    const a = downloadAnchorRef.current;
    if (!a) return;
    a.click();
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (botField) {
      setSubmitted(true);
      setForm(INITIAL);
      triggerDownload();
      return;
    }

    setPending(true);
    try {
      const res = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          company: form.company,
          role: form.role,
          subject: `Brief download: ${form.name} (${form.company})`,
          from_name: 'Greyquill website · brief download',
          botcheck: botField,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!data.success) {
        throw new Error(data.message ?? 'Submission failed.');
      }
      setSubmitted(true);
      setForm(INITIAL);
      triggerDownload();
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      {/* Hidden download trigger. Anchor lives outside the conditional
         render so the ref is available across both states. */}
      <a
        ref={downloadAnchorRef}
        href={`/${BRIEF_FILENAME}`}
        download={BRIEF_FILENAME}
        className="hidden"
        aria-hidden
        tabIndex={-1}
      >
        Download brief
      </a>

      {submitted ? (
        <div className="rounded-2xl ring-1 ring-black/[0.06] bg-white p-8 md:p-10 text-center">
          <div
            aria-hidden
            className="mx-auto mb-5 h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl"
          >
            ✓
          </div>
          <h3 className="font-display text-2xl text-brand-ink mb-3">Your download is starting.</h3>
          <p className="text-brand-ink/70 leading-relaxed mb-6 max-w-md mx-auto">
            If it does not begin in a few seconds,{' '}
            <button
              type="button"
              onClick={triggerDownload}
              className="text-brand-blue hover:text-brand-blue-dark underline underline-offset-2"
            >
              click here to retry
            </button>
            . We have also noted your interest and will be in touch.
          </p>
        </div>
      ) : (
        <form
          onSubmit={onSubmit}
          className="rounded-2xl ring-1 ring-black/[0.06] bg-white p-6 md:p-8"
        >
          <input
            type="text"
            name="botcheck"
            value={botField}
            onChange={(e) => setBotField(e.target.value)}
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />

          <div className="grid md:grid-cols-2 gap-4 mb-4">
            <div>
              <label htmlFor="brief-name" className="block text-sm font-medium text-brand-ink mb-2">
                Your name
              </label>
              <input
                id="brief-name"
                type="text"
                required
                value={form.name}
                onChange={update('name')}
                placeholder="Jane Doe"
                className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="brief-email" className="block text-sm font-medium text-brand-ink mb-2">
                Work email
              </label>
              <input
                id="brief-email"
                type="email"
                required
                value={form.email}
                onChange={update('email')}
                placeholder="jane@company.com"
                className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-5">
            <div>
              <label htmlFor="brief-company" className="block text-sm font-medium text-brand-ink mb-2">
                Company
              </label>
              <input
                id="brief-company"
                type="text"
                required
                value={form.company}
                onChange={update('company')}
                placeholder="Acme Bank"
                className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
              />
            </div>
            <div>
              <label htmlFor="brief-role" className="block text-sm font-medium text-brand-ink mb-2">
                Your role
              </label>
              <input
                id="brief-role"
                type="text"
                required
                value={form.role}
                onChange={update('role')}
                placeholder="Head of AI / CISO / Internal Audit"
                className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
              />
            </div>
          </div>

          {error && (
            <div
              role="alert"
              className="mb-4 rounded-md bg-rose-50 ring-1 ring-rose-200 text-rose-800 text-sm px-4 py-3 leading-relaxed"
            >
              {error}
            </div>
          )}

          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="submit"
              disabled={pending}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 ease-out-expo disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
            >
              {pending ? 'Sending…' : 'Get the brief'}
              <span aria-hidden>{pending ? '' : '↓'}</span>
            </button>
            <p className="text-[12px] text-brand-ink/50 leading-snug">
              We will not pass your details to anyone. Used only so we know who is reading.
            </p>
          </div>
        </form>
      )}
    </>
  );
}
