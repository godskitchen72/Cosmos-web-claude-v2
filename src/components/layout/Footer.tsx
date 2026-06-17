'use client'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(0,212,255,0.1)', padding: '1.5rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem' }}>
        <Image src="/cosmos-logo-final.png" alt="Cosmos Medical Technologies" width={1285} height={310} style={{ height: '32px', width: 'auto', maxWidth: '100%' }} />
        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          © 2026 Cosmos Medical Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
