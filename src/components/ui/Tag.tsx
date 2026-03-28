export default function Tag({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{ fontSize: '0.65rem', fontWeight: 500, borderRadius: '4px' }}
      className="bg-[#f3f4f6] border border-border px-1.5 py-0.5 text-fg"
    >
      {children}
    </span>
  )
}
