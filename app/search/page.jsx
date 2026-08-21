/**
 * app/search/page.jsx — Global Search
 * Search across laws, acts, articles, case laws
 */

'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import ResourceCard from '@/components/ui/ResourceCard';
import LawUpdateCard from '@/components/ui/LawUpdateCard';
import { STUDENT_RESOURCES } from '@/lib/constants/studentResources';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';

/** Flatten all searchable content into one pool */
function buildSearchPool() {
  const pool = [];
  Object.entries(STUDENT_RESOURCES).forEach(([tab, items]) => {
    items.forEach((item) => pool.push({ ...item, _type: 'resource', _tab: tab }));
  });
  LAW_UPDATES.forEach((u) => pool.push({ ...u, _type: 'law' }));
  return pool;
}

const POOL = buildSearchPool();

function SearchResults() {
  const params = useSearchParams();
  const initial = params.get('q') || '';
  const [query, setQuery] = useState(initial);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      POOL.filter(
        (item) =>
          item.title?.toLowerCase().includes(q) ||
          item.subject?.toLowerCase().includes(q) ||
          item.tag?.toLowerCase().includes(q)
      )
    );
  }, [query]);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* Header */}
      <div style={{ background: 'linear-gradient(135deg, #050D1A, #0D1F3C)', padding: '60px 24px 80px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(28px,4vw,52px)', color: '#fff', fontWeight: 900, marginBottom: 32 }}>
            Search Legal Resources
          </h1>
          <div style={{ display: 'flex', gap: 12, maxWidth: 640 }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search any law, act, case, or article..."
              autoFocus
              style={{
                flex: 1, padding: '14px 20px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(201,168,76,0.4)',
                borderRadius: 10, color: '#fff',
                fontFamily: 'var(--font-body)', fontSize: 17, outline: 'none',
              }}
            />
            <button style={{
              background: 'linear-gradient(135deg,var(--gold-primary),var(--gold-dark))',
              border: 'none', borderRadius: 10, padding: '14px 24px',
              fontFamily: 'var(--font-body)', fontSize: 15, fontWeight: 700,
              color: '#050D1A', cursor: 'pointer',
            }}>Search</button>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        {query.trim() && (
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 16, color: 'rgba(255,255,255,0.5)', marginBottom: 32 }}>
            {results.length} result{results.length !== 1 ? 's' : ''} for &ldquo;{query}&rdquo;
          </p>
        )}

        {results.length > 0 && (
          <div className="responsive-grid-3">
            {results.map((item, i) =>
              item._type === 'law'
                ? <LawUpdateCard key={i} item={item} index={i} headingLevel={2} />
                : <ResourceCard key={i} item={item} headingLevel={2} />
            )}
          </div>
        )}

        {query.trim() && results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: 48, marginBottom: 16 }}>🔍</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.45)' }}>
              No results found. Try different keywords.
            </p>
          </div>
        )}

        {!query.trim() && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <div style={{ fontSize: 56, marginBottom: 16 }}>⚖️</div>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 19, color: 'rgba(255,255,255,0.45)' }}>
              Start typing to search across laws, case laws, bare acts, and articles.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense>
      <SearchResults />
    </Suspense>
  );
}
