export default function SectionPill({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border border-border rounded-full text-muted mb-3"
      style={{ fontSize: '0.72rem', fontWeight: 500, padding: '0.2rem 0.75rem' }}
    >
      {children}
    </span>
  )
}
