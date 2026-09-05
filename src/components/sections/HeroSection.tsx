'use client'
// src/components/sections/HeroSection.tsx
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { ChevronDown, Star, Users, Award, Globe } from 'lucide-react'

const stats = [
  { icon: Users, value: '500+', label: 'Pèlerins accompagnés' },
  { icon: Star, value: '98%', label: 'Clients satisfaits' },
  { icon: Globe, value: '10+', label: 'Destinations' },
  { icon: Award, value: '5+', label: 'Ans d\'expérience' },
]

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ background: 'linear-gradient(135deg, #0B2A4A 0%, #0f3660 50%, #0B2A4A 100%)' }}
    >
      {/* Background image overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/images/hero-mecca.jpg')`,
          opacity: 0.35,
        }}
      />

      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to right, rgba(11,42,74,0.95) 0%, rgba(11,42,74,0.75) 55%, rgba(11,42,74,0.55) 100%)',
        }}
      />

      {/* Decorative elements */}
      <div
        className="absolute top-1/4 right-10 w-96 h-96 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #D4A83F, transparent)', filter: 'blur(60px)' }}
      />
      <div
        className="absolute bottom-1/4 left-20 w-64 h-64 rounded-full opacity-10"
        style={{ background: 'radial-gradient(circle, #2E82B7, transparent)', filter: 'blur(50px)' }}
      />

      {/* Content */}
      <div className="relative z-10 container-custom pt-24 pb-16">
        <div className="max-w-3xl">
          {/* Badge */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 transition-all duration-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ background: 'rgba(212,168,63,0.12)', border: '1px solid rgba(212,168,63,0.3)', color: '#F1D27A', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase' }}
          >
            <span style={{ width: 6, height: 6, background: '#D4A83F', borderRadius: '50%', display: 'inline-block' }}></span>
            Agence de Voyage & Oumra — Abidjan, Côte d'Ivoire
          </div>

          {/* Main Title */}
          <h1
            className={`mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(1.75rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', lineHeight: 1.15 }}
          >
            Vivez votre{' '}
            <span style={{ background: 'linear-gradient(135deg, #D4A83F, #F1D27A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              Oumra
            </span>{' '}
            dans la sérénité et le confort
          </h1>

          {/* Subtitle */}
          <p
            className={`mb-4 transition-all duration-700 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, maxWidth: '560px' }}
          >
            Un accompagnement professionnel pour votre voyage, votre séjour et votre pèlerinage en Arabie Saoudite.
          </p>

          {/* Slogan */}
          <p
            className={`italic mb-10 transition-all duration-700 delay-300 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ fontSize: '1rem', color: '#D4A83F', fontStyle: 'italic' }}
          >
            « Votre confort, notre bonheur »
          </p>

          {/* CTAs */}
          <div
            className={`btn-group mb-12 sm:mb-16 transition-all duration-700 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            <Link href="/offres" className="btn-primary text-base sm:px-8 py-4">
              Découvrir nos offres
            </Link>
            <Link href="/reservation" className="btn-secondary text-base sm:px-8 py-4">
              Demander une réservation
            </Link>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 transition-all duration-700 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          >
            {stats.map(({ icon: Icon, value, label }) => (
              <div
                key={label}
                className="text-center p-4 rounded-2xl"
                style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(10px)', border: '1px solid rgba(255,255,255,0.1)' }}
              >
                <Icon size={22} style={{ color: '#D4A83F', margin: '0 auto 0.5rem' }} />
                <div style={{ fontSize: '1.75rem', fontWeight: 900, color: '#F1D27A', lineHeight: 1 }}>{value}</div>
                <div style={{ fontSize: '0.75rem', color: 'rgba(255,255,255,0.6)', marginTop: '0.35rem' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
          Découvrir
        </span>
        <div className="animate-bounce">
          <ChevronDown size={22} style={{ color: '#D4A83F' }} />
        </div>
      </div>
    </section>
  )
}
