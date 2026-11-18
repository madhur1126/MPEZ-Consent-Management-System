'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Badge, Button, Card, EmptyState, GlobalLoader, PageHeader, SearchableDropdown, Toast } from '@/components/common';
import { useLang, useTheme } from '@/lib/login/hooks';
import { messages } from '@/lib/login/i18n';
import { DEMO_AUTH_KEY } from '@/lib/login/demoSession';
import { consentQuestions, dashboardCopy, type ConsentAnswer } from '@/lib/dashboard/data';
import { filterConnections, getCurrentSubmission, getLatestSubmission, createSubmissionId } from '@/lib/dashboard/helpers';
import { multiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import type { MultiIvrsCopy } from '@/lib/dashboard/multiIvrsCopy';
import { createDemoDashboard } from '@/lib/dashboard/mockData';
import { loadDemoDashboard, saveDemoDashboard } from '@/lib/dashboard/mockStorage';
import type { DashboardLoadWarning } from '@/lib/dashboard/mockStorage';
import type { ConsentFilter, ConsentStatus, ConsentSubmission, DashboardState, IVRSConnection } from '@/lib/dashboard/types';
import { AppLayout, Header } from '@/components/layout';
import { ConnectionCard } from './ConnectionCard';
import { ConnectionDetailsModal } from './ConnectionDetailsModal';
import { ConsentConfirmationModal } from './ConsentConfirmationModal';
import { ConsentForm } from './ConsentForm';
import { ConsentHistoryModal } from './ConsentHistoryModal';
import { DashboardIcon } from './DashboardIcon';

type DashboardDialog =
  | { kind: 'details'; connectionId: string }
  | { kind: 'consent'; connectionId: string }
  | { kind: 'confirm'; connectionId: string }
  | { kind: 'history'; connectionId: string }
  | { kind: 'submission'; connectionId: string; submissionId: string; fromHistory: boolean }
  | null;

function formatDate(value: string | undefined, lang: 'en' | 'hi') {
  if (!value) return '—';
  return new Intl.DateTimeFormat(lang === 'hi' ? 'hi-IN' : 'en-IN', {
    dateStyle: 'medium',
    timeZone: 'Asia/Kolkata',
  }).format(new Date(value));
}

function getStatusLabel(status: ConsentStatus, copy: MultiIvrsCopy) {
  if (status === 'completed') return copy.completedStatus;
  if (status === 'pending') return copy.pendingStatus;
  return copy.notStartedStatus;
}

function ProfileSection({
  name,
  mobile,
  aadhaar,
  pan,
  verified,
  copy,
}: {
  name: string;
  mobile: string;
  aadhaar: string;
  pan: string;
  verified: boolean;
  copy: MultiIvrsCopy;
}) {
  const items = [
    { label: copy.consumerName, value: name, icon: 'user' as const },
    { label: copy.mobile, value: mobile, icon: 'phone' as const },
    { label: copy.aadhaar, value: aadhaar, icon: 'shield' as const },
    { label: copy.pan, value: pan, icon: 'file' as const },
  ];

  return (
    <Card as="section" aria-labelledby="consumer-profile-title" className="rounded-3xl p-4 sm:p-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-blue-700">{copy.profileTitle}</p>
          <h2 id="consumer-profile-title" className="mt-1 text-xl font-extrabold text-blue-800 dark:text-blue-200">{name}</h2>
        </div>
        <Badge variant={verified ? 'success' : 'warning'} className="px-3 py-1.5">
          {verified && <DashboardIcon name="check" className="h-4 w-4" />}
          {verified ? copy.verified : copy.notVerified}
        </Badge>
      </div>
      <dl className="mt-4 grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div key={item.label} className="flex min-w-0 items-center gap-3 rounded-xl border border-blue-100 bg-blue-50 p-3 dark:border-slate-700 dark:bg-slate-800/70">
            <span className="grid h-9 w-9 flex-none place-items-center rounded-lg bg-white text-blue-800 shadow-sm dark:bg-slate-900 dark:text-blue-300">
              <DashboardIcon name={item.icon} className="h-4 w-4" />
            </span>
            <div className="min-w-0">
              <dt className="text-xs text-slate-500 dark:text-slate-400">{item.label}</dt>
              <dd className="mt-0.5 truncate text-sm font-bold text-slate-900 dark:text-slate-100">{item.value}</dd>
            </div>
          </div>
        ))}
      </dl>
    </Card>
  );
}

