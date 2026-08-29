import React, { useState } from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { FAQItem, PageId } from '../../types';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { Button } from '../common/Button';

interface FaqSectionProps {
  faqs: FAQItem[];
  onNavigate: (page: PageId) => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ faqs, onNavigate }) => {
  const [openId, setOpenId] = useState<string | null>(faqs[0]?.id || null);

  const displayFaqs = faqs.filter((f) => f.status === 'published').slice(0, 5);

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="py-20 bg-[#F7F8FA] border-t border-slate-200/80">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Foire Aux Questions"
          title="Questions fréquentes sur la Oumra"
          subtitle="Toutes les réponses à vos interrogations pour préparer sereinement votre départ vers les Lieux Saints."
        />

        <div className="space-y-3">
          {displayFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden transition-all duration-200 shadow-2xs"
              >
                <button
                  onClick={() => toggle(faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 focus:outline-none hover:bg-slate-50 transition-colors"
                >
                  <span className="font-serif-title text-sm sm:text-base font-bold text-[#0B1F3A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center text-[#0B1F3A] shrink-0 transition-transform duration-300 ${
                      isOpen ? 'rotate-180 bg-[#C9A227] text-[#0B1F3A]' : ''
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-[#667085] leading-relaxed border-t border-slate-100 bg-[#F7F8FA]/50 animate-fadeIn">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('faq')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Consulter toute notre FAQ & Guides
          </Button>
        </div>
      </div>
    </section>
  );
};
