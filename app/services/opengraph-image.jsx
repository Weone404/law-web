import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'legalgroup lawyers and legal services in India';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: '#14212C', color: '#F7F2E8', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, fontFamily: 'serif' }}><div style={{ color: '#D4B058', fontSize: 28, letterSpacing: 8 }}>LEGAL SERVICES</div><div style={{ fontSize: 72, fontWeight: 700, marginTop: 24 }}>Find your advocate</div><div style={{ fontSize: 32, marginTop: 20, color: '#B8C2C9' }}>Criminal, corporate, family, property and civil law</div></div>);
}
