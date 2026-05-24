import { CheckCircle2, ChevronRight, BookOpen, Target, Award, Rocket } from 'lucide-react'

const ICONS = [BookOpen, Target, Award, Rocket]

/**
 * SpiralCurriculum — renders a vertical timeline curriculum.
 * Supports single-track (courses[]) and dual-track (leftTrack + rightTrack).
 *
 * Props:
 *   semesters {Array} — array of semester objects from programsData.js
 */
export default function SpiralCurriculum({ semesters }) {
  return (
    <div style={{ padding: '4rem 0', maxWidth: '64rem', margin: '0 auto', position: 'relative' }}>
      {/* Timeline line */}
      <div
        style={{
          position: 'absolute',
          left: '3rem',
          top: 0,
          bottom: 0,
          width: '1px',
          background: 'linear-gradient(to bottom, transparent, rgba(255,215,0,0.3), transparent)',
        }}
        className="timeline-line"
      />
      <style>{`@media(max-width:767px){.timeline-line{display:none}}`}</style>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        {semesters.map((sem, idx) => {
          const Icon = ICONS[idx % ICONS.length]
          const isDualTrack = !!(sem.leftTrack && sem.rightTrack)

          return (
            <div
              key={idx}
              style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem' }}
            >
              {/* Timeline node */}
              <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center', width: '4rem' }} className="timeline-node">
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: '50%',
                    border: '1px solid rgba(255,215,0,0.3)',
                    background: 'var(--card)',
                    backdropFilter: 'blur(8px)',
                    display: 'grid',
                    placeItems: 'center',
                    color: 'var(--gold)',
                    boxShadow: '0 0 15px rgba(255,215,0,0.1)',
                    marginTop: '0.5rem',
                  }}
                >
                  <Icon size={20} />
                </div>
              </div>
              <style>{`@media(max-width:767px){.timeline-node{display:none}}`}</style>

              {/* Content */}
              <div style={{ flex: 1 }}>
                {/* Mobile header */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem' }} className="mobile-header">
                  <style>{`@media(min-width:768px){.mobile-header{display:none}}`}</style>
                  <div style={{ width: '3rem', height: '3rem', borderRadius: '50%', border: '1px solid rgba(255,215,0,0.3)', background: 'rgba(255,215,0,0.1)', display: 'grid', placeItems: 'center', color: 'var(--gold)', flexShrink: 0 }}>
                    <Icon size={20} />
                  </div>
                  <div>
                    <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)' }}>{sem.title}</div>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>{sem.subtitle}</h3>
                  </div>
                </div>

                {isDualTrack ? (
                  <div style={{ display: 'grid', gap: '1.5rem', gridTemplateColumns: '1fr' }} className="dual-track-grid">
                    <style>{`@media(min-width:768px){.dual-track-grid{grid-template-columns:1fr 1fr}}`}</style>

                    {/* Left track */}
                    <div style={{ borderRadius: '1rem', border: '1px solid var(--hairline)', background: 'rgba(var(--card-rgb,34,34,34),0.4)', backgroundColor: 'var(--card)', opacity: 0.8, padding: '1.5rem', transition: 'border-color 300ms' }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'var(--hairline)')}>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>{sem.leftTrack.title}</div>
                      <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>{sem.title} — {sem.subtitle}</h4>
                      {sem.leftTrack.description && <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>{sem.leftTrack.description}</p>}
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {sem.leftTrack.courses.map((course, i) => (
                          <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                            <ChevronRight size={16} style={{ color: 'var(--muted-foreground)', flexShrink: 0, marginTop: '0.125rem' }} />
                            <span style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.9 }}>{course}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right track */}
                    <div style={{ borderRadius: '1rem', border: '1px solid rgba(255,215,0,0.2)', backgroundColor: 'var(--card)', padding: '1.5rem', position: 'relative', overflow: 'hidden', transition: 'border-color 300ms' }}
                      onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.5)')}
                      onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.2)')}>
                      <div style={{ position: 'absolute', top: '-3rem', right: '-3rem', width: '10rem', height: '10rem', borderRadius: '50%', background: 'rgba(255,215,0,0.1)', filter: 'blur(2rem)', zIndex: 0 }} />
                      <div style={{ position: 'relative' }}>
                        <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.5rem' }}>{sem.rightTrack.title}</div>
                        <h4 style={{ fontSize: '1.125rem', fontWeight: 700, marginBottom: '1rem' }}>{sem.title} — {sem.subtitle}</h4>
                        {sem.rightTrack.description && <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1rem' }}>{sem.rightTrack.description}</p>}
                        <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                          {sem.rightTrack.courses.map((course, i) => {
                            const isObj = typeof course === 'object'
                            return (
                              <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                                <CheckCircle2 size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.125rem' }} />
                                <div>
                                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'var(--foreground)', opacity: 0.9 }}>{isObj ? course.title : course}</span>
                                  {isObj && course.description && (
                                    <p style={{ fontSize: '0.75rem', color: 'var(--muted-foreground)', marginTop: '0.25rem', lineHeight: 1.5 }}>{course.description}</p>
                                  )}
                                </div>
                              </li>
                            )
                          })}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div style={{ borderRadius: '1rem', border: '1px solid rgba(255,215,0,0.1)', backgroundColor: 'var(--card)', padding: '1.5rem 2rem', position: 'relative', overflow: 'hidden', transition: 'border-color 300ms' }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.3)')}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = 'rgba(255,215,0,0.1)')}>
                    <div style={{ position: 'absolute', bottom: '-2.5rem', right: '-2.5rem', width: '8rem', height: '8rem', borderRadius: '50%', background: 'rgba(255,215,0,0.05)', filter: 'blur(1.5rem)' }} />
                    <div style={{ marginBottom: '1.5rem' }} className="sem-header">
                      <style>{`@media(max-width:767px){.sem-header{display:none}}`}</style>
                      <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--muted-foreground)', marginBottom: '0.25rem' }}>{sem.title}</div>
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{sem.subtitle}</h3>
                    </div>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gap: '0.75rem', gridTemplateColumns: '1fr' }} className="courses-grid">
                      <style>{`@media(min-width:768px){.courses-grid{grid-template-columns:1fr 1fr}}`}</style>
                      {sem.courses?.map((course, i) => (
                        <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                          <ChevronRight size={16} style={{ color: 'var(--gold)', flexShrink: 0, marginTop: '0.125rem' }} />
                          <span style={{ fontSize: '0.875rem', color: 'var(--foreground)', opacity: 0.9 }}>{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
