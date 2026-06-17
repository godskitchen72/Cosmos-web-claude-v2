'use client'
import { Stethoscope, FileText, DollarSign, Bot, BarChart2, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Stethoscope, title: 'Medical Documentation', desc: 'AI-assisted SOAP notes, pain charts, and ICD-10/CPT coding with real-time clinical templates.' },
  { icon: FileText, title: 'No-Fault Automation', desc: 'Generate NF-2 and NF-3 forms instantly, with built-in compliance for NY payer requirements.' },
  { icon: DollarSign, title: 'Smart Billing', desc: 'Automate claims, reduce denials, and accelerate collections with real-time billing intelligence.' },
  { icon: Bot, title: 'AI Automation', desc: 'Cut documentation time and improve coding accuracy with intelligent workflow automation.' },
  { icon: BarChart2, title: 'Analytics & Insights', desc: 'Revenue, provider, and claim-tracking dashboards that turn practice data into decisions.' },
  { icon: ShieldCheck, title: 'Compliance', desc: 'Built-in NY No-Fault rules, HIPAA safeguards, and an audit-ready trail for every form.' },
]

export default function FeatureGrid() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Platform Overview</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700, marginBottom: '0.75rem' }}>
            Everything your practice needs
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.55)', maxWidth: '480px', margin: '0 auto' }}>
            Integrated tools that work together, from intake to collections.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {features.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="glass-card" style={{ padding: '1.75rem' }}>
              <div style={{
                width: 44, height: 44, borderRadius: 10,
                background: 'rgba(0,212,255,0.1)', border: '1px solid rgba(0,212,255,0.25)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#00d4ff', marginBottom: '1rem',
              }}>
                <Icon size={20} />
              </div>
              <h3 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.05rem', fontWeight: 600, marginBottom: '0.5rem' }}>{title}</h3>
              <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.65 }}>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
