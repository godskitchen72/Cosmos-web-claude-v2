'use client'

const specialties = [
  { label: 'No-Fault Practices', desc: 'NF-2/NF-3 automation, IME tracking, AOB management.' },
  { label: 'Personal Injury Clinics', desc: 'Attorney coordination, lien tracking, legal-ready records.' },
  { label: 'Chiropractors', desc: 'Visit workflows and CPT coding built for musculoskeletal care.' },
  { label: 'Physical Therapy', desc: 'Progress notes and functional outcomes tied to billing.' },
  { label: 'Orthopedics', desc: 'Specialist templates, DME billing, referral workflows.' },
]

export default function WhoWeServe() {
  return (
    <section className="section">
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="eyebrow" style={{ marginBottom: '1.25rem' }}>Specialty Focus</div>
          <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: 'clamp(1.9rem, 3.5vw, 2.75rem)', fontWeight: 700 }}>
            Built for your specialty
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem' }}>
          {specialties.map((s) => (
            <div key={s.label} className="glass-card" style={{ padding: '1.5rem' }}>
              <h3 style={{ fontSize: '0.95rem', fontWeight: 600, marginBottom: '0.5rem' }}>{s.label}</h3>
              <p style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', lineHeight: 1.6 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
