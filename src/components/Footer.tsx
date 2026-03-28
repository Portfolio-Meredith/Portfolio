export default function Footer() {
  return (
    <footer
      className="mx-auto border-t border-border flex justify-between items-center text-subtle"
      style={{
        maxWidth: '620px',
        width: '100%',
        padding: '1.5rem 1.5rem',
        fontSize: '0.78rem',
      }}
    >
      <span>© {new Date().getFullYear()} Mérédith Mardirossian</span>
      <span>Lyon, France</span>
    </footer>
  )
}
