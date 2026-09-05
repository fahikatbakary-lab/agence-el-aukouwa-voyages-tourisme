import React, { useState, useEffect } from 'react';
import { PageId, OumraOffer, Destination, ServiceItem, Testimonial, FAQItem } from './types';
import { dataStore } from './lib/supabase';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { WhatsAppButton } from './components/common/WhatsAppButton';
import { OumraDetailModal } from './components/modals/OumraDetailModal';
import { DestinationDetailModal } from './components/modals/DestinationDetailModal';

// Pages
import { HomePage } from './pages/HomePage';
import { OumraPage } from './pages/OumraPage';
import { VoyagesPage } from './pages/VoyagesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { ServicesPage } from './pages/ServicesPage';
import { AboutPage } from './pages/AboutPage';
import { GalleryPage } from './pages/GalleryPage';
import { TestimonialsPage } from './pages/TestimonialsPage';
import { FaqPage } from './pages/FaqPage';
import { QuotePage } from './pages/QuotePage';
import { ReservationPage } from './pages/ReservationPage';
import { ContactPage } from './pages/ContactPage';
import { LoginPage } from './pages/LoginPage';
import { AdminDashboard } from './pages/AdminDashboard';
import { LegalPage } from './pages/LegalPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('accueil');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState<boolean>(false);

  // App data loaded from store
  const [offers, setOffers] = useState<OumraOffer[]>(dataStore.getOumraOffers());
  const [destinations, setDestinations] = useState<Destination[]>(dataStore.getDestinations());
  const [services, setServices] = useState<ServiceItem[]>(dataStore.getServices());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(dataStore.getTestimonials());
  const [faqs, setFaqs] = useState<FAQItem[]>(dataStore.getFaqs());
  const [gallery, setGallery] = useState(dataStore.getGallery());

  // Modals state
  const [selectedOumraOffer, setSelectedOumraOffer] = useState<OumraOffer | null>(null);
  const [isOumraModalOpen, setIsOumraModalOpen] = useState<boolean>(false);

  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [isDestinationModalOpen, setIsDestinationModalOpen] = useState<boolean>(false);

  const [bookingOffer, setBookingOffer] = useState<OumraOffer | null>(null);

  const refreshData = () => {
    setOffers(dataStore.getOumraOffers());
    setDestinations(dataStore.getDestinations());
    setServices(dataStore.getServices());
    setTestimonials(dataStore.getTestimonials());
    setFaqs(dataStore.getFaqs());
    setGallery(dataStore.getGallery());
  };

  const handleNavigate = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenOumraModal = (offer: OumraOffer) => {
    setSelectedOumraOffer(offer);
    setIsOumraModalOpen(true);
  };

  const handleOpenDestinationModal = (dest: Destination) => {
    setSelectedDestination(dest);
    setIsDestinationModalOpen(true);
  };

  const handleBookFromCardOrModal = (offer: OumraOffer) => {
    setBookingOffer(offer);
    setIsOumraModalOpen(false);
    handleNavigate('reservation');
  };

  const handleQuoteFromCardOrModal = (offer: OumraOffer) => {
    setIsOumraModalOpen(false);
    handleNavigate('devis');
  };

  const handleDestinationQuote = (dest: Destination) => {
    setIsDestinationModalOpen(false);
    handleNavigate('devis');
  };

  const handleLoginSuccess = (email: string) => {
    setIsAdminLoggedIn(true);
    handleNavigate('admin');
  };

  const handleLogout = () => {
    setIsAdminLoggedIn(false);
    handleNavigate('accueil');
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F8FA] text-[#172033] font-sans antialiased selection:bg-[#C9A227] selection:text-[#0B1F3A]">
      {/* Header Navigation */}
      <Navbar
        currentPage={currentPage}
        onNavigate={handleNavigate}
        isAdminLoggedIn={isAdminLoggedIn}
      />

      {/* Main Page Routing */}
      <main className="flex-1">
        {currentPage === 'accueil' && (
          <HomePage
            offers={offers}
            destinations={destinations}
            services={services}
            testimonials={testimonials}
            faqs={faqs}
            onNavigate={handleNavigate}
            onSelectOffer={handleOpenOumraModal}
            onBookOffer={handleBookFromCardOrModal}
            onExploreDestination={handleOpenDestinationModal}
            onRequestDestinationQuote={handleDestinationQuote}
          />
        )}

        {currentPage === 'oumra' && (
          <OumraPage
            offers={offers}
            faqs={faqs}
            onSelectOffer={handleOpenOumraModal}
            onBookOffer={handleBookFromCardOrModal}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'voyages' && (
          <VoyagesPage
            destinations={destinations}
            onExploreDestination={handleOpenDestinationModal}
            onRequestDestinationQuote={handleDestinationQuote}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'destinations' && (
          <DestinationsPage
            destinations={destinations}
            onExploreDestination={handleOpenDestinationModal}
            onRequestDestinationQuote={handleDestinationQuote}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            services={services}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'a-propos' && (
          <AboutPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'galerie' && (
          <GalleryPage gallery={gallery} onNavigate={handleNavigate} />
        )}

        {currentPage === 'temoignages' && (
          <TestimonialsPage
            testimonials={testimonials}
            onNavigate={handleNavigate}
            onRefreshData={refreshData}
          />
        )}

        {currentPage === 'faq' && (
          <FaqPage faqs={faqs} onNavigate={handleNavigate} />
        )}

        {currentPage === 'devis' && (
          <QuotePage onNavigate={handleNavigate} />
        )}

        {currentPage === 'reservation' && (
          <ReservationPage
            selectedOffer={bookingOffer}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage onNavigate={handleNavigate} />
        )}

        {currentPage === 'connexion' && (
          <LoginPage
            onLogin={handleLoginSuccess}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'admin' && (
          isAdminLoggedIn ? (
            <AdminDashboard
              onLogout={handleLogout}
              onNavigate={handleNavigate}
              onRefreshData={refreshData}
            />
          ) : (
            <LoginPage
              onLogin={handleLoginSuccess}
              onNavigate={handleNavigate}
            />
          )
        )}

        {currentPage === 'mentions-legales' && <LegalPage type="mentions" />}
        {currentPage === 'confidentialite' && <LegalPage type="confidentialite" />}
        {currentPage === 'cgv' && <LegalPage type="cgv" />}
      </main>

      {/* Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppButton />

      {/* Modals */}
      <OumraDetailModal
        offer={selectedOumraOffer}
        isOpen={isOumraModalOpen}
        onClose={() => setIsOumraModalOpen(false)}
        onBook={handleBookFromCardOrModal}
        onQuote={handleQuoteFromCardOrModal}
      />

      <DestinationDetailModal
        destination={selectedDestination}
        isOpen={isDestinationModalOpen}
        onClose={() => setIsDestinationModalOpen(false)}
        onQuote={handleDestinationQuote}
      />
    </div>
  );
}
