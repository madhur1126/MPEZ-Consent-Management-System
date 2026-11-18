'use client';

import type { Lang } from '@/lib/login/i18n';
import type { ConsentAnswer, DashboardCopy } from '@/lib/dashboard/data';
import { consentQuestions } from '@/lib/dashboard/data';
import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import type { ConsentSubmission, IVRSConnection } from '@/lib/dashboard/types';
import { ConfirmDialog } from '@/components/common';
import { ConsentCard } from './ConsentCard';

function formatSubmissionDate(value: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(value));
}

export function ConsentConfirmationModal({
  lang,
  consentCopy,
  copy,
  connection,
  answers,
  readOnly,
  submission,
  error,
  saving,
  onClose,
  onConfirm,
}: {
  lang: Lang;
  consentCopy: DashboardCopy;
  copy: MultiIvrsCopy;
  connection: IVRSConnection;
  answers: (ConsentAnswer | null)[];
  readOnly: boolean;
  submission?: ConsentSubmission;
  error: string | null;
  saving: boolean;
  onClose: () => void;
  onConfirm?: () => void;
}) {
  const consumerName = submission?.consumerNameSnapshot ?? connection.consumerName;
  const address = submission?.addressSnapshot ?? connection.address;

  return (
    <ConfirmDialog
      isOpen
      title={readOnly ? copy.openSubmission : copy.confirmationTitle}
      description={readOnly
        ? `${connection.ivrsNumber} · ${copy.version} ${submission?.version ?? ''}`
        : copy.confirmationDescription}
      closeLabel={readOnly ? copy.close : copy.goBack}
      onClose={onClose}
      mode={readOnly ? 'dialog' : 'confirmation'}
      cancelLabel={readOnly ? copy.close : copy.goBack}
      confirmLabel={readOnly ? undefined : copy.confirmSubmit}
      onConfirm={onConfirm}
      confirmLoading={saving}
      confirmDisabled={saving}
      size="large"
      bodyClassName="space-y-3"
    >
        <>
          <dl className="grid gap-3 rounded-2xl bg-blue-50 p-4 text-sm dark:bg-slate-800 sm:grid-cols-2">
            <div>
              <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.ivrsNumber}</dt>
              <dd className="mt-1 font-bold text-blue-800 dark:text-blue-200">{connection.ivrsNumber}</dd>
            </div>
            <div>
              <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.nameSnapshot}</dt>
              <dd className="mt-1 font-semibold text-slate-900 dark:text-slate-100">{consumerName}</dd>
            </div>
            <div className="sm:col-span-2">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.addressSnapshot}</dt>
              <dd className="mt-1 break-words font-medium text-slate-800 dark:text-slate-200">{address}</dd>
            </div>
            {submission && (
              <>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.submissionId}</dt>
                  <dd className="mt-1 break-all font-mono text-xs font-medium text-slate-800 dark:text-slate-200">{submission.id}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.submittedStatus}</dt>
                  <dd className="mt-1 font-medium text-slate-800 dark:text-slate-200">
                    {submission.status === 'current' ? copy.currentSubmission : copy.supersededSubmission}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.submittedAt}</dt>
                  <dd className="mt-1 font-medium text-slate-800 dark:text-slate-200">
                    {formatSubmissionDate(submission.submittedAt, lang)}
                  </dd>
                </div>
              </>
            )}
          </dl>
          {consentQuestions.map((question) => (
            <ConsentCard
              key={question.id}
              question={question}
              lang={lang}
              copy={consentCopy}
              value={answers[question.id - 1] ?? null}
              disabled
            />
          ))}
          {error && <p role="alert" className="rounded-lg bg-red-50 px-4 py-3 text-sm text-red-800 dark:bg-red-950 dark:text-red-200">{error}</p>}
        </>
    </ConfirmDialog>
  );
}
