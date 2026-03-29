// Affiché automatiquement par Next.js pendant le chargement d'une page projet

function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`animate-pulse rounded bg-lavande ${className ?? ''}`}
      style={style}
    />
  )
}

export default function ProjectLoading() {
  return (
    <div className="bg-bg min-h-screen">
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>

        {/* Retour */}
        <div style={{ paddingTop: '2.5rem', paddingBottom: '2rem' }}>
          <Skeleton style={{ height: '0.8rem', width: 120 }} />
        </div>

        {/* Image */}
        <Skeleton className="rounded-xl mb-8" style={{ aspectRatio: '16/10', width: '100%' }} />

        {/* En-tête */}
        <div style={{ paddingBottom: '2rem' }} className="space-y-3">
          <Skeleton className="rounded-full" style={{ height: '1.4rem', width: 130 }} />
          <Skeleton style={{ height: '2rem', width: '75%' }} />
          <Skeleton style={{ height: '0.78rem', width: 90 }} />
        </div>

        <hr className="border-t border-border" />

        {/* Description */}
        <div style={{ padding: '2rem 0' }} className="space-y-2">
          <Skeleton style={{ height: '0.875rem', width: '100%' }} />
          <Skeleton style={{ height: '0.875rem', width: '92%' }} />
          <Skeleton style={{ height: '0.875rem', width: '78%' }} />
          <Skeleton style={{ height: '0.875rem', width: '85%' }} />
        </div>

        {/* Tags */}
        <div className="flex gap-2 mt-2">
          {[70, 55, 80].map((w, i) => (
            <Skeleton key={i} className="rounded-full" style={{ height: '1.4rem', width: w }} />
          ))}
        </div>

      </main>
    </div>
  )
}
