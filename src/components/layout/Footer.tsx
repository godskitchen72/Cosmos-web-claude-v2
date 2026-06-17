'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,212,255,0.1)', padding: '2.5rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem' }}>
        <Image src="/cosmos-logo.png" alt="Cosmos Medical Technologies" width={180} height={50} style={{ width: 'auto', height: '32px' }} />
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          © 2026 Cosmos Medical Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
