// src/app/api/revalidate-skills/route.ts
import { revalidateTag } from 'next/cache'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const secret = request.headers.get('secret');
    if (secret !== process.env.SUPABASE_WEBHOOK_SECRET) {
      return NextResponse.json({ message: 'Unauthorized' }, { status: 401 })
    }

    revalidateTag('skills-tag', {expire: 0})

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (err) {
    return NextResponse.json({ message: 'Error revalidating' }, { status: 500 })
  }
}
