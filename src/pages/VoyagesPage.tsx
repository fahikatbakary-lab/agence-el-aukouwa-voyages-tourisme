import React from 'react';
import { Destination, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Button } from '../components/common/Button';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { Plane, Compass, Users, Sparkles, Shield, HeartHandshake } from 'lucide-react';

interface VoyagesPageProps {
  destinations: Destination[];
  onExploreDestination: (dest: Destination) => void;
  onRequestDestinationQuote: (dest: Destination) => void;
  onNavigate: (page: PageId) => void;
}

export const VoyagesPage: React.FC<VoyagesPageProps> = ({
  destinations,
  onExploreDestination,
  onRequestDestinationQuote,
  onNavigate,
}) => {
  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* 1. Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Plane className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Séjours & Circuits Internationaux</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Voyages d'exception & Découvertes culturelles
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          En plus de notre cœur de métier pour la Oumra, découvrez nos forfaits touristiques exclusifs : séjours en famille, lunes de miel, circuits historiques et combinés spirituels.
        </p>
      </div>

      {/* 2. Highlight: Le concept du Combiné Oumra + Découverte */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#0B1F3A] text-white rounded-3xl p-8 sm:p-12 border border-[#C9A227]/30 pattern-islamic-subtle relative overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <span className="px-3 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-bold uppercase rounded-md">
                Formule Très Demandée
              </span>
              <h2 className="font-serif-title text-2xl sm:text-3xl font-bold text-white">
                Séjours Combinés : Oumra & Escale Internationale
              </h2>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                Prolongez votre pèlerinage par une escale de 3 à 5 jours à Dubaï, Istanbul, Le Caire ou Doha. Nous prenons en charge la totalité des vols, transferts VIP, hôtels 4★/5★ et excursions guidées.
              </p>
              <div className="pt-2 flex flex-wrap gap-3">
                <Button
                  variant="gold"
                  size="md"
                  onClick={() => onNavigate('devis')}
                >
                  Demander un devis Combiné
                </Button>
                <Button
                  variant="primary"
                  size="md"
                  onClick={() => onNavigate('destinations')}
                  className="bg-white/10 text-white border-white/20"
                >
                  Voir les destinations
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl overflow-hidden h-40 border border-white/10 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=600&q=80"
                  alt="Dubaï"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-xl overflow-hidden h-40 border border-white/10 shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=600&q=80"
                  alt="Istanbul"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Featured International Trips */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Catalogue Séjours"
          title="Nos meilleures offres de voyages"
          subtitle="Choisissez votre prochaine aventure et laissez nos spécialistes orchestrer un séjour inoubliable."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onExplore={onExploreDestination}
              onRequestQuote={onRequestDestinationQuote}
            />
          ))}
        </div>
      </div>

      {/* 4. Why Travel With Us */}
      <div className="bg-white py-16 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Garanties El Aukouwa"
            title="Pourquoi confier vos voyages à notre agence ?"
            subtitle="Une expertise reconnue dans le transport et le tourisme de loisirs éthique et sécurisé."
          />

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#E5C766] flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#0B1F3A] mb-2">Sécurité & Transparence</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Contrats clairs, assurances rapatriement incluses et partenaires hôteliers audités régulièrement.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#E5C766] flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#0B1F3A] mb-2">Groupes & Familles</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Tarifs négociés auprès des compagnies aériennes pour les grands groupes, associations et comités d'entreprise.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-[#F7F8FA] border border-slate-200">
              <div className="w-12 h-12 rounded-xl bg-[#0B1F3A] text-[#E5C766] flex items-center justify-center mx-auto mb-4">
                <HeartHandshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif-title text-base font-bold text-[#0B1F3A] mb-2">Accompagnement Dédié</h3>
              <p className="text-xs text-[#667085] leading-relaxed">
                Conseillers dédiés disponibles avant, pendant et après votre voyage pour un suivi sans faille.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
