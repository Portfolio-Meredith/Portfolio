import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Mérédith Mardirossian — Portfolio Communication & Stratégie de marque'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          backgroundColor: '#ffffff',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Bande colorée en haut */}
        <div style={{ width: '100%', height: 8, backgroundColor: '#3A395E' }} />

        {/* Contenu principal */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '60px 80px',
          }}
        >
          {/* Pill */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: 32,
            }}
          >
            <span
              style={{
                fontSize: 14,
                fontWeight: 500,
                color: '#6E6D8F',
                backgroundColor: '#D5D5E7',
                padding: '6px 16px',
                borderRadius: 999,
                letterSpacing: '0.04em',
                textTransform: 'uppercase',
              }}
            >
              Portfolio · Lyon
            </span>
          </div>

          {/* Nom */}
          <div
            style={{
              fontSize: 72,
              fontWeight: 800,
              color: '#0a0a0a',
              letterSpacing: '-0.04em',
              lineHeight: 1.05,
              marginBottom: 20,
            }}
          >
            Mérédith
            <br />
            Mardirossian
          </div>

          {/* Titre */}
          <div
            style={{
              fontSize: 24,
              fontWeight: 400,
              color: '#6b7280',
              letterSpacing: '-0.01em',
            }}
          >
            Stratégie de marque & Communication digitale
          </div>

          {/* Badges */}
          <div style={{ display: 'flex', gap: 12, marginTop: 40 }}>
            {['EFAP Lyon', 'Stage & Alternance', 'Communication digitale'].map((tag) => (
              <span
                key={tag}
                style={{
                  fontSize: 14,
                  color: '#3A395E',
                  border: '1px solid #D5D5E7',
                  padding: '6px 14px',
                  borderRadius: 999,
                  fontWeight: 500,
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* URL en bas */}
        <div
          style={{
            padding: '20px 80px',
            display: 'flex',
            alignItems: 'center',
            borderTop: '1px solid #e5e7eb',
          }}
        >
          <span style={{ fontSize: 16, color: '#9ca3af' }}>
            meredithmardirossian.fr
          </span>
        </div>
      </div>
    ),
    size
  )
}
