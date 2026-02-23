/**
 * app/laws/page.jsx — Indian Laws & Live Updates
 * Organized by categories: IPC/BNS, CrPC/BNSS, Constitution, Corporate, Family, etc.
 * API-ready: replace static data with fetch() from your backend.
 */

'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchBar from '@/components/ui/SearchBar';
import LawUpdateCard from '@/components/ui/LawUpdateCard';
import { LAW_UPDATES, LAW_CATEGORIES } from '@/lib/constants/lawUpdates';

export default function LawsPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch]               = useState('');

  const filtered = LAW_UPDATES.filter((u) => {
    const matchCat    = activeCategory === 'all' || u.category === activeCategory;
    const matchSearch = !search || u.title.toLowerCase().includes(search.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* Hero */}
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
            </p>
            <SearchBar value={search} onChange={setSearch} placeholder="Search any law, act, section, or amendment..." large />
          </motion.div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        {/* Live Update Banner */}
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

        {/* Category filter */}
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 40 }}>
          {LAW_CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              style={{
                background: activeCategory === cat.id ? 'var(--gold-primary)' : 'transparent',
                border: `1px solid ${activeCategory === cat.id ? 'var(--gold-primary)' : 'rgba(255,255,255,0.15)'}`,
                borderRadius: 20, padding: '8px 18px', cursor: 'pointer',
                fontFamily: 'var(--font-body)', fontSize: 14,
                color: activeCategory === cat.id ? '#050D1A' : 'rgba(255,255,255,0.7)',
                transition: 'all 0.2s',
              }}
            >{cat.label}</button>
          ))}
        </div>

        {/* Law Updates Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
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

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', fontSize: 18 }}>
            No laws found matching "{search}".
          </div>
        )}
      </div>
    </div>
  );
}
