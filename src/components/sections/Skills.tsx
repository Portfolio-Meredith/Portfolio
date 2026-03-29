'use client'

import { m } from 'motion/react'
import SectionPill from '@/components/ui/SectionPill'

interface Skill {
  _id: string
  label: string
  category: 'strategie' | 'digital' | 'outils'
}

const categoryLabels: Record<string, string> = {
  strategie: 'Stratégie de marque',
  digital: 'Communication digitale',
  outils: 'Outils',
}

interface SkillsProps {
  skills: Skill[]
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Skills({ skills }: SkillsProps) {
  if (!skills.length) return null

  const grouped = skills.reduce<Record<string, Skill[]>>((acc, skill) => {
    const cat = skill.category
    if (!acc[cat]) acc[cat] = []
    acc[cat].push(skill)
    return acc
  }, {})

  return (
    <section
      aria-label="Compétences"
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
        <SectionPill>Compétences</SectionPill>
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
        Ce que je sais faire
      </m.h2>

      <m.p
        className="text-muted mb-8"
        style={{ fontSize: '0.875rem', lineHeight: 1.8 }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
      >
        Mes domaines de compétences en communication.
      </m.p>

      <m.div
        className="text-left"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        {Object.entries(grouped).map(([cat, items], groupIndex) => (
          <div key={cat} className="mb-5">
            <p
              className="text-fg mb-2"
              style={{ fontSize: '0.8rem', fontWeight: 600 }}
            >
              {categoryLabels[cat] ?? cat}
            </p>
            <div className="flex flex-wrap gap-1.5">
              {items.map((skill, tagIndex) => (
                <m.span
                  key={skill._id}
                  className="border border-lavande text-gris rounded-full"
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: 500,
                    padding: '0.2rem 0.65rem',
                  }}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.3,
                    ease: 'easeOut',
                    delay: 0.25 + groupIndex * 0.1 + tagIndex * 0.03,
                  }}
                >
                  {skill.label}
                </m.span>
              ))}
            </div>
          </div>
        ))}
      </m.div>
    </section>
  )
}
