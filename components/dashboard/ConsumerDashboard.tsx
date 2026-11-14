'use client';

import { useEffect, useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Header } from '@/components/login/Header';
import { useLang, useTheme } from '@/lib/login/hooks';
import { messages } from '@/lib/login/i18n';
import { DEMO_AUTH_KEY } from '@/lib/login/demoSession';
import {
  consentQuestions,
  dashboardCopy,
  getConsumerDetails,
  getText,
  type ConsentAnswer,
} from '@/lib/dashboard/data';
import { ConsentCard } from './ConsentCard';
import { ConsentConfirmationModal } from './ConsentConfirmationModal';
import { DashboardIcon } from './DashboardIcon';

const submissionStorageKey = (mobile: string) => `mpez-demo-consent-submission_${mobile}`;

type Submission = {
  answers: ConsentAnswer[];
  submittedAt: string;
};

function isSubmission(value: unknown): value is Submission {
  if (!value || typeof value !== 'object') return false;
  const record = value as Record<string, unknown>;
  return (
    Array.isArray(record.answers) &&
    record.answers.length === consentQuestions.length &&
    record.answers.every((answer) => answer === 'yes' || answer === 'no') &&
    typeof record.submittedAt === 'string' &&
    !Number.isNaN(Date.parse(record.submittedAt))
  );
}

