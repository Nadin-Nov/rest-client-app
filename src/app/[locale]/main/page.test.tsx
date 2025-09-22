import { render, screen } from '@testing-library/react';
import * as navigation from 'next/navigation';
import * as intl from 'next-intl/server';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import MainPage from './page';

vi.mock('next/navigation', () => ({
  notFound: vi.fn(),
}));

vi.mock('next-intl/server', () => ({
  getMessages: vi.fn(() => ({})),
}));

vi.mock('@/components/MainPage/Main/Main', () => ({
  default: () => <div data-testid='main'>Main component</div>,
}));

const mockedNotFound = vi.mocked(navigation.notFound);
const mockedGetMessages = vi.mocked(intl.getMessages);

describe('MainPage', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render Main when locale and messages are valid', async () => {
    mockedGetMessages.mockResolvedValue({
      MainPage: {
        team: {
          title: 'Team',
          memberMarta: { name: 'Marta' },
          memberKate: { name: 'Kate' },
          memberNadin: { name: 'Nadin' },
        },
      },
    });

    const element = await MainPage({ params: Promise.resolve({ locale: 'en' }) });
    render(element);

    expect(screen.getByTestId('main')).toBeInTheDocument();
    expect(mockedNotFound).not.toHaveBeenCalled();
  });
});
