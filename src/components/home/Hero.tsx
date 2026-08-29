import React from 'react';
import { Sparkles, ArrowRight, UserCheck, ShieldCheck, Clock } from 'lucide-react';
import { Button } from '../common/Button';
import { PageId } from '../../types';

interface HeroProps {
  onNavigate: (page: PageId) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between bg-[#0B1F3A] text-white overflow-hidden">
      {/* Background Image with Immersive Blending */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?q=80&w=2070&auto=format&fit=crop")',
        }}
      />
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(11, 31, 58, 0.4) 0%, rgba(11, 31, 58, 0.95) 100%)',
        }}
      />

      {/* Decorative Geometric Ornament in top corner */}
      <div className="absolute top-0 right-0 p-8 sm:p-24 opacity-10 pointer-events-none z-10 hidden sm:block">
        <svg width="360" height="360" viewBox="0 0 100 100" fill="none" stroke="#C9A227" strokeWidth="0.5">
          <path d="M50 5 L55 35 L85 40 L55 45 L50 75 L45 45 L15 40 L45 35 Z" />
          <circle cx="50" cy="40" r="30" />
          <rect x="20" y="10" width="60" height="60" transform="rotate(45 50 40)" />
        </svg>
      </div>

      {/* Main Content */}
      <div className="relative z-20 flex-grow flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 py-16 sm:py-20 max-w-6xl mx-auto">
        {/* Immersive Badge */}
        <div className="mb-6 inline-flex items-center gap-2 px-4 py-1.5 border border-[#C9A227]/40 bg-[#C9A227]/10 rounded-full text-[10px] sm:text-xs font-bold uppercase tracking-[0.3em] text-[#C9A227] backdrop-blur-sm">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Agence El Aukouwa — Voyages & Oumra</span>
        </div>

        {/* Immersive Display Title */}
        <h1 className="font-serif-title text-4xl sm:text-6xl md:text-7xl font-normal leading-[1.1] mb-6 max-w-4xl text-white tracking-tight">
          Votre voyage spirituel <br />
          <span className="italic text-[#C9A227] font-serif-title">commence ici</span>
        </h1>

        {/* Lead Paragraph */}
        <p className="text-base sm:text-lg opacity-80 max-w-2xl mb-10 leading-relaxed font-light text-slate-200">
          Accompagnement spécialisé pour les pèlerins africains. Vivez une expérience de foi unique avec une organisation rigoureuse et sereine vers La Mecque et Médine.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto">
          <button
            onClick={() => onNavigate('oumra')}
            className="w-full sm:w-auto bg-[#C9A227] text-[#0B1F3A] px-8 sm:px-10 py-4 sm:py-5 rounded-sm font-bold uppercase tracking-widest text-xs sm:text-sm hover:translate-y-[-2px] hover:bg-[#E5C766] transition-all shadow-xl flex items-center justify-center gap-2"
          >
            <span>Découvrir nos offres Oumra</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => onNavigate('devis')}
            className="w-full sm:w-auto border border-white/30 backdrop-blur-md px-8 sm:px-10 py-4 sm:py-5 rounded-sm font-bold uppercase tracking-widest text-xs sm:text-sm text-white hover:bg-white/10 transition-all flex items-center justify-center"
          >
            Demander un devis
          </button>
        </div>
      </div>

      {/* Immersive Trust Bar */}
      <div className="relative z-20 px-6 sm:px-12 lg:px-16 py-8 sm:py-10 bg-black/20 backdrop-blur-md border-t border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
          {/* Trust 1 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] shrink-0">
              <UserCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-serif-title text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 text-white">
                Accompagnement
              </h4>
              <p className="text-xs opacity-60 text-slate-300 leading-relaxed">
                Présence humaine et spirituelle à chaque étape du pèlerinage.
              </p>
            </div>
          </div>

          {/* Trust 2 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-serif-title text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 text-white">
                Organisation
              </h4>
              <p className="text-xs opacity-60 text-slate-300 leading-relaxed">
                Vols directs, hôtels vérifiés à proximité des Harams et visas sécurisés.
              </p>
            </div>
          </div>

          {/* Trust 3 */}
          <div className="flex items-start gap-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full bg-[#C9A227]/10 border border-[#C9A227]/30 text-[#C9A227] shrink-0">
              <Clock className="w-5 h-5" />
            </div>
            <div className="text-left">
              <h4 className="font-serif-title text-xs sm:text-sm font-bold uppercase tracking-wider mb-1 text-white">
                Sérénité 24/7
              </h4>
              <p className="text-xs opacity-60 text-slate-300 leading-relaxed">
                Une assistance permanente pour vous concentrer sur vos invocations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

