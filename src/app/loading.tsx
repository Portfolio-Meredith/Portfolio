// Affiché automatiquement par Next.js pendant le chargement de la page d'accueil

import ProjectCardSkeleton from '@/components/ui/ProjectCardSkeleton'

export default function HomeLoading() {
  return (
    <div className="bg-bg min-h-screen">
      <main className="mx-auto" style={{ maxWidth: '620px', padding: '0 1.5rem' }}>

        {/* Hero */}
        <div className="flex justify-between items-start gap-6" style={{ paddingTop: '3.5rem' }}>
          <div className="flex-1 space-y-3">
            <div className="skeleton" style={{ height: '2.75rem', width: '70%' }} />
            <div className="skeleton" style={{ height: '2.75rem', width: '50%' }} />
            <div className="skeleton" style={{ height: '1rem', width: '90%', marginTop: '0.75rem' }} />
          </div>
          <div className="skeleton shrink-0 rounded-full" style={{ width: 80, height: 80 }} />
        </div>

        <hr className="border-t border-border my-10" />

        {/* À propos */}
        <div style={{ padding: '3rem 0' }} className="space-y-2">
          <div className="skeleton" style={{ height: '0.875rem', width: '100%' }} />
          <div className="skeleton" style={{ height: '0.875rem', width: '88%' }} />
          <div className="skeleton" style={{ height: '0.875rem', width: '75%' }} />
        </div>

        <hr className="border-t border-border" />

        {/* Expériences */}
        <div style={{ padding: '3rem 0' }} className="space-y-5">
          <div className="skeleton" style={{ height: '1.05rem', width: '40%' }} />
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="skeleton rounded-lg shrink-0" style={{ width: 36, height: 36 }} />
              <div className="flex-1 space-y-1.5">
                <div className="skeleton" style={{ height: '0.9rem', width: '55%' }} />
                <div className="skeleton" style={{ height: '0.78rem', width: '35%' }} />
              </div>
            </div>
          ))}
        </div>

        <hr className="border-t border-border" />

        {/* Projets */}
        <div style={{ padding: '5rem 0' }}>
          <div className="skeleton mx-auto rounded-full" style={{ height: '1.5rem', width: 80, marginBottom: '1rem' }} />
          <div className="skeleton mx-auto" style={{ height: '2.5rem', width: '60%', marginBottom: '0.75rem' }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {[1, 2, 3, 4].map((i) => (
              <ProjectCardSkeleton key={i} />
            ))}
          </div>
        </div>

      </main>
    </div>
  )
}
