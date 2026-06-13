/**
 * app/layout.jsx
 * Root layout — wraps every page with Navigation, Footer,
 * CustomCursor, and Loading screen. Sets global SEO metadata.
 */

import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';
import LoadingWrapper from '@/components/loading/LoadingWrapper';

export const metadata = {
  title: {
    default: 'Lex India — Premier Legal Platform',
    template: '%s | Lex India',
  },
  description:
    "India's leading legal technology platform for law students, practicing lawyers, and clients seeking expert legal services.",
  keywords: [
    'law firm india', 'legal services india', 'law students resources',
    'case laws india', 'bare acts', 'advocate near me', 'lawyer consultation',
    'IPC', 'CrPC', 'constitution of india', 'supreme court india',
  ],
  authors: [{ name: 'Lex India Law Chambers' }],
  creator: 'Lex India',
  publisher: 'Lex India Law Chambers',
  metadataBase: new URL('https://www.legalgroup.in'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://www.legalgroup.in',
    siteName: 'Lex India',
    title: 'Lex India — Justice · Knowledge · Integrity',
    description: "India's premier legal platform for students, lawyers & clients.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'Lex India' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lex India — Legal Excellence',
    description: "India's premier legal platform.",
    images: ['/images/og-image.jpg'],
  },
  robots: {
    index: true, follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/*
          Theme init script — runs before paint so there is NO flash of
          wrong theme on reload. Reads localStorage, falls back to OS preference.
        */}
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              var saved = localStorage.getItem('lex-theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          })();
        `}} />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;0,900;1,400&family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        {/* Custom law-themed animated cursor */}
        <CustomCursor />

        {/* Justice-scale loading screen (first visit only) */}
        <LoadingWrapper />

        {/* Sticky navigation */}
        <Navigation />

        {/* Page content */}
        <main>{children}</main>

        {/* Professional footer */}
        <Footer />
      </body>
    </html>
  );
}