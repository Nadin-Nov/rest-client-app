import { render, screen } from '@testing-library/react';
import { IntlProvider } from 'next-intl';
import { vi, describe, it, expect } from 'vitest';

import HistoryPage from './page';

vi.mock('@/components/History/HistoryComponent', () => ({
  default: () => <div data-testid='history-component'>History Component</div>,
}));

describe('HistoryPage', () => {
  it('renders header and HistoryComponent', () => {
    const messages = {
      History: {
        historyHeader: 'Request History',
      },
    };

    render(
      <IntlProvider locale='en' messages={messages}>
        <HistoryPage />
      </IntlProvider>
    );

    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Request History');
  });
});
