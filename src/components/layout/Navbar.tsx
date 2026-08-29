import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Phone, 
  Mail, 
  Shield, 
  ChevronRight, 
  Sparkles,
  Compass
} from 'lucide-react';
import { SITE_CONFIG } from '../../config/site';
import { PageId } from '../../types';
import { Button } from '../common/Button';

interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId) => void;
  isAdminLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  isAdminLoggedIn,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (page: PageId) => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full transition-all duration-300">
      {/* Top Bar with Deep Blue & Gold highlight */}
      <div className="bg-[#0B1F3A] text-white text-xs py-2 px-4 sm:px-8 border-b border-[#C9A227]/20 hidden md:block">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2 text-slate-300">
              <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
              <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.phone}
              </a>
            </span>
            <span className="flex items-center gap-2 text-slate-300">
              <Mail className="w-3.5 h-3.5 text-[#C9A227]" />
              <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-white transition-colors">
                {SITE_CONFIG.contact.email}
              </a>
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="font-arabic text-[#E5C766] text-sm">
              لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ
            </span>
            <span className="text-slate-400">|</span>
            <span className="text-[11px] text-[#E5C766] font-medium tracking-wide">
              {SITE_CONFIG.contact.assistanceEmergency}
            </span>
          </div>
        </div>
      </div>

      {/* Main Nav */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 border-b border-slate-200/80'
            : 'bg-white py-4 border-b border-slate-200'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNav('accueil')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-9 h-9 sm:w-10 sm:h-10 border-2 border-[#C9A227] rotate-45 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform bg-[#0B1F3A]">
              <span className="-rotate-45 font-serif-title text-[#C9A227] text-lg sm:text-xl font-bold">
                A
              </span>
            </div>
            <div className="pl-1">
              <span className="font-serif-title text-base sm:text-lg font-bold text-[#0B1F3A] tracking-widest block leading-none uppercase">
                EL AUKOUWA
              </span>
              <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#C9A227] block mt-1">
                Voyages & Oumra
              </span>
            </div>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {SITE_CONFIG.navLinks.map((link) => {
              const active = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id as PageId)}
                  className={`px-3 py-2 rounded-sm text-xs uppercase font-bold tracking-wider transition-all ${
                    active
                      ? 'text-[#0B1F3A] bg-[#0B1F3A]/5 border-b-2 border-[#C9A227]'
                      : 'text-[#172033] hover:text-[#0B1F3A] hover:bg-slate-50'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          {/* CTA & Admin Links */}
          <div className="hidden sm:flex items-center gap-3">
            {isAdminLoggedIn ? (
              <button
                onClick={() => handleNav('admin')}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg bg-[#0B1F3A] text-[#E5C766] text-xs font-bold border border-[#C9A227]/40 shadow-sm"
              >
                <Shield className="w-3.5 h-3.5" />
                <span>Dashboard Admin</span>
              </button>
            ) : (
              <button
                onClick={() => handleNav('connexion')}
                className="text-xs text-[#667085] hover:text-[#0B1F3A] font-medium px-2 py-1"
                title="Espace Administration"
              >
                Admin
              </button>
            )}

            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNav('devis')}
              icon={<Sparkles className="w-3.5 h-3.5" />}
            >
              Demander un devis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <Button
              variant="gold"
              size="sm"
              onClick={() => handleNav('devis')}
              className="text-xs px-2.5 py-1.5 sm:hidden"
            >
              Devis
            </Button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg text-[#0B1F3A] hover:bg-slate-100 transition-colors focus:outline-none"
              aria-label="Menu principal"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Drawer */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-slate-200 px-4 pt-3 pb-6 space-y-2 animate-fadeIn shadow-2xl">
            <div className="grid grid-cols-2 gap-1.5 py-2">
              {SITE_CONFIG.navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id as PageId)}
                  className={`flex items-center justify-between p-2.5 rounded-lg text-xs font-semibold text-left transition-colors ${
                    currentPage === link.id
                      ? 'bg-[#0B1F3A] text-[#E5C766]'
                      : 'bg-[#F7F8FA] text-[#172033] hover:bg-slate-100'
                  }`}
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-50" />
                </button>
              ))}
            </div>

            <div className="pt-3 border-t border-slate-100 space-y-2">
              <Button
                variant="gold"
                size="md"
                fullWidth
                onClick={() => handleNav('reservation')}
              >
                Réserver ma Oumra
              </Button>
              <Button
                variant="outline"
                size="md"
                fullWidth
                onClick={() => handleNav('connexion')}
              >
                {isAdminLoggedIn ? 'Espace Administrateur' : 'Connexion Espace Admin'}
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
