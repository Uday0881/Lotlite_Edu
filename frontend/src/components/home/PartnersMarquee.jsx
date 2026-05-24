import { motion } from 'framer-motion'
import { fadeIn } from '../../constants/animations.js'
import { partnersData } from '../../data/homeData.js'

/**
 * PartnersMarquee — scrolling ticker of partner company names.
 * Edit partnersData in data/homeData.js to add/remove partners.
 */
export default function PartnersMarquee() {
  const doubled = [...partnersData.partners, ...partnersData.partners]
  return (
    <motion.div
      style={{
        padding: '2rem 0',
        borderTop: '1px solid rgba(255,255,255,0.1)',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(8px)',
      }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeIn}
    >
      <div style={{ textAlign: 'center', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.5)', marginBottom: '1.5rem' }}>
        {partnersData.label}
      </div>
      <div style={{ overflow: 'hidden', display: 'flex' }}>
        <div
          className="animate-marquee"
          style={{ display: 'flex', whiteSpace: 'nowrap', gap: '4rem', padding: '0 2rem', alignItems: 'center', opacity: 0.7 }}
        >
          {doubled.map((p, i) => (
            <div key={i} style={{ fontSize: 'clamp(1.25rem,2vw,1.5rem)', fontWeight: 900, letterSpacing: '-0.04em', color: 'white' }}>
              {p}
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  )
}
