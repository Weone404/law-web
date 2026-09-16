import PageHeader from '@/components/ui/PageHeader';
import LawyerCard from '@/components/ui/LawyerCard';
import { LAWYERS } from '@/lib/constants/lawyers';
import { createMetadata } from '@/lib/seo';

export const metadata = createMetadata('/lawyers', {
  title: 'Lawyers in India | LegalGroup',
  description: 'Find experienced lawyers and advocates in India for criminal, family, corporate, property, civil and constitutional legal matters.',
});

export default function LawyersPage() {
  return (
    <div className="dark-gold-surface" style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      <PageHeader
        eyebrow="Legal Directory"
        title="Lawyers in India"
        subtitle="Browse experienced advocates and legal specialists across major practice areas and Indian cities."
      />
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '40px 24px 80px' }}>
        <div className="responsive-grid-3">
          {LAWYERS.map((lawyer) => (
            <LawyerCard key={`${lawyer.name}-${lawyer.city}`} lawyer={lawyer} headingLevel={2} />
          ))}
        </div>
      </div>
    </div>
  );
}
