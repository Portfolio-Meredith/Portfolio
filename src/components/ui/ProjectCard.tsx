import Image from 'next/image'
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
      className="block text-left group"
      aria-label={`Voir le projet : ${title}`}
    >
      <div
        className="relative border overflow-hidden mb-3 img-zoom-wrapper transition-colors duration-200 group-hover:border-nuit"
        style={{ aspectRatio: '16/10', borderRadius: '10px', borderColor: '#e5e7eb' }}
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

      <div className="flex items-center justify-between mb-1.5">
        <span className="text-subtle" style={{ fontSize: '0.7rem' }}>{missionType}</span>
        <span className="text-subtle" style={{ fontSize: '0.7rem' }}>{date}</span>
      </div>

      <p
        className="text-fg mb-2"
        style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.02em' }}
      >
        {title}
      </p>

      <div className="flex items-center justify-between">
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
    </a>
  )
}
