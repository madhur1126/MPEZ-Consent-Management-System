import type { HTMLAttributes } from 'react';

export type CardVariant = 'default' | 'interactive' | 'glass';

export interface CardProps extends HTMLAttributes<HTMLElement> {
  as?: 'article' | 'div' | 'section';
  variant?: CardVariant;
}

const variantClasses: Record<CardVariant, string> = {
  default: 'rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-700 dark:bg-slate-900',
  interactive: 'rounded-2xl border border-slate-200 bg-white shadow-card transition hover:border-blue-200 hover:shadow-md dark:border-slate-700 dark:bg-slate-900',
  glass: 'rounded-[26px] border border-login-card-line bg-login-card shadow-login-card backdrop-blur-[6px] sm:rounded-[32px]',
};

export function Card({
  as: Component = 'div',
  variant = 'default',
  className = '',
  ...props
}: CardProps) {
  return <Component {...props} className={`${variantClasses[variant]} ${className}`} />;
}
