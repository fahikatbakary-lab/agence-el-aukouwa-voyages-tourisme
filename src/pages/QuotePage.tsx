import React from 'react';
import { QuoteForm } from '../components/forms/QuoteForm';
import { PageId } from '../types';
import { Sparkles, ShieldCheck, Clock, Award } from 'lucide-react';
import { IslamicDivider } from '../components/common/IslamicPattern';

export const QuotePage: React.FC<{ onNavigate: (page: PageId) => void }> = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Simulation & Chiffrage Gratuit</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Demandez votre devis de voyage personnalisé
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Renseignez vos critères (dates, nombre de personnes, formule hôtelière) pour recevoir une offre transparente et sans aucun engagement.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <QuoteForm />
      </div>

      {/* Guarantees */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <Clock className="w-6 h-6 text-[#C9A227] mx-auto mb-2" />
            <h4 className="text-xs font-bold text-[#0B1F3A] uppercase">Réponse rapide</h4>
            <p className="text-[11px] text-[#667085] mt-1">Devis sous 24h ouvrées par e-mail et WhatsApp</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <ShieldCheck className="w-6 h-6 text-[#C9A227] mx-auto mb-2" />
            <h4 className="text-xs font-bold text-[#0B1F3A] uppercase">Sans engagement</h4>
            <p className="text-[11px] text-[#667085] mt-1">Gratuit et modifiable selon vos souhaits</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-slate-200">
            <Award className="w-6 h-6 text-[#C9A227] mx-auto mb-2" />
            <h4 className="text-xs font-bold text-[#0B1F3A] uppercase">Prix direct agence</h4>
            <p className="text-[11px] text-[#667085] mt-1">Aucun frais d'intermédiaire dissimulé</p>
          </div>
        </div>
      </div>
    </div>
  );
};
