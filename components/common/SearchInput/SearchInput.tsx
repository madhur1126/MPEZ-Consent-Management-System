'use client';

import { forwardRef, type InputHTMLAttributes } from 'react';

export interface SearchInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size' | 'type'> {
  loading?: boolean;
  loadingLabel?: string;
  containerClassName?: string;
}

export const SearchInput = forwardRef<HTMLInputElement, SearchInputProps>(function SearchInput(
  {
    loading = false,
    loadingLabel = 'Loading',
    containerClassName = '',
    className = '',
    disabled,
    ...inputProps
  },
  ref,
) {
  return (
    <div className={`flex h-10 min-w-0 items-center gap-2 rounded-xl border border-slate-300 bg-white px-3 text-slate-500 transition focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-500/20 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-400 ${disabled ? 'cursor-not-allowed opacity-60' : ''} ${containerClassName}`}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        aria-hidden="true"
        className="h-4 w-4 flex-none"
      >
        <circle cx="10.8" cy="10.8" r="6.8" />
        <path d="m16 16 4.5 4.5" />
      </svg>
      <input
        {...inputProps}
        ref={ref}
        type="search"
        disabled={disabled}
        className={`h-full min-w-0 flex-1 bg-transparent text-sm text-slate-900 outline-none placeholder:text-slate-500 disabled:cursor-not-allowed dark:text-slate-100 dark:placeholder:text-slate-400 ${className}`}
      />
      {loading && <span role="status" aria-label={loadingLabel} className="mpez-spinner h-4 w-4 border-2" />}
    </div>
  );
});

SearchInput.displayName = 'SearchInput';
