/**
 * app/services/page.jsx — Legal Services & Lawyer Profiles
 * Panel of advocates, practice areas, consultation booking
 */

'use client';

import { useState } from 'react';
import PageHeader from '@/components/ui/PageHeader';
import LawyerCard from '@/components/ui/LawyerCard';
import SearchBar from '@/components/ui/SearchBar';
import PracticeFilter from '@/components/ui/PracticeFilter';
import { LAWYERS } from '@/lib/constants/lawyers';
import { PRACTICE_AREAS, CITIES } from '@/lib/constants/seoLandingPages';

const CITY_FILTER_OPTIONS = ['All Cities', 'Delhi', 'Mumbai', 'Bangalore', 'Chennai', 'Pune', 'Kolkata', 'Hyderabad'];

export default function ServicesPage() {
  const [search, setSearch]         = useState('');
  const [city, setCity]             = useState('All Cities');
  const [practice, setPractice]     = useState('All');

  const filtered = LAWYERS.filter((l) => {
    const matchSearch   = !search   || l.name.toLowerCase().includes(search.toLowerCase()) || l.specialization.toLowerCase().includes(search.toLowerCase());
    const matchCity     = city === 'All Cities' || l.city === city;
    const matchPractice = practice === 'All'    || l.area === practice;
    return matchSearch && matchCity && matchPractice;
  });

  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      <PageHeader
        eyebrow="Panel of Advocates"
        title="Legal Services"
        subtitle="Experienced, qualified advocates ready to represent you across all courts and tribunals in India."
      />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 0' }}>
        <p style={{ color: 'var(--text-secondary)', fontFamily: 'var(--font-body)', marginBottom: 12 }}>Browse legal help by practice area or city:</p>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10 }}>
          {PRACTICE_AREAS.map((area) => <a key={area.slug} href={`/services/${area.slug}`} style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)' }}>{area.label}</a>)}
          {CITIES.map((city) => <a key={city.slug} href={`/services/lawyers-in-${city.slug}`} style={{ color: 'var(--gold-primary)', fontFamily: 'var(--font-body)' }}>Lawyers in {city.name}</a>)}
        </div>
      </div>

      {/* Filters */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 0' }}>
        <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap', alignItems: 'center', marginBottom: 32 }}>
          <SearchBar value={search} onChange={setSearch} placeholder="Search lawyer, specialization..." />

          {/* City filter */}
          <select
            value={city}
            onChange={(e) => setCity(e.target.value)}
            style={{
              background: 'var(--dark-elevated)', border: '1px solid var(--dark-border)',
              borderRadius: 8, padding: '10px 16px', color: '#fff',
              fontFamily: 'var(--font-body)', fontSize: 15, cursor: 'pointer',
            }}
          >
            {CITY_FILTER_OPTIONS.map((c) => <option key={c} value={c}>{c}</option>)}
          </select>
        </div>

        <PracticeFilter active={practice} onChange={setPractice} />
      </div>

      {/* Lawyers Grid */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '32px 24px 80px' }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: 'rgba(255,255,255,0.4)', fontFamily: 'var(--font-body)', fontSize: 18 }}>
            No lawyers found matching your criteria.
          </div>
        ) : (
          <div className="responsive-grid-3">
            {filtered.map((lawyer, i) => (
              <LawyerCard key={i} lawyer={lawyer} headingLevel={2} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
