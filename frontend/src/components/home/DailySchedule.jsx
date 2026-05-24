import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { dailyScheduleData } from '../../data/homeData.js'

/**
 * DailySchedule — visual timeline of the daily 12-hour operating schedule.
 * Edit dailyScheduleData in data/homeData.js to change schedule items.
 */
export default function DailySchedule() {
  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            {dailyScheduleData.eyebrow}
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>
            {dailyScheduleData.heading}
          </h2>
        </div>

        <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }} variants={staggerContainer}>
          {dailyScheduleData.items.map((item, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              style={{
                position: 'relative',
                borderRadius: '1rem',
                border: `1px solid ${item.highlight ? 'rgba(255,215,0,0.3)' : 'var(--hairline)'}`,
                padding: 'clamp(1.25rem,3vw,2rem)',
                transition: 'all 300ms',
                display: 'flex',
                flexDirection: 'column',
                gap: '1rem',
                overflow: 'hidden',
                backgroundColor: 'var(--card)',
                opacity: item.highlight ? 1 : 0.7,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'translateY(-4px)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'translateY(0)')}
              className="schedule-item"
            >
              <style>{`@media(min-width:768px){.schedule-item{flex-direction:row !important;align-items:center !important}}`}</style>

              {item.highlight && (
                <div style={{ position: 'absolute', top: 0, right: 0, width: '8rem', height: '8rem', background: 'rgba(255,215,0,0.1)', filter: 'blur(2rem)', borderRadius: '50%', marginTop: '-2.5rem', marginRight: '-2.5rem' }} />
              )}

              {/* Time badge */}
              <div style={{ flexShrink: 0, position: 'relative', zIndex: 1 }} className="schedule-time">
                <style>{`@media(min-width:768px){.schedule-time{width:14rem}}`}</style>
                <span style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  borderRadius: '9999px',
                  border: '1px solid rgba(255,215,0,0.2)',
                  background: 'rgba(255,215,0,0.1)',
                  padding: '0.25rem 0.75rem',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: 'var(--gold)',
                }}>
                  {item.time}
                </span>
              </div>

              {/* Title */}
              <div style={{ flex: 1, position: 'relative', zIndex: 1 }}>
                <h3 style={{
                  fontSize: '1.25rem',
                  fontWeight: 700,
                  color: item.highlight ? 'white' : 'var(--foreground)',
                  opacity: item.highlight ? 1 : 0.9,
                }}>
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  )
}
