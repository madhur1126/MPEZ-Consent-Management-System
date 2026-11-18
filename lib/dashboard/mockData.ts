import { consentQuestions, type ConsentAnswer } from './data';
import type {
  ConsentSubmission,
  ConsentSubmissionStatus,
  DashboardState,
  IVRSConnection,
} from './types';

export const DEMO_CONSUMER_MOBILE = '9876543210';

type SeedConnection = Omit<IVRSConnection, 'submissions'> & {
  history: {
    version: number;
    submittedAt: string;
    status: ConsentSubmissionStatus;
    name?: string;
    address?: string;
  }[];
};

const connectionSeeds: SeedConnection[] = [
  {
    id: 'ivrs-12345678901',
    ivrsNumber: '12345678901',
    consumerName: 'Rahul Sharma',
    address: 'House 18, Wright Town, Jabalpur, Madhya Pradesh',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024581',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '2 kW',
      meterNumber: 'MZ-****-1842',
      phase: 'Single phase',
      connectionDate: '2017-06-14',
    },
    consentStatus: 'completed',
    history: [
      { version: 1, submittedAt: '2024-06-12T08:30:00.000Z', status: 'superseded', name: 'Rahul Sharma', address: 'House 18, Wright Town, Jabalpur, Madhya Pradesh' },
      { version: 2, submittedAt: '2025-11-18T10:15:00.000Z', status: 'current', name: 'Rahul Sharma', address: 'House 18, Wright Town, Jabalpur, Madhya Pradesh' },
    ],
  },
  {
    id: 'ivrs-12345678902',
    ivrsNumber: '12345678902',
    consumerName: 'Sonal Sharma',
    address: 'Plot 42, Napier Town, Jabalpur, Madhya Pradesh',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024582',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '3 kW',
      meterNumber: 'MZ-****-2910',
      phase: 'Single phase',
      connectionDate: '2019-02-20',
    },
    consentStatus: 'completed',
    history: [
      { version: 1, submittedAt: '2025-04-04T07:45:00.000Z', status: 'current', name: 'Sonal Sharma', address: 'Plot 42, Napier Town, Jabalpur, Madhya Pradesh' },
    ],
  },
  {
    id: 'ivrs-12345678903',
    ivrsNumber: '12345678903',
    consumerName: 'Aarav Sharma',
    address: 'Flat 302, Narmada Residency, Vijay Nagar, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024583',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '5 kW',
      meterNumber: 'MZ-****-3607',
      phase: 'Three phase',
      connectionDate: '2021-08-03',
    },
    consentStatus: 'completed',
    history: [
      { version: 1, submittedAt: '2025-09-10T12:20:00.000Z', status: 'current', name: 'Aarav Sharma', address: 'Flat 302, Narmada Residency, Vijay Nagar, Jabalpur' },
    ],
  },
  {
    id: 'ivrs-12345678904',
    ivrsNumber: '12345678904',
    consumerName: 'Priya Sharma',
    address: 'House 7, Shastri Nagar, Sadar, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024584',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '2 kW',
      meterNumber: 'MZ-****-4481',
      phase: 'Single phase',
      connectionDate: '2016-11-27',
    },
    consentStatus: 'pending',
    history: [],
  },
  {
    id: 'ivrs-12345678905',
    ivrsNumber: '12345678905',
    consumerName: 'Kavita Sharma',
    address: 'Shop 11, Civic Centre, Marhatal, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024585',
      connectionType: 'Commercial',
      tariffCategory: 'LT Commercial',
      sanctionedLoad: '7 kW',
      meterNumber: 'MZ-****-5173',
      phase: 'Three phase',
      connectionDate: '2020-03-16',
    },
    consentStatus: 'not-started',
    history: [],
  },
  {
    id: 'ivrs-12345678906',
    ivrsNumber: '12345678906',
    consumerName: 'Amit Sharma',
    address: 'House 25, Gwarighat Road, Rampur, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024586',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '4 kW',
      meterNumber: 'MZ-****-6284',
      phase: 'Single phase',
      connectionDate: '2018-09-08',
    },
    consentStatus: 'pending',
    history: [
      { version: 1, submittedAt: '2024-12-01T09:00:00.000Z', status: 'superseded', name: 'Amit Sharma', address: 'Old address, Rampur, Jabalpur' },
    ],
  },
  {
    id: 'ivrs-12345678907',
    ivrsNumber: '12345678907',
    consumerName: 'Neha Sharma',
    address: 'Flat 5B, Shanti Enclave, Adhartal, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024587',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '2 kW',
      meterNumber: 'MZ-****-7359',
      phase: 'Single phase',
      connectionDate: '2022-01-19',
    },
    consentStatus: 'not-started',
    history: [],
  },
  {
    id: 'ivrs-12345678908',
    ivrsNumber: '12345678908',
    consumerName: 'Rohan Sharma',
    address: 'Unit 4, Industrial Estate, Richhai, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024588',
      connectionType: 'Small industry',
      tariffCategory: 'LT Industrial',
      sanctionedLoad: '12 kW',
      meterNumber: 'MZ-****-8426',
      phase: 'Three phase',
      connectionDate: '2015-05-30',
    },
    consentStatus: 'completed',
    history: [
      { version: 1, submittedAt: '2025-02-14T06:35:00.000Z', status: 'current', name: 'Rohan Sharma', address: 'Unit 4, Industrial Estate, Richhai, Jabalpur' },
    ],
  },
  {
    id: 'ivrs-12345678909',
    ivrsNumber: '12345678909',
    consumerName: 'Meera Sharma',
    address: 'House 9, Anand Colony, Garha, Jabalpur',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024589',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '3 kW',
      meterNumber: 'MZ-****-9531',
      phase: 'Single phase',
      connectionDate: '2023-04-22',
    },
    consentStatus: 'not-started',
    history: [],
  },
  {
    id: 'ivrs-12345678910',
    ivrsNumber: '12345678910',
    consumerName: 'Vikram Sharma',
    address: 'House 64, Madan Mahal, Jabalpur, Madhya Pradesh',
    connectionInfo: {
      consumerNumber: 'MPEZ-10024590',
      connectionType: 'Residential',
      tariffCategory: 'LT Domestic',
      sanctionedLoad: '5 kW',
      meterNumber: 'MZ-****-0642',
      phase: 'Three phase',
      connectionDate: '2014-12-05',
    },
    consentStatus: 'pending',
    history: [],
  },
];

