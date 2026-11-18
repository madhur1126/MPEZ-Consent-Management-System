'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ConsumerDashboard } from '@/components/dashboard/ConsumerDashboard';
import { readDemoSession } from '@/lib/login/demoSession';
import { dashboardCopy } from '@/lib/dashboard/data';
import { useLang } from '@/lib/login/hooks';
import { GlobalLoader } from '@/components/common';

export default function DashboardPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [consumerMobile, setConsumerMobile] = useState<string | null>(null);
  const [checkingSession, setCheckingSession] = useState(true);

  useEffect(() => {
    const session = readDemoSession();
    if (session) {
      setConsumerMobile(session.mobile);
    } else {
      router.replace('/login');
      return;
    }
    setCheckingSession(false);
  }, [router]);

  return (
    <>
      <GlobalLoader label={dashboardCopy[lang].loading} visible={checkingSession || !consumerMobile} />
      {consumerMobile && !checkingSession && (
        <ConsumerDashboard key={consumerMobile} consumerMobile={consumerMobile} />
      )}
    </>
  );
}
