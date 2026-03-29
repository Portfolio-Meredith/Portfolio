import { revalidatePath } from 'next/cache'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get('secret')

  // Validation du secret — jamais exposé côté client
  if (!secret || secret !== process.env.SANITY_REVALIDATE_SECRET) {
    return NextResponse.json(
      { message: 'Invalid or missing secret' },
      { status: 401 }
    )
  }

  try {
    // Revalide la page d'accueil et toutes les pages projets
    revalidatePath('/')
    revalidatePath('/projets/[slug]', 'page')

    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch {
    return NextResponse.json(
      { message: 'Error revalidating' },
      { status: 500 }
    )
  }
}
