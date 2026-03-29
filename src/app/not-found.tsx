export default function NotFound() {
  return (
    <div
      className="bg-bg min-h-screen flex flex-col items-center justify-center text-center"
      style={{ padding: '3rem 1.5rem' }}
    >
      <p
        className="text-lavande"
        style={{ fontSize: '5rem', fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
      >
        404
      </p>
      <h1
        className="text-fg"
        style={{ fontSize: '1.5rem', fontWeight: 700, letterSpacing: '-0.03em', margin: '1rem 0 0.5rem' }}
      >
        Page introuvable
      </h1>
      <p className="text-muted" style={{ fontSize: '0.875rem', marginBottom: '2rem' }}>
        Cette page n&apos;existe pas ou a été déplacée.
      </p>
      <a
        href="/"
        className="text-nuit"
        style={{ fontSize: '0.875rem', fontWeight: 500, textDecoration: 'underline' }}
      >
        ← Retour au portfolio
      </a>
    </div>
  )
}
