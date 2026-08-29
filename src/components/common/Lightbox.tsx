import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import { GalleryItem } from '../../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  isOpen,
  onClose,
  onNavigate,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') onNavigate((currentIndex + 1) % items.length);
      if (e.key === 'ArrowLeft') onNavigate((currentIndex - 1 + items.length) % items.length);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentIndex, items.length, onClose, onNavigate]);

  if (!isOpen || items.length === 0) return null;

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 sm:p-6 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors z-50 focus:outline-none"
        aria-label="Fermer la vue plein écran"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Navigation Left */}
      <button
        onClick={() => onNavigate((currentIndex - 1 + items.length) % items.length)}
        className="absolute left-4 sm:left-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all z-50 focus:outline-none hidden sm:flex"
        aria-label="Image précédente"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Navigation Right */}
      <button
        onClick={() => onNavigate((currentIndex + 1) % items.length)}
        className="absolute right-4 sm:right-6 p-3 rounded-full bg-white/10 text-white hover:bg-[#C9A227] hover:text-[#0B1F3A] transition-all z-50 focus:outline-none hidden sm:flex"
        aria-label="Image suivante"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Content Container */}
      <div className="max-w-5xl w-full flex flex-col items-center">
        <div className="relative w-full max-h-[75vh] flex items-center justify-center overflow-hidden rounded-lg shadow-2xl">
          <img
            src={currentItem.imageUrl}
            alt={currentItem.title}
            className="max-h-[75vh] w-auto max-w-full object-contain rounded-lg border border-[#C9A227]/30"
          />
        </div>

        {/* Caption */}
        <div className="w-full mt-4 text-center text-white">
          <div className="inline-block px-3 py-1 bg-[#C9A227]/20 border border-[#C9A227]/40 rounded-full text-xs font-semibold text-[#E5C766] mb-2 uppercase tracking-wider">
            {currentItem.category}
          </div>
          <h3 className="font-serif-title text-xl font-bold text-white mb-1">
            {currentItem.title}
          </h3>
          {currentItem.location && (
            <p className="flex items-center justify-center gap-1.5 text-xs text-[#F7F8FA]/70">
              <MapPin className="w-3.5 h-3.5 text-[#C9A227]" />
              {currentItem.location}
            </p>
          )}
          {currentItem.description && (
            <p className="text-sm text-slate-300 max-w-xl mx-auto mt-2">
              {currentItem.description}
            </p>
          )}
          <p className="text-xs text-slate-400 mt-2 font-mono">
            {currentIndex + 1} / {items.length}
          </p>
        </div>
      </div>
    </div>
  );
};
