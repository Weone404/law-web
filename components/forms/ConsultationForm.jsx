/**
 * components/forms/ConsultationForm.jsx
 * Full consultation booking form with validation.
 * Future: connect to API route /api/contact to send email via Resend.
 */
'use client';
import { useState } from 'react';

const SERVICES = [
  'Criminal Law', 'Civil Law', 'Corporate Law', 'Family Law',
  'Property Law', 'Constitutional Law', 'Cyber Law', 'Consumer Law',
  'Tax Law', 'Other',
];

const inputStyle = {
  width: '100%', padding: '12px 16px',
  background: 'rgba(255,255,255,0.06)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: 8, color: '#fff',
  fontFamily: 'var(--font-body)', fontSize: 16,
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.2s, box-shadow 0.2s',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--font-body)', fontSize: 13,
  color: 'rgba(255,255,255,0.55)', marginBottom: 8, letterSpacing: '0.05em',
};

export default function ConsultationForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading]     = useState(false);
  const [error, setError]         = useState('');

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleFocus  = (e) => { e.target.style.borderColor = 'var(--gold-primary)'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.14)'; };
  const handleBlur   = (e) => { e.target.style.borderColor = 'rgba(255,255,255,0.1)'; e.target.style.boxShadow = 'none'; };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setError('Please fill in Name, Email, and Message.'); return;
    }
    setError('');
    setLoading(true);

    /**
     * Future API integration:
     * await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) });
     */
    await new Promise((r) => setTimeout(r, 900)); // simulate network

    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div style={{ background: 'rgba(201,168,76,0.08)', border: '1px solid rgba(201,168,76,0.35)', borderRadius: 16, padding: '52px 32px', textAlign: 'center' }}>
        <div style={{ fontSize: 52, marginBottom: 16 }}>✅</div>
        <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: 26, color: 'var(--gold-primary)', marginBottom: 12 }}>Request Received!</h3>
        <p style={{ fontFamily: 'var(--font-body)', fontSize: 17, color: 'rgba(255,255,255,0.65)', lineHeight: 1.7 }}>
          Our team will contact you within 24 hours to schedule your consultation. Thank you for choosing legalgroup.
        </p>
      </div>
    );
  }

  return (
    <div>
      <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 700, color: '#F0E8D0', marginBottom: 32 }}>Book a Consultation</h2>

      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }} className="form-cols">
          <div>
            <label style={labelStyle}>Full Name *</label>
            <input name="name" value={form.name} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="Eg. Rajesh Kumar" style={inputStyle} />
          </div>
          <div>
            <label style={labelStyle}>Phone Number</label>
            <input name="phone" type="tel" value={form.phone} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="+91 98XXXXXXXX" style={inputStyle} />
          </div>
        </div>

        <div>
          <label style={labelStyle}>Email Address *</label>
          <input name="email" type="email" value={form.email} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur} placeholder="rajesh@example.com" style={inputStyle} />
        </div>

        <div>
          <label style={labelStyle}>Practice Area</label>
          <select name="service" value={form.service} onChange={handleChange} onFocus={handleFocus} onBlur={handleBlur}
            style={{ ...inputStyle, background: '#0A1628', cursor: 'pointer' }}>
            <option value="">Select practice area...</option>
            {SERVICES.map((s) => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>

        <div>
          <label style={labelStyle}>Describe Your Legal Matter *</label>
          <textarea
            name="message" value={form.message} onChange={handleChange}
            onFocus={handleFocus} onBlur={handleBlur}
            rows={5} placeholder="Please provide a brief description of your legal situation..."
            style={{ ...inputStyle, resize: 'vertical' }}
          />
        </div>

        {error && <p style={{ fontFamily: 'var(--font-body)', fontSize: 14, color: '#EF4444' }}>{error}</p>}

        <button
          type="submit"
          disabled={loading}
          style={{
            background: loading ? 'rgba(201,168,76,0.5)' : 'linear-gradient(135deg, var(--gold-primary), var(--gold-dark))',
            border: 'none', borderRadius: 8, padding: '15px 32px',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'var(--font-heading)', fontSize: 16, fontWeight: 700,
            color: '#050D1A', letterSpacing: '0.04em', transition: 'all 0.2s',
          }}
          onMouseEnter={(e) => { if (!loading) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(201,168,76,0.35)'; }}}
          onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}
        >
          {loading ? 'Submitting...' : 'Submit Consultation Request →'}
        </button>
      </form>

      <style>{`@media (max-width: 560px) { .form-cols { grid-template-columns: 1fr !important; } }`}</style>
    </div>
  );
}
