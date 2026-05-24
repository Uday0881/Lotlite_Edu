import { Link } from 'react-router-dom'
import ApplyDialog from '../shared/ApplyDialog.jsx'

// Footer is ALWAYS force-dark regardless of global light/dark mode
const darkVars = {
  '--background': 'oklch(0.14 0.03 250)',
  '--foreground': 'oklch(0.98 0.005 250)',
  '--muted-foreground': 'oklch(0.72 0.02 250)',
  '--hairline': 'oklch(1 0 0 / 0.08)',
  '--gold': 'oklch(0.82 0.16 78)',
  '--gold-bright': 'oklch(0.88 0.18 85)',
  '--navy-deep': 'oklch(0.10 0.025 250)',
  background: 'oklch(0.10 0.025 250)',
  color: 'oklch(0.98 0.005 250)',
}

const programmeLinks = [
  { to: '/programmes/ug/bba', label: 'BBA' },
  { to: '/programmes/ug/bca', label: 'BCA' },
  { to: '/programmes/pg/mba', label: 'MBA' },
  { to: '/programmes/pg/msc-data-science', label: 'MSc Data Science' },
  { to: '/programmes/pg/msc-computer-applications', label: 'MSc Computer Applications' },
  { to: '/programmes/crash-course', label: 'Crash Course' },
  { to: '/programmes/startups', label: 'Startups' },
]

export default function Footer() {
  return (
    <footer style={{ ...darkVars, marginTop: '8rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
      <div
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '4rem 1.5rem',
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          gap: '2.5rem',
        }}
      >
        {/* Brand */}
        <div style={{ gridColumn: 'span 2' }} className="footer-brand">
          <style>{`@media(min-width:768px){.footer-brand{grid-column:span 1 !important}}`}</style>
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem', textDecoration: 'none' }}>
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
              }}
            >
              L
            </div>
            <span style={{ fontWeight: 600, color: 'white' }}>Lotlite</span>
          </Link>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6 }}>
            Lotlite School of Real Estate
            <br />Baner Knowledge District
            <br />Pune, MH 411045 · India
          </p>
        </div>

        {/* Programmes */}
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
            Programmes
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            {programmeLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Explore */}
        <div>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
            Explore
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>
              <Link to="/" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/outcomes" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
                Outcomes
              </Link>
            </li>
            <li>
              <ApplyDialog>
                <button style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
                  Apply Now
                </button>
              </ApplyDialog>
            </li>
            <li>
              <Link to="/contact" style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.8)', textDecoration: 'none' }}
                onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--gold)')}
                onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.8)')}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div style={{ gridColumn: 'span 2' }} className="footer-newsletter">
          <style>{`@media(min-width:768px){.footer-newsletter{grid-column:span 1 !important}}`}</style>
          <h4 style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '1rem' }}>
            Newsletter
          </h4>
          <p style={{ fontSize: '0.875rem', color: 'rgba(255,255,255,0.6)', marginBottom: '1rem' }}>
            Get the latest PropTech insights and updates from Lotlite.
          </p>
          <form onSubmit={(e) => e.preventDefault()} style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <input
              type="email"
              placeholder="Email address"
              style={{
                width: '100%',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                fontSize: '0.875rem',
                color: 'white',
                outline: 'none',
                boxSizing: 'border-box',
              }}
            />
            <button
              type="submit"
              style={{
                width: '100%',
                background: 'rgba(255,215,0,0.1)',
                border: '1px solid rgba(255,215,0,0.3)',
                borderRadius: '0.375rem',
                padding: '0.5rem 0.75rem',
                fontSize: '0.875rem',
                color: 'var(--gold)',
                cursor: 'pointer',
                fontWeight: 500,
              }}
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
        <div
          style={{
            maxWidth: '80rem',
            margin: '0 auto',
            padding: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            gap: '0.75rem',
            fontSize: '0.75rem',
            color: 'rgba(255,255,255,0.5)',
          }}
        >
          <p>© {new Date().getFullYear()} Lotlite School of Real Estate. All rights reserved.</p>
          <p>Crafted for the next era of PropTech leaders.</p>
        </div>
      </div>
    </footer>
  )
}
