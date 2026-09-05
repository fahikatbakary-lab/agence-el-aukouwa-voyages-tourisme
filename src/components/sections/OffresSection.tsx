'use client'
// src/components/sections/OffresSection.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { Calendar, Users, MapPin, ArrowRight, Star } from 'lucide-react'
import { getOffres } from '@/services/offres.service'
import type { Offre } from '@/types/database'

const fallbackOffres: Partial<Offre>[] = [
  {
    id: 'f1',
    titre: 'Oumra Ramadan Premium',
    description: 'Vivez la magie du Ramadan à La Mecque. Hébergement 5 étoiles, transport et accompagnement inclus.',
    prix: null,
    type: 'oumra',
    statut: 'actif',
    services_inclus: ['Billet d\'avion A/R', 'Hébergement 5★ La Mecque', 'Hébergement 4★ Médine', 'Transport', 'Guide accompagnateur'],
    image: '/images/hero-mecca.jpg',
    nombre_places: 30,
  },
  {
    id: 'f2',
    titre: 'Oumra Standard',
    description: 'Programme Oumra complet avec hébergement confortable, transport et guide expérimenté.',
    prix: null,
    type: 'oumra',
    statut: 'actif',
    services_inclus: ['Billet d\'avion A/R', 'Hébergement 3★ La Mecque', 'Transport', 'Accompagnement'],
    image: '/images/oumra-section.jpg',
    nombre_places: 40,
  },
  {
    id: 'f3',
    titre: 'Séjour Dubaï Découverte',
    description: 'Découvrez l\'incroyable Dubaï : Burj Khalifa, safari désert, plages et shopping.',
    prix: null,
    type: 'sejour',
    statut: 'actif',
    services_inclus: ['Vol A/R', 'Hôtel 4★', 'Excursions incluses', 'Guide'],
    image: '/images/saudi-destination.jpg',
    nombre_places: 25,
  },
]

const typeLabels: Record<string, string> = {
  oumra: 'Oumra',
  circuit: 'Circuit',
  sejour: 'Séjour',
  billetterie: 'Billetterie',
  autre: 'Offre',
}

export default function OffresSection() {
  const [offres, setOffres] = useState<Partial<Offre>[]>(fallbackOffres)

  useEffect(() => {
    getOffres().then(o => { if (o.length > 0) setOffres(o) }).catch(() => {})
  }, [])

  return (
    <section id="offres" className="section-padding" style={{ background: '#fff' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-gold mx-auto mb-4">Nos offres</div>
          <h2 className="section-title mb-4">
            Programmes & offres <span className="gradient-gold-text">disponibles</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Choisissez parmi nos programmes soigneusement conçus pour une expérience inoubliable.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offres.slice(0, 6).map((offre) => (
            <div
              key={offre.id}
              className="card card-gold-border flex flex-col"
              style={{ background: '#fff' }}
            >
              {/* Image */}
              <div
                className="relative h-52 bg-cover bg-center"
                style={{ backgroundImage: `url('${offre.image || '/images/hero-mecca.jpg'}')` }}
              >
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,42,74,0.6) 0%, transparent 60%)' }} />
                <div className="absolute top-4 left-4">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase"
                    style={{ background: offre.type === 'oumra' ? '#D4A83F' : '#0B2A4A', color: '#fff' }}
                  >
                    {typeLabels[offre.type || 'autre']}
                  </span>
                </div>
                {offre.statut === 'complet' && (
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: '#ef4444', color: '#fff' }}>
                      Complet
                    </span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1">
                <h3 style={{ color: '#0B2A4A', fontWeight: 800, fontSize: '1.05rem', marginBottom: '0.5rem' }}>
                  {offre.titre}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.6, marginBottom: '1rem', flex: 1 }}>
                  {offre.description?.substring(0, 100)}...
                </p>

                {/* Info */}
                <div className="flex flex-wrap gap-3 mb-4">
                  {offre.nombre_places && (
                    <span className="flex items-center gap-1 text-xs" style={{ color: '#64748b' }}>
                      <Users size={13} style={{ color: '#D4A83F' }} />
                      {offre.nombre_places} places
                    </span>
                  )}
                  {offre.date_depart && (
                    <span className="flex items-center gap-1 text-xs" style={{ color: '#64748b' }}>
                      <Calendar size={13} style={{ color: '#D4A83F' }} />
                      {new Date(offre.date_depart).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short' })}
                    </span>
                  )}
                </div>

                {/* Services inclus */}
                {offre.services_inclus && offre.services_inclus.length > 0 && (
                  <div className="mb-4">
                    {offre.services_inclus.slice(0, 3).map(s => (
                      <div key={s} className="flex items-center gap-2 text-xs mb-1" style={{ color: '#475569' }}>
                        <span style={{ color: '#D4A83F', fontSize: '0.7rem' }}>✓</span> {s}
                      </div>
                    ))}
                  </div>
                )}

                {/* Prix + CTA */}
                <div className="flex items-center justify-between mt-auto pt-4" style={{ borderTop: '1px solid #f1f5f9' }}>
                  <div>
                    {offre.prix ? (
                      <div>
                        <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>À partir de</span>
                        <div style={{ color: '#D4A83F', fontWeight: 900, fontSize: '1.25rem' }}>
                          {offre.prix.toLocaleString('fr-FR')} FCFA
                        </div>
                      </div>
                    ) : (
                      <div style={{ color: '#D4A83F', fontWeight: 700, fontSize: '0.9rem' }}>
                        Sur demande
                      </div>
                    )}
                  </div>
                  <Link href={`/offres/${offre.id}`} className="btn-dark text-sm py-2 px-4">
                    Voir l'offre
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link href="/offres" className="btn-primary">
            Voir toutes les offres
          </Link>
        </div>
      </div>
    </section>
  )
}
