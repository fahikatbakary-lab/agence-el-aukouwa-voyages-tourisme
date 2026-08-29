import React from 'react';
import { ServiceItem, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { ServiceCard } from '../components/cards/ServiceCard';
import { Button } from '../components/common/Button';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { Sparkles, PhoneCall, CheckCircle, ShieldCheck } from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

interface ServicesPageProps {
  services: ServiceItem[];
  onNavigate: (page: PageId) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ services, onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Nos Prestations & Accompagnements</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Une prise en charge globale & sur-mesure
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          De la première démarche administrative jusqu’à votre retour chez vous, nous déployons notre savoir-faire logistique et théologique à chaque instant.
        </p>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Special Box: Groupes & Comités d'entreprises */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-12 border border-[#C9A227]/30 pattern-islamic-subtle relative overflow-hidden shadow-2xl">
          <div className="max-w-3xl space-y-4">
            <span className="px-3 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-bold uppercase rounded-md">
              Offre Spéciale Collectivités
            </span>
            <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
              Comités d'entreprises, Dahiras, Associations & Familles nombreuses
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Vous organisez un voyage groupé pour vos collaborateurs ou les membres de votre communauté ? Profitez de nos conditions tarifaires préférentielles, d'une privatisation partielle de transport et d'un interlocuteur unique dédié à votre projet.
            </p>
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <Button
                variant="gold"
                size="md"
                onClick={() => onNavigate('devis')}
              >
                Demander un devis groupe
              </Button>
              <a
                href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`}
                className="text-xs font-semibold text-[#E5C766] hover:underline flex items-center gap-1.5"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Contacter notre pôle groupes : {SITE_CONFIG.contact.phone}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
