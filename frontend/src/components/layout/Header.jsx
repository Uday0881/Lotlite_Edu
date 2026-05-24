import { Link, NavLink } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import ThemeToggle from '../shared/ThemeToggle.jsx'
import ApplyDialog from '../shared/ApplyDialog.jsx'

// ---- Edit navigation items here ----
const programs = [
  {
    to: '/programs/data-science',
    label: 'DS — Data Science in Real Estate',
    desc: 'Predictive land value modeling',
  },
  {
    to: '/programs/information-technology',
    label: 'MCA (PropTech)',
    desc: 'PropTech infrastructure',
  },
  {
    to: '/programs/mba-real-estate',
    label: 'MBA in Real Estate',
    desc: 'Business strategy & property technology',
  },
]

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 300ms',
        ...(scrolled
          ? {
              backgroundColor: 'var(--glass-bg)',
              backdropFilter: 'blur(14px) saturate(160%)',
              WebkitBackdropFilter: 'blur(14px) saturate(160%)',
              borderBottom: '1px solid var(--hairline)',
            }
          : { background: 'transparent' }),
      }}
    >
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem',
          height: '4rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        {/* Logo */}
        <Link
          to="/"
          style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', textDecoration: 'none' }}
        >
          <div
            style={{
              height: '2rem',
              width: '2rem',
              borderRadius: '0.375rem',
              background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
              display: 'grid',
              placeItems: 'center',
              color: 'var(--navy-deep)',
              fontWeight: 900,
              fontSize: '1rem',
            }}
          >
            L
          </div>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>
            Lotlite{' '}
            <span style={{ color: 'var(--muted-foreground)', fontWeight: 400 }}>
              School of Real Estate
            </span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'none' }} className="lg-nav">
          <style>{`
            @media (min-width: 1024px) { .lg-nav { display: flex !important; align-items: center; gap: 0.25rem; } }
            @media (max-width: 1023px) { .lg-nav { display: none !important; } }
          `}</style>

          {/* Programs Dropdown */}
          <div
            style={{ position: 'relative' }}
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              style={{
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                color: 'var(--foreground)',
                opacity: 0.9,
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.25rem',
              }}
            >
              PG Programs <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  paddingTop: '0.75rem',
                  width: '420px',
                  animation: 'fade-in 0.2s ease-out',
                }}
              >
                <div
                  className="bg-glass border-hairline"
                  style={{ borderRadius: '0.75rem', padding: '0.5rem', boxShadow: 'var(--shadow-premium)' }}
                >
                  {programs.map((p) => (
                    <Link
                      key={p.to}
                      to={p.to}
                      style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}
                      onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                      onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                    >
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{p.label}</div>
                      <div style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '0.125rem' }}>{p.desc}</div>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {[
            { to: '/#blogs', label: 'Blogs', hash: true },
            { to: '/outcomes', label: 'Outcomes' },
            { to: '/incubation', label: 'Incubation' },
            { to: '/contact', label: 'Contact Us' },
          ].map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              style={({ isActive }) => ({
                padding: '0.5rem 1rem',
                fontSize: '0.875rem',
                color: isActive ? 'var(--gold)' : 'var(--foreground)',
                opacity: isActive ? 1 : 0.9,
                textDecoration: 'none',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Right actions */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <ThemeToggle />
          <ApplyDialog>
            <button
              className="sm-apply-btn"
              style={{
                display: 'none',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.625rem 1.25rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                color: 'var(--navy-deep)',
                fontSize: '0.875rem',
                fontWeight: 700,
                boxShadow: 'var(--shadow-gold)',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Apply Now
            </button>
          </ApplyDialog>
          <style>{`@media (min-width: 640px) { .sm-apply-btn { display: inline-flex !important; } }`}</style>

          {/* Hamburger */}
          <button
            className="lg-hidden-btn"
            onClick={() => setMobileOpen((v) => !v)}
            style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--foreground)', padding: '0.25rem' }}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <style>{`@media (min-width: 1024px) { .lg-hidden-btn { display: none !important; } }`}</style>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="bg-glass border-hairline"
          style={{ borderTop: '1px solid var(--hairline)', padding: '1rem 1.5rem', paddingBottom: '1.5rem' }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', paddingTop: '0.5rem', marginBottom: '0.5rem' }}>
            PG Programs
          </div>
          {programs.map((p) => (
            <Link
              key={p.to}
              to={p.to}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--foreground)', textDecoration: 'none' }}
            >
              {p.label}
            </Link>
          ))}
          {[
            { to: '/', label: 'Blogs' },
            { to: '/outcomes', label: 'Outcomes' },
            { to: '/incubation', label: 'Incubation' },
            { to: '/contact', label: 'Contact Us' },
          ].map((item) => (
            <Link
              key={item.to}
              to={item.to}
              onClick={() => setMobileOpen(false)}
              style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--foreground)', textDecoration: 'none' }}
            >
              {item.label}
            </Link>
          ))}
          <ApplyDialog>
            <button
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'block',
                width: '100%',
                marginTop: '0.5rem',
                textAlign: 'center',
                padding: '0.625rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                color: 'var(--navy-deep)',
                fontWeight: 700,
                fontSize: '0.875rem',
                border: 'none',
                cursor: 'pointer',
              }}
            >
              Apply Now
            </button>
          </ApplyDialog>
        </div>
      )}
    </header>
  )
}
