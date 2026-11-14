'use client';

import { useRef, type ClipboardEvent, type KeyboardEvent } from 'react';

type Props = {
  /** One entry per box; empty string for an empty box. */
  value: string[];
  onChange: (next: string[]) => void;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
};

export function OtpInput({ value, onChange, label, disabled, invalid = false }: Props) {
  const length = value.length;
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const focusBox = (i: number) => refs.current[Math.max(0, Math.min(length - 1, i))]?.focus();

  const handleChange = (i: number, raw: string) => {
    const digits = raw.replace(/\D/g, '');
    if (digits.length > 1) {
      const next = [...value];
      digits.slice(0, length - i).split('').forEach((digit, offset) => {
        next[i + offset] = digit;
      });
      onChange(next);
      focusBox(Math.min(i + digits.length, length - 1));
      return;
    }
    const digit = digits.slice(-1);
    const next = [...value];
    next[i] = digit;
    onChange(next);
    if (digit) focusBox(i + 1);
  };

  const handleKeyDown = (i: number, e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace' && !value[i] && i > 0) {
      e.preventDefault();
      const next = [...value];
      next[i - 1] = '';
      onChange(next);
      focusBox(i - 1);
    } else if (e.key === 'ArrowLeft') {
      focusBox(i - 1);
    } else if (e.key === 'ArrowRight') {
      focusBox(i + 1);
    }
  };

  const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
    const digits = e.clipboardData.getData('text').replace(/\D/g, '').slice(0, length);
    if (!digits) return;
    e.preventDefault();
    onChange(Array.from({ length }, (_, k) => digits[k] ?? ''));
    focusBox(Math.min(digits.length, length - 1));
  };

  return (
    <div role="group" aria-label={label} className="flex justify-between gap-1.5 sm:gap-2">
      {value.map((digit, i) => (
        <input
          key={i}
          ref={(el) => {
            refs.current[i] = el;
          }}
          type="text"
          inputMode="numeric"
          autoComplete={i === 0 ? 'one-time-code' : 'off'}
          maxLength={1}
          value={digit}
          disabled={disabled}
          aria-label={`${label} ${i + 1}`}
          onChange={(e) => handleChange(i, e.target.value)}
          onKeyDown={(e) => handleKeyDown(i, e)}
          onPaste={handlePaste}
          onFocus={(e) => e.currentTarget.select()}
          aria-invalid={invalid}
          className={`h-[52px] w-full min-w-0 max-w-14 rounded-xl border-[1.5px] bg-login-field text-center text-xl font-bold text-login-text outline-none focus:border-login-btn focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] sm:h-[58px] sm:text-[22px] ${
            invalid ? 'border-login-err' : 'border-login-field-line'
          }`}
        />
      ))}
    </div>
  );
}
