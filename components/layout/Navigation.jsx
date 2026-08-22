/**
 * components/layout/Navigation.jsx
 * Sticky top nav with scroll-aware frosted glass effect,
 * mobile hamburger menu, theme toggle, and CTA button.
 */

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'For Students', href: '/students' },
  { label: 'Legal Services', href: '/services' },
  { label: 'Our Firm', href: '/firm' },
  { label: 'Indian Laws', href: '/laws' },
  { label: 'Contact', href: '/contact' },
];

export default function Navigation() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // On mount, read saved theme preference
  useEffect(() => {
    const saved = localStorage.getItem('lex-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const dark = saved ? saved === 'dark' : prefersDark;
    setIsDark(dark);
    document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    const value = next ? 'dark' : 'light';
    localStorage.setItem('lex-theme', value);
    document.documentElement.setAttribute('data-theme', value);
  };

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', fn, { passive: true });
    return () => window.removeEventListener('scroll', fn);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const navBg = scrolled
    ? isDark ? 'rgba(5,13,26,0.96)' : 'rgba(248,246,240,0.96)'
    : 'transparent';

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
      background: navBg,
      backdropFilter: scrolled ? 'blur(24px)' : 'none',
      borderBottom: scrolled ? `1px solid ${isDark ? 'rgba(201,168,76,0.14)' : 'rgba(20,24,32,0.12)'}` : 'none',
      transition: 'all 0.4s ease',
      padding: '0 24px',
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', height: 72,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 12, textDecoration: 'none' }} data-cursor="scale">
          <div style={{
            width: 40, height: 40, borderRadius: '50%',
            background: 'linear-gradient(135deg, #C9A84C, #8B6914)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18,
          }}>⚖️</div>
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 800,
              color: 'var(--gold-primary)', letterSpacing: '0.06em', lineHeight: 1,
            }}>legalgroup</div>
            <div style={{
              fontSize: 9, letterSpacing: '0.28em', textTransform: 'uppercase',
              color: isDark ? 'rgba(255,255,255,0.38)' : 'rgba(0,0,0,0.38)',
            }}>Legal Excellence</div>
          </div>
        </Link>

        {/* Desktop links */}
        <div className="desktop-nav-links" style={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                style={{
                  padding: '8px 13px', borderRadius: 6,
                  fontFamily: 'var(--font-body)', fontSize: 15,
                  color: active ? 'var(--gold-primary)' : isDark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.65)',
                  fontWeight: active ? 600 : 400,
                  borderBottom: active ? '1px solid var(--gold-primary)' : '1px solid transparent',
                  textDecoration: 'none', transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => { if (!active) e.currentTarget.style.color = 'var(--gold-primary)'; }}
                onMouseLeave={(e) => { if (!active) e.currentTarget.style.color = isDark ? 'rgba(255,255,255,0.72)' : 'rgba(0,0,0,0.65)'; }}
              >{link.label}</Link>
            );
          })}

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            style={{
              background: 'none', border: `1px solid ${isDark ? 'rgba(201,168,76,0.4)' : 'rgba(20,24,32,0.18)'}`,
              borderRadius: 20, padding: '6px 13px', cursor: 'pointer',
              color: 'var(--gold-primary)', fontSize: 12,
              fontFamily: 'var(--font-body)', marginLeft: 8, transition: 'all 0.2s',
            }}
          >{isDark ? '☀ Light' : '◑ Dark'}</button>

          {/* CTA */}
          <Link
            href="/contact"
            className="lex-btn lex-btn-primary"
            style={{ marginLeft: 10, textDecoration: 'none', padding: '9px 20px', borderRadius: 7, fontSize: 14 }}
          >Book Consultation</Link>
        </div>

        {/* Mobile menu button */}
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen((v) => !v)}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: 'var(--gold-primary)', fontSize: 24, display: 'none',
          }}
          aria-label="Toggle menu"
        >{menuOpen ? '✕' : '☰'}</button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div style={{
          background: isDark ? 'var(--bg-primary)' : '#F8F6F0',
          borderTop: '1px solid rgba(201,168,76,0.15)',
          padding: '12px 24px 24px',
        }}>
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              style={{
                display: 'block', padding: '13px 0',
                borderBottom: '1px solid rgba(201,168,76,0.1)',
                fontFamily: 'var(--font-body)', fontSize: 17,
                color: pathname === link.href ? 'var(--gold-primary)' : isDark ? '#fff' : '#000',
                textDecoration: 'none',
              }}
            >{link.label}</Link>
          ))}
          <Link href="/contact" style={{
            display: 'block', marginTop: 16, padding: '13px 0', textAlign: 'center',
            background: 'linear-gradient(135deg,var(--gold-primary),var(--gold-dark))',
            borderRadius: 8, fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700,
            color: '#050D1A', textDecoration: 'none',
          }}>Book Consultation</Link>
        </div>
      )}
    </nav>
  );
}