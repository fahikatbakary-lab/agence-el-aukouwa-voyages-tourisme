'use client'
// src/components/layout/WhatsAppButton.tsx
import { MessageCircle } from 'lucide-react'
import { useState } from 'react'

interface WhatsAppButtonProps {
  phone?: string
  message?: string
}

export default function WhatsAppButton({
  phone = '00000000000',
  message = 'Bonjour, je souhaite avoir des informations sur vos offres.',
}: WhatsAppButtonProps) {
  const [hovered, setHovered] = useState(false)

  const url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      id="whatsapp-floating-btn"
      aria-label="Contactez-nous sur WhatsApp"
      className="whatsapp-btn"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <MessageCircle size={28} color="#fff" fill="#fff" />
      {hovered && (
        <div
          className="absolute right-full mr-3 whitespace-nowrap rounded-xl px-4 py-2 text-sm font-semibold pointer-events-none"
          style={{ background: '#25D366', color: '#fff', boxShadow: '0 4px 15px rgba(37,211,102,0.35)' }}
        >
          Écrivez-nous sur WhatsApp
        </div>
      )}
    </a>
  )
}
