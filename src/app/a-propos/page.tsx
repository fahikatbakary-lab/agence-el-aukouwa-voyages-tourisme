import type { Metadata } from 'next'
import AboutSection from '@/components/sections/AboutSection'
import WhyUsSection from '@/components/sections/WhyUsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'À propos',
  description: "Découvrez El Aukouwa Voyages & Tourisme, agence spécialisée Oumra et pèlerinage depuis Abidjan.",
}

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <AboutSection />
      <WhyUsSection />
      <CTASection />
    </div>
  )
}
