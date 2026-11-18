'use client';

import { Button } from '../Button';

export interface PaginationProps {
  page: number;
  pageCount: number;
  onPageChange: (page: number) => void;
  ariaLabel?: string;
  previousLabel?: string;
  nextLabel?: string;
  pageLabel?: (page: number) => string;
  disabled?: boolean;
  className?: string;
}

export function Pagination({
  page,
  pageCount,
  onPageChange,
  ariaLabel = 'Pagination',
  previousLabel = 'Previous',
  nextLabel = 'Next',
  pageLabel = (pageNumber) => `Page ${pageNumber}`,
  disabled = false,
  className = '',
}: PaginationProps) {
  if (pageCount <= 1) {
    return null;
  }

  const currentPage = Math.min(Math.max(page, 1), pageCount);
  const startPage = Math.max(1, Math.min(currentPage - 2, pageCount - 4));
  const endPage = Math.min(pageCount, startPage + 4);
  const pages = Array.from({ length: endPage - startPage + 1 }, (_, index) => startPage + index);

  return (
    <nav aria-label={ariaLabel} className={`flex flex-wrap items-center justify-center gap-2 ${className}`}>
      <Button
        variant="outline"
        size="small"
        disabled={disabled || currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        {previousLabel}
      </Button>
      {pages.map((pageNumber) => (
        <Button
          key={pageNumber}
          variant={pageNumber === currentPage ? 'primary' : 'outline'}
          size="small"
          className="min-w-10 px-2"
          aria-label={pageLabel(pageNumber)}
          aria-current={pageNumber === currentPage ? 'page' : undefined}
          disabled={disabled}
          onClick={() => onPageChange(pageNumber)}
        >
          {pageNumber}
        </Button>
      ))}
      <Button
        variant="outline"
        size="small"
        disabled={disabled || currentPage === pageCount}
        onClick={() => onPageChange(currentPage + 1)}
      >
        {nextLabel}
      </Button>
    </nav>
  );
}
