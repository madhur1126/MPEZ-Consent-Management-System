'use client';

import { useRouter } from 'next/navigation';
import { messages } from '@/lib/login/i18n';
import { useLang, useTheme } from '@/lib/login/hooks';
import { saveDemoSession } from '@/lib/login/demoSession';
import { Header } from './Header';
import { BRAND } from './Logo';
import { LoginCard, type LoginCardProps } from './LoginCard';
import { FooterWave, Scene } from './Scene';

type Props = Pick<LoginCardProps, 'onRequestOtp' | 'onVerifyOtp'>;

export function LoginScreen({ onRequestOtp, onVerifyOtp }: Props) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const t = messages[lang];

  async function requestOtp(mobile: string) {
    if (onRequestOtp) {
      await onRequestOtp(mobile);
      return;
    }
    if (process.env.NODE_ENV === 'production') {
      throw new Error('OTP sending is not configured.');
    }
  }

  async function verifyOtp(mobile: string, code: string) {
    if (onVerifyOtp) {
      await onVerifyOtp(mobile, code);
    } else if (process.env.NODE_ENV === 'production' || code !== '123456') {
      throw new Error('The OTP is invalid or verification is not configured.');
    }

    saveDemoSession(mobile);
    router.push('/dashboard');
  }

  return (
    <div className="login-root login-sky relative flex min-h-screen flex-col overflow-hidden font-login text-login-text antialiased">
      <Scene />
      <Header t={t} lang={lang} onLangChange={setLang} theme={theme} onThemeChange={setTheme} />

      <main className="relative z-20 flex flex-1 items-center">
        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-8 px-4 pb-32 pt-12 sm:px-6 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-12 lg:pb-40 lg:pt-16">
          <section className="min-w-0 lg:pr-2">
            <h1 className="login-text-glow text-[clamp(44px,6vw,76px)] font-extrabold leading-[1.02] tracking-tight text-login-ink">
              {BRAND.name}
            </h1>
           
<p className="login-text-glow mt-1.5 w-full whitespace-nowrap text-[clamp(24px,3.2vw,44px)] font-bold leading-tight tracking-tight text-login-ink">
  {t.system}
</p>

            <div className="my-6 h-2 w-[140px] rounded bg-login-gold" />
            <p className="relative z-10 mt-4 max-w-[30em] rounded-2xl border border-white/70 bg-white/75 p-4 text-[clamp(17px,1.5vw,21px)] leading-[1.55] text-login-text shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-950/60 [html[lang=hi]_&]:leading-[1.7]">
              {t.desc}
            </p>
          </section>

          <LoginCard t={t} onRequestOtp={requestOtp} onVerifyOtp={verifyOtp} />
        </div>
      </main>

      <FooterWave />
    </div>
  );
}
