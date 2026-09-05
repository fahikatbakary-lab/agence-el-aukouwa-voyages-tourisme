'use client'
// src/components/sections/DestinationsSection.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { MapPin, ArrowRight } from 'lucide-react'
import { getDestinations } from '@/services/destinations.service'
import type { Destination } from '@/types/database'

const fallbackDestinations = [
  { id: '1', nom: 'La Mecque', pays: 'Arabie Saoudite', description: 'Ville sainte de l\'Islam. La Grande Mosquée et la Kaaba, destination ultime pour l\'Oumra et le Hajj.', image: '/images/hero-mecca.jpg', statut: 'actif', points_interet: ['Masjid al-Haram', 'La Kaaba', 'Zamzam', 'Montagne Arafat'], created_at: '', updated_at: '' } as Destination,
  { id: '2', nom: 'Médine', pays: 'Arabie Saoudite', description: 'Deuxième ville sainte. La Mosquée du Prophète, étape spirituelle incontournable pour les pèlerins.', image: '/images/oumra-section.jpg', statut: 'actif', points_interet: ['Mosquée du Prophète', 'Masjid Quba', 'Al-Baqi'], created_at: '', updated_at: '' } as Destination,
  { id: '3', nom: 'Dubaï', pays: 'Émirats Arabes Unis', description: 'Métropole moderne fascinante, mêlant architecture futuriste, shopping et plages magnifiques.', image: '/images/saudi-destination.jpg', statut: 'actif', points_interet: ['Burj Khalifa', 'Dubai Mall', 'Palm Jumeirah'], created_at: '', updated_at: '' } as Destination,
  { id: '4', nom: 'Istanbul', pays: 'Turquie', description: 'Pont entre Orient et Occident. Mosquées somptueuses, gastronomie et histoire millénaire.', image: '/images/about-team.jpg', statut: 'actif', points_interet: ['Sainte-Sophie', 'Grand Bazar', 'Bosphore'], created_at: '', updated_at: '' } as Destination,
]

export default function DestinationsSection() {
  const [destinations, setDestinations] = useState<Destination[]>(fallbackDestinations)
  const [active, setActive] = useState(0)

  useEffect(() => {
    getDestinations().then(d => { if (d.length > 0) setDestinations(d) }).catch(() => {})
  }, [])

  const dest = destinations[active]

  return (
    <section id="destinations" className="section-padding" style={{ background: '#F8FAFC' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="badge-gold mx-auto mb-4">Destinations</div>
          <h2 className="section-title mb-4">
            Explorez nos <span className="gradient-gold-text">destinations</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            De l'Arabie Saoudite aux destinations internationales, nous vous emmenons partout avec soin.
          </p>
        </div>

        {/* Destination Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {destinations.map((d, i) => (
            <button
              key={d.id}
              onClick={() => setActive(i)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300"
              style={{
                background: active === i ? '#0B2A4A' : '#fff',
                color: active === i ? '#D4A83F' : '#475569',
                border: active === i ? '2px solid rgba(212,168,63,0.4)' : '2px solid #e2e8f0',
                boxShadow: active === i ? '0 4px 15px rgba(11,42,74,0.2)' : 'none',
              }}
            >
              <MapPin size={14} />
              {d.nom}
            </button>
          ))}
        </div>

        {/* Featured destination */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 rounded-3xl overflow-hidden" style={{ background: '#fff', boxShadow: '0 8px 40px rgba(11,42,74,0.1)' }}>
          {/* Image */}
          <div
            className="relative min-h-72 lg:min-h-full bg-cover bg-center"
            style={{ backgroundImage: `url('${dest.image || '/images/saudi-destination.jpg'}')` }}
          >
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(11,42,74,0.7) 0%, transparent 60%)' }} />
            <div className="absolute bottom-6 left-6">
              <div className="badge-gold">{dest.pays}</div>
            </div>
          </div>

          {/* Info */}
          <div className="p-10 lg:p-12 flex flex-col justify-center">
            <h3 style={{ color: '#0B2A4A', fontSize: '1.75rem', fontWeight: 800, marginBottom: '1rem' }}>
              {dest.nom}
            </h3>
            <p style={{ color: '#64748b', lineHeight: 1.7, marginBottom: '1.5rem' }}>
              {dest.description}
            </p>
            {dest.points_interet && dest.points_interet.length > 0 && (
              <div className="mb-6">
                <div style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '0.85rem', marginBottom: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                  Points d'intérêt
                </div>
                <div className="flex flex-wrap gap-2">
                  {dest.points_interet.map(p => (
                    <span key={p} className="badge-blue">{p}</span>
                  ))}
                </div>
              </div>
            )}
            <div className="btn-group">
              <Link href={`/destinations`} className="btn-dark">
                Voir les offres
              </Link>
              <Link href="/reservation" className="btn-outline">
                Demander une réservation
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link href="/destinations" className="inline-flex items-center gap-2 font-semibold transition-colors" style={{ color: '#D4A83F' }}>
            Voir toutes les destinations <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  )
}
