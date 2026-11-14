
"use client";

import { useRouter } from "next/navigation";
import { messages } from "@/lib/login/i18n";
import { useLang, useTheme } from "@/lib/login/hooks";
import { saveDemoSession } from "@/lib/login/demoSession";
import { Header } from "./Header";
import { BRAND } from "./Logo";
import { LoginCard, type LoginCardProps } from "./LoginCard";
import { FooterWave, Scene } from "./Scene";

type Props = Pick<LoginCardProps, "onRequestOtp" | "onVerifyOtp">;

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

    if (process.env.NODE_ENV === "production") {
      throw new Error("OTP sending is not configured.");
    }
  }

  async function verifyOtp(mobile: string, code: string) {
    if (onVerifyOtp) {
      await onVerifyOtp(mobile, code);
    } else if (
      process.env.NODE_ENV === "production" ||
      code !== "123456"
    ) {
      throw new Error("The OTP is invalid or verification is not configured.");
    }

    saveDemoSession(mobile);
    router.push("/dashboard");
  }

  return (
    <div className="login-root login-sky relative flex min-h-screen flex-col overflow-hidden font-login text-login-text antialiased">

      <Scene />

      <Header
        t={t}
        lang={lang}
        onLangChange={setLang}
        theme={theme}
        onThemeChange={setTheme}
      />

      <main className="relative z-20 flex flex-1 items-center">

        <div className="mx-auto grid w-full max-w-[1320px] items-center gap-5 px-3 pb-24 pt-4 sm:gap-8 sm:px-6 sm:pb-32 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,480px)] lg:gap-12 lg:pb-20 lg:pt-8">

          <section className="min-w-0 lg:pr-2">

            {/* Official DISCOM Portal Badge */}
            <div className="mb-5 inline-flex max-w-full items-center gap-2 rounded-full border border-sky-200/80 bg-sky-950/85 px-4 py-1.5 text-white shadow-lg backdrop-blur-md dark:border-sky-400/30 dark:bg-slate-900/90 sm:mb-7 sm:px-5 sm:py-2.5 mt-1">

              {/* Green Status Indicator */}
              <span className="relative flex h-2.5 w-2.5 flex-none">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
              </span>

              <span className="text-[10px] font-semibold tracking-wide sm:text-sm">
                {t.officialPortal}
              </span>

            </div>

            {/* Main Heading */}
            <h1 className="login-text-glow text-[clamp(16px,6vw,36px)] sm:text-[clamp(16px,6vw,46px)] font-extrabold leading-[1.02] tracking-tight text-login-ink">
              {BRAND.name}
            </h1>

            {/* Subtitle */}
            <p className="login-text-glow mt-1 w-full text-[clamp(14px,7vw,19px)] font-bold leading-tight tracking-tight text-login-ink sm:mt-1.5 sm:text-[clamp(24px,3.2vw,44px)]">
              {t.system}
            </p>

            {/* Yellow Divider */}
            <div className="my-3 h-1 sm:h-2 w-[50%] rounded bg-login-gold sm:my-6 sm:w-[81%]" />

            {/* Description */}
            <p className="relative z-10 mt-3 max-w-[30em] rounded-2xl border border-white/70 bg-white/75 p-3 text-base leading-6 text-login-text shadow-sm backdrop-blur-sm dark:border-slate-700/80 dark:bg-slate-950/60 sm:mt-4 sm:p-4 sm:text-[clamp(17px,1.5vw,21px)] sm:leading-[1.55] [html[lang=hi]_&]:leading-[1.7]">
              {t.desc}
            </p>

          </section>

          {/* Login Form */}
          <LoginCard
            t={t}
            onRequestOtp={requestOtp}
            onVerifyOtp={verifyOtp}
          />

        </div>
      </main>

      <FooterWave />

    </div>
  );
}
