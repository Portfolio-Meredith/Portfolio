// Affiché automatiquement par Next.js pendant le chargement d'une page projet

export default function ProjectLoading() {
  return (
    <div className="bg-bg min-h-screen">
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>

        {/* Retour */}
        <div style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
          <div className="skeleton" style={{ height: '0.8rem', width: 120 }} />
        </div>

        {/* Image */}
        <div className="skeleton rounded-xl mb-8" style={{ aspectRatio: '16/10', width: '100%' }} />

        {/* En-tête */}
        <div style={{ paddingBottom: '2rem' }} className="space-y-3">
          <div className="skeleton rounded-full" style={{ height: '1.4rem', width: 130 }} />
          <div className="skeleton" style={{ height: '2rem', width: '75%' }} />
          <div className="skeleton" style={{ height: '0.78rem', width: 90 }} />
        </div>

        <hr className="border-t border-border" />

        {/* Description */}
        <div style={{ padding: '2rem 0' }} className="space-y-2">
          <div className="skeleton" style={{ height: '0.875rem', width: '100%' }} />
          <div className="skeleton" style={{ height: '0.875rem', width: '92%' }} />
          <div className="skeleton" style={{ height: '0.875rem', width: '78%' }} />
          <div className="skeleton" style={{ height: '0.875rem', width: '85%' }} />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          {[70, 55, 80].map((w, i) => (
            <div key={i} className="skeleton rounded-full" style={{ height: '1.4rem', width: w }} />
          ))}
        </div>

      </main>
    </div>
  )
}
