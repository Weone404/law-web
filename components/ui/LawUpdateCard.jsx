/**
 * components/ui/LawUpdateCard.jsx
 * Rich card for each Indian law entry
 */
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TAG_STYLES = {
  '#C9A84C': { background: 'var(--badge-gold-bg)', color: 'var(--badge-gold-text)' },
  '#8E44AD': { background: 'var(--badge-purple-bg)', color: 'var(--badge-purple-text)' },
  '#9B59B6': { background: 'var(--badge-purple-bg)', color: 'var(--badge-purple-text)' },
  '#E74C3C': { background: 'var(--badge-red-bg)', color: 'var(--badge-red-text)' },
  '#27AE60': { background: 'var(--badge-green-bg)', color: 'var(--badge-green-text)' },
  '#95A5A6': { background: 'var(--badge-gray-bg)', color: 'var(--badge-gray-text)' },
};

export default function LawUpdateCard({ item, index, headingLevel = 3 }) {
  const [expanded, setExpanded] = useState(false);
  const Heading = `h${headingLevel}`;

  const statusColors = {
    'In Force': { bg: 'var(--badge-green-bg)', border: 'rgba(255,255,255,0.3)', text: 'var(--badge-green-text)' },
    'Repealed': { bg: 'var(--badge-gray-bg)', border: 'rgba(255,255,255,0.3)', text: 'var(--badge-gray-text)' },
    'Rules Awaited': { bg: 'var(--badge-blue-bg)', border: 'rgba(255,255,255,0.3)', text: 'var(--badge-blue-text)' },
    'Awaiting Implementation': { bg: 'var(--badge-orange-bg)', border: 'rgba(255,255,255,0.3)', text: 'var(--badge-orange-text)' },
    'Enacted': { bg: 'var(--badge-blue-bg)', border: 'rgba(255,255,255,0.3)', text: 'var(--badge-blue-text)' },
  };

  const sc = statusColors[item.status] || statusColors['In Force'];
  const tagStyle = TAG_STYLES[item.tagColor] || TAG_STYLES['#C9A84C'];

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
          background: tagStyle.background,
          color: tagStyle.color,
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
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--text-meta)', margin: 0 }}>
            Replaces: {item.replaces}
          </p>
        )}
        {item.replacedBy && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 12, color: '#FF9B9B', margin: 0 }}>
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
          <span style={{ fontSize: 11, color: 'var(--text-meta)', fontFamily: 'var(--font-body)' }}>
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