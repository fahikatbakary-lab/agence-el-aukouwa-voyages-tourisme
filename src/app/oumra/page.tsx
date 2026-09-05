import type { Metadata } from 'next'
import OumraSection from '@/components/sections/OumraSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Oumra & Pèlerinage',
  description: "Organisation complète de votre Oumra et pèlerinage à La Mecque et Médine. Accompagnement professionnel depuis Abidjan.",
}

export default function OumraPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <OumraSection />
      <CTASection />
    </div>
  )
}
