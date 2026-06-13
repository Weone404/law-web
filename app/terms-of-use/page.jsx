/**
 * app/terms-of-use/page.jsx
 * Terms of Use page
 */

export const metadata = {
  title: 'Terms of Use | Lex India',
  description: 'Review the Lex India terms and conditions for using our legal services platform.',
};

export default function TermsOfUsePage() {
  return (
    <div style={{ minHeight: '100vh', padding: '96px 24px 80px', background: 'var(--dark-bg)' }}>
      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: 'clamp(34px, 5vw, 52px)', color: '#fff', marginBottom: 20 }}>
          Terms of Use
        </h1>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.75)', lineHeight: 1.8, marginBottom: 28 }}>
          Welcome to Lex India. By using our website and services, you agree to these terms and conditions. Please read them carefully before continuing.
        </p>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            Use of Our Platform
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            You may use Lex India for lawful purposes only. You agree not to misuse our platform, submit false information, or attempt to access restricted areas of the site.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            Intellectual Property
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            All content on this site is owned or licensed by Lex India. You may not reproduce, distribute, or modify our content without permission.
          </p>
        </section>

        <section style={{ marginBottom: 32 }}>
          <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 24, color: 'var(--gold-primary)', marginBottom: 14 }}>
            Limitation of Liability
          </h2>
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 15, color: 'rgba(255,255,255,0.7)', lineHeight: 1.8 }}>
            Lex India is not liable for indirect or consequential damages from using this platform. Our services are provided "as is" without warranties to the fullest extent permitted by law.
          </p>
        </section>
      </div>
    </div>
  );
}
