'use client';

import { useState, type ReactNode } from 'react';

export interface RadioOption<TValue extends string = string> {
  value: TValue;
  label: ReactNode;
  disabled?: boolean;
  tone?: 'primary' | 'neutral';
}

export interface RadioGroupProps<TValue extends string = string> {
  name: string;
  label: ReactNode;
  options: readonly RadioOption<TValue>[];
  value?: TValue | null;
  defaultValue?: TValue;
  onChange?: (value: TValue) => void;
  disabled?: boolean;
  required?: boolean;
  columns?: 1 | 2 | 3;
  className?: string;
  optionClassName?: string;
}

const columnClasses: Record<NonNullable<RadioGroupProps['columns']>, string> = {
  1: 'grid-cols-1',
  2: 'grid-cols-1 sm:grid-cols-2',
  3: 'grid-cols-1 sm:grid-cols-3',
};

export function RadioGroup<TValue extends string = string>({
  name,
  label,
  options,
  value,
  defaultValue,
  onChange,
  disabled = false,
  required = false,
  columns = 1,
  className = '',
  optionClassName = '',
}: RadioGroupProps<TValue>) {
  const [uncontrolledValue, setUncontrolledValue] = useState<TValue | undefined>(defaultValue);
  const selectedValue = value === undefined ? uncontrolledValue : value ?? undefined;

  return (
    <fieldset disabled={disabled} className={className}>
      <legend className="sr-only">{label}</legend>
      <div className={`grid gap-2 sm:gap-3 ${columnClasses[columns]}`}>
        {options.map((option, index) => {
          const selected = selectedValue === option.value;
          const optionDisabled = disabled || option.disabled;
          const selectedClasses = option.tone === 'neutral'
            ? 'border-slate-500 bg-slate-100 text-slate-800 ring-1 ring-slate-300 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-100'
            : 'border-blue-800 bg-blue-50 text-blue-800 ring-1 ring-blue-200 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-200';

          return (
            <label
              key={option.value}
              className={`flex min-h-11 min-w-0 items-center gap-2 rounded-xl border px-3 py-2 text-sm font-semibold transition sm:min-h-12 sm:gap-3 ${
                optionDisabled ? 'cursor-not-allowed opacity-60' : 'cursor-pointer'
              } ${
                selected
                  ? selectedClasses
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              } ${optionClassName}`}
            >
              <input
                type="radio"
                name={name}
                value={option.value}
                checked={selected}
                disabled={optionDisabled}
                required={required && index === 0}
                onChange={() => {
                  if (value === undefined) setUncontrolledValue(option.value);
                  onChange?.(option.value);
                }}
                className="h-4 w-4 flex-none accent-blue-800"
              />
              <span>{option.label}</span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
