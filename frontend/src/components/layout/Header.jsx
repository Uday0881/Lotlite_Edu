import { Link, NavLink, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X, ChevronRight } from 'lucide-react'
import ThemeToggle from '../shared/ThemeToggle.jsx'
import ApplyDialog from '../shared/ApplyDialog.jsx'
import { programmesData } from '../../data/programmesData.js'

export default function Header() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [activeMobileAccordion, setActiveMobileAccordion] = useState(null)
  const location = useLocation()

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
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
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

          {/* Programmes Dropdown */}
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
              Programmes <ChevronDown size={14} />
            </button>
            {dropdownOpen && (
              <div
                style={{
                  position: 'absolute',
                  top: '100%',
                  left: 0,
                  paddingTop: '0.75rem',
                  width: '280px',
                  animation: 'fade-in 0.2s ease-out',
                }}
              >
                <div
                  className="bg-glass border-hairline"
                  style={{ borderRadius: '0.75rem', padding: '0.5rem', boxShadow: 'var(--shadow-premium)' }}
                >
                  {programmesData.navigation.map((navItem, idx) => (
                    <div key={idx} style={{ position: 'relative' }} className="group">
                      {navItem.type === 'link' ? (
                        <Link
                          to={navItem.path}
                          style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}
                          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                          onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                        >
                          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{navItem.title}</div>
                        </Link>
                      ) : (
                        <div
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '0.75rem 1rem',
                            borderRadius: '0.5rem',
                            cursor: 'default',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
                            e.currentTarget.nextElementSibling.style.display = 'block';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.background = 'none';
                            e.currentTarget.nextElementSibling.style.display = 'none';
                          }}
                        >
                          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{navItem.title}</span>
                          <ChevronRight size={14} style={{ color: 'var(--muted-foreground)' }} />
                        </div>
                      )}
                      {/* Nested Dropdown for Desktop */}
                      {navItem.type === 'dropdown' && (
                        <div
                          style={{
                            display: 'none',
                            position: 'absolute',
                            left: '100%',
                            top: 0,
                            paddingLeft: '0.5rem',
                            width: '240px',
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.display = 'block';
                            e.currentTarget.previousElementSibling.style.background = 'rgba(255,255,255,0.05)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.display = 'none';
                            e.currentTarget.previousElementSibling.style.background = 'none';
                          }}
                        >
                          <div className="bg-glass border-hairline" style={{ borderRadius: '0.75rem', padding: '0.5rem', boxShadow: 'var(--shadow-premium)' }}>
                            {navItem.items.map((subItem, sIdx) => (
                              <Link
                                key={sIdx}
                                to={subItem.path}
                                style={{ display: 'block', padding: '0.75rem 1rem', borderRadius: '0.5rem', textDecoration: 'none' }}
                                onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
                                onMouseLeave={(e) => (e.currentTarget.style.background = 'none')}
                              >
                                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--foreground)' }}>{subItem.label}</div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
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
          ].map((item) => {
            const isActive = item.hash 
              ? location.pathname === '/' && location.hash === '#blogs'
              : location.pathname.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                style={{
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  color: isActive ? 'var(--gold)' : 'var(--foreground)',
                  opacity: isActive ? 1 : 0.9,
                  textDecoration: 'none',
                }}
              >
                {item.label}
              </Link>
            )
          })}
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
          style={{ borderTop: '1px solid var(--hairline)', padding: '1rem 1.5rem', paddingBottom: '1.5rem', maxHeight: 'calc(100vh - 4rem)', overflowY: 'auto' }}
        >
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', paddingTop: '0.5rem', marginBottom: '0.5rem' }}>
            Programmes
          </div>
          <div style={{ marginBottom: '1rem', borderBottom: '1px solid var(--hairline)', paddingBottom: '1rem' }}>
            {programmesData.navigation.map((navItem, idx) => (
              <div key={idx}>
                {navItem.type === 'link' ? (
                  <Link
                    to={navItem.path}
                    onClick={() => setMobileOpen(false)}
                    style={{ display: 'block', padding: '0.5rem 0', fontSize: '0.875rem', color: 'var(--foreground)', textDecoration: 'none' }}
                  >
                    {navItem.title}
                  </Link>
                ) : (
                  <div>
                    <button
                      onClick={() => setActiveMobileAccordion(activeMobileAccordion === idx ? null : idx)}
                      style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        padding: '0.5rem 0',
                        background: 'none',
                        border: 'none',
                        color: 'var(--foreground)',
                        fontSize: '0.875rem',
                        cursor: 'pointer'
                      }}
                    >
                      {navItem.title}
                      <ChevronDown size={14} style={{ transform: activeMobileAccordion === idx ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }} />
                    </button>
                    {activeMobileAccordion === idx && (
                      <div style={{ paddingLeft: '1rem', display: 'flex', flexDirection: 'column', gap: '0.5rem', margin: '0.5rem 0' }}>
                        {navItem.items.map((subItem, sIdx) => (
                          <Link
                            key={sIdx}
                            to={subItem.path}
                            onClick={() => setMobileOpen(false)}
                            style={{ display: 'block', fontSize: '0.875rem', color: 'var(--muted-foreground)', textDecoration: 'none' }}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>

          {[
            { to: '/#blogs', label: 'Blogs' },
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
                marginTop: '1rem',
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
