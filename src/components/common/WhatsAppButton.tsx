import React, { useState } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';

export const WhatsAppButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('Salam aleykoum, je souhaite avoir des informations sur vos formules Oumra.');

  const handleSend = () => {
    const encoded = encodeURIComponent(customMsg);
    const url = `https://wa.me/${SITE_CONFIG.contact.whatsapp}?text=${encoded}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  const quickMessages = [
    'Salam aleykoum, je souhaite recevoir les tarifs de la Oumra.',
    'Bonjour, je souhaite réserver une Oumra pour ma famille.',
    'Pouvez-vous me renseigner sur les voyages et séjours internationaux ?',
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Floating Chat Modal */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn mb-2 z-50">
          {/* Header */}
          <div className="bg-[#0B1F3A] p-4 text-white flex items-center justify-between border-b border-[#C9A227]/30">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#C9A227] flex items-center justify-center text-[#0B1F3A] font-bold">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-serif-title font-semibold text-sm text-white">Agence El Aukouwa</h4>
                <p className="text-xs text-[#E5C766]">Conseillers pèlerins disponibles</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F7F8FA] space-y-3 max-h-80 overflow-y-auto">
            <div className="bg-white p-3 rounded-xl rounded-tl-none shadow-sm border border-slate-100 text-xs text-[#172033] leading-relaxed">
              <p className="font-semibold text-[#0B1F3A] mb-1">Salam aleykoum ! 👋</p>
              <p>Bienvenue chez <strong>El Aukouwa Voyages</strong>. Comment pouvons-nous vous assister pour votre Oumra ou vos voyages ?</p>
            </div>

            {/* Quick choices */}
            <div className="space-y-1.5 pt-1">
              <p className="text-[11px] font-semibold text-[#667085] uppercase tracking-wider">Suggestions rapides :</p>
              {quickMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => setCustomMsg(msg)}
                  className="w-full text-left text-xs bg-white hover:bg-[#0B1F3A]/5 border border-slate-200 p-2 rounded-lg text-[#172033] transition-colors"
                >
                  {msg}
                </button>
              ))}
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <textarea
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                rows={2}
                placeholder="Écrivez votre message WhatsApp..."
                className="w-full p-2.5 text-xs bg-white rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-[#C9A227] text-[#172033]"
              />
            </div>
          </div>

          {/* Footer Action */}
          <div className="p-3 bg-white border-t border-slate-100">
            <button
              onClick={handleSend}
              className="w-full flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-4 rounded-xl font-semibold text-xs transition-colors shadow-sm"
            >
              <Send className="w-4 h-4" />
              <span>Démarrer la discussion WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 group border-2 border-white/80"
        aria-label="Contacter l'agence par WhatsApp"
      >
        <MessageCircle className="w-6 h-6 text-white" />
        <span className="hidden sm:inline font-semibold text-xs tracking-wide">
          {isOpen ? 'Fermer' : 'WhatsApp direct'}
        </span>
        <span className="relative flex h-2.5 w-2.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-white"></span>
        </span>
      </button>
    </div>
  );
};
