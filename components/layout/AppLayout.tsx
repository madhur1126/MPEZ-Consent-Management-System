import type { HTMLAttributes, ReactNode } from 'react';

export interface AppLayoutProps extends HTMLAttributes<HTMLDivElement> {
  background?: ReactNode;
  header?: ReactNode;
  footer?: ReactNode;
  mainClassName?: string;
  mainId?: string;
  mainAriaLabel?: string;
}

export function AppLayout({
  background,
  header,
  footer,
  mainClassName = '',
  mainId,
  mainAriaLabel,
  className = '',
  children,
  ...rootProps
}: AppLayoutProps) {
  return (
    <div {...rootProps} className={className}>
      {background}
      {header}
      <main id={mainId} aria-label={mainAriaLabel} className={`min-w-0 flex-1 ${mainClassName}`}>
        {children}
      </main>
      {footer}
    </div>
  );
}
