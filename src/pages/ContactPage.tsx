import React from 'react';
import { ContactForm } from '../components/forms/ContactForm';
import { PageId } from '../types';
import { SITE_CONFIG } from '../config/site';
import { MapPin, Phone, Mail, Clock, MessageCircle, ShieldCheck } from 'lucide-react';
import { IslamicDivider } from '../components/common/IslamicPattern';

export const ContactPage: React.FC<{ onNavigate: (page: PageId) => void }> = () => {
  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Phone className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Contactez Notre Équipe</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Nous sommes à votre écoute
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Une question sur un voyage, un doute sur les formalités de visa ou envie de nous rencontrer à notre siège ? Écrivez-nous ou appelez-nous.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#0B1F3A] text-white p-6 sm:p-8 rounded-2xl border border-[#C9A227]/40 pattern-islamic-subtle space-y-6 shadow-xl">
              <div>
                <span className="text-xs uppercase font-semibold tracking-wider text-[#E5C766]">Coordonnées Directes</span>
                <h3 className="font-serif-title text-xl font-bold text-white mt-1">
                  Agence El Aukouwa Voyages
                </h3>
              </div>

              <div className="space-y-4 text-xs sm:text-sm text-slate-200">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Siège & Bureaux :</strong>
                    <span>{SITE_CONFIG.contact.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">Téléphone agence :</strong>
                    <a href={`tel:${SITE_CONFIG.contact.phone.replace(/\s+/g, '')}`} className="hover:text-[#E5C766]">
                      {SITE_CONFIG.contact.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">WhatsApp Direct :</strong>
                    <a href={`https://wa.me/${SITE_CONFIG.contact.whatsapp}`} target="_blank" rel="noreferrer" className="text-[#E5C766] hover:underline">
                      {SITE_CONFIG.contact.whatsappDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#C9A227] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-white font-semibold">E-mail officiel :</strong>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="hover:text-[#E5C766]">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center gap-2 text-xs text-[#E5C766]">
                <ShieldCheck className="w-4 h-4 text-[#C9A227]" />
                <span>Assistance pèlerins 24h/24 en Terre Sainte</span>
              </div>
            </div>

            {/* Opening Hours */}
            <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-3">
              <div className="flex items-center gap-2 text-[#0B1F3A] font-bold font-serif-title text-sm">
                <Clock className="w-4 h-4 text-[#C9A227]" />
                <span>Horaires d'ouverture de l'agence</span>
              </div>
              <ul className="text-xs text-[#667085] space-y-2">
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Lundi – Vendredi :</span>
                  <span className="font-semibold text-[#172033]">{SITE_CONFIG.contact.openingHoursWeek}</span>
                </li>
                <li className="flex justify-between border-b border-slate-100 pb-1">
                  <span>Samedi :</span>
                  <span className="font-semibold text-[#172033]">{SITE_CONFIG.contact.openingHoursSaturday}</span>
                </li>
                <li className="flex justify-between">
                  <span>Dimanche :</span>
                  <span className="text-rose-600 font-semibold">{SITE_CONFIG.contact.openingHoursSunday}</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};
