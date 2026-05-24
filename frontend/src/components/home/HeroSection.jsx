import { ArrowRight } from 'lucide-react'
import ApplyDialog from '../shared/ApplyDialog.jsx'
import { heroData } from '../../data/homeData.js'

/**
 * HeroSection — full-screen hero with background image, gold glow blobs,
 * headline, alert badge, CTA buttons, and info cards.
 * Edit heroData in data/homeData.js to change content.
 */
export default function HeroSection() {
  return (
    <section style={{ position: 'relative', minHeight: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: -1 }}>
        <img
          src={heroData.heroImage}
          alt="Lotlite campus skyline"
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
        />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0.55), rgba(0,0,0,0.85))' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, transparent 0%, rgba(0,0,0,0.55) 70%)' }} />
        <div style={{ position: 'absolute', top: '5rem', left: '25%', width: '30rem', height: '30rem', borderRadius: '50%', background: 'rgba(255,215,0,0.25)', filter: 'blur(64px)' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: '26rem', height: '26rem', borderRadius: '50%', background: 'rgba(255,215,0,0.15)', filter: 'blur(64px)' }} />
      </div>

      <div style={{ position: 'relative', maxWidth: '72rem', margin: '0 auto', padding: '8rem 1.5rem', textAlign: 'center', width: '100%' }}>
        {/* Badge */}
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            borderRadius: '9999px',
            border: '1px solid rgba(255,255,255,0.15)',
            background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)',
            padding: '0.375rem 1rem',
            fontSize: '0.75rem',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            color: 'var(--gold-bright)',
            marginBottom: '2rem',
          }}
          className="animate-fade-in"
        >
          <span style={{ width: '0.375rem', height: '0.375rem', borderRadius: '50%', background: 'var(--gold-bright)', animation: 'pulse 2s infinite' }} />
          {heroData.badge}
        </div>

        {/* Headline */}
        <h1
          style={{
            fontSize: 'clamp(2.5rem,7vw,4.5rem)',
            fontWeight: 700,
            lineHeight: 1.02,
            maxWidth: '62rem',
            margin: '0 auto',
            color: 'white',
            textShadow: '0 2px 30px rgba(0,0,0,0.6)',
          }}
          className="animate-fade-up"
        >
          {heroData.heading}{' '}
          <span className="text-gradient-gold">{heroData.headingAccent}</span>{' '}
          {heroData.headingEnd}
        </h1>

        {/* Subheading */}
        <p
          style={{
            marginTop: '2rem',
            fontSize: '1.125rem',
            color: 'rgba(255,255,255,0.85)',
            maxWidth: '42rem',
            margin: '2rem auto 0',
            lineHeight: 1.625,
            textShadow: '0 1px 12px rgba(0,0,0,0.6)',
          }}
          className="animate-fade-up"
        >
          {heroData.subheading}
        </p>

        {/* Alert */}
        <div
          style={{
            marginTop: '2rem',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.75rem',
            borderRadius: '1rem',
            border: '1px solid rgba(255,215,0,0.5)',
            background: 'rgba(255,215,0,0.15)',
            backdropFilter: 'blur(8px)',
            padding: '0.75rem 1.25rem',
          }}
          className="animate-fade-up"
        >
          <span style={{ fontSize: '1.25rem' }}>{heroData.alertIcon}</span>
          <span style={{ fontSize: '0.875rem', fontWeight: 600, color: 'white' }}>{heroData.alertText}</span>
        </div>

        {/* CTA Buttons */}
        <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }} className="animate-fade-up">
          <ApplyDialog>
            <button style={{
              display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
              padding: '0.875rem 1.75rem', borderRadius: '0.375rem',
              background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
              color: 'var(--navy-deep)', fontWeight: 700,
              boxShadow: 'var(--shadow-gold)', border: 'none', cursor: 'pointer',
            }}>
              {heroData.ctaPrimary} <ArrowRight size={16} />
            </button>
          </ApplyDialog>
          <a href={heroData.ctaSecondaryHref} style={{
            padding: '0.875rem 1.75rem', borderRadius: '0.375rem',
            border: '1px solid rgba(255,255,255,0.25)', background: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(8px)', color: 'white', fontWeight: 500,
            textDecoration: 'none',
          }}>
            {heroData.ctaSecondary}
          </a>
        </div>

        {/* Info cards */}
        <div style={{ marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1rem', maxWidth: '56rem', margin: '4rem auto 0' }} className="hero-info-grid animate-fade-up">
          <style>{`@media(min-width:768px){.hero-info-grid{grid-template-columns:repeat(4,1fr) !important}}`}</style>
          {heroData.infoCards.map(({ label, value }) => (
            <div key={label} style={{
              borderRadius: '0.75rem',
              border: '1px solid rgba(255,255,255,0.15)',
              background: 'rgba(255,255,255,0.1)',
              backdropFilter: 'blur(8px)',
              padding: '1.25rem',
              textAlign: 'left',
            }}>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.6)' }}>{label}</div>
              <div style={{ marginTop: '0.375rem', fontSize: '1rem', fontWeight: 600, color: 'white' }}>{value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
