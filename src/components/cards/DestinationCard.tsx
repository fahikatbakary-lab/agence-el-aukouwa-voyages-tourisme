import React from 'react';
import { MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
import { Destination } from '../../types';
import { Button } from '../common/Button';

interface DestinationCardProps {
  destination: Destination;
  onExplore: (destination: Destination) => void;
  onRequestQuote: (destination: Destination) => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  destination,
  onExplore,
  onRequestQuote,
}) => {
  return (
    <div className="group bg-white rounded-xl overflow-hidden border border-slate-200 hover:border-[#C9A227]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-56 w-full overflow-hidden bg-slate-900">
        <img
          src={destination.imageUrl}
          alt={destination.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-black/20 to-transparent" />
        
        {/* Country & Category */}
        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="px-3 py-1 rounded-sm text-[10px] font-bold uppercase tracking-[0.15em] bg-[#0B1F3A]/85 text-white backdrop-blur-sm border border-[#C9A227]/30">
            {destination.country}
          </span>
        </div>

        <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
          <span className="flex items-center gap-1.5 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-[#E5C766]" />
            {destination.city}
          </span>
          <span className="flex items-center gap-1 text-xs font-medium text-slate-200">
            <Calendar className="w-3.5 h-3.5 text-[#E5C766]" />
            {destination.duration}
          </span>
        </div>
      </div>

      {/* Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-serif-title text-lg font-bold text-[#0B1F3A] group-hover:text-[#123B63] transition-colors leading-snug">
            {destination.title}
          </h3>

          <p className="text-xs text-[#667085] mt-2 line-clamp-2 leading-relaxed">
            {destination.description}
          </p>

          {/* Highlights */}
          <div className="mt-4 space-y-1.5 mb-5">
            <p className="text-[10px] font-bold text-[#0B1F3A] uppercase tracking-[0.15em]">Points forts :</p>
            {destination.highlights.slice(0, 3).map((hl, idx) => (
              <div key={idx} className="flex items-center gap-2 text-xs text-[#172033]">
                <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227] shrink-0" />
                <span className="line-clamp-1">{hl}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
          <div>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#667085] block font-bold">Prix</span>
            <span className="text-sm sm:text-base font-bold text-[#0B1F3A] font-serif-title">
              {destination.startingPrice ? `${destination.startingPrice.toLocaleString()} ${destination.currency}` : 'Sur devis'}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onExplore(destination)}
              className="px-3 py-2 text-xs uppercase font-bold tracking-wider text-[#0B1F3A] hover:text-[#C9A227] transition-colors"
            >
              Découvrir
            </button>
            <Button
              variant="primary"
              size="sm"
              onClick={() => onRequestQuote(destination)}
              icon={<ArrowRight className="w-3 h-3 text-[#E5C766]" />}
            >
              Devis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
