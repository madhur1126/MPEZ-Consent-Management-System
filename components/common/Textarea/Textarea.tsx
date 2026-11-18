'use client';

import { forwardRef, useId, type TextareaHTMLAttributes, type ReactNode } from 'react';
import { FormField } from '../FormField';

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode;
  error?: ReactNode;
  success?: boolean | ReactNode;
  helperText?: ReactNode;
  containerClassName?: string;
  labelClassName?: string;
  textareaClassName?: string;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  {
    id,
    label,
    error,
    success,
    helperText,
    containerClassName = '',
    labelClassName = '',
    textareaClassName = '',
    className = '',
    required,
    disabled,
    readOnly,
    'aria-describedby': describedBy,
    'aria-invalid': ariaInvalid,
    ...textareaProps
  },
  ref,
) {
  const generatedId = useId();
  const textareaId = id ?? generatedId;
  const invalid = Boolean(error) || ariaInvalid === true || ariaInvalid === 'true';
  const describedByIds = [
    describedBy,
    error ? `${textareaId}-error` : undefined,
    helperText && !error ? `${textareaId}-helper` : undefined,
  ].filter(Boolean).join(' ') || undefined;

  return (
    <FormField
      id={textareaId}
      label={label}
      required={required}
      error={error}
      helperText={helperText}
      success={success}
      className={containerClassName}
      labelClassName={labelClassName}
    >
      <textarea
        {...textareaProps}
        ref={ref}
        id={textareaId}
        required={required}
        disabled={disabled}
        readOnly={readOnly}
        aria-invalid={invalid}
        aria-describedby={describedByIds}
        className={`min-h-24 w-full resize-y rounded-xl border bg-white px-3 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 disabled:cursor-not-allowed disabled:opacity-60 read-only:cursor-not-allowed dark:bg-slate-950 dark:text-slate-100 dark:placeholder:text-slate-400 ${
          invalid
            ? 'border-red-500 dark:border-red-400'
            : success
              ? 'border-emerald-500 dark:border-emerald-400'
              : 'border-slate-300 dark:border-slate-700'
        } ${className} ${textareaClassName}`}
      />
    </FormField>
  );
});

Textarea.displayName = 'Textarea';
