import type { ConsentAnswer } from './data';

export type ConsentStatus = 'completed' | 'pending' | 'not-started';
export type ConsentFilter = 'all' | 'not-consented' | 'consented' | 're-consented';
export type ConsentSubmissionStatus = 'current' | 'superseded';

export interface DemoConsumer {
  id: string;
  name: string;
  mobile: string;
  aadhaarMasked: string;
  panMasked: string;
  verified: boolean;
}

export interface ConnectionInfo {
  consumerNumber: string;
  connectionType: string;
  tariffCategory: string;
  sanctionedLoad: string;
  meterNumber: string;
  phase: string;
  connectionDate: string;
}

export interface ConsentSubmission {
  id: string;
  version: number;
  submittedAt: string;
  consumerNameSnapshot: string;
  addressSnapshot: string;
  status: ConsentSubmissionStatus;
  answers: ConsentAnswer[];
}

export interface IVRSConnection {
  id: string;
  ivrsNumber: string;
  consumerName: string;
  address: string;
  connectionInfo: ConnectionInfo;
  consentStatus: ConsentStatus;
  submissions: ConsentSubmission[];
}

export interface DashboardState {
  schemaVersion: 1;
  consumer: DemoConsumer;
  connections: IVRSConnection[];
}
