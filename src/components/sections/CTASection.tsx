'use client'
import { ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="section" style={{ textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '640px' }}>
        <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.15 }}>
          Ready to transform <span style={{ color: '#00d4ff' }}>your practice?</span>
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.55)', marginBottom: '2rem' }}>
          Join practices using Cosmos to streamline No-Fault compliance and accelerate revenue.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button className="btn-primary">Request a Demo <ArrowRight size={16} /></button>
          <button className="btn-secondary">Contact Sales</button>
        </div>
      </div>
    </section>
  )
}
