import { ImageResponse } from 'next/og';
export const runtime = 'edge';
export const alt = 'Indian laws and acts database by legalgroup';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function OpenGraphImage() {
  return new ImageResponse(<div style={{ background: '#0B1117', color: '#F7F2E8', width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: 80, fontFamily: 'serif' }}><div style={{ color: '#D4B058', fontSize: 28, letterSpacing: 8 }}>INDIAN LAW DATABASE</div><div style={{ fontSize: 70, fontWeight: 700, marginTop: 24 }}>Laws &amp; Acts</div><div style={{ fontSize: 32, marginTop: 20, color: '#B8C2C9' }}>Bare acts, amendments and legal updates</div></div>);
}
