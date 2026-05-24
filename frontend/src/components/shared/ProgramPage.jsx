import { usePageTheme } from '../../hooks/usePageTheme.js'
import ApplyDialog from './ApplyDialog.jsx'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer, scaleIn } from '../../constants/animations.js'

/**
 * ProgramPage — reusable layout for all program detail pages.
 * Props:
 *   theme           {string}  — page theme: "ds" | "it" | "crm"
 *   heroImage       {string}  — hero image URL
 *   eyebrow         {string}  — small badge above title
 *   title           {string}  — program title
 *   badge           {string}  — optional "Founding Cohort" badge
 *   subtitle        {string}  — description paragraph
 *   ctaLabel        {string}  — primary CTA button text
 */
export default function ProgramPage({
  theme,
  heroImage,
  eyebrow = 'Post Graduate Program',
  title,
  badge,
  subtitle,
  ctaLabel,
}) {
  usePageTheme(theme)

  return (
    <div style={{ paddingTop: '8rem', position: 'relative' }}>
      {/* Grid overlay */}
      <div className="grid-overlay" style={{ position: 'absolute', inset: '0', top: 0, height: '600px', opacity: 0.3, zIndex: -1 }} />

      {/* Hero section */}
      <section
        style={{
          maxWidth: '80rem',
          margin: '0 auto',
          padding: '0 1.5rem 4rem',
          display: 'grid',
          gap: '3rem',
          alignItems: 'center',
        }}
        className="program-hero-grid"
      >
        <style>{`@media(min-width:1024px){.program-hero-grid{grid-template-columns:1.1fr 0.9fr}}`}</style>

        <div>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              borderRadius: '9999px',
              border: '1px solid var(--hairline)',
              background: 'var(--surface-soft)',
              padding: '0.25rem 0.75rem',
              fontSize: '0.75rem',
              textTransform: 'uppercase',
              letterSpacing: '0.1em',
              color: 'var(--gold)',
              marginBottom: '1.5rem',
            }}
          >
            {eyebrow}
          </div>
          <h1
            style={{
              fontSize: 'clamp(2rem,5vw,3.75rem)',
              fontWeight: 700,
              lineHeight: 1.05,
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '1rem',
            }}
          >
            {title}
            {badge && (
              <span
                style={{
                  fontSize: '0.75rem',
                  lineHeight: 1,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--gold)',
                  border: '1px solid rgba(255,215,0,0.3)',
                  borderRadius: '9999px',
                  padding: '0.375rem 0.75rem',
                  background: 'rgba(255,215,0,0.1)',
                  fontWeight: 700,
                  alignSelf: 'center',
                }}
              >
                {badge}
              </span>
            )}
          </h1>
          <p style={{ marginTop: '1.5rem', maxWidth: '42rem', fontSize: '1.125rem', color: 'var(--muted-foreground)', lineHeight: 1.625 }}>
            {subtitle}
          </p>
          <div style={{ marginTop: '2.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            <ApplyDialog>
              <button
                style={{
                  padding: '0.75rem 1.5rem',
                  borderRadius: '0.375rem',
                  background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                  color: 'var(--on-accent)',
                  fontWeight: 700,
                  boxShadow: 'var(--shadow-gold)',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                {ctaLabel}
              </button>
            </ApplyDialog>
          </div>
        </div>

        {/* Hero image */}
        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              inset: '-1.5rem',
              background: 'linear-gradient(135deg, rgba(255,215,0,0.2), transparent)',
              filter: 'blur(2rem)',
              borderRadius: '1.5rem',
              zIndex: -1,
            }}
          />
          <div style={{ borderRadius: '1.5rem', overflow: 'hidden', border: '1px solid var(--hairline)', boxShadow: 'var(--shadow-premium)', aspectRatio: '4/5' }}>
            <img src={heroImage} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} loading="lazy" />
          </div>
          <div
            className="bg-glass border-hairline"
            style={{ position: 'absolute', bottom: '-1.5rem', left: '-1.5rem', borderRadius: '0.75rem', padding: '1rem', boxShadow: 'var(--shadow-premium)' }}
          >
            <div className="text-gradient-gold" style={{ fontSize: '1.5rem', fontWeight: 700 }}>Day 1</div>
            <div style={{ fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)' }}>
              Employment activates
            </div>
          </div>
        </div>
      </section>

      {/* Stats band */}
      <motion.section
        style={{ borderTop: '1px solid var(--hairline)', borderBottom: '1px solid var(--hairline)', backgroundColor: 'var(--navy-mid)', opacity: 0.9 }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-80px' }}
        variants={staggerContainer}
      >
        <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }} className="stats-band-grid">
          <style>{`@media(min-width:768px){.stats-band-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
          {[['24', 'Months'], ['4', 'Semesters'], ['100%', 'Placement'], ['18L+', 'Avg CTC']].map(([n, l]) => (
            <motion.div key={l} variants={fadeInUp} style={{ padding: '2rem 1rem', textAlign: 'center', borderRight: '1px solid var(--hairline)' }}>
              <div className="text-gradient-gold" style={{ fontSize: '1.875rem', fontWeight: 700 }}>{n}</div>
              <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>{l}</div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Final CTA */}
      <section style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem 6rem' }}>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={scaleIn}
          style={{
            borderRadius: '1.5rem',
            background: 'linear-gradient(to right, rgba(255,215,0,0.15), rgba(255,215,0,0.05), transparent)',
            border: '1px solid var(--hairline)',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '1.5rem',
            alignItems: 'flex-start',
          }}
          className="cta-flex"
        >
          <style>{`@media(min-width:768px){.cta-flex{flex-direction:row !important;align-items:center !important}}`}</style>
          <div style={{ flex: 1 }}>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Ready to claim your seat?</h3>
            <p style={{ color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>Cohorts are capped. Employment activates Day 1.</p>
          </div>
          <ApplyDialog>
            <button
              style={{
                padding: '0.875rem 1.75rem',
                borderRadius: '0.375rem',
                background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                color: 'var(--on-accent)',
                fontWeight: 700,
                boxShadow: 'var(--shadow-gold)',
                border: 'none',
                cursor: 'pointer',
                whiteSpace: 'nowrap',
              }}
            >
              {ctaLabel}
            </button>
          </ApplyDialog>
        </motion.div>
      </section>
    </div>
  )
}
