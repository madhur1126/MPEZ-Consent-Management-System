'use client';

import { useCallback, useEffect, useState } from 'react';
import type { Lang } from './i18n';

export type Theme = 'light' | 'dark';

function read(key: string): string | null {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
}

function write(key: string, value: string) {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage can be blocked; the choice just won't persist */
  }
}

/** Light/dark theme. Toggles the `dark` class on <html>. Falls back to the OS setting. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme>('light');

  useEffect(() => {
    const saved = read('login-theme');
    if (saved === 'light' || saved === 'dark') {
      setThemeState(saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setThemeState('dark');
    }
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
  }, [theme]);

  const setTheme = useCallback((next: Theme) => {
    setThemeState(next);
    write('login-theme', next);
  }, []);

  return { theme, setTheme };
}

/** English / Hindi. Keeps <html lang> in sync so fonts and line-height adapt. */
export function useLang() {
  const [lang, setLangState] = useState<Lang>('en');

  useEffect(() => {
    const saved = read('login-lang');
    if (saved === 'en' || saved === 'hi') setLangState(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    write('login-lang', next);
  }, []);

  return { lang, setLang };
}
