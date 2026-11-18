'use client';

import { useMemo, type FormEvent } from 'react';
import type { Lang } from '@/lib/login/i18n';
import { consentQuestions, dashboardCopy, type ConsentAnswer } from '@/lib/dashboard/data';
import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import type { IVRSConnection } from '@/lib/dashboard/types';
import { Button, Checkbox, Modal } from '@/components/common';
import { ConsentCard } from './ConsentCard';
import { DashboardIcon } from './DashboardIcon';

export function ConsentForm({
  connection,
  lang,
  copy,
  answers,
  confirmationChecked,
  hasError,
  onAnswer,
  onConfirmationChange,
  onClose,
  onReview,
}: {
  connection: IVRSConnection;
  lang: Lang;
  copy: MultiIvrsCopy;
  answers: (ConsentAnswer | null)[];
  confirmationChecked: boolean;
  hasError: boolean;
  onAnswer: (questionIndex: number, answer: ConsentAnswer) => void;
  onConfirmationChange: (checked: boolean) => void;
  onClose: () => void;
  onReview: () => void;
}) {
  const answered = useMemo(() => answers.filter((answer) => answer !== null).length, [answers]);
  const pending = consentQuestions.length - answered;

  function submitForReview(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onReview();
  }

  return (
    <Modal
      isOpen
      title={copy.consentFormTitle}
      description={copy.consentFormDescription}
      eyebrow={connection.ivrsNumber}
      closeLabel={copy.cancel}
      onClose={onClose}
      size="wide"
      panelClassName="!max-h-[96vh]"
      bodyClassName="!overflow-hidden !p-0"
    >
        <form onSubmit={submitForReview} className="flex min-h-0 flex-1 flex-col">
          <div className="min-h-0 max-h-[calc(96vh-160px)] flex-1 space-y-4 overflow-y-auto p-4 sm:p-6">
            <div className="grid gap-2 rounded-2xl border border-blue-100 bg-blue-50 p-3 text-sm dark:border-slate-700 dark:bg-slate-800 sm:grid-cols-3 sm:p-4">
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{copy.ivrsNumber}</p>
                <p className="mt-1 font-bold text-blue-800 dark:text-blue-200">{connection.ivrsNumber}</p>
              </div>
              <div>
                <p className="text-xs text-slate-500 dark:text-slate-400">{copy.consumerName}</p>
                <p className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{connection.consumerName}</p>
              </div>
              <div className="sm:col-span-1">
                <p className="text-xs text-slate-500 dark:text-slate-400">{copy.address}</p>
                <p className="mt-1 break-words font-medium text-slate-800 dark:text-slate-200">{connection.address}</p>
              </div>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {consentQuestions.map((question, index) => (
                <ConsentCard
                  key={question.id}
                  question={question}
                  lang={lang}
                  copy={dashboardCopy[lang]}
                  value={answers[index] ?? null}
                  onChange={(answer) => onAnswer(index, answer)}
                />
              ))}
            </div>

            <section aria-labelledby="consent-progress-title" className="rounded-2xl border border-slate-200 p-4 dark:border-slate-700">
              <div className="flex items-center justify-between gap-3">
                <h3 id="consent-progress-title" className="font-bold text-slate-900 dark:text-white">{copy.answered}</h3>
                <span className="text-sm font-bold text-blue-800 dark:text-blue-200">{answered}/{consentQuestions.length}</span>
              </div>
              <div className="mt-2 h-2.5 overflow-hidden rounded-full bg-slate-100 dark:bg-slate-700">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-800 to-blue-600 transition-[width]"
                  role="progressbar"
                  aria-label={copy.answered}
                  aria-valuemin={0}
                  aria-valuemax={consentQuestions.length}
                  aria-valuenow={answered}
                  style={{ width: `${(answered / consentQuestions.length) * 100}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-slate-600 dark:text-slate-300">{copy.pendingQuestions}: {pending}</p>
            </section>

            <Checkbox
              label={copy.confirmation}
              aria-required="true"
              className="rounded-xl border border-slate-200 p-3 dark:border-slate-700"
              labelClassName="!items-start !gap-3 !leading-6"
              checked={confirmationChecked}
              onChange={(event) => onConfirmationChange(event.target.checked)}
            />
            {hasError && (
              <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm font-medium text-red-800 dark:bg-red-950 dark:text-red-200">
                {copy.completeAll}
              </p>
            )}
          </div>
          <footer className="flex flex-col-reverse gap-2 border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:flex-row sm:justify-end sm:px-6">
            <Button type="button" variant="outline" onClick={onClose}>{copy.cancel}</Button>
            <Button
              type="submit"
              rightIcon={<DashboardIcon name="check" className="h-4 w-4" />}
              className="!bg-blue-800 hover:!bg-blue-700"
            >
              {copy.submit}
            </Button>
          </footer>
        </form>
    </Modal>
  );
}
