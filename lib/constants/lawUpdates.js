/**
 * lib/constants/lawUpdates.js
 * Indian law updates data.
 * Future: Replace with fetch from backend API / CMS webhook.
 * Structure is API-ready: add an `id` field to each item for DB rows.
 */

export const LAW_CATEGORIES = [
  { id: 'all',           label: 'All Laws' },
  { id: 'criminal',      label: '⚖️ Criminal' },
  { id: 'civil',         label: '🏛️ Civil' },
  { id: 'constitutional', label: '📜 Constitutional' },
  { id: 'corporate',     label: '🏢 Corporate' },
  { id: 'family',        label: '👨‍👩‍👧 Family' },
  { id: 'cyber',         label: '💻 Cyber' },
  { id: 'tax',           label: '💰 Tax' },
];

export const LAW_UPDATES = [
  {
    id: 'bns-2023',
    title: 'Bharatiya Nyaya Sanhita (BNS) 2023 — Full Implementation',
    summary: 'India\'s new criminal code replacing the 163-year-old IPC. Introduces organised crime, terrorism as explicit offences, and tightens sedition law.',
    date: 'July 1, 2024', category: 'criminal', type: 'New Law', urgent: true,
  },
  {
    id: 'bnss-2023',
    title: 'Bharatiya Nagarik Suraksha Sanhita (BNSS) 2023 — In Force',
    summary: 'Replaces CrPC 1973. Mandates audio-video recording of confessions, Zero FIR for any offence, and trial-in-absentia provisions.',
    date: 'July 1, 2024', category: 'criminal', type: 'New Law', urgent: true,
  },
  {
    id: 'dpdp-2023',
    title: 'Digital Personal Data Protection Act 2023 — Rules Notified',
    summary: 'India\'s first comprehensive data protection law. GDPR-inspired framework governing how personal data is collected, processed and stored.',
    date: 'March 2024', category: 'cyber', type: 'New Law', urgent: true,
  },
  {
    id: 'companies-amendment-2024',
    title: 'Companies (Amendment) Act 2024 — Key Changes',
    summary: 'Streamlines MCA compliance, reduces penalties for procedural defaults, and strengthens corporate governance norms under the 2013 Act.',
    date: 'February 2024', category: 'corporate', type: 'Amendment', urgent: false,
  },
  {
    id: 'mediation-act-2023',
    title: 'Mediation Act 2023 — ADR Framework for India',
    summary: 'Establishes Mediation Council of India. Makes pre-litigation mediation mandatory for certain commercial disputes.',
    date: 'September 2023', category: 'civil', type: 'New Law', urgent: false,
  },
  {
    id: 'const-106-women',
    title: 'Constitution 106th Amendment — Women\'s Reservation Act',
    summary: '33% reservation for women in Lok Sabha, State Assemblies and Delhi Legislative Assembly. Effective after next delimitation exercise.',
    date: 'September 2023', category: 'constitutional', type: 'Amendment', urgent: false,
  },
  {
    id: 'pocso-sc-guidelines-2023',
    title: 'POCSO Act — Supreme Court Sentencing Guidelines Update',
    summary: 'SC issued comprehensive guidelines on victim compensation, speedy trial timelines, and mandatory counselling in POCSO cases.',
    date: 'December 2023', category: 'criminal', type: 'Guidelines', urgent: false,
  },
  {
    id: 'budget-it-2024',
    title: 'Income Tax Act — Finance Act 2024 Amendments',
    summary: 'Changes to LTCG indexation, removal of debt mutual fund tax benefit, revised TDS rates, and new compliance requirements.',
    date: 'February 2024', category: 'tax', type: 'Budget', urgent: false,
  },
  {
    id: 'special-marriage-sc',
    title: 'Special Marriage Act — Challenge to Section 6 Pending in SC',
    summary: 'Supreme Court considering petition challenging mandatory 30-day public notice requirement under SMA as unconstitutional privacy violation.',
    date: 'January 2024', category: 'family', type: 'Court Order', urgent: false,
  },
  {
    id: 'arbitration-amendment-2024',
    title: 'Arbitration & Conciliation (Amendment) Bill 2024',
    summary: 'Proposes establishment of Arbitration Council of India, grading of arbitrators, and provisions for international commercial arbitration.',
    date: 'March 2024', category: 'civil', type: 'Amendment', urgent: false,
  },
  {
    id: 'sebi-regulations-2024',
    title: 'SEBI (Issue of Capital) Amendment Regulations 2024',
    summary: 'New rules for IPO pricing, lock-in periods for promoters, and enhanced disclosure requirements for mainboard and SME listings.',
    date: 'January 2024', category: 'corporate', type: 'Amendment', urgent: false,
  },
  {
    id: 'hindu-marriage-sc-2024',
    title: 'Supreme Court — Mutual Consent Divorce Without 6-Month Wait',
    summary: 'SC reaffirms power under Art. 142 to waive mandatory 6-month cooling-off period in mutual consent divorce cases.',
    date: 'February 2024', category: 'family', type: 'Court Order', urgent: false,
  },
];
