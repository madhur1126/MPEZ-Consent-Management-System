import type { ReactNode } from 'react';

export interface TableColumn<TRow> {
  id: string;
  header: ReactNode;
  render: (row: TRow) => ReactNode;
  className?: string;
  headerClassName?: string;
}

export interface TableProps<TRow> {
  columns: readonly TableColumn<TRow>[];
  rows: readonly TRow[];
  getRowKey: (row: TRow, index: number) => string | number;
  loading?: boolean;
  loadingLabel?: string;
  emptyState?: ReactNode;
  caption?: ReactNode;
  actions?: {
    label: string;
    render: (row: TRow) => ReactNode;
  };
  className?: string;
}

export function Table<TRow>({
  columns,
  rows,
  getRowKey,
  loading = false,
  loadingLabel = 'Loading data',
  emptyState = 'No records found',
  caption,
  actions,
  className = '',
}: TableProps<TRow>) {
  const columnCount = columns.length + (actions ? 1 : 0);

  return (
    <div className={`w-full overflow-x-auto rounded-2xl border border-slate-200 bg-white shadow-card dark:border-slate-700 dark:bg-slate-900 ${className}`}>
      <table className="w-full min-w-max border-collapse text-left text-sm">
        {caption && <caption className="sr-only">{caption}</caption>}
        <thead className="bg-blue-50 text-xs font-bold uppercase tracking-wide text-blue-800 dark:bg-slate-800 dark:text-blue-200">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                scope="col"
                className={`whitespace-nowrap px-4 py-3 ${column.headerClassName ?? ''}`}
              >
                {column.header}
              </th>
            ))}
            {actions && <th scope="col" className="px-4 py-3">{actions.label}</th>}
          </tr>
        </thead>
        <tbody aria-busy={loading || undefined} className="divide-y divide-slate-100 dark:divide-slate-800">
          {loading ? (
            <tr>
              <td colSpan={columnCount || 1} className="px-4 py-8 text-center text-slate-600 dark:text-slate-300">
                <span role="status" className="inline-flex items-center gap-2">
                  <span aria-hidden="true" className="mpez-spinner h-4 w-4 border-2" />
                  {loadingLabel}
                </span>
              </td>
            </tr>
          ) : rows.length === 0 ? (
            <tr>
              <td colSpan={columnCount || 1} className="px-4 py-8 text-center text-slate-600 dark:text-slate-300">
                {emptyState}
              </td>
            </tr>
          ) : rows.map((row, index) => (
            <tr key={getRowKey(row, index)} className="text-slate-800 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800/60">
              {columns.map((column) => (
                <td key={column.id} className={`px-4 py-3 ${column.className ?? ''}`}>
                  {column.render(row)}
                </td>
              ))}
              {actions && <td className="whitespace-nowrap px-4 py-3">{actions.render(row)}</td>}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
