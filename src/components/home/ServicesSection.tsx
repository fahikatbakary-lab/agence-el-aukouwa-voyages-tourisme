import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { ServiceCard } from '../cards/ServiceCard';
import { ServiceItem, PageId } from '../../types';
import { Button } from '../common/Button';
import { ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  services: ServiceItem[];
  onNavigate: (page: PageId) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ services, onNavigate }) => {
  return (
    <section className="py-20 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Expertise & Prestations"
          title="Des services sur-mesure pour votre voyage"
          subtitle="De la réservation des vols jusqu'à l'accompagnement médical sur place, notre agence s'occupe de tout."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              service={service}
              onSelect={() => onNavigate('services')}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('services')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Découvrir tous nos services en détail
          </Button>
        </div>
      </div>
    </section>
  );
};
