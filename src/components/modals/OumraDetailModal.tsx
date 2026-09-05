import React from 'react';
import { X, Calendar, MapPin, Check, XCircle, Plane, Shield, Clock, ArrowRight } from 'lucide-react';
import { OumraOffer } from '../../types';
import { Button } from '../common/Button';
import { IslamicDivider } from '../common/IslamicPattern';

interface OumraDetailModalProps {
  offer: OumraOffer | null;
  isOpen: boolean;
  onClose: () => void;
  onBook: (offer: OumraOffer) => void;
  onQuote: (offer: OumraOffer) => void;
}

export const OumraDetailModal: React.FC<OumraDetailModalProps> = ({
  offer,
  isOpen,
  onClose,
  onBook,
  onQuote,
}) => {
  if (!isOpen || !offer) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-3 sm:p-6 overflow-y-auto">
      <div className="bg-white w-full max-w-4xl rounded-2xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[90vh] flex flex-col animate-fadeIn">
        {/* Header with image */}
        <div className="relative h-64 sm:h-72 w-full shrink-0 bg-slate-900">
          <img
            src={offer.imageUrl}
            alt={offer.title}
            className="w-full h-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-[#0B1F3A]/40 to-black/20" />
          
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white hover:bg-white/20 transition-colors z-20"
            aria-label="Fermer la modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="absolute bottom-6 left-6 right-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-3 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-bold uppercase rounded-md">
                Formule {offer.formula}
              </span>
              <span className="px-2.5 py-1 bg-black/40 backdrop-blur-sm text-xs font-medium text-white border border-white/20 rounded-md">
                {offer.duration}
              </span>
            </div>
            <h2 className="font-serif-title text-xl sm:text-3xl font-bold text-white">
              {offer.title}
            </h2>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 flex-1">
          {/* Overview */}
          <div>
            <h3 className="text-xs font-bold text-[#667085] uppercase tracking-wider mb-2">
              Présentation de l'offre
            </h3>
            <p className="text-sm sm:text-base text-[#172033] leading-relaxed">
              {offer.description}
            </p>
          </div>

          {/* Hotels & Accommodations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-slate-200">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A] mb-1">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>Hôtel La Mecque (Al-Haram)</span>
              </div>
              <p className="text-xs font-semibold text-[#172033]">{offer.hotelMakkah}</p>
              <p className="text-xs text-[#667085] mt-1">📍 {offer.hotelMakkahDistance}</p>
            </div>

            <div className="p-4 rounded-xl bg-[#F7F8FA] border border-slate-200">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0B1F3A] mb-1">
                <MapPin className="w-4 h-4 text-[#C9A227]" />
                <span>Hôtel Médine (An-Nabawi)</span>
              </div>
              <p className="text-xs font-semibold text-[#172033]">{offer.hotelMadinah}</p>
              <p className="text-xs text-[#667085] mt-1">📍 {offer.hotelMadinahDistance}</p>
            </div>
          </div>

          {/* Departures */}
          <div>
            <h4 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-wider mb-2 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-[#C9A227]" />
              <span>Dates de départs programmées</span>
            </h4>
            <div className="flex flex-wrap gap-2">
              {offer.departureDates.map((date, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1.5 rounded-lg bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-xs font-medium text-[#0B1F3A]"
                >
                  {date}
                </span>
              ))}
            </div>
          </div>

          <IslamicDivider />

          {/* Included / Not Included */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-bold text-emerald-800 mb-3 flex items-center gap-1.5">
                <Check className="w-4 h-4 text-emerald-600" />
                <span>Ce qui est inclus dans le forfait</span>
              </h4>
              <ul className="space-y-2">
                {offer.included.map((inc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#172033]">
                    <div className="w-4 h-4 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-2.5 h-2.5 text-emerald-700" />
                    </div>
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-sm font-bold text-rose-800 mb-3 flex items-center gap-1.5">
                <XCircle className="w-4 h-4 text-rose-600" />
                <span>Ce qui n'est pas inclus</span>
              </h4>
              <ul className="space-y-2">
                {offer.notIncluded.map((ninc, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#667085]">
                    <div className="w-4 h-4 rounded-full bg-rose-100 flex items-center justify-center shrink-0 mt-0.5">
                      <XCircle className="w-2.5 h-2.5 text-rose-700" />
                    </div>
                    <span>{ninc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-6 bg-[#F7F8FA] border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <span className="text-xs uppercase tracking-wider text-[#667085] block">Tarif estimé</span>
            <span className="text-lg sm:text-xl font-bold text-[#0B1F3A] font-serif-title">
              {offer.price ? `${offer.price.toLocaleString()} ${offer.currency}` : 'Tarif sur devis gratuit'}
            </span>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <Button
              variant="outline"
              size="md"
              className="flex-1 sm:flex-initial"
              onClick={() => {
                onClose();
                onQuote(offer);
              }}
            >
              Demander un devis
            </Button>
            <Button
              variant="gold"
              size="md"
              className="flex-1 sm:flex-initial"
              onClick={() => {
                onClose();
                onBook(offer);
              }}
              icon={<ArrowRight className="w-4 h-4" />}
            >
              Réserver cette offre
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
