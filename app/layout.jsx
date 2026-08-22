/**
 * app/layout.jsx
 * Root layout — wraps every page with Navigation, Footer,
 * CustomCursor, and Loading screen. Sets global SEO metadata.
 */

import './globals.css';
import Script from 'next/script';
import { GoogleAnalytics } from '@next/third-parties/google';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import CustomCursor from '@/components/cursor/CustomCursor';
import LoadingWrapper from '@/components/loading/LoadingWrapper';
import JsonLd from '@/components/seo/JsonLd';
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema';
import { BRAND_NAME, ORGANIZATION_SCHEMA, SITE_URL } from '@/lib/seo';

const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

export const metadata = {
  title: {
  default: 'Legal Services, Lawyers & Indian Law Resources | legalgroup',
    template: '%s | legalgroup',
  },
  description:
    "India's leading legal technology platform for law students, practicing lawyers, and clients seeking expert legal services.",
  keywords: [
    'law firm india', 'legal services india', 'law students resources',
    'case laws india', 'bare acts', 'advocate near me', 'lawyer consultation',
    'IPC', 'CrPC', 'constitution of india', 'supreme court india',
  ],
  authors: [{ name: 'legalgroup' }],
  icons: {
    icon: '/icon.png',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/manifest.json',
  legacyIcons: {
    icon: '/legalgroup_logo-removebg-preview.webp',
    apple: '/legalgroup_logo-removebg-preview.webp',
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE_URL,
    siteName: BRAND_NAME,
    title: 'Legal Services, Lawyers & Indian Law Resources | legalgroup',
    description: "India's premier legal platform for students, lawyers & clients.",
    images: [{ url: '/images/og-image.jpg', width: 1200, height: 630, alt: 'legalgroup' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'legalgroup | Indian Legal Services and Law Resources',
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
              var saved = localStorage.getItem('lex-theme') || localStorage.getItem('lex_theme');
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
      </head>
      <body>
        {GA_MEASUREMENT_ID && <GoogleAnalytics gaId={GA_MEASUREMENT_ID} />}
        <JsonLd data={ORGANIZATION_SCHEMA} />
        <BreadcrumbSchema />
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