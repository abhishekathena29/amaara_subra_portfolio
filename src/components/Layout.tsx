import { useEffect, useState, type ReactNode } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import { profile } from '../data/resume'
import { ArrowUpRight, CloseIcon, DocIcon, HomeIcon, MenuIcon, MoonIcon, SunIcon } from './Icons'

const navItems = [
  { to: '/about', label: 'About' },
  { to: '/research', label: 'Research' },
  { to: '/projects', label: 'Projects' },
  { to: '/training', label: 'Training' },
  { to: '/honors', label: 'Honors & Awards' },
  { to: '/activities', label: 'Activities' },
]

function useTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    try {
      const saved = localStorage.getItem('theme')
      if (saved === 'dark') return 'dark'
    } catch {
      /* storage unavailable */
    }
    return 'light'
  })
  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem('theme', theme)
    } catch {
      /* storage unavailable */
    }
  }, [theme])
  return [theme, () => setTheme((t) => (t === 'light' ? 'dark' : 'light'))] as const
}

function Nav() {
  const [theme, toggle] = useTheme()
  const [open, setOpen] = useState(false)

  return (
    <header className="nav-wrap">
      <nav className="nav" aria-label="Main">
        <NavLink to="/" end className="nav-link nav-home">
          Home <HomeIcon />
        </NavLink>
        <span className="nav-sep" />
        <div className="nav-links">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className="nav-link">
              {n.label}
            </NavLink>
          ))}
        </div>
        <span className="nav-sep" />
        <button className="icon-btn" onClick={toggle} aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}>
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </button>
        <button className="icon-btn nav-menu-btn" onClick={() => setOpen((o) => !o)} aria-label="Menu" aria-expanded={open}>
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
        <NavLink className="btn btn-dark btn-sm" to="/resume">
          Resume <DocIcon width={15} height={15} />
        </NavLink>
      </nav>
      {open && (
        <div className="nav-drawer">
          {navItems.map((n) => (
            <NavLink key={n.to} to={n.to} className="nav-drawer-link" onClick={() => setOpen(false)}>
              {n.label} <ArrowUpRight width={16} height={16} />
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}

/** Thin vertical guide lines with bracket corners, as in the design. */
export function Frame({ children, corners = false, className = '' }: { children: ReactNode; corners?: boolean; className?: string }) {
  return (
    <section className={`frame ${corners ? 'frame-corners' : ''} ${className}`}>
      {corners && (
        <>
          <i className="corner tl" />
          <i className="corner tr" />
        </>
      )}
      {children}
    </section>
  )
}

/** Horizontal rule with ⊢ ⊣ tick marks at both ends. */
export function Divider() {
  return <div className="divider" aria-hidden="true" />
}

function Footer() {
  return (
    <footer className="footer">
      <Divider />
      <div className="footer-inner">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.school}
        </p>
        <div className="footer-links">
          {navItems.map((n) => (
            <Link key={n.to} to={n.to}>
              {n.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className="shell">
      <Nav />
      <main key={pathname} className="page">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
