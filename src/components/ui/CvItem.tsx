import Image from 'next/image'

interface CvItemProps {
  initials: string
  color: string
  logoUrl?: string
  name: string
  role: string
  date: string
  isCurrent?: boolean
  websiteUrl?: string
}

export default function CvItem({ initials, color, logoUrl, name, role, date, isCurrent, websiteUrl }: CvItemProps) {
  return (
    <div
      className="grid items-center gap-x-4"
      style={{ gridTemplateColumns: '46px 1fr auto' }}
    >
      <div
        className="rounded-full shrink-0 overflow-hidden border border-border flex items-center justify-center"
        style={{ width: '46px', height: '46px', backgroundColor: logoUrl ? '#ffffff' : (color || '#D5D5E7') }}
        aria-hidden="true"
      >
        {logoUrl ? (
          <Image
            src={logoUrl}
            alt=""
            width={46}
            height={46}
            className="object-contain w-full h-full"
          />
        ) : (
          <span style={{ fontSize: '0.65rem', fontWeight: 700, color: color ? '#ffffff' : '#3A395E' }}>{initials}</span>
        )}
      </div>
      <div className="min-w-0">
        <p
          className="text-fg truncate"
          style={{ fontSize: '0.9rem', fontWeight: 600, letterSpacing: '-0.02em' }}
        >
          {name}
        </p>
        {websiteUrl ? (
          <a
            href={websiteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted hover:text-orange transition-colors duration-150"
            style={{ fontSize: '0.8rem', fontWeight: 400 }}
          >
            {role}
          </a>
        ) : (
          <p className="text-muted" style={{ fontSize: '0.8rem', fontWeight: 400 }}>
            {role}
          </p>
        )}
      </div>
      <div
        className="text-subtle text-right shrink-0"
        style={{ fontSize: '0.78rem', fontWeight: 400, whiteSpace: 'nowrap' }}
      >
        {date}
        {isCurrent && (
          <>
            <br />
            <em className="text-orange not-italic" style={{ fontStyle: 'italic' }}>En cours</em>
          </>
        )}
      </div>
    </div>
  )
}
