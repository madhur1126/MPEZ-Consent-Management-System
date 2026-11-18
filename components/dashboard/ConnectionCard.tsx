'use client';

import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import type { IVRSConnection } from '@/lib/dashboard/types';
import { Badge, Button, Card } from '@/components/common';
import { DashboardIcon } from './DashboardIcon';

export function ConnectionCard({
  connection,
  statusLabel,
  lastConsent,
  copy,
  onViewDetails,
  onGiveConsent,
  onViewConsent,
  onViewHistory,
  onReConsent,
}: {
  connection: IVRSConnection;
  statusLabel: string;
  lastConsent: string;
  copy: MultiIvrsCopy;
  onViewDetails: () => void;
  onGiveConsent: () => void;
  onViewConsent: () => void;
  onViewHistory: () => void;
  onReConsent: () => void;
}) {
  const completed = connection.consentStatus === 'completed';
  return (
    <Card
      as="article"
      variant="interactive"
      className="flex min-w-0 flex-col p-4 sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            {copy.ivrsNumber}
          </p>
          <h3 className="mt-1 break-all text-lg font-extrabold tracking-wide text-blue-800 dark:text-blue-200">
            {connection.ivrsNumber}
          </h3>
        </div>
        <Badge status={connection.consentStatus} className="flex-none">
          {completed && <DashboardIcon name="check" className="h-3.5 w-3.5" />}
          {statusLabel}
        </Badge>
      </div>

      <dl className="mt-4 grid gap-3 text-sm">
        <div className="flex min-w-0 gap-2">
          <DashboardIcon name="user" className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
          <div className="min-w-0">
            <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.consumerName}</dt>
            <dd className="break-words font-semibold text-slate-900 dark:text-slate-100">{connection.consumerName}</dd>
          </div>
        </div>
        <div className="flex min-w-0 gap-2">
          <DashboardIcon name="location" className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
          <div className="min-w-0">
            <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.address}</dt>
            <dd className="break-words font-medium text-slate-700 dark:text-slate-300">{connection.address}</dd>
          </div>
        </div>
        <div className="flex min-w-0 gap-2">
          <DashboardIcon name="shield" className="mt-0.5 h-4 w-4 flex-none text-slate-400" />
          <div className="min-w-0">
            <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.lastConsent}</dt>
            <dd className="font-medium text-slate-700 dark:text-slate-300">{lastConsent}</dd>
          </div>
        </div>
      </dl>

      <div className="mt-auto flex flex-wrap gap-2 border-t border-slate-100 pt-4 dark:border-slate-800 sm:mt-5">
        <Button
          type="button"
          size="small"
          variant="outline"
          onClick={onViewDetails}
          className="!rounded-lg !border-slate-300 !text-xs dark:!border-slate-600"
        >
          {copy.viewDetails}
        </Button>
        <Button
          type="button"
          size="small"
          onClick={completed ? onViewConsent : onGiveConsent}
          className="!rounded-lg !bg-blue-800 !text-xs hover:!bg-blue-700"
        >
          {completed ? copy.viewConsent : copy.giveConsent}
        </Button>
        {completed && (
          <Button
            type="button"
            size="small"
            variant="secondary"
            onClick={onReConsent}
            className="!rounded-lg !text-xs"
          >
            {copy.reConsent}
          </Button>
        )}
        <Button
          type="button"
          size="small"
          variant="ghost"
          onClick={onViewHistory}
          className="!rounded-lg !text-xs"
        >
          {copy.history}
        </Button>
      </div>
    </Card>
  );
}
