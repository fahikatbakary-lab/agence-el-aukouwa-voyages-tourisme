import type { Metadata } from 'next'
import OffresSection from '@/components/sections/OffresSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Offres & Programmes',
  description: "Découvrez nos offres Oumra, séjours et circuits disponibles depuis Abidjan.",
}

export default function OffresPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <OffresSection />
      <CTASection />
    </div>
  )
}
