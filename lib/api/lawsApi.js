/**
 * lib/api/lawsApi.js
 * ─────────────────────────────────────────────────────────────────────────────
 * RECOMMENDED APIS TO AVOID LOADING ALL DATA LOCALLY
 *
 * 3 Strategies:
 *   A) Indian Kanoon API   — real-time legal search, case laws, bare acts
 *   B) India Code API      — official bare acts from legislative.gov.in
 *   C) Hybrid              — static metadata locally + full text via API on demand
 * ─────────────────────────────────────────────────────────────────────────────
 */

// ─── STRATEGY A: Indian Kanoon API ──────────────────────────────────────────
// Signup: https://api.indiankanoon.org/signup/
// FREE for non-commercial use (Rs 10,000 credits/month after verification)
// Docs:   https://api.indiankanoon.org/

export async function searchLawsOnKanoon(query) {
    const res = await fetch('/api/kanoon/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ query }),
    });
    return res.json();
}

export async function getLawDocumentFromKanoon(docId) {
    const res = await fetch(`/api/kanoon/doc/${docId}`);
    return res.json();
}

// ─── STRATEGY B: India Code (Official Government API) ───────────────────────
// URL:     https://www.indiacode.nic.in
// FREE, no API key needed for browse
// Covers: All central acts, amendments, schedules

export async function searchIndiaCode(query) {
    const res = await fetch(
        `https://www.indiacode.nic.in/handle/123456789/1362?searchWord=${encodeURIComponent(query)}&type=Acts`,
    );
    return res.text(); // HTML scraping or use their OAI-PMH endpoint
}

// ─── STRATEGY C: HYBRID (RECOMMENDED) ───────────────────────────────────────
// - Store only metadata (title, category, status, tag) locally
// - Fetch full text/sections only when user clicks on a specific law
// - Use Next.js Route Handlers as a proxy to avoid CORS and hide API keys

/**
 * Next.js Route Handler — app/api/laws/search/route.js
 *
 * export async function POST(req) {
 *   const { query } = await req.json();
 *   const res = await fetch('https://api.indiankanoon.org/search/', {
 *     method: 'POST',
 *     headers: {
 *       Authorization: `Token ${process.env.INDIAN_KANOON_API_KEY}`,
 *       'Content-Type': 'application/x-www-form-urlencoded',
 *     },
 *     body: new URLSearchParams({ formInput: query, pagenum: 0 }),
 *   });
 *   const data = await res.json();
 *   return Response.json(data);
 * }
 */

// ─── STRATEGY D: Static JSON + CDN (Simplest) ───────────────────────────────
// Host lawUpdates.js as lawUpdates.json on a CDN (Vercel Edge, Cloudflare R2)
// Then fetch it once per session and cache in memory / SWR

export async function fetchLawsFromCDN() {
    const cached = sessionStorage.getItem('lex-india-laws');
    if (cached) return JSON.parse(cached);

    const res = await fetch('https://your-cdn.com/data/lawUpdates.json', {
        next: { revalidate: 86400 }, // Next.js: revalidate once per day
    });
    const data = await res.json();
    sessionStorage.setItem('lex-india-laws', JSON.stringify(data));
    return data;
}

// ─── RECOMMENDED SETUP ──────────────────────────────────────────────────────
/**
 * BEST APPROACH FOR YOUR PROJECT:
 *
 * 1. Keep lawUpdates.js as-is for METADATA (instant load, no API needed)
 *    → title, category, status, description, keyChanges (what you have now)
 *    → This is only ~200KB, negligible load
 *
 * 2. Add Indian Kanoon API for FULL TEXT when user opens a law
 *    → On law card click → fetch full bare act sections from Kanoon API
 *    → Show in a modal/side panel
 *
 * 3. Add India Code scraper for official government text
 *    → https://www.indiacode.nic.in/handle/123456789/XXXX
 *
 * 4. Use Next.js ISR (Incremental Static Regeneration) to auto-update
 *    → revalidate: 86400 (daily) in your fetch calls
 *
 * ENV VARIABLES needed (.env.local):
 * INDIAN_KANOON_API_KEY=your_key_here
 * NEXT_PUBLIC_CDN_URL=https://your-cdn.com
 */