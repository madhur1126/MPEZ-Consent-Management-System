'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { ConsumerDashboard } from '@/components/dashboard/ConsumerDashboard';
import { readDemoSession } from '@/lib/login/demoSession';
import { dashboardCopy } from '@/lib/dashboard/data';
import { useLang } from '@/lib/login/hooks';

export default function DashboardPage() {
  const router = useRouter();
  const { lang } = useLang();
  const [consumerMobile, setConsumerMobile] = useState<string | null>(null);

  useEffect(() => {
    const session = readDemoSession();
    if (session) {
      setConsumerMobile(session.mobile);
    } else {
      router.replace('/login');
    }
  }, [router]);

  if (!consumerMobile) {
    return (
      <main className="grid min-h-screen place-items-center bg-slate-50 px-5 text-center text-slate-700 dark:bg-slate-950 dark:text-slate-200">
        <p>{dashboardCopy[lang].loginRequired}</p>
      </main>
    );
  }

  return <ConsumerDashboard key={consumerMobile} consumerMobile={consumerMobile} />;
}
