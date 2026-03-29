// Affiché automatiquement par Next.js pendant le chargement de la page d'accueil

function Skeleton({ className, style }: { className?: string; style?: React.CSSProperties }) {
  return (
    <div
      className={`animate-pulse rounded bg-lavande ${className ?? ''}`}
      style={style}
    />
  )
}

export default function HomeLoading() {
  return (
    <div className="bg-bg min-h-screen">
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>

        {/* Hero */}
        <div className="flex justify-between items-start gap-6" style={{ paddingTop: '3.5rem' }}>
          <div className="flex-1 space-y-3">
            <Skeleton style={{ height: '2.75rem', width: '70%' }} />
            <Skeleton style={{ height: '2.75rem', width: '50%' }} />
            <Skeleton style={{ height: '1rem', width: '90%', marginTop: '0.75rem' }} />
          </div>
          <Skeleton className="shrink-0 rounded-full" style={{ width: 80, height: 80 }} />
        </div>

        <hr className="border-t border-border my-10" />

        {/* À propos */}
        <div style={{ padding: '3rem 0' }} className="space-y-2">
          <Skeleton style={{ height: '0.875rem', width: '100%' }} />
          <Skeleton style={{ height: '0.875rem', width: '88%' }} />
          <Skeleton style={{ height: '0.875rem', width: '75%' }} />
        </div>

        <hr className="border-t border-border" />

        {/* Expériences */}
        <div style={{ padding: '3rem 0' }} className="space-y-5">
          <Skeleton style={{ height: '1.05rem', width: '40%' }} />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <Skeleton className="rounded-lg shrink-0" style={{ width: 36, height: 36 }} />
              <div className="flex-1 space-y-1.5">
                <Skeleton style={{ height: '0.9rem', width: '55%' }} />
                <Skeleton style={{ height: '0.78rem', width: '35%' }} />
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-border" />

        {/* Projets */}
        <div style={{ padding: '5rem 0' }}>
          <Skeleton className="mx-auto rounded-full" style={{ height: '1.5rem', width: 80, marginBottom: '1rem' }} />
          <Skeleton className="mx-auto" style={{ height: '2.5rem', width: '60%', marginBottom: '0.75rem' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="rounded-xl overflow-hidden border border-lavande">
                <Skeleton className="rounded-none" style={{ aspectRatio: '16/10', width: '100%' }} />
                <div className="px-4 pt-3 pb-4 space-y-2">
                  <Skeleton style={{ height: '0.7rem', width: '50%' }} />
                  <Skeleton style={{ height: '0.9rem', width: '80%' }} />
                  <div className="flex gap-1 mt-2">
                    <Skeleton className="rounded-full" style={{ height: '1.2rem', width: 60 }} />
                    <Skeleton className="rounded-full" style={{ height: '1.2rem', width: 50 }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
