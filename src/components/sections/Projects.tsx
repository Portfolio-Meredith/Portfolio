'use client'

import { m } from 'motion/react'
import SectionPill from '@/components/ui/SectionPill'
import ProjectCard from '@/components/ui/ProjectCard'
import { urlFor } from '@/sanity/lib/image'

interface Project {
  _id: string
  title: string
  missionType: string
  date: string
  image?: unknown
  imageLqip?: string
  tags: string[]
  slug: string
}

interface ProjectsProps {
  projects: Project[]
}

function formatProjectDate(dateStr: string) {
  const [year, month] = dateStr.split('-')
  const monthNames = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre']
  return `${monthNames[parseInt(month) - 1]} ${year}`
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Projects({ projects }: ProjectsProps) {
  if (!projects.length) return null

  return (
    <section
      aria-label="Projets"
      className="text-center"
      style={{ padding: '5rem 1.5rem' }}
    >
      <m.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0 }}
      >
        <SectionPill>Projets</SectionPill>
      </m.div>

      <m.h2
        className="text-fg"
        style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
          marginBottom: '0.75rem',
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
      >
        Mes derniers travaux
      </m.h2>

      <m.p
        className="text-muted mb-8 mx-auto"
        style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '480px' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
      >
        Une sélection de projets réalisés en formation et en stage.
      </m.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
        {projects.map((project, index) => (
          <m.div
            key={project._id}
            className="flex flex-col"
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '0px' }}
            transition={{ duration: 0.3, ease: 'easeOut', delay: index * 0.05 }}
          >
            <ProjectCard
              title={project.title}
              missionType={project.missionType}
              date={project.date ? formatProjectDate(project.date) : ''}
              imageUrl={project.image ? urlFor(project.image).width(800).quality(80).auto('format').url() : undefined}
              imageLqip={project.imageLqip}
              tags={project.tags ?? []}
              slug={project.slug}
            />
          </m.div>
        ))}
      </div>
    </section>
  )
}
