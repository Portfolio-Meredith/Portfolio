import type { MetadataRoute } from 'next'
import { client } from '@/sanity/lib/client'
import { projectSlugsQuery } from '@/sanity/lib/queries'

export const revalidate = 60

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const projects: { slug: string }[] = await client.fetch(
    projectSlugsQuery,
    {},
    { next: { revalidate: 60 } }
  )

  return [
    {
      url: 'https://meredithmardirossian.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    ...projects.map((p) => ({
      url: `https://meredithmardirossian.fr/projets/${p.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
