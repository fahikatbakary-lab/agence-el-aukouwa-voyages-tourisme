import React, { useState } from 'react';
import { 
  OumraOffer, 
  Destination, 
  Reservation, 
  QuoteRequest, 
  Testimonial, 
  ContactMessage, 
  PageId 
} from '../types';
import { dataStore, SUPABASE_SCHEMA_SQL } from '../lib/supabase';
import { Button } from '../components/common/Button';
import { 
  LayoutDashboard, 
  MoonStar, 
  FileText, 
  CalendarCheck, 
  MessageSquare, 
  Mail, 
  Database, 
  LogOut, 
  Plus, 
  Check, 
  X, 
  Trash2, 
  Edit3, 
  Eye, 
  Sparkles, 
  Copy, 
  ExternalLink,
  ShieldAlert
} from 'lucide-react';

interface AdminDashboardProps {
  onLogout: () => void;
  onNavigate: (page: PageId) => void;
  onRefreshData: () => void;
}

export const AdminDashboard: React.FC<AdminDashboardProps> = ({
  onLogout,
  onNavigate,
  onRefreshData,
}) => {
  const [activeTab, setActiveTab] = useState<'overview' | 'oumra' | 'reservations' | 'quotes' | 'testimonials' | 'messages' | 'database'>('overview');

  // Local states from store
  const [offers, setOffers] = useState<OumraOffer[]>(dataStore.getOumraOffers());
  const [reservations, setReservations] = useState<Reservation[]>(dataStore.getReservations());
  const [quotes, setQuotes] = useState<QuoteRequest[]>(dataStore.getQuotes());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(dataStore.getTestimonials());
  const [messages, setMessages] = useState<ContactMessage[]>(dataStore.getMessages());

  const [copiedSql, setCopiedSql] = useState(false);

  // New Oumra Offer Form Modal state
  const [isAddingOffer, setIsAddingOffer] = useState(false);
  const [newTitle, setNewTitle] = useState('');
  const [newFormula, setNewFormula] = useState<'Essentielle' | 'Confort' | 'Premium' | 'Ramadan'>('Confort');
  const [newDuration, setNewDuration] = useState('15 Jours / 14 Nuits');
  const [newPrice, setNewPrice] = useState<number>(1850000);
  const [newHotelMakkah, setNewHotelMakkah] = useState('Hôtel Al-Shohada Makkah 5★');
  const [newHotelMadinah, setNewHotelMadinah] = useState('Hôtel Anwar Al-Madinah Mövenpick 5★');
  const [newDesc, setNewDesc] = useState('');

  const refreshLocalData = () => {
    setOffers(dataStore.getOumraOffers());
    setReservations(dataStore.getReservations());
    setQuotes(dataStore.getQuotes());
    setTestimonials(dataStore.getTestimonials());
    setMessages(dataStore.getMessages());
    onRefreshData();
  };

  const handleUpdateReservationStatus = (id: string, status: Reservation['status']) => {
    dataStore.updateReservationStatus(id, status);
    refreshLocalData();
  };

  const handleUpdateQuoteStatus = (id: string, status: QuoteRequest['status']) => {
    dataStore.updateQuoteStatus(id, status);
    refreshLocalData();
  };

  const handleUpdateTestimonialStatus = (id: string, status: Testimonial['status']) => {
    dataStore.updateTestimonialStatus(id, status);
    refreshLocalData();
  };

  const handleCreateOffer = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;

    dataStore.addOumraOffer({
      title: newTitle,
      slug: newTitle.toLowerCase().replace(/\s+/g, '-'),
      formula: newFormula,
      duration: newDuration,
      price: newPrice,
      currency: 'FCFA',
      hotelMakkah: newHotelMakkah,
      hotelMakkahDistance: '250m du Haram',
      hotelMadinah: newHotelMadinah,
      hotelMadinahDistance: '150m du Haram',
      flightType: 'Vol direct ou 1 escale',
      features: ['Hôtels vérifiés', 'Proximité des Harams', 'Accompagnement religieux', 'Assistance 24/7'],
      departureDates: ['15 Nov 2026', '01 Déc 2026'],
      included: ['Vols Aller-Retour', 'Visa officiel Oumra', 'Hôtels 4★/5★', 'Transferts Haramain', 'Guide religieux francophone & wolof'],
      notIncluded: ['Dépenses personnelles', 'Assurance annulation optionnelle'],
      isPopular: false,
      status: 'published',
      imageUrl: 'https://images.unsplash.com/photo-1565552684305-7e90c6411516?auto=format&fit=crop&w=800&q=80',
      description: newDesc || 'Offre complète avec hébergement de haute qualité.',
    });

    setIsAddingOffer(false);
    setNewTitle('');
    setNewDesc('');
    refreshLocalData();
  };

  const copySqlToClipboard = () => {
    navigator.clipboard.writeText(SUPABASE_SCHEMA_SQL);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 2000);
  };

  // Metrics
  const pendingReservationsCount = reservations.filter(r => r.status === 'pending').length;
  const pendingQuotesCount = quotes.filter(q => q.status === 'pending').length;
  const pendingTestimonialsCount = testimonials.filter(t => t.status === 'pending').length;

  return (
    <div className="bg-[#F7F8FA] min-h-screen pb-20">
      {/* Top Admin Header */}
      <div className="bg-[#0B1F3A] text-white border-b border-[#C9A227]/30 px-4 sm:px-8 py-4 sticky top-0 z-30 shadow-md">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 bg-[#C9A227] text-[#0B1F3A] text-xs font-extrabold uppercase rounded">
              Back-Office
            </span>
            <h1 className="font-serif-title text-base sm:text-lg font-bold text-white tracking-wide hidden sm:block">
              El Aukouwa — Administration Supabase
            </h1>
          </div>

          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              size="sm"
              onClick={() => onNavigate('accueil')}
              className="text-white border-white/20 hover:bg-white/10 text-xs"
            >
              Voir le site public
            </Button>

            <button
              onClick={onLogout}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-rose-600/20 text-rose-300 hover:bg-rose-600 hover:text-white transition-all text-xs font-semibold border border-rose-500/30"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Déconnexion</span>
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Navigation Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-200 pb-4 mb-8">
          <button
            onClick={() => setActiveTab('overview')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'overview'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <LayoutDashboard className="w-4 h-4" />
            <span>Vue d'ensemble</span>
          </button>

          <button
            onClick={() => setActiveTab('reservations')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all relative ${
              activeTab === 'reservations'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Réservations</span>
            {pendingReservationsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-amber-500 text-white text-[10px] flex items-center justify-center font-bold">
                {pendingReservationsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('quotes')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'quotes'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <FileText className="w-4 h-4" />
            <span>Demandes de Devis</span>
            {pendingQuotesCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-[#C9A227] text-[#0B1F3A] text-[10px] flex items-center justify-center font-bold">
                {pendingQuotesCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('oumra')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'oumra'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MoonStar className="w-4 h-4" />
            <span>Offres Oumra ({offers.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'testimonials'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <MessageSquare className="w-4 h-4" />
            <span>Avis & Témoignages</span>
            {pendingTestimonialsCount > 0 && (
              <span className="w-5 h-5 rounded-full bg-rose-500 text-white text-[10px] flex items-center justify-center font-bold">
                {pendingTestimonialsCount}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('messages')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'messages'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Mail className="w-4 h-4" />
            <span>Messages ({messages.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('database')}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
              activeTab === 'database'
                ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
            }`}
          >
            <Database className="w-4 h-4 text-[#C9A227]" />
            <span>Schéma Supabase SQL</span>
          </button>
        </div>

        {/* 1. OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-8 animate-fadeIn">
            {/* Stat Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#667085] uppercase">Réservations</span>
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <CalendarCheck className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-serif-title text-2xl font-bold text-[#0B1F3A] block">
                  {reservations.length}
                </span>
                <span className="text-[11px] text-amber-600 font-medium block mt-1">
                  {pendingReservationsCount} en attente de validation
                </span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#667085] uppercase">Demandes Devis</span>
                  <div className="w-8 h-8 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center">
                    <FileText className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-serif-title text-2xl font-bold text-[#0B1F3A] block">
                  {quotes.length}
                </span>
                <span className="text-[11px] text-amber-600 font-medium block mt-1">
                  {pendingQuotesCount} nouvelles demandes
                </span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#667085] uppercase">Offres Oumra</span>
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center">
                    <MoonStar className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-serif-title text-2xl font-bold text-[#0B1F3A] block">
                  {offers.length}
                </span>
                <span className="text-[11px] text-emerald-600 font-medium block mt-1">
                  Catalogue actif
                </span>
              </div>

              <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-[#667085] uppercase">Avis Pèlerins</span>
                  <div className="w-8 h-8 rounded-lg bg-rose-50 text-rose-700 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                </div>
                <span className="font-serif-title text-2xl font-bold text-[#0B1F3A] block">
                  {testimonials.length}
                </span>
                <span className="text-[11px] text-rose-600 font-medium block mt-1">
                  {pendingTestimonialsCount} à modérer
                </span>
              </div>
            </div>

            {/* Quick action alert */}
            <div className="p-6 rounded-2xl bg-[#0B1F3A] text-white border border-[#C9A227]/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <div>
                <h3 className="font-serif-title text-lg font-bold text-white flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#E5C766]" />
                  <span>Prêt pour le déploiement Supabase en production</span>
                </h3>
                <p className="text-xs text-slate-300 mt-1">
                  Le schéma SQL complet avec politiques RLS de sécurité (Row Level Security) est accessible dans l'onglet Dédié.
                </p>
              </div>
              <Button
                variant="gold"
                size="sm"
                onClick={() => setActiveTab('database')}
              >
                Consulter le SQL Supabase
              </Button>
            </div>

            {/* Recent Reservations table preview */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-serif-title text-base font-bold text-[#0B1F3A]">
                  Dernières réservations reçues
                </h3>
                <button
                  onClick={() => setActiveTab('reservations')}
                  className="text-xs text-[#C9A227] font-semibold hover:underline"
                >
                  Voir tout ({reservations.length}) →
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#F7F8FA] text-[#667085] uppercase tracking-wider font-semibold border-b border-slate-200">
                    <tr>
                      <th className="p-3">Réf</th>
                      <th className="p-3">Client</th>
                      <th className="p-3">Offre</th>
                      <th className="p-3">Date</th>
                      <th className="p-3">Statut</th>
                      <th className="p-3 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {reservations.slice(0, 4).map((r) => (
                      <tr key={r.id} className="hover:bg-slate-50">
                        <td className="p-3 font-mono font-bold text-[#0B1F3A]">{r.referenceNumber}</td>
                        <td className="p-3 font-semibold text-[#172033]">{r.fullName} ({r.travelersCount} pers)</td>
                        <td className="p-3 text-[#667085]">{r.offerTitle}</td>
                        <td className="p-3 text-[#667085]">{r.desiredDate}</td>
                        <td className="p-3">
                          <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] ${
                            r.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                            r.status === 'cancelled' ? 'bg-rose-100 text-rose-800' :
                            'bg-amber-100 text-amber-800'
                          }`}>
                            {r.status}
                          </span>
                        </td>
                        <td className="p-3 text-right space-x-1">
                          <button
                            onClick={() => handleUpdateReservationStatus(r.id, 'confirmed')}
                            className="p-1 rounded bg-emerald-50 text-emerald-700 hover:bg-emerald-100"
                            title="Confirmer"
                          >
                            <Check className="w-3.5 h-3.5" />
                          </button>
                          <button
                            onClick={() => handleUpdateReservationStatus(r.id, 'cancelled')}
                            className="p-1 rounded bg-rose-50 text-rose-700 hover:bg-rose-100"
                            title="Annuler"
                          >
                            <X className="w-3.5 h-3.5" />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* 2. RESERVATIONS TAB */}
        {activeTab === 'reservations' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
                Gestion des Réservations ({reservations.length})
              </h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F8FA] text-[#667085] uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Référence</th>
                    <th className="p-3">Client & Contact</th>
                    <th className="p-3">Offre & Nb</th>
                    <th className="p-3">Départ & Date</th>
                    <th className="p-3">Statut</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {reservations.map((res) => (
                    <tr key={res.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-[#0B1F3A]">{res.referenceNumber}</td>
                      <td className="p-3">
                        <div className="font-semibold text-[#172033]">{res.fullName}</div>
                        <div className="text-[11px] text-[#667085]">{res.phone} • {res.email}</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium text-[#0B1F3A]">{res.offerTitle}</div>
                        <div className="text-[11px] text-[#667085]">{res.travelersCount} voyageur(s)</div>
                      </td>
                      <td className="p-3">
                        <div>{res.cityOfDeparture}</div>
                        <div className="text-[11px] text-[#667085]">{res.desiredDate}</div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          res.status === 'confirmed' ? 'bg-emerald-100 text-emerald-800' :
                          res.status === 'cancelled' ? 'bg-rose-100 text-rose-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {res.status.toUpperCase()}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <button
                          onClick={() => handleUpdateReservationStatus(res.id, 'confirmed')}
                          className="px-2 py-1 rounded bg-emerald-600 text-white hover:bg-emerald-700 text-[11px] font-bold"
                        >
                          Confirmer
                        </button>
                        <button
                          onClick={() => handleUpdateReservationStatus(res.id, 'cancelled')}
                          className="px-2 py-1 rounded bg-rose-600 text-white hover:bg-rose-700 text-[11px] font-bold"
                        >
                          Annuler
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 3. QUOTES TAB */}
        {activeTab === 'quotes' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
            <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
              Demandes de Devis ({quotes.length})
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead className="bg-[#F7F8FA] text-[#667085] uppercase tracking-wider font-semibold border-b border-slate-200">
                  <tr>
                    <th className="p-3">Réf</th>
                    <th className="p-3">Demandeur</th>
                    <th className="p-3">Destination / Formule</th>
                    <th className="p-3">Nb Pers & Date</th>
                    <th className="p-3">Statut</th>
                    <th className="p-3 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {quotes.map((q) => (
                    <tr key={q.id} className="hover:bg-slate-50">
                      <td className="p-3 font-mono font-bold text-[#0B1F3A]">{q.referenceNumber}</td>
                      <td className="p-3">
                        <div className="font-semibold text-[#172033]">{q.fullName}</div>
                        <div className="text-[11px] text-[#667085]">{q.phone} • {q.email} ({q.country})</div>
                      </td>
                      <td className="p-3">
                        <div className="font-medium text-[#0B1F3A]">{q.destination}</div>
                        <div className="text-[11px] text-[#C9A227] font-semibold">{q.formula}</div>
                      </td>
                      <td className="p-3">
                        <div>{q.travelersCount} personnes</div>
                        <div className="text-[11px] text-[#667085]">{q.desiredDate}</div>
                      </td>
                      <td className="p-3">
                        <span className={`px-2.5 py-1 rounded-full font-bold text-[10px] ${
                          q.status === 'contacted' ? 'bg-blue-100 text-blue-800' :
                          q.status === 'closed' ? 'bg-slate-200 text-slate-800' :
                          'bg-amber-100 text-amber-800'
                        }`}>
                          {q.status}
                        </span>
                      </td>
                      <td className="p-3 text-right space-x-1">
                        <button
                          onClick={() => handleUpdateQuoteStatus(q.id, 'contacted')}
                          className="px-2 py-1 rounded bg-blue-600 text-white text-[11px] font-bold"
                        >
                          Marquer Contacté
                        </button>
                        <button
                          onClick={() => handleUpdateQuoteStatus(q.id, 'closed')}
                          className="px-2 py-1 rounded bg-slate-600 text-white text-[11px] font-bold"
                        >
                          Clôturer
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* 4. OUMRA OFFERS TAB */}
        {activeTab === 'oumra' && (
          <div className="space-y-6 animate-fadeIn">
            <div className="flex items-center justify-between">
              <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
                Offres & Packages Oumra ({offers.length})
              </h2>
              <Button
                variant="gold"
                size="sm"
                onClick={() => setIsAddingOffer(true)}
                icon={<Plus className="w-4 h-4" />}
              >
                Créer une nouvelle offre
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {offers.map((offer) => (
                <div key={offer.id} className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="px-2.5 py-0.5 bg-[#0B1F3A] text-[#E5C766] text-[10px] font-bold uppercase rounded">
                        {offer.formula}
                      </span>
                      <span className="text-xs font-bold text-[#0B1F3A]">
                        {offer.price.toLocaleString()} {offer.currency}
                      </span>
                    </div>

                    <h3 className="font-serif-title text-base font-bold text-[#0B1F3A] mb-1">
                      {offer.title}
                    </h3>
                    <p className="text-xs text-[#667085] line-clamp-2 mb-3">
                      {offer.description}
                    </p>

                    <div className="text-[11px] text-[#172033] space-y-1 bg-[#F7F8FA] p-3 rounded-lg border border-slate-100">
                      <div>📍 <strong>Makkah :</strong> {offer.hotelMakkah} ({offer.hotelMakkahDistance})</div>
                      <div>📍 <strong>Médine :</strong> {offer.hotelMadinah} ({offer.hotelMadinahDistance})</div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                    <span className="text-emerald-700 font-semibold">● Publiée sur le site</span>
                    <button
                      onClick={() => {
                        dataStore.deleteOumraOffer(offer.id);
                        refreshLocalData();
                      }}
                      className="text-rose-600 hover:text-rose-800 p-1"
                      title="Supprimer l'offre"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Modal Add Offer */}
            {isAddingOffer && (
              <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
                <div className="bg-white rounded-2xl p-6 sm:p-8 max-w-lg w-full border border-slate-200 shadow-2xl">
                  <h3 className="font-serif-title text-lg font-bold text-[#0B1F3A] mb-4">
                    Ajouter une formule Oumra
                  </h3>

                  <form onSubmit={handleCreateOffer} className="space-y-3 text-xs">
                    <div>
                      <label className="font-bold text-[#0B1F3A] block mb-1">Titre de l'offre *</label>
                      <input
                        type="text"
                        value={newTitle}
                        onChange={(e) => setNewTitle(e.target.value)}
                        placeholder="Ex: Oumra Confort Décembre 2026"
                        className="w-full p-2.5 border border-slate-300 rounded-lg"
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="font-bold text-[#0B1F3A] block mb-1">Formule</label>
                        <select
                          value={newFormula}
                          onChange={(e) => setNewFormula(e.target.value as any)}
                          className="w-full p-2.5 border border-slate-300 rounded-lg"
                        >
                          <option value="Essentielle">Essentielle</option>
                          <option value="Confort">Confort</option>
                          <option value="Premium">Premium</option>
                          <option value="Ramadan">Ramadan</option>
                        </select>
                      </div>

                      <div>
                        <label className="font-bold text-[#0B1F3A] block mb-1">Prix (FCFA)</label>
                        <input
                          type="number"
                          value={newPrice}
                          onChange={(e) => setNewPrice(parseInt(e.target.value) || 0)}
                          className="w-full p-2.5 border border-slate-300 rounded-lg"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="font-bold text-[#0B1F3A] block mb-1">Hôtel La Mecque</label>
                      <input
                        type="text"
                        value={newHotelMakkah}
                        onChange={(e) => setNewHotelMakkah(e.target.value)}
                        className="w-full p-2.5 border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#0B1F3A] block mb-1">Hôtel Médine</label>
                      <input
                        type="text"
                        value={newHotelMadinah}
                        onChange={(e) => setNewHotelMadinah(e.target.value)}
                        className="w-full p-2.5 border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div>
                      <label className="font-bold text-[#0B1F3A] block mb-1">Description</label>
                      <textarea
                        rows={2}
                        value={newDesc}
                        onChange={(e) => setNewDesc(e.target.value)}
                        className="w-full p-2.5 border border-slate-300 rounded-lg"
                      />
                    </div>

                    <div className="flex justify-end gap-2 pt-3">
                      <Button variant="outline" size="sm" onClick={() => setIsAddingOffer(false)}>
                        Annuler
                      </Button>
                      <Button type="submit" variant="gold" size="sm">
                        Enregistrer l'offre
                      </Button>
                    </div>
                  </form>
                </div>
              </div>
            )}
          </div>
        )}

        {/* 5. TESTIMONIALS MODERATION TAB */}
        {activeTab === 'testimonials' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
            <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
              Modération des Avis & Témoignages ({testimonials.length})
            </h2>

            <div className="space-y-3">
              {testimonials.map((t) => (
                <div key={t.id} className="p-4 rounded-xl border border-slate-200 bg-[#F7F8FA] flex flex-col sm:flex-row justify-between gap-4 items-start">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-bold text-sm text-[#0B1F3A]">{t.authorName}</span>
                      <span className="text-xs text-[#667085]">({t.cityCountry} - {t.formula})</span>
                      <span className={`px-2 py-0.5 text-[10px] font-bold rounded-full ${
                        t.status === 'published' ? 'bg-emerald-100 text-emerald-800' :
                        t.status === 'rejected' ? 'bg-rose-100 text-rose-800' :
                        'bg-amber-100 text-amber-800'
                      }`}>
                        {t.status}
                      </span>
                    </div>
                    <p className="text-xs text-[#172033] italic">"{t.comment}"</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <button
                      onClick={() => handleUpdateTestimonialStatus(t.id, 'published')}
                      className="px-3 py-1 bg-emerald-600 text-white rounded-lg text-xs font-bold hover:bg-emerald-700"
                    >
                      Approuver
                    </button>
                    <button
                      onClick={() => handleUpdateTestimonialStatus(t.id, 'rejected')}
                      className="px-3 py-1 bg-rose-600 text-white rounded-lg text-xs font-bold hover:bg-rose-700"
                    >
                      Rejeter
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 6. CONTACT MESSAGES TAB */}
        {activeTab === 'messages' && (
          <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4 animate-fadeIn">
            <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A]">
              Boîte de réception des messages ({messages.length})
            </h2>

            <div className="space-y-3">
              {messages.map((m) => (
                <div key={m.id} className="p-4 rounded-xl border border-slate-200 bg-[#F7F8FA] space-y-1">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-xs text-[#0B1F3A]">{m.fullName} ({m.email})</span>
                    <span className="text-[10px] text-[#667085]">{m.createdAt}</span>
                  </div>
                  <span className="px-2 py-0.5 bg-[#0B1F3A]/5 text-[#0B1F3A] text-[10px] font-bold rounded inline-block">
                    Objet : {m.subject}
                  </span>
                  <p className="text-xs text-[#172033] pt-1 leading-relaxed">
                    {m.message}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 7. SUPABASE DATABASE TAB */}
        {activeTab === 'database' && (
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6 animate-fadeIn">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h2 className="font-serif-title text-xl font-bold text-[#0B1F3A] flex items-center gap-2">
                  <Database className="w-5 h-5 text-[#C9A227]" />
                  <span>Schéma Supabase & Politiques RLS PostgreSQL</span>
                </h2>
                <p className="text-xs text-[#667085] mt-1">
                  Copiez ce script SQL et exécutez-le dans le SQL Editor de votre projet Supabase.
                </p>
              </div>

              <Button
                variant="gold"
                size="sm"
                onClick={copySqlToClipboard}
                icon={<Copy className="w-3.5 h-3.5" />}
              >
                {copiedSql ? 'Copié dans le presse-papier !' : 'Copier le script SQL'}
              </Button>
            </div>

            <div className="bg-slate-950 text-slate-200 p-4 rounded-xl text-xs font-mono overflow-x-auto max-h-[500px] border border-slate-800">
              <pre>{SUPABASE_SCHEMA_SQL}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
