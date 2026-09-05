// src/app/page.tsx
import type { Metadata } from 'next'
import HeroSection from '@/components/sections/HeroSection'
import AboutSection from '@/components/sections/AboutSection'
import ServicesSection from '@/components/sections/ServicesSection'
import OumraSection from '@/components/sections/OumraSection'
import DestinationsSection from '@/components/sections/DestinationsSection'
import OffresSection from '@/components/sections/OffresSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import HowItWorksSection from '@/components/sections/HowItWorksSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'El Aukouwa Voyages & Tourisme — Agence Oumra Abidjan',
  description: "Agence de voyage spécialisée Oumra, pèlerinage La Mecque et voyages internationaux depuis Abidjan. Votre confort, notre bonheur.",
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <OumraSection />
      <DestinationsSection />
      <OffresSection />
      <WhyUsSection />
      <HowItWorksSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
