import React, { useState } from 'react';
import { QuoteRequest } from '../../types';
import { dataStore } from '../../lib/supabase';
import { Button } from '../common/Button';
import { CheckCircle2, Sparkles, Send, Calculator } from 'lucide-react';
import { IslamicDivider } from '../common/IslamicPattern';

interface QuoteFormProps {
  defaultDestination?: string;
  defaultFormula?: string;
  onSuccess?: (quote: QuoteRequest) => void;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  defaultDestination = 'La Mecque & Médine (Oumra)',
  defaultFormula = 'Confort',
  onSuccess,
}) => {
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('Sénégal');
  const [tripType, setTripType] = useState<QuoteRequest['tripType']>('Oumra');
  const [destination, setDestination] = useState(defaultDestination);
  const [travelersCount, setTravelersCount] = useState<number>(2);
  const [desiredDate, setDesiredDate] = useState('2026-11-15');
  const [formula, setFormula] = useState(defaultFormula);
  const [budgetEstimated, setBudgetEstimated] = useState('Standard');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedQuote, setSubmittedQuote] = useState<QuoteRequest | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phone || !email) return;

    setIsSubmitting(true);
    setTimeout(() => {
      const newQuote = dataStore.addQuote({
        fullName,
        phone,
        email,
        country,
        tripType,
        destination,
        travelersCount,
        desiredDate,
        formula,
        budgetEstimated,
        message: message || 'Demande de devis standard sans message complémentaire.',
      });

      setIsSubmitting(false);
      setSubmittedQuote(newQuote);
      if (onSuccess) onSuccess(newQuote);
    }, 600);
  };

  if (submittedQuote) {
    return (
      <div className="bg-white rounded-2xl p-8 sm:p-10 border border-slate-200 shadow-xl text-center max-w-xl mx-auto animate-fadeIn">
        <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="px-3 py-1 bg-emerald-50 text-emerald-800 text-xs font-bold rounded-full border border-emerald-200 uppercase tracking-wider">
          Demande enregistrée avec succès
        </span>
        <h3 className="font-serif-title text-2xl font-bold text-[#0B1F3A] mt-3">
          Merci, {submittedQuote.fullName} !
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-2 leading-relaxed">
          Votre demande de devis a été transmise à nos conseillers. Un devis détaillé vous sera envoyé par e-mail et WhatsApp dans les <strong>24 heures ouvrées</strong>.
        </p>

        <div className="mt-6 p-4 rounded-xl bg-[#F7F8FA] border border-slate-200 text-left text-xs space-y-2">
          <div className="flex justify-between">
            <span className="text-[#667085]">Numéro de référence :</span>
            <span className="font-mono font-bold text-[#0B1F3A]">{submittedQuote.referenceNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#667085]">Destination :</span>
            <span className="font-semibold text-[#172033]">{submittedQuote.destination}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#667085]">Formule choisie :</span>
            <span className="font-semibold text-[#C9A227]">{submittedQuote.formula}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[#667085]">Nombre de pèlerins :</span>
            <span className="font-semibold text-[#172033]">{submittedQuote.travelersCount} personne(s)</span>
          </div>
        </div>

        <button
          onClick={() => setSubmittedQuote(null)}
          className="mt-6 text-xs text-[#0B1F3A] font-semibold underline hover:text-[#C9A227]"
        >
          Faire une autre demande de devis
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-3xl mx-auto space-y-6"
    >
      <div className="text-center mb-6">
        <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1 bg-[#C9A227]/15 text-[#0B1F3A] rounded-full border border-[#C9A227]/30 uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Devis Gratuit & Sans Engagement</span>
        </span>
        <h3 className="font-serif-title text-2xl sm:text-3xl font-bold text-[#0B1F3A] mt-2">
          Calculez votre devis personnalisé
        </h3>
        <p className="text-xs sm:text-sm text-[#667085] mt-1">
          Remplissez ce formulaire et recevez une proposition chiffrée adaptée à vos attentes.
        </p>
      </div>

      {/* Row 1: Type of trip & Formula */}
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
            <option value="Oumra">Oumra (La Mecque & Médine)</option>
            <option value="Voyage International">Voyage / Séjour International</option>
            <option value="Groupe / Famille">Groupe / Association / Famille</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Formule souhaitée *
          </label>
          <select
            value={formula}
            onChange={(e) => setFormula(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          >
            <option value="Essentielle">Formule Essentielle (Budget maîtrisé)</option>
            <option value="Confort">Formule Confort (Proximité Haram 4★/5★)</option>
            <option value="Premium">Formule Premium & VIP (Luxe & Conciergerie)</option>
            <option value="Ramadan">Spéciale Mois Sacré de Ramadan</option>
            <option value="Sur Mesure">Sur Mesure / Personnalisée</option>
          </select>
        </div>
      </div>

      {/* Row 2: Destination & Travelers */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="sm:col-span-2">
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Destination(s) *
          </label>
          <input
            type="text"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
            placeholder="Ex: La Mecque & Médine ou Combiné Oumra + Dubaï"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Nb Voyageurs *
          </label>
          <input
            type="number"
            min={1}
            max={50}
            value={travelersCount}
            onChange={(e) => setTravelersCount(parseInt(e.target.value) || 1)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>
      </div>

      {/* Row 3: Desired Date & Estimated Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Date approximative de départ *
          </label>
          <input
            type="date"
            value={desiredDate}
            onChange={(e) => setDesiredDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Pays de résidence & départ *
          </label>
          <select
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          >
            <option value="Sénégal">Sénégal (Dakar)</option>
            <option value="Mali">Mali (Bamako)</option>
            <option value="Côte d'Ivoire">Côte d'Ivoire (Abidjan)</option>
            <option value="Guinée">Guinée (Conakry)</option>
            <option value="Burkina Faso">Burkina Faso (Ouagadougou)</option>
            <option value="France / Europe">France / Europe (Paris, etc.)</option>
            <option value="Autre pays">Autre pays</option>
          </select>
        </div>
      </div>

      <IslamicDivider className="my-3 opacity-60" />

      {/* Contact information */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Nom complet *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ex: Cheikh Tidiane Sy"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Téléphone / WhatsApp *
          </label>
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Ex: +221 77 000 00 00"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
            Adresse E-mail *
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Ex: nom@domaine.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1.5">
          Précisions particulières (chambre seule, enfants, personnes âgées, etc.)
        </label>
        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Indiquez ici vos souhaits particuliers ou vos questions..."
          className="w-full p-3 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
        />
      </div>

      {/* Submit Button */}
      <div className="pt-2">
        <Button
          type="submit"
          variant="gold"
          size="lg"
          fullWidth
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="font-bold text-sm sm:text-base py-3.5 shadow-md"
        >
          {isSubmitting ? 'Envoi de votre demande...' : 'Demander mon devis gratuit'}
        </Button>
        <p className="text-center text-[11px] text-[#667085] mt-2.5">
          🔒 Vos données personnelles sont traitées en toute confidentialité par notre agence.
        </p>
      </div>
    </form>
  );
};
