import React from 'react';
import { PageId } from '../types';
import { SITE_CONFIG } from '../config/site';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { ShieldCheck, Scale, FileText } from 'lucide-react';

export const LegalPage: React.FC<{ type: 'mentions' | 'confidentialite' | 'cgv' }> = ({ type }) => {
  return (
    <div className="py-12 sm:py-16 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
      {type === 'mentions' && (
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-[#0B1F3A]">
            <Scale className="w-8 h-8 text-[#C9A227]" />
            <h1 className="font-serif-title text-2xl sm:text-3xl font-bold">Mentions Légales</h1>
          </div>
          <IslamicDivider />
          <div className="space-y-4 text-xs sm:text-sm text-[#172033] leading-relaxed">
            <h2 className="font-bold text-sm text-[#0B1F3A]">1. Éditeur du site</h2>
            <p>
              Le présent site internet est édité par la société <strong>{SITE_CONFIG.name}</strong>, agence de voyages et de tourisme agréée par le Ministère du Tourisme et accréditée pour l'organisation de la Oumra et des séjours internationaux.
            </p>
            <p>
              <strong>Siège social :</strong> {SITE_CONFIG.contact.address}<br />
              <strong>Téléphone :</strong> {SITE_CONFIG.contact.phone}<br />
              <strong>E-mail :</strong> {SITE_CONFIG.contact.email}<br />
              <strong>NINEA / Registre du Commerce :</strong> Agrément Tourisme & Oumra Officiel
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">2. Hébergement & Sécurité</h2>
            <p>
              Le site est hébergé sur une infrastructure Cloud sécurisée avec chiffrement SSL 256 bits et base de données PostgreSQL / Supabase répondant aux normes internationales de protection des données.
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">3. Propriété intellectuelle</h2>
            <p>
              L’ensemble des contenus (textes, logos, photographies, éléments graphiques islamiques) présents sur le site sont la propriété exclusive de l'Agence El Aukouwa Voyages & Tourisme. Toute reproduction totale ou partielle sans autorisation préalable est strictement interdite.
            </p>
          </div>
        </div>
      )}

      {type === 'confidentialite' && (
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-[#0B1F3A]">
            <ShieldCheck className="w-8 h-8 text-[#C9A227]" />
            <h1 className="font-serif-title text-2xl sm:text-3xl font-bold">Politique de Confidentialité</h1>
          </div>
          <IslamicDivider />
          <div className="space-y-4 text-xs sm:text-sm text-[#172033] leading-relaxed">
            <h2 className="font-bold text-sm text-[#0B1F3A]">1. Collecte des données personnelles</h2>
            <p>
              Les informations recueillies via nos formulaires de contact, de devis et de réservation (nom, prénom, numéro de téléphone, e-mail, passeport) sont nécessaires au traitement de vos dossiers de voyage, à la délivrance des visas et à la réservation des hébergements.
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">2. Confidentialité & Non-divulgation</h2>
            <p>
              L'Agence El Aukouwa s'engage formellement à ne jamais commercialiser, louer ou céder vos données personnelles à des tiers à des fins publicitaires. Les seules transmissions effectuées le sont auprès des autorités consulaires saoudiennes et des compagnies de transport pour la stricte exécution de votre pèlerinage.
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">3. Vos droits</h2>
            <p>
              Conformément à la législation sur la protection des données, vous disposez d'un droit d'accès, de rectification et de suppression de vos données en adressant un e-mail à : <strong>{SITE_CONFIG.contact.email}</strong>.
            </p>
          </div>
        </div>
      )}

      {type === 'cgv' && (
        <div className="bg-white p-8 sm:p-10 rounded-2xl border border-slate-200 shadow-sm space-y-6">
          <div className="flex items-center gap-3 text-[#0B1F3A]">
            <FileText className="w-8 h-8 text-[#C9A227]" />
            <h1 className="font-serif-title text-2xl sm:text-3xl font-bold">Conditions Générales de Vente (CGV)</h1>
          </div>
          <IslamicDivider />
          <div className="space-y-4 text-xs sm:text-sm text-[#172033] leading-relaxed">
            <h2 className="font-bold text-sm text-[#0B1F3A]">1. Inscription et Acompte</h2>
            <p>
              Toute inscription à une formule Oumra ou à un voyage international devient définitive à la signature du contrat de voyage et au versement de l'acompte convenu.
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">2. Formalités & Visas</h2>
            <p>
              Le voyageur doit être en possession d’un passeport en cours de validité (minimum 6 mois après la date de retour). L'agence prend en charge le dépôt du visa officiel auprès des autorités saoudiennes.
            </p>

            <h2 className="font-bold text-sm text-[#0B1F3A]">3. Annulation & Remboursement</h2>
            <p>
              En cas d'annulation du fait du client, les barèmes contractuels stipulés dans la convention de voyage s'appliquent en fonction de la date de départ et des pénalités imposées par les compagnies aériennes et hôtelières.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
