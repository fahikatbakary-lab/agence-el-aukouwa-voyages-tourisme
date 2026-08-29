import React, { useState } from 'react';
import { Reservation, OumraOffer } from '../../types';
import { dataStore } from '../../lib/supabase';
import { Button } from '../common/Button';
import { CheckCircle2, ShieldCheck, Search, ArrowRight, UserCheck } from 'lucide-react';
import { IslamicDivider } from '../common/IslamicPattern';

interface ReservationFormProps {
  selectedOffer?: OumraOffer | null;
  onSuccess?: (reservation: Reservation) => void;
}

export const ReservationForm: React.FC<ReservationFormProps> = ({
  selectedOffer,
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [tripType, setTripType] = useState<Reservation['tripType']>('Oumra');
  const [offerTitle, setOfferTitle] = useState(selectedOffer ? selectedOffer.title : 'Formule Oumra Confort');
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [desiredDate, setDesiredDate] = useState('2026-11-15');
  const [cityOfDeparture, setCityOfDeparture] = useState('Dakar (Sénégal)');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedReservation, setSubmittedReservation] = useState<Reservation | null>(null);

  // Status Lookup Tool state
  const [searchRef, setSearchRef] = useState('');
  const [lookupResult, setLookupResult] = useState<Reservation | null>(null);
  const [lookupSearched, setLookupSearched] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const res = dataStore.addReservation({
        fullName,
        phone,
        email,
        tripType,
        offerId: selectedOffer?.id,
        offerTitle,
        travelersCount,
        desiredDate,
        cityOfDeparture,
        message,
      });

      setIsSubmitting(false);
      setSubmittedReservation(res);
      if (onSuccess) onSuccess(res);
    }, 600);
  };

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    setLookupSearched(true);
    if (!searchRef.trim()) {
      setLookupResult(null);
      return;
    }
    const all = dataStore.getReservations();
    const found = all.find(
      (r) => r.referenceNumber.toLowerCase() === searchRef.trim().toLowerCase()
    );
    setLookupResult(found || null);
  };

  const getStatusBadge = (status: Reservation['status']) => {
    switch (status) {
      case 'confirmed':
        return <span className="px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full border border-emerald-300">Confirmée</span>;
      case 'cancelled':
        return <span className="px-3 py-1 bg-rose-100 text-rose-800 text-xs font-bold rounded-full border border-rose-300">Annulée</span>;
      default:
        return <span className="px-3 py-1 bg-amber-100 text-amber-800 text-xs font-bold rounded-full border border-amber-300">En cours de traitement (Pending)</span>;
    }
  };

  if (submittedReservation) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center max-w-xl mx-auto animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 uppercase tracking-wider">
          Demande de réservation enregistrée
        </span>
        <h3 className="font-serif-title text-2xl font-bold text-[#0B1F3A] mt-3">
          Barakallahu fik, {submittedReservation.fullName} !
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
          Votre dossier a été initié sous le statut <strong>En cours de traitement</strong>. Notre responsable des départs va vous contacter par WhatsApp et appel téléphonique pour finaliser le dépôt de vos passeports et formalités.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-[#0B1F3A] text-white border border-[#C9A227]/40 text-left text-xs space-y-2">
          <div className="flex justify-between border-b border-white/10 pb-2">
            <span className="text-slate-300">Référence Dossier :</span>
            <span className="font-mono font-bold text-[#E5C766]">{submittedReservation.referenceNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Formule :</span>
            <span className="font-semibold text-white">{submittedReservation.offerTitle}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Date souhaitée :</span>
            <span className="font-semibold text-white">{submittedReservation.desiredDate}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-300">Statut actuel :</span>
            <span>{getStatusBadge(submittedReservation.status)}</span>
          </div>
        </div>

        <button
          onClick={() => setSubmittedReservation(null)}
          className="mt-6 text-xs text-[#0B1F3A] font-semibold underline hover:text-[#C9A227]"
        >
          Effectuer une nouvelle réservation
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-12 max-w-3xl mx-auto">
      {/* Reservation Form Card */}
      <form
        onSubmit={handleSubmit}
        className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl space-y-6"
      >
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-[#0B1F3A]/5 text-[#0B1F3A] rounded-full border border-[#0B1F3A]/10 uppercase tracking-wider">
            <UserCheck className="w-3.5 h-3.5 text-[#C9A227]" />
            <span>Formulaire Officiel de Réservation</span>
          </span>
          <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0B1F3A] mt-2">
            Réservez votre voyage spirituel
          </h3>
          <p className="text-xs sm:text-sm text-[#667085] mt-1">
            Complétez vos coordonnées pour que notre équipe pré-réserve vos billets et votre hébergement.
          </p>
        </div>

        {/* Selected Offer alert */}
        {selectedOffer && (
          <div className="p-3.5 rounded-xl bg-[#C9A227]/10 border border-[#C9A227]/30 flex items-center justify-between text-xs">
            <div>
              <span className="text-[#667085]">Formule présélectionnée :</span>
              <strong className="text-[#0B1F3A] block text-sm font-serif-title">{selectedOffer.title}</strong>
            </div>
            <span className="px-2.5 py-1 bg-[#C9A227] text-[#0B1F3A] font-bold rounded-md">
              {selectedOffer.formula}
            </span>
          </div>
        )}

        {/* Trip type & Offer */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Type de séjour *
            </label>
            <select
              value={tripType}
              onChange={(e) => setTripType(e.target.value as any)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            >
              <option value="Oumra">Oumra (Terre Sainte)</option>
              <option value="Voyage International">Voyage International</option>
              <option value="Combiné">Combiné Oumra + Escale Découverte</option>
            </select>
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Offre / Formule choisie *
            </label>
            <input
              type="text"
              value={offerTitle}
              onChange={(e) => setOfferTitle(e.target.value)}
              placeholder="Ex: Formule Oumra Confort"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>
        </div>

        {/* Travelers, Departure City & Date */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Nb Personnes *
            </label>
            <input
              type="number"
              min={1}
              max={30}
              value={travelersCount}
              onChange={(e) => setTravelersCount(parseInt(e.target.value) || 1)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Ville de départ *
            </label>
            <input
              type="text"
              value={cityOfDeparture}
              onChange={(e) => setCityOfDeparture(e.target.value)}
              placeholder="Ex: Dakar, Bamako, Abidjan..."
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Date de départ *
            </label>
            <input
              type="date"
              value={desiredDate}
              onChange={(e) => setDesiredDate(e.target.value)}
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>
        </div>

        <IslamicDivider className="my-2 opacity-50" />

        {/* Contact Info */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Nom et Prénom *
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Ex: Mamadou Diop"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              Téléphone *
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Ex: +221 77 123 45 67"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
              E-mail *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Ex: mamadou@gmail.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>
        </div>

        {/* Message */}
        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Message ou demandes particulières
          </label>
          <textarea
            rows={3}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type de chambre (Double, Triple), besoins de santé, accompagnement spécifique..."
            className="w-full p-3 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          />
        </div>

        {/* Submit */}
        <div className="pt-2">
          <Button
            type="submit"
            variant="gold"
            size="lg"
            fullWidth
            disabled={isSubmitting}
            icon={<ArrowRight className="w-4 h-4" />}
            className="font-bold text-sm sm:text-base py-3.5 shadow-md"
          >
            {isSubmitting ? 'Enregistrement de la réservation...' : 'Confirmer ma demande de réservation'}
          </Button>
          <p className="text-center text-[11px] text-[#667085] mt-2.5">
            ℹ️ Statut initial : <span className="font-semibold text-amber-700">En attente (pending)</span>. Aucun paiement en ligne immédiat n'est requis à ce stade.
          </p>
        </div>
      </form>

      {/* Lookup Status section */}
      <div className="bg-[#F7F8FA] rounded-2xl p-6 sm:p-8 border border-slate-200">
        <h4 className="font-serif-title text-lg font-bold text-[#0B1F3A] mb-1 flex items-center gap-2">
          <Search className="w-4 h-4 text-[#C9A227]" />
          <span>Suivre l'état de votre dossier de réservation</span>
        </h4>
        <p className="text-xs text-[#667085] mb-4">
          Entrez votre numéro de référence (ex: <strong>RES-2026-8821</strong>) pour vérifier le traitement de votre demande.
        </p>

        <form onSubmit={handleLookup} className="flex gap-2">
          <input
            type="text"
            value={searchRef}
            onChange={(e) => setSearchRef(e.target.value)}
            placeholder="Ex: RES-2026-8821"
            className="flex-1 px-4 py-2.5 rounded-lg bg-white border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          />
          <Button type="submit" variant="primary" size="sm">
            Vérifier le statut
          </Button>
        </form>

        {lookupSearched && (
          <div className="mt-4 pt-4 border-t border-slate-200 animate-fadeIn">
            {lookupResult ? (
              <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2 text-xs">
                <div className="flex justify-between items-center">
                  <span className="font-mono font-bold text-[#0B1F3A]">{lookupResult.referenceNumber}</span>
                  <div>{getStatusBadge(lookupResult.status)}</div>
                </div>
                <p className="text-[#172033]">
                  <strong>Client :</strong> {lookupResult.fullName} ({lookupResult.travelersCount} voyageur(s))
                </p>
                <p className="text-[#172033]">
                  <strong>Offre :</strong> {lookupResult.offerTitle} • Départ le {lookupResult.desiredDate}
                </p>
                {lookupResult.notesAdmin && (
                  <div className="mt-2 p-2.5 bg-blue-50 border border-blue-200 rounded-lg text-blue-900">
                    <strong>Note de l'agence :</strong> {lookupResult.notesAdmin}
                  </div>
                )}
              </div>
            ) : (
              <p className="text-xs text-rose-600 font-medium">
                Aucune réservation trouvée pour la référence "{searchRef}". Vérifiez votre numéro ou contactez l'agence.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
