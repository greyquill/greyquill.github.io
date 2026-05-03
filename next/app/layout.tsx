import type { Metadata } from 'next';
import { display, body } from './fonts';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NavigationTracker from '@/components/NavigationTracker';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://greyquill.io'),
  title: {
    default: 'Greyquill Software · Governed AI for regulated enterprises',
    template: '%s · Greyquill Software',
  },
  description:
    'We help regulated enterprises ship trusted, governed AI by fixing the data foundation first. Utilizing Products, accelerators, and senior advisors to assist Heads of AI, CDOs, and Chief Risk Officers in htier AI journey.',
  openGraph: {
    type: 'website',
    siteName: 'Greyquill',
    locale: 'en_US',
    url: 'https://greyquill.io',
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`} suppressHydrationWarning>
      <body className="min-h-dvh flex flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 z-50 bg-brand-blue text-white px-3 py-2 rounded"
        >
          Skip to main content
        </a>
        <NavigationTracker />
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
