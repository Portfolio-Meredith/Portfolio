'use client'

import Image from 'next/image'
import { motion } from 'motion/react'

interface HeroProps {
  title: string
  sub: string
  avatarUrl?: string
}

export default function Hero({ title, sub, avatarUrl }: HeroProps) {
  const words = title.split(/(\s+)/)
  const wordCount = words.filter((w) => w.trim()).length

  return (
    <section
      aria-label="Introduction"
      className="flex flex-row justify-between items-start gap-6"
      style={{ paddingTop: '3.5rem' }}
    >
      <div className="flex-1 min-w-0">
        <h1
          className="text-fg"
          style={{
            fontSize: '2.75rem',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
          }}
        >
          {words.map((word, i) =>
            word.trim() === '' ? (
              word.includes('\n') ? <br key={i} /> : ' '
            ) : (
              <motion.span
                key={i}
                className="inline-block"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: 'easeOut', delay: i * 0.06 }}
              >
                {word}
                {/* espace après chaque mot sauf en fin de ligne */}
                {words[i + 1] && !words[i + 1].includes('\n') ? '\u00A0' : ''}
              </motion.span>
            )
          )}
        </h1>
        <motion.p
          className="text-muted mt-3"
          style={{ fontSize: '0.875rem', lineHeight: 1.8 }}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: 'easeOut', delay: wordCount * 0.06 + 0.1 }}
        >
          {sub}
        </motion.p>
      </div>
      <motion.div
        className="shrink-0 rounded-full border border-border overflow-hidden bg-lavande flex items-center justify-center"
        style={{ width: '80px', height: '80px' }}
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.45, ease: 'easeOut', delay: 0.2 }}
      >
        {avatarUrl ? (
          <Image
            src={avatarUrl}
            alt="Photo de Mérédith Mardirossian"
            width={80}
            height={80}
            className="object-cover w-full h-full"
            priority
          />
        ) : (
          <span style={{ fontSize: '2rem' }} aria-hidden="true">👋</span>
        )}
      </motion.div>
    </section>
  )
}
