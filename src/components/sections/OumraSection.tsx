'use client'
// src/components/sections/OumraSection.tsx
import Link from 'next/link'
import { CheckCircle, MapPin, Hotel, Car, Headphones, FileText, Heart } from 'lucide-react'

const features = [
  { icon: MapPin, label: 'La Mecque & Médine', desc: 'Visites des lieux saints avec guide professionnel' },
  { icon: Hotel, label: 'Hébergement Premium', desc: 'Hôtels soigneusement sélectionnés proches de la Kaaba' },
  { icon: Car, label: 'Transport Inclus', desc: 'Transferts aéroport, navettes intravilles confortables' },
  { icon: Headphones, label: 'Assistance 24/7', desc: 'Notre équipe vous accompagne à chaque instant' },
  { icon: FileText, label: 'Gestion Administrative', desc: 'Visa, passeport, tous documents facilités' },
  { icon: Heart, label: 'Accompagnement Spirituel', desc: 'Guides expérimentés pour une Oumra enrichissante' },
]

export default function OumraSection() {
  return (
    <section id="oumra" className="section-padding-lg relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url('/images/oumra-section.jpg')`, opacity: 0.15 }}
      />
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, #0B2A4A 0%, #0B2A4A 60%, rgba(11,42,74,0.85) 100%)' }}
      />

      {/* Decorative circles */}
      <div
        className="absolute -top-32 -right-32 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4A83F, transparent)', filter: 'blur(50px)' }}
      />
      <div
        className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #2E82B7, transparent)', filter: 'blur(50px)' }}
      />

      <div className="relative z-10 container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
            style={{ background: 'rgba(212,168,63,0.12)', border: '1px solid rgba(212,168,63,0.3)', color: '#F1D27A', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase' }}
          >
            ☪ Notre Spécialité
          </div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
            Votre Oumra, organisée avec{' '}
            <span style={{ background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              soin & dévotion
            </span>
          </h2>
          <div className="divider-gold"></div>
          <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '600px', margin: '1rem auto 0', lineHeight: 1.7 }}>
            El Aukouwa vous accompagne dans ce voyage spirituel unique avec une organisation irréprochable, pour que vous puissiez vous concentrer pleinement sur votre dévotion.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map(({ icon: Icon, label, desc }) => (
            <div
              key={label}
              className="flex items-start gap-4 p-6 rounded-2xl transition-all duration-300"
              style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', backdropFilter: 'blur(10px)' }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(212,168,63,0.1)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,63,0.35)'
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.05)'
                ;(e.currentTarget as HTMLElement).style.borderColor = 'rgba(255,255,255,0.1)'
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'rgba(212,168,63,0.15)', color: '#D4A83F' }}
              >
                <Icon size={20} />
              </div>
              <div>
                <h3 style={{ color: '#fff', fontWeight: 700, fontSize: '0.95rem', marginBottom: '0.3rem' }}>{label}</h3>
                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.5 }}>{desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Sérénité pillars */}
        <div
          className="p-8 rounded-3xl mb-12"
          style={{ background: 'rgba(212,168,63,0.07)', border: '1px solid rgba(212,168,63,0.2)' }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {['Sérénité', 'Confort', 'Accompagnement', 'Confiance'].map(word => (
              <div key={word}>
                <div
                  style={{ fontSize: '1.5rem', fontWeight: 900, background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginBottom: '0.25rem' }}
                >
                  {word}
                </div>
                <div style={{ width: 30, height: 2, background: 'rgba(212,168,63,0.4)', margin: '0 auto', borderRadius: 99 }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* CTAs */}
        <div className="btn-group justify-center">
          <Link href="/oumra" className="btn-primary text-base px-8 py-4">
            Découvrir nos programmes Oumra
          </Link>
          <Link href="/reservation" className="btn-secondary text-base px-8 py-4">
            Demander une réservation
          </Link>
        </div>
      </div>
    </section>
  )
}
