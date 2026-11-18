'use client';

import {
  forwardRef,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
  type ForwardedRef,
  type KeyboardEvent,
  type ReactElement,
  type ReactNode,
} from 'react';
import { SearchInput } from '../SearchInput';

export interface SearchableDropdownOption<TValue extends string = string> {
  value: TValue;
  label: string;
  description?: string;
  searchTerms?: readonly string[];
  disabled?: boolean;
}

export interface SearchableDropdownProps<TValue extends string = string> {
  id?: string;
  name?: string;
  label?: ReactNode;
  ariaLabel?: string;
  options: readonly SearchableDropdownOption<TValue>[];
  value?: TValue | null;
  defaultValue?: TValue;
  onChange?: (
    value: TValue | undefined,
    option: SearchableDropdownOption<TValue> | null,
  ) => void;
  onSearchChange?: (query: string) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  noResultsText?: string;
  loadingText?: string;
  clearLabel?: string;
  clearable?: boolean;
  disabled?: boolean;
  required?: boolean;
  loading?: boolean;
  error?: ReactNode;
  helperText?: ReactNode;
  className?: string;
  labelClassName?: string;
  triggerClassName?: string;
}

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      viewBox="0 0 20 20"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={`h-4 w-4 flex-none transition-transform duration-150 ${open ? 'rotate-180' : ''}`}
    >
      <path d="m5 7.5 5 5 5-5" />
    </svg>
  );
}

function HighlightedLabel({ label, query }: { label: string; query: string }) {
  const matchIndex = query ? label.toLocaleLowerCase().indexOf(query.toLocaleLowerCase()) : -1;
  if (matchIndex === -1) return <>{label}</>;

  return (
    <>
      {label.slice(0, matchIndex)}
      <mark className="rounded-sm bg-blue-100 text-inherit dark:bg-blue-900/70">
        {label.slice(matchIndex, matchIndex + query.length)}
      </mark>
      {label.slice(matchIndex + query.length)}
    </>
  );
}

