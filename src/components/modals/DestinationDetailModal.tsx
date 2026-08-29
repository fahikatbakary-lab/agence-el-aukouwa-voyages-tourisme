import React from 'react';
import { X, MapPin, Calendar, Check, ArrowRight } from 'lucide-react';
import { Destination } from '../../types';
import { Button } from '../common/Button';
import { IslamicDivider } from '../common/IslamicPattern';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isOpen: boolean;
  onClose: () => void;
  onQuote: (destination: Destination) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  isOpen,
  onClose,
  onQuote,
}) => {
  if (!isOpen || !destination) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-fadeIn">
        {/* Header */}
        <div className="relative h-60 sm:h-72 w-full shrink-0 bg-slate-900">
          <img
            src={destination.imageUrl}
            alt={destination.title}
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-black/20" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-20"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-bold uppercase rounded-md">
                {destination.country}
              </span>
              <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-xs font-medium text-white border border-white/20 rounded-md flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#E5C766]" />
                {destination.duration}
              </span>
            </div>
            <h2 className="font-serif-title text-xl sm:text-3xl font-bold text-white">
              {destination.title}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-5 flex-1">
          <div>
            <div className="flex items-center gap-2 text-sm text-[#0B1F3A] font-semibold mb-2">
              <MapPin className="w-4 h-4 text-[#C9A227]" />
              <span>{destination.city}, {destination.country}</span>
            </div>
            <p className="text-sm sm:text-base text-[#172033] leading-relaxed">
              {destination.description}
            </p>
          </div>

          <IslamicDivider />

          <div>
            <h4 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider mb-3">
              Points forts & Inclusions du séjour
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {destination.highlights.map((hl, idx) => (
                <div key={idx} className="flex items-start gap-2 text-xs sm:text-sm text-[#172033] bg-[#F7F8FA] p-3 rounded-lg border border-slate-100">
                  <Check className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                  <span>{hl}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-6 bg-[#F7F8FA] border-t border-slate-200 flex items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#667085] block">Tarif estimé</span>
            <span className="text-lg font-bold text-[#0B1F3A] font-serif-title">
              {destination.startingPrice ? `${destination.startingPrice.toLocaleString()} ${destination.currency}` : 'Sur devis personnalisé'}
            </span>
          </div>

          <Button
            variant="gold"
            size="md"
            onClick={() => {
              onClose();
              onQuote(destination);
            }}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Demander un devis pour ce voyage
          </Button>
        </div>
      </div>
    </div>
  );
};
