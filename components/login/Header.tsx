
'use client';

import type { Lang, Messages } from '@/lib/login/i18n';
import type { Theme } from '@/lib/login/hooks';
import { Logo } from './Logo';

type Props = {
  t: Messages;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
};

const LANGS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
];

export function Header({
  t,
  lang,
  onLangChange,
  theme,
  onThemeChange,
}: Props) {
  return (
    <header className="relative z-30 bg-login-header">
      <div className="mx-auto flex w-full max-w-[1320px] flex-wrap items-center justify-between gap-x-6 gap-y-4 px-4 py-3.5 sm:px-6">

        {/* MPEZ BRANDING */}
        <div className="flex min-w-0 items-center gap-3 sm:gap-4">

          {/* Logo */}
          <Logo className="h-[46px] w-[46px] flex-none sm:h-[58px] sm:w-[58px]" />

          {/* Brand Name and Tagline */}
          <div className="min-w-0">

            {/* MPEZ + CMS + Consent Portal */}
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">

              <span className="text-xl font-extrabold leading-none tracking-tight text-login-ink sm:text-[27px]">
                MPEZ
              </span>

              {/* CMS Badge */}
              <span className="rounded-md bg-blue-100 px-2 py-1 text-[10px] font-bold leading-none text-blue-800 sm:text-xs">
                CMS
              </span>

              <span className="text-xl font-bold leading-none tracking-tight text-login-ink sm:text-[27px]">
                Consent Portal
              </span>

            </div>

            {/* Tagline */}
            <p className="mt-1.5 text-[11px] font-medium leading-tight text-login-ink/70 sm:text-[14px]">
              Empowering Consumers. Ensuring Transparency.
            </p>

          </div>
        </div>

        {/* LANGUAGE AND THEME CONTROLS */}
        <div className="flex w-full items-center justify-between gap-3 sm:w-auto sm:gap-5">

          {/* Language Selector */}
          <div
            role="group"
            aria-label={t.language}
            className="inline-flex rounded-full bg-login-seg p-[5px] shadow-[0_6px_18px_-8px_rgba(8,48,120,0.45)]"
          >
            {LANGS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                lang={value}
                aria-pressed={lang === value}
                onClick={() => onLangChange(value)}
                className={`min-h-10 rounded-full px-3.5 py-2 text-[15px] font-semibold leading-snug transition-colors sm:px-[18px] sm:text-[17px] ${
                  lang === value
                    ? 'bg-login-seg-active text-login-seg-active-ink'
                    : 'text-login-seg-ink'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Theme Selector */}
          <div
            role="group"
            aria-label={t.theme}
            className="inline-flex rounded-full bg-[linear-gradient(135deg,var(--track-a),var(--track-b))] p-[5px] shadow-[0_6px_18px_-8px_rgba(8,48,120,0.55)]"
          >

            {/* Light Mode */}
            <button
              type="button"
              aria-label={t.light}
              aria-pressed={theme === 'light'}
              onClick={() => onThemeChange('light')}
              className={`grid h-10 w-[46px] place-items-center rounded-full sm:w-[54px] ${
                theme === 'light'
                  ? 'bg-login-thumb text-login-sun'
                  : 'text-login-moon'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden="true"
              >
                <circle cx="12" cy="12" r="4.2" fill="currentColor" />
                <path d="M12 2.5v2.4M12 19.1v2.4M2.5 12h2.4M19.1 12h2.4M5.3 5.3l1.7 1.7M17 17l1.7 1.7M18.7 5.3 17 7M7 17l-1.7 1.7" />
              </svg>
            </button>

            {/* Dark Mode */}
            <button
              type="button"
              aria-label={t.dark}
              aria-pressed={theme === 'dark'}
              onClick={() => onThemeChange('dark')}
              className={`grid h-10 w-[46px] place-items-center rounded-full text-login-moon sm:w-[54px] ${
                theme === 'dark' ? 'bg-login-thumb' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[22px] w-[22px]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.6 9.6 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z" />
              </svg>
            </button>

          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 34"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-6 left-0 block h-6 w-full lg:-bottom-[33px] lg:h-[34px]"
        style={{ fill: 'var(--header-bg)' }}
      >
        <path d="M0 0H1600V10C1320 -2 940 36 560 22 300 12 120 30 0 34Z" />
      </svg>

    </header>
  );
}
