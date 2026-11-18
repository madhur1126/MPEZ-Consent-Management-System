# MPEZ Consent Management System

A runnable Next.js App Router demo containing an English/Hindi login, inline six-digit OTP verification, and a consumer consent dashboard with eight consent requests.

## Run locally

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The demo OTP is `123456` in both development and production builds; successful verification opens the protected `/dashboard` route. This demo does not send SMS or provide real authentication; connect the OTP handlers to a trusted server-side service before real deployment.

```bash
npm run typecheck
npm run build
npm audit
```

## Consent demonstration

Answer all eight consent questions, check the voluntary confirmation box, and submit to review the selected responses. Confirming stores the demo consent choices and submission timestamp in browser local storage. Demo authentication stores only a session marker; the OTP is never stored, and the sample Aadhaar/PAN values are masked. Do not treat this client-side demo as production authentication or consent storage.

## Connect your OTP API

`LoginScreen` accepts optional async handlers. Throw from a handler to display an error; resolve to continue.

```tsx
'use client';

import { LoginScreen } from '@/components/login/LoginScreen';

export default function LoginPage() {
  return (
    <LoginScreen
      onRequestOtp={async (mobile) => {
        const res = await fetch('/api/otp/send', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile }),
        });
        if (!res.ok) throw new Error('Could not send OTP');
      }}
      onVerifyOtp={async (mobile, code) => {
        const res = await fetch('/api/otp/verify', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ mobile, code }),
        });
        if (!res.ok) throw new Error('Could not verify OTP');
      }}
    />
  );
}
```

## Customize

- Replace the brand name and placeholder mark in `components/login/Logo.tsx`.
- Change `MOBILE_RE` in `components/login/LoginCard.tsx` to match your region.
- Update demo consumer details and consent questions in `lib/dashboard/data.ts`.
- Update translations in `lib/login/i18n.ts` and `lib/dashboard/data.ts`.
- The theme tokens are in `styles/login-theme.css`. The screen uses system font fallbacks so local builds do not need to fetch fonts.
