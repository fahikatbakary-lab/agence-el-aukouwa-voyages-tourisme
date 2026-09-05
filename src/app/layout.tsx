// src/app/layout.tsx
import type { Metadata } from 'next'
import { Inter, Playfair_Display } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import WhatsAppButton from '@/components/layout/WhatsAppButton'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://elaukouwa.com'),
  title: {
    default: 'El Aukouwa Voyages & Tourisme — Agence Oumra & Voyages Abidjan',
    template: '%s | El Aukouwa Voyages & Tourisme',
  },
  description:
    "Agence de voyage spécialisée Oumra et pèlerinage en Arabie Saoudite depuis Abidjan, Côte d'Ivoire. Organisation complète : La Mecque, Médine, hébergement, transport, accompagnement. Votre confort, notre bonheur.",
  keywords: [
    'agence voyage Côte d\'Ivoire',
    'agence voyage Abidjan',
    'agence Oumra Côte d\'Ivoire',
    'Oumra Abidjan',
    'Oumra Arabie saoudite',
    'pèlerinage La Mecque',
    'voyage La Mecque',
    'voyage Arabie saoudite',
    'agence tourisme Abidjan',
    'réservation billet avion Abidjan',
    'séjour Arabie saoudite',
    'voyage international',
    'El Aukouwa Voyages',
  ],
  authors: [{ name: 'El Aukouwa Voyages & Tourisme' }],
  creator: 'El Aukouwa Voyages & Tourisme',
  publisher: 'El Aukouwa Voyages & Tourisme',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'El Aukouwa Voyages & Tourisme',
    title: 'El Aukouwa Voyages & Tourisme — Votre confort, notre bonheur',
    description:
      "Agence de voyage et Oumra depuis Abidjan. Spécialisée dans l'organisation de pèlerinages et voyages en Arabie Saoudite pour les clients africains.",
  },
  twitter: {
    card: 'summary_large_image',
    title: 'El Aukouwa Voyages & Tourisme',
    description: "Agence Oumra et voyages depuis Abidjan, Côte d'Ivoire",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  )
}
