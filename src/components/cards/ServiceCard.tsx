import React from 'react';
import { MoonStar, Building, Bus, HeartHandshake, Plane, FileText, CheckCircle2, LucideIcon } from 'lucide-react';
import { ServiceItem } from '../../types';

const iconMap: Record<string, LucideIcon> = {
  MoonStar,
  Building,
  Bus,
  HeartHandshake,
  Plane,
  FileText,
};

interface ServiceCardProps {
  service: ServiceItem;
  onSelect?: (service: ServiceItem) => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ service, onSelect }) => {
  const IconComponent = iconMap[service.icon] || MoonStar;

  return (
    <div className="bg-white rounded-xl p-6 sm:p-7 border border-slate-200 hover:border-[#C9A227]/50 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 relative overflow-hidden">
      {/* Subtle gold top line on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-transparent group-hover:bg-[#C9A227] transition-colors" />

      <div>
        <div className="w-12 h-12 rounded-full bg-[#0B1F3A]/5 border border-[#C9A227]/30 group-hover:bg-[#0B1F3A] group-hover:border-[#C9A227] flex items-center justify-center text-[#0B1F3A] group-hover:text-[#E5C766] transition-all duration-300 mb-5">
          <IconComponent className="w-6 h-6" />
        </div>

        <h3 className="font-serif-title text-lg sm:text-xl font-bold text-[#0B1F3A] group-hover:text-[#123B63] transition-colors mb-2.5">
          {service.title}
        </h3>

        <p className="text-xs sm:text-sm text-[#667085] leading-relaxed mb-4">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-2 mb-4">
          {service.features.map((feat, idx) => (
            <li key={idx} className="flex items-start gap-2 text-xs text-[#172033]">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A227] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {onSelect && (
        <button
          onClick={() => onSelect(service)}
          className="text-xs uppercase font-bold tracking-wider text-[#0B1F3A] hover:text-[#C9A227] transition-colors flex items-center gap-1.5 pt-3 border-t border-slate-100"
        >
          En savoir plus
        </button>
      )}
    </div>
  );
};
