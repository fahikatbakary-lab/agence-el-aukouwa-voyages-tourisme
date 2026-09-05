import React from 'react';
import { ReservationForm } from '../components/forms/ReservationForm';
import { PageId, OumraOffer } from '../types';
import { UserCheck, ShieldCheck, Phone } from 'lucide-react';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { SITE_CONFIG } from '../config/site';

interface ReservationPageProps {
  selectedOffer?: OumraOffer | null;
  onNavigate: (page: PageId) => void;
}

export const ReservationPage: React.FC<ReservationPageProps> = ({ selectedOffer }) => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <UserCheck className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Espace Réservations Pèlerins</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Réservation de votre voyage spirituel
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Initiez votre dossier de voyage dès maintenant. Notre cellule administrative vous contactera pour collecter vos documents et confirmer votre inscription.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ReservationForm selectedOffer={selectedOffer} />
      </div>

      {/* Need Help Box */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs text-[#667085]">
          Besoin d’aide immédiate pour remplir ce formulaire ? Appelez notre assistance au{' '}
          <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="font-bold text-[#0B1F3A] underline">
            {SITE_CONFIG.contact.phone}
          </a>
        </p>
      </div>
    </div>
  );
};
