'use client'
// src/components/sections/WhyUsSection.tsx
import { Shield, Clock, Users, Award, Heart, Headphones } from 'lucide-react'

const reasons = [
  { icon: Shield, title: 'Sécurité garantie', desc: 'Agence agréée avec des années d\'expérience dans l\'organisation de voyages sacrés et touristiques en toute sécurité.' },
  { icon: Clock, title: 'Disponibilité 24/7', desc: 'Notre équipe est disponible à toute heure pour répondre à vos questions et vous assister durant votre voyage.' },
  { icon: Users, title: 'Accompagnement personnel', desc: 'Chaque groupe bénéficie d\'un accompagnateur dédié pour une expérience unique et personnalisée.' },
  { icon: Award, title: 'Expérience & expertise', desc: 'Plus de 5 ans d\'expérience dans l\'organisation de l\'Oumra et des voyages internationaux depuis Abidjan.' },
  { icon: Heart, title: 'Service avec cœur', desc: 'Nous mettons notre passion pour le voyage et le service au service de votre confort et de votre bonheur.' },
  { icon: Headphones, title: 'Support complet', desc: 'Visa, billets, hébergement, transport : nous gérons tout de A à Z pour que vous voyagiez l\'esprit léger.' },
]

export default function WhyUsSection() {
  return (
    <section id="pourquoi-nous" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="badge-gold mx-auto mb-4">Pourquoi nous choisir</div>
          <h2 className="section-title mb-4">
            La différence <span className="gradient-gold-text">El Aukouwa</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Nous ne sommes pas une agence comme les autres. Découvrez ce qui fait notre singularité.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className="group p-7 rounded-2xl transition-all duration-300 cursor-default"
              style={{ background: '#fff', border: '1px solid #e2e8f0' }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(-4px)'
                el.style.boxShadow = '0 12px 40px rgba(11,42,74,0.12)'
                el.style.borderColor = 'rgba(212,168,63,0.35)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLElement
                el.style.transform = 'translateY(0)'
                el.style.boxShadow = 'none'
                el.style.borderColor = '#e2e8f0'
              }}
            >
              <div className="flex items-start gap-4">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{ background: 'rgba(11,42,74,0.06)' }}
                >
                  <Icon size={22} style={{ color: '#D4A83F' }} />
                </div>
                <div>
                  <div
                    className="text-2xl font-black mb-0.5"
                    style={{ color: 'rgba(212,168,63,0.25)', lineHeight: 1 }}
                  >
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <h3 style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.5rem' }}>
                    {title}
                  </h3>
                  <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6 }}>{desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
