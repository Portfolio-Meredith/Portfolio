'use client'

import { motion } from 'motion/react'
import CvItem from '@/components/ui/CvItem'

interface Education {
  _id: string
  school: string
  degree: string
  startYear: number
  endYear: number
  initials: string
  color: string
  logoUrl?: string
  websiteUrl?: string
}

interface EducationListProps {
  education: Education[]
}

export default function EducationList({ education }: EducationListProps) {
  if (!education.length) return null

  return (
    <section aria-label="Formation">
      <motion.p
        className="text-fg mb-5"
        style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Formation
      </motion.p>
      <div className="flex flex-col gap-5">
        {education.map((edu, index) => (
          <motion.div
            key={edu._id}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.08 }}
          >
            <CvItem
              initials={edu.initials}
              color={edu.color}
              logoUrl={edu.logoUrl}
              name={edu.school}
              role={edu.degree}
              date={`${edu.startYear} — ${edu.endYear}`}
              websiteUrl={edu.websiteUrl}
            />
          </motion.div>
        ))}
      </div>
    </section>
  )
}
