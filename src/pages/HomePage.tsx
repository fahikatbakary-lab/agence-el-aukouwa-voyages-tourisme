import React from 'react';
import { PageId, OumraOffer, Destination, ServiceItem, Testimonial, FAQItem } from '../types';
import { Hero } from '../components/home/Hero';
import { ProcessSection } from '../components/home/ProcessSection';
import { OumraSection } from '../components/home/OumraSection';
import { ServicesSection } from '../components/home/ServicesSection';
import { DestinationsSection } from '../components/home/DestinationsSection';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { FaqSection } from '../components/home/FaqSection';
import { CtaBanner } from '../components/home/CtaBanner';

interface HomePageProps {
  offers: OumraOffer[];
  destinations: Destination[];
  services: ServiceItem[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  onNavigate: (page: PageId) => void;
  onSelectOffer: (offer: OumraOffer) => void;
  onBookOffer: (offer: OumraOffer) => void;
  onExploreDestination: (dest: Destination) => void;
  onRequestDestinationQuote: (dest: Destination) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  offers,
  destinations,
  services,
  testimonials,
  faqs,
  onNavigate,
  onSelectOffer,
  onBookOffer,
  onExploreDestination,
  onRequestDestinationQuote,
}) => {
  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero onNavigate={onNavigate} />

      {/* 2. Oumra Offers Highlight */}
      <OumraSection
        offers={offers}
        onSelectOffer={onSelectOffer}
        onBookOffer={onBookOffer}
        onNavigate={onNavigate}
      />

      {/* 3. 6-Step Travel Process */}
      <ProcessSection />

      {/* 4. Services Overview */}
      <ServicesSection
        services={services}
        onNavigate={onNavigate}
      />

      {/* 5. International Destinations */}
      <DestinationsSection
        destinations={destinations}
        onExplore={onExploreDestination}
        onRequestQuote={onRequestDestinationQuote}
        onNavigate={onNavigate}
      />

      {/* 6. Testimonials */}
      <TestimonialsSection
        testimonials={testimonials}
        onNavigate={onNavigate}
      />

      {/* 7. FAQ */}
      <FaqSection
        faqs={faqs}
        onNavigate={onNavigate}
      />

      {/* 8. Call to Action Banner */}
      <CtaBanner onNavigate={onNavigate} />
    </div>
  );
};
