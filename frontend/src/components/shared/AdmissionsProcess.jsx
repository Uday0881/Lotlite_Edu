import { CheckCircle2 } from 'lucide-react'
import { admissionsSteps, admissionsCommitments, admissionsSection } from '../../data/admissionsData.js'

/**
 * AdmissionsProcess — 4-step numbered admissions steps with connector line.
 * Edit admissionsData.js to change steps and commitments.
 */
export default function AdmissionsProcess() {
  return (
    <section
      id="admissions-process"
      style={{
        padding: '6rem 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--navy-deep)',
        opacity: 1,
      }}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {admissionsSection.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
            {admissionsSection.heading}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.625 }}>
            {admissionsSection.subheading}
          </p>
        </div>

        {/* Steps grid */}
        <div style={{ position: 'relative', marginBottom: '3rem' }}>
          {/* Connector line — desktop only */}
          <div
            style={{
              position: 'absolute',
              top: '1.75rem',
              left: '12.5%',
              right: '12.5%',
              height: '1px',
              background: 'linear-gradient(to right, transparent, rgba(255,215,0,0.4), transparent)',
            }}
            className="connector-line"
          />
          <style>{`@media(max-width:767px){.connector-line{display:none}}`}</style>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2rem', position: 'relative' }} className="steps-grid">
            <style>{`@media(min-width:768px){.steps-grid{grid-template-columns:repeat(4,1fr)}}`}</style>
            {admissionsSteps.map((s) => (
              <div key={s.n} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    margin: '0 auto 1.25rem',
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, var(--gold), var(--gold-bright))',
                    color: 'var(--navy-deep)',
                    fontWeight: 700,
                    fontSize: '1.125rem',
                    display: 'grid',
                    placeItems: 'center',
                    boxShadow: 'var(--shadow-gold)',
                    transition: 'transform 300ms',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
                >
                  {s.n}
                </div>
                <h3 style={{ fontWeight: 700, fontSize: '1.125rem', marginBottom: '0.5rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', maxWidth: '15rem', margin: '0 auto', lineHeight: 1.625 }}>
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Commitment box */}
        <div
          style={{
            maxWidth: '42rem',
            margin: '0 auto',
            borderRadius: '1rem',
            backgroundColor: 'var(--card)',
            border: '1px solid var(--hairline)',
            padding: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1.5rem',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <h4 style={{ fontWeight: 700, color: 'var(--gold)', whiteSpace: 'nowrap' }}>
            {admissionsSection.commitmentLabel}
          </h4>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '1rem 1.5rem', fontSize: '0.875rem', justifyContent: 'center' }}>
            {admissionsCommitments.map((c) => (
              <li key={c} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <CheckCircle2 size={16} style={{ color: 'var(--gold)' }} />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
