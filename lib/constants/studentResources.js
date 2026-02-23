/**
 * lib/constants/studentResources.js
 * Static data for the Students page.
 * Future: Replace with API fetch from your CMS (Strapi/Sanity/custom backend).
 */

export const STUDENT_RESOURCES = {
  notes: [
    { title: 'Constitutional Law — Fundamental Rights (Part III)', subject: 'Constitution of India', tag: 'Constitutional', updated: '2 days ago' },
    { title: 'Bharatiya Nyaya Sanhita 2023 — Complete Notes', subject: 'BNS (Replaces IPC)', tag: 'Criminal', updated: '1 day ago' },
    { title: 'BNSS 2023 — Arrest, Bail & Trial Procedure', subject: 'BNSS (Replaces CrPC)', tag: 'Procedure', updated: '3 days ago' },
    { title: 'Indian Contract Act 1872 — Essentials & Void Contracts', subject: 'Contract Law', tag: 'Civil', updated: '5 days ago' },
    { title: 'Bharatiya Sakshya Adhiniyam 2023 — Evidence Law', subject: 'BSA (Replaces Evidence Act)', tag: 'Evidence', updated: '4 days ago' },
    { title: 'Transfer of Property Act 1882 — Core Principles', subject: 'Property Law', tag: 'Property', updated: '1 day ago' },
    { title: 'Administrative Law — Principles of Natural Justice', subject: 'Admin Law', tag: 'Constitutional', updated: '6 days ago' },
    { title: 'Law of Torts — Negligence, Nuisance & Defamation', subject: 'Tort Law', tag: 'Civil', updated: '1 week ago' },
    { title: 'Jurisprudence — Schools of Legal Thought', subject: 'Legal Theory', tag: 'Core', updated: '3 days ago' },
  ],
  caselaws: [
    { title: 'Kesavananda Bharati v. State of Kerala (1973)', subject: 'Basic Structure Doctrine — 13 Judge Bench', tag: 'Landmark', updated: 'Constitutional' },
    { title: 'Maneka Gandhi v. Union of India (1978)', subject: 'Right to Life & Personal Liberty — Art. 21', tag: 'Landmark', updated: 'Fundamental Rights' },
    { title: 'Vishaka v. State of Rajasthan (1997)', subject: 'Sexual Harassment at Workplace — Vishaka Guidelines', tag: 'Landmark', updated: 'PIL' },
    { title: 'M.C. Mehta v. Union of India (1987)', subject: 'Absolute Liability — Bhopal Gas Disaster', tag: 'Landmark', updated: 'Tort Law' },
    { title: 'Mohori Bibee v. Dharmodas Ghose (1903)', subject: 'Minor\'s Agreement is Void ab initio', tag: 'Classic', updated: 'Contract' },
    { title: 'Indira Nehru Gandhi v. Raj Narain (1975)', subject: 'Emergency & Art. 329-A — Struck Down', tag: 'Landmark', updated: 'Constitutional' },
    { title: 'Navtej Singh Johar v. Union of India (2018)', subject: 'Decriminalisation of Section 377 IPC', tag: 'Landmark', updated: 'Fundamental Rights' },
    { title: 'Shreya Singhal v. Union of India (2015)', subject: 'Section 66A IT Act Struck Down', tag: 'Landmark', updated: 'Cyber Law' },
    { title: 'K.S. Puttaswamy v. Union of India (2017)', subject: 'Right to Privacy as Fundamental Right', tag: 'Landmark', updated: 'Fundamental Rights' },
  ],
  bareacts: [
    { title: 'Bharatiya Nyaya Sanhita, 2023 (BNS)', subject: 'New Criminal Code — Replaces IPC 1860', tag: 'New', updated: 'In Force: Jul 1, 2024' },
    { title: 'Bharatiya Nagarik Suraksha Sanhita, 2023 (BNSS)', subject: 'New Procedural Code — Replaces CrPC 1973', tag: 'New', updated: 'In Force: Jul 1, 2024' },
    { title: 'Bharatiya Sakshya Adhiniyam, 2023 (BSA)', subject: 'New Evidence Law — Replaces Indian Evidence Act', tag: 'New', updated: 'In Force: Jul 1, 2024' },
    { title: 'Constitution of India, 1950', subject: 'Supreme Law — 106th Amendment (2023)', tag: 'Core', updated: 'Always Current' },
    { title: 'Companies Act, 2013', subject: 'Corporate Law — MCA Administered', tag: 'Corporate', updated: '2024 Amendment' },
    { title: 'Digital Personal Data Protection Act, 2023', subject: 'Data Privacy & Protection Law', tag: 'New', updated: 'Rules Pending' },
    { title: 'Hindu Marriage Act, 1955', subject: 'Hindu Personal Law — Marriage & Divorce', tag: 'Family', updated: 'Amended' },
    { title: 'Specific Relief Act, 1963', subject: 'Civil Remedies — 2018 Amendment Key', tag: 'Civil', updated: 'Updated' },
    { title: 'POCSO Act, 2012', subject: 'Protection of Children from Sexual Offences', tag: 'Criminal', updated: '2019 Amendment' },
  ],
  blogs: [
    { title: 'Understanding BNS 2023: A Complete Comparative Analysis with IPC', subject: 'By Adv. Meera Krishnan', tag: 'Criminal', updated: '3 days ago' },
    { title: 'PMLA Amendments 2024: Impact on Corporate India', subject: 'By Adv. Rajan Gupta', tag: 'Corporate', updated: '1 week ago' },
    { title: 'AI & Law: The Future of the Indian Legal System', subject: 'By LexIndia Editorial Board', tag: 'LegalTech', updated: '2 days ago' },
    { title: 'Supreme Court Collegium System: Constitutional Validity & Reforms', subject: 'By Adv. Sunita Verma', tag: 'Constitutional', updated: '5 days ago' },
    { title: 'Consumer Protection Act 2019: Your Rights as a Digital Consumer', subject: 'By Adv. Pradeep Nair', tag: 'Civil', updated: '4 days ago' },
    { title: 'DPDP Act 2023: Everything You Need to Know About Data Privacy in India', subject: 'By LexIndia Research', tag: 'Cyber Law', updated: '1 day ago' },
    { title: 'Mediation Act 2023: Is India Ready for Alternative Dispute Resolution?', subject: 'By Adv. Ramesh Iyer', tag: 'Civil', updated: '6 days ago' },
    { title: 'Women\'s Reservation Act 2023: Legal Implications & Timeline', subject: 'By Adv. Divya Menon', tag: 'Constitutional', updated: '2 weeks ago' },
    { title: 'Insolvency & Bankruptcy Code: Recent NCLAT Rulings Analysed', subject: 'By Adv. Kapil Sharma', tag: 'Corporate', updated: '1 week ago' },
  ],
  career: [
    { title: 'How to Crack AIBE (All India Bar Examination) — Complete Guide 2024', subject: 'Enrolment, Syllabus & Practice Strategy', tag: 'Certification', updated: 'Essential' },
    { title: 'Judicial Services Examination — State & Central Judiciary Guide', subject: 'HJS, CJS, NJA Preparation Strategy', tag: 'Judiciary', updated: 'Popular' },
    { title: 'Corporate Law Career: In-house Counsel vs Law Firm vs LPO', subject: 'MNCs, Magic Circle Firms, BPO Sector', tag: 'Corporate', updated: 'Trending' },
    { title: 'Moot Court Preparation — Winning Strategies from National Champions', subject: 'Research, Memorials & Oral Advocacy', tag: 'Skills', updated: 'Must Read' },
    { title: 'CLAT PG 2025 Preparation Strategy — Topper\'s Perspective', subject: 'LLM Admissions at NLUs', tag: 'Exam', updated: 'Updated' },
    { title: 'Internship Guide: Top 15 Chambers & Law Firms in India', subject: 'Senior Advocate Chambers, Tier-1 Firms', tag: 'Internship', updated: 'New' },
    { title: 'LLM Abroad: US, UK, Australia — Guide for Indian Law Graduates', subject: 'Scholarships, GPA, LSAT, Applications', tag: 'Career', updated: '1 week ago' },
    { title: 'Legal Aid & Public Interest Law — A Career with Impact', subject: 'NGOs, NALSA, High Court Legal Services', tag: 'Career', updated: '5 days ago' },
    { title: 'Supreme Court Practice: How to Become an AOR (Advocate on Record)', subject: 'SC AOR Examination & Registration', tag: 'Certification', updated: 'Important' },
  ],
};
