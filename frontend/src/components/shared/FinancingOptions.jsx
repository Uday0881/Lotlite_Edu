import { memo } from 'react'
import { Shield, Clock, Download, PhoneCall } from 'lucide-react'

/**
 * FinancingOptions — Premium institutional financing reassurance section
 * Compact, theme-aware layout blending with light/dark modes
 */
export default memo(function FinancingOptions() {
  return (
    <section className="py-12 px-4 md:px-8 flex justify-center w-full font-sans relative z-10" aria-labelledby="financing-heading">
      <div className="w-full max-w-5xl bg-card border border-border rounded-2xl p-6 md:p-8 shadow-premium surface-level-2 transition-colors duration-500">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          {/* LEFT COLUMN — Text Content + CTAs */}
          <div className="md:col-span-5 flex flex-col gap-5 md:pr-6 md:border-r border-border transition-colors duration-500">
            <div>
              <h2 id="financing-heading" className="text-2xl md:text-3xl font-bold text-foreground leading-tight tracking-tight mb-2">
                Financing & Accessibility
              </h2>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Invest in your future with zero upfront financial stress. Our institutional partners provide complete support.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row md:flex-col gap-3 mt-1">
              <button className="btn-primary w-full flex items-center justify-center gap-2 text-sm">
                <Download className="w-4 h-4" />
                Download Guide
              </button>
              <button className="btn-ghost w-full flex items-center justify-center gap-2 text-sm">
                <PhoneCall className="w-4 h-4" />
                Speak to Team
              </button>
            </div>
          </div>

          {/* RIGHT COLUMN — Feature Cards */}
          <div className="md:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6 md:pl-2">
            
            {/* Feature 1 */}
            <div className="flex flex-col gap-3 bg-surface-soft p-5 rounded-xl border border-hairline hover:border-premium transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-500">
                <Shield className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">100% Coverage</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Fast-tracked loan approvals covering full program fees and accommodation costs.
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="flex flex-col gap-3 bg-surface-soft p-5 rounded-xl border border-hairline hover:border-premium transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-background border border-border flex items-center justify-center flex-shrink-0 shadow-sm transition-colors duration-500">
                <Clock className="w-5 h-5" style={{ color: 'var(--gold)' }} />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground mb-1">Flexible Repayment</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Multiple tenure options tailored around your new performance-linked salary.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
})
