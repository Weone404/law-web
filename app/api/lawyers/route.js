/**
 * app/api/lawyers/route.js
 * GET /api/lawyers?city=Delhi&area=Criminal
 */

import { NextResponse } from 'next/server';
import { LAWYERS } from '@/lib/constants/lawyers';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const city   = searchParams.get('city')  || '';
  const area   = searchParams.get('area')  || '';
  const search = searchParams.get('q')     || '';

  let results = [...LAWYERS];

  if (city && city !== 'All Cities') results = results.filter((l) => l.city === city);
  if (area && area !== 'All')        results = results.filter((l) => l.area === area);
  if (search) {
    const q = search.toLowerCase();
    results = results.filter(
      (l) => l.name.toLowerCase().includes(q) || l.specialization.toLowerCase().includes(q)
    );
  }

  return NextResponse.json({ data: results, total: results.length });
}
