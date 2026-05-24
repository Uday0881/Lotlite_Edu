import { useState } from 'react'
import { Plus, Minus } from 'lucide-react'
import { motion } from 'framer-motion'
import { fadeInUp, staggerContainer } from '../../constants/animations.js'
import { faqData } from '../../data/faqData.js'

/**
 * FAQ — accordion FAQ section.
 * Edit faqData.js to change questions and answers.
 * Import faqData as a prop to override per-page.
 */
export default function FAQ({ faqs = faqData }) {
  const [open, setOpen] = useState(0)

  return (
    <motion.section
      style={{ padding: '6rem 0' }}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
      variants={fadeInUp}
    >
      <div style={{ maxWidth: '56rem', margin: '0 auto', padding: '0 1.5rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
            FAQ
          </div>
          <h2 style={{ fontSize: 'clamp(1.875rem,5vw,3rem)', fontWeight: 700 }}>Questions, answered.</h2>
          <p style={{ marginTop: '1rem', color: 'var(--muted-foreground)' }}>
            Everything you need to decide if Lotlite is your next 24 months.
          </p>
        </div>

        <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }} variants={staggerContainer}>
          {faqs.map((f, i) => {
            const isOpen = open === i
            return (
              <motion.div
                key={f.q}
                variants={fadeInUp}
                style={{
                  borderRadius: '1rem',
                  border: '1px solid var(--hairline)',
                  background: isOpen ? 'var(--card)' : 'rgba(var(--card), 0.6)',
                  backgroundColor: 'var(--card)',
                  opacity: isOpen ? 1 : 0.8,
                  overflow: 'hidden',
                  transition: 'all 200ms',
                }}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '1rem',
                    padding: '1.25rem 1.5rem',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--foreground)',
                  }}
                >
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>{f.q}</span>
                  <span
                    style={{
                      height: '2.25rem',
                      width: '2.25rem',
                      minWidth: '2.25rem',
                      borderRadius: '50%',
                      background: 'rgba(255,215,0,0.15)',
                      color: 'var(--gold)',
                      display: 'grid',
                      placeItems: 'center',
                    }}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </span>
                </button>
                {isOpen && (
                  <div
                    style={{
                      padding: '0 1.5rem 1.5rem',
                      fontSize: '0.9375rem',
                      color: 'var(--muted-foreground)',
                      lineHeight: 1.625,
                      animation: 'fade-in 0.2s ease-out',
                    }}
                  >
                    {f.a}
                  </div>
                )}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </motion.section>
  )
}
