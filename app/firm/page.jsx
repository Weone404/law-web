/**
 * app/firm/page.jsx — About Our Law Firm
 * Mission, Vision, Team, Why Choose Us, Credibility
 */

'use client';

import { motion } from 'framer-motion';
import PageHeader from '@/components/ui/PageHeader';
import SectionHeader from '@/components/ui/SectionHeader';

const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } };

const MVV = [
  {
    icon: '🎯',
    title: 'Our Mission',
    text: 'To deliver justice that is accessible, affordable, and anchored in the highest principles of Indian law — for every client, without exception.',
  },
  {
    icon: '🔭',
    title: 'Our Vision',
    text: 'To be India\'s most trusted legal institution, pioneering the intersection of legal expertise and modern technology to reshape how justice is delivered.',
  },
  {
    icon: '🤝',
    title: 'Our Promise',
    text: 'Every client receives the full weight of our firm\'s resources, relationships, and expertise — from the first consultation to the final judgment.',
  },
];

const VALUES = [
  { icon: '⚖️', title: 'Integrity First',    desc: 'We uphold the highest ethical standards in every case we handle. Justice begins with honesty.' },
  { icon: '🎯', title: 'Client-Centered',    desc: 'Your legal goals are our mission. We tailor our strategy to your unique situation and objectives.' },
  { icon: '🏆', title: 'Proven Track Record', desc: 'Over 2,400 successfully resolved cases across the Supreme Court, High Courts, and Tribunals.' },
  { icon: '🔬', title: 'Research-Driven',    desc: 'Every argument we build rests on deep legal research and intimate knowledge of Indian jurisprudence.' },
  { icon: '🌐', title: 'Pan-India Presence', desc: 'Offices in Delhi, Mumbai, and Bangalore — with associate counsel in every High Court state.' },
  { icon: '🔒', title: 'Absolute Confidentiality', desc: 'Attorney-client privilege is sacrosanct. Your matters remain strictly confidential, always.' },
];

const TEAM = [
  { name: 'Sr. Adv. Raghunath Krishnamurthy', title: 'Founder & Managing Partner', exp: '32 Years', icon: '👨‍⚖️', specialization: 'Constitutional & Supreme Court Practice' },
  { name: 'Adv. Lakshmi Venkatesh',           title: 'Senior Partner',             exp: '24 Years', icon: '👩‍⚖️', specialization: 'Corporate & Commercial Law' },
  { name: 'Adv. Anand Mehrotra',              title: 'Partner — Litigation',        exp: '18 Years', icon: '👨‍⚖️', specialization: 'Criminal Defence & Bail Matters' },
  { name: 'Adv. Deepika Pillai',              title: 'Partner — Advisory',          exp: '15 Years', icon: '👩‍⚖️', specialization: 'Family Law & Mediation' },
];

export default function FirmPage() {
  return (
    <div style={{ minHeight: '100vh', paddingTop: 72, background: 'var(--dark-bg)' }}>
      {/* Hero */}
      <div style={{
        background: 'linear-gradient(160deg, #050D1A 0%, #0A1628 50%, #0D1F3C 100%)',
        padding: '80px 24px 100px', position: 'relative', overflow: 'hidden',
      }}>
        {/* Concentric circle decoration */}
        {[0, 1, 2].map((i) => (
          <div key={i} style={{
            position: 'absolute', right: `${8 + i * 7}%`, top: '50%',
            transform: 'translateY(-50%)',
            width: `${220 + i * 100}px`, height: `${220 + i * 100}px`,
            borderRadius: '50%',
            border: `1px solid rgba(201,168,76,${0.1 - i * 0.03})`,
            pointerEvents: 'none',
          }} />
        ))}

        <div style={{ maxWidth: 1280, margin: '0 auto', position: 'relative' }}>
          <motion.div
            initial="hidden" animate="visible"
            variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
            style={{ maxWidth: 700 }}
          >
            <motion.div variants={fadeUp}>
              <span style={{
                display: 'inline-block', background: 'rgba(201,168,76,0.12)',
                border: '1px solid rgba(201,168,76,0.3)', borderRadius: 20,
                padding: '5px 16px', marginBottom: 24,
                color: 'var(--gold-primary)', fontFamily: 'var(--font-body)',
                fontSize: 12, letterSpacing: '0.25em', textTransform: 'uppercase',
              }}>Est. 2009 · New Delhi</span>
            </motion.div>

            <motion.h1 variants={fadeUp} style={{
              fontFamily: 'var(--font-heading)', fontSize: 'clamp(36px,5.5vw,68px)',
              color: '#fff', fontWeight: 900, lineHeight: 1.1, marginBottom: 24,
            }}>
              Lex India<br />
              <span style={{ color: 'var(--gold-primary)' }}>Law Chambers</span>
            </motion.h1>

            <motion.p variants={fadeUp} style={{
              fontFamily: 'var(--font-body)', fontSize: 20,
              color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, maxWidth: 560,
            }}>
              A full-service law firm built on decades of dedication to Indian jurisprudence,
              representing individuals to Fortune 500 companies across every tier of the judicial system.
            </motion.p>
          </motion.div>
        </div>
      </div>

      {/* Mission / Vision / Promise */}
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '80px 24px' }}>
        <div className="responsive-grid-3" style={{ marginBottom: 80 }}>
          {MVV.map((item, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.12 } } }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--dark-border)',
                borderRadius: 16, padding: '40px 32px',
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 16 }}>{item.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 22, fontWeight: 700, color: 'var(--gold-primary)', marginBottom: 16 }}>{item.title}</h3>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.75 }}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Why Choose Us */}
        <SectionHeader eyebrow="Why Choose Us" title="What Sets Us Apart" />
        <div className="responsive-grid-3" style={{ marginTop: 48, marginBottom: 80 }}>
          {VALUES.map((v, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.08 } } }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(201,168,76,0.1)',
                borderRadius: 12, padding: '32px 24px', textAlign: 'center',
              }}
            >
              <div style={{ fontSize: 40, marginBottom: 16 }}>{v.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 18, fontWeight: 700, color: '#F0E8D0', marginBottom: 12 }}>{v.title}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.55)', lineHeight: 1.7 }}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Leadership */}
        <SectionHeader eyebrow="Leadership" title="Our Senior Partners" />
        <div className="responsive-grid-4" style={{ marginTop: 48 }}>
          {TEAM.map((member, i) => (
            <motion.div
              key={i}
              initial="hidden" whileInView="visible" viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { delay: i * 0.1 } } }}
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid var(--dark-border)',
                borderRadius: 16, padding: '32px 24px', textAlign: 'center',
              }}
            >
              <div style={{
                width: 80, height: 80, borderRadius: '50%',
                background: 'linear-gradient(135deg, rgba(201,168,76,0.25), rgba(201,168,76,0.05))',
                border: '2px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: 36, margin: '0 auto 16px',
              }}>{member.icon}</div>
              <h4 style={{ fontFamily: 'var(--font-heading)', fontSize: 17, fontWeight: 700, color: '#F0E8D0', marginBottom: 6 }}>{member.name}</h4>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: 'var(--gold-primary)', marginBottom: 4 }}>{member.title}</p>
              <p style={{ fontFamily: 'var(--font-body)', fontSize: 13, color: 'rgba(255,255,255,0.45)', marginBottom: 8 }}>{member.specialization}</p>
              <span style={{
                background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: 20, padding: '3px 12px',
                fontFamily: 'var(--font-body)', fontSize: 12, color: 'var(--gold-primary)',
              }}>{member.exp} Experience</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
