'use client'
// src/components/layout/Navbar.tsx
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '/', label: 'Accueil' },
  { href: '/a-propos', label: 'À propos' },
  { href: '/services', label: 'Services' },
  { href: '/oumra', label: 'Oumra' },
  { href: '/destinations', label: 'Destinations' },
  { href: '/offres', label: 'Offres' },
  { href: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'navbar-scrolled' : 'bg-transparent'
      }`}
      style={{ background: scrolled ? 'rgba(11,42,74,0.97)' : 'transparent' }}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className="relative flex items-center justify-center rounded-xl overflow-hidden"
              style={{ width: 52, height: 52, background: 'rgba(212,168,63,0.15)', border: '2px solid rgba(212,168,63,0.4)' }}
            >
              <span style={{ fontSize: '1.5rem' }}>✈</span>
            </div>
            <div className="hidden sm:block">
              <div style={{ fontWeight: 900, fontSize: '1.05rem', color: '#D4A83F', letterSpacing: '0.02em', lineHeight: 1.1 }}>
                EL AUKOUWA
              </div>
              <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Voyages & Tourisme
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 text-sm font-medium rounded-lg transition-all duration-200"
                style={{ color: 'rgba(255,255,255,0.85)' }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.color = '#D4A83F'
                  ;(e.currentTarget as HTMLElement).style.background = 'rgba(212,168,63,0.1)'
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.85)'
                  ;(e.currentTarget as HTMLElement).style.background = 'transparent'
                }}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-3">
            <Link href="/reservation" className="btn-primary text-sm py-2.5 px-5">
              Demander une réservation
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg transition-colors"
            style={{ color: '#fff', background: 'rgba(255,255,255,0.1)' }}
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Menu"
            id="navbar-mobile-toggle"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{ background: 'rgba(11,42,74,0.98)', backdropFilter: 'blur(20px)' }}
      >
        <div className="container-custom py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg font-medium transition-all"
              style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem' }}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-3 pb-2 border-t" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
            <Link
              href="/reservation"
              onClick={() => setIsOpen(false)}
              className="btn-primary w-full justify-center"
              style={{ display: 'flex' }}
            >
              Demander une réservation
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}
