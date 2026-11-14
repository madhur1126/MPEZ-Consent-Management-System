'use client';

import type { Lang } from '@/lib/login/i18n';
import type { ConsentAnswer, ConsentQuestion, DashboardCopy } from '@/lib/dashboard/data';
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
  const choices: { value: ConsentAnswer; label: string }[] = [
    { value: 'yes', label: copy.agree },
    { value: 'no', label: copy.decline },
  ];

  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-blue-200 dark:border-slate-700 dark:bg-slate-900 sm:p-6">
      <div className="flex items-start gap-3">
        <span className="grid h-10 w-10 flex-none place-items-center rounded-xl bg-[#EAF3FF] text-[#0B3F91] dark:bg-blue-950 dark:text-blue-300">
          <DashboardIcon name={question.icon} />
        </span>
        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex h-7 min-w-7 items-center justify-center rounded-full bg-blue-50 px-2 text-xs font-bold text-[#0B3F91] dark:bg-blue-950 dark:text-blue-200">
              {question.id}
            </span>
            <h3 className="text-base font-bold text-slate-900 dark:text-white">
              {question.category[lang]}
            </h3>
          </div>
          <p className="mt-3 text-sm leading-6 text-slate-700 dark:text-slate-300 sm:text-[15px]">
            {question.question[lang]}
          </p>
        </div>
      </div>

      <fieldset disabled={disabled} className="mt-5 grid gap-3 sm:grid-cols-2">
        <legend className="sr-only">{question.category[lang]}</legend>
        {choices.map((choice) => {
          const selected = value === choice.value;
          const positive = choice.value === 'yes';
          return (
            <label
              key={choice.value}
              className={`flex min-h-12 cursor-pointer items-center gap-3 rounded-xl border px-3 py-2.5 text-sm font-semibold transition ${
                selected
                  ? positive
                    ? 'border-blue-500 bg-blue-50 text-[#0B3F91] ring-1 ring-blue-200 dark:border-blue-400 dark:bg-blue-950/60 dark:text-blue-200'
                    : 'border-slate-500 bg-slate-100 text-slate-800 ring-1 ring-slate-300 dark:border-slate-400 dark:bg-slate-800 dark:text-slate-100'
                  : 'border-slate-200 bg-white text-slate-700 hover:border-blue-300 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300'
              } ${disabled ? 'cursor-default' : ''}`}
            >
              <input
                type="radio"
                name={`consent-${question.id}`}
                value={choice.value}
                checked={selected}
                onChange={() => onChange?.(choice.value)}
                className="h-4 w-4 accent-[#0B3F91]"
              />
              <span>{choice.label}</span>
            </label>
          );
        })}
      </fieldset>
    </article>
  );
}
