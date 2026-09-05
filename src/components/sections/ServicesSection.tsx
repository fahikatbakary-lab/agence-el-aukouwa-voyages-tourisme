'use client'
// src/components/sections/ServicesSection.tsx
import Link from 'next/link'
import { Plane, Hotel, Map, Star, Users, Headphones, Car, Globe, Briefcase } from 'lucide-react'

const services = [
  {
    icon: Star,
    title: 'Oumra & Pèlerinage',
    desc: 'Organisation complète de votre Oumra ou Hajj : visa, billets, hébergement à La Mecque et Médine, accompagnement spirituel.',
    href: '/oumra',
    accent: true,
  },
  {
    icon: Plane,
    title: 'Billetterie Aérienne',
    desc: 'Réservation de billets d\'avion aux meilleurs tarifs depuis Abidjan vers toutes les destinations mondiales.',
    href: '/services',
  },
  {
    icon: Hotel,
    title: 'Réservation d\'Hôtels',
    desc: 'Sélection et réservation d\'hébergements de qualité adaptés à vos besoins et votre budget.',
    href: '/services',
  },
  {
    icon: Map,
    title: 'Circuits Touristiques',
    desc: 'Découvrez le monde avec nos circuits organisés soigneusement conçus pour des expériences uniques.',
    href: '/services',
  },
  {
    icon: Globe,
    title: 'Séjours Internationaux',
    desc: 'Séjours clé en main à l\'international : tout inclus avec vol, hébergement et activités.',
    href: '/services',
  },
  {
    icon: Car,
    title: 'Transport Touristique',
    desc: 'Services de transport confortables et sécurisés pour tous vos déplacements touristiques.',
    href: '/services',
  },
  {
    icon: Headphones,
    title: 'Assistance Voyageurs',
    desc: 'Une équipe dédiée disponible pour répondre à toutes vos questions et vous assister durant votre voyage.',
    href: '/services',
  },
  {
    icon: Briefcase,
    title: 'Voyages Professionnels',
    desc: 'Organisation de voyages d\'affaires, conférences et séminaires internationaux.',
    href: '/services',
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding" style={{ background: '#fff' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="badge-gold mx-auto mb-4">Nos services</div>
          <h2 className="section-title mb-4">
            Des services complets pour<br />
            <span className="gradient-gold-text">tous vos voyages</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            El Aukouwa vous accompagne à chaque étape : de la planification au retour, avec professionnalisme et attention.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map(({ icon: Icon, title, desc, href, accent }) => (
            <Link
              key={title}
              href={href}
              className="group block p-8 rounded-2xl transition-all duration-300 text-left"
              style={{
                background: accent ? 'linear-gradient(135deg, #0B2A4A, #0f3660)' : '#F8FAFC',
                border: accent ? '1px solid rgba(212,168,63,0.3)' : '1px solid #e2e8f0',
                textDecoration: 'none',
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                if (!accent) {
                  el.style.background = '#0B2A4A'
                  el.style.borderColor = 'rgba(212,168,63,0.3)'
                  el.style.transform = 'translateY(-4px)'
                  el.style.boxShadow = '0 12px 40px rgba(11,42,74,0.2)'
                  const titleEl = el.querySelector('.service-title') as HTMLElement
                  const descEl = el.querySelector('.service-desc') as HTMLElement
                  if (titleEl) titleEl.style.color = '#fff'
                  if (descEl) descEl.style.color = 'rgba(255,255,255,0.7)'
                }
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                if (!accent) {
                  el.style.background = '#F8FAFC'
                  el.style.borderColor = '#e2e8f0'
                  el.style.transform = 'translateY(0)'
                  el.style.boxShadow = 'none'
                  const titleEl = el.querySelector('.service-title') as HTMLElement
                  const descEl = el.querySelector('.service-desc') as HTMLElement
                  if (titleEl) titleEl.style.color = '#0B2A4A'
                  if (descEl) descEl.style.color = '#64748b'
                }
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-300"
                style={{
                  background: accent ? 'rgba(212,168,63,0.15)' : 'rgba(212,168,63,0.10)',
                  color: '#D4A83F',
                }}
              >
                <Icon size={22} />
              </div>
              <h3
                className="service-title font-bold mb-2 transition-colors duration-300"
                style={{ color: accent ? '#fff' : '#0B2A4A', fontSize: '0.95rem' }}
              >
                {title}
              </h3>
              <p
                className="service-desc text-sm leading-relaxed transition-colors duration-300"
                style={{ color: accent ? 'rgba(255,255,255,0.75)' : '#64748b' }}
              >
                {desc}
              </p>
              {accent && (
                <div className="mt-4 text-xs font-semibold" style={{ color: '#D4A83F', letterSpacing: '0.05em' }}>
                  Notre spécialité →
                </div>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/services" className="btn-outline">
            Voir tous nos services
          </Link>
        </div>
      </div>
    </section>
  )
}
