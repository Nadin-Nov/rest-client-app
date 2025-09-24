import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect } from 'vitest';

import HistoryRow from './HistoryRow';
import type { HistoryItem } from './types';

describe('HistoryRow.tsx', () => {
  it('should render all fields correctly', () => {
    const item: HistoryItem = {
      id: '1',
      method: 'GET',
      url: 'https://api.example.com',
      status: 200,
      timestamp: '2025-09-22T10:00:00Z',
      duration: 123,
      requestSize: 50,
      responseSize: 100,
      errorDetails: 'Some error',
    };

    render(<HistoryRow item={item} />);

    expect(screen.getByText(item.method)).toBeInTheDocument();
    expect(screen.getByText(item.url)).toBeInTheDocument();
    expect(screen.getByText('200')).toBeInTheDocument();
    expect(screen.getByText(new Date(item.timestamp).toLocaleString())).toBeInTheDocument();
    expect(screen.getByText(`${item.duration} ms`)).toBeInTheDocument();
    expect(screen.getByText(`${item.requestSize} B`)).toBeInTheDocument();
    expect(screen.getByText(`${item.responseSize} B`)).toBeInTheDocument();
    expect(screen.getByText(item.errorDetails ?? '-')).toBeInTheDocument();
  });

  it('should render placeholders when optional fields are missing', () => {
    const item: HistoryItem = {
      id: '2',
      method: 'POST',
      url: 'https://api.example.org',
      status: null,
      timestamp: '',
    } as Partial<HistoryItem> as HistoryItem;

    render(<HistoryRow item={item} />);

    const placeholders = screen.getAllByText('-');
    expect(placeholders.length).toBe(3);

    expect(screen.getByText('- ms')).toBeInTheDocument();

    const sizePlaceholders = screen.getAllByText('- B');
    expect(sizePlaceholders.length).toBe(2);
  });
});
