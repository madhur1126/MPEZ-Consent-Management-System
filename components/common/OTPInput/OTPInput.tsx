'use client';

import { useEffect, useRef, useState, type ClipboardEvent, type KeyboardEvent, type ReactNode } from 'react';
import { Button } from '../Button';

export interface OTPResendOptions {
  onResend: () => void | boolean | Promise<void | boolean>;
  label: string;
  countdownLabel: (seconds: number) => ReactNode;
  cooldownSeconds?: number;
  disabled?: boolean;
  errorLabel?: string;
}

export interface OTPInputProps {
  length?: number;
  value?: string[];
  defaultValue?: string;
  onChange?: (digits: string[]) => void;
  onComplete?: (code: string) => void;
  autoSubmit?: boolean;
  autoFocus?: boolean;
  label: string;
  disabled?: boolean;
  invalid?: boolean;
  error?: ReactNode;
  success?: ReactNode;
  resend?: OTPResendOptions;
  footerAction?: ReactNode;
  className?: string;
}

export function OTPInput({
  length = 6,
  value,
  defaultValue = '',
  onChange,
  onComplete,
  autoSubmit = false,
  autoFocus = true,
  label,
  disabled = false,
  invalid = false,
  error,
  success,
  resend,
  footerAction,
  className = '',
}: OTPInputProps) {
  const safeLength = Math.max(1, Math.floor(length));
  const [uncontrolledValue, setUncontrolledValue] = useState(() => normalize(defaultValue, safeLength));
  const [remaining, setRemaining] = useState(resend?.cooldownSeconds ?? 0);
  const [resending, setResending] = useState(false);
  const [resendError, setResendError] = useState<string>();
  const resendErrorLabel = resend?.errorLabel ?? 'Unable to resend OTP. Please try again.';
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const lastCompleted = useRef('');
  const digits = normalize(value ? value.join('') : uncontrolledValue.join(''), safeLength);
  const previousDigits = useRef(digits.join(''));

  useEffect(() => {
    if (autoFocus) inputRefs.current[0]?.focus();
  }, [autoFocus]);

  useEffect(() => {
    const currentDigits = digits.join('');
    if (previousDigits.current.length === safeLength && !currentDigits) focusBox(0);
    if (!digits.every(Boolean)) lastCompleted.current = '';
    previousDigits.current = currentDigits;
  }, [digits.join('')]);

  useEffect(() => {
    if (remaining <= 0) return;
    const timer = window.setTimeout(() => setRemaining((seconds) => Math.max(0, seconds - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [remaining]);

  function focusBox(index: number) {
    inputRefs.current[Math.max(0, Math.min(safeLength - 1, index))]?.focus();
  }

  function commit(next: string[], focusIndex?: number) {
    if (value === undefined) setUncontrolledValue(next);
    onChange?.(next);
    const code = next.join('');
    if (code.length === safeLength && next.every(Boolean)) {
      if (autoSubmit && code !== lastCompleted.current) onComplete?.(code);
      lastCompleted.current = code;
    } else {
      lastCompleted.current = '';
    }
    if (focusIndex !== undefined) focusBox(focusIndex);
  }

  function changeDigit(index: number, rawValue: string) {
    const numbers = rawValue.replace(/\D/g, '');
    const next = [...digits];
    if (numbers.length > 1) {
      const pasted = numbers.slice(0, safeLength - index).split('');
      pasted.forEach((digit, offset) => { next[index + offset] = digit; });
      commit(next, Math.min(index + pasted.length, safeLength - 1));
      return;
    }

    next[index] = numbers.slice(-1);
    commit(next, numbers ? index + 1 : index);
  }

  function handleKeyDown(index: number, event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Backspace' && !digits[index] && index > 0) {
      event.preventDefault();
      const next = [...digits];
      next[index - 1] = '';
      commit(next, index - 1);
    } else if (event.key === 'ArrowLeft') {
      event.preventDefault();
      focusBox(index - 1);
    } else if (event.key === 'ArrowRight') {
      event.preventDefault();
      focusBox(index + 1);
    }
  }

  function handlePaste(event: ClipboardEvent<HTMLInputElement>) {
    const pasted = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, safeLength);
    if (!pasted) return;
    event.preventDefault();
    const next = Array.from({ length: safeLength }, (_, index) => pasted[index] ?? '');
    commit(next, Math.min(pasted.length, safeLength - 1));
  }

  async function handleResend() {
    if (!resend || disabled || resend.disabled || resending || remaining > 0) return;
    setResending(true);
    setResendError(undefined);
    try {
      const didResend = await resend.onResend();
      if (didResend !== false) setRemaining(resend.cooldownSeconds ?? 60);
    } catch {
      setResendError(resendErrorLabel);
    } finally {
      setResending(false);
    }
  }

  return (
    <div className={className}>
      <div role="group" aria-label={label} className="flex justify-between gap-1.5 sm:gap-2">
        {digits.map((digit, index) => (
          <input
            key={index}
            ref={(element) => { inputRefs.current[index] = element; }}
            type="text"
            inputMode="numeric"
            autoComplete={index === 0 ? 'one-time-code' : 'off'}
            maxLength={safeLength}
            value={digit}
            disabled={disabled}
            aria-label={`${label} ${index + 1}`}
            aria-invalid={invalid || Boolean(error)}
            onChange={(event) => changeDigit(index, event.currentTarget.value)}
            onKeyDown={(event) => handleKeyDown(index, event)}
            onPaste={handlePaste}
            onFocus={(event) => event.currentTarget.select()}
            className={`h-11 w-full min-w-0 max-w-14 rounded-xl border-[1.5px] bg-login-field text-center text-xl font-bold text-login-text outline-none focus:border-login-btn focus:shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] disabled:cursor-not-allowed disabled:opacity-60 sm:h-[46px] sm:text-[22px] ${
              invalid || error ? 'border-login-err' : success ? 'border-emerald-500' : 'border-login-field-line'
            }`}
          />
        ))}
      </div>
      {error && <p role="alert" className="mt-2 text-sm text-login-err">{error}</p>}
      {!error && success && <p role="status" className="mt-2 text-sm text-emerald-700 dark:text-emerald-300">{success}</p>}
      {(resend || footerAction) && (
        <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-sm">
          {resend ? (
            remaining > 0 ? (
              <span className="text-login-muted">{resend.countdownLabel(remaining)}</span>
            ) : (
              <Button
                type="button"
                variant="ghost"
                size="small"
                disabled={disabled || resend.disabled || resending}
                loading={resending}
                onClick={() => void handleResend()}
                className="!min-h-9 !px-0 font-semibold text-login-ink underline underline-offset-4"
              >
                {resend.label}
              </Button>
            )
          ) : <span />}
          {footerAction}
        </div>
      )}
      {resendError && <p role="alert" className="mt-1 text-sm text-login-err">{resendError}</p>}
    </div>
  );
}

function normalize(value: string, length: number): string[] {
  return Array.from({ length }, (_, index) => value.replace(/\D/g, '').slice(0, length)[index] ?? '');
}
