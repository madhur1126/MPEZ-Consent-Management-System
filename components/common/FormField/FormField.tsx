import type { ReactNode } from 'react';

export interface FormFieldProps {
  id: string;
  label?: ReactNode;
  required?: boolean;
  error?: ReactNode;
  helperText?: ReactNode;
  success?: boolean | ReactNode;
  className?: string;
  labelClassName?: string;
  children: ReactNode;
}

export function FormField({
  id,
  label,
  required = false,
  error,
  helperText,
  success,
  className = '',
  labelClassName = '',
  children,
}: FormFieldProps) {
  return (
    <div className={`w-full ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className={`mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-100 ${labelClassName}`}
        >
          {label}
          {required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
        </label>
      )}
      {children}
      {error ? (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      ) : helperText ? (
        <p id={`${id}-helper`} className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
          {helperText}
        </p>
      ) : success && typeof success !== 'boolean' ? (
        <p className="mt-1.5 text-sm text-emerald-700 dark:text-emerald-300">{success}</p>
      ) : null}
    </div>
  );
}
