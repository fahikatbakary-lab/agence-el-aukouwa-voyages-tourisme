import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'gold' | 'secondary' | 'outline' | 'ghost' | 'white';
  size?: 'sm' | 'md' | 'lg';
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'gold',
  size = 'md',
  icon,
  iconPosition = 'right',
  fullWidth = false,
  className = '',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 select-none disabled:opacity-50 disabled:cursor-not-allowed rounded-sm';

  const sizeStyles = {
    sm: 'px-4 py-2 text-xs gap-1.5',
    md: 'px-6 py-2.5 text-xs sm:text-sm gap-2',
    lg: 'px-8 sm:px-10 py-3.5 sm:py-4 text-xs sm:text-sm gap-2.5 shadow-md',
  };

  const variantStyles = {
    gold: 'bg-[#C9A227] hover:bg-[#E5C766] text-[#0B1F3A] shadow-md hover:shadow-lg active:bg-[#B38E1B] focus:ring-[#C9A227] hover:-translate-y-0.5',
    primary: 'bg-[#0B1F3A] hover:bg-[#123B63] text-white focus:ring-[#0B1F3A] border border-[#C9A227]/40 hover:-translate-y-0.5 shadow-sm',
    secondary: 'bg-[#123B63] hover:bg-[#0B1F3A] text-white focus:ring-[#123B63] hover:-translate-y-0.5',
    outline: 'border border-[#C9A227] text-[#C9A227] hover:bg-[#C9A227] hover:text-[#0B1F3A] focus:ring-[#C9A227] hover:-translate-y-0.5',
    ghost: 'text-[#0B1F3A] hover:bg-[#0B1F3A]/5 focus:ring-[#0B1F3A]',
    white: 'bg-white hover:bg-slate-50 text-[#0B1F3A] shadow-md focus:ring-white border border-slate-200 hover:-translate-y-0.5',
  };

  return (
    <button
      className={`
        ${baseStyles}
        ${sizeStyles[size]}
        ${variantStyles[variant]}
        ${fullWidth ? 'w-full' : ''}
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};

