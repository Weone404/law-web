/**
 * components/ui/PracticeFilter.jsx
 */
'use client';

const AREAS = ['All', 'Criminal', 'Civil', 'Corporate', 'Family', 'Property', 'Constitutional', 'Cyber Law', 'Consumer', 'Tax'];

export default function PracticeFilter({ active, onChange }) {
  return (
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 8 }}>
      {AREAS.map((area) => (
        <button
          key={area}
          onClick={() => onChange(area)}
          style={{
            background: active === area ? 'var(--gold-primary)' : 'transparent',
            border: `1px solid ${active === area ? 'var(--gold-primary)' : 'rgba(255,255,255,0.15)'}`,
            borderRadius: 20, padding: '7px 16px', cursor: 'pointer',
            fontFamily: 'var(--font-body)', fontSize: 13,
            color: active === area ? '#050D1A' : 'rgba(255,255,255,0.65)',
            transition: 'all 0.2s',
          }}
        >{area}</button>
      ))}
    </div>
  );
}
