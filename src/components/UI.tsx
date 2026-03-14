import React from 'react';
import { cn } from '../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  variant = 'primary',
  size = 'md',
  isLoading,
  children,
  ...props
}) => {
  const variants = {
    primary: 'bg-indigo-600 text-white hover:bg-indigo-700 shadow-sm',
    secondary: 'bg-emerald-500 text-white hover:bg-emerald-600 shadow-sm',
    outline: 'border border-slate-200 bg-transparent hover:bg-slate-50 text-slate-700',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-600',
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2',
    lg: 'px-6 py-3 text-lg font-medium',
  };

  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]',
        variants[variant],
        sizes[size],
        className
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
};

export const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className }) => (
  <div className={cn('bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden', className)}>
    {children}
  </div>
);
