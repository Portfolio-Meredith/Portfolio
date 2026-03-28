import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import Tag from './Tag'

interface ProjectCardProps {
  title: string
  missionType: string
  date: string
  imageUrl?: string
  tags: string[]
  slug: string
}

export default function ProjectCard({ title, missionType, date, imageUrl, tags, slug }: ProjectCardProps) {
  return (
    <a
      href={`#${slug}`}
      className="flex flex-col flex-1 group"
      aria-label={`Voir le projet : ${title}`}
    >
      <Card className="flex-1 overflow-hidden border border-lavande bg-bg p-0 gap-0 ring-0 transition-colors duration-200 group-hover:border-nuit rounded-xl">
        {/* Image */}
        <div
          className="relative overflow-hidden img-zoom-wrapper shrink-0"
          style={{ aspectRatio: '16/10' }}
        >
          {imageUrl ? (
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover img-zoom"
            />
          ) : (
            <div className="w-full h-full bg-lavande flex items-center justify-center img-zoom">
              <span className="text-gris" style={{ fontSize: '0.75rem' }}>{missionType}</span>
            </div>
          )}
        </div>

        {/* Contenu */}
        <CardContent className="flex-1 flex flex-col px-4 pt-3 pb-4">
          <div className="flex items-center justify-between mb-1.5">
            <span className="text-subtle" style={{ fontSize: '0.7rem' }}>{missionType}</span>
            <span className="text-subtle" style={{ fontSize: '0.7rem' }}>{date}</span>
          </div>

          <p
            className="text-fg mb-2.5"
            style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.02em' }}
          >
            {title}
          </p>

          <div className="flex items-center justify-between mt-auto">
            <div className="flex flex-wrap gap-1">
              {tags.map((tag) => (
                <Tag key={tag}>{tag}</Tag>
              ))}
            </div>
            <span
              className="text-nuit shrink-0 ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150"
              style={{ fontSize: '0.75rem', fontWeight: 500 }}
            >
              → Voir
            </span>
          </div>
        </CardContent>
      </Card>
    </a>
  )
}
