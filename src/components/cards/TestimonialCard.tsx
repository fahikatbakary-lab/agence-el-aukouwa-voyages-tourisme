import React from 'react';
import { Star, CheckCircle, Quote } from 'lucide-react';
import { Testimonial } from '../../types';

export const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => {
  return (
    <div className="bg-white rounded-2xl p-6 sm:p-7 border border-slate-200 shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group">
      <Quote className="absolute top-6 right-6 w-8 h-8 text-slate-100 group-hover:text-[#C9A227]/20 transition-colors pointer-events-none" />

      <div>
        {/* Rating Stars */}
        <div className="flex items-center gap-1 mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating
                  ? 'text-[#C9A227] fill-[#C9A227]'
                  : 'text-slate-200'
              }`}
            />
          ))}
        </div>

        {/* Comment */}
        <p className="text-xs sm:text-sm text-[#172033] leading-relaxed italic mb-6">
          "{testimonial.comment}"
        </p>
      </div>

      {/* Author details */}
      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
        <div>
          <div className="flex items-center gap-1.5">
            <h4 className="font-serif-title text-sm font-bold text-[#0B1F3A]">
              {testimonial.authorName}
            </h4>
            {testimonial.verified && (
              <span title="Pèlerin vérifié">
                <CheckCircle className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              </span>
            )}
          </div>
          <p className="text-[11px] text-[#667085]">
            {testimonial.cityCountry} • {testimonial.formula} ({testimonial.year})
          </p>
        </div>
      </div>
    </div>
  );
};
