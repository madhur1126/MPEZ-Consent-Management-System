'use client';

import { useEffect, useId, useRef, type ReactNode } from 'react';
import { Button } from '../Button';

export type ModalSize = 'small' | 'medium' | 'large' | 'wide';
export type ModalMode = 'dialog' | 'confirmation';

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: ReactNode;
  closeLabel: string;
  description?: ReactNode;
  eyebrow?: ReactNode;
  headerContent?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
  size?: ModalSize;
  mode?: ModalMode;
  closeDisabled?: boolean;
  closeOnBackdrop?: boolean;
  showCloseButton?: boolean;
  ariaLabel?: string;
  panelClassName?: string;
  bodyClassName?: string;
  headerClassName?: string;
  footerClassName?: string;
}

const sizeClasses: Record<ModalSize, string> = {
  small: 'sm:max-w-md',
  medium: 'sm:max-w-2xl',
  large: 'sm:max-w-3xl',
  wide: 'sm:max-w-5xl',
};

const focusableSelector = [
  'a[href]',
  'button:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  'textarea:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

export function Modal({
  isOpen,
  onClose,
  title,
  closeLabel,
  description,
  eyebrow,
  headerContent,
  children,
  footer,
  size = 'large',
  mode = 'dialog',
  closeDisabled = false,
  closeOnBackdrop = true,
  showCloseButton = true,
  ariaLabel,
  panelClassName = '',
  bodyClassName = '',
  headerClassName = '',
  footerClassName = '',
}: ModalProps) {
  const generatedId = useId();
  const titleId = `${generatedId}-title`;
  const descriptionId = `${generatedId}-description`;
  const panelRef = useRef<HTMLElement>(null);
  const closeRef = useRef(onClose);
  const closeDisabledRef = useRef(closeDisabled);
  closeRef.current = onClose;
  closeDisabledRef.current = closeDisabled;

  useEffect(() => {
    if (!isOpen) return;

    const previousFocus = document.activeElement instanceof HTMLElement
      ? document.activeElement
      : null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && !closeDisabledRef.current) {
        event.preventDefault();
        closeRef.current();
        return;
      }

      if (event.key !== 'Tab' || !panelRef.current) return;
      const focusable = Array.from(
        panelRef.current.querySelectorAll<HTMLElement>(focusableSelector),
      ).filter((element) => !element.matches(':disabled') && element.getClientRects().length > 0);
      if (focusable.length === 0) {
        event.preventDefault();
        panelRef.current.focus();
        return;
      }

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (document.activeElement === panelRef.current) {
        event.preventDefault();
        (event.shiftKey ? last : first).focus();
      } else if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/60 p-0 backdrop-blur-sm sm:items-center sm:p-5"
      onMouseDown={(event) => {
        if (closeOnBackdrop && !closeDisabled && event.target === event.currentTarget) onClose();
      }}
    >
      <section
        ref={panelRef}
        role={mode === 'confirmation' ? 'alertdialog' : 'dialog'}
        aria-modal="true"
        aria-labelledby={title ? titleId : undefined}
        aria-describedby={description ? descriptionId : undefined}
        aria-label={!title ? ariaLabel : undefined}
        tabIndex={-1}
        className={`flex max-h-[70vh] w-full flex-col overflow-hidden rounded-t-3xl bg-white shadow-2xl outline-none dark:bg-slate-900 sm:rounded-3xl ${sizeClasses[size]} ${panelClassName}`}
      >
        <header className={`flex flex-none items-start justify-between gap-4 border-b border-slate-200 px-5 py-4 dark:border-slate-700 sm:px-7 sm:py-5 ${headerClassName}`}>
          <div className="min-w-0 flex-1">
            {eyebrow && <p className="text-xs font-bold uppercase tracking-wide text-blue-700">{eyebrow}</p>}
            <h2 id={titleId} className="mt-1 break-words text-xl font-extrabold text-blue-800 dark:text-blue-200 sm:text-2xl">
              {title}
            </h2>
            {description && (
              <p id={descriptionId} className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                {description}
              </p>
            )}
            {headerContent && <div className="mt-2">{headerContent}</div>}
          </div>
          {showCloseButton && (
            <Button
              type="button"
              variant="ghost"
              size="small"
              onClick={onClose}
              disabled={closeDisabled}
              aria-label={closeLabel}
              className="!flex-none !px-2"
            >
              <span aria-hidden="true" className="text-xl leading-none">×</span>
            </Button>
          )}
        </header>
        <div className={`min-h-0 flex-1 overflow-y-auto p-4 sm:p-6 ${bodyClassName}`}>
          {children}
        </div>
        {footer && (
          <footer className={`flex flex-none flex-col-reverse gap-3 border-t border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950 sm:flex-row sm:justify-end sm:px-6 ${footerClassName}`}>
            {footer}
          </footer>
        )}
      </section>
    </div>
  );
}
