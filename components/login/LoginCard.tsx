'use client';

import { useEffect, useRef, useState, type FormEvent } from 'react';
import type { Messages } from '@/lib/login/i18n';
import { OtpInput } from './OtpInput';

const MOBILE_RE = /^[6-9]\d{9}$/;
const OTP_LENGTH = 6;
const OTP_COOLDOWN_SECONDS = 60;

type StatusKey =
  | 'invalidMobile'
  | 'requestFailed'
  | 'otpSent'
  | 'invalidOtp';
type Status = { kind: 'error' | 'success'; key: StatusKey } | null;

export type LoginCardProps = {
  t: Messages;
  onRequestOtp?: (mobile: string) => Promise<void>;
  onVerifyOtp?: (mobile: string, code: string) => Promise<void>;
};

function Avatar() {
  return (
    <svg viewBox="0 0 96 96" aria-hidden="true" className="mx-auto mb-1.5 block h-24 w-24">
      <circle cx="48" cy="48" r="48" style={{ fill: 'var(--icon-bg)' }} />
      <circle cx="45" cy="35" r="11" style={{ fill: 'var(--ink)' }} />
      <path d="M23 66c0-11 9-18 22-18s22 7 22 18c0 2-1 3-3 3H26c-2 0-3-1-3-3Z" style={{ fill: 'var(--ink)' }} />
      <circle cx="68" cy="64" r="13" strokeWidth="3" style={{ fill: 'var(--btn)', stroke: 'var(--card)' }} />
      <rect x="62" y="63" width="12" height="9" rx="2" fill="#fff" />
      <path d="M64.5 63v-2.5a3.5 3.5 0 0 1 7 0V63" fill="none" stroke="#fff" strokeWidth="2" />
    </svg>
  );
}

