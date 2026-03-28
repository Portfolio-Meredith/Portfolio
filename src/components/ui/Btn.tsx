import { AnchorHTMLAttributes } from 'react'

interface BtnProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

export default function Btn({ children, className = '', ...props }: BtnProps) {
  return (
    <a
      {...props}
      className={`inline-flex items-center gap-1 border border-border rounded px-3 py-1.5 text-fg hover:border-nuit transition-colors duration-150 ${className}`}
      style={{ fontSize: '0.8rem', fontWeight: 500 }}
    >
      {children}
    </a>
  )
}
