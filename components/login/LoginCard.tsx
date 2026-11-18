'use client';

import { useRef, useState, type FormEvent } from 'react';
import type { Messages } from '@/lib/login/i18n';
import { Button, Card, Input, LoadingSpinner, OTPInput } from '@/components/common';

const MOBILE_RE = /^[6-9]\d{9}$/;
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
    <svg viewBox="0 0 96 96" aria-hidden="true" style={{ width: 72, height: 72 }} className="mx-auto mb-1 block h-16 w-16 sm:h-[72px] sm:w-[72px]">
      <circle cx="48" cy="48" r="48" style={{ fill: 'var(--icon-bg)' }} />
      <circle cx="48" cy="35" r="14" style={{ fill: 'var(--ink)' }} />
      <path d="M20 76c0-15 12-25 28-25s28 10 28 25v3H20Z" style={{ fill: 'var(--ink)' }} />
    </svg>
  );
}

export function LoginCard({ t, onRequestOtp, onVerifyOtp }: LoginCardProps) {
  const [mobile, setMobile] = useState('');
  const [otp, setOtp] = useState<string[]>(() => Array(6).fill(''));
  const [otpRequested, setOtpRequested] = useState(false);
  const [status, setStatus] = useState<Status>(null);
  const [loading, setLoading] = useState(false);
  const [loadingAction, setLoadingAction] = useState<'request' | 'verify' | null>(null);
  const [otpError, setOtpError] = useState(false);
  const mobileRef = useRef<HTMLInputElement>(null);
  const verificationInProgress = useRef(false);
  const requestInProgress = useRef(false);

  async function requestOtp(): Promise<boolean> {
    if (requestInProgress.current) return false;
    requestInProgress.current = true;
    setLoading(true);
    setLoadingAction('request');
    setStatus(null);
    try {
      await onRequestOtp?.(mobile);
      setOtpRequested(true);
      setOtp(Array(6).fill(''));
      setOtpError(false);
      setStatus({ kind: 'success', key: 'otpSent' });
      return true;
    } catch {
      setStatus({ kind: 'error', key: 'requestFailed' });
      return false;
    } finally {
      requestInProgress.current = false;
      setLoading(false);
      setLoadingAction(null);
    }
  }

  async function submitMobile(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (otpRequested || loading || requestInProgress.current) return;
    if (!MOBILE_RE.test(mobile)) {
      setStatus({ kind: 'error', key: 'invalidMobile' });
      mobileRef.current?.focus();
      return;
    }
    await requestOtp();
  }

  async function verifyOtp(code: string) {
    if (
      code.length !== 6 ||
      verificationInProgress.current ||
      loading
    ) {
      return;
    }

    verificationInProgress.current = true;
    setLoading(true);
    setLoadingAction('verify');
    setStatus(null);
    setOtpError(false);
    try {
      await onVerifyOtp?.(mobile, code);
    } catch {
      setOtpError(true);
      setOtp(Array(6).fill(''));
      setStatus({ kind: 'error', key: 'invalidOtp' });
    } finally {
      verificationInProgress.current = false;
      setLoading(false);
      setLoadingAction(null);
    }
  }

  function changeOtp(next: string[]) {
    setOtp(next);
    setOtpError(false);
    setStatus(null);
  }

  function changeNumber() {
    setOtpRequested(false);
    setOtp(Array(6).fill(''));
    setStatus(null);
    setOtpError(false);
  }

  const message = status ? t[status.key] : '';
  const messageClass = `mt-2 min-h-[22px] px-0.5 text-sm leading-snug ${
    status?.kind === 'success' ? 'text-emerald-700 dark:text-emerald-300' : 'text-login-err'
  }`;
  return (
    <Card
      as="section"
      variant="glass"
      aria-labelledby="login-title"
      className="relative flex min-h-[380px] min-w-0 flex-col justify-center overflow-hidden px-5 py-5 text-center sm:min-h-[390px] sm:px-9 sm:py-6"
    >
      <span aria-hidden="true" className="pointer-events-none absolute right-0 top-0 h-20 w-20 bg-gradient-to-bl from-blue-200/90 to-blue-50/20 [clip-path:polygon(25%_0,100%_0,100%_100%)]" />
      <div className="relative -translate-y-2">
        {!otpRequested && <Avatar />}
        <h2 id="login-title" className="relative text-2xl font-extrabold leading-tight text-login-ink sm:text-[28px] [html[lang=hi]_&]:leading-snug">
          {otpRequested ? t.verifyTitle : t.consumerLogin}
        </h2>
        {!otpRequested && (
          <p className="mx-auto mt-2.5 max-w-[24em] text-[17px] leading-snug text-login-text">
            {t.loginSub}
          </p>
        )}

        <form onSubmit={submitMobile} noValidate className="mt-3 text-left">
          <Input
            ref={mobileRef}
            id="mobile"
            name="mobile"
            format="mobile"
            readOnly={otpRequested}
            value={mobile}
            label={t.mobile}
            placeholder={t.mobilePlaceholder}
            aria-invalid={status?.key === 'invalidMobile'}
            aria-describedby="login-msg"
            onChange={(event) => {
              setMobile(event.target.value.replace(/\D/g, '').slice(0, 10));
              if (status) setStatus(null);
            }}
            leftIcon={
              <svg viewBox="0 0 24 24" fill="currentColor" className="h-[22px] w-[22px] text-login-ink">
                <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1Z" />
              </svg>
            }
            labelClassName="text-[17px] font-bold text-login-ink"
            className={`!gap-3.5 !rounded-[14px] !border-[1.5px] !bg-login-field !px-4 !text-login-text focus-within:!border-login-btn focus-within:!ring-0 focus-within:!shadow-[0_0_0_4px_color-mix(in_srgb,var(--btn)_22%,transparent)] ${
              status?.key === 'invalidMobile' ? '!border-login-err' : '!border-login-field-line'
            }`}
            inputClassName="!h-full !bg-transparent !text-lg !text-login-text placeholder:!text-login-placeholder"
          />

          {!otpRequested && (
            <>
              <p id="login-msg" role="alert" className={messageClass}>
                {message}
              </p>
              <Button
                type="submit"
                loading={loading && loadingAction === 'request'}
                disabled={loading && loadingAction !== 'request'}
                className="!mt-2.5 !w-full !gap-3 !rounded-2xl !bg-[linear-gradient(100deg,var(--btn-hover),var(--btn))] !text-xl !text-login-btn-ink !shadow-[0_12px_24px_-12px_var(--btn)] hover:!bg-login-btn-hover"
                rightIcon={
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-[22px] w-[22px]">
                    <path d="M4 12h15M13 6l6 6-6 6" />
                  </svg>
                }
              >
                {loading ? t.sendingOtp : t.sendOtp}
              </Button>
            </>
          )}
        </form>

        {otpRequested && (
          <div className="mt-3 text-left">
            <div role="status" className="rounded-xl border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-medium text-emerald-800 dark:border-emerald-900 dark:bg-emerald-950 dark:text-emerald-200">
              {t.otpSent}
            </div>
            <label className="mb-2 mt-3 block text-[17px] font-bold text-login-ink">{t.otpLabel}</label>
            <OTPInput
              length={6}
              value={otp}
              onChange={changeOtp}
              onComplete={(code) => void verifyOtp(code)}
              autoSubmit
              label={t.otpLabel}
              disabled={loading}
              invalid={otpError}
              resend={{
                onResend: requestOtp,
                label: t.resendOtp,
                countdownLabel: (seconds) => (
                  <>
                    {t.resendIn}{' '}
                    {String(Math.floor(seconds / 60)).padStart(2, '0')}:
                    {String(seconds % 60).padStart(2, '0')}
                  </>
                ),
                cooldownSeconds: OTP_COOLDOWN_SECONDS,
                disabled: loading,
                errorLabel: t.resendFailed,
              }}
              footerAction={
                <Button
                  type="button"
                  variant="ghost"
                  size="small"
                  onClick={changeNumber}
                  className="!min-h-9 !px-0 font-semibold text-login-ink underline underline-offset-4"
                >
                  {t.changeNumber}
                </Button>
              }
            />
            {loadingAction === 'verify' && (
              <p role="status" aria-live="polite" className="mt-3 flex items-center justify-center gap-2 text-sm font-semibold text-login-ink">
                <LoadingSpinner className="h-4 w-4" />
                {t.verifyingOtp}
              </p>
            )}
            <p id="login-msg" role="alert" aria-live="polite" className={messageClass}>
              {status?.key === 'otpSent' ? '' : message}
            </p>
            <div className="mt-1 rounded-lg border border-blue-200 bg-blue-50 px-3 py-2 text-center text-sm text-blue-900 dark:border-blue-900 dark:bg-blue-950 dark:text-blue-100">
              {t.demoOtp} <strong className="font-bold">123456</strong>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
}
