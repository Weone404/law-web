import FamilyLawLanding from '@/components/family/FamilyLawLanding';
import { createMetadata } from '@/lib/seo';

export const metadata = {
  ...createMetadata('/services/family-law', {
    title: 'Family Law Lawyer in India | legalgroup',
    description: 'Family law advocates in Delhi and across India for divorce, mutual consent divorce, child custody, maintenance, alimony and domestic violence cases. Book a confidential consultation with legalgroup.',
  }),
  keywords: ['family law lawyer india', 'family lawyer near me', 'divorce lawyer', 'child custody lawyer', 'maintenance lawyer', 'domestic violence lawyer', 'family court advocate', 'matrimonial dispute lawyer', 'hindu marriage act lawyer', 'alimony lawyer india'],
};

const FAMILY_LAW_OVERVIEW = {
  slug: 'family-law',
  path: '/services/family-law',
  title: 'Family Law Lawyer in India',
  shortTitle: 'Family Law',
  subtitle: 'Family disputes touch the most personal parts of a client’s life — a marriage, a child, a home or a parent’s welfare. legalgroup provides clear, confidential guidance across India, with dedicated support in New Delhi.',
  explainerTitle: 'What Falls Under Family Law',
  stats: [['5', 'Focused Delhi services'], ['6', 'Delhi Family Courts'], ['16+', 'Years family-law experience']],
  reasons: [
    ['⚖️', 'Dedicated family-law experience', 'Advocates with family-court experience, not general litigators handling matrimonial matters as a side practice.'],
    ['🤝', 'Support at every stage', 'From the first consultation and drafting through mediation, hearings and, where needed, appeal.'],
    ['🧭', 'Practical settlement guidance', 'Coordination with counsellors and mediators where a settlement genuinely serves both sides.'],
    ['📍', 'Delhi court familiarity', 'City-specific guidance for filing in Saket, Karkardooma, Rohini, Dwarka, Patiala House and Tis Hazari.'],
  ],
  steps: [
    ['01', 'Consultation', 'We review the facts, marriage or custody history and any prior filings.'],
    ['02', 'Strategy', 'We assess contested versus mutual consent routes, interim relief and realistic timelines.'],
    ['03', 'Filing', 'Petitions, affidavits and documentary evidence are prepared and filed in the correct court.'],
    ['04', 'Hearings', 'Representation continues through mediation, evidence and argument stages.'],
    ['05', 'Resolution', 'We support the decree or order, followed by execution or compliance where needed.'],
  ],
};

export default function FamilyLawPage() {
  return <FamilyLawLanding page={FAMILY_LAW_OVERVIEW} basePath="/services/family-law" />;
}
