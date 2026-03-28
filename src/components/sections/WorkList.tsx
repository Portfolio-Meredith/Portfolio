'use client'

import { motion } from 'motion/react'
import CvItem from '@/components/ui/CvItem'

interface Experience {
  _id: string
  company: string
  role: string
  city: string
  initials: string
  color: string
  logoUrl?: string
  startDate: string
  endDate?: string
  isCurrent?: boolean
}

function formatDate(dateStr: string) {
  const [year, month] = dateStr.split('-')
  const monthNames = ['jan.', 'fév.', 'mar.', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sep.', 'oct.', 'nov.', 'déc.']
  return `${monthNames[parseInt(month) - 1]} ${year}`
}

interface WorkListProps {
  experiences: Experience[]
}

export default function WorkList({ experiences }: WorkListProps) {
  if (!experiences.length) return null

  return (
    <section aria-label="Expérience professionnelle">
      <motion.p
        className="text-fg mb-5"
        style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Expérience professionnelle
      </motion.p>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, index) => {
          const startLabel = formatDate(exp.startDate)
          const endLabel = exp.isCurrent ? '' : (exp.endDate ? formatDate(exp.endDate) : '')
          const dateLabel = exp.isCurrent ? startLabel : `${startLabel} — ${endLabel}`

          return (
            <motion.div
              key={exp._id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.08 }}
            >
              <CvItem
                initials={exp.initials}
                color={exp.color}
                logoUrl={exp.logoUrl}
                name={`${exp.company} · ${exp.city}`}
                role={exp.role}
                date={dateLabel}
                isCurrent={exp.isCurrent}
              />
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
