'use client'
// src/components/sections/TestimonialsSection.tsx
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    nom: 'Fatima Koné',
    ville: 'Abidjan, Côte d\'Ivoire',
    note: 5,
    texte: 'Grâce à El Aukouwa, j\'ai pu accomplir mon Oumra dans des conditions exceptionnelles. L\'organisation était parfaite, le guide très compétent. Je recommande vivement cette agence à tous mes proches.',
    initiales: 'FK',
  },
  {
    nom: 'Ibrahim Diallo',
    ville: 'Bouaké, Côte d\'Ivoire',
    note: 5,
    texte: 'Service irréprochable du début à la fin. L\'équipe d\'El Aukouwa s\'est occupée de tout : visa, billet, hôtel. J\'ai vécu une expérience spirituelle inoubliable à La Mecque et Médine.',
    initiales: 'ID',
  },
  {
    nom: 'Aïcha Coulibaly',
    ville: 'Yopougon, Abidjan',
    note: 5,
    texte: 'Première Oumra de ma vie et quelle expérience ! Tout était bien organisé, les hôtels proches de la Kaaba. L\'accompagnateur était disponible à tout moment. Merci El Aukouwa !',
    initiales: 'AC',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="temoignages" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="badge-gold mx-auto mb-4">Témoignages</div>
          <h2 className="section-title mb-4">
            Ce que disent nos <span className="gradient-gold-text">clients</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            La satisfaction de nos clients est notre plus belle récompense.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.nom}
              className="p-8 rounded-2xl flex flex-col transition-all duration-300"
              style={{ background: '#fff', border: '1px solid #e2e8f0', boxShadow: '0 2px 12px rgba(11,42,74,0.06)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 12px 40px rgba(11,42,74,0.12)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,63,0.3)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(11,42,74,0.06)'
                ;(e.currentTarget as HTMLElement).style.borderColor = '#e2e8f0'
              }}
            >
              {/* Quote icon */}
              <Quote size={32} style={{ color: 'rgba(212,168,63,0.25)', marginBottom: '1rem' }} />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.note }).map((_, i) => (
                  <Star key={i} size={16} fill="#D4A83F" style={{ color: '#D4A83F' }} />
                ))}
              </div>

              {/* Text */}
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: 1.7, flex: 1, fontStyle: 'italic', marginBottom: '1.5rem' }}>
                « {t.texte} »
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-black text-sm flex-shrink-0"
                  style={{ background: 'linear-gradient(135deg, #0B2A4A, #2E82B7)', color: '#D4A83F' }}
                >
                  {t.initiales}
                </div>
                <div>
                  <div style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '0.9rem' }}>{t.nom}</div>
                  <div style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{t.ville}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust badges */}
        <div className="mt-16 p-8 rounded-2xl text-center" style={{ background: 'rgba(11,42,74,0.04)', border: '1px solid rgba(11,42,74,0.08)' }}>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              { val: '500+', label: 'Pèlerins accompagnés' },
              { val: '98%', label: 'Satisfaction clients' },
              { val: '5+', label: 'Ans d\'expérience' },
              { val: '10+', label: 'Destinations' },
            ].map(({ val, label }) => (
              <div key={label} className="text-center">
                <div style={{ fontSize: '2rem', fontWeight: 900, background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                  {val}
                </div>
                <div style={{ color: '#64748b', fontSize: '0.85rem', marginTop: '0.25rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
