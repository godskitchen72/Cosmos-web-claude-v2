'use client'
import { Shield, Lock, Cloud, Zap } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'HIPAA Compliant' },
  { icon: Lock, label: 'SOC 2 Type II' },
  { icon: Cloud, label: 'Cloud Secure' },
  { icon: Zap, label: 'Real-Time Analytics' },
]

export default function TrustSection() {
  return (
    <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(0,212,255,0.08)', borderBottom: '1px solid rgba(0,212,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {badges.map(({ icon: Icon, label }) => (
          <div key={label} className="trust-badge">
            <Icon size={16} style={{ color: '#00b8ff' }} />
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
