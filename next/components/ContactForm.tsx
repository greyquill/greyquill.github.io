'use client';

import { useState } from 'react';
import { WEB3FORMS_KEY } from '@/lib/links';

type FormState = {
  name: string;
  email: string;
  inquiryType: 'general' | 'services' | 'quote' | 'technical' | 'other';
  message: string;
};

const INITIAL: FormState = {
  name: '',
  email: '',
  inquiryType: 'general',
  message: '',
};

const INQUIRY_OPTIONS: { value: FormState['inquiryType']; label: string }[] = [
  { value: 'general', label: 'General question' },
  { value: 'services', label: 'Services information' },
  { value: 'quote', label: 'Request a quote' },
  { value: 'technical', label: 'Technical support' },
  { value: 'other', label: 'Other' },
];

const INQUIRY_LABEL: Record<FormState['inquiryType'], string> =
  Object.fromEntries(INQUIRY_OPTIONS.map((o) => [o.value, o.label])) as Record<
    FormState['inquiryType'],
    string
  >;

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL);
  const [submitted, setSubmitted] = useState(false);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [botField, setBotField] = useState('');

  const update = (field: keyof FormState) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    if (botField) {
      // Honeypot tripped — pretend success without sending.
      setSubmitted(true);
      setForm(INITIAL);
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
          subject: `Greyquill website inquiry: ${INQUIRY_LABEL[form.inquiryType]}`,
          inquiry_type: INQUIRY_LABEL[form.inquiryType],
          message: form.message,
          from_name: 'Greyquill website',
          botcheck: botField,
        }),
      });
      const data = (await res.json()) as { success?: boolean; message?: string };
      if (!data.success) {
        throw new Error(data.message ?? 'Submission failed.');
      }
      setSubmitted(true);
      setForm(INITIAL);
    } catch (err) {
      const msg =
        err instanceof Error ? err.message : 'Something went wrong. Please try again.';
      setError(msg);
    } finally {
      setPending(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl ring-1 ring-black/[0.06] bg-white p-8 md:p-10 text-center">
        <div
          aria-hidden
          className="mx-auto mb-5 h-12 w-12 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center text-2xl"
        >
          ✓
        </div>
        <h3 className="font-display text-2xl text-brand-ink mb-3">Thank you.</h3>
        <p className="text-brand-ink/70 leading-relaxed mb-6 max-w-md mx-auto">
          Your message has been received. We will get back to you within one business day.
        </p>
        <button
          type="button"
          onClick={() => {
            setSubmitted(false);
            setError(null);
          }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark transition-colors"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-2xl ring-1 ring-black/[0.06] bg-white p-6 md:p-8"
    >
      {/* Honeypot — hidden from real users, often filled by bots. */}
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
          <label htmlFor="name" className="block text-sm font-medium text-brand-ink mb-2">
            Your name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            value={form.name}
            onChange={update('name')}
            placeholder="Jane Doe"
            className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-brand-ink mb-2">
            Email address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            value={form.email}
            onChange={update('email')}
            placeholder="jane@example.com"
            className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="inquiryType" className="block text-sm font-medium text-brand-ink mb-2">
          Inquiry type
        </label>
        <select
          id="inquiryType"
          name="inquiryType"
          value={form.inquiryType}
          onChange={update('inquiryType')}
          className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors"
        >
          {INQUIRY_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-sm font-medium text-brand-ink mb-2">
          Your message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={form.message}
          onChange={update('message')}
          placeholder="Tell us about what you are trying to ship and what is in the way."
          className="w-full px-4 py-2.5 rounded-md border border-black/[0.12] bg-white text-brand-ink placeholder:text-brand-ink/35 focus:outline-none focus:ring-2 focus:ring-brand-blue/40 focus:border-brand-blue transition-colors resize-y"
        />
      </div>

      {error && (
        <div
          role="alert"
          className="mb-4 rounded-md bg-rose-50 ring-1 ring-rose-200 text-rose-800 text-sm px-4 py-3 leading-relaxed"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        disabled={pending}
        className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-brand-blue text-white font-semibold text-sm hover:bg-brand-blue-dark hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-blue/20 transition-all duration-300 ease-out-expo disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-none"
      >
        {pending ? 'Sending…' : 'Submit inquiry'}
        <span aria-hidden>{pending ? '' : '→'}</span>
      </button>
    </form>
  );
}
