import React from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Facebook, 
  Instagram, 
  Youtube, 
  ShieldCheck, 
  Heart,
  ChevronRight,
  Compass
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { PageId } from '../../types';
import { IslamicDivider, BismillahHeader } from '../common/IslamicPattern';

interface FooterProps {
  onNavigate: (page: PageId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const handleNav = (page: PageId) => {
    onNavigate(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#0B1F3A] text-white pt-16 pb-12 border-t-2 border-[#C9A227]/40 pattern-islamic-subtle relative overflow-hidden">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BismillahHeader light className="mb-6 opacity-90" />

        {/* Main Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Col 1: Brand & Presentation */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#C9A227] rotate-45 flex items-center justify-center shrink-0 bg-[#0B1F3A]">
                <span className="-rotate-45 font-serif-title text-[#C9A227] text-lg font-bold">
                  A
                </span>
              </div>
              <div className="pl-1">
                <span className="font-serif-title text-xl font-bold tracking-widest text-white block leading-tight uppercase">
                  EL AUKOUWA
                </span>
                <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#E5C766] block mt-0.5">
                  Voyages & Oumra
                </span>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pr-4">
              Agence agréée spécialisée dans l'organisation rigoureuse de la Oumra, des séjours spirituels vers La Mecque et Médine, et des voyages internationaux d'exception pour les pèlerins africains et leurs familles.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-sm bg-white/5 border border-[#C9A227]/40 text-xs text-[#E5C766]">
              <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
              <span>Agrément & Assistance 24/7 en Arabie Saoudite</span>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SITE_CONFIG.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all flex items-center justify-center text-slate-300"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all flex items-center justify-center text-slate-300"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SITE_CONFIG.socials.youtube}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-white/5 hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all flex items-center justify-center text-slate-300"
                aria-label="Youtube"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`}
                target="_blank"
                rel="noreferrer"
                className="w-9 h-9 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-all flex items-center justify-center"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Agence Links */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#E5C766] uppercase tracking-wider">
              Agence
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('a-propos')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>À propos de nous</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('services')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Nos services</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('galerie')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Galerie photos</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('temoignages')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Témoignages pèlerins</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('contact')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Nous contacter</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Oumra Links */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#E5C766] uppercase tracking-wider">
              Oumra
            </h4>
            <ul className="space-y-2 text-xs text-slate-300">
              <li>
                <button onClick={() => handleNav('oumra')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Formules Oumra</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('oumra')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Guide de préparation</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('reservation')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Réserver ma place</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('devis')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>Demande de devis</span>
                </button>
              </li>
              <li>
                <button onClick={() => handleNav('faq')} className="hover:text-[#E5C766] transition-colors flex items-center gap-1.5">
                  <ChevronRight className="w-3 h-3 text-[#C9A227]" />
                  <span>FAQ & Formalités visa</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact info */}
          <div className="space-y-3">
            <h4 className="font-serif-title text-sm font-bold text-[#E5C766] uppercase tracking-wider">
              Contact & Siège
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white">
                  {SITE_CONFIG.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 text-[#25D366] shrink-0" />
                <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-white text-[#E5C766]">
                  WhatsApp : {SITE_CONFIG.contact.whatsappDisplay}
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Copyright and Legal links */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <p className="text-center sm:text-left">
            © 2026 Agence El Aukouwa Voyages & Tourisme. Tous droits réservés.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-slate-400">
            <button onClick={() => handleNav('mentions-legales')} className="hover:text-[#E5C766] transition-colors">
              Mentions légales
            </button>
            <button onClick={() => handleNav('confidentialite')} className="hover:text-[#E5C766] transition-colors">
              Politique de confidentialité
            </button>
            <button onClick={() => handleNav('cgv')} className="hover:text-[#E5C766] transition-colors">
              Conditions Générales
            </button>
            <button onClick={() => handleNav('connexion')} className="hover:text-[#E5C766] transition-colors text-[#C9A227]">
              Administration
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
