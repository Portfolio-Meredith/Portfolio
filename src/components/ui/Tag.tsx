export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="inline-block border border-lavande text-gris rounded-full"
      style={{ fontSize: '0.65rem', fontWeight: 500, padding: '0.2rem 0.65rem' }}
    >
      {children}
    </span>
  )
}
