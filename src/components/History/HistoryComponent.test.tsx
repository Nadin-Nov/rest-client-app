import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { vi, describe, it, afterEach, expect } from 'vitest';

import HistoryComponent from './HistoryComponent';
import type { HistoryItem } from './types';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('./HistoryRow', () => ({
  default: ({ item }: { item: HistoryItem }) => <div data-testid='history-row'>{item.url}</div>,
}));

describe('HistoryComponent.tsx', () => {
  afterEach(() => {
    localStorage.clear();
    vi.restoreAllMocks();
  });

  it('should show message if history is empty', () => {
    localStorage.removeItem('requestHistory');
    render(<HistoryComponent />);
    expect(screen.getByText('noRequests')).toBeInTheDocument();
    expect(screen.getByText('tryRestClient')).toBeInTheDocument();
  });

  it('should render table and HistoryRow if history exists', () => {
    const fakeHistory: HistoryItem[] = [
      {
        id: '1',
        method: 'GET',
        url: 'https://api.example.com',
        status: 200,
        timestamp: '2025-09-22T10:00:00Z',
        duration: 123,
        requestSize: 50,
        responseSize: 100,
        errorDetails: '',
      },
    ];
    localStorage.setItem('requestHistory', JSON.stringify(fakeHistory));
    render(<HistoryComponent />);
    expect(screen.getByText('method')).toBeInTheDocument();
    expect(screen.getByText('url')).toBeInTheDocument();
    expect(screen.getByTestId('history-row')).toHaveTextContent('https://api.example.com');
  });
});
