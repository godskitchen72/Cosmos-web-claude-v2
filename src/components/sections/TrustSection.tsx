'use client'
import { Shield, Lock, Cloud, Zap } from 'lucide-react'

const badges = [
  { icon: Shield, label: 'HIPAA Compliant', size: 16, offsetY: -1 },
  { icon: Lock, label: 'SOC 2 Type II', size: 15, offsetY: 0 },
  { icon: Cloud, label: 'Cloud Secure', size: 17, offsetY: 0 },
  { icon: Zap, label: 'Real-Time Analytics', size: 16, offsetY: 0 },
]

export default function TrustSection() {
  return (
    <section className="section" style={{ paddingTop: '2.5rem', paddingBottom: '2.5rem', borderTop: '1px solid rgba(0,212,255,0.08)', borderBottom: '1px solid rgba(0,212,255,0.08)' }}>
      <div className="container" style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        {badges.map(({ icon: Icon, label, size, offsetY }) => (
          <div key={label} className="trust-badge">
            <span style={{ width: 20, height: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transform: `translateY(${offsetY}px)` }}>
              <Icon size={size} style={{ color: '#00b8ff' }} />
            </span>
            {label}
          </div>
        ))}
      </div>
    </section>
  )
}
