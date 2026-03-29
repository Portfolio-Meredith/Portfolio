'use client'

import { m } from 'motion/react'
import SectionPill from '@/components/ui/SectionPill'
import Btn from '@/components/ui/Btn'

interface ContactProps {
  linkedinUrl?: string
  email?: string
  cvPdfUrl?: string
}

const fadeUp = {
  hidden: { opacity: 0, y: 10 },
  show: { opacity: 1, y: 0 },
}

export default function Contact({ linkedinUrl, email, cvPdfUrl }: ContactProps) {
  return (
    <section
      aria-label="Contact"
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
        <SectionPill>Contact</SectionPill>
      </m.div>

      <m.h2
        className="text-fg mb-4"
        style={{
          fontSize: '2.5rem',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          lineHeight: 1.1,
        }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.08 }}
      >
        Travaillons ensemble
      </m.h2>

      <m.p
        className="text-muted mb-8 mx-auto"
        style={{ fontSize: '0.875rem', lineHeight: 1.8, maxWidth: '440px' }}
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.14 }}
      >
        Disponible pour un stage ou une alternance à Lyon.{' '}
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-border hover:decoration-orange transition-colors duration-150"
          >
            Retrouvez-moi sur LinkedIn
          </a>
        )}
        .
      </m.p>

      <m.div
        className="flex justify-center gap-3 flex-wrap"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.4, ease: 'easeOut', delay: 0.2 }}
      >
        {linkedinUrl && (
          <Btn href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="Voir le profil LinkedIn de Mérédith Mardirossian">
            LinkedIn ↗
          </Btn>
        )}
        {email && (
          <Btn href={`mailto:${email}`} aria-label={`Envoyer un e-mail à ${email}`}>
            {email} ↗
          </Btn>
        )}
        {cvPdfUrl && (
          <Btn href={cvPdfUrl} target="_blank" rel="noopener noreferrer" aria-label="Télécharger le CV de Mérédith Mardirossian en PDF">
            ↓ Télécharger mon CV
          </Btn>
        )}
      </m.div>
    </section>
  )
}
