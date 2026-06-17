'use client'
import Image from 'next/image'
import { Linkedin, Twitter, Instagram } from 'lucide-react'

export default function Footer() {
  return (
    <footer style={{ background: '#000000', borderTop: '1px solid rgba(0,212,255,0.1)', padding: '2rem 1.5rem 1.5rem', position: 'relative', zIndex: 1 }}>
      <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
        <Image src="/cosmos-logo-final.png" alt="Cosmos Medical Technologies" width={1285} height={310} style={{ height: '32px', width: 'auto', maxWidth: '100%' }} />

        {/* Social placeholders — not yet linked to real profiles */}
        <div style={{ display: 'flex', gap: '0.9rem' }}>
          <a href="#" aria-label="LinkedIn" style={{ color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
            <Linkedin size={18} />
          </a>
          <a href="#" aria-label="Twitter" style={{ color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
            <Twitter size={18} />
          </a>
          <a href="#" aria-label="Instagram" style={{ color: 'rgba(255,255,255,0.4)', display: 'flex' }}>
            <Instagram size={18} />
          </a>
        </div>

        <span style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.35)' }}>
          © 2026 Cosmos Medical Technologies. All rights reserved.
        </span>
      </div>
    </footer>
  )
}
