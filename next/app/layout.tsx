import type { Metadata } from 'next';
import Script from 'next/script';
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
    'The platform regulated enterprises use to ship governed AI. Deployed in your environment, built on IBM foundations, so models ship in weeks and the audit answer is one query, not three weeks.',
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
      {/* Google Analytics 4 */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-Y2872QPYKZ"
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-Y2872QPYKZ');
        `}
      </Script>
      {/* Microsoft Clarity */}
      <Script id="clarity-init" strategy="afterInteractive">
        {`
          (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "wmggh15wj5");
        `}
      </Script>
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
