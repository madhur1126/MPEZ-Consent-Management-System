'use client';

import type { Lang } from '@/lib/login/i18n';
import type { ConsentSubmission, IVRSConnection } from '@/lib/dashboard/types';
import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import { Badge, Button, Card, EmptyState, Modal } from '@/components/common';

function formatDate(value: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date(value));
}

export function ConsentHistoryModal({
  connection,
  lang,
  copy,
  onClose,
  onOpenSubmission,
}: {
  connection: IVRSConnection;
  lang: Lang;
  copy: MultiIvrsCopy;
  onClose: () => void;
  onOpenSubmission: (submission: ConsentSubmission) => void;
}) {
  const submissions = [...connection.submissions].sort((a, b) => b.version - a.version);

  return (
    <Modal
      isOpen
      title={copy.historyTitle}
      eyebrow={connection.ivrsNumber}
      closeLabel={copy.close}
      onClose={onClose}
      size="large"
      bodyClassName="space-y-3"
    >
        <>
          {submissions.length === 0 ? (
            <EmptyState title={copy.historyEmpty} className="border-0 bg-slate-50 px-4 py-8 dark:bg-slate-800" />
          ) : submissions.map((submission) => (
            <Card key={submission.id} as="article" className="p-4">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="font-bold text-slate-900 dark:text-slate-100">{copy.version} {submission.version}</p>
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                    {copy.submissionId}: <span className="break-all font-mono">{submission.id}</span>
                  </p>
                </div>
                <Badge status={submission.status}>
                  {submission.status === 'current' ? copy.currentSubmission : copy.supersededSubmission}
                </Badge>
              </div>
              <dl className="mt-3 grid gap-2 text-sm sm:grid-cols-2">
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.submittedAt}</dt>
                  <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">{formatDate(submission.submittedAt, lang)}</dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.submittedStatus}</dt>
                  <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">
                    {submission.status === 'current' ? copy.currentSubmission : copy.supersededSubmission}
                  </dd>
                </div>
                <div>
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.nameSnapshot}</dt>
                  <dd className="mt-0.5 font-medium text-slate-800 dark:text-slate-200">{submission.consumerNameSnapshot}</dd>
                </div>
                <div className="sm:col-span-2">
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.addressSnapshot}</dt>
                  <dd className="mt-0.5 break-words font-medium text-slate-800 dark:text-slate-200">{submission.addressSnapshot}</dd>
                </div>
              </dl>
              <Button
                type="button"
                variant="outline"
                size="small"
                onClick={() => onOpenSubmission(submission)}
                className="!mt-4 !rounded-lg !text-xs"
              >
                {copy.openSubmission}
              </Button>
            </Card>
          ))}
        </>
    </Modal>
  );
}
