/**
 * app/layout.jsx
 * Root layout — wraps every page with Navigation, Footer,
 * CustomCursor, and Loading screen. Sets global SEO metadata.
 */

import './globals.css';
import { Playfair_Display, Source_Sans_3 } from 'next/font/google';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';
import LoadingWrapper from '@/components/loading/LoadingWrapper';
import JsonLd from '@/components/seo/JsonLd';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { BRAND_NAME, ORGANIZATION_SCHEMA, SITE_URL } from '@/lib/seo';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-heading', display: 'swap' });
const sourceSans = Source_Sans_3({ subsets: ['latin'], variable: '--font-body', display: 'swap' });

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Legal Services & Lawyers in India | LegalGroup',
    template: '%s | LegalGroup',
  },
  description: 'LegalGroup helps individuals and businesses find experienced lawyers, legal advice, and trusted legal services across India.',
  keywords: [
    'legal services in India',
    'law firm in India',
    'lawyers in India',
    'legal consultation',
    'family lawyer',
    'criminal lawyer',
    'property lawyer',
    'corporate lawyer',
  ],
  authors: [{ name: 'LegalGroup' }],
  icons: {
    icon: '/icon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: 'Legal Services & Lawyers in India | LegalGroup',
    description: 'Find legal services, lawyers, and legal guidance across India with LegalGroup.',
    images: [{ url: `${SITE_URL}/opengraph-image`, width: 1200, height: 630, alt: 'LegalGroup' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LegalGroup | Legal Services & Lawyers in India',
    description: 'Legal advice and legal services for individuals and businesses across India.',
    images: [`${SITE_URL}/opengraph-image`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${sourceSans.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{
          __html: `
          (function() {
            try {
              var saved = localStorage.getItem('lex-theme') || localStorage.getItem('lex_theme');
              var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
              var theme = saved ? saved : (prefersDark ? 'dark' : 'light');
              document.documentElement.setAttribute('data-theme', theme);
            } catch (e) {
              document.documentElement.setAttribute('data-theme', 'dark');
            }
          })();
        `}} />
      </head>
      <body>
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <BreadcrumbSchema />
        <CustomCursor />
        <LoadingWrapper />
        <Navigation />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}