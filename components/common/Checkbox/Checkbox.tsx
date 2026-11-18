'use client';

import { useId, type InputHTMLAttributes, type ReactNode } from 'react';

export interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: ReactNode;
  description?: ReactNode;
  error?: ReactNode;
  labelClassName?: string;
}

export function Checkbox({
  id,
  label,
  description,
  error,
  labelClassName = '',
  className = '',
  disabled,
  required,
  'aria-describedby': describedBy,
  'aria-invalid': ariaInvalid,
  ...inputProps
}: CheckboxProps) {
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const errorId = `${inputId}-error`;
  const invalid = Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const describedByIds = [
    describedBy,
    error ? errorId : undefined,
    description && !error ? `${inputId}-description` : undefined,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <div className={className}>
      <label
        htmlFor={inputId}
        className={`flex items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300 ${
          disabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
        } ${labelClassName}`}
      >
        <input
          {...inputProps}
          id={inputId}
          type="checkbox"
          required={required}
          disabled={disabled}
          aria-invalid={invalid}
          aria-describedby={describedByIds}
          className="mt-1 h-5 w-5 flex-none accent-blue-800"
        />
        <span>
          {label}
          {required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
          {description && (
            <span id={`${inputId}-description`} className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
              {description}
            </span>
          )}
        </span>
      </label>
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      )}
    </div>
  );
}
