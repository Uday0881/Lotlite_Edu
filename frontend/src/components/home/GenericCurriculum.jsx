import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp } from '../../constants/animations.js'
import SpiralCurriculum from '../shared/SpiralCurriculum.jsx'
import { genericCurriculumData } from '../../data/homeData.js'

/**
 * GenericCurriculum — homepage overview of the 24-month curriculum spiral.
 * Edit genericCurriculumData in data/homeData.js to change semester content.
 */
export default function GenericCurriculum() {
  return (
    <motion.section
      style={{
        padding: '6rem 0',
        borderTop: '1px solid var(--hairline)',
        borderBottom: '1px solid var(--hairline)',
        backgroundColor: 'var(--navy-deep)',
        opacity: 0.95,
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '80rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {genericCurriculumData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700, marginBottom: '1.5rem' }}>
            {genericCurriculumData.heading}
          </h2>
          <p style={{ fontSize: '1.125rem', color: 'var(--muted-foreground)', maxWidth: '48rem', margin: '0 auto', lineHeight: 1.625 }}>
            {genericCurriculumData.subheading}
          </p>
        </div>

        <SpiralCurriculum semesters={genericCurriculumData.semesters} />

        <div style={{ marginTop: '3rem', textAlign: 'center' }}>
          <Link
            to="/programs/mba-real-estate"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              padding: '0.75rem 1.5rem',
              borderRadius: '0.375rem',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              color: 'var(--foreground)',
              fontSize: '0.875rem',
              fontWeight: 500,
              textDecoration: 'none',
              transition: 'background 300ms',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.1)')}
            onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255,255,255,0.05)')}
          >
            Explore Specific Programs <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </motion.section>
  )
}
