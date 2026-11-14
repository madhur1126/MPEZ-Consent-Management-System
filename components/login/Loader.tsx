'use client';

import { useEffect, useState } from 'react';
import { Logo } from './Logo';
import { messages } from '@/lib/login/i18n';
import { useLang } from '@/lib/login/hooks';

export function LoadingSpinner({ className = '' }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`mpez-spinner ${className}`}
    />
  );
}

export function GlobalLoader({
  label,
  visible = true,
}: {
  label?: string;
  visible?: boolean;
}) {
  const { lang } = useLang();
  const t = messages[lang];
  const [mounted, setMounted] = useState(visible);

  useEffect(() => {
    if (visible) {
      setMounted(true);
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setMounted(false);
      return;
    }

    const timer = window.setTimeout(() => setMounted(false), 220);
    return () => window.clearTimeout(timer);
  }, [visible]);

  if (!mounted) return null;

  return (
    <main
      role="status"
      aria-live="polite"
      aria-label={label ?? t.loading}
      className={`mpez-loader fixed inset-0 z-[100] grid min-h-screen place-items-center overflow-hidden px-5 text-center ${
        visible ? '' : 'mpez-loader-exit'
      }`}
    >
      <div className="mpez-loader-content flex w-full max-w-sm flex-col items-center">
        <div className="mpez-loader-logo grid h-24 w-24 place-items-center rounded-[28px] p-3 sm:h-28 sm:w-28">
          <Logo className="h-full w-full object-contain" />
        </div>
        <LoadingSpinner className="mt-8 h-11 w-11 border-[3px]" />
        <h1 className="mt-6 text-xl font-extrabold tracking-tight text-slate-950 dark:text-white sm:text-2xl">
          MPEZ {t.system}
        </h1>
        <p className="mt-2 text-sm font-medium leading-6 text-slate-600 dark:text-blue-100/80 sm:text-base">
          {t.tagline}
        </p>
        <span className="sr-only">{label ?? t.loading}</span>
      </div>
    </main>
  );
}
