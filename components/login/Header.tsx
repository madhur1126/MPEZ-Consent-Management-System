
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
      <div className="mx-auto flex w-full max-w-[1320px] flex-col items-stretch gap-2 px-3 py-2 sm:px-6 sm:py-3.5 md:flex-row md:items-center md:justify-between md:gap-x-6">

        {/* LANGUAGE AND THEME CONTROLS */}
        <div className="order-1 flex w-full shrink-0 items-center justify-between gap-3 border-b border-slate-300/80 pb-2 md:order-2 md:w-auto md:justify-normal md:gap-5 md:border-b-0 md:pb-0">

          {/* Language Selector */}
          <div
            role="group"
            aria-label={t.language}
            className="inline-flex shrink-0 rounded-full bg-login-seg p-[3px] shadow-[0_4px_12px_-6px_rgba(8,48,120,0.45)] md:p-[5px]"
          >
            {LANGS.map(({ value, label }) => (
              <button
                key={value}
                type="button"
                lang={value}
                aria-pressed={lang === value}
                onClick={() => onLangChange(value)}
                className={`flex h-[27px] min-h-0 items-center rounded-full px-2.5 py-0 text-[12px] font-semibold leading-none transition-colors md:h-auto md:min-h-10 md:px-[18px] md:py-2 md:text-[17px] md:leading-snug ${
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
            className="inline-flex shrink-0 rounded-full bg-[linear-gradient(135deg,var(--track-a),var(--track-b))] p-[3px] shadow-[0_4px_12px_-6px_rgba(8,48,120,0.45)] md:p-[5px]"
          >
            {/* Light Mode */}
            <button
              type="button"
              aria-label={t.light}
              aria-pressed={theme === 'light'}
              onClick={() => onThemeChange('light')}
              className={`grid h-[27px] w-[32px] place-items-center rounded-full md:h-10 md:w-[54px] ${
                theme === 'light'
                  ? 'bg-login-thumb text-login-sun'
                  : 'text-login-moon'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px] md:h-[22px] md:w-[22px]"
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
              className={`grid h-[27px] w-[32px] place-items-center rounded-full text-login-moon md:h-10 md:w-[54px] ${
                theme === 'dark' ? 'bg-login-thumb' : ''
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="h-[15px] w-[15px] md:h-[22px] md:w-[22px]"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.6 9.6 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z" />
              </svg>
            </button>
          </div>
        </div>

        {/* MPEZ BRANDING */}
        <div className="order-2 flex min-w-0 items-center gap-2 sm:gap-4 md:order-1">

          <Logo className="h-10 w-10 flex-none sm:h-[58px] sm:w-[58px] md:h-12 md:w-12 lg:h-[58px] lg:w-[58px]" />

          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-x-1 gap-y-1 sm:gap-x-2">

              <span className="text-[15px] font-extrabold leading-none tracking-tight text-login-ink min-[360px]:text-base sm:text-[27px] md:text-[22px] lg:text-[27px]">
                MPEZ
              </span>

              <span className="rounded-md bg-blue-100 px-1.5 py-1 text-[9px] font-bold leading-none text-blue-800 sm:px-2 sm:text-xs md:text-[10px]">
                CMS
              </span>

              <span className="text-[15px] font-bold leading-none tracking-tight text-login-ink min-[360px]:text-base sm:text-[27px] md:text-[22px] lg:text-[27px]">
                {t.portalName}
              </span>

            </div>

            <p className="mt-1 text-[9px] font-semibold leading-tight text-login-muted min-[360px]:text-[10px] sm:mt-1.5 sm:text-[14px] md:text-xs lg:text-[14px]">
              {t.tagline}
            </p>
          </div>
        </div>
      </div>

      {/* Curved Bottom Edge */}
      <svg
        aria-hidden="true"
        viewBox="0 0 1600 34"
        preserveAspectRatio="none"
        className="pointer-events-none absolute -bottom-3 left-0 block h-3 w-full lg:-bottom-[33px] lg:h-[34px]"
        style={{ fill: 'var(--header-bg)' }}
      >
        <path d="M0 0H1600V10C1320 -2 940 36 560 22 300 12 120 30 0 34Z" />
      </svg>
    </header>
  );
}
