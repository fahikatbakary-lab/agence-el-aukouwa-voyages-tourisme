import React, { useState } from 'react';
import { OumraOffer, PageId, FAQItem } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { OumraCard } from '../components/cards/OumraCard';
import { Button } from '../components/common/Button';
import { IslamicDivider, IslamicArchFrame } from '../components/common/IslamicPattern';
import { 
  Sparkles, 
  CheckCircle, 
  MapPin, 
  Building, 
  Plane, 
  HeartHandshake, 
  FileText, 
  HelpCircle,
  Calendar,
  ChevronDown
} from 'lucide-react';

interface OumraPageProps {
  offers: OumraOffer[];
  faqs: FAQItem[];
  onSelectOffer: (offer: OumraOffer) => void;
  onBookOffer: (offer: OumraOffer) => void;
  onNavigate: (page: PageId) => void;
}

export const OumraPage: React.FC<OumraPageProps> = ({
  offers,
  faqs,
  onSelectOffer,
  onBookOffer,
  onNavigate,
}) => {
  const [selectedFormulaFilter, setSelectedFormulaFilter] = useState<string>('all');
  const [openFaqId, setOpenFaqId] = useState<string | null>(null);

  const filteredOffers = selectedFormulaFilter === 'all'
    ? offers
    : offers.filter(o => o.formula === selectedFormulaFilter);

  const oumraFaqs = faqs.filter(f => f.category === 'Oumra' || f.category === 'Documents & Visas');

  const ritualSteps = [
    { title: '1. Al-Ihram (La Sacralisation)', desc: 'Purification, intention solennelle (Niyyah) au Miqat, port des deux pièces d’étoffe blanche pour les hommes et vêtement pudique pour les femmes, récitation de la Talbiyah.' },
    { title: '2. At-Tawaf (Les 7 Tours)', desc: 'Accomplir 7 tours rituels autour de la Sainte Kaaba dans le sens inverse des aiguilles d’une montre en commençant par la Pierre Noire (Al-Hajar Al-Aswad).' },
    { title: '3. Salat derrière le Maqam Ibrahim', desc: 'Prière de deux unités (Rak’at) derrière la station d’Ibrahim suivie de l’abreuvement de l’eau bénite de Zamzam.' },
    { title: '4. As-Sa’y (Safa & Marwa)', desc: 'Parcourir 7 trajets entre les collines sacrées de Safa et Marwa en commémoration de la dévotion de Sayyidatuna Hajar.' },
    { title: '5. At-Tahallul (Désacralisation)', desc: 'Coupe des cheveux (rasage ou raccourcissement pour les hommes, coupe d’une mèche pour les femmes) marquant l’accomplissement de la Oumra.' },
  ];

  const requiredDocuments = [
    'Passeport valide au moins 6 mois après la date de retour prévue',
    'Photos d’identité récentes sur fond blanc (format officiel)',
    'Certificat international de vaccination (Méningite ACYW135)',
    'Copie de la pièce d’identité du déclarant',
    'Assurance médicale internationale (incluse dans nos formules)',
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* 1. Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Le Petit Pèlerinage en Terre Sainte</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Accomplissez votre Oumra avec piété & sérénité
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Découvrez nos différentes formules, nos conseils théologiques et logistiques, ainsi que les étapes indispensables pour réussir votre voyage spirituel.
        </p>
      </div>

      {/* 2. Formulas Filter & Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {['all', 'Essentielle', 'Confort', 'Premium', 'Ramadan'].map((filter) => (
            <button
              key={filter}
              onClick={() => setSelectedFormulaFilter(filter)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedFormulaFilter === filter
                  ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm border border-[#C9A227]/40'
                  : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {filter === 'all' ? 'Toutes les formules' : `Formule ${filter}`}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredOffers.map((offer) => (
            <OumraCard
              key={offer.id}
              offer={offer}
              onSelect={onSelectOffer}
              onBook={onBookOffer}
            />
          ))}
        </div>
      </div>

      {/* 3. Educational Guide: Qu'est-ce que la Oumra & Les 5 étapes des rituels */}
      <div className="bg-white py-16 border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            badge="Guide Spirituel"
            title="Qu'est-ce que la Oumra et ses rituels ?"
            subtitle="La Oumra est une visite pieuse des Lieux Saints accomplie tout au long de l'année pour purifier son âme et renouveler sa foi."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-4">
              <h3 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
                Les 5 étapes sacrées des rituels
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                Nos érudits religieux et accompagnateurs bilingues vous guident pas à pas lors de chaque rite pour vous assurer une parfaite conformité avec la Sunnah prophétique.
              </p>

              <div className="space-y-3 pt-2">
                {ritualSteps.map((step, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-[#F7F8FA] border border-slate-200">
                    <h4 className="font-serif-title text-xs sm:text-sm font-bold text-[#0B1F3A]">
                      {step.title}
                    </h4>
                    <p className="text-xs text-[#667085] mt-1 leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Box */}
            <div className="space-y-6">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-2 border-[#C9A227]/30">
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?auto=format&fit=crop&w=1000&q=80"
                  alt="Pèlerins à La Mecque"
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <p className="font-serif-title text-base font-bold text-[#E5C766]">
                    Accompagnement continu & Fraternité
                  </p>
                  <p className="text-xs text-slate-200 mt-0.5">
                    Séminaires de formation avant le départ et encadrement direct à La Mecque et Médine.
                  </p>
                </div>
              </div>

              {/* Documents Required Box */}
              <div className="p-6 rounded-2xl bg-[#0B1F3A] text-white border border-[#C9A227]/40 pattern-islamic-subtle">
                <h4 className="font-serif-title text-base font-bold text-[#E5C766] flex items-center gap-2 mb-3">
                  <FileText className="w-5 h-5 text-[#C9A227]" />
                  <span>Documents nécessaires pour votre visa</span>
                </h4>
                <ul className="space-y-2 text-xs text-slate-300">
                  {requiredDocuments.map((doc, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                      <span>{doc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Oumra FAQ */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Questions Oumra"
          title="Foire Aux Questions spécifique à la Oumra"
          subtitle="Toutes les réponses pratiques pour votre hébergement, les vols et les formalités."
        />

        <div className="space-y-3">
          {oumraFaqs.map((faq) => {
            const isOpen = openFaqId === faq.id;
            return (
              <div
                key={faq.id}
                className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-2xs"
              >
                <button
                  onClick={() => setOpenFaqId(isOpen ? null : faq.id)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 hover:bg-slate-50 transition-colors"
                >
                  <span className="font-serif-title text-sm sm:text-base font-bold text-[#0B1F3A]">
                    {faq.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-full bg-[#0B1F3A]/5 flex items-center justify-center text-[#0B1F3A] shrink-0 transition-transform ${
                      isOpen ? 'rotate-180 bg-[#C9A227]' : ''
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

        {/* CTA to Reservation */}
        <div className="mt-12 p-8 rounded-2xl bg-[#0B1F3A] text-white text-center border border-[#C9A227]/30">
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-white mb-2">
            Vous souhaitez réserver votre place pour le prochain départ ?
          </h3>
          <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mb-6">
            Les places pour les périodes fortes (Vacances, Chaabane et Ramadan) sont limitées afin de garantir la qualité de l’hébergement et de l'encadrement.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button
              variant="gold"
              size="md"
              onClick={() => onNavigate('reservation')}
            >
              Faire une demande de réservation
            </Button>
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate('devis')}
              className="bg-white/10 text-white border-white/20"
            >
              Demander un devis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
