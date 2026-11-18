'use client';

import type { ReactNode } from 'react';
import { Button } from '../Button';

export type ToastVariant = 'success' | 'info' | 'warning' | 'danger';

export interface ToastProps {
  variant?: ToastVariant;
  children: ReactNode;
  onDismiss?: () => void;
  dismissLabel?: string;
  className?: string;
}

const variantClasses: Record<ToastVariant, string> = {
  success: 'border-emerald-200 bg-emerald-50 text-emerald-900 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
  info: 'border-blue-200 bg-blue-50 text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100',
  warning: 'border-amber-200 bg-amber-50 text-amber-900 dark:border-amber-900 dark:bg-amber-950 dark:text-amber-100',
  danger: 'border-red-200 bg-red-50 text-red-900 dark:border-red-900 dark:bg-red-950 dark:text-red-100',
};

export function Toast({
  variant = 'info',
  children,
  onDismiss,
  dismissLabel,
  className = '',
}: ToastProps) {
  return (
    <div
      role={variant === 'danger' ? 'alert' : 'status'}
      aria-live={variant === 'danger' ? 'assertive' : 'polite'}
      className={`flex items-start justify-between gap-4 rounded-xl border px-4 py-3 text-sm font-medium ${variantClasses[variant]} ${className}`}
    >
      <span>{children}</span>
      {onDismiss && (
        <Button
          type="button"
          variant="ghost"
          size="small"
          aria-label={dismissLabel ?? 'Dismiss notification'}
          onClick={onDismiss}
          className="!h-6 !min-h-0 !w-6 !flex-none !p-0 !text-lg !leading-none"
        >
          <span aria-hidden="true">×</span>
        </Button>
      )}
    </div>
  );
}
