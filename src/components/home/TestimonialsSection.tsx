import React from 'react';
import { SectionTitle } from '../common/SectionTitle';
import { TestimonialCard } from '../cards/TestimonialCard';
import { Testimonial, PageId } from '../../types';
import { Button } from '../common/Button';
import { Star, ArrowRight } from 'lucide-react';

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
  onNavigate: (page: PageId) => void;
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  testimonials,
  onNavigate,
}) => {
  const published = testimonials.filter((t) => t.status === 'published').slice(0, 3);

  return (
    <section className="py-20 bg-white border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          badge="Confiance & Sérénité"
          title="Ce que disent nos pèlerins"
          subtitle="Des retours d'expérience authentiques de frères et sœurs ayant accompli leur voyage spirituel avec El Aukouwa."
        />

        {/* Global score pill */}
        <div className="flex items-center justify-center gap-2 mb-10 text-xs font-semibold text-[#0B1F3A] bg-[#C9A227]/15 py-2 px-4 rounded-full max-w-xs mx-auto border border-[#C9A227]/30">
          <div className="flex items-center text-[#C9A227]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-current" />
            ))}
          </div>
          <span>4.9 / 5 sur plus de 1 200 avis pèlerins</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {published.map((item) => (
            <TestimonialCard key={item.id} testimonial={item} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="md"
            onClick={() => onNavigate('temoignages')}
            icon={<ArrowRight className="w-4 h-4" />}
          >
            Lire tous les témoignages et avis
          </Button>
        </div>
      </div>
    </section>
  );
};
