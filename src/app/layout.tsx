import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import MotionProvider from '@/components/MotionProvider'
import { Analytics } from '@vercel/analytics/next'
import { SpeedInsights } from '@vercel/speed-insights/next'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meredithmardirossian.fr'),
  title: 'Mérédith Mardirossian — Stratégie de marque & Communication digitale',
  description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon. Stratégie de marque, communication digitale, disponible en stage et alternance à Lyon.",
  keywords: ['communication', 'stratégie de marque', 'EFAP Lyon', 'stage communication Lyon', 'alternance communication', 'portfolio communication', 'communication digitale', 'Lyon'],
  openGraph: {
    title: 'Mérédith Mardirossian — Portfolio Communication & Stratégie de marque',
    description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon. Disponible en stage ou alternance à Lyon.",
    url: 'https://meredithmardirossian.fr',
    siteName: 'Portfolio Mérédith Mardirossian',
    locale: 'fr_FR',
    type: 'profile',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Mérédith Mardirossian — Portfolio Communication',
    description: "Portfolio de Mérédith Mardirossian, étudiante en communication à l'EFAP Lyon. Disponible en stage ou alternance.",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://meredithmardirossian.fr' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} font-sans antialiased bg-bg text-fg`}>
        <MotionProvider>
          {children}
        </MotionProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
