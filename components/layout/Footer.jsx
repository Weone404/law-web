/**
 * components/layout/Footer.jsx
 * Professional law-firm footer with navigation columns,
 * social links, and legal disclaimer.
 */

'use client';

import Link from 'next/link';

const COLUMNS = [
  {
    title: 'Platform',
    links: [
      { label: 'Home',           href: '/' },
      { label: 'For Students',   href: '/students' },
      { label: 'Legal Services', href: '/services' },
      { label: 'Our Firm',       href: '/firm' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Indian Laws',   href: '/laws' },
      { label: 'Bare Acts',     href: '/laws' },
      { label: 'Case Laws',     href: '/students' },
      { label: 'Legal Blog',    href: '/students' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Contact Us',      href: '/contact' },
      { label: 'Book Consultation', href: '/contact' },
      { label: 'Privacy Policy',  href: '/' },
      { label: 'Terms of Use',    href: '/' },
    ],
  },
];

const SOCIALS = [
  { label: 'in',  title: 'LinkedIn' },
  { label: 'tw',  title: 'Twitter/X' },
  { label: 'yt',  title: 'YouTube' },
  { label: 'tg',  title: 'Telegram' },
];

export default function Footer() {
  return (
    <footer style={{
      background: '#030910',
      borderTop: '1px solid rgba(201,168,76,0.14)',
      padding: '60px 24px 32px',
    }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        {/* Top grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr 1fr',
          gap: 40, marginBottom: 48,
        }} className="footer-grid">
          {/* Brand column */}
          <div>
            <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16, textDecoration: 'none' }}>
              <span style={{ fontSize: 24 }}>⚖️</span>
              <span style={{ fontFamily: 'var(--font-heading)', fontSize: 22, color: 'var(--gold-primary)', fontWeight: 800 }}>
                LEX INDIA
              </span>
            </Link>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 15,
              color: 'rgba(255,255,255,0.45)', lineHeight: 1.7, maxWidth: 300,
              marginBottom: 24,
            }}>
              India's premier legal technology platform — serving law students, lawyers,
              and clients seeking justice across every state and territory.
            </p>
            {/* Social icons */}
            <div style={{ display: 'flex', gap: 10 }}>
              {SOCIALS.map((s) => (
                <button
                  key={s.label}
                  title={s.title}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    border: '1px solid rgba(201,168,76,0.25)',
                    background: 'none', cursor: 'pointer',
                    color: 'rgba(201,168,76,0.6)',
                    fontSize: 10, fontFamily: 'var(--font-body)',
                    fontWeight: 700, letterSpacing: 0,
                    transition: 'border-color 0.2s, color 0.2s',
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--gold-primary)'; e.currentTarget.style.color = 'var(--gold-primary)'; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(201,168,76,0.25)'; e.currentTarget.style.color = 'rgba(201,168,76,0.6)'; }}
                >{s.label.toUpperCase()}</button>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 style={{
                fontFamily: 'var(--font-heading)', fontSize: 13,
                color: 'var(--gold-primary)', marginBottom: 18,
                textTransform: 'uppercase', letterSpacing: '0.18em',
              }}>{col.title}</h4>
              <nav style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    style={{
                      fontFamily: 'var(--font-body)', fontSize: 15,
                      color: 'rgba(255,255,255,0.45)', textDecoration: 'none',
                      transition: 'color 0.2s',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.color = 'var(--gold-primary)'}
                    onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                  >{link.label}</Link>
                ))}
              </nav>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: 28 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12 }}>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.3)', margin: 0 }}>
              © {new Date().getFullYear()} Lex India Law Chambers. All rights reserved.
              &nbsp;|&nbsp; Bar Council of India Registered
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(201,168,76,0.38)', margin: 0 }}>
              Justice · Knowledge · Integrity
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px)  { .footer-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 520px)  { .footer-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </footer>
  );
}
