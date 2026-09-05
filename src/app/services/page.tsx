import type { Metadata } from 'next'
import ServicesSection from '@/components/sections/ServicesSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Services',
  description: "Découvrez nos services : Oumra, billetterie aérienne, réservation hôtels, circuits touristiques et plus.",
}

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <ServicesSection />
      <CTASection />
    </div>
  )
}
