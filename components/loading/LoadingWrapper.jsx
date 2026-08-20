/**
 * components/loading/LoadingWrapper.jsx
 *
 * Client-side wrapper that shows the LoadingScreen only on
 * the very first visit (per session). After that, subsequent
 * page navigations show only a lightweight progress bar.
 */

'use client';

import { useEffect, useState } from 'react';

/* ── Justice Scale SVG Animation ── */
function LoadingScreen({ onDone }) {
  const [phase, setPhase] = useState(0);
  // phase 0: pillar appears | 1: beam + pans | 2: fade out

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 500);
    const t2 = setTimeout(() => setPhase(2), 1400);
    const t3 = setTimeout(onDone, 2000);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <div
      className="loading-screen"
      style={{
        position: 'fixed', inset: 0, zIndex: 99999,
        background: 'var(--bg-primary)',
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', justifyContent: 'center',
        opacity: phase === 2 ? 0 : 1,
        transition: 'opacity 0.55s ease',
        pointerEvents: phase === 2 ? 'none' : 'all',
      }}
    >
      {/* ── SVG Justice Scale ── */}
      <svg viewBox="0 0 120 120" width={130} height={130} aria-label="Loading">
        {/* Central pillar */}
        <rect x={58} y={20} width={4} height={72}
          fill="#C9A84C"
          style={{ animation: 'pillarReveal 0.5s ease forwards' }}
        />
        {/* Horizontal beam */}
        <rect x={18} y={24} width={84} height={3} rx={1.5}
          fill="#C9A84C"
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.35s 0.1s' }}
        />
        {/* Base */}
        <rect x={38} y={92} width={44} height={4} rx={2}
          fill="#C9A84C"
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.35s 0.5s' }}
        />

        {/* Left pan strings */}
        <line x1={28} y1={27} x2={22} y2={60} stroke="#C9A84C" strokeWidth={1.5}
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.3s 0.2s' }} />
        <line x1={38} y1={27} x2={38} y2={60} stroke="#C9A84C" strokeWidth={1.5}
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.3s 0.2s' }} />

        {/* Right pan strings */}
        <line x1={82} y1={27} x2={82} y2={56} stroke="#C9A84C" strokeWidth={1.5}
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.3s 0.2s' }} />
        <line x1={92} y1={27} x2={98} y2={56} stroke="#C9A84C" strokeWidth={1.5}
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.3s 0.2s' }} />

        {/* Left pan (dips slightly — weighted) */}
        <ellipse cx={30} cy={phase >= 1 ? 67 : 60} rx={18} ry={6}
          fill="none" stroke="#C9A84C" strokeWidth={1.5}
          style={{
            opacity: phase >= 1 ? 1 : 0,
            transition: 'opacity 0.3s 0.35s, cy 0.9s 0.35s cubic-bezier(0.34,1.56,0.64,1)',
          }}
        />
        {/* Right pan */}
        <ellipse cx={90} cy={60} rx={18} ry={6}
          fill="none" stroke="#C9A84C" strokeWidth={1.5}
          style={{ opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.3s 0.35s' }}
        />
      </svg>

      {/* Firm name */}
      <div style={{
        marginTop: 28,
        fontFamily: "'Playfair Display', Georgia, serif",
        fontSize: 30, fontWeight: 800,
        color: '#C9A84C', letterSpacing: '0.18em',
        opacity: phase >= 1 ? 1 : 0, transform: phase >= 1 ? 'none' : 'translateY(12px)',
        transition: 'all 0.55s 0.55s',
      }}>legalgroup</div>

      <div style={{
        marginTop: 8,
        fontFamily: 'Crimson Text, Georgia, serif',
        fontSize: 12, letterSpacing: '0.32em', textTransform: 'uppercase',
        color: 'rgba(201,168,76,0.55)',
        opacity: phase >= 1 ? 1 : 0,
        transition: 'opacity 0.55s 0.8s',
      }}>Justice · Knowledge · Integrity</div>

      {/* Shimmer progress bar */}
      <div style={{
        marginTop: 48, width: 180, height: 1,
        background: 'rgba(201,168,76,0.18)',
        position: 'relative', overflow: 'hidden',
        opacity: phase >= 1 ? 1 : 0, transition: 'opacity 0.4s 0.6s',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)',
          animation: 'shimmer 1.4s infinite',
        }} />
      </div>

      <style>{`
        @keyframes pillarReveal {
          from { transform: scaleY(0); transform-origin: bottom; }
          to   { transform: scaleY(1); }
        }
        @keyframes shimmer {
          from { transform: translateX(-200%); }
          to   { transform: translateX(200%); }
        }
      `}</style>
    </div>
  );
}

/* ── Wrapper: shows only on first session visit ── */
export default function LoadingWrapper() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const seen = sessionStorage.getItem('lex_loaded');
    if (!seen) {
      setShow(true);
    }
  }, []);

  if (!show) return null;

  return (
    <LoadingScreen
      onDone={() => {
        setShow(false);
        sessionStorage.setItem('lex_loaded', '1');
      }}
    />
  );
}
