import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meredithmardirossian.fr'),
  title: 'Mérédith Mardirossian — Stratégie de marque & Communication digitale',
  description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon. Stratégie de marque, communication digitale, disponible en stage et alternance à Lyon.",
  keywords: ['communication', 'stratégie de marque', 'EFAP Lyon', 'stage', 'alternance', 'portfolio'],
  openGraph: {
    title: 'Mérédith Mardirossian — Portfolio',
    description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon.",
    url: 'https://meredithmardirossian.fr',
    siteName: 'Portfolio Mérédith Mardirossian',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630 }],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mérédith Mardirossian — Portfolio',
    description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon.",
    images: ['/og-image.jpg'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://meredithmardirossian.fr' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Mérédith Mardirossian',
  jobTitle: 'Étudiante en communication — Stratégie de marque & digital',
  url: 'https://meredithmardirossian.fr',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lyon',
    addressCountry: 'FR',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-bg text-fg`}>
        {children}
      </body>
    </html>
  )
}
