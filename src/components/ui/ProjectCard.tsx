import Image from 'next/image'
import Tag from './Tag'

interface ProjectCardProps {
  title: string
  missionType: string
  date: string
  description: string
  imageUrl?: string
  tags: string[]
  slug: string
}

export default function ProjectCard({ title, missionType, date, description, imageUrl, tags, slug }: ProjectCardProps) {
  return (
    <a
      href={`#${slug}`}
      className="block text-left"
      aria-label={`Voir le projet : ${title}`}
    >
      <div
        className="relative border border-border overflow-hidden mb-2 img-zoom-wrapper"
        style={{ aspectRatio: '16/10', borderRadius: '8px' }}
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
            <span className="text-gris" style={{ fontSize: '0.8rem' }}>{missionType}</span>
          </div>
        )}
      </div>
      <p className="text-subtle mb-0.5" style={{ fontSize: '0.72rem' }}>{date}</p>
      <p
        className="text-fg mb-1"
        style={{ fontSize: '0.875rem', fontWeight: 600, letterSpacing: '-0.02em' }}
      >
        {title}
      </p>
      <p className="text-muted mb-2" style={{ fontSize: '0.775rem', lineHeight: 1.65 }}>
        {description}
      </p>
      <div className="flex flex-wrap gap-1 mb-2">
        {tags.map((tag) => (
          <Tag key={tag}>{tag}</Tag>
        ))}
      </div>
      <span
        className="text-nuit"
        style={{ fontSize: '0.78rem', fontWeight: 500 }}
      >
        → Voir le projet
      </span>
    </a>
  )
}
