import { createDemoDashboard, isDashboardState } from './mockData';
import type { DashboardState } from './types';

const storageKey = (mobile: string) => `mpez-demo-multi-ivrs_${mobile}`;

export type DashboardLoadWarning = 'invalid-data' | 'storage-unavailable';

export interface DashboardLoadResult {
  data: DashboardState;
  warning: DashboardLoadWarning | null;
}

export function loadDemoDashboard(mobile: string): DashboardLoadResult {
  let serialized: string | null;
  try {
    serialized = window.localStorage.getItem(storageKey(mobile));
  } catch {
    return {
      data: createDemoDashboard(mobile),
      warning: 'storage-unavailable',
    };
  }
  if (!serialized) return { data: createDemoDashboard(mobile), warning: null };

  try {
    const parsed: unknown = JSON.parse(serialized);
    if (isDashboardState(parsed) && parsed.consumer.mobile === mobile) {
      return { data: parsed, warning: null };
    }
  } catch {
    return { data: createDemoDashboard(mobile), warning: 'invalid-data' };
  }

  return { data: createDemoDashboard(mobile), warning: 'invalid-data' };
}

export function saveDemoDashboard(mobile: string, data: DashboardState): void {
  window.localStorage.setItem(storageKey(mobile), JSON.stringify(data));
}
