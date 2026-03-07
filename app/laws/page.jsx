/**
 * app/laws/page.jsx — Indian Laws & Live Updates (UPGRADED)
 * • 60+ Indian laws across 14 categories
 * • Full-text search: title, description, shortTitle, keyChanges, sections, ministry
 * • Active filter count badge per category
 * • Expand cards to see key provisions
 */

'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/ui/SearchBar';
import LawUpdateCard from '@/components/ui/LawUpdateCard';
import { LAW_UPDATES, LAW_CATEGORIES } from '@/lib/constants/lawUpdates';

export default function LawsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  // ── Full-text search across all relevant fields ──────────────────────────────
  const normalised = useMemo(() => search.trim().toLowerCase(), [search]);

  const filtered = useMemo(() => {
    return LAW_UPDATES.filter((u) => {
      // Category filter
      const matchCat = activeCategory === 'all' || u.category === activeCategory;
      if (!matchCat) return false;

      // No search query → show all in category
      if (!normalised) return true;

      // Deep text search
      const haystack = [
        u.title,
        u.shortTitle,
        u.description,
        u.replaces,
        u.replacedBy,
        u.ministry,
        u.tag,
        u.status,
        u.enforcedOn,
        u.amendedOn,
        ...(u.keyChanges ?? []),
        ...(u.sections ?? []),
      ]
        .filter(Boolean)
        .join(' ')
        .toLowerCase();

      return haystack.includes(normalised);
    });
  }, [activeCategory, normalised]);

  // Count per category (for badges)
  const countByCategory = useMemo(() => {
    const counts = { all: 0 };
    LAW_UPDATES.forEach((u) => {
      counts.all = (counts.all || 0) + 1;
      counts[u.category] = (counts[u.category] || 0) + 1;
    });
    return counts;
  }, []);

  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* ── Hero ───────────────────────────────────────────────────────────────── */}
      <div style={{
        background: 'linear-gradient(135deg, #050D1A 0%, #0D1A30 100%)',
        padding: '60px 24px 80px',
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(32px,5vw,60px)',
              color: '#fff', fontWeight: 900, marginBottom: 12,
            }}>Indian Laws &amp; Updates</h1>
            <p style={{
              fontFamily: 'var(--font-body)', fontSize: 19,
              color: 'rgba(255,255,255,0.6)', marginBottom: 32,
            }}>
              Stay current with every new law, amendment, bill, and judicial directive across India.
              Search across <strong style={{ color: 'var(--gold-primary)' }}>{LAW_UPDATES.length}+ laws</strong>.
            </p>
            <SearchBar
              value={search}
              onChange={setSearch}
              placeholder="Search by law name, section, ministry, topic…"
              large
            />
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        {/* ── Live Banner ─────────────────────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }}
          style={{
            background: 'linear-gradient(135deg, rgba(201,168,76,0.1), rgba(201,168,76,0.04))',
            border: '1px solid rgba(201,168,76,0.35)',
            borderRadius: 12, padding: '16px 20px',
            display: 'flex', alignItems: 'center', gap: 14, marginBottom: 36,
          }}
        >
          <span style={{
            background: 'var(--gold-primary)', color: '#050D1A',
            fontSize: 11, fontWeight: 800, padding: '3px 10px',
            borderRadius: 4, letterSpacing: '0.12em', flexShrink: 0,
          }}>🔴 LIVE</span>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.82)', margin: 0 }}>
            <strong style={{ color: 'var(--gold-primary)' }}>BNS, BNSS &amp; BSA 2023</strong> — New criminal codes fully in force from July 1, 2024 replacing IPC, CrPC and Indian Evidence Act.
          </p>
        </motion.div>

        {/* ── Category Filter ──────────────────────────────────────────────────── */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {LAW_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            const count = countByCategory[cat.id] || 0;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                style={{
                  background: isActive ? 'var(--gold-primary)' : 'transparent',
                  border: `1px solid ${isActive ? 'var(--gold-primary)' : 'rgba(255,255,255,0.15)'}`,
                  borderRadius: 20, padding: '8px 16px', cursor: 'pointer',
                  fontFamily: 'var(--font-body)', fontSize: 14,
                  color: isActive ? '#050D1A' : 'rgba(255,255,255,0.7)',
                  transition: 'all 0.2s',
                  display: 'flex', alignItems: 'center', gap: 6,
                }}
              >
                {cat.label}
                {/* Count badge */}
                <span style={{
                  background: isActive ? 'rgba(5,13,26,0.25)' : 'rgba(255,255,255,0.1)',
                  borderRadius: 10, fontSize: 11, fontWeight: 700,
                  padding: '1px 7px', lineHeight: 1.6,
                  color: isActive ? '#050D1A' : 'rgba(255,255,255,0.5)',
                }}>{count}</span>
              </button>
            );
          })}
        </div>

        {/* ── Results count ────────────────────────────────────────────────────── */}
        {(normalised || activeCategory !== 'all') && (
          <p style={{
            fontFamily: 'var(--font-body)', fontSize: 14,
            color: 'rgba(255,255,255,0.45)', marginBottom: 24,
          }}>
            Showing <strong style={{ color: 'rgba(255,255,255,0.7)' }}>{filtered.length}</strong> result{filtered.length !== 1 ? 's' : ''}
            {normalised ? ` for "${search.trim()}"` : ''}
            {activeCategory !== 'all' ? ` in ${LAW_CATEGORIES.find(c => c.id === activeCategory)?.label}` : ''}
          </p>
        )}

        {/* ── Law Grid ─────────────────────────────────────────────────────────── */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${activeCategory}-${normalised}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="responsive-grid-3"
          >
            {filtered.map((item, i) => (
              <LawUpdateCard key={item.id || i} item={item} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>

        {/* ── Empty State ───────────────────────────────────────────────────────── */}
        {filtered.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', padding: '80px 0' }}
          >
            <p style={{ fontSize: 40, marginBottom: 16 }}>⚖️</p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 18, color: 'rgba(255,255,255,0.4)', marginBottom: 8 }}>
              No laws found matching &ldquo;{search}&rdquo;
            </p>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'rgba(255,255,255,0.25)' }}>
              Try searching for a topic like &ldquo;bail&rdquo;, &ldquo;property&rdquo;, &ldquo;GST&rdquo;, or &ldquo;maternity&rdquo;
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('all'); }}
              style={{
                marginTop: 20,
                background: 'transparent', border: '1px solid rgba(201,168,76,0.5)',
                borderRadius: 20, padding: '9px 22px', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gold-primary)',
              }}
            >Clear filters</button>
          </motion.div>
        )}
      </div>
    </div>
  );
}