export const DEMO_AUTH_KEY = 'mpez-demo-authenticated';

export type DemoSession = {
  mobile: string;
};

const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;

export function readDemoSession(): DemoSession | null {
  try {
    const stored = window.localStorage.getItem(DEMO_AUTH_KEY);
    if (!stored) return null;

    const parsed: unknown = JSON.parse(stored);
    if (
      !parsed ||
      typeof parsed !== 'object' ||
      !('mobile' in parsed) ||
      typeof parsed.mobile !== 'string' ||
      !INDIAN_MOBILE_RE.test(parsed.mobile)
    ) {
      return null;
    }

    return { mobile: parsed.mobile };
  } catch {
    return null;
  }
}

export function saveDemoSession(mobile: string) {
  if (!INDIAN_MOBILE_RE.test(mobile)) {
    throw new Error('Cannot save a session for an invalid mobile number.');
  }
  window.localStorage.setItem(DEMO_AUTH_KEY, JSON.stringify({ mobile } satisfies DemoSession));
}
