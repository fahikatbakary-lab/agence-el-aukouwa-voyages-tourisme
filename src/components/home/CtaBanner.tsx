import React from 'react';
import { PageId } from '../../types';
import { Button } from '../common/Button';
import { MessageCircle, ArrowRight, Sparkles } from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { IslamicDivider } from '../common/IslamicPattern';

export const CtaBanner: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  return (
    <section className="bg-[#0B1F3A] text-white py-16 sm:py-20 pattern-islamic-subtle relative overflow-hidden border-t-2 border-[#C9A227]/40">
      {/* Radial overlay */}
      <div 
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 31, 58, 0.3) 0%, rgba(11, 31, 58, 0.95) 100%)',
        }}
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C9A227]/15 border border-[#C9A227]/40 text-[#E5C766] text-[10px] sm:text-xs font-bold uppercase tracking-[0.25em] mb-5">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Votre voyage spirituel d'une vie</span>
        </div>

        <h2 className="font-serif-title text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
          Prêt à accomplir votre Oumra <br className="hidden sm:inline" />
          <span className="italic text-[#C9A227]">dans les meilleures conditions ?</span>
        </h2>

        <IslamicDivider light className="my-5" />

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          Nos conseillers et érudits religieux se tiennent à votre disposition pour concevoir avec vous le séjour qui comblera votre cœur et rassurera vos proches.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="gold"
            size="lg"
            onClick={() => onNavigate('reservation')}
            icon={<ArrowRight className="w-4 h-4" />}
            className="w-full sm:w-auto"
          >
            Faire une demande de réservation
          </Button>

          <a
            href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white px-8 py-3.5 sm:py-4 rounded-sm text-xs sm:text-sm font-bold uppercase tracking-widest shadow-md transition-all hover:-translate-y-0.5"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Discuter sur WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
