import { useState, useEffect, useCallback, useRef } from 'react'
import { ArrowRight, Loader2, CheckCircle2, Rocket, Briefcase } from 'lucide-react'
import { submitLead } from '../../lib/submitLead.js'

// ---- Edit program options here ----
const PROGRAM_OPTIONS = [
  'Data Science',
  'MCA (PropTech & Engineering)',
  'MCA (Ecosystems & CRM)',
  'MBA in Real Estate',
]

const inputStyle = {
  marginTop: '0.375rem',
  width: '100%',
  background: 'rgba(255,255,255,0.04)',
  border: '1px solid rgba(255,255,255,0.1)',
  borderRadius: '0.375rem',
  padding: '0.75rem 1rem',
  fontSize: '0.875rem',
  color: 'var(--foreground)',
  outline: 'none',
  transition: 'border-color 300ms',
  boxSizing: 'border-box',
}

function FormField({ label, children }) {
  return (
    <div>
      <label style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--muted-foreground)' }}>
        {label}
      </label>
      {children}
    </div>
  )
}

function SuccessState() {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
        <Rocket size={14} /> Founding Cohort Intake
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Done!!</h3>
      <div style={{ marginTop: '2rem', borderRadius: '0.75rem', background: 'rgba(var(--gold),0.1)', border: '1px solid rgba(255,215,0,0.3)', padding: '1.5rem', textAlign: 'center', background: 'oklch(0.82 0.16 78 / 0.1)' }}>
        <CheckCircle2 style={{ height: '2.5rem', width: '2.5rem', color: 'var(--gold)', margin: '0 auto 0.75rem' }} />
        <h4 style={{ fontWeight: 700, fontSize: '1.125rem' }}>Application received.</h4>
        <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginTop: '0.25rem' }}>
          Watch your inbox for the diagnostic invite.
        </p>
      </div>
    </>
  )
}

export default function LeadForm() {
  const [fullName, setFullName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [programInterest, setProgramInterest] = useState(PROGRAM_OPTIONS[0])
  const [status, setStatus] = useState('idle') // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')
    try {
      await submitLead({ fullName, email, phone, programInterest })
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setErrorMessage(err instanceof Error ? err.message : 'Something went wrong. Please try again.')
    }
  }

  const cardStyle = {
    borderRadius: '1.5rem',
    border: '1px solid var(--hairline)',
    background: 'var(--card)',
    opacity: 0.9,
    padding: '2rem',
    boxShadow: 'var(--shadow-premium)',
  }

  if (status === 'success') {
    return <div style={cardStyle}><SuccessState /></div>
  }

  const loading = status === 'loading'

  return (
    <form onSubmit={handleSubmit} style={cardStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--gold)', marginBottom: '0.75rem' }}>
        <Rocket size={14} /> Founding Cohort Intake
      </div>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 700 }}>Start your application</h3>
      <p style={{ fontSize: '0.875rem', color: 'var(--muted-foreground)', marginTop: '0.5rem' }}>
        A program lead will reach you within 24 hours.
      </p>

      {status === 'error' && (
        <div role="alert" style={{ marginTop: '1.5rem', borderRadius: '0.75rem', border: '1px solid rgba(239,68,68,0.3)', background: 'rgba(239,68,68,0.1)', padding: '0.75rem 1rem', fontSize: '0.875rem', color: '#fca5a5' }}>
          {errorMessage}
        </div>
      )}

      <div style={{ marginTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <FormField label="Full Name">
          <input required type="text" value={fullName} onChange={(e) => setFullName(e.target.value)}
            placeholder="Your full name" disabled={loading} style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.6)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
        </FormField>

        <FormField label="Email">
          <input required type="email" value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder="you@email.com" disabled={loading} style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.6)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
        </FormField>

        <FormField label="Phone">
          <input required type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
            placeholder="+91 90000 00000" disabled={loading} style={inputStyle}
            onFocus={(e) => (e.target.style.borderColor = 'rgba(255,215,0,0.6)')}
            onBlur={(e) => (e.target.style.borderColor = 'rgba(255,255,255,0.1)')} />
        </FormField>

        <FormField label="Academic Stream">
          <select value={programInterest} onChange={(e) => setProgramInterest(e.target.value)}
            disabled={loading} style={{ ...inputStyle, cursor: 'pointer' }}>
            {PROGRAM_OPTIONS.map((opt) => (
              <option key={opt} value={opt} style={{ background: 'var(--card)', color: 'var(--foreground)' }}>
                {opt}
              </option>
            ))}
          </select>
        </FormField>

        <button
          type="submit"
          disabled={loading}
          style={{
            width: '100%',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '0.5rem',
            padding: '0.875rem 1.5rem',
            borderRadius: '0.375rem',
            background: 'linear-gradient(to right, var(--gold), var(--gold-bright))',
            color: 'var(--navy-deep)',
            fontWeight: 700,
            boxShadow: 'var(--shadow-gold)',
            marginTop: '0.5rem',
            border: 'none',
            cursor: loading ? 'not-allowed' : 'pointer',
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? (
            <><Loader2 size={16} style={{ animation: 'spin 1s linear infinite' }} /> Submitting…</>
          ) : (
            <>Submit Application <ArrowRight size={16} /></>
          )}
        </button>

        <p style={{ fontSize: '0.6875rem', color: 'var(--muted-foreground)', textAlign: 'center' }}>
          <Briefcase size={12} style={{ display: 'inline', marginRight: '0.25rem' }} />
          By applying you consent to a structured diagnostic interview.
        </p>
      </div>
    </form>
  )
}
