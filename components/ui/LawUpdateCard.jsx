/**
 * components/ui/LawUpdateCard.jsx
 * Rich card for each Indian law entry
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LawUpdateCard({ item, index, headingLevel = 3 }) {
  const [expanded, setExpanded] = useState(false);
  const Heading = `h${headingLevel}`;

  const statusColors = {
    'In Force': { bg: 'rgba(39,174,96,0.12)', border: 'rgba(39,174,96,0.35)', text: '#27AE60' },
    'Repealed': { bg: 'rgba(149,165,166,0.12)', border: 'rgba(149,165,166,0.35)', text: '#95A5A6' },
    'Rules Awaited': { bg: 'rgba(52,152,219,0.12)', border: 'rgba(52,152,219,0.35)', text: '#3498DB' },
    'Awaiting Implementation': { bg: 'rgba(230,126,34,0.12)', border: 'rgba(230,126,34,0.35)', text: '#E67E22' },
    'Enacted': { bg: 'rgba(52,152,219,0.12)', border: 'rgba(52,152,219,0.35)', text: '#3498DB' },
  };

  const sc = statusColors[item.status] || statusColors['In Force'];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35, delay: Math.min(index * 0.04, 0.4) }}
      style={{
        background: 'rgba(255,255,255,0.03)',
        border: '1px solid rgba(255,255,255,0.09)',
        borderRadius: 14,
        padding: '22px 22px 18px',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        cursor: 'pointer',
        transition: 'border-color 0.2s, background 0.2s',
      }}
      whileHover={{ borderColor: 'rgba(201,168,76,0.35)', background: 'rgba(255,255,255,0.05)' }}
      onClick={() => setExpanded(!expanded)}
    >
      {/* Top row: tag + status */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 8 }}>
        <span style={{
          background: item.tagColor || '#C9A84C',
          color: ['#C9A84C', '#8E44AD'].includes(item.tagColor) ? '#050D1A' : '#fff',
          fontSize: 10, fontWeight: 800, padding: '3px 9px',
          borderRadius: 4, letterSpacing: '0.1em', flexShrink: 0,
        }}>{item.tag}</span>

        <span style={{
          background: sc.bg, border: `1px solid ${sc.border}`,
          color: sc.text, fontSize: 11, fontWeight: 700,
          padding: '3px 10px', borderRadius: 20, flexShrink: 0,
        }}>{item.status}</span>
      </div>

      {/* Title */}
      <div>
        <Heading style={{
          fontFamily: 'var(--font-heading)', fontSize: 15,
          color: '#fff', fontWeight: 700, margin: '0 0 4px',
          lineHeight: 1.35,
        }}>{item.title}</Heading>
        {item.replaces && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(255,255,255,0.4)', margin: 0 }}>
            Replaces: {item.replaces}
          </p>
        )}
        {item.replacedBy && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'rgba(231,76,60,0.8)', margin: 0 }}>
            Replaced by: {item.replacedBy}
          </p>
        )}
      </div>

      {/* Meta row */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
        {item.enforcedOn && (
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.5)', fontFamily: 'var(--font-body)' }}>
            📅 {item.enforcedOn}
          </span>
        )}
        {item.amendedOn && (
          <span style={{ fontSize: 11, color: 'rgba(201,168,76,0.8)', fontFamily: 'var(--font-body)' }}>
            ✏️ Amended {item.amendedOn}
          </span>
        )}
        {item.ministry && (
          <span style={{ fontSize: 11, color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)' }}>
            🏛️ {item.ministry}
          </span>
        )}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: 'var(--font-body)', fontSize: 13.5,
        color: 'rgba(255,255,255,0.65)', margin: 0, lineHeight: 1.6,
        display: '-webkit-box', WebkitLineClamp: expanded ? 'unset' : 3,
        WebkitBoxOrient: 'vertical', overflow: 'hidden',
      }}>{item.description}</p>

      {/* Expanded: Key Changes */}
      <AnimatePresence>
        {expanded && item.keyChanges && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            style={{ overflow: 'hidden' }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gold-primary)', fontWeight: 700, margin: '0 0 8px', letterSpacing: '0.06em' }}>
              KEY CHANGES / PROVISIONS
            </p>
            <ul style={{ margin: 0, paddingLeft: 16, display: 'flex', flexDirection: 'column', gap: 4 }}>
              {item.keyChanges.map((k, i) => (
                <li key={i} style={{ fontFamily: 'var(--font-body)', fontSize: 12.5, color: 'rgba(255,255,255,0.7)' }}>{k}</li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Expand toggle */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginTop: 'auto', paddingTop: 4 }}>
        <span style={{ fontSize: 12, color: 'var(--gold-primary)', fontFamily: 'var(--font-body)', fontWeight: 600 }}>
          {expanded ? '▲ Show less' : '▼ Show key provisions'}
        </span>
      </div>
    </motion.div>
  );
}