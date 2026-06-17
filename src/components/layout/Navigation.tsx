'use client'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import { Menu, X } from 'lucide-react'

const navItems = ['Solutions', 'Products', 'Company', 'Resources']

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: scrolled ? 'rgba(4,14,32,0.95)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,212,255,0.1)' : '1px solid transparent',
        transition: 'all 0.25s ease',
      }}
    >
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px', padding: '0 1.5rem' }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center' }}>
          <Image
            src="/cosmos-logo.png"
            alt="Cosmos Medical Technologies"
            width={260}
            height={73}
            style={{ width: 'auto', height: '46px', objectFit: 'contain' }}
            priority
          />
        </a>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          {navItems.map((item) => (
            <a key={item} href="#" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none', fontSize: '0.9rem', fontWeight: 500 }}>
              {item}
            </a>
          ))}
        </div>

        <div className="nav-links" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <button className="btn-secondary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem' }}>Contact Sales</button>
          <button className="btn-primary" style={{ padding: '0.6rem 1.3rem', fontSize: '0.85rem' }}>Request Demo</button>
        </div>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          style={{ display: 'none', background: 'transparent', border: 'none', color: '#fff' }}
          className="mobile-menu-btn"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileOpen && (
        <div style={{ background: 'rgba(4,14,32,0.98)', padding: '1rem 1.5rem 1.5rem', borderTop: '1px solid rgba(0,212,255,0.1)' }}>
          {navItems.map((item) => (
            <a key={item} href="#" style={{ display: 'block', padding: '0.6rem 0', color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
              {item}
            </a>
          ))}
          <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem' }}>
            <button className="btn-secondary" style={{ flex: 1, justifyContent: 'center' }}>Contact Sales</button>
            <button className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>Request Demo</button>
          </div>
        </div>
      )}

      <style>{`
        @media (max-width: 880px) {
          .nav-links { display: none !important; }
          .mobile-menu-btn { display: block !important; }
        }
      `}</style>
    </nav>
  )
}
