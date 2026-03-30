'use client'

import { useState } from 'react'
import { m, AnimatePresence } from 'motion/react'
import { ChevronDown } from 'lucide-react'
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
  description?: string
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
  const [openId, setOpenId] = useState<string | null>(null)

  if (!experiences.length) return null

  return (
    <section aria-label="Expérience professionnelle">
      <m.p
        className="text-fg mb-5"
        style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut' }}
      >
        Expérience professionnelle
      </m.p>
      <div className="flex flex-col gap-5">
        {experiences.map((exp, index) => {
          const startLabel = formatDate(exp.startDate)
          const endLabel = exp.isCurrent ? '' : (exp.endDate ? formatDate(exp.endDate) : '')
          const dateLabel = exp.isCurrent ? startLabel : `${startLabel} — ${endLabel}`
          const isOpen = openId === exp._id
          const hasDescription = !!exp.description

          return (
            <m.div
              key={exp._id}
              initial={{ opacity: 0, x: -8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.35, ease: 'easeOut', delay: index * 0.08 }}
            >
              <div
                className={hasDescription ? 'cursor-pointer' : ''}
                onClick={hasDescription ? () => setOpenId(isOpen ? null : exp._id) : undefined}
                role={hasDescription ? 'button' : undefined}
                aria-expanded={hasDescription ? isOpen : undefined}
                tabIndex={hasDescription ? 0 : undefined}
                onKeyDown={hasDescription ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setOpenId(isOpen ? null : exp._id) } } : undefined}
              >
                <div className="flex items-center gap-2">
                  <div className="flex-1 min-w-0">
                    <CvItem
                      initials={exp.initials}
                      color={exp.color}
                      logoUrl={exp.logoUrl}
                      name={`${exp.company} · ${exp.city}`}
                      role={exp.role}
                      date={dateLabel}
                      isCurrent={exp.isCurrent}
                    />
                  </div>
                  {hasDescription && (
                    <ChevronDown
                      size={14}
                      aria-hidden="true"
                      className="shrink-0 text-subtle transition-transform duration-200"
                      style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
                    />
                  )}
                </div>
              </div>

              <AnimatePresence initial={false}>
                {isOpen && exp.description && (
                  <m.div
                    key="description"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    style={{ overflow: 'hidden' }}
                  >
                    <p
                      className="text-muted"
                      style={{
                        fontSize: '0.8rem',
                        lineHeight: 1.75,
                        paddingLeft: '58px',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.25rem',
                      }}
                    >
                      {exp.description}
                    </p>
                  </m.div>
                )}
              </AnimatePresence>
            </m.div>
          )
        })}
      </div>
    </section>
  )
}