function SummaryCard({
  label,
  value,
  icon,
  color,
}: {
  label: string;
  value: number;
  icon: 'phone' | 'check' | 'lock' | 'file';
  color: string;
}) {
  return (
    <Card className="flex min-w-0 items-center gap-3 p-3 sm:p-4">
      <span className={`grid h-10 w-10 flex-none place-items-center rounded-xl ${color}`}>
        <DashboardIcon name={icon} />
      </span>
      <div className="min-w-0">
        <p className="text-xl font-extrabold text-slate-950 dark:text-white sm:text-2xl">{value}</p>
        <p className="break-words text-xs font-medium text-slate-600 dark:text-slate-300 sm:text-sm">{label}</p>
      </div>
    </Card>
  );
}

export function ConsumerDashboard({ consumerMobile }: { consumerMobile: string }) {
  const router = useRouter();
  const { theme, setTheme } = useTheme();
  const { lang, setLang } = useLang();
  const copy = multiIvrsCopy[lang];
  const loginCopy = messages[lang];
  const consentText = dashboardCopy[lang];
  const [dashboard, setDashboard] = useState<DashboardState | null>(null);
  const [initializing, setInitializing] = useState(true);
  const [loadWarning, setLoadWarning] = useState<DashboardLoadWarning | null>(null);
  const [storageError, setStorageError] = useState<string | null>(null);
  const [logoutError, setLogoutError] = useState<string | null>(null);
  const [loggingOut, setLoggingOut] = useState(false);
  const [dialog, setDialog] = useState<DashboardDialog>(null);
  const [filter, setFilter] = useState<ConsentFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedIvrs, setSelectedIvrs] = useState<string>();
  const [showAllConnections, setShowAllConnections] = useState(false);
  const [answers, setAnswers] = useState<(ConsentAnswer | null)[]>(() => Array(consentQuestions.length).fill(null));
  const [confirmationChecked, setConfirmationChecked] = useState(false);
  const [consentError, setConsentError] = useState(false);
  const [saving, setSaving] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const saveInProgress = useRef(false);
  const logoutInProgress = useRef(false);

  useEffect(() => {
    setInitializing(true);
    try {
      const result = loadDemoDashboard(consumerMobile);
      setDashboard(result.data);
      setLoadWarning(result.warning);
    } catch {
      setDashboard(createDemoDashboard(consumerMobile));
      setLoadWarning('storage-unavailable');
    } finally {
      setInitializing(false);
    }
  }, [consumerMobile]);

  const connections = dashboard?.connections ?? [];
  const options = useMemo(() => connections.map((connection) => ({
    value: connection.ivrsNumber,
    label: connection.ivrsNumber,
    description: `${connection.consumerName} · ${connection.address}`,
  })), [connections]);
  const filteredConnections = useMemo(
    () => filterConnections(connections, filter, searchQuery, selectedIvrs),
    [connections, filter, searchQuery, selectedIvrs],
  );
  const hasMoreConnections = filteredConnections.length > 6;
  const visibleConnections = hasMoreConnections && !showAllConnections
    ? filteredConnections.slice(0, 5)
    : filteredConnections;
  const statistics = useMemo(() => ({
    total: connections.length,
    completed: connections.filter((connection) => connection.consentStatus === 'completed').length,
    pending: connections.filter((connection) => connection.consentStatus === 'pending').length,
    notStarted: connections.filter((connection) => connection.consentStatus === 'not-started').length,
  }), [connections]);
  const filterCounts = useMemo(() => ({
    notConsented: filterConnections(connections, 'not-consented', '', undefined).length,
    consented: filterConnections(connections, 'consented', '', undefined).length,
    reConsented: filterConnections(connections, 're-consented', '', undefined).length,
  }), [connections]);

  const activeConnection = dialog && dashboard
    ? dashboard.connections.find((connection) => connection.id === dialog.connectionId)
    : undefined;
  const activeSubmission = dialog?.kind === 'submission' && activeConnection
    ? activeConnection.submissions.find((submission) => submission.id === dialog.submissionId)
    : undefined;

  function persistDashboard(nextDashboard: DashboardState): boolean {
    try {
      saveDemoDashboard(consumerMobile, nextDashboard);
      setDashboard(nextDashboard);
      setStorageError(null);
      return true;
    } catch {
      setStorageError(copy.storageError);
      return false;
    }
  }

  function updateConnectionDetails(connectionId: string, consumerName: string, address: string): boolean {
    if (!dashboard) return false;
    const nextDashboard: DashboardState = {
      ...dashboard,
      connections: dashboard.connections.map((connection) => (
        connection.id === connectionId
          ? { ...connection, consumerName, address }
          : connection
      )),
    };
    return persistDashboard(nextDashboard);
  }

  function startConsent(connection: IVRSConnection) {
    setAnswers(Array(consentQuestions.length).fill(null));
    setConfirmationChecked(false);
    setConsentError(false);
    setStorageError(null);
    setDialog({ kind: 'consent', connectionId: connection.id });
  }

  function reviewConsent(connectionId: string) {
    const answered = answers.filter((answer) => answer !== null).length;
    if (answered !== consentQuestions.length || !confirmationChecked) {
      setConsentError(true);
      return;
    }
    setConsentError(false);
    setDialog({ kind: 'confirm', connectionId });
  }

  async function confirmConsent(connectionId: string) {
    if (saveInProgress.current || !dashboard) return;
    const completeAnswers = answers.filter((answer): answer is ConsentAnswer => answer !== null);
    const connection = dashboard.connections.find((item) => item.id === connectionId);
    if (!connection) {
      setStorageError(copy.storageError);
      return;
    }
    if (completeAnswers.length !== consentQuestions.length || !confirmationChecked) {
      setConsentError(true);
      setDialog({ kind: 'consent', connectionId });
      return;
    }

    saveInProgress.current = true;
    setSaving(true);
    setStorageError(null);
    await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));

    const nextVersion = Math.max(0, ...connection.submissions.map((submission) => submission.version)) + 1;
    const submission: ConsentSubmission = {
      id: createSubmissionId(),
      version: nextVersion,
      submittedAt: new Date().toISOString(),
      consumerNameSnapshot: connection.consumerName,
      addressSnapshot: connection.address,
      status: 'current',
      answers: completeAnswers,
    };
    const nextDashboard: DashboardState = {
      ...dashboard,
      connections: dashboard.connections.map((item) => (
        item.id === connectionId
          ? {
              ...item,
              consentStatus: 'completed',
              submissions: [
                ...item.submissions.map((oldSubmission) => ({ ...oldSubmission, status: 'superseded' as const })),
                submission,
              ],
            }
          : item
      )),
    };

    if (persistDashboard(nextDashboard)) {
      setDialog(null);
      setSuccessMessage(`${copy.successMessage} · ${connection.ivrsNumber}`);
    }
    setSaving(false);
    saveInProgress.current = false;
  }

  async function logout() {
    if (logoutInProgress.current) return;
    logoutInProgress.current = true;
    setLoggingOut(true);
    setLogoutError(null);
    await new Promise<void>((resolve) => window.requestAnimationFrame(() => resolve()));
    try {
      window.localStorage.removeItem(DEMO_AUTH_KEY);
      router.replace('/login');
    } catch {
      logoutInProgress.current = false;
      setLoggingOut(false);
      setLogoutError(copy.storageError);
    }
  }

  const selectedConnection = selectedIvrs
    ? connections.find((connection) => connection.ivrsNumber === selectedIvrs)
    : undefined;

  return (
    <>
      <GlobalLoader label={copy.title} visible={initializing || !dashboard} />
      <AppLayout
        aria-hidden={initializing || !dashboard}
        className={`login-root login-sky min-h-screen font-login text-login-text antialiased transition-opacity duration-200 ${
          initializing || !dashboard ? 'pointer-events-none opacity-0' : 'opacity-100'
        }`}
        header={<Header t={loginCopy} lang={lang} onLangChange={setLang} theme={theme} onThemeChange={setTheme} />}
        mainClassName="mx-auto w-full max-w-[1320px] px-3 pb-8 pt-4 sm:px-6 sm:pb-14 sm:pt-8"
      >
          <Card className="mb-5 flex flex-wrap items-center justify-between gap-3 !rounded-2xl !border-blue-100 !bg-white/90 p-3 !shadow-sm backdrop-blur dark:!border-slate-700 dark:!bg-slate-900/90 sm:mb-6 sm:p-4">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-full bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300">
                <DashboardIcon name="user" />
              </span>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{consentText.greeting}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{dashboard?.consumer.name}</p>
              </div>
            </div>
            <Button
              type="button"
              variant="outline"
              onClick={() => void logout()}
              loading={loggingOut}
              leftIcon={!loggingOut && <DashboardIcon name="logout" />}
              className="!rounded-xl !border-slate-200 !text-sm dark:!border-slate-700"
            >
              {consentText.logout}
            </Button>
          </Card>

          {logoutError && <Toast variant="danger" className="mb-4">{logoutError}</Toast>}
          {loadWarning && (
            <Toast variant="warning" className="mb-4">
              {loadWarning === 'invalid-data' ? copy.invalidSavedData : copy.storageUnavailable}
            </Toast>
          )}
          {storageError && <Toast variant="danger" className="mb-4">{storageError}</Toast>}
          {successMessage && (
            <Toast variant="success" onDismiss={() => setSuccessMessage('')} dismissLabel={copy.close} className="mb-4">
              {successMessage}
            </Toast>
          )}

          <PageHeader
            title={copy.title}
            description={copy.subtitle}
            eyebrow={loginCopy.officialPortal}
            titleId="dashboard-title"
          />

          <div role="note" className="mb-5 flex items-start gap-2 rounded-2xl border border-amber-200 bg-amber-50 p-3 text-sm font-medium leading-5 text-amber-950 dark:border-amber-900 dark:bg-amber-950/60 dark:text-amber-100 sm:gap-3 sm:p-4">
            <DashboardIcon name="shield" className="mt-0.5 h-5 w-5 flex-none" />
            <span>{copy.demoNotice}</span>
          </div>

          {dashboard && (
            <>
              <ProfileSection
                name={dashboard.consumer.name}
                mobile={dashboard.consumer.mobile}
                aadhaar={dashboard.consumer.aadhaarMasked}
                pan={dashboard.consumer.panMasked}
                verified={dashboard.consumer.verified}
                copy={copy}
              />

              <section aria-label={copy.totalConnections} className="mt-4 grid grid-cols-2 gap-2 sm:mt-5 sm:grid-cols-4 sm:gap-3">
                <SummaryCard label={copy.totalConnections} value={statistics.total} icon="phone" color="bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-200" />
                <SummaryCard label={copy.completedCount} value={statistics.completed} icon="check" color="bg-emerald-50 text-emerald-700 dark:bg-emerald-950 dark:text-emerald-200" />
                <SummaryCard label={copy.pendingCount} value={statistics.pending} icon="lock" color="bg-amber-50 text-amber-700 dark:bg-amber-950 dark:text-amber-200" />
                <SummaryCard label={copy.notStartedCount} value={statistics.notStarted} icon="file" color="bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-200" />
              </section>

              <section aria-labelledby="connections-title" className="mt-6 sm:mt-8">
                <div className="mb-4 flex flex-wrap items-end justify-between gap-3">
                  <div>
                    <h2 id="connections-title" className="text-xl font-extrabold text-blue-800 dark:text-blue-200 sm:text-2xl">{copy.connectionTitle}</h2>
                    <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{statistics.total} · {copy.totalConnections}</p>
                  </div>
                  <div className="w-full sm:max-w-md">
                    <SearchableDropdown
                      id="ivrs-search"
                      ariaLabel={copy.searchLabel}
                      options={options}
                      value={selectedConnection?.ivrsNumber ?? null}
                      onChange={(value) => {
                        setSelectedIvrs(value);
                        setShowAllConnections(false);
                      }}
                      onSearchChange={(query) => {
                        setSearchQuery(query);
                        setShowAllConnections(false);
                        if (query.trim()) setSelectedIvrs(undefined);
                      }}
                      placeholder={copy.searchLabel}
                      searchPlaceholder={copy.searchPlaceholder}
                      noResultsText={copy.noResults}
                      clearLabel={copy.clearSearch}
                    />
                  </div>
                </div>

                <div role="group" aria-label={copy.connectionTitle} className="mb-4 flex flex-wrap gap-2">
                  {([
                    ['all', copy.allFilter, statistics.total],
                    ['not-consented', copy.notConsentedFilter, filterCounts.notConsented],
                    ['consented', copy.consentedFilter, filterCounts.consented],
                    ['re-consented', copy.reConsentedFilter, filterCounts.reConsented],
                  ] as const).map(([key, label, count]) => (
                    <Button
                      key={key}
                      type="button"
                      aria-pressed={filter === key}
                      onClick={() => {
                        setFilter(key);
                        setShowAllConnections(false);
                      }}
                      variant={filter === key ? 'primary' : 'outline'}
                      size="small"
                      className="!rounded-full !px-3 !py-1.5 !text-xs sm:!text-sm"
                    >
                      {label} <span className="ml-1 opacity-80">{count}</span>
                    </Button>
                  ))}
                </div>

                {filteredConnections.length > 0 ? (
                  <div className="grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3">
                    {visibleConnections.map((connection) => {
                      const latest = getLatestSubmission(connection);
                      const statusLabel = getStatusLabel(connection.consentStatus, copy);
                      return (
                        <ConnectionCard
                          key={connection.id}
                          connection={connection}
                          statusLabel={statusLabel}
                          lastConsent={formatDate(latest?.submittedAt, lang)}
                          copy={copy}
                          onViewDetails={() => setDialog({ kind: 'details', connectionId: connection.id })}
                          onGiveConsent={() => startConsent(connection)}
                          onViewConsent={() => {
                            const current = getCurrentSubmission(connection);
                            if (current) {
                              setDialog({
                                kind: 'submission',
                                connectionId: connection.id,
                                submissionId: current.id,
                                fromHistory: false,
                              });
                            }
                          }}
                          onViewHistory={() => setDialog({ kind: 'history', connectionId: connection.id })}
                          onReConsent={() => startConsent(connection)}
                        />
                      );
                    })}
                    {hasMoreConnections && (
                      <button
                        type="button"
                        onClick={() => setShowAllConnections((current) => !current)}
                        className={`flex min-h-[280px] w-full items-center justify-center rounded-3xl border-2 border-dashed p-6 text-center transition-colors focus-visible:outline-none focus-visible:ring-4 sm:min-h-full ${
                          showAllConnections
                            ? 'border-red-300 bg-red-50 text-red-600 hover:bg-red-100 focus-visible:ring-red-200 dark:border-red-800 dark:bg-red-950/30 dark:text-red-300 dark:hover:bg-red-950/50 dark:focus-visible:ring-red-900'
                            : 'border-blue-300 bg-slate-50 text-blue-600 hover:bg-blue-50 focus-visible:ring-blue-200 dark:border-blue-700 dark:bg-slate-900 dark:text-blue-300 dark:hover:bg-blue-950/30 dark:focus-visible:ring-blue-900'
                        }`}
                      >
                        <span className="text-lg font-bold">
                          {showAllConnections ? copy.showLess : copy.viewAllServices}
                          <span aria-hidden="true" className="ml-2">
                            {showAllConnections ? '←' : '→'}
                          </span>
                        </span>
                      </button>
                    )}
                  </div>
                ) : (
                  <EmptyState title={searchQuery ? copy.noResults : copy.noConnections} className="px-4 py-12" />
                )}
              </section>
            </>
          )}
      </AppLayout>

      {dashboard && activeConnection && dialog?.kind === 'details' && (
        <ConnectionDetailsModal
          key={activeConnection.id}
          connection={activeConnection}
          statusLabel={getStatusLabel(activeConnection.consentStatus, copy)}
          lastConsent={formatDate(getLatestSubmission(activeConnection)?.submittedAt, lang)}
          copy={copy}
          saveError={storageError}
          onClose={() => setDialog(null)}
          onViewHistory={() => setDialog({ kind: 'history', connectionId: activeConnection.id })}
          onSave={(name, address) => updateConnectionDetails(activeConnection.id, name, address)}
        />
      )}
      {dashboard && activeConnection && dialog?.kind === 'consent' && (
        <ConsentForm
          connection={activeConnection}
          lang={lang}
          copy={copy}
          answers={answers}
          confirmationChecked={confirmationChecked}
          hasError={consentError}
          onAnswer={(index, answer) => {
            setAnswers((current) => current.map((value, i) => (i === index ? answer : value)));
            setConsentError(false);
          }}
          onConfirmationChange={(checked) => {
            setConfirmationChecked(checked);
            setConsentError(false);
          }}
          onClose={() => setDialog(null)}
          onReview={() => reviewConsent(activeConnection.id)}
        />
      )}
      {dashboard && activeConnection && dialog?.kind === 'confirm' && (
        <ConsentConfirmationModal
          lang={lang}
          consentCopy={consentText}
          copy={copy}
          connection={activeConnection}
          answers={answers}
          readOnly={false}
          error={storageError}
          saving={saving}
          onClose={() => setDialog({ kind: 'consent', connectionId: activeConnection.id })}
          onConfirm={() => void confirmConsent(activeConnection.id)}
        />
      )}
      {dashboard && activeConnection && dialog?.kind === 'history' && (
        <ConsentHistoryModal
          connection={activeConnection}
          lang={lang}
          copy={copy}
          onClose={() => setDialog(null)}
          onOpenSubmission={(submission) => setDialog({
            kind: 'submission',
            connectionId: activeConnection.id,
            submissionId: submission.id,
            fromHistory: true,
          })}
        />
      )}
      {dashboard && activeConnection && dialog?.kind === 'submission' && activeSubmission && (
        <ConsentConfirmationModal
          lang={lang}
          consentCopy={consentText}
          copy={copy}
          connection={activeConnection}
          answers={activeSubmission.answers}
          readOnly
          submission={activeSubmission}
          error={null}
          saving={false}
          onClose={() => setDialog(dialog.fromHistory
            ? { kind: 'history', connectionId: activeConnection.id }
            : null)}
        />
      )}
    </>
  );
}
