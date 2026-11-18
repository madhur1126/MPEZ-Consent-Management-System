import type { ReactNode } from 'react';

export interface PageHeaderProps {
  title: ReactNode;
  description?: ReactNode;
  eyebrow?: ReactNode;
  actions?: ReactNode;
  className?: string;
  titleId?: string;
}

export function PageHeader({
  title,
  description,
  eyebrow,
  actions,
  className = '',
  titleId,
}: PageHeaderProps) {
  return (
    <header className={`mb-5 flex flex-wrap items-end justify-between gap-3 ${className}`}>
      <div className="min-w-0">
        {eyebrow && <p className="text-xs font-bold uppercase tracking-[0.14em] text-blue-700">{eyebrow}</p>}
        <h1 id={titleId} className="mt-1 text-2xl font-extrabold tracking-tight text-blue-800 dark:text-blue-200 sm:text-4xl">
          {title}
        </h1>
        {description && <p className="mt-2 text-sm text-slate-700 dark:text-slate-300 sm:text-base">{description}</p>}
      </div>
      {actions}
    </header>
  );
}
