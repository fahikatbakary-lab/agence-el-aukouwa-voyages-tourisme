import type { Metadata } from 'next'
import DestinationsSection from '@/components/sections/DestinationsSection'
import CTASection from '@/components/sections/CTASection'

export const metadata: Metadata = {
  title: 'Destinations',
  description: "Explorez nos destinations : La Mecque, Médine, Dubaï, Istanbul et bien plus.",
}

export default function DestinationsPage() {
  return (
    <div style={{ paddingTop: '80px' }}>
      <DestinationsSection />
      <CTASection />
    </div>
  )
}
