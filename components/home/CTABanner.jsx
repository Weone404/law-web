/**
 * components/home/CTABanner.jsx
 */
'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function CTABanner() {
  return (
    <section style={{
      padding: '80px 24px',
      background: 'linear-gradient(135deg, #C9A84C 0%, #8B6914 50%, #5C4209 100%)',
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none' }}>
        <div style={{ position: 'absolute', right: '-5%', top: '50%', transform: 'translateY(-50%)', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
        <div style={{ position: 'absolute', left: '-5%', top: '50%', transform: 'translateY(-50%)', width: 300, height: 300, borderRadius: '50%', background: 'rgba(255,255,255,0.04)' }} />
      </div>
      <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative', textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,48px)', fontWeight: 900, color: '#050D1A', marginBottom: 16 }}>
            Need Legal Help Today?
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, color: 'rgba(5,13,26,0.75)', marginBottom: 36, maxWidth: 560, margin: '0 auto 36px' }}>
            Our expert advocates are ready to assess your case. Get your first consultation within 24 hours.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/contact" style={{
              background: '#050D1A', color: '#C9A84C',
              padding: '15px 32px', borderRadius: 8, textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700,
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 10px 30px rgba(5,13,26,0.3)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
            >⚖️ Book Free Consultation</Link>
            <Link href="/services" style={{
              background: 'transparent', color: '#050D1A',
              border: '2px solid rgba(5,13,26,0.4)',
              padding: '15px 32px', borderRadius: 8, textDecoration: 'none',
              fontFamily: 'var(--font-body)', fontSize: 16, fontWeight: 700,
            }}>View Our Lawyers →</Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
