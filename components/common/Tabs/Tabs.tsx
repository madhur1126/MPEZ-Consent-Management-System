'use client';

import { useId, useRef, useState, type KeyboardEvent, type ReactNode } from 'react';

export interface TabItem {
  id: string;
  label: ReactNode;
  content: ReactNode;
  disabled?: boolean;
}

export interface TabsProps {
  tabs: TabItem[];
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  ariaLabel?: string;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
  tabListClassName?: string;
  panelClassName?: string;
}

export function Tabs({
  tabs,
  value,
  defaultValue,
  onValueChange,
  ariaLabel = 'Tabs',
  orientation = 'horizontal',
  className = '',
  tabListClassName = '',
  panelClassName = '',
}: TabsProps) {
  const generatedId = useId();
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [uncontrolledValue, setUncontrolledValue] = useState(
    defaultValue ?? tabs.find((tab) => !tab.disabled)?.id,
  );
  const selectedValue = value ?? uncontrolledValue;
  const selectedIndex = tabs.findIndex((tab) => tab.id === selectedValue && !tab.disabled);
  const activeIndex = selectedIndex >= 0 ? selectedIndex : tabs.findIndex((tab) => !tab.disabled);
  const activeTab = tabs[activeIndex];
  const isVertical = orientation === 'vertical';
  const baseId = `mpez-tabs-${generatedId}`;

  const selectTab = (tab: TabItem) => {
    if (tab.disabled) {
      return;
    }

    if (value === undefined) {
      setUncontrolledValue(tab.id);
    }
    onValueChange?.(tab.id);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLButtonElement>, currentIndex: number) => {
    const enabledIndices = tabs.reduce<number[]>((indices, tab, index) => {
      if (!tab.disabled) {
        indices.push(index);
      }
      return indices;
    }, []);
    const position = enabledIndices.indexOf(currentIndex);
    let nextPosition: number | undefined;

    if ((isVertical && event.key === 'ArrowDown') || (!isVertical && event.key === 'ArrowRight')) {
      nextPosition = (position + 1) % enabledIndices.length;
    } else if ((isVertical && event.key === 'ArrowUp') || (!isVertical && event.key === 'ArrowLeft')) {
      nextPosition = (position - 1 + enabledIndices.length) % enabledIndices.length;
    } else if (event.key === 'Home') {
      nextPosition = 0;
    } else if (event.key === 'End') {
      nextPosition = enabledIndices.length - 1;
    }

    if (nextPosition === undefined || enabledIndices.length === 0) {
      return;
    }

    event.preventDefault();
    const nextIndex = enabledIndices[nextPosition];
    tabRefs.current[nextIndex]?.focus();
    selectTab(tabs[nextIndex]);
  };

  if (!activeTab) {
    return null;
  }

  return (
    <div className={`${isVertical ? 'flex flex-col gap-3 sm:flex-row sm:gap-4' : ''} ${className}`}>
      <div
        role="tablist"
        aria-label={ariaLabel}
        aria-orientation={orientation}
        className={`flex gap-1 ${
          isVertical ? 'flex-col border-r border-slate-200 pr-2 dark:border-slate-700' : 'flex-row border-b border-slate-200 dark:border-slate-700'
        } ${tabListClassName}`}
      >
        {tabs.map((tab, index) => {
          const isSelected = index === activeIndex;
          const tabId = `${baseId}-tab-${index}`;
          const panelId = `${baseId}-panel-${index}`;

          return (
            <button
              key={tab.id}
              ref={(element) => {
                tabRefs.current[index] = element;
              }}
              type="button"
              role="tab"
              id={tabId}
              aria-selected={isSelected}
              aria-controls={panelId}
              tabIndex={isSelected ? 0 : -1}
              disabled={tab.disabled}
              onClick={() => selectTab(tab)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`rounded-t-lg px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 disabled:cursor-not-allowed disabled:opacity-50 ${
                isSelected
                  ? 'border-b-2 border-blue-800 text-blue-800 dark:text-blue-300'
                  : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white'
              } ${isVertical ? 'rounded-r-none rounded-bl-lg text-left' : ''}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      {tabs.map((tab, index) => (
        <div
          key={tab.id}
          role="tabpanel"
          id={`${baseId}-panel-${index}`}
          aria-labelledby={`${baseId}-tab-${index}`}
          tabIndex={0}
          hidden={index !== activeIndex}
          className={`min-w-0 flex-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-700 ${panelClassName}`}
        >
          {tab.content}
        </div>
      ))}
    </div>
  );
}
