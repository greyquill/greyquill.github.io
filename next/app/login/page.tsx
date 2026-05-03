import type { Metadata } from 'next';

const PORTAL_URL = 'https://portal.greyquill.io/login';

export const metadata: Metadata = {
  title: 'Employee login · Greyquill',
  description: 'Greyquill employees, sign in at portal.greyquill.io.',
  robots: { index: false, follow: false },
  alternates: { canonical: PORTAL_URL },
  // Server-side redirects do not exist under static export. The
  // meta-refresh below handles the redirect at the static HTML level.
  other: {
    'http-equiv': 'refresh',
    content: `0; url=${PORTAL_URL}`,
  },
};

export default function LoginRedirectPage() {
  return (
    <>
      {/* Belt-and-suspenders: if metadata's other={} does not project the
       *  meta tag in time, this one definitely will. */}
      <meta httpEquiv="refresh" content={`0; url=${PORTAL_URL}`} />
      <main className="min-h-[60vh] flex items-center justify-center px-6 py-24 text-center">
        <div className="max-w-md">
          <h1 className="font-display text-2xl text-brand-ink mb-3">
            Redirecting to the employee portal.
          </h1>
          <p className="text-brand-ink/70 leading-relaxed">
            If you are not redirected,{' '}
            <a
              href={PORTAL_URL}
              className="text-brand-blue font-semibold hover:text-brand-blue-dark underline-offset-4 hover:underline"
            >
              open portal.greyquill.io
            </a>
            .
          </p>
        </div>
      </main>
    </>
  );
}
