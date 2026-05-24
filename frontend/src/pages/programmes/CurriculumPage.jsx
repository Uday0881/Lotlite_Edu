import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, CheckCircle } from 'lucide-react';
import { programmesData } from '../../data/programmesData';
import NotFound from '../NotFound';

export default function CurriculumPage() {
  const { programId } = useParams();
  const program = programmesData.programs[programId];

  if (!program) {
    return <NotFound />;
  }

  return (
    <div style={{ paddingTop: '5rem', minHeight: '100vh', background: 'var(--background)' }}>
      {/* Header */}
      <section style={{ padding: '3rem 1.5rem', background: 'var(--glass-bg)', borderBottom: '1px solid var(--hairline)' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <Link
            to={`/programmes/${program.category}/${programId}`}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              color: 'var(--muted-foreground)',
              textDecoration: 'none',
              marginBottom: '1rem',
              fontSize: '0.875rem',
              transition: 'color 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = 'var(--foreground)'}
            onMouseLeave={(e) => e.currentTarget.style.color = 'var(--muted-foreground)'}
          >
            <ArrowLeft size={16} /> Back to Program
          </Link>
          <h1 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--foreground)', marginBottom: '0.5rem' }}>
            {program.shortTitle} Curriculum
          </h1>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)' }}>
            Detailed syllabus and course structure for the {program.duration} program.
          </p>
        </div>
      </section>

      {/* Curriculum List */}
      <section style={{ padding: '4rem 1.5rem' }}>
        <div style={{ maxWidth: '60rem', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {program.curriculum.map((term, index) => (
              <div
                key={index}
                style={{
                  padding: '2rem',
                  background: 'var(--card)',
                  borderRadius: '1rem',
                  border: '1px solid var(--hairline)',
                  boxShadow: 'var(--shadow-sm)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.5rem', borderBottom: '1px solid var(--hairline)', paddingBottom: '1rem' }}>
                  <div style={{ padding: '0.5rem', background: 'rgba(255,215,0,0.1)', borderRadius: '0.5rem' }}>
                    <BookOpen size={20} style={{ color: 'var(--gold)' }} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>{term.term}</h3>
                </div>
                
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1rem' }}>
                  {term.subjects.map((subject, sIdx) => (
                    <li key={sIdx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                      <CheckCircle size={16} style={{ color: 'var(--gold)', marginTop: '0.125rem', flexShrink: 0 }} />
                      <span style={{ color: 'var(--foreground)', fontSize: '0.9375rem' }}>{subject}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
