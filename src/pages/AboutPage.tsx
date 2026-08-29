import React from 'react';
import { PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { Button } from '../components/common/Button';
import { IslamicDivider, BismillahHeader } from '../components/common/IslamicPattern';
import { 
  HeartHandshake, 
  ShieldCheck, 
  Sparkles, 
  Award, 
  Compass, 
  Users, 
  BookOpen, 
  Clock, 
  Building2 
} from 'lucide-react';
import { SITE_CONFIG } from '../config/site';

export const AboutPage: React.FC<{ onNavigate: (page: PageId) => void }> = ({ onNavigate }) => {
  const values = [
    { title: 'Fraternité (El Aukouwa)', desc: 'Le nom de notre agence incarne notre raison d’être : traiter chaque pèlerin comme un membre à part entière de notre famille spirituelle.' },
    { title: 'Rigueur & Conformité', desc: 'Une sélection stricte des compagnies aériennes, des hôtels certifiés et le respect scrupuleux des préceptes de la Sunnah.' },
    { title: 'Transparence absolue', desc: 'Aucun frais caché. Des devis détaillés, des programmes remis à l’avance et des engagements contractuels respectés.' },
    { title: 'Sérénité d’esprit', desc: 'Une logistique rodée pour que le pèlerin n’ait qu’une seule priorité : sa relation avec son Créateur et son recueillement.' },
  ];

  const pillars = [
    { label: 'Pèlerins accompagnés', val: '+4 500' },
    { label: 'Taux de satisfaction', val: '99.2%' },
    { label: 'Années d’expérience', val: '+12 ans' },
    { label: 'Guides théologiques', val: '15 référents' },
  ];

  return (
    <div className="py-12 sm:py-16 space-y-16">
      {/* 1. Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <BismillahHeader className="mb-4" />
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Compass className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Notre Histoire & Notre Vocation</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          L'Agence El Aukouwa Voyages & Tourisme
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Pionnière dans l'accompagnement des pèlerins africains et de la diaspora vers les Lieux Saints de l'Islam avec excellence, humanité et dévouement.
        </p>
      </div>

      {/* 2. Story / Presentation Block */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-serif-title text-2xl font-bold text-[#0B1F3A]">
              Une vocation née de la passion pour le service aux pèlerins
            </h2>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Fondée par des professionnels passionnés du tourisme religieux et du voyage, <strong>El Aukouwa Voyages & Tourisme</strong> est née d'un constat évident : le pèlerinage à La Mecque et Médine n'est pas un simple voyage, c'est l'aspiration suprême d'une vie.
            </p>
            <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
              Pour répondre aux besoins spécifiques de nos frères et sœurs du continent africain (langues locales, accompagnement des personnes âgées, alimentation adaptée, formation spirituelle aux rites), nous avons bâti un réseau hôtelier et logistique de premier ordre entre Dakar, Bamako, Abidjan, Conakry, Paris, Djeddah et Médine.
            </p>
            <div className="p-4 rounded-xl bg-[#F7F8FA] border-l-4 border-[#C9A227] text-xs text-[#0B1F3A] italic font-medium">
              « Servir les invités d'Allah avec dévotion et dignité est notre plus grand honneur. »
            </div>
          </div>

          <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1590076215667-875d4ef2d7ee?auto=format&fit=crop&w=1000&q=80"
              alt="L'équipe El Aukouwa en Terre Sainte"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1F3A] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="text-xs text-[#E5C766] uppercase font-bold tracking-wider">Agrément Officiel</span>
              <p className="font-serif-title text-lg font-bold text-white mt-1">
                Partenaire accrédité auprès du Ministère du Hajj & de la Oumra
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Numbers / Impact */}
      <div className="bg-[#0B1F3A] py-14 text-white pattern-islamic-subtle">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {pillars.map((item, idx) => (
              <div key={idx} className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="font-serif-title text-3xl sm:text-4xl font-extrabold text-[#E5C766] block">
                  {item.val}
                </span>
                <span className="text-xs sm:text-sm text-slate-300 mt-1 block">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. Values */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Nos Engagements"
          title="Les 4 piliers de notre éthique"
          subtitle="Ce qui forge la confiance inébranlable que nous accordent nos fidèles voyageurs."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="bg-white p-6 sm:p-7 rounded-2xl border border-slate-200 shadow-xs">
              <h3 className="font-serif-title text-base sm:text-lg font-bold text-[#0B1F3A] mb-2 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#C9A227]" />
                <span>{val.title}</span>
              </h3>
              <p className="text-xs sm:text-sm text-[#667085] leading-relaxed">
                {val.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 5. CTA */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#F7F8FA] p-8 sm:p-10 rounded-2xl border border-slate-200 space-y-4">
          <h3 className="font-serif-title text-xl sm:text-2xl font-bold text-[#0B1F3A]">
            Venez nous rencontrer à notre siège
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] max-w-xl mx-auto">
            Nos bureaux sont ouverts du lundi au samedi pour vous accueillir, répondre à vos questions et étudier vos projets de pèlerinage ou de voyage.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Button
              variant="primary"
              size="md"
              onClick={() => onNavigate('contact')}
            >
              Prendre rendez-vous / Nous contacter
            </Button>
            <Button
              variant="gold"
              size="md"
              onClick={() => onNavigate('devis')}
            >
              Faire une demande de devis
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
