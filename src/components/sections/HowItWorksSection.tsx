'use client'
// src/components/sections/HowItWorksSection.tsx
import Link from 'next/link'
import { MessageSquare, Search, FileCheck, Plane } from 'lucide-react'

const steps = [
  {
    icon: MessageSquare,
    step: '01',
    title: 'Contactez-nous',
    desc: 'Envoyez-nous votre demande par formulaire, téléphone ou WhatsApp. Exprimez votre besoin et vos préférences.',
  },
  {
    icon: Search,
    step: '02',
    title: 'Étude de votre projet',
    desc: 'Notre équipe analyse votre demande et vous propose les meilleures offres adaptées à votre budget et vos souhaits.',
  },
  {
    icon: FileCheck,
    step: '03',
    title: 'Confirmation & documents',
    desc: 'Après validation, nous gérons tous les documents (visa, billets, hébergement) et vous confirmons le programme.',
  },
  {
    icon: Plane,
    step: '04',
    title: 'Bon voyage !',
    desc: 'Partez sereinement. Notre équipe vous accompagne avant, pendant et après votre voyage.',
  },
]

export default function HowItWorksSection() {
  return (
    <section id="comment-ca-marche" className="section-padding" style={{ background: '#fff' }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="badge-gold mx-auto mb-4">Processus</div>
          <h2 className="section-title mb-4">
            Comment ça <span className="gradient-gold-text">fonctionne ?</span>
          </h2>
          <div className="divider-gold"></div>
          <p className="section-subtitle mt-4 max-w-xl mx-auto">
            Réserver avec El Aukouwa, c'est simple, rapide et serein. Voici les 4 étapes.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connection line (desktop) */}
          <div
            className="hidden lg:block absolute top-14 left-0 right-0 h-0.5 mx-32"
            style={{ background: 'linear-gradient(90deg, transparent, #D4A83F 20%, #D4A83F 80%, transparent)', opacity: 0.25 }}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {steps.map(({ icon: Icon, step, title, desc }) => (
              <div key={step} className="relative text-center group">
                {/* Step circle */}
                <div className="relative inline-block mb-6">
                  <div
                    className="w-24 h-24 rounded-full flex items-center justify-center mx-auto transition-all duration-300"
                    style={{ background: 'linear-gradient(135deg, #0B2A4A, #0f3660)', border: '3px solid rgba(212,168,63,0.3)' }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = '#D4A83F'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = '0 8px 25px rgba(212,168,63,0.3)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.borderColor = 'rgba(212,168,63,0.3)'
                      ;(e.currentTarget as HTMLElement).style.boxShadow = 'none'
                    }}
                  >
                    <Icon size={30} style={{ color: '#D4A83F' }} />
                  </div>
                  {/* Step number */}
                  <div
                    className="absolute -top-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center text-xs font-black"
                    style={{ background: '#D4A83F', color: '#0B2A4A' }}
                  >
                    {step.replace('0', '')}
                  </div>
                </div>

                <h3 style={{ color: '#0B2A4A', fontWeight: 700, fontSize: '1rem', marginBottom: '0.6rem' }}>
                  {title}
                </h3>
                <p style={{ color: '#64748b', fontSize: '0.875rem', lineHeight: 1.7 }}>{desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Link href="/reservation" className="btn-primary px-10">
            Commencer ma réservation
          </Link>
        </div>
      </div>
    </section>
  )
}
