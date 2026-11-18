import type { ConsentFilter, ConsentSubmission, IVRSConnection } from './types';

export function getCurrentSubmission(
  connection: IVRSConnection,
): ConsentSubmission | undefined {
  return connection.submissions.find((submission) => submission.status === 'current');
}

export function getLatestSubmission(
  connection: IVRSConnection,
): ConsentSubmission | undefined {
  return connection.submissions.reduce<ConsentSubmission | undefined>(
    (latest, submission) => !latest || submission.version > latest.version ? submission : latest,
    undefined,
  );
}

export function filterConnections(
  connections: readonly IVRSConnection[],
  status: ConsentFilter,
  query: string,
  selectedIvrs: string | undefined,
): IVRSConnection[] {
  const normalizedQuery = query.trim().toLocaleLowerCase();
  return connections.filter((connection) => {
    if (status === 'not-consented' && connection.consentStatus === 'completed') return false;
    if (status === 'consented' && (
      connection.consentStatus !== 'completed' ||
      (getLatestSubmission(connection)?.version ?? 0) > 1
    )) return false;
    if (status === 're-consented' && (
      connection.consentStatus !== 'completed' ||
      (getLatestSubmission(connection)?.version ?? 0) <= 1
    )) return false;
    if (normalizedQuery) {
      return [
        connection.ivrsNumber,
        connection.consumerName,
        connection.address,
      ].some((value) => value.toLocaleLowerCase().includes(normalizedQuery));
    }
    return !selectedIvrs || connection.ivrsNumber === selectedIvrs;
  });
}

export function createSubmissionId(): string {
  const suffix = typeof crypto !== 'undefined' && 'randomUUID' in crypto
    ? crypto.randomUUID()
    : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
  return `DEMO-${suffix}`;
}