function SearchableDropdownComponent<TValue extends string = string>(
  {
    id,
    name,
    label,
    ariaLabel,
    options,
    value,
    defaultValue,
    onChange,
    onSearchChange,
    placeholder = 'Select an option',
    searchPlaceholder = 'Search options...',
    noResultsText = 'No results found',
    loadingText = 'Loading options...',
    clearLabel = 'Clear selection',
    clearable = true,
    disabled = false,
    required = false,
    loading = false,
    error,
    helperText,
    className = '',
    labelClassName = '',
    triggerClassName = '',
  }: SearchableDropdownProps<TValue>,
    forwardedRef: ForwardedRef<HTMLButtonElement>,
) {
  const generatedId = useId();
  const dropdownId = id ?? generatedId;
  const labelId = `${dropdownId}-label`;
  const selectedLabelId = `${dropdownId}-selected`;
  const listboxId = `${dropdownId}-listbox`;
  const errorId = `${dropdownId}-error`;
  const helperId = `${dropdownId}-helper`;
  const rootRef = useRef<HTMLDivElement>(null);
  const searchRef = useRef<HTMLInputElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [uncontrolledValue, setUncontrolledValue] = useState<TValue | undefined>(defaultValue);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [activeIndex, setActiveIndex] = useState(-1);
  const selectedValue = value === undefined ? uncontrolledValue : value ?? undefined;
  const selectedOption = options.find((option) => option.value === selectedValue);

  const uniqueOptions = useMemo(() => {
    const seen = new Set<TValue>();
    return options.filter((option) => {
      if (seen.has(option.value)) return false;
      seen.add(option.value);
      return true;
    });
  }, [options]);

  const filteredOptions = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase();
    return uniqueOptions.filter((option) => (
      [option.label, option.description, ...(option.searchTerms ?? [])]
        .filter((text): text is string => Boolean(text))
        .some((text) => text.toLocaleLowerCase().includes(normalizedQuery))
    ));
  }, [query, uniqueOptions]);

  const invalid = Boolean(error);
  const describedBy = [
    error ? errorId : undefined,
    helperText && !error ? helperId : undefined,
  ].filter(Boolean).join(' ') || undefined;

  useEffect(() => {
    if (!open) return;
    searchRef.current?.focus();
    const handlePointerDown = (event: PointerEvent) => {
      if (event.target instanceof Node && !rootRef.current?.contains(event.target)) {
        setOpen(false);
        setQuery('');
        onSearchChange?.('');
      }
    };
    document.addEventListener('pointerdown', handlePointerDown);
    return () => document.removeEventListener('pointerdown', handlePointerDown);
  }, [onSearchChange, open]);

  useEffect(() => {
    if (!open || (activeIndex >= 0 && !filteredOptions[activeIndex]?.disabled)) return;
    setActiveIndex(filteredOptions.findIndex((option) => !option.disabled));
  }, [activeIndex, filteredOptions, open]);

  function getFirstEnabledIndex() {
    const selectedIndex = filteredOptions.findIndex(
      (option) => option.value === selectedValue && !option.disabled,
    );
    return selectedIndex >= 0
      ? selectedIndex
      : filteredOptions.findIndex((option) => !option.disabled);
  }

  function openDropdown() {
    if (disabled) return;
    setQuery('');
    setActiveIndex(getFirstEnabledIndex());
    setOpen(true);
  }

  function closeDropdown(returnFocus = false) {
    setOpen(false);
    setQuery('');
    onSearchChange?.('');
    if (returnFocus) triggerRef.current?.focus();
  }

  function updateSelection(option: SearchableDropdownOption<TValue> | null) {
    const nextValue = option?.value;
    if (value === undefined) setUncontrolledValue(nextValue);
    onChange?.(nextValue, option);
    closeDropdown(true);
  }

  function moveActiveOption(direction: 1 | -1) {
    const length = filteredOptions.length;
    if (length === 0) return;
    for (let step = 1; step <= length; step += 1) {
      const start = activeIndex < 0
        ? (direction === 1 ? -1 : 0)
        : activeIndex;
      const nextIndex = (start + direction * step + length) % length;
      if (!filteredOptions[nextIndex].disabled) {
        setActiveIndex(nextIndex);
        return;
      }
    }
  }

  function handleSearchKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      moveActiveOption(event.key === 'ArrowDown' ? 1 : -1);
    } else if (event.key === 'Enter') {
      event.preventDefault();
      const option = filteredOptions[activeIndex];
      if (option && !option.disabled) updateSelection(option);
    } else if (event.key === 'Escape') {
      event.preventDefault();
      closeDropdown(true);
    }
  }

  function handleTriggerKeyDown(event: KeyboardEvent<HTMLButtonElement>) {
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      event.preventDefault();
      if (open) {
        moveActiveOption(event.key === 'ArrowDown' ? 1 : -1);
      } else {
        openDropdown();
      }
    } else if (event.key === 'Escape' && open) {
      event.preventDefault();
      closeDropdown();
    }
  }

  function clearSelection() {
    if (disabled) return;
    updateSelection(null);
  }

  return (
    <div ref={rootRef} className={`relative w-full ${className}`}>
      {label && (
        <span
          id={labelId}
          className={`mb-1.5 block text-sm font-semibold text-slate-800 dark:text-slate-100 ${labelClassName}`}
        >
          {label}
          {required && <span aria-hidden="true" className="ml-1 text-red-600">*</span>}
        </span>
      )}
      <div className="flex min-w-0 items-center gap-1">
        <button
          ref={(node) => {
            triggerRef.current = node;
            if (typeof forwardedRef === 'function') forwardedRef(node);
            else if (forwardedRef) forwardedRef.current = node;
          }}
          type="button"
          disabled={disabled}
          aria-label={ariaLabel}
          aria-labelledby={label ? `${labelId} ${selectedLabelId}` : undefined}
          aria-haspopup="listbox"
          aria-expanded={open}
          aria-controls={open ? listboxId : undefined}
          aria-required={required || undefined}
          aria-invalid={invalid || undefined}
          aria-describedby={describedBy}
          onClick={() => (open ? closeDropdown() : openDropdown())}
          onKeyDown={handleTriggerKeyDown}
          className={`flex h-[42px] min-w-0 flex-1 items-center justify-between gap-3 rounded-xl border bg-white px-3 text-left text-sm text-slate-900 shadow-sm transition hover:border-blue-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/30 disabled:cursor-not-allowed disabled:opacity-60 dark:bg-slate-950 dark:text-slate-100 sm:h-[44px] ${
            invalid
              ? 'border-red-500 dark:border-red-400'
              : 'border-slate-300 dark:border-slate-700'
          } ${triggerClassName}`}
        >
          <span id={selectedLabelId} className={`min-w-0 flex-1 truncate ${selectedOption ? '' : 'text-slate-500 dark:text-slate-400'}`}>
            {selectedOption?.label ?? placeholder}
          </span>
          <ChevronIcon open={open} />
        </button>
        {clearable && selectedOption && !disabled && (
          <button
            type="button"
            aria-label={clearLabel}
            onClick={clearSelection}
            className="grid h-9 w-9 flex-none place-items-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-slate-100"
          >
            <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true" className="h-4 w-4">
              <path d="m5 5 10 10M15 5 5 15" />
            </svg>
          </button>
        )}
      </div>
      {name && <input type="hidden" name={name} value={selectedValue ?? ''} />}
      {open && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl dark:border-slate-700 dark:bg-slate-900">
          <SearchInput
            ref={searchRef}
            role="combobox"
            aria-label={searchPlaceholder}
            aria-autocomplete="list"
            aria-expanded="true"
            aria-controls={listboxId}
            aria-activedescendant={activeIndex >= 0 ? `${dropdownId}-option-${activeIndex}` : undefined}
            aria-describedby={describedBy}
            autoComplete="off"
            value={query}
            placeholder={searchPlaceholder}
            onChange={(event) => {
              const nextQuery = event.target.value;
              setQuery(nextQuery);
              setActiveIndex(-1);
              onSearchChange?.(nextQuery);
            }}
            onKeyDown={handleSearchKeyDown}
            onBlur={(event) => {
              if (
                event.relatedTarget instanceof Node &&
                !rootRef.current?.contains(event.relatedTarget)
              ) {
                closeDropdown();
              }
            }}
            containerClassName="!h-10 !rounded-none !border-0 !border-b !border-slate-100 !bg-transparent !px-3 !ring-0 dark:!border-slate-800"
          />
          {loading && (
            <div role="status" className="flex items-center gap-2 px-3 py-3 text-sm text-slate-500 dark:text-slate-400">
              <span aria-hidden="true" className="mpez-spinner h-4 w-4 border-2" />
              {loadingText}
            </div>
          )}
          <ul
            id={listboxId}
            role="listbox"
            aria-label={label ? undefined : ariaLabel}
            aria-labelledby={label ? labelId : undefined}
            aria-busy={loading || undefined}
            className="max-h-60 overflow-y-auto p-1.5"
          >
            {filteredOptions.map((option, index) => {
              const selected = option.value === selectedValue;
              const active = index === activeIndex;
              return (
                <li
                  key={option.value}
                  id={`${dropdownId}-option-${index}`}
                  role="option"
                  aria-selected={selected}
                  aria-disabled={option.disabled || undefined}
                  onMouseDown={(event) => event.preventDefault()}
                  onMouseMove={() => {
                    if (!option.disabled) setActiveIndex(index);
                  }}
                  onClick={() => {
                    if (!option.disabled) updateSelection(option);
                  }}
                  className={`flex min-h-10 cursor-pointer items-center justify-between gap-3 rounded-lg px-3 py-2 text-sm transition-colors ${
                    option.disabled
                      ? 'cursor-not-allowed text-slate-400 dark:text-slate-600'
                      : active
                        ? 'bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100'
                        : 'text-slate-700 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                  } ${selected ? 'font-semibold' : ''}`}
                >
                  <span className="min-w-0 flex-1">
                    <HighlightedLabel label={option.label} query={query.trim()} />
                    {option.description && (
                      <span className="mt-0.5 block truncate text-xs font-normal text-slate-500 dark:text-slate-400">
                        <HighlightedLabel label={option.description} query={query.trim()} />
                      </span>
                    )}
                  </span>
                  {selected && (
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-4 w-4 flex-none text-blue-700 dark:text-blue-300">
                      <path d="m4 10 4 4 8-8" />
                    </svg>
                  )}
                </li>
              );
            })}
            {!loading && filteredOptions.length === 0 && (
              <li role="presentation" className="px-3 py-3 text-center text-sm text-slate-500 dark:text-slate-400">
                {noResultsText}
              </li>
            )}
          </ul>
        </div>
      )}
      {error ? (
        <p id={errorId} role="alert" className="mt-1.5 text-sm text-red-700 dark:text-red-300">
          {error}
        </p>
      ) : helperText ? (
        <p id={helperId} className="mt-1.5 text-sm text-slate-600 dark:text-slate-400">
          {helperText}
        </p>
      ) : null}
    </div>
  );
}

export const SearchableDropdown = forwardRef(SearchableDropdownComponent) as <
  TValue extends string = string,
>(
  props: SearchableDropdownProps<TValue> & { ref?: ForwardedRef<HTMLButtonElement> },
) => ReactElement;
