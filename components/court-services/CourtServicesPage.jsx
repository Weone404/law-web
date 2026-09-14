'use client';

import Link from 'next/link';
import JsonLd from '@/components/seo/JsonLd';
import { BRAND_NAME, SITE_URL } from '@/lib/seo';

const RELATED_LINKS = [
  ['Criminal Law', '/services/criminal-law'],
  ['Civil Litigation', '/services/civil-law'],
  ['Constitutional Law', '/services/constitutional-law'],
  ['Corporate Law', '/corporate-law'],
  ['Family Law', '/family-law'],
  ['Property Law', '/property-law'],
];

function SectionLabel({ children }) {
  return <p className="court-label">{children}</p>;
}

export default function CourtServicesPage({ page }) {
  const url = `${SITE_URL}/court-services/${page.slug}`;
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'LegalService', name: `${BRAND_NAME} — ${page.title}`, url, areaServed: 'Delhi, India', serviceType: 'Court representation and litigation services' },
      { '@type': 'BreadcrumbList', itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
        { '@type': 'ListItem', position: 2, name: 'Court Services', item: `${SITE_URL}/court-services` },
        { '@type': 'ListItem', position: 3, name: page.title, item: url },
      ] },
      { '@type': 'FAQPage', mainEntity: page.faqs.map(([question, answer]) => ({
        '@type': 'Question', name: question, acceptedAnswer: { '@type': 'Answer', text: answer },
      })) },
    ],
  };

  return (
    <>
      <JsonLd data={schema} />
      <main className="court-page">
        <section className="court-hero">
          <div className="court-hero-orbit" aria-hidden="true"><span>§</span></div>
          <div className="court-container court-hero-inner">
            <nav className="court-breadcrumb" aria-label="Breadcrumb">
              <Link href="/">Home</Link><span>/</span><Link href="/court-services">Court Services</Link><span>/</span><span aria-current="page">{page.title}</span>
            </nav>
            <div className="court-hero-copy">
              <SectionLabel>Court Services</SectionLabel>
              <h1>{page.title}</h1>
              <p>Experienced legal representation and strategic litigation support for matters before the courts in Delhi.</p>
              <div className="court-actions">
                <Link href="/contact" className="lex-btn lex-btn-primary">Book a Consultation <span>→</span></Link>
                <a href="#services" className="lex-btn lex-btn-outline">Explore Court Services <span>↓</span></a>
              </div>
            </div>
          </div>
        </section>

        <section className="court-trust">
          <div className="court-container court-trust-grid">
            {['Experienced legal team', 'Trial & appellate representation', 'Strategic case preparation', 'Confidential consultation'].map((item, index) => (
              <div className="court-trust-item" key={item}><span>0{index + 1}</span>{item}</div>
            ))}
          </div>
        </section>

        <section className="court-section court-intro">
          <div className="court-container court-two-col">
            <div><SectionLabel>Our approach</SectionLabel><h2>{page.introTitle}</h2></div>
            <div className="court-copy"><p>{page.intro}</p><p>{page.introSecond}</p></div>
          </div>
        </section>

        <section className="court-section court-services-section" id="services">
          <div className="court-container">
            <div className="court-section-heading"><div><SectionLabel>Practice focus</SectionLabel><h2>{page.servicesTitle}</h2></div><p>Focused advice and representation shaped around the forum, facts and stage of each matter.</p></div>
            <div className="court-card-grid">{page.services.map(([title, description], index) => <article className="court-card" key={title}><span className="court-card-number">0{index + 1}</span><h3>{title}</h3><p>{description}</p></article>)}</div>
          </div>
        </section>

        <section className="court-section court-dark-section">
          <div className="court-container court-two-col">
            <div><SectionLabel>Why legalgroup</SectionLabel><h2>Measured preparation. Clear communication.</h2></div>
            <div className="court-feature-list">{[
              ['Strategic case assessment', 'Understand the facts, legal position and practical objective before developing a litigation strategy.'],
              ['Thorough legal research', 'Relevant statutes, precedents and procedural requirements are evaluated carefully.'],
              ['Strong courtroom preparation', 'Pleadings, evidence, arguments and hearing requirements are prepared systematically.'],
              ['End-to-end support', 'Receive clear updates from the initial consultation through hearings and subsequent remedies where appropriate.'],
            ].map(([title, text]) => <div className="court-feature" key={title}><span>✦</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div>
          </div>
        </section>

        <section className="court-section">
          <div className="court-container">
            <div className="court-section-heading"><div><SectionLabel>The process</SectionLabel><h2>From consultation to representation</h2></div><p>A structured process keeps the legal strategy grounded in the record and the client’s objective.</p></div>
            <div className="court-process">{['Initial consultation', 'Case assessment', 'Legal research & strategy', 'Filing / representation', 'Hearings & ongoing support'].map((step, index) => <div className="court-step" key={step}><span>0{index + 1}</span><h3>{step}</h3></div>)}</div>
          </div>
        </section>

        <section className="court-section court-audience">
          <div className="court-container court-two-col"><div><SectionLabel>Who we assist</SectionLabel><h2>Representation for matters that require care and clarity.</h2></div><div className="court-client-list">{page.clients.map((client) => <span key={client}>{client}</span>)}</div></div>
        </section>

        <section className="court-section court-court-info">
          <div className="court-container court-two-col"><div><SectionLabel>In focus</SectionLabel><h2>{page.courtTitle}</h2></div><div className="court-copy"><p>{page.courtText}</p><div className="court-related"><span>Related legal services</span>{RELATED_LINKS.map(([label, href]) => <Link href={href} key={label}>{label} <b>↗</b></Link>)}</div></div></div>
        </section>

        <section className="court-section court-faq">
          <div className="court-container court-two-col"><div><SectionLabel>Common questions</SectionLabel><h2>Clarity before the next step.</h2></div><div>{page.faqs.map(([question, answer]) => <details key={question}><summary>{question}<span>+</span></summary><p>{answer}</p></details>)}</div></div>
        </section>

        <section className="court-final-cta"><div className="court-container"><SectionLabel>Legal consultation</SectionLabel><h2>Need legal representation?</h2><p>Speak with our legal team about your matter and understand the appropriate legal options available to you.</p><div className="court-actions"><Link href="/contact" className="lex-btn lex-btn-primary">Book a Consultation <span>→</span></Link><Link href="/contact" className="lex-btn lex-btn-outline">Contact Our Legal Team <span>→</span></Link></div></div></section>
      </main>
      <style jsx>{`
        .court-page { background: var(--bg-primary); color: var(--text-primary); }
        .court-container { max-width: 1180px; margin: 0 auto; }
        .court-hero { min-height: 570px; padding: 120px 24px 76px; position: relative; overflow: hidden; background: linear-gradient(125deg, var(--bg-primary), var(--bg-secondary)); }
        .court-hero:after { content: ''; position: absolute; width: 560px; height: 560px; right: -160px; top: 30px; border: 1px solid rgba(201,168,76,.2); border-radius: 50%; box-shadow: 0 0 0 52px rgba(201,168,76,.035), 0 0 0 104px rgba(201,168,76,.025); }
        .court-hero-inner { position: relative; z-index: 1; }
        .court-breadcrumb { display: flex; flex-wrap: wrap; gap: 10px; color: var(--text-muted); font: 14px var(--font-body); margin-bottom: 82px; }
        .court-breadcrumb a { color: var(--gold-primary); }
        .court-hero-copy { max-width: 720px; }
        .court-label { color: var(--gold-primary); font: 600 12px var(--font-body); letter-spacing: .2em; text-transform: uppercase; margin-bottom: 18px; }
        h1, h2, h3 { font-family: var(--font-heading); }
        .court-hero h1 { font-size: clamp(42px, 6vw, 78px); line-height: 1.05; margin-bottom: 22px; max-width: 720px; }
        .court-hero-copy > p { color: var(--text-secondary); font: 21px/1.6 var(--font-body); max-width: 600px; }
        .court-actions { display: flex; flex-wrap: wrap; gap: 14px; margin-top: 34px; }
        .court-actions .lex-btn { cursor: pointer; }
        .court-actions span { font-size: 18px; }
        .court-trust { border-top: 1px solid var(--border-color); border-bottom: 1px solid var(--border-color); background: var(--bg-secondary); }
        .court-trust-grid { display: grid; grid-template-columns: repeat(4, 1fr); }
        .court-trust-item { min-height: 86px; padding: 20px; display: flex; align-items: center; gap: 14px; border-right: 1px solid var(--border-color); color: var(--text-secondary); font: 16px var(--font-body); }
        .court-trust-item:last-child { border: 0; }
        .court-trust-item span, .court-card-number { color: var(--gold-primary); font: 12px var(--font-body); letter-spacing: .15em; }
        .court-section { padding: 100px 24px; }
        .court-two-col { display: grid; grid-template-columns: minmax(260px, .85fr) 1.15fr; gap: clamp(40px, 8vw, 120px); }
        h2 { font-size: clamp(32px, 4vw, 50px); line-height: 1.12; }
        .court-copy { color: var(--text-secondary); font: 19px/1.75 var(--font-body); }
        .court-copy p + p { margin-top: 20px; }
        .court-services-section, .court-audience { background: var(--bg-secondary); }
        .court-section-heading { display: flex; justify-content: space-between; align-items: end; gap: 30px; margin-bottom: 42px; }
        .court-section-heading > p { max-width: 360px; color: var(--text-muted); font: 17px/1.6 var(--font-body); }
        .court-card-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; }
        .court-card { padding: 28px; min-height: 190px; border: 1px solid var(--border-color); background: var(--card-bg); transition: transform .25s, border-color .25s, box-shadow .25s; }
        .court-card:hover { transform: translateY(-5px); border-color: rgba(201,168,76,.55); box-shadow: 0 18px 44px rgba(0,0,0,.12); }
        .court-card h3 { font-size: 22px; margin: 28px 0 10px; }
        .court-card p, .court-feature p, .court-step h3 { color: var(--text-secondary); font: 16px/1.6 var(--font-body); }
        .court-dark-section { background: #0B1117; color: #F7F2E8; }
        .court-dark-section .court-label { color: #F0D060; }
        .court-dark-section .court-feature p, .court-dark-section .court-feature h3 { color: rgba(247,242,232,.78); }
        .court-feature-list { display: grid; grid-template-columns: 1fr 1fr; gap: 28px 34px; }
        .court-feature { display: flex; gap: 15px; }
        .court-feature > span { color: #F0D060; }
        .court-feature h3 { font-size: 20px; margin-bottom: 8px; }
        .court-process { display: grid; grid-template-columns: repeat(5, 1fr); border-top: 1px solid var(--border-color); }
        .court-step { padding: 26px 18px 0 0; border-right: 1px solid var(--border-color); margin-right: 18px; }
        .court-step:last-child { border: 0; }
        .court-step span { color: var(--gold-primary); font: 14px var(--font-body); letter-spacing: .15em; }
        .court-step h3 { margin-top: 30px; font-size: 20px; }
        .court-client-list { display: flex; flex-wrap: wrap; gap: 12px; align-content: start; }
        .court-client-list span { border: 1px solid var(--border-color); padding: 13px 17px; color: var(--text-secondary); font: 16px var(--font-body); background: var(--card-bg); }
        .court-court-info { border-top: 1px solid var(--border-color); }
        .court-related { margin-top: 34px; display: flex; flex-wrap: wrap; gap: 10px 20px; }
        .court-related span { flex-basis: 100%; color: var(--gold-primary); font: 600 12px var(--font-body); letter-spacing: .15em; text-transform: uppercase; }
        .court-related a { color: var(--text-primary); font: 16px var(--font-body); border-bottom: 1px solid rgba(201,168,76,.45); padding-bottom: 4px; }
        .court-related b { color: var(--gold-primary); font-weight: 400; }
        .court-faq { background: var(--bg-secondary); }
        details { border-bottom: 1px solid var(--border-color); padding: 0 0 18px; margin-bottom: 18px; }
        summary { list-style: none; cursor: pointer; display: flex; justify-content: space-between; gap: 20px; color: var(--text-primary); font: 20px var(--font-heading); }
        summary::-webkit-details-marker { display: none; }
        summary span { color: var(--gold-primary); font: 24px var(--font-body); }
        details[open] summary span { transform: rotate(45deg); }
        details p { color: var(--text-secondary); font: 17px/1.65 var(--font-body); max-width: 680px; margin-top: 14px; }
        .court-final-cta { padding: 96px 24px; text-align: center; background: linear-gradient(135deg, #C9A84C, #8B6914 60%, #5C4209); color: #050D1A; }
        .court-final-cta .court-label { color: rgba(5,13,26,.7); }
        .court-final-cta h2 { font-size: clamp(34px, 5vw, 60px); }
        .court-final-cta > .court-container > p { max-width: 560px; margin: 16px auto; color: rgba(5,13,26,.76); font: 19px/1.6 var(--font-body); }
        .court-final-cta .court-actions { justify-content: center; }
        .court-final-cta .lex-btn-primary { background: #050D1A; color: #C9A84C; }
        .court-final-cta .lex-btn-outline { border-color: rgba(5,13,26,.4); color: #050D1A; }
        @media (max-width: 800px) { .court-trust-grid, .court-card-grid { grid-template-columns: 1fr 1fr; } .court-trust-item:nth-child(2) { border-right: 0; } .court-trust-item:nth-child(-n+2) { border-bottom: 1px solid var(--border-color); } .court-two-col { grid-template-columns: 1fr; gap: 34px; } .court-section-heading { display: block; } .court-section-heading > p { margin-top: 18px; } .court-process { grid-template-columns: 1fr 1fr; gap: 24px 0; } .court-step:nth-child(2) { border-right: 0; } }
        @media (max-width: 540px) { .court-hero { padding-top: 104px; min-height: 560px; } .court-breadcrumb { margin-bottom: 54px; font-size: 13px; } .court-hero-copy > p { font-size: 18px; } .court-actions .lex-btn { width: 100%; justify-content: center; } .court-trust-grid, .court-card-grid, .court-feature-list, .court-process { grid-template-columns: 1fr; } .court-trust-item, .court-trust-item:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--border-color); } .court-trust-item:last-child { border-bottom: 0; } .court-section { padding: 72px 20px; } .court-step, .court-step:nth-child(2) { border-right: 0; border-bottom: 1px solid var(--border-color); padding-bottom: 20px; margin-right: 0; } .court-step:last-child { border-bottom: 0; } }
      `}</style>
    </>
  );
}
