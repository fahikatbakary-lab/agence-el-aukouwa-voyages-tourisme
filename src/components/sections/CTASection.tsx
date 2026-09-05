'use client'
// src/components/sections/CTASection.tsx
import Link from 'next/link'
import { Phone, MessageCircle, ArrowRight } from 'lucide-react'

export default function CTASection() {
  return (
    <section
      id="cta"
      className="section-padding relative overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B2A4A 0%, #0f3660 50%, #0B2A4A 100%)' }}
    >
      {/* Decorative */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4A83F, transparent)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute -bottom-20 -right-20 w-72 h-72 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #2E82B7, transparent)', filter: 'blur(50px)' }}
      />

      <div className="relative z-10 container-custom text-center">
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6"
          style={{ background: 'rgba(212,168,63,0.12)', border: '1px solid rgba(212,168,63,0.3)', color: '#F1D27A', fontSize: '0.8rem', fontWeight: 600 }}
        >
          ✦ Prêt pour l'aventure ?
        </div>

        <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)', fontWeight: 900, color: '#fff', marginBottom: '1rem', lineHeight: 1.2 }}>
          Planifiez votre voyage dès <br />
          <span style={{ background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            aujourd'hui
          </span>
        </h2>

        <p style={{ color: 'rgba(255,255,255,0.72)', fontSize: '1.05rem', maxWidth: '540px', margin: '0 auto 2.5rem', lineHeight: 1.7 }}>
          Contactez-nous pour un devis personnalisé ou consultez directement nos offres disponibles. Notre équipe vous répond rapidement.
        </p>

        <div className="btn-group justify-center mb-8">
          <Link href="/reservation" className="btn-primary text-base px-8 py-4">
            Demander une réservation
          </Link>
          <Link href="/offres" className="btn-secondary text-base px-8 py-4">
            Voir nos offres <ArrowRight size={18} />
          </Link>
        </div>

        {/* Contact rapide */}
        <div className="flex flex-wrap justify-center gap-6">
          <a
            href="tel:+2250000000000"
            className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-200"
            style={{ background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.15)', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}
          >
            <Phone size={16} style={{ color: '#D4A83F' }} />
            Appelez-nous
          </a>
          <a
            href="https://wa.me/00000000000"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-5 py-3 rounded-full transition-all duration-200"
            style={{ background: 'rgba(37,211,102,0.12)', border: '1px solid rgba(37,211,102,0.3)', color: 'rgba(255,255,255,0.85)', fontSize: '0.9rem' }}
          >
            <MessageCircle size={16} style={{ color: '#25D366' }} />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
