/**
 * app/students/page.jsx — For Law Students
 * Law Notes, Case Laws, Bare Acts, Legal Blogs, Career Guidance
 */

'use client';

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import ResourceCard from '@/components/ui/ResourceCard';
import SearchBar from '@/components/ui/SearchBar';
import { STUDENT_RESOURCES } from '@/lib/constants/studentResources';

const TABS = [
  { id: 'notes',    label: '📝 Law Notes' },
  { id: 'caselaws', label: '⚖️ Case Laws' },
  { id: 'bareacts', label: '📜 Bare Acts' },
  { id: 'blogs',    label: '✍️ Legal Blogs' },
  { id: 'career',   label: '🎓 Career Guide' },
];

export default function StudentsPage() {
  const [activeTab, setActiveTab]   = useState('notes');
  const [searchQuery, setSearchQuery] = useState('');

  const items = STUDENT_RESOURCES[activeTab] || [];
  const filtered = items.filter(
    (item) =>
      !searchQuery ||
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.subject.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dark-gold-surface" style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* Page Header */}
      <PageHeader
        eyebrow="Legal Education Hub"
        title="For Law Students"
        subtitle="Everything you need to excel in law school, pass your bar exam, and launch a successful legal career in India."
      />

      {/* Tab bar */}
      <div style={{
        background: 'var(--dark-surface)',
        borderBottom: '1px solid var(--dark-border)',
        position: 'sticky', top: 72, zIndex: 100,
      }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', display: 'flex', overflowX: 'auto', gap: 4 }}>
          {TABS.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); setSearchQuery(''); }}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                padding: '16px 20px', whiteSpace: 'nowrap',
                fontFamily: 'var(--font-body)', fontSize: 15,
                color: activeTab === tab.id ? 'var(--gold-primary)' : 'rgba(255,255,255,0.55)',
                borderBottom: activeTab === tab.id ? '2px solid var(--gold-primary)' : '2px solid transparent',
                transition: 'all 0.2s',
              }}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '48px 24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16, marginBottom: 36 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#F0E8D0' }}>
            {TABS.find((t) => t.id === activeTab)?.label.replace(/^.+ /, '')}
          </h2>
          <SearchBar
            value={searchQuery}
            onChange={setSearchQuery}
            placeholder="Search resources..."
          />
        </div>

        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', fontSize: 18 }}>
            No results found for "{searchQuery}"
          </div>
        ) : (
          <div className="responsive-grid-3">
            {filtered.map((item, i) => (
              <ResourceCard key={i} item={item} headingLevel={3} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
