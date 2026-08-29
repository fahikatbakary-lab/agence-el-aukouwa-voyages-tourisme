import React, { useState } from 'react';
import { FAQItem, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { Button } from '../components/common/Button';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { HelpCircle, ChevronDown, MessageCircle, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface FaqPageProps {
  faqs: FAQItem[];
  onNavigate: (page: PageId) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ faqs, onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqs[0]?.id || null);

  const categories = [
    { id: 'all', label: 'Toutes les questions' },
    { id: 'Oumra', label: 'Oumra & Rituels' },
    { id: 'Documents & Visas', label: 'Documents & Visas' },
    { id: 'Vols & Hôtels', label: 'Vols & Hébergements' },
    { id: 'Tarifs & Paiement', label: 'Tarifs & Modalités' },
  ];

  const published = faqs.filter(f => f.status === 'published');
  const filtered = selectedCategory === 'all'
    ? published
    : published.filter(f => f.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <HelpCircle className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Centre d'Aide & Questions Fréquentes</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Tout savoir pour bien préparer votre séjour
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Retrouvez les réponses précises à vos questions sur les démarches de visa, les compagnies aériennes, la proximité des hôtels et le déroulement du séjour.
        </p>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F3A] text-[#E5C766] shadow-xs'
                  : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Accordions */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3">
        {filtered.map((faq) => {
          const isOpen = openFaqId === faq.id;
          return (
            <div
              key={faq.id}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
            >
              <button
                onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors focus:outline-none"
              >
                <div className="flex items-center gap-3">
                  <span className="w-2 h-2 rounded-full bg-[#C9A227] shrink-0" />
                  <span className="font-serif-title text-sm sm:text-base font-bold text-[#0B1F3A]">
                    {faq.question}
                  </span>
                </div>
                <div
                  className={`w-7 h-7 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center text-[#0B1F3A] shrink-0 transition-transform ${
                    isOpen ? 'rotate-180 bg-[#C9A227]' : ''
                  }`}
                >
                  <ChevronDown className="w-4 h-4" />
                </div>
              </button>
              {isOpen && (
                <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-slate-100 bg-[#F7F8FA]/50 animate-fadeIn">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Contact banner if question not answered */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#F7F8FA] p-8 rounded-2xl border border-slate-200 text-center space-y-3">
          <h3 className="font-serif-title text-lg font-bold text-[#0B1F3A]">
            Vous avez une question spécifique qui ne figure pas ici ?
          </h3>
          <p className="text-xs text-[#667085]">
            Nos conseillers sont disponibles à tout moment par téléphone ou sur WhatsApp.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <a
              href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] text-white px-4 py-2.5 rounded-lg text-xs font-bold hover:opacity-90 transition-opacity"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Poser ma question sur WhatsApp</span>
            </a>
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('contact')}
            >
              Formulaire de contact
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
