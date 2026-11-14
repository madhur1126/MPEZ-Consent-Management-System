'use client';

import {
  forwardRef,
  useId,
  useState,
  type FocusEvent,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  format?: 'mobile' | 'aadhaar' | 'pan' | 'consumerNumber';
  label?: ReactNode;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
  error?: ReactNode;
  success?: boolean | ReactNode;
  helperText?: ReactNode;
  loading?: boolean;
  validate?: (value: string) => string | undefined;
  containerClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    id,
    format,
    type,
    inputMode,
    autoComplete,
    maxLength,
    pattern,
    label,
    leftIcon,
    rightIcon,
    error,
    success,
    helperText,
    loading = false,
    validate,
    containerClassName = '',
    labelClassName = '',
    inputClassName = '',
    className = '',
    required,
    disabled,
    readOnly,
    onBlur,
    onChange,
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    ...inputProps
  },
  ref,
) {
  const [validationError, setValidationError] = useState<string>();
  const generatedId = useId();
  const inputId = id ?? generatedId;
  const formatDefaults = {
    mobile: { type: 'tel', inputMode: 'numeric', autoComplete: 'tel-national', maxLength: 10, pattern: '[6-9][0-9]{9}' },
    aadhaar: { type: 'text', inputMode: 'numeric', autoComplete: 'off', maxLength: 12, pattern: '[0-9]{12}' },
    pan: { type: 'text', inputMode: 'text', autoComplete: 'off', maxLength: 10, pattern: '[A-Za-z]{5}[0-9]{4}[A-Za-z]' },
    consumerNumber: { type: 'text', inputMode: 'text', autoComplete: 'off', maxLength: undefined, pattern: undefined },
  } as const;
  const formatDefault = format ? formatDefaults[format] : undefined;
  const errorId = `${inputId}-error`;
  const helperId = `${inputId}-helper`;
  const displayedError = error || validationError;
  const invalid = Boolean(displayedError) || ariaInvalid === true || ariaInvalid === 'true';
  const describedByIds = [
    describedBy,
    displayedError ? errorId : undefined,
    helperText && !displayedError ? helperId : undefined,
  ].filter(Boolean).join(' ') || undefined;

  function handleBlur(event: FocusEvent<HTMLInputElement>) {
    if (validate) setValidationError(validate(event.currentTarget.value));
    onBlur?.(event);
  }

  return (
    <div className={`w-full ${containerClassName}`}>
      {label && (
        <label
          htmlFor={inputId}
          className={`mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-100 ${labelClassName}`}
        >
          {label}
          {required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
        </label>
      )}
      <div
        className={`flex h-[42px] min-w-0 items-center gap-3 rounded-xl border bg-white px-3 text-slate-900 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:bg-slate-950 dark:text-slate-100 sm:h-[44px] ${
          invalid
            ? 'border-red-500 dark:border-red-400'
            : success
              ? 'border-emerald-500 dark:border-emerald-400'
              : 'border-slate-300 dark:border-slate-700'
        } ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${readOnly ? 'cursor-not-allowed' : ''} ${className}`}
      >
        {leftIcon && <span className="flex-none text-current" aria-hidden="true">{leftIcon}</span>}
        <input
          {...inputProps}
          ref={ref}
          id={inputId}
          type={type ?? formatDefault?.type}
          inputMode={inputMode ?? formatDefault?.inputMode}
          autoComplete={autoComplete ?? formatDefault?.autoComplete}
          maxLength={maxLength ?? formatDefault?.maxLength}
          pattern={pattern ?? formatDefault?.pattern}
          required={required}
          disabled={disabled}
          readOnly={readOnly}
          aria-invalid={invalid}
          aria-describedby={describedByIds}
          onBlur={handleBlur}
          onChange={(event) => {
            if (validationError) setValidationError(undefined);
            onChange?.(event);
          }}
          className={`h-full min-w-0 flex-1 bg-transparent text-base outline-none placeholder:text-slate-500 disabled:cursor-not-allowed read-only:cursor-not-allowed dark:placeholder:text-slate-400 ${inputClassName}`}
        />
        {loading ? (
          <span aria-label="Loading" className="mpez-spinner h-5 w-5 border-2" />
        ) : rightIcon ? (
          <span className="flex-none text-current">{rightIcon}</span>
        ) : null}
      </div>
      {displayedError ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {displayedError}
        </p>
      ) : helperText ? (
        <p id={helperId} className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
          {helperText}
        </p>
      ) : success && typeof success !== 'boolean' ? (
        <p className="mt-1.5 text-sm text-emerald-700 dark:text-emerald-300">{success}</p>
      ) : null}
    </div>
  );
});

Input.displayName = 'Input';
