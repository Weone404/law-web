/**
 * app/privacy-policy/page.jsx
 * Privacy Policy page
 */

export const metadata = {
  title: 'Privacy Policy | Lex India',
  description: 'Read how Lex India collects, uses, and protects your information when you use our legal platform.',
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', padding: '96px 24px 80px', background: 'var(--dark-bg)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(34px, 5vw, 52px)', color: '#fff', marginBottom: 20 }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 28 }}>
          At Lex India, we respect your privacy and are committed to protecting your personal data. This policy explains what information we collect, why we collect it, and how we use it to improve your experience.
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            Information We Collect
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            We collect information when you interact with our platform, including contact details, consultation requests, and usage data. We may also collect information automatically through cookies and analytics tools.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            How We Use Your Data
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            Your information helps us deliver relevant services, respond to inquiries, process consultations, and improve platform performance. We do not sell your personal information to third parties.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            Security and Contact
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            We maintain reasonable security measures to protect your data. If you have questions about this policy, please contact us through the Contact page.
          </p>
        </section>
      </div>
    </div>
  );
}
