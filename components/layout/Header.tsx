
'use client';

import { useEffect, useRef, useState } from 'react';
import type { Lang, Messages } from '@/lib/login/i18n';
import type { Theme } from '@/lib/login/hooks';
import { Button } from '@/components/common';
import { Logo } from '@/components/login/Logo';

type Props = {
  t: Messages;
  lang: Lang;
  onLangChange: (lang: Lang) => void;
  theme: Theme;
  onThemeChange: (theme: Theme) => void;
  variant?: 'default' | 'landing';
};

const LANGS: { value: Lang; label: string }[] = [
  { value: 'en', label: 'English' },
  { value: 'hi', label: 'हिन्दी' },
];

export function Header(props: Props) {
  if (props.variant === 'landing') return <LandingHeader {...props} />;
  return <StandardHeader {...props} />;
}

function StandardHeader({
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
            className="inline-flex shrink-0 border rounded-full outline-3! bg-login-seg p-[3px] shadow-sm md:p-[5px]"
          >
            {LANGS.map(({ value, label }) => (
              <Button
                key={value}
                type="button"
                lang={value}
                aria-pressed={lang === value}
                onClick={() => onLangChange(value)}
                variant="ghost"
                size="small"
                className={`!h-[27px] !min-h-0 !shrink-0 !rounded-full !px-2.5 !py-0 !text-[12px] !leading-none md:!h-10 md:!px-[18px] md:!py-2 md:!text-[17px] md:!leading-snug ${
                  lang === value
                    ? '!bg-login-seg-active !text-login-seg-active-ink'
                    : '!bg-transparent !text-login-seg-ink'
                }`}
              >
                {label}
              </Button>
            ))}
          </div>

          {/* Theme Selector */}
          <div
            role="group"
            aria-label={t.theme}
            className="inline-flex shrink-0 rounded-full border bg-[linear-gradient(135deg,var(--track-a),var(--track-b))] p-[3px] shadow-sm md:p-[5px]"
          >
            {/* Light Mode */}
            <Button
              type="button"
              aria-label={t.light}
              aria-pressed={theme === 'light'}
              onClick={() => onThemeChange('light')}
              variant="ghost"
              size="small"
              className={`!h-[27px] !w-[32px] !shrink-0 !rounded-full !p-0 md:!h-10 md:!w-[54px] ${
                theme === 'light'
                  ? '!bg-login-thumb !text-login-sun'
                  : '!bg-transparent !text-login-moon'
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
            </Button>

            {/* Dark Mode */}
            <Button
              type="button"
              aria-label={t.dark}
              aria-pressed={theme === 'dark'}
              onClick={() => onThemeChange('dark')}
              variant="ghost"
              size="small"
              className={`!h-[27px] !w-[32px] !shrink-0 !rounded-full !p-0 !text-login-moon md:!h-10 md:!w-[54px] ${
                theme === 'dark' ? '!bg-login-thumb' : '!bg-transparent'
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
            </Button>
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

type HeaderIconName = 'phone' | 'mail' | 'home' | 'bell' | 'search' | 'menu' | 'sun' | 'moon';

function HeaderIcon({ name, className = 'h-5 w-5' }: { name: HeaderIconName; className?: string }) {
  const paths: Record<HeaderIconName, React.ReactNode> = {
    phone: <path d="M6.6 10.8a15.1 15.1 0 0 0 6.6 6.6l2.2-2.2a1 1 0 0 1 1-.25c1.1.37 2.3.57 3.6.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.3.2 2.5.57 3.6a1 1 0 0 1-.25 1Z" />,
    mail: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
    home: <><path d="m3 10 9-7 9 7" /><path d="M5 9v11h14V9M9 20v-6h6v6" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    search: <><circle cx="10.8" cy="10.8" r="6.8" /><path d="m16 16 4.5 4.5" /></>,
    menu: <><path d="M4 6h16M4 12h16M4 18h16" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42" /></>,
    moon: <path d="M20.5 14.6A8.6 8.6 0 0 1 9.4 3.5a.6.6 0 0 0-.8-.7A9.6 9.6 0 1 0 21.2 15.4a.6.6 0 0 0-.7-.8Z" />,
  };

  return (
    <svg
      viewBox="0 0 24 24"
      fill={name === 'moon' || name === 'home' ? 'currentColor' : 'none'}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      {paths[name]}
    </svg>
  );
}

function LandingHeader({
  t,
  lang,
  onLangChange,
  theme,
  onThemeChange,
}: Props) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [fontScale, setFontScale] = useState(1);
  const originalFontSize = useRef('');

  useEffect(() => {
    originalFontSize.current = document.documentElement.style.fontSize;
    return () => {
      document.documentElement.style.fontSize = originalFontSize.current;
    };
  }, []);

  function changeFontScale(nextScale: number) {
    const scale = Math.min(1.15, Math.max(0.9, nextScale));
    setFontScale(scale);
    document.documentElement.style.fontSize = `${scale * 100}%`;
  }

  const navItems = [
    { href: '#home', label: t.navHome, active: true },
    { href: '#about', label: t.navAbout },
    { href: '#notices', label: t.navNotices },
    { href: '#help', label: t.navHelp },
  ];

  return (
    <header className="relative z-30 shadow-sm">
      <div className="bg-[#0b3473] text-white">
        <div className="mx-auto flex min-h-11 max-w-[1420px] flex-wrap items-center justify-between gap-x-4 gap-y-1 px-4 py-1.5 sm:pl-10 sm:pr-0">
          <div className="flex min-w-0 flex-wrap items-center gap-x-4 gap-y-1 text-[11px] font-medium sm:text-sm">
            <a href="tel:18002331266" className="inline-flex items-center gap-2 whitespace-nowrap hover:text-blue-100">
              <HeaderIcon name="phone" className="h-4 w-4" />
              <span>{t.hotline}</span>
            </a>
            <span aria-hidden="true" className="hidden h-5 border-l border-white/40 sm:block" />
            <a href="mailto:mpez.consent@mpez.gov.in" className="hidden items-center gap-2 whitespace-nowrap hover:text-blue-100 sm:inline-flex">
              <HeaderIcon name="mail" className="h-4 w-4" />
              <span>{t.contactEmail}</span>
            </a>
          </div>

          <div className="ml-auto flex items-center gap-2 sm:gap-3">
            <div role="group" aria-label={t.language} className="inline-flex overflow-hidden rounded-full border border-white/30 bg-white">
              {LANGS.map(({ value, label }) => (
                <Button
                  key={value}
                  type="button"
                  lang={value}
                  aria-pressed={lang === value}
                  onClick={() => onLangChange(value)}
                  variant="ghost"
                  size="small"
                  className={`!h-5 !rounded-none !px-3 !text-xs !font-bold ${
                    lang === value ? '!bg-blue-600 !text-white' : '!bg-white !text-blue-950 hover:!bg-blue-50'
                  }`}
                >
                  {label}
                </Button>
              ))}
            </div>

            <div role="group" aria-label={t.textSize} className="hidden items-center gap-1 sm:flex">
              {[
                { label: 'A-', scale: 0.9, aria: t.decreaseText },
                { label: 'A', scale: 1, aria: t.resetText },
                { label: 'A+', scale: 1.15, aria: t.increaseText },
              ].map(({ label, scale, aria }) => (
                <Button
                  key={label}
                  type="button"
                  aria-label={aria}
                  aria-pressed={fontScale === scale}
                  onClick={() => changeFontScale(scale)}
                  variant="outline"
                  size="small"
                  className="!h-5 !min-w-10 !rounded-lg !border-white/30 !bg-transparent !px-2 !text-white hover:!bg-white/10"
                >
                  {label}
                </Button>
              ))}
            </div>

            <div role="group" aria-label={t.theme} className="inline-flex items-center rounded-full border border-white/30 p-0.5">
              <Button
                type="button"
                aria-label={t.light}
                aria-pressed={theme === 'light'}
                onClick={() => onThemeChange('light')}
                variant="ghost"
                size="small"
                className={`!h-5 !w-9 !rounded-full !p-0 ${theme === 'light' ? '!bg-white !text-amber-500' : '!text-white'}`}
              >
                <HeaderIcon name="sun" className="h-4 w-4" />
              </Button>
              <Button
                type="button"
                aria-label={t.dark}
                aria-pressed={theme === 'dark'}
                onClick={() => onThemeChange('dark')}
                variant="ghost"
                size="small"
                className={`!h-5 !w-9 !rounded-full !p-0 ${theme === 'dark' ? '!bg-white !text-blue-900' : '!text-white'}`}
              >
                <HeaderIcon name="moon" className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white">
        <div className="mx-auto flex min-h-[68px] max-w-[1420px] items-center justify-between gap-4 px-4 py-0 sm:pl-10 sm:pr-2">
          <a href="#home" className="flex min-w-0 items-center gap-2.5 sm:gap-6">
            <Logo className="h-12 w-12 flex-none sm:h-[56px] sm:w-[60px]" />
            <span className="min-w-0">
              <span className="flex flex-wrap items-center gap-x-2 gap-y-1 leading-none">
                <span className="text-xl font-extrabold tracking-tight text-[#0b2f6e] sm:text-[27px]">MPEZ</span>
                <span className="rounded-md bg-blue-600 px-2 py-1 text-[10px] font-extrabold text-white sm:text-xs">CMS</span>
                <span className="hidden border-l-2 border-slate-300 pl-2 text-base font-bold text-[#102a55] sm:inline sm:text-xl">{t.portalName}</span>
              </span>
              <span className="mt-1 block truncate text-[9px] font-semibold text-slate-700 sm:text-[13px]">{t.tagline}</span>
            </span>
          </a>

          <nav
            aria-label={t.primaryNavigation}
            className={`${menuOpen ? 'flex' : 'hidden'} absolute inset-x-0 top-full z-40 flex-col gap-1 border-t border-slate-100 bg-white p-3 shadow-lg lg:ml-32 lg:static lg:flex lg:flex-row lg:items-center lg:gap-1 lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}
          >
            {navItems.map(({ href, label, active }) => (
              <a
                key={href}
                href={href}
                onClick={() => setMenuOpen(false)}
                aria-current={active ? 'page' : undefined}
                className={`rounded-xl px-4 py-3 text-sm font-semibold transition-colors lg:py-2.5 lg:text-base ${
                  active
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-slate-800 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {active && <HeaderIcon name="home" className="mr-2 inline h-4 w-4" />}
                {label}
              </a>
            ))}
          </nav>

          <div className="flex flex-none items-center gap-1 text-[#0b2f6e] sm:gap-2">
            <a href="#notices" aria-label={t.notifications} className="relative grid h-10 w-9 place-items-center rounded-lg hover:bg-blue-50">
              <HeaderIcon name="bell" />
              <span aria-hidden="true" className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-red-600 ring-2 ring-white" />
            </a>
            <a href="#notices" aria-label={t.search} className="grid h-10 w-9 place-items-center rounded-lg hover:bg-blue-50">
              <HeaderIcon name="search" />
            </a>
            <Button
              type="button"
              aria-label={t.menu}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              variant="ghost"
              size="small"
              className="!h-10 !w-9 !rounded-lg !p-0 !text-[#0b2f6e] hover:!bg-blue-50"
            >
              <HeaderIcon name="menu" className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>

    </header>
  );
}