function createSeedSubmission(
  connection: SeedConnection,
  history: SeedConnection['history'][number],
): ConsentSubmission {
  return {
    id: `DEMO-${connection.ivrsNumber}-V${history.version}`,
    version: history.version,
    submittedAt: history.submittedAt,
    consumerNameSnapshot: history.name ?? connection.consumerName,
    addressSnapshot: history.address ?? connection.address,
    status: history.status,
    answers: consentQuestions.map((_, index): ConsentAnswer =>
      (index + history.version) % 2 === 0 ? 'yes' : 'no',
    ),
  };
}

export function createDemoDashboard(mobile = DEMO_CONSUMER_MOBILE): DashboardState {
  return {
    schemaVersion: 1,
    consumer: {
      id: 'demo-consumer-rahul',
      name: 'Rahul Sharma',
      mobile,
      aadhaarMasked: 'XXXX-XXXX-1234',
      panMasked: 'ABCDE****F',
      verified: true,
    },
    connections: connectionSeeds.map((connection) => ({
      ...connection,
      connectionInfo: { ...connection.connectionInfo },
      submissions: connection.history.map((history) => createSeedSubmission(connection, history)),
    })),
  };
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null;
}

function isConsentSubmission(value: unknown): value is ConsentSubmission {
  if (!isRecord(value)) return false;
  return (
    typeof value.id === 'string' &&
    Number.isInteger(value.version) &&
    Number(value.version) > 0 &&
    typeof value.submittedAt === 'string' &&
    !Number.isNaN(Date.parse(value.submittedAt)) &&
    typeof value.consumerNameSnapshot === 'string' &&
    typeof value.addressSnapshot === 'string' &&
    (value.status === 'current' || value.status === 'superseded') &&
    Array.isArray(value.answers) &&
    value.answers.length === consentQuestions.length &&
    value.answers.every((answer) => answer === 'yes' || answer === 'no')
  );
}

function isConnection(value: unknown): value is IVRSConnection {
  if (!isRecord(value) || !isRecord(value.connectionInfo)) return false;
  const info = value.connectionInfo;
  const validStatus =
    value.consentStatus === 'completed' ||
    value.consentStatus === 'pending' ||
    value.consentStatus === 'not-started';
  const submissions = Array.isArray(value.submissions) && value.submissions.every(isConsentSubmission)
    ? value.submissions
    : null;
  if (
    typeof value.id !== 'string' ||
    typeof value.ivrsNumber !== 'string' ||
    !/^\d{11}$/.test(value.ivrsNumber) ||
    typeof value.consumerName !== 'string' ||
    typeof value.address !== 'string' ||
    !validStatus ||
    !submissions ||
    !['consumerNumber', 'connectionType', 'tariffCategory', 'sanctionedLoad', 'meterNumber', 'phase', 'connectionDate']
      .every((key) => typeof info[key] === 'string')
  ) {
    return false;
  }
  const currentCount = submissions.filter((submission) => submission.status === 'current').length;
  const versions = submissions.map((submission) => submission.version);
  const uniqueVersions = new Set(versions).size === versions.length;
  const latestVersion = versions.reduce((latest, version) => Math.max(latest, version), 0);
  const currentIsLatest = submissions.every((submission) => (
    submission.status !== 'current' ||
    submission.version === latestVersion
  ));
  return uniqueVersions && currentIsLatest && (
    value.consentStatus === 'completed' ? currentCount === 1 : currentCount === 0
  );
}

export function isDashboardState(value: unknown): value is DashboardState {
  if (!isRecord(value) || !isRecord(value.consumer)) return false;
  const consumer = value.consumer;
  const connections = Array.isArray(value.connections) && value.connections.every(isConnection)
    ? value.connections
    : null;
  if (
    value.schemaVersion !== 1 ||
    typeof consumer.id !== 'string' ||
    typeof consumer.name !== 'string' ||
    typeof consumer.mobile !== 'string' ||
    typeof consumer.aadhaarMasked !== 'string' ||
    typeof consumer.panMasked !== 'string' ||
    typeof consumer.verified !== 'boolean' ||
    !connections ||
    connections.length === 0
  ) {
    return false;
  }
  return (
    new Set(connections.map((connection) => connection.id)).size === connections.length &&
    new Set(connections.map((connection) => connection.ivrsNumber)).size === connections.length
  );
}
