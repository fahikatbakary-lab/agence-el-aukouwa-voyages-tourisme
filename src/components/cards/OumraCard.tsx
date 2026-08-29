import React from 'react';
import { Calendar, MapPin, Check, Plane, Star, ArrowRight } from 'lucide-react';
import { OumraOffer } from '../../types';
import { Button } from '../common/Button';

interface OumraCardProps {
  offer: OumraOffer;
  onSelect: (offer: OumraOffer) => void;
  onBook: (offer: OumraOffer) => void;
}

export const OumraCard: React.FC<OumraCardProps> = ({ offer, onSelect, onBook }) => {
  const getFormulaBadgeColor = (formula: string) => {
    switch (formula) {
      case 'Premium':
        return 'bg-[#C9A227] text-[#0B1F3A] border-[#E5C766]';
      case 'Confort':
        return 'bg-[#123B63] text-white border-[#C9A227]/40';
      case 'Ramadan':
        return 'bg-emerald-800 text-emerald-100 border-emerald-500/40';
      default:
        return 'bg-slate-800 text-slate-100 border-slate-700';
    }
  };

  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#C9A227]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1 relative">
      {offer.isPopular && (
        <div className="absolute top-4 right-4 z-10 bg-[#C9A227] text-[#0B1F3A] text-[10px] font-bold uppercase tracking-[0.2em] py-1 px-3 rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-current" />
          <span>Recommandé</span>
        </div>
      )}

      {/* Image Header */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={offer.imageUrl}
          alt={offer.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-black/20" />
        
        {/* Formula Badge */}
        <div className="absolute bottom-3 left-4 flex items-center gap-2">
          <span className={`px-3 py-1 rounded-sm text-[10px] font-bold border uppercase tracking-[0.15em] ${getFormulaBadgeColor(offer.formula)}`}>
            {offer.formula}
          </span>
          <span className="px-2.5 py-1 rounded-sm text-xs font-medium bg-black/50 text-white backdrop-blur-sm border border-white/20 flex items-center gap-1">
            <Calendar className="w-3 h-3 text-[#E5C766]" />
            {offer.duration}
          </span>
        </div>
      </div>

      {/* Content Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif-title text-xl font-bold text-[#0B1F3A] group-hover:text-[#123B63] transition-colors leading-snug">
            {offer.title}
          </h3>

          <p className="text-xs text-[#667085] mt-2 line-clamp-2 leading-relaxed">
            {offer.description}
          </p>

          {/* Key Hotel & Location Info */}
          <div className="my-4 p-3.5 rounded-lg bg-[#F7F8FA] border border-slate-100 space-y-2 text-xs">
            <div className="flex items-start gap-2 text-[#172033]">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#0B1F3A]">La Mecque : </span>
                <span className="text-[#667085]">{offer.hotelMakkah}</span>
                <div className="text-[11px] text-[#C9A227] font-medium mt-0.5">↳ {offer.hotelMakkahDistance}</div>
              </div>
            </div>
            <div className="flex items-start gap-2 text-[#172033] pt-1 border-t border-slate-200/50">
              <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-[#0B1F3A]">Médine : </span>
                <span className="text-[#667085]">{offer.hotelMadinah}</span>
                <div className="text-[11px] text-[#C9A227] font-medium mt-0.5">↳ {offer.hotelMadinahDistance}</div>
              </div>
            </div>
          </div>

          {/* Key Features List */}
          <ul className="space-y-2 mb-5">
            {offer.features.slice(0, 3).map((feat, idx) => (
              <li key={idx} className="flex items-center gap-2 text-xs text-[#172033]">
                <div className="w-4 h-4 rounded-full bg-[#C9A227]/15 flex items-center justify-center shrink-0">
                  <Check className="w-2.5 h-2.5 text-[#C9A227]" />
                </div>
                <span className="line-clamp-1">{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Pricing & CTA */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-3">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#667085] block font-bold">Tarif</span>
            <span className="text-base sm:text-lg font-bold text-[#0B1F3A] font-serif-title">
              {offer.price ? `${offer.price.toLocaleString()} ${offer.currency}` : 'Sur devis'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onSelect(offer)}
              className="px-3 py-2 text-xs uppercase font-bold tracking-wider text-[#0B1F3A] hover:text-[#C9A227] transition-colors"
            >
              Détails
            </button>
            <Button
              variant="gold"
              size="sm"
              onClick={() => onBook(offer)}
              icon={<ArrowRight className="w-3.5 h-3.5" />}
            >
              Réserver
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
