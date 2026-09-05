import React from 'react';
import { IslamicDivider } from './IslamicPattern';

interface SectionTitleProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center' | 'right';
  theme?: 'light' | 'dark';
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  badge,
  title,
  subtitle,
  align = 'center',
  theme = 'light',
  className = '',
}) => {
  const isDark = theme === 'dark';

  return (
    <div
      className={`mb-12 sm:mb-16 ${
        align === 'center' ? 'text-center' : align === 'right' ? 'text-right' : 'text-left'
      } ${className}`}
    >
      {badge && (
        <div
          className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-bold tracking-[0.25em] uppercase mb-3.5 ${
            isDark
              ? 'bg-[#C9A227]/15 text-[#E5C766] border border-[#C9A227]/30'
              : 'bg-[#0B1F3A]/5 text-[#0B1F3A] border border-[#C9A227]/30'
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
          {badge}
        </div>
      )}

      <h2
        className={`font-serif-title text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight leading-tight ${
          isDark ? 'text-white' : 'text-[#0B1F3A]'
        }`}
      >
        {title}
      </h2>

      {align === 'center' && (
        <IslamicDivider light={isDark} className="my-3" />
      )}

      {subtitle && (
        <p
          className={`mt-3 max-w-2xl text-base sm:text-lg leading-relaxed ${
            align === 'center' ? 'mx-auto' : ''
          } ${isDark ? 'text-[#F7F8FA]/80' : 'text-[#667085]'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
