'use client'
// src/components/layout/Footer.tsx
import Link from 'next/link'
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react'

const services = [
  'Billetterie aérienne',
  'Organisation Oumra',
  'Pèlerinage organisé',
  'Séjours internationaux',
  'Circuits touristiques',
  'Réservation hôtels',
]

const destinations = [
  { label: 'La Mecque, Arabie Saoudite', href: '/destinations' },
  { label: 'Médine, Arabie Saoudite', href: '/destinations' },
  { label: 'Dubaï, Émirats Arabes Unis', href: '/destinations' },
  { label: 'Istanbul, Turquie', href: '/destinations' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: '#071d33' }}>
      {/* Main Footer */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <div
                className="flex items-center justify-center rounded-xl"
                style={{ width: 52, height: 52, background: 'rgba(212,168,63,0.15)', border: '2px solid rgba(212,168,63,0.4)' }}
              >
                <span style={{ fontSize: '1.5rem' }}>✈</span>
              </div>
              <div>
                <div style={{ fontWeight: 900, fontSize: '1rem', color: '#D4A83F', letterSpacing: '0.02em' }}>
                  EL AUKOUWA
                </div>
                <div style={{ fontSize: '0.65rem', color: 'rgba(255,255,255,0.55)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
                  Voyages & Tourisme
                </div>
              </div>
            </Link>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              Votre agence de référence pour l'Oumra, le pèlerinage et les voyages internationaux depuis la Côte d'Ivoire.
            </p>
            <div className="italic" style={{ color: '#D4A83F', fontSize: '0.9rem', fontStyle: 'italic' }}>
              « Votre confort, notre bonheur »
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-5">
              {[
                { label: 'Facebook', href: '#', svg: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                )},
                { label: 'Instagram', href: '#', svg: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="5"/><circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/></svg>
                )},
                { label: 'WhatsApp', href: 'https://wa.me/00000000000', svg: (
                  <MessageCircle size={16} />
                )},
              ].map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200"
                  style={{ background: 'rgba(212,168,63,0.12)', color: '#D4A83F', border: '1px solid rgba(212,168,63,0.25)' }}
                  onMouseEnter={e => {
                    (e.currentTarget as HTMLElement).style.background = '#D4A83F'
                    ;(e.currentTarget as HTMLElement).style.color = '#fff'
                  }}
                  onMouseLeave={e => {
                    (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,63,0.12)'
                    ;(e.currentTarget as HTMLElement).style.color = '#D4A83F'
                  }}
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 style={{ color: '#D4A83F', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Nos services
            </h3>
            <ul className="space-y-2">
              {services.map(s => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D4A83F'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span style={{ color: '#D4A83F', fontSize: '0.7rem' }}>▶</span>
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 style={{ color: '#D4A83F', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Destinations
            </h3>
            <ul className="space-y-2">
              {destinations.map(d => (
                <li key={d.label}>
                  <Link
                    href={d.href}
                    className="transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D4A83F'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span style={{ color: '#D4A83F', fontSize: '0.7rem' }}>▶</span>
                    {d.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Navigation */}
            <h3 style={{ color: '#D4A83F', fontWeight: 700, fontSize: '1rem', marginBottom: '1rem', marginTop: '1.75rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Navigation
            </h3>
            <ul className="space-y-1">
              {[
                { href: '/a-propos', label: 'À propos' },
                { href: '/oumra', label: 'Oumra' },
                { href: '/offres', label: 'Offres' },
                { href: '/contact', label: 'Contact' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = '#D4A83F'}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = 'rgba(255,255,255,0.6)'}
                  >
                    <span style={{ color: '#D4A83F', fontSize: '0.7rem' }}>▶</span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#D4A83F', fontWeight: 700, fontSize: '1rem', marginBottom: '1.25rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
              Contactez-nous
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,168,63,0.12)', color: '#D4A83F' }}>
                  <Phone size={15} />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Téléphone / WhatsApp</div>
                  <a href="tel:+2250000000000" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                    [À renseigner]
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,168,63,0.12)', color: '#D4A83F' }}>
                  <Mail size={15} />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Email</div>
                  <a href="mailto:contact@elaukouwa.com" style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                    [À renseigner]
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <div className="mt-0.5 flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: 'rgba(212,168,63,0.12)', color: '#D4A83F' }}>
                  <MapPin size={15} />
                </div>
                <div>
                  <div style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', marginBottom: '0.2rem' }}>Adresse</div>
                  <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}>
                    Abidjan, Côte d'Ivoire
                  </span>
                </div>
              </li>
            </ul>

            {/* Horaires */}
            <div className="mt-5 p-4 rounded-xl" style={{ background: 'rgba(212,168,63,0.07)', border: '1px solid rgba(212,168,63,0.15)' }}>
              <div style={{ color: '#D4A83F', fontWeight: 600, fontSize: '0.8rem', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                Horaires d'ouverture
              </div>
              <div style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.85rem', lineHeight: 1.6 }}>
                Lun – Ven : 08h00 – 18h00<br />
                Samedi : 09h00 – 14h00
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}>
        <div className="container-custom py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p style={{ color: 'rgba(255,255,255,0.45)', fontSize: '0.85rem' }}>
            © {year} El Aukouwa Voyages & Tourisme. Tous droits réservés.
          </p>
          <p style={{ color: 'rgba(255,255,255,0.35)', fontSize: '0.8rem' }}>
            Agence de voyage agréée — Abidjan, Côte d'Ivoire
          </p>
        </div>
      </div>
    </footer>
  )
}
