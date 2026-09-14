import PropertyLawPage from '@/components/property/PropertyLawPage';
import { createMetadata } from '@/lib/seo';

export const metadata = {
  ...createMetadata('/property-law', {
    title: 'Property Lawyer in Delhi | legalgroup',
    description: 'Property law advice in Delhi for title checks, real estate transactions, ownership disputes, registration and documentation support. Request a consultation.',
  }),
  keywords: ['property lawyer in delhi', 'property law india', 'real estate lawyer delhi', 'property dispute lawyer delhi', 'property registration lawyer delhi', 'title verification lawyer', 'property documentation lawyer'],
};

const PROPERTY_LAW_OVERVIEW = {
  slug: 'property-law',
  path: '/property-law',
  title: 'Property Law Lawyer in Delhi',
  shortTitle: 'Property Law',
  badge: '● Property counsel for Delhi transactions and disputes',
  subtitle: 'Legal support for title review, property documentation, sale transactions, ownership disputes, registration and builder-related concerns across Delhi and India.',
  stats: [['4', 'Core property services'], ['6', 'Delhi courts'], ['15+', 'Years property-law experience']],
  explainerTitle: 'What Property Law Covers',
  services: [
    ['Property ownership and title review', 'Assessing ownership, title records, encumbrances and risk before purchase, transfer or litigation.'],
    ['Property dispute support', 'Advising on possession claims, co-owner disputes, partition issues and injunction-related property matters.'],
    ['Real estate transaction guidance', 'Reviewing sale and purchase terms, builder agreements, possession issues and legal risk in real-estate deals.'],
    ['Registration and document review', 'Checking deed accuracy, document compliance and legal strategy before property registration.'],
  ],
  issues: [
    ['🏠', 'Title and ownership concerns', 'Unclear ownership, incomplete records or disputed sale history can affect your position materially.'],
    ['⚖️', 'Property disputes', 'Co-owner conflict, boundary disagreement, possession issues and inheritance disputes often require time-sensitive advice.'],
    ['🏢', 'Real estate transactions', 'A standard agreement can still contain unbalanced terms, risky possession clauses or hidden liabilities.'],
    ['🧾', 'Registration and documentation', 'Mistakes in deed language, property description or transfer records can create avoidable legal issues later.'],
  ],
  trustPoints: ['Confidential consultation', 'Document-first review', 'Delhi-based property support'],
  process: [
    ['01', 'Initial review', 'We map the property issue, the key documents and the legal outcome you want.'],
    ['02', 'Legal analysis', 'We review title, documentation, approvals and risk before recommending the next step.'],
    ['03', 'Strategic action', 'We advise on negotiation, notices, registration or court-based remedies where appropriate.'],
    ['04', 'Representation', 'We help carry the matter through execution, hearings or negotiated resolution.'],
  ],
  explainer: [
    'Property law matters often begin with a simple question: Is the title clean, are the documents strong, and what is the right legal path for the facts at hand? In Delhi, property matters may involve sale agreements, title records, family inheritance, possession claims, builder disputes, registration steps, or civil litigation. Clear advice can prevent a small issue from becoming a major financial or legal problem.',
    'A property lawyer helps review the facts, examine the relevant documents and explain the legal position before a transaction is finalised or litigation is begun. This can include title verification, document review, notice drafting, negotiation, registration guidance, or representation in court. The right answer depends not just on the law but also on the specific property, chronology of events and wider factual background.',
    'From a purchase agreement to a family inheritance dispute, legal review should focus on practical risk and realistic next steps rather than generic advice. For many clients, the most useful immediate step is a careful review of ownership, possession, approvals and documentation so that the next action is informed and measured.'
  ],
};

export default function PropertyLawLandingPage() {
  return <PropertyLawPage page={PROPERTY_LAW_OVERVIEW} isOverview />;
}
