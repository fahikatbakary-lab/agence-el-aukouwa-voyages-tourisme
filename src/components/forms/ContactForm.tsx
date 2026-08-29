import React, { useState } from 'react';
import { ContactMessage } from '../../types';
import { dataStore } from '../../lib/supabase';
import { Button } from '../common/Button';
import { Send, CheckCircle2 } from 'lucide-react';

export const ContactForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('Renseignements Oumra');
  const [message, setMessage] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      dataStore.addMessage({
        fullName,
        email,
        phone,
        subject,
        message,
      });
      setIsSubmitting(false);
      setIsSent(true);
      setFullName('');
      setEmail('');
      setPhone('');
      setMessage('');
    }, 500);
  };

  return (
    <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-lg">
      <h3 className="font-serif-title text-xl font-bold text-[#0B1F3A] mb-1">
        Envoyez-nous un message
      </h3>
      <p className="text-xs text-[#667085] mb-6">
        Notre équipe vous répondra par e-mail ou téléphone dans les plus brefs délais.
      </p>

      {isSent && (
        <div className="p-4 mb-6 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0" />
          <div>
            <strong className="block font-semibold">Message envoyé avec succès !</strong>
            <span>Merci pour votre confiance. Nous revenons vers vous rapidement.</span>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
            Nom complet *
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Ex: Hadja Mariam"
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
              Adresse E-mail *
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre.email@exemple.com"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
              required
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
              Téléphone / WhatsApp
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="+221 77 000 00 00"
              className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
            Objet de votre message *
          </label>
          <select
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
          >
            <option value="Renseignements Oumra">Renseignements sur les formules Oumra</option>
            <option value="Voyage International">Voyages et séjours internationaux</option>
            <option value="Partenariat / Groupe">Groupe, famille ou comité d'entreprise</option>
            <option value="Autre demande">Autre demande</option>
          </select>
        </div>

        <div>
          <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
            Votre message *
          </label>
          <textarea
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Écrivez votre message ici..."
            className="w-full p-3 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
            required
          />
        </div>

        <Button
          type="submit"
          variant="gold"
          size="md"
          fullWidth
          disabled={isSubmitting}
          icon={<Send className="w-4 h-4" />}
          className="font-bold py-3"
        >
          {isSubmitting ? 'Envoi en cours...' : 'Envoyer mon message'}
        </Button>
      </form>
    </div>
  );
};
