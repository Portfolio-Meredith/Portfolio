'use client'

import { m } from 'motion/react'
import { PortableText } from 'next-sanity'

interface AboutProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any[]
}

export default function About({ content }: AboutProps) {
  return (
    <m.section
      aria-label="À propos"
      className="cv-section"
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
    >
      <p
        className="text-fg mb-4"
        style={{ fontSize: '1.05rem', fontWeight: 700, letterSpacing: '-0.02em' }}
      >
        À propos
      </p>
      <div
        className="text-fg"
        style={{ fontSize: '0.875rem', lineHeight: 1.8 }}
      >
        <PortableText
          value={content}
          components={{
            marks: {
              link: ({ children, value }) => (
                <a
                  href={value?.href}
                  target={value?.href?.startsWith('http') ? '_blank' : undefined}
                  rel={value?.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="underline decoration-border hover:decoration-orange transition-colors duration-150"
                >
                  {children}
                </a>
              ),
            },
          }}
        />
      </div>
    </m.section>
  )
}
