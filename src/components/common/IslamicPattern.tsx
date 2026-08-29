import React from 'react';

interface IslamicDividerProps {
  className?: string;
  light?: boolean;
}

export const IslamicDivider: React.FC<IslamicDividerProps> = ({ className = '', light = false }) => {
  const strokeColor = light ? '#E5C766' : '#C9A227';
  
  return (
    <div className={`flex items-center justify-center gap-3 my-4 ${className}`}>
      <div className={`h-[1px] w-12 sm:w-20 ${light ? 'bg-gradient-to-r from-transparent to-[#E5C766]' : 'bg-gradient-to-r from-transparent to-[#C9A227]'}`} />
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#C9A227]">
        <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" stroke={strokeColor} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <circle cx="12" cy="12" r="2" fill={strokeColor} />
      </svg>
      <div className={`h-[1px] w-12 sm:w-20 ${light ? 'bg-gradient-to-l from-transparent to-[#E5C766]' : 'bg-gradient-to-l from-transparent to-[#C9A227]'}`} />
    </div>
  );
};

export const IslamicArchFrame: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`relative rounded-t-[3rem] sm:rounded-t-[4.5rem] overflow-hidden border border-[#C9A227]/20 shadow-xl ${className}`}>
      <div className="absolute inset-0 pointer-events-none border-t-2 border-[#C9A227]/30 rounded-t-[3rem] sm:rounded-t-[4.5rem]" />
      {children}
    </div>
  );
};

export const BismillahHeader: React.FC<{ className?: string; light?: boolean }> = ({ className = '', light = false }) => {
  return (
    <div className={`text-center font-arabic text-xl sm:text-2xl tracking-wide select-none ${light ? 'text-[#E5C766]' : 'text-[#C9A227]'} ${className}`}>
      بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
    </div>
  );
};
