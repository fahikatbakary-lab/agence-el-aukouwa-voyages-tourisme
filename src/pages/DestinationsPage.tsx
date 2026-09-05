import React, { useState } from 'react';
import { Destination, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { DestinationCard } from '../components/cards/DestinationCard';
import { Button } from '../components/common/Button';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { MapPin, Search } from 'lucide-react';

interface DestinationsPageProps {
  destinations: Destination[];
  onExploreDestination: (dest: Destination) => void;
  onRequestDestinationQuote: (dest: Destination) => void;
  onNavigate: (page: PageId) => void;
}

export const DestinationsPage: React.FC<DestinationsPageProps> = ({
  destinations,
  onExploreDestination,
  onRequestDestinationQuote,
  onNavigate,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'all', label: 'Toutes les destinations' },
    { id: 'Moyen-Orient', label: 'Moyen-Orient' },
    { id: 'Asie & Océanie', label: 'Asie & Océanie' },
    { id: 'Afrique & Maghreb', label: 'Afrique & Maghreb' },
    { id: 'Europe', label: 'Europe' },
  ];

  const filtered = destinations.filter((dest) => {
    const matchCat = selectedCategory === 'all' || dest.category === selectedCategory;
    const matchSearch =
      dest.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.country.toLowerCase().includes(searchQuery.toLowerCase()) ||
      dest.city.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <div className="py-12 sm:py-16 space-y-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Catalogue Officiel</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Toutes nos Destinations & Circuits
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Sélectionnez la destination de vos rêves et demandez votre devis personnalisé en quelques clics.
        </p>

        {/* Search and Filters */}
        <div className="mt-8 max-w-xl mx-auto flex gap-2">
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un pays, une ville..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-white border border-slate-300 text-xs sm:text-sm text-[#172033] focus:outline-none focus:ring-2 focus:ring-[#C9A227] shadow-2xs"
            />
          </div>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F3A] text-[#E5C766] shadow-xs'
                  : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((dest) => (
              <DestinationCard
                key={dest.id}
                destination={dest}
                onExplore={onExploreDestination}
                onRequestQuote={onRequestDestinationQuote}
              />
            ))}
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-12 text-center border border-slate-200 max-w-md mx-auto">
            <p className="text-sm font-semibold text-[#0B1F3A]">Aucune destination trouvée</p>
            <p className="text-xs text-[#667085] mt-1">Essayez un autre mot-clé ou réinitialisez les filtres.</p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
            >
              Réinitialiser
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};
