import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { DestinationCard } from '../cards/DestinationCard';
import { Destination, PageId } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

interface DestinationsSectionProps {
  destinations: Destination[];
  onExplore: (dest: Destination) => void;
  onRequestQuote: (dest: Destination) => void;
  onNavigate: (page: PageId) => void;
}

export const DestinationsSection: React.FC<DestinationsSectionProps> = ({
  destinations,
  onExplore,
  onRequestQuote,
  onNavigate,
}) => {
  const displayDestinations = destinations.slice(0, 3);

  return (
    <section className="py-20 bg-[#F7F8FA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Voyages Internationaux"
          title="Explorez nos destinations d'exception"
          subtitle="Circuits culturels, escapades familiales et séjours combinés à travers le monde organisés avec la même rigueur."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayDestinations.map((dest) => (
            <DestinationCard
              key={dest.id}
              destination={dest}
              onExplore={onExplore}
              onRequestQuote={onRequestQuote}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="primary"
            size="lg"
            onClick={() => onNavigate('destinations')}
            icon={<ArrowRight className="w-4 h-4 text-[#C9A227]" />}
          >
            Explorer toutes nos destinations
          </Button>
        </div>
      </div>
    </section>
  );
};
