import React, { useState } from 'react';
import { GalleryItem, PageId } from '../types';
import { SectionTitle } from '../components/common/SectionTitle';
import { Lightbox } from '../components/common/Lightbox';
import { IslamicDivider } from '../components/common/IslamicPattern';
import { Camera, Eye, MapPin } from 'lucide-react';

interface GalleryPageProps {
  gallery: GalleryItem[];
  onNavigate: (page: PageId) => void;
}

export const GalleryPage: React.FC<GalleryPageProps> = ({ gallery }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = [
    { id: 'all', label: 'Toutes les photos' },
    { id: 'La Mecque', label: 'La Mecque' },
    { id: 'Médine', label: 'Médine' },
    { id: 'Hôtels', label: 'Hôtels & Suites' },
    { id: 'Pèlerins', label: 'Moments Pèlerins' },
  ];

  const filtered = selectedCategory === 'all'
    ? gallery
    : gallery.filter(g => g.category === selectedCategory);

  return (
    <div className="py-12 sm:py-16 space-y-12">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#0B1F3A]/5 border border-[#0B1F3A]/10 text-[#0B1F3A] text-xs font-semibold uppercase tracking-wider mb-4">
          <Camera className="w-3.5 h-3.5 text-[#C9A227]" />
          <span>Moments Spirituels & Souvenirs</span>
        </div>
        <h1 className="font-serif-title text-3xl sm:text-5xl font-extrabold text-[#0B1F3A] tracking-tight">
          Galerie Photos & Immersion en Terre Sainte
        </h1>
        <IslamicDivider className="my-4" />
        <p className="text-sm sm:text-base text-[#667085] max-w-2xl mx-auto leading-relaxed">
          Plongez au cœur des Lieux Saints, de nos hôtels partenaires et de la ferveur partagée par nos groupes de pèlerins.
        </p>

        {/* Category filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                selectedCategory === cat.id
                  ? 'bg-[#0B1F3A] text-[#E5C766] shadow-sm'
                  : 'bg-white text-[#172033] hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Masonry/Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map((item, index) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(index)}
              className="group relative rounded-2xl overflow-hidden cursor-pointer bg-slate-900 aspect-4/3 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <img
                src={item.imageUrl}
                alt={item.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-90 group-hover:opacity-100"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex flex-col justify-end p-4 text-white">
                <span className="text-[10px] uppercase font-bold text-[#E5C766] tracking-wider">
                  {item.category}
                </span>
                <h4 className="font-serif-title text-sm font-bold text-white mt-0.5 leading-tight">
                  {item.title}
                </h4>
                {item.location && (
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 mt-1">
                    <MapPin className="w-3 h-3 text-[#C9A227]" />
                    <span>{item.location}</span>
                  </p>
                )}
                <div className="mt-2 flex items-center gap-1 text-[11px] text-[#E5C766] font-semibold">
                  <Eye className="w-3.5 h-3.5" />
                  <span>Agrandir</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox component */}
      <Lightbox
        images={filtered.map(f => ({
          url: f.imageUrl,
          title: f.title,
          category: f.category,
          caption: f.caption,
        }))}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNavigate={(newIdx) => setLightboxIndex(newIdx)}
      />
    </div>
  );
};
