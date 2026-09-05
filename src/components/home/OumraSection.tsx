import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { OumraCard } from '../cards/OumraCard';
import { OumraOffer, PageId } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

interface OumraSectionProps {
  offers: OumraOffer[];
  onSelectOffer: (offer: OumraOffer) => void;
  onBookOffer: (offer: OumraOffer) => void;
  onNavigate: (page: PageId) => void;
}

export const OumraSection: React.FC<OumraSectionProps> = ({
  offers,
  onSelectOffer,
  onBookOffer,
  onNavigate,
}) => {
  // Show up to 3 main offers on home page (Essentielle, Confort, Premium)
  const displayOffers = offers.slice(0, 3);

  return (
    <section className="py-20 bg-[#F7F8FA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Pèlerinage Sacré"
          title="Accomplissez votre Oumra en toute sérénité"
          subtitle="Découvrez nos formules spécialement conçues pour répondre à toutes vos exigences de proximité, de confort et d'encadrement spirituel."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayOffers.map((offer) => (
            <OumraCard
              key={offer.id}
              offer={offer}
              onSelect={onSelectOffer}
              onBook={onBookOffer}
            />
          ))}
        </div>

        {/* View All CTA */}
        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('oumra')}
            icon={<ArrowRight className="w-4 h-4 text-[#C9A227]" />}
          >
            Voir toutes les offres et formules Oumra
          </Button>
        </div>
      </div>
    </section>
  );
};
