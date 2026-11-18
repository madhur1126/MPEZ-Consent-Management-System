'use client';

import type { Lang } from '@/lib/login/i18n';
import type { ConsentAnswer, ConsentQuestion, DashboardCopy } from '@/lib/dashboard/data';
import { Card, RadioGroup } from '@/components/common';
import { DashboardIcon } from './DashboardIcon';

export function ConsentCard({
  question,
  lang,
  copy,
  value,
  onChange,
  disabled = false,
}: {
  question: ConsentQuestion;
  lang: Lang;
  copy: DashboardCopy;
  value: ConsentAnswer | null;
  onChange?: (answer: ConsentAnswer) => void;
  disabled?: boolean;
}) {
  return (
    <Card as="article" className="min-w-0 p-3 transition hover:border-blue-200 sm:p-6">
      <div className="flex min-w-0 items-start gap-2 sm:gap-3">
        <span className="grid h-9 w-9 flex-none place-items-center rounded-xl bg-blue-50 text-blue-800 dark:bg-blue-950 dark:text-blue-300 sm:h-10 sm:w-10">
          <DashboardIcon name={question.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-blue-800 dark:bg-blue-950 dark:text-blue-200">
              {question.id}
            </span>
            <h3 className="break-words text-sm font-bold text-slate-900 dark:text-white sm:text-base">
              {question.category[lang]}
            </h3>
          </div>
          <p className="mt-2 text-sm leading-5 text-slate-700 dark:text-slate-300 sm:mt-3 sm:leading-6 sm:text-[15px]">
            {question.question[lang]}
          </p>
        </div>
      </div>

      <RadioGroup
        name={`consent-${question.id}`}
        label={question.category[lang]}
        options={[
          { value: 'yes', label: copy.agree, tone: 'primary' },
          { value: 'no', label: copy.decline, tone: 'neutral' },
        ]}
        value={value}
        onChange={onChange}
        disabled={disabled}
        columns={2}
        className="mt-4 sm:mt-5"
        optionClassName="text-xs sm:text-sm"
      />
    </Card>
  );
}
