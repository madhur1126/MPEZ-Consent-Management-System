'use client';

import type { Lang } from '@/lib/login/i18n';
import type { ConsentAnswer, DashboardCopy } from '@/lib/dashboard/data';
import { consentQuestions } from '@/lib/dashboard/data';
import { ConsentCard } from './ConsentCard';

export function ConsentConfirmationModal({
  lang,
  copy,
  answers,
  readOnly,
  error,
  saving,
  onClose,
  onConfirm,
}: {
  lang: Lang;
  copy: DashboardCopy;
  answers: (ConsentAnswer | null)[];
  readOnly: boolean;
  error: string | null;
  saving: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !saving) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="consent-modal-title"
        className="max-h-[92vh] w-full max-w-3xl overflow-hidden rounded-t-3xl bg-white shadow-2xl dark:bg-slate-900 sm:rounded-3xl"
      >
        <header className="border-b border-slate-200 px-5 py-5 dark:border-slate-700 sm:px-7">
          <h2 id="consent-modal-title" className="text-xl font-bold text-slate-950 dark:text-white">
            {readOnly ? copy.viewSubmitted : copy.modalTitle}
          </h2>
          {!readOnly && <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{copy.modalDescription}</p>}
        </header>
        <div className="max-h-[calc(92vh-170px)] space-y-3 overflow-y-auto p-4 sm:p-6">
          {consentQuestions.map((question) => (
            <ConsentCard
              key={question.id}
              question={question}
              lang={lang}
              copy={copy}
              value={answers[question.id - 1] ?? null}
              disabled
            />
          ))}
          {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">{error}</p>}
        </div>
        <footer className="flex flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:flex-row sm:justify-end sm:px-6">
          <button
            type="button"
            onClick={onClose}
            disabled={saving}
            className="min-h-11 rounded-xl border border-slate-300 bg-white px-5 text-sm font-semibold text-slate-700 hover:bg-slate-100 disabled:opacity-60 dark:border-slate-600 dark:bg-slate-900 dark:text-white"
          >
            {readOnly ? copy.close : copy.goBack}
          </button>
          {!readOnly && (
            <button
              type="button"
              onClick={onConfirm}
              disabled={saving}
              className="min-h-11 rounded-xl bg-[#0B3F91] px-5 text-sm font-semibold text-white hover:bg-[#168BEE] disabled:opacity-60"
            >
              {saving ? '…' : copy.confirmSubmit}
            </button>
          )}
        </footer>
      </section>
    </div>
  );
}
