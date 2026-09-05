'use client'
// src/app/contact/page.tsx
import { useState } from 'react'
import { Phone, Mail, MapPin, MessageCircle, Send, Clock } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    nom: '',
    email: '',
    telephone: '',
    sujet: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: connect to backend
    setSubmitted(true)
  }

  return (
    <div style={{ paddingTop: '80px' }}>
      {/* Header */}
      <section className="section-padding" style={{ background: 'linear-gradient(135deg, #0B2A4A 0%, #0f3660 100%)' }}>
        <div className="container-custom text-center">
          <div className="badge-gold mx-auto mb-4">Contact</div>
          <h1 className="section-title mb-4" style={{ color: '#fff' }}>
            Contactez-<span className="gradient-gold-text">nous</span>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto' }}>
            Notre équipe est à votre écoute pour répondre à toutes vos questions et vous accompagner dans vos projets de voyage.
          </p>
        </div>
      </section>

      <section className="section-padding" style={{ background: '#F8FAFC' }}>
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Formulaire */}
            <div className="p-8 rounded-3xl" style={{ background: '#fff', boxShadow: '0 8px 40px rgba(11,42,74,0.08)' }}>
              <h2 style={{ color: '#0B2A4A', fontWeight: 800, fontSize: '1.5rem', marginBottom: '1.5rem' }}>
                Envoyez-nous un message
              </h2>
              {submitted ? (
                <div className="p-8 rounded-2xl text-center" style={{ background: 'rgba(212,168,63,0.08)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✓</div>
                  <h3 style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                    Message envoyé !
                  </h3>
                  <p style={{ color: '#64748b' }}>
                    Nous vous répondrons dans les plus brefs délais.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
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
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
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
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        value={formData.telephone}
                        onChange={e => setFormData({ ...formData, telephone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                      />
                    </div>
                    <div>
                      <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                        Sujet *
                      </label>
                      <select
                        required
                        value={formData.sujet}
                        onChange={e => setFormData({ ...formData, sujet: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all"
                        style={{ border: '1px solid #e2e8f0', background: '#F8FAFC', color: '#475569' }}
                      >
                        <option value="">Choisir un sujet</option>
                        <option value="oumra">Oumra & Pèlerinage</option>
                        <option value="billetterie">Billetterie Aérienne</option>
                        <option value="sejour">Séjour International</option>
                        <option value="circuit">Circuit Touristique</option>
                        <option value="autre">Autre</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label style={{ color: '#475569', fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                      Message *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all resize-none"
                      style={{ border: '1px solid #e2e8f0', background: '#F8FAFC' }}
                    />
                  </div>
                  <button type="submit" className="btn-primary flex items-center gap-2 w-full justify-center">
                    <Send size={16} />
                    Envoyer le message
                  </button>
                </form>
              )}
            </div>

            {/* Infos */}
            <div className="space-y-6">
              {[
                { icon: Phone, label: 'Téléphone', value: '+225 00 00 00 00', href: 'tel:+2250000000000' },
                { icon: Mail, label: 'Email', value: 'contact@elaukouwa.com', href: 'mailto:contact@elaukouwa.com' },
                { icon: MapPin, label: 'Adresse', value: 'Abidjan, Côte d\'Ivoire', href: null },
                { icon: Clock, label: 'Horaires', value: 'Lun-Ven: 08h-18h | Sam: 09h-14h', href: null },
              ].map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex items-start gap-4 p-5 rounded-2xl" style={{ background: '#fff', border: '1px solid #e2e8f0' }}>
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: 'rgba(212,168,63,0.10)', color: '#D4A83F' }}>
                    <Icon size={22} />
                  </div>
                  <div>
                    <div style={{ color: '#94a3b8', fontSize: '0.8rem', marginBottom: '0.25rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</div>
                    {href ? (
                      <a href={href} style={{ color: '#0B2A4A', fontWeight: 600, fontSize: '1rem' }}>{value}</a>
                    ) : (
                      <div style={{ color: '#0B2A4A', fontWeight: 600, fontSize: '1rem' }}>{value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* WhatsApp */}
              <a
                href="https://wa.me/00000000000"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-5 rounded-2xl transition-all duration-200"
                style={{ background: 'rgba(37,211,102,0.08)', border: '1px solid rgba(37,211,102,0.25)' }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: 'rgba(37,211,102,0.15)', color: '#25D366' }}>
                  <MessageCircle size={22} />
                </div>
                <div>
                  <div style={{ color: '#0B2A4A', fontWeight: 700 }}>Écrivez-nous sur WhatsApp</div>
                  <div style={{ color: '#64748b', fontSize: '0.85rem' }}>Réponse rapide garantie</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
