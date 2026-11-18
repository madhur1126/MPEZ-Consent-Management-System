
"use client";

import { useRouter } from "next/navigation";
import { messages } from "@/lib/login/i18n";
import { useLang, useTheme } from "@/lib/login/hooks";
import { saveDemoSession } from "@/lib/login/demoSession";
import { AppLayout, Header } from "@/components/layout";
import type { ReactNode } from "react";
import { BRAND } from "./Logo";
import { LoginCard, type LoginCardProps } from "./LoginCard";
import { FooterWave, HomeIllustration, Scene } from "./Scene";

type Props = Pick<LoginCardProps, "onRequestOtp" | "onVerifyOtp">;

type FeatureName = "shield" | "bell" | "lock" | "bolt";

function FeatureIcon({ name }: { name: FeatureName }) {
  const paths: Record<FeatureName, ReactNode> = {
    shield: <><path d="M12 3 20 6v5c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6l8-3Z" /><path d="m8.5 12 2.2 2.2 4.8-5" /></>,
    bell: <><path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9" /><path d="M10 21h4" /></>,
    lock: <><rect x="4" y="10" width="16" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    bolt: <path d="m13 2-9 12h7l-1 8 10-13h-7l1-7Z" />,
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="h-6 w-6">
      {paths[name]}
    </svg>
  );
}

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
  }

  async function verifyOtp(mobile: string, code: string) {
    if (onVerifyOtp) {
      await onVerifyOtp(mobile, code);
    } else if (code !== "123456") {
      throw new Error("The OTP is invalid or verification is not configured.");
    }

    saveDemoSession(mobile);
    router.push("/dashboard");
  }

  return (
    <AppLayout
      className="login-root login-sky relative flex min-h-screen flex-col overflow-hidden font-login text-login-text antialiased"
      background={<Scene />}
      header={(
        <Header
          variant="landing"
          t={t}
          lang={lang}
          onLangChange={setLang}
          theme={theme}
          onThemeChange={setTheme}
        />
      )}
      footer={(
        <FooterWave
          benefits={[
            { icon: "people", title: t.benefitControlTitle, description: t.benefitControlDescription },
            { icon: "eye", title: t.benefitTransparencyTitle, description: t.benefitTransparencyDescription },
            { icon: "hand", title: t.benefitServicesTitle, description: t.benefitServicesDescription },
          ]}
        />
      )}
      mainClassName="relative z-20 flex items-center"
    >
      <div id="home" className="mx-auto grid w-full max-w-[1420px] -translate-y-2 items-center gap-5 px-4 pb-32 pt-5 sm:gap-8 sm:px-6 sm:pb-36 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_minmax(410px,480px)] lg:gap-8 xl:-translate-y-[11px] xl:gap-10">
        <section id="about" className="min-w-0">
          <div className="grid items-center gap-1 xl:grid-cols-[minmax(0,1.3fr)_minmax(300px,1fr)]">
            <div className="relative z-10 min-w-0">
              <div className="xl:-translate-y-3 xl:pl-6">
                <div className="mb-4 inline-flex max-w-full items-center gap-2 rounded-full border border-white bg-white px-4 py-2 text-[#102a55] shadow-md sm:mb-3">
                  <span className="relative flex h-3 w-3 flex-none">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-50" />
                    <span className="relative inline-flex h-3 w-3 rounded-full bg-green-600" />
                  </span>
                  <span className="text-xs font-bold sm:text-sm">{t.officialPortal}</span>
                </div>

                <h1 className="login-text-glow text-[clamp(2rem,4.2vw,3.15rem)] font-extrabold leading-[1.02] tracking-tight text-login-ink">
                  <span className="block">{BRAND.name}</span>
                  {lang === "en" ? (
                    <>
                      <span className="mt-1 block whitespace-nowrap text-[0.66em]">{t.system.replace(" System", "")}</span>
                      <span className="block text-blue-600">System</span>
                    </>
                  ) : (
                    <span className="mt-1 block text-[0.78em]">{t.system}</span>
                  )}
                </h1>

                <div className="my-3 h-1.5 w-40 rounded-full bg-login-gold sm:my-4 sm:h-2 sm:w-48" />
                <p className="max-w-[31rem] text-sm font-medium leading-6 text-login-text sm:text-base sm:leading-6">
                  {t.desc}
                </p>
              </div>

              <div className="mt-[-8px] grid max-w-[480px] grid-cols-2 gap-y-3 sm:grid-cols-4 sm:gap-y-0">
                {([
                  ["shield", t.featureSecure],
                  ["bell", t.featureNotifications],
                  ["lock", t.featureControl],
                  ["bolt", t.featureQuick],
                ] as const).map(([icon, label], index) => (
                  <div key={label} className={`flex min-w-0 flex-col items-center gap-1.5 px-2 text-center text-[#102a55] ${index < 3 ? "sm:border-r sm:border-slate-400" : ""}`}>
                    <span className="grid h-14 w-14 place-items-center border border-blue-900 rounded-xl bg-blue-100 text-[#0b3473] shadow-sm sm:h-16 sm:w-16">
                      <FeatureIcon name={icon} />
                    </span>
                    <span className="max-w-[7rem] text-[10px] font-extrabold leading-tight sm:text-[11px]">{label}</span>
                  </div>
                ))}
              </div>
            </div>

            <HomeIllustration className="hidden h-[310px] w-full max-w-[390px] justify-self-center xl:block xl:-translate-y-[0px] xl:scale-[1.5]" />
          </div>
        </section>

        <LoginCard t={t} onRequestOtp={requestOtp} onVerifyOtp={verifyOtp} />
      </div>
    </AppLayout>
  );
}
