import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { client } from '@/sanity/lib/client'
import { projectBySlugQuery, projectSlugsQuery } from '@/sanity/lib/queries'
import { urlFor } from '@/sanity/lib/image'
import Tag from '@/components/ui/Tag'
import Btn from '@/components/ui/Btn'
import SectionPill from '@/components/ui/SectionPill'
import Footer from '@/components/Footer'

export const revalidate = 60

interface Project {
  _id: string
  title: string
  missionType: string
  date?: string
  description?: string
  image?: unknown
  tags?: string[]
  link?: string
  slug: string
}

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-')
  const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  return `${monthNames[parseInt(month) - 1]} ${year}`
}

export async function generateStaticParams() {
  const slugs: { slug: string }[] = await client.fetch(
    projectSlugsQuery,
    {},
    { next: { revalidate: 60 } }
  )
  return slugs.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const project: Project | null = await client.fetch(
    projectBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  )

  if (!project) return { title: 'Projet introuvable' }

  const imageUrl = project.image
    ? urlFor(project.image).width(1200).height(630).fit('crop').quality(80).auto('format').url()
    : undefined

  return {
    title: `${project.title} — Mérédith Mardirossian`,
    description: project.description
      ? project.description.slice(0, 160)
      : `${project.missionType} — Portfolio de Mérédith Mardirossian`,
    openGraph: {
      title: project.title,
      description: project.description?.slice(0, 160),
      url: `https://meredithmardirossian.fr/projets/${project.slug}`,
      ...(imageUrl && { images: [{ url: imageUrl, width: 1200, height: 630 }] }),
    },
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project: Project | null = await client.fetch(
    projectBySlugQuery,
    { slug },
    { next: { revalidate: 60 } }
  )

  if (!project) notFound()

  const imageUrl = project.image
    ? urlFor(project.image).width(1240).quality(85).auto('format').url()
    : undefined

  return (
    <div className="bg-bg min-h-screen">
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>

        {/* Retour */}
        <div style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
          <Link
            href="/"
            className="text-muted hover:text-fg transition-colors duration-150 inline-flex items-center gap-1"
            style={{ fontSize: '0.8rem', fontWeight: 500 }}
          >
            ← Retour au portfolio
          </Link>
        </div>

        {/* Image */}
        {imageUrl && (
          <div
            className="relative overflow-hidden rounded-xl mb-8"
            style={{ aspectRatio: '16/10' }}
          >
            <Image
              src={imageUrl}
              alt={`${project.title} — ${project.missionType}`}
              fill
              sizes="(max-width: 640px) 100vw, 620px"
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* En-tête */}
        <div style={{ paddingBottom: '2rem' }}>
          {project.missionType && (
            <div style={{ marginBottom: '1rem' }}>
              <SectionPill>{project.missionType}</SectionPill>
            </div>
          )}

          <h1
            className="text-fg"
            style={{
              fontSize: '2rem',
              fontWeight: 800,
              letterSpacing: '-0.04em',
              lineHeight: 1.1,
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h1>

          {project.date && (
            <p className="text-subtle" style={{ fontSize: '0.78rem' }}>
              {formatDate(project.date)}
            </p>
          )}
        </div>

        <hr className="border-t border-border" />

        {/* Contenu */}
        <div style={{ padding: '2rem 0' }}>

          {project.description && (
            <p
              className="text-fg"
              style={{ fontSize: '0.875rem', lineHeight: 1.8, marginBottom: '2rem' }}
            >
              {project.description}
            </p>
          )}

          {project.tags && project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2" style={{ marginBottom: '2rem' }}>
              {project.tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
          )}

          {project.link && (
            <Btn href={project.link} target="_blank" rel="noopener noreferrer">
              Voir le projet ↗
            </Btn>
          )}
        </div>

      </main>

      <Footer />
    </div>
  )
}
