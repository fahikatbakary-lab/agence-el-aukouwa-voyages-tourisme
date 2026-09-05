'use client'
// src/app/reservation/page.tsx
import { useState } from 'react'
import { Send, Calendar, Users, MapPin } from 'lucide-react'

export default function ReservationPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    type_voyage: '',
    destination: '',
    date_depart: '',
    nombre_personnes: '1',
    budget: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0B2A4A 0%, #0f3660 100%)' }}>
        <div className="container-custom text-center">
          <div className="badge-gold mx-auto mb-4">Réservation</div>
          <h1 className="section-title mb-4" style={{ color: '#fff' }}>
            Demande de <span className="gradient-gold-text">réservation</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement avec une offre personnalisée.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container-custom max-w-3xl">
          <div className="p-8 rounded-3xl" style={{ background: '#fff', boxShadow: '0 8px 40px rgba(11,42,74,0.08)' }}>
            {submitted ? (
              <div className="p-12 rounded-2xl text-center" style={{ background: 'rgba(212,168,63,0.08)' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✈</div>
                <h3 style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '1.5rem', marginBottom: '0.75rem' }}>
                  Demande envoyée !
                </h3>
                <p style={{ color: '#64748b', marginBottom: '1.5rem' }}>
                  Notre équipe va étudier votre demande et vous recontacter dans les plus brefs délais.
                </p>
                <div style={{ color: '#D4A83F', fontWeight: 600, fontStyle: 'italic' }}>
                  « Votre confort, notre bonheur »
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <h2 style={{ color: '#0B2A4A', fontWeight: 800, fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                  Vos informations
                </h2>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Nom complet *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.nom}
                      onChange={e => setFormData({ ...formData, nom: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                    />
                  </div>
                  <div>
                    <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                      style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Téléphone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.telephone}
                    onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                    style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                  />
                </div>

                <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '1.5rem' }}>
                  <h3 style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '1.1rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <MapPin size={18} style={{ color: '#D4A83F' }} />
                    Détails du voyage
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        Type de voyage *
                      </label>
                      <select
                        required
                        value={formData.type_voyage}
                        onChange={e => setFormData({ ...formData, type_voyage: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC', color: '#475569' }}
                      >
                        <option value="">Choisir</option>
                        <option value="oumra">Oumra</option>
                        <option value="hajj">Hajj</option>
                        <option value="sejour">Séjour</option>
                        <option value="circuit">Circuit touristique</option>
                        <option value="billetterie">Billetterie</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        Destination souhaitée
                      </label>
                      <select
                        value={formData.destination}
                        onChange={e => setFormData({ ...formData, destination: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC', color: '#475569' }}
                      >
                        <option value="">Choisir</option>
                        <option value="la-mecque">La Mecque</option>
                        <option value="medine">Médine</option>
                        <option value="dubai">Dubaï</option>
                        <option value="istanbul">Istanbul</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-5">
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        <Calendar size={13} style={{ display: 'inline', color: '#D4A83F' }} /> Date de départ
                      </label>
                      <input
                        type="date"
                        value={formData.date_depart}
                        onChange={e => setFormData({ ...formData, date_depart: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        <Users size={13} style={{ display: 'inline', color: '#D4A83F' }} /> Nombre de personnes
                      </label>
                      <input
                        type="number"
                        min={1}
                        max={50}
                        value={formData.nombre_personnes}
                        onChange={e => setFormData({ ...formData, nombre_personnes: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        Budget estimé (FCFA)
                      </label>
                      <input
                        type="text"
                        placeholder="Ex: 1 500 000"
                        value={formData.budget}
                        onChange={e => setFormData({ ...formData, budget: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                    Message / Précisions
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl text-sm outline-none resize-none"
                    style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                    placeholder="Décrivez vos besoins, préférences d'hébergement, etc."
                  />
                </div>

                <button type="submit" className="btn-primary flex items-center gap-2 w-full justify-center text-base py-4">
                  <Send size={18} />
                  Envoyer ma demande de réservation
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
