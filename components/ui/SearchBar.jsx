/**
 * components/ui/SearchBar.jsx
 */
'use client';
import { useState } from 'react';

export default function SearchBar({ value, onChange, placeholder, large }) {
  const [focused, setFocused] = useState(false);
  return (
    <div
      data-cursor="book"
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        background: 'rgba(255,255,255,0.07)',
        border: `1px solid ${focused ? 'var(--gold-primary)' : 'rgba(255,255,255,0.15)'}`,
        borderRadius: 10, padding: large ? '13px 18px' : '9px 14px',
        maxWidth: large ? '640px' : '380px', width: '100%',
        transition: 'border-color 0.2s',
        boxShadow: focused ? '0 0 0 3px rgba(201,168,76,0.14)' : 'none',
      }}
    >
      <span style={{ fontSize: 18, opacity: 0.6 }}>🔍</span>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        style={{
          border: 'none', outline: 'none', background: 'transparent',
          fontFamily: 'var(--font-body)', fontSize: large ? 17 : 15,
          color: '#fff', flex: 1,
        }}
      />
      {value && (
        <button onClick={() => onChange('')} style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.4)', fontSize: 18 }}>×</button>
      )}
    </div>
  );
}
