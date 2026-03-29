export default function ProjectCardSkeleton() {
  return (
    <div className="rounded-xl overflow-hidden border border-lavande bg-bg">
      {/* Image 16/10 */}
      <div className="skeleton rounded-none" style={{ aspectRatio: '16/10', width: '100%' }} />
      {/* Contenu */}
      <div className="px-4 pt-3 pb-4">
        {/* Meta row : missionType + date */}
        <div className="flex justify-between mb-1.5">
          <div className="skeleton" style={{ height: '0.7rem', width: '35%' }} />
          <div className="skeleton" style={{ height: '0.7rem', width: '20%' }} />
        </div>
        {/* Titre */}
        <div className="skeleton mb-2.5" style={{ height: '0.9rem', width: '75%' }} />
        {/* Tags */}
        <div className="flex gap-1">
          <div className="skeleton rounded-full" style={{ height: '1.2rem', width: 56 }} />
          <div className="skeleton rounded-full" style={{ height: '1.2rem', width: 44 }} />
          <div className="skeleton rounded-full" style={{ height: '1.2rem', width: 64 }} />
        </div>
      </div>
    </div>
  )
}
