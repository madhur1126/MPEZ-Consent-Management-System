'use client';

import { useState, type FormEvent } from 'react';
import { Badge, Button, Input, Modal, Textarea } from '@/components/common';
import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import type { IVRSConnection } from '@/lib/dashboard/types';

export function ConnectionDetailsModal({
  connection,
  statusLabel,
  lastConsent,
  copy,
  saveError,
  onClose,
  onViewHistory,
  onSave,
}: {
  connection: IVRSConnection;
  statusLabel: string;
  lastConsent: string;
  copy: MultiIvrsCopy;
  saveError: string | null;
  onClose: () => void;
  onViewHistory: () => void;
  onSave: (consumerName: string, address: string) => boolean;
}) {
  const [editing, setEditing] = useState(false);
  const [consumerName, setConsumerName] = useState(connection.consumerName);
  const [address, setAddress] = useState(connection.address);
  const [nameError, setNameError] = useState('');
  const [addressError, setAddressError] = useState('');
  const info = connection.connectionInfo;
  function saveDetails(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextName = consumerName.trim();
    const nextAddress = address.trim();
    setNameError(nextName ? '' : copy.nameRequired);
    setAddressError(nextAddress ? '' : copy.addressRequired);
    if (!nextName || !nextAddress) return;
    if (onSave(nextName, nextAddress)) setEditing(false);
  }

  const detailItems = [
    [copy.consumerNumber, info.consumerNumber],
    [copy.connectionType, info.connectionType],
    [copy.tariff, info.tariffCategory],
    [copy.sanctionedLoad, info.sanctionedLoad],
    [copy.meterNumber, info.meterNumber],
    [copy.phase, info.phase],
    [copy.connectionDate, info.connectionDate],
    [copy.lastConsent, lastConsent],
  ];

  return (
    <Modal
      isOpen
      title={connection.ivrsNumber}
      eyebrow={copy.detailsTitle}
      headerContent={<Badge status={connection.consentStatus}>{statusLabel}</Badge>}
      closeLabel={copy.close}
      onClose={onClose}
      size="medium"
      bodyClassName="!p-5 sm:!p-7"
    >
        {editing ? (
          <form onSubmit={saveDetails} noValidate className="grid gap-4">
            <Input
              label={copy.editName}
              required
              value={consumerName}
              error={nameError}
              onChange={(event) => {
                setConsumerName(event.target.value);
                if (nameError) setNameError('');
              }}
            />
            <Textarea
              label={copy.editAddress}
              required
              value={address}
              rows={3}
              error={addressError}
              onChange={(event) => {
                setAddress(event.target.value);
                if (addressError) setAddressError('');
              }}
            />
            {saveError && <p role="alert" className="text-sm text-red-700 dark:text-red-300">{saveError}</p>}
            <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-end">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  setConsumerName(connection.consumerName);
                  setAddress(connection.address);
                  setEditing(false);
                }}
              >
                {copy.cancel}
              </Button>
              <Button type="submit">{copy.saveDetails}</Button>
            </div>
          </form>
        ) : (
          <>
            <dl className="grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl bg-blue-50 p-3 dark:bg-slate-800">
                <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.consumerName}</dt>
                <dd className="mt-1 break-words font-semibold text-slate-900 dark:text-slate-100">{connection.consumerName}</dd>
              </div>
              <div className="rounded-xl bg-blue-50 p-3 dark:bg-slate-800 sm:col-span-2">
                <dt className="text-xs text-slate-500 dark:text-slate-400">{copy.address}</dt>
                <dd className="mt-1 break-words font-semibold text-slate-900 dark:text-slate-100">{connection.address}</dd>
              </div>
              {detailItems.map(([label, value]) => (
                <div key={label} className="rounded-xl border border-slate-100 p-3 dark:border-slate-700">
                  <dt className="text-xs text-slate-500 dark:text-slate-400">{label}</dt>
                  <dd className="mt-1 break-words text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</dd>
                </div>
              ))}
            </dl>
            <div className="mt-6 flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
              <Button type="button" variant="outline" onClick={onViewHistory}>{copy.history}</Button>
              <div className="flex flex-col-reverse gap-2 sm:flex-row">
                <Button type="button" variant="ghost" onClick={onClose}>{copy.close}</Button>
                <Button type="button" onClick={() => setEditing(true)}>{copy.editDetails}</Button>
              </div>
            </div>
          </>
        )}
    </Modal>
  );
}
