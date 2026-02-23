/**
 * components/cursor/CustomCursor.jsx
 *
 * Law-themed animated custom cursor.
 * — Gold dot cursor (mix-blend-mode: difference)
 * — Trailing ring follower with lerp (smooth lag)
 * — Morphs based on data-cursor attribute on hovered elements:
 *     data-cursor="scale"  → ⚖️ Justice Scale
 *     data-cursor="gavel"  → 🔨 Gavel
 *     data-cursor="book"   → 📖 Law Book
 * — Pulse glow on interactive elements
 * — Disabled automatically on touch devices
 */

'use client';

import { useEffect, useRef, useState } from 'react';

export default function CustomCursor() {
  const dotRef      = useRef(null);
  const ringRef     = useRef(null);
  const posRef      = useRef({ x: 0, y: 0 });
  const followerRef = useRef({ x: 0, y: 0 });
  const rafRef      = useRef(null);

  const [visible,    setVisible]    = useState(false);
  const [cursorType, setCursorType] = useState('default');
  const [clicking,   setClicking]   = useState(false);

  useEffect(() => {
    // Disable on touch devices
    if (typeof window === 'undefined') return;
    if (window.matchMedia('(pointer: coarse)').matches) return;

    /* ── Mouse move: dot follows exactly ── */
    const onMove = (e) => {
      posRef.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX - 8}px, ${e.clientY - 8}px)`;
      }
      setVisible(true);
    };

    /* ── Smooth ring via RAF lerp ── */
    const animateRing = () => {
      const { x: tx, y: ty } = posRef.current;
      followerRef.current.x += (tx - followerRef.current.x) * 0.11;
      followerRef.current.y += (ty - followerRef.current.y) * 0.11;
      if (ringRef.current) {
        ringRef.current.style.transform =
          `translate(${followerRef.current.x - 22}px, ${followerRef.current.y - 22}px)`;
      }
      rafRef.current = requestAnimationFrame(animateRing);
    };
    rafRef.current = requestAnimationFrame(animateRing);

    /* ── Detect cursor context from data-cursor attribute ── */
    const onOver = (e) => {
      const el = e.target;
      if (el.closest('[data-cursor="scale"]'))     setCursorType('scale');
      else if (el.closest('[data-cursor="gavel"]')) setCursorType('gavel');
      else if (el.closest('[data-cursor="book"]'))  setCursorType('book');
      else if (el.closest('button, a, [role="button"], input, textarea, select')) setCursorType('hover');
      else setCursorType('default');
    };

    const onLeave  = () => setVisible(false);
    const onEnter  = () => setVisible(true);
    const onDown   = () => setClicking(true);
    const onUp     = () => setClicking(false);

    window.addEventListener('mousemove',   onMove,  { passive: true });
    window.addEventListener('mouseover',   onOver,  { passive: true });
    window.addEventListener('mouseleave',  onLeave, { passive: true });
    window.addEventListener('mouseenter',  onEnter, { passive: true });
    window.addEventListener('mousedown',   onDown,  { passive: true });
    window.addEventListener('mouseup',     onUp,    { passive: true });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('mousemove',  onMove);
      window.removeEventListener('mouseover',  onOver);
      window.removeEventListener('mouseleave', onLeave);
      window.removeEventListener('mouseenter', onEnter);
      window.removeEventListener('mousedown',  onDown);
      window.removeEventListener('mouseup',    onUp);
    };
  }, []);

  /* ── Icon shown inside the ring ── */
  const ICONS = { scale: '⚖️', gavel: '🔨', book: '📖' };
  const icon = ICONS[cursorType] ?? null;

  /* ── Dynamic ring size ── */
  const ringSize = clicking ? 30 : cursorType === 'default' ? 44 : 54;

  return (
    <>
      {/* Gold dot */}
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99999,
          width: clicking ? 10 : 16, height: clicking ? 10 : 16,
          background: '#C9A84C',
          borderRadius: '50%',
          pointerEvents: 'none',
          mixBlendMode: 'difference',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s, width 0.15s, height 0.15s',
          willChange: 'transform',
        }}
      />

      {/* Trailing ring */}
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0, zIndex: 99998,
          width: ringSize, height: ringSize,
          borderRadius: '50%',
          border: `1.5px solid rgba(201,168,76,${cursorType !== 'default' ? 0.85 : 0.55})`,
          background: icon ? 'rgba(5,13,26,0.75)' : 'transparent',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20,
          pointerEvents: 'none',
          backdropFilter: icon ? 'blur(4px)' : 'none',
          opacity: visible ? 1 : 0,
          transition: 'opacity 0.2s, width 0.3s ease, height 0.3s ease, border-color 0.2s, background 0.2s',
          willChange: 'transform',
          animation: icon ? 'cursorPulse 1.6s ease-in-out infinite' : 'none',
        }}
      >
        {icon}
      </div>

      <style>{`
        @keyframes cursorPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(201,168,76,0.45); }
          50%      { box-shadow: 0 0 0 10px rgba(201,168,76,0); }
        }
      `}</style>
    </>
  );
}
