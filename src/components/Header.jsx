import { useState } from 'react'
import hero from '../data/hero.json'

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

const initials = hero.name
  .split(' ')
  .map((w) => w[0])
  .join('')
  .slice(0, 2)
  .toUpperCase()

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className="header">
      <div className="header-inner">
        <a href="#top" className="brand">
          <span className="brand-avatar">{initials}</span>
          <span className="brand-text">
            <strong>{hero.name.split(' ')[0]}</strong>
            <span>{hero.name.split(' ').slice(1).join(' ')}</span>
          </span>
        </a>

        <div className="nav-group">
          <nav className={`nav ${open ? 'nav-open' : ''}`}>
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="btn btn-primary header-cta">
            Hire Me
          </a>

          <button
            className="nav-toggle"
            aria-label="Toggle navigation"
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  )
}
