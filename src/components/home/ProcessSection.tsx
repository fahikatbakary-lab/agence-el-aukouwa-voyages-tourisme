import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { PhoneCall, Compass, BookOpen, PlaneTakeoff, HeartHandshake, Home } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Prise de contact',
      description: 'Le client contacte notre agence via le site, par téléphone ou directement par WhatsApp.',
      icon: PhoneCall,
    },
    {
      number: '02',
      title: 'Choix de la formule',
      description: 'Le client sélectionne l’offre adaptée à ses dates, ses attentes hôtelières et son budget.',
      icon: Compass,
    },
    {
      number: '03',
      title: 'Préparation & Visa',
      description: 'L’agence prend en charge les démarches de visa officiel, les réservations et forme aux rituels.',
      icon: BookOpen,
    },
    {
      number: '04',
      title: 'Départ en Terre Sainte',
      description: 'Accueil personnalisé à l’aéroport et vol serein vers Djeddah ou Médine.',
      icon: PlaneTakeoff,
    },
    {
      number: '05',
      title: 'Accompagnement & Rites',
      description: 'Présence permanente de nos guides religieux pour le Tawaf, Sa’y et les Ziyarat.',
      icon: HeartHandshake,
    },
    {
      number: '06',
      title: 'Retour serein',
      description: 'Accompagnement jusqu’au retour auprès des vôtres avec l’eau bénite de Zamzam.',
      icon: Home,
    },
  ];

  return (
    <section className="py-20 bg-white border-y border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Parcours Pèlerin"
          title="Votre voyage en 6 étapes fluides"
          subtitle="De votre première question jusqu'à votre retour comblé auprès de votre famille, nous veillons sur chaque détail."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={idx}
                className="bg-[#F7F8FA] rounded-xl p-6 sm:p-7 border border-slate-200/90 relative group hover:bg-[#0B1F3A] hover:border-[#C9A227] transition-all duration-300 shadow-sm flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-title text-2xl sm:text-3xl font-extrabold text-[#C9A227]">
                      {step.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white group-hover:bg-[#123B63] flex items-center justify-center text-[#0B1F3A] group-hover:text-[#E5C766] transition-colors shadow-xs border border-[#C9A227]/30">
                      <IconComp className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-serif-title text-lg font-bold text-[#0B1F3A] group-hover:text-white transition-colors mb-2">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#667085] group-hover:text-slate-300 leading-relaxed transition-colors">
                    {step.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200/60 group-hover:border-white/10 flex items-center gap-1.5 text-[10px] uppercase font-bold tracking-widest text-[#0B1F3A] group-hover:text-[#E5C766] transition-colors">
                  <span>Étape certifiée El Aukouwa</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
