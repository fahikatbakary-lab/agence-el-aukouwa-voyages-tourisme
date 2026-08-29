import React, { useState } from 'react';
import { Testimonial, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { TestimonialCard } from '../components/cards/TestimonialCard';
import { Button } from '../components/common/Button';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { Star, MessageSquarePlus, CheckCircle2, ShieldCheck } from 'lucide-react';
import { dataStore } from '../lib/supabase';

interface TestimonialsPageProps {
  testimonials: Testimonial[];
  onNavigate: (page: PageId) => void;
  onRefreshData?: () => void;
}

export const TestimonialsPage: React.FC<TestimonialsPageProps> = ({
  testimonials,
  onNavigate,
  onRefreshData,
}) => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');
  const [showAddModal, setShowAddModal] = useState<boolean>(false);

  // Form states
  const [authorName, setAuthorName] = useState('');
  const [cityCountry, setCityCountry] = useState('Dakar, Sénégal');
  const [formula, setFormula] = useState('Formule Confort');
  const [rating, setRating] = useState<number>(5);
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const published = testimonials.filter(t => t.status === 'published');
  const filtered = selectedFilter === 'all'
    ? published
    : published.filter(t => t.formula.toLowerCase().includes(selectedFilter.toLowerCase()));

  const handleAddSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!authorName || !comment) return;

    dataStore.addTestimonial({
      authorName,
      cityCountry,
      rating,
      comment,
      formula,
      year: '2026',
      verified: false,
    });

    setSubmitted(true);
    if (onRefreshData) onRefreshData();
    setTimeout(() => {
      setSubmitted(false);
      setShowAddModal(false);
      setAuthorName('');
      setComment('');
    }, 2000);
  };

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Avis Pèlerins & Retours d'Expérience</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          La confiance de nos pèlerins, notre plus belle fierté
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Découvrez les témoignages émouvants et sincères de frères et sœurs qui ont partagé cette aventure spirituelle avec El Aukouwa.
        </p>

        {/* Global rating banner */}
        <div className="mt-8 p-6 bg-white rounded-2xl border border-slate-200 shadow-sm max-w-lg mx-auto flex items-center justify-around">
          <div className="text-center">
            <span className="font-serif-title text-3xl font-extrabold text-[#0B1F3A]">4.9 / 5</span>
            <div className="flex justify-center text-[#C9A227] mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <span className="text-[11px] text-[#667085] mt-1 block">Note moyenne certifiée</span>
          </div>

          <div className="h-10 w-px bg-slate-200" />

          <div className="text-center">
            <Button
              variant="gold"
              size="sm"
              onClick={() => setShowAddModal(true)}
              icon={<MessageSquarePlus className="w-3.5 h-3.5" />}
            >
              Déposer un témoignage
            </Button>
            <span className="text-[10px] text-[#667085] mt-1 block">Modération avant publication</span>
          </div>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {['all', 'Essentielle', 'Confort', 'Premium', 'Ramadan'].map((item) => (
            <button
              key={item}
              onClick={() => setSelectedFilter(item)}
              className={`px-4 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedFilter === item
                  ? 'bg-[#0B1F3A] text-[#E5C766] shadow-xs'
                  : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {item === 'all' ? 'Tous les avis' : `Formule ${item}`}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((t) => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>

      {/* Add Testimonial Modal */}
      {showAddModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 animate-fadeIn">
          <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl relative">
            <h3 className="font-serif-title text-xl font-bold text-[#0B1F3A] mb-1">
              Partagez votre expérience
            </h3>
            <p className="text-xs text-[#667085] mb-4">
              Votre avis permettra à de futurs pèlerins de préparer leur voyage en toute confiance.
            </p>

            {submitted ? (
              <div className="p-6 text-center space-y-2">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="font-bold text-[#0B1F3A]">Témoignage envoyé !</h4>
                <p className="text-xs text-[#667085]">
                  Barakallahu fik ! Votre avis sera publié après validation par notre équipe.
                </p>
              </div>
            ) : (
              <form onSubmit={handleAddSubmit} className="space-y-3.5">
                <div>
                  <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
                    Votre Nom & Prénom *
                  </label>
                  <input
                    type="text"
                    value={authorName}
                    onChange={(e) => setAuthorName(e.target.value)}
                    placeholder="Ex: Ousmane Sow"
                    className="w-full px-3.5 py-2 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    required
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
                      Ville & Pays *
                    </label>
                    <input
                      type="text"
                      value={cityCountry}
                      onChange={(e) => setCityCountry(e.target.value)}
                      placeholder="Ex: Dakar, Sénégal"
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
                      Formule suivie *
                    </label>
                    <select
                      value={formula}
                      onChange={(e) => setFormula(e.target.value)}
                      className="w-full px-3.5 py-2 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    >
                      <option value="Formule Confort">Formule Confort</option>
                      <option value="Formule Essentielle">Formule Essentielle</option>
                      <option value="Formule Premium">Formule Premium</option>
                      <option value="Formule Ramadan">Formule Ramadan</option>
                      <option value="Voyage International">Voyage International</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
                    Note globale :
                  </label>
                  <div className="flex gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setRating(star)}
                        className="p-1 text-[#C9A227] focus:outline-none"
                      >
                        <Star
                          className={`w-6 h-6 ${
                            star <= rating ? 'fill-[#C9A227]' : 'text-slate-200'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#0B1F3A] uppercase tracking-wider mb-1">
                    Votre message / Témoignage *
                  </label>
                  <textarea
                    rows={4}
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                    placeholder="Racontez votre expérience, l'organisation, l'assistance de nos guides..."
                    className="w-full p-3 rounded-lg bg-[#F7F8FA] border border-slate-300 text-xs text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227]"
                    required
                  />
                </div>

                <div className="flex items-center justify-end gap-2 pt-2">
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    onClick={() => setShowAddModal(false)}
                  >
                    Annuler
                  </Button>
                  <Button type="submit" variant="gold" size="sm">
                    Soumettre mon avis
                  </Button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