function PersonalInformation({
  lang,
  copy,
  details,
}: {
  lang: 'en' | 'hi';
  copy: (typeof dashboardCopy)['en'];
  details: ReturnType<typeof getConsumerDetails>;
}) {
  return (
    <section aria-labelledby="consumer-info-title" className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-[#168BEE]">{copy.personalDetails}</p>
          <h2 id="consumer-info-title" className="mt-1 text-2xl font-bold text-slate-950 dark:text-white">{copy.consumerInfo}</h2>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-[#0B3F91] dark:bg-blue-950 dark:text-blue-200">
          <DashboardIcon name="lock" className="h-4 w-4" />
          {copy.secureInfo}
        </span>
      </div>

      <dl className="mt-6 grid gap-3 sm:grid-cols-2">
        {details.map((detail) => (
          <div key={detail.label.en} className="flex min-w-0 items-center gap-3 rounded-2xl border border-blue-100 bg-[#F5F9FF] p-3.5 dark:border-slate-700 dark:bg-slate-800/70">
            <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-white text-[#0B3F91] shadow-sm dark:bg-slate-900 dark:text-blue-300">
              <DashboardIcon name={detail.icon} />
            </span>
            <div className="min-w-0 flex-1">
              <dt className="text-xs font-medium text-slate-500 dark:text-slate-400">{getText(detail.label, lang)}</dt>
              <dd className="mt-0.5 break-words text-sm font-bold text-slate-900 dark:text-slate-100">{detail.value}</dd>
            </div>
            {'verified' in detail && detail.verified && (
              <span className="inline-flex flex-none items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-[11px] font-semibold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
                <DashboardIcon name="check" className="h-3.5 w-3.5" />
                <span className="hidden sm:inline">{copy.verified}</span>
              </span>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}

function ConsentProgress({
  answered,
  total,
  copy,
}: {
  answered: number;
  total: number;
  copy: (typeof dashboardCopy)['en'];
}) {
  const pending = total - answered;
  return (
    <section aria-labelledby="summary-title" className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">
      <h3 id="summary-title" className="text-xl font-bold text-slate-950 dark:text-white">{copy.summary}</h3>
      <div className="mt-5 grid grid-cols-3 gap-3">
        {[
          { label: copy.total, value: total },
          { label: copy.answered, value: `${answered}/${total}` },
          { label: copy.pending, value: pending },
        ].map((item) => (
          <div key={item.label} className="rounded-2xl bg-[#F3F8FF] p-3 text-center dark:bg-slate-800 sm:p-4">
            <p className="text-xl font-extrabold text-[#0B3F91] dark:text-blue-300 sm:text-2xl">{item.value}</p>
            <p className="mt-1 text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">{item.label}</p>
          </div>
        ))}
      </div>
      <div className="mt-5">
        <div className="mb-2 flex justify-between text-xs font-semibold text-slate-600 dark:text-slate-300">
          <span>{copy.answered}</span><span>{answered}/{total}</span>
        </div>
        <div
          role="progressbar"
          aria-label={copy.answered}
          aria-valuemin={0}
          aria-valuemax={total}
          aria-valuenow={answered}
          className="h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700"
        >
          <div className="h-full rounded-full bg-gradient-to-r from-[#0B3F91] to-[#168BEE] transition-[width]" style={{ width: `${(answered / total) * 100}%` }} />
        </div>
      </div>
    </section>
  );
}

export function ConsumerDashboard({ consumerMobile }: { consumerMobile: string }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const copy = dashboardCopy[lang];
  const loginCopy = messages[lang];
  const consumerDetails = getConsumerDetails(consumerMobile);
  const consumerName = consumerDetails[0].value;
  const consumerNumber = consumerDetails[1].value;
  const [answers, setAnswers] = useState<(ConsentAnswer | null)[]>(() => Array(consentQuestions.length).fill(null));
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [modal, setModal] = useState<'confirm' | 'view' | null>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const [submissionError, setSubmissionError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const answered = useMemo(() => answers.filter((answer) => answer !== null).length, [answers]);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(submissionStorageKey(consumerMobile));
      setAnswers(Array(consentQuestions.length).fill(null));
      setConfirmationChecked(false);
      setSubmission(null);
      if (!saved) return;
      const parsed: unknown = JSON.parse(saved);
      if (!isSubmission(parsed)) {
        setSubmissionError(copy.storageError);
        return;
      }
      setSubmission(parsed);
    } catch {
      setSubmissionError(copy.storageError);
    }
  }, [consumerMobile, copy.storageError]);

  function logout() {
    try {
      window.localStorage.removeItem(DEMO_AUTH_KEY);
    } finally {
      router.replace('/login');
    }
  }

  function updateAnswer(index: number, answer: ConsentAnswer) {
    setAnswers((current) => current.map((value, i) => (i === index ? answer : value)));
    setSubmissionError(null);
  }

  function openConfirmation() {
    if (answered !== consentQuestions.length || !confirmationChecked) {
      setSubmissionError(copy.checkAll);
      return;
    }
    setSubmissionError(null);
    setModal('confirm');
  }

  function confirmSubmission() {
    const completeAnswers = answers.filter((answer): answer is ConsentAnswer => answer !== null);
    if (completeAnswers.length !== consentQuestions.length) {
      setSubmissionError(copy.checkAll);
      return;
    }
    const nextSubmission: Submission = { answers: completeAnswers, submittedAt: new Date().toISOString() };
    setSaving(true);
    setSubmissionError(null);
    try {
      window.localStorage.setItem(submissionStorageKey(consumerMobile), JSON.stringify(nextSubmission));
      setSubmission(nextSubmission);
      setModal(null);
    } catch {
      setSubmissionError(copy.storageError);
    } finally {
      setSaving(false);
    }
  }

  const formattedDate = submission
    ? new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
        dateStyle: 'medium',
        timeStyle: 'short',
      }).format(new Date(submission.submittedAt))
    : '';

  return (
    <div className="login-root login-sky min-h-screen text-slate-900 antialiased">
      <Header t={loginCopy} lang={lang} onLangChange={setLang} theme={theme} onThemeChange={setTheme} />
      <main className="mx-auto w-full max-w-[1320px] px-4 pb-14 pt-8 sm:px-6 lg:pt-12">
        <div className="mb-6 flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-blue-100 bg-white/90 p-4 shadow-sm backdrop-blur dark:border-slate-700 dark:bg-slate-900/90">
          <div className="flex items-center gap-3">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#EAF3FF] text-[#0B3F91] dark:bg-blue-950 dark:text-blue-300">
              <DashboardIcon name="user" className="h-6 w-6" />
            </span>
            <span className="font-bold text-slate-900 dark:text-white">{copy.greeting}</span>
          </div>
          <button type="button" onClick={logout} className="inline-flex min-h-11 items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 text-sm font-semibold text-slate-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-700 dark:border-slate-700 dark:text-slate-200 dark:hover:bg-red-950">
            <DashboardIcon name="logout" />
            {copy.logout}
          </button>
        </div>

        {submission ? (
          <section aria-labelledby="success-title" className="mx-auto max-w-3xl rounded-3xl border border-emerald-200 bg-white p-6 text-center shadow-lg dark:border-emerald-900 dark:bg-slate-900 sm:p-10">
            <span className="mx-auto grid h-16 w-16 place-items-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-300">
              <DashboardIcon name="check" className="h-9 w-9" />
            </span>
            <h1 id="success-title" className="mt-5 text-2xl font-extrabold text-slate-950 dark:text-white sm:text-3xl">{copy.successTitle}</h1>
            <p className="mx-auto mt-2 max-w-xl text-slate-600 dark:text-slate-300">{copy.successMessage}</p>
            <div className="mt-7 grid gap-3 text-left sm:grid-cols-2">
              {[
                [copy.consumerName, consumerName],
                [copy.consumerNumber, consumerNumber],
                [copy.submittedAt, formattedDate],
                [copy.submissionStatus, copy.submitted],
              ].map(([label, value]) => (
                <div key={label} className="rounded-xl bg-[#F3F8FF] p-4 dark:bg-slate-800">
                  <p className="text-xs font-medium text-slate-500 dark:text-slate-400">{label}</p>
                  <p className="mt-1 break-words text-sm font-bold text-slate-900 dark:text-white">{value}</p>
                </div>
              ))}
            </div>
            <button type="button" onClick={() => setModal('view')} className="mt-7 min-h-12 rounded-xl bg-[#0B3F91] px-6 text-sm font-bold text-white transition hover:bg-[#168BEE]">
              {copy.viewSubmitted}
            </button>
          </section>
        ) : (
          <>
            <section className="mb-6">
              <p className="text-sm font-bold uppercase tracking-[0.16em] text-[#168BEE]">{copy.greeting}</p>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-[#0B3F91] dark:text-blue-200 sm:text-4xl">{copy.welcomeTitle}</h1>
              <p className="mt-3 max-w-4xl text-base leading-7 text-slate-700 dark:text-slate-300">{copy.welcomeDescription}</p>
            </section>

            <div role="note" className="mb-7 flex items-start gap-3 rounded-2xl border border-blue-200 bg-[#EAF3FF] p-4 text-sm font-medium leading-6 text-[#0B3F91] dark:border-blue-900 dark:bg-blue-950/70 dark:text-blue-100">
              <DashboardIcon name="shield" className="mt-0.5 h-5 w-5 flex-none" />
              <span>{copy.privacy}</span>
            </div>

            <PersonalInformation lang={lang} copy={copy} details={consumerDetails} />

            <section aria-labelledby="consent-title" className="mt-9">
              <div className="mb-5">
                <h2 id="consent-title" className="text-2xl font-extrabold text-[#0B3F91] dark:text-blue-200 sm:text-3xl">{copy.consentTitle}</h2>
                <p className="mt-2 max-w-4xl text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-base">{copy.consentDescription}</p>
              </div>
              <div className="grid gap-4 lg:grid-cols-2">
                {consentQuestions.map((question, index) => (
                  <ConsentCard
                    key={question.id}
                    question={question}
                    lang={lang}
                    copy={copy}
                    value={answers[index]}
                    onChange={(answer) => updateAnswer(index, answer)}
                  />
                ))}
              </div>
            </section>

            <section className="mt-8 grid gap-5 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]">
              <ConsentProgress answered={answered} total={consentQuestions.length} copy={copy} />
              <div className="rounded-3xl border border-blue-100 bg-white p-5 shadow-sm dark:border-slate-700 dark:bg-slate-900 sm:p-7">
                <label className="flex cursor-pointer items-start gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
                  <input
                    type="checkbox"
                    checked={confirmationChecked}
                    onChange={(event) => {
                      setConfirmationChecked(event.target.checked);
                      setSubmissionError(null);
                    }}
                    className="mt-1 h-5 w-5 flex-none accent-[#0B3F91]"
                  />
                  <span>{copy.confirmation}</span>
                </label>
                {submissionError && <p role="alert" className="mt-3 text-sm font-medium text-red-700 dark:text-red-300">{submissionError}</p>}
                <button
                  type="button"
                  disabled={answered !== consentQuestions.length || !confirmationChecked}
                  onClick={openConfirmation}
                  className="mt-5 min-h-12 w-full rounded-xl bg-[#0B3F91] px-5 text-sm font-bold text-white transition hover:bg-[#168BEE] disabled:cursor-not-allowed disabled:bg-slate-300 disabled:text-slate-500 dark:disabled:bg-slate-700 dark:disabled:text-slate-400"
                >
                  {copy.submit}
                </button>
                {submissionError && <p className="sr-only">{copy.checkAll}</p>}
              </div>
            </section>
          </>
        )}
      </main>

      {modal && (
        <ConsentConfirmationModal
          lang={lang}
          copy={copy}
          answers={modal === 'view' && submission ? submission.answers : answers}
          readOnly={modal === 'view'}
          error={modal === 'confirm' ? submissionError : null}
          saving={saving}
          onClose={() => {
            setModal(null);
            setSubmissionError(null);
          }}
          onConfirm={confirmSubmission}
        />
      )}
    </div>
  );
}
