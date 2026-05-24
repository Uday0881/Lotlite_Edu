import { useParams, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Clock, Award } from 'lucide-react';
import { programmesData } from '../../data/programmesData';
import NotFound from '../NotFound';

export default function ProgramDetail() {
  const { programId } = useParams();
  const program = programmesData.programs[programId];

  if (!program) {
    return <NotFound />;
  }

  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Hero Section */}
      <section style={{ padding: '4rem 1.5rem', background: 'var(--glass-bg)', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
            <Link to="/" style={{ color: 'var(--muted-foreground)', textDecoration: 'none' }}>Home</Link>
            <span>/</span>
            <span style={{ textTransform: 'uppercase' }}>{program.category} Program</span>
            <span>/</span>
            <span style={{ color: 'var(--foreground)' }}>{program.shortTitle}</span>
          </div>

          <h1 style={{ fontSize: '3rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '1rem', lineHeight: 1.2 }}>
            {program.title}
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', maxWidth: '40rem', marginBottom: '2rem' }}>
            {program.description}
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--card)', borderRadius: '0.5rem', border: '1px solid var(--hairline)' }}>
              <Clock size={18} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>{program.duration}</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', padding: '0.75rem 1rem', background: 'var(--card)', borderRadius: '0.5rem', border: '1px solid var(--hairline)' }}>
              <Award size={18} style={{ color: 'var(--gold)' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Industry Certified</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '80rem', margin: '0 auto', display: 'grid', gridTemplateColumns: 'minmax(0, 1fr) 300px', gap: '3rem' }}>
          <div>
            <h2 style={{ fontSize: '2rem', fontWeight: 700, marginBottom: '1.5rem' }}>Program Overview</h2>
            <p style={{ color: 'var(--muted-foreground)', lineHeight: 1.7, marginBottom: '2rem' }}>
              This comprehensive {program.shortTitle} program is designed to equip students with the theoretical knowledge and practical skills required to excel in the modern landscape.
              Our curriculum is constantly updated to reflect the latest industry trends and academic research.
            </p>

            <Link 
              to={`/programmes/${program.category}/${programId}/curriculum`}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                padding: '0.875rem 1.5rem',
                borderRadius: '0.5rem',
                background: 'var(--card)',
                color: 'var(--foreground)',
                border: '1px solid var(--gold)',
                textDecoration: 'none',
                fontWeight: 600,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'var(--gold)';
                e.currentTarget.style.color = 'var(--navy-deep)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'var(--card)';
                e.currentTarget.style.color = 'var(--foreground)';
              }}
            >
              <BookOpen size={18} />
              View Full Curriculum
            </Link>
          </div>

          {/* Sidebar */}
          <div>
            <div style={{ padding: '1.5rem', background: 'var(--card)', borderRadius: '1rem', border: '1px solid var(--hairline)', position: 'sticky', top: '6rem' }}>
              <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1rem' }}>Interested in {program.shortTitle}?</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginBottom: '1.5rem' }}>
                Join the next founding cohort and start your journey.
              </p>
              <button
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '0.5rem',
                  background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
                  color: 'var(--navy-deep)',
                  border: 'none',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '0.5rem',
                }}
              >
                Apply Now <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
