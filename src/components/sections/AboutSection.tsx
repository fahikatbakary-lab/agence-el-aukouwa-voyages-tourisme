'use client'
// src/components/sections/AboutSection.tsx
import Link from 'next/link'
import { CheckCircle, Heart, Shield, Star } from 'lucide-react'

const values = [
  { icon: Heart, title: 'Confort & Soin', desc: 'Chaque détail de votre voyage est pensé pour votre bien-être.' },
  { icon: Shield, title: 'Confiance & Sécurité', desc: 'Une agence sérieuse et professionnelle pour vos voyages.' },
  { icon: Star, title: 'Excellence & Qualité', desc: 'Des prestations premium pour une expérience mémorable.' },
]

const engagements = [
  'Accompagnement personnalisé de A à Z',
  'Équipe expérimentée et dévouée',
  'Programmes adaptés aux pèlerins africains',
  'Hébergement soigneusement sélectionné',
  'Assistance 24h/24 durant votre séjour',
  'Tarifs transparents sans surprises',
]

export default function AboutSection() {
  return (
    <section id="a-propos" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Image side */}
          <div className="relative">
            <div
              className="relative rounded-3xl overflow-hidden"
              style={{ minHeight: '320px', height: 'auto', background: 'linear-gradient(135deg, #0B2A4A, #2E82B7)' }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url('/images/about-team.jpg')`, opacity: 0.6 }}
              />
              {/* Gold accent card */}
              <div
                className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl"
                style={{ background: 'rgba(11,42,74,0.92)', backdropFilter: 'blur(15px)', border: '1px solid rgba(212,168,63,0.3)' }}
              >
                <div style={{ color: '#D4A83F', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  Notre mission
                </div>
                <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem', lineHeight: 1.6 }}>
                  Accompagner nos clients dans leurs voyages sacrés et touristiques avec professionnalisme, sérieux et une attention particulière à leur confort.
                </p>
              </div>
            </div>
            {/* Floating badge */}
            <div
              className="absolute -top-5 -right-5 w-28 h-28 rounded-full flex flex-col items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', boxShadow: '0 8px 30px rgba(212,168,63,0.4)' }}
            >
              <div style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0B2A4A', lineHeight: 1 }}>5+</div>
              <div style={{ fontSize: '0.65rem', color: '#0B2A4A', fontWeight: 600, textAlign: 'center', lineHeight: 1.3 }}>Ans<br />d'expérience</div>
            </div>
          </div>

          {/* Content side */}
          <div>
            <div className="gold-line" style={{ margin: '0 0 1rem' }}></div>
            <div className="badge-gold mb-4">À propos de nous</div>
            <h2 className="section-title mb-5">
              El Aukouwa Voyages &<br />
              <span className="gradient-gold-text">Tourisme</span>
            </h2>
            <p className="section-subtitle mb-6">
              Nous sommes une agence de voyage spécialisée dans l'organisation de voyages sacrés et touristiques, dédiée aux pèlerins africains souhaitant accomplir leur Oumra ou visiter l'Arabie Saoudite dans les meilleures conditions.
            </p>
            <p className="section-subtitle mb-8">
              Notre équipe professionnelle met tout en œuvre pour que chaque voyage soit une expérience unique, confortable et spirituellement enrichissante.
            </p>

            {/* Engagements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-8 sm:mb-10">
              {engagements.map(e => (
                <div key={e} className="flex items-start gap-2">
                  <CheckCircle size={17} style={{ color: '#D4A83F', flexShrink: 0, marginTop: '0.15rem' }} />
                  <span style={{ color: '#475569', fontSize: '0.9rem' }}>{e}</span>
                </div>
              ))}
            </div>

            <Link href="/a-propos" className="btn-dark">
              En savoir plus sur nous
            </Link>
          </div>
        </div>

        {/* Values row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mt-14 sm:mt-20">
          {values.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex items-start gap-4 p-7 rounded-2xl transition-all duration-300"
              style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(11,42,74,0.06)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,63,0.4)'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 30px rgba(11,42,74,0.12)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
                ;(e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(11,42,74,0.06)'
              }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,168,63,0.10)', color: '#D4A83F' }}
              >
                <Icon size={22} />
              </div>
              <div>
                <h3 style={{ color: '#0B2A4A', fontWeight: 700, marginBottom: '0.4rem' }}>{title}</h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
