/**
 * app/api/laws/route.js
 * API endpoint for Indian law updates.
 * Currently returns static data — replace with DB query for production.
 *
 * GET /api/laws?category=criminal&limit=10&offset=0
 */

import { NextResponse } from 'next/server';
import { LAW_UPDATES } from '@/lib/constants/lawUpdates';

export async function GET(request) {
  try {
    const { searchParams } = new URL(request.url);
    const category = searchParams.get('category') || 'all';
    const search   = searchParams.get('q')        || '';
    const limit    = parseInt(searchParams.get('limit')  || '20');
    const offset   = parseInt(searchParams.get('offset') || '0');

    let results = [...LAW_UPDATES];

    // Filter by category
    if (category !== 'all') {
      results = results.filter((u) => u.category === category);
    }

    // Search filter
    if (search) {
      const q = search.toLowerCase();
      results = results.filter(
        (u) => u.title.toLowerCase().includes(q) || u.summary?.toLowerCase().includes(q)
      );
    }

    // Pagination
    const total   = results.length;
    const paginated = results.slice(offset, offset + limit);

    return NextResponse.json({
      data:   paginated,
      total,
      limit,
      offset,
      hasMore: offset + limit < total,
    });
  } catch (error) {
    console.error('Laws API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}

/**
 * POST /api/laws — Admin: Add new law update (requires auth in production)
 */
export async function POST(request) {
  try {
    const body = await request.json();
    // TODO: Validate auth token
    // TODO: Insert into database
    // TODO: Revalidate cache: revalidatePath('/laws');
    return NextResponse.json({ success: true, data: body }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create law update' }, { status: 500 });
  }
}