export function LoginCard({ t, onRequestOtp, onVerifyOtp }: LoginCardProps) {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState<string[]>(() => Array(OTP_LENGTH).fill(''));
  const [otpRequested, setOtpRequested] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);
  const [secondsRemaining, setSecondsRemaining] = useState(0);
  const [otpError, setOtpError] = useState(false);
  const mobileRef = useRef<HTMLInputElement>(null);
  const verificationInProgress = useRef(false);

  useEffect(() => {
    if (!otpRequested || secondsRemaining === 0) return;
    const timer = window.setTimeout(() => {
      setSecondsRemaining((seconds) => Math.max(0, seconds - 1));
    }, 1000);
    return () => window.clearTimeout(timer);
  }, [otpRequested, secondsRemaining]);

  async function requestOtp() {
    setLoading(true);
    setStatus(null);
    try {
      await onRequestOtp?.(mobile);
      setOtpRequested(true);
      setOtp(Array(OTP_LENGTH).fill(''));
      setOtpError(false);
      setSecondsRemaining(OTP_COOLDOWN_SECONDS);
      setStatus({ kind: 'success', key: 'otpSent' });
    } catch {
      setStatus({ kind: 'error', key: 'requestFailed' });
    } finally {
      setLoading(false);
    }
  }

  async function submitMobile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (otpRequested) return;
    if (!MOBILE_RE.test(mobile)) {
      setStatus({ kind: 'error', key: 'invalidMobile' });
      mobileRef.current?.focus();
      return;
    }
    await requestOtp();
  }

  async function verifyOtp(nextOtp: string[]) {
    const code = nextOtp.join('');
    if (
      code.length !== OTP_LENGTH ||
      verificationInProgress.current ||
      loading
    ) {
      return;
    }

    verificationInProgress.current = true;
    setLoading(true);
    setStatus(null);
    setOtpError(false);
    try {
      await onVerifyOtp?.(mobile, code);
    } catch {
      setOtpError(true);
      setOtp(Array(OTP_LENGTH).fill(''));
      setStatus({ kind: 'error', key: 'invalidOtp' });
    } finally {
      verificationInProgress.current = false;
      setLoading(false);
    }
  }

  function changeOtp(next: string[]) {
    setOtp(next);
    setOtpError(false);
    setStatus(null);
    if (next.every((digit) => digit !== '')) void verifyOtp(next);
  }

  function changeNumber() {
    setOtpRequested(false);
    setOtp(Array(OTP_LENGTH).fill(''));
    setSecondsRemaining(0);
    setStatus(null);
    setOtpError(false);
  }

  const message = status ? t[status.key] : '';
  const messageClass = `mt-2 min-h-[22px] px-0.5 text-sm leading-snug ${
    status?.kind === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-login-err'
  }`;
  const primaryButton =
    'mt-2.5 inline-flex h-[58px] w-full items-center justify-center gap-3 rounded-2xl bg-login-btn text-xl font-semibold text-login-btn-ink shadow-[0_12px_24px_-12px_var(--btn)] transition hover:bg-login-btn-hover active:translate-y-px disabled:cursor-wait disabled:opacity-70';

  return (
    <section
      aria-labelledby="login-title"
      className="flex h-[455px] min-w-0 flex-col justify-center rounded-[26px] border border-login-card-line bg-login-card px-5 py-6 text-center shadow-login-card backdrop-blur-[6px] sm:h-[477px] sm:rounded-[32px] sm:px-9 sm:py-8"
    >
      {!otpRequested && <Avatar />}
      <h2 id="login-title" className="text-3xl font-extrabold leading-tight text-login-ink sm:text-4xl [html[lang=hi]_&]:leading-snug">
        {otpRequested ? t.verifyTitle : t.login}
      </h2>
      {!otpRequested && (
        <p className="mx-auto mt-2.5 max-w-[24em] text-[17px] leading-snug text-login-text">
          {t.loginSub}
        </p>
      )}

      <form onSubmit={submitMobile} noValidate className={`${otpRequested ? 'mt-3' : 'mt-6'} text-left`}>
        <label htmlFor="mobile" className="mb-2 block text-[17px] font-bold text-login-ink">
          {t.mobile}
        </label>
        <div
          className={`flex h-[58px] items-center gap-3.5 rounded-[14px] border-[1.5px] bg-login-field px-4 transition focus-within:border-login-btn focus-within:shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] ${
            status?.key === 'invalidMobile' ? 'border-login-err' : 'border-login-field-line'
          }`}
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-[22px] w-[22px] flex-none text-login-ink">
            <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1Z" />
          </svg>
          <input
            ref={mobileRef}
            id="mobile"
            name="mobile"
            type="tel"
            inputMode="numeric"
            autoComplete="tel-national"
            maxLength={10}
            readOnly={otpRequested}
            value={mobile}
            placeholder={t.mobilePlaceholder}
            aria-invalid={status?.key === 'invalidMobile'}
            aria-describedby="login-msg"
            onChange={(e) => {
              setMobile(e.target.value.replace(/\D/g, '').slice(0, 10));
              if (status) setStatus(null);
            }}
            className="h-full min-w-0 flex-1 bg-transparent text-lg text-login-text outline-none placeholder:text-login-placeholder read-only:cursor-not-allowed"
          />
        </div>

        {!otpRequested && (
          <>
            <p id="login-msg" role="alert" className={messageClass}>
              {message}
            </p>
            <button type="submit" disabled={loading} aria-busy={loading} className={primaryButton}>
              <span>{loading ? t.sendingOtp : t.sendOtp}</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[22px] w-[22px]">
                <path d="M4 12h15M13 6l6 6-6 6" />
              </svg>
            </button>
          </>
        )}
      </form>

      {otpRequested && (
        <div className="mt-3 text-left">
          <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
            {t.otpSent}
          </div>
          <label className="mb-2 mt-3 block text-[17px] font-bold text-login-ink">{t.otpLabel}</label>
          <OtpInput
            value={otp}
            onChange={changeOtp}
            label={t.otpLabel}
            disabled={loading}
            invalid={otpError}
          />
          <p id="login-msg" role="alert" aria-live="polite" className={messageClass}>
            {status?.key === 'otpSent' ? '' : message}
          </p>
          {process.env.NODE_ENV !== 'production' && (
            <div className="mt-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-center text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100">
              {t.demoOtp} <strong className="font-bold">123456</strong>
            </div>
          )}
          <div className="mt-2 flex flex-wrap items-center justify-between gap-3 text-sm">
            {secondsRemaining > 0 ? (
              <span className="text-login-muted">
                {t.resendIn}{' '}
                {String(Math.floor(secondsRemaining / 60)).padStart(2, '0')}:
                {String(secondsRemaining % 60).padStart(2, '0')}
              </span>
            ) : (
              <button
                type="button"
                disabled={loading}
                onClick={() => void requestOtp()}
                className="font-semibold text-login-ink underline underline-offset-4 disabled:opacity-60"
              >
                {loading ? t.sendingOtp : t.resendOtp}
              </button>
            )}
            <button type="button" onClick={changeNumber} className="font-semibold text-login-ink underline underline-offset-4">
              {t.changeNumber}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
