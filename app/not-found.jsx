/**
 * app/not-found.jsx — Custom 404 Page
 */
'use client';
import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="dark-gold-surface" style={{
      minHeight: '100vh', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      background: 'var(--dark-bg)', textAlign: 'center', padding: 24,
    }}>
      <div style={{ fontSize: 80, marginBottom: 24 }}>⚖️</div>
      <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 80, fontWeight: 900, color: 'var(--gold-primary)', lineHeight: 1 }}>404</h1>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, color: '#F0E8D0', margin: '16px 0 12px' }}>Page Not Found</h2>
      <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.55)', maxWidth: 400, marginBottom: 36 }}>
        The legal resource you are looking for may have been moved or does not exist.
      </p>
      <Link href="/" style={{
        background: 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
        color: '#050D1A', padding: '13px 28px', borderRadius: 8,
        fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700,
        textDecoration: 'none',
      }}>← Return to Home</Link>
    </div>
  );
}
