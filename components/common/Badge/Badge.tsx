import type { HTMLAttributes } from 'react';

export type BadgeVariant = 'success' | 'warning' | 'neutral' | 'danger' | 'info' | 'primary';
export type BadgeStatus =
  | 'completed'
  | 'pending'
  | 'not-started'
  | 'rejected'
  | 'active'
  | 'inactive'
  | 'current'
  | 'superseded'
  | 'custom';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  status?: BadgeStatus;
}

const variantClasses: Record<BadgeVariant, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200',
  warning: 'border-amber-200 bg-amber-50 text-amber-800 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-200',
  neutral: 'border-slate-200 bg-slate-100 text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300',
  danger: 'border-red-200 bg-red-50 text-red-800 dark:border-red-900 dark:bg-red-950 dark:text-red-200',
  info: 'border-blue-200 bg-blue-50 text-blue-800 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-200',
  primary: 'border-blue-800 bg-blue-50 text-blue-800 dark:border-blue-800 dark:bg-blue-950 dark:text-blue-200',
};

const statusVariants: Record<BadgeStatus, BadgeVariant> = {
  completed: 'success',
  pending: 'warning',
  'not-started': 'neutral',
  rejected: 'danger',
  active: 'success',
  inactive: 'neutral',
  current: 'success',
  superseded: 'neutral',
  custom: 'neutral',
};

export function Badge({
  variant,
  status,
  className = '',
  children,
  ...props
}: BadgeProps) {
  const resolvedVariant = variant ?? (status ? statusVariants[status] : 'neutral');

  return (
    <span
      {...props}
      className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-bold ${variantClasses[resolvedVariant]} ${className}`}
    >
      {children}
    </span>
  );
}
