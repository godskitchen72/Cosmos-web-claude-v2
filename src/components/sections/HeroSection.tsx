'use client'
import { ArrowRight, Play, TrendingUp, Clock } from 'lucide-react'

const queueRows = [
  { name: 'Maria Santos', status: 'Checked In', color: '#00d4ff', detail: 'Initial Eval · 9:15 AM' },
  { name: 'James Liu', status: 'Confirmed', color: '#818cf8', detail: 'Follow-Up · 9:45 AM' },
  { name: 'Patricia Brown', status: 'Completed', color: '#4ade80', detail: 'Re-Eval · 9:00 AM' },
  { name: 'Robert Garcia', status: 'Billing Ready', color: '#fbbf24', detail: 'NF-3 Pending · CPT 97110' },
]

export default function HeroSection() {
  return (
    <section className="section" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center', paddingTop: '11rem' }}>
      <div className="container hero-grid">
        {/* Left: copy */}
        <div>
          <div className="eyebrow" style={{ marginBottom: '1.5rem' }}>
            <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#00d4ff', display: 'inline-block' }} />
            New York No-Fault Platform
          </div>

          <h1 style={{
            fontFamily: "'Space Grotesk', sans-serif",
            fontSize: 'clamp(2.4rem, 5vw, 3.75rem)',
            fontWeight: 700,
            lineHeight: 1.12,
            letterSpacing: '-0.02em',
            marginBottom: '1.25rem',
          }}>
            One platform.{' '}
            <span style={{ color: '#00d4ff' }}>Complete control.</span>
          </h1>

          <p style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.6)', lineHeight: 1.7, marginBottom: '2.25rem', maxWidth: '480px' }}>
            AI-powered medical documentation, No-Fault workflow automation, and revenue cycle
            management — built for Personal Injury and No-Fault clinics across New York.
          </p>

          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <button className="btn-primary">
              Request Demo <ArrowRight size={16} />
            </button>
            <button className="btn-secondary">
              <Play size={14} /> Explore Platform
            </button>
          </div>
        </div>

        {/* Right: dashboard mockup */}
        <div style={{
          background: 'rgba(7,27,58,0.7)',
          border: '1px solid rgba(0,212,255,0.15)',
          borderRadius: '14px',
          overflow: 'hidden',
          boxShadow: '0 30px 60px rgba(0,0,0,0.5)',
        }}>
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            padding: '0.85rem 1.25rem', borderBottom: '1px solid rgba(0,212,255,0.1)',
            background: 'rgba(10,30,61,0.6)',
          }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 600 }}>Front Desk Dashboard</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.7rem', color: '#4ade80' }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#4ade80', display: 'inline-block', flexShrink: 0, marginTop: 1 }} />
              Live
            </span>
          </div>

          <div style={{ padding: '1.25rem' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '1.25rem' }}>
              <div style={{ background: 'rgba(10,30,61,0.6)', border: '1px solid rgba(0,212,255,0.1)', borderRadius: '8px', padding: '0.9rem 1rem' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Claims Processed</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700, color: '#00d4ff' }}>$2.4M</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.65rem', color: '#4ade80', marginTop: '0.2rem' }}>
                  <TrendingUp size={11} /> +12% this month
                </div>
              </div>
              <div style={{ background: 'rgba(10,30,61,0.6)', border: '1px solid rgba(0,212,255,0.1)', borderRadius: '8px', padding: '0.9rem 1rem' }}>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.45)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>NF3s Generated</div>
                <div style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: '1.5rem', fontWeight: 700 }}>2,847</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.65rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.2rem' }}>
                  <Clock size={11} /> Avg 47s to generate
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {queueRows.map((row) => (
                <div key={row.name} style={{
                  display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                  padding: '0.6rem 0.85rem', background: 'rgba(10,30,61,0.4)', borderRadius: '6px',
                  borderLeft: `3px solid ${row.color}`,
                }}>
                  <div>
                    <div style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.85)', fontWeight: 500 }}>{row.name}</div>
                    <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.4)', marginTop: '0.1rem' }}>{row.detail}</div>
                  </div>
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, color: row.color, whiteSpace: 'nowrap' }}>{row.status}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
