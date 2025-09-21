import { render, screen } from '@testing-library/react';
import { NextIntlClientProvider } from 'next-intl';
import { afterEach, describe, it, expect, vi } from 'vitest';

import type { MainMessages, TeamMember } from '@/components/MainPage/types';
import { useAuth } from '@/hooks/useAuth';

import enMessages from '../../../../messages/en.json';

import Main from './Main';

// Мокаем хук
vi.mock('@/hooks/useAuth');
const mockedUseAuth = vi.mocked(useAuth);

afterEach(() => {
  vi.resetAllMocks();
});

const mockMessages: MainMessages = {
  team: {
    title: 'Our Team',
    memberMarta: { name: 'Marta', role: 'Developer' } as TeamMember,
    memberKate: { name: 'Kate', role: 'Designer' } as TeamMember,
    memberNadin: { name: 'Nadin', role: 'QA' } as TeamMember,
  },
  projectInfo: {
    title: 'Project Info',
    description1: 'Description 1',
    description2: 'Description 2',
    description3: 'Description 3',
  },
};

const renderWithIntl = (ui: React.ReactElement) =>
  render(
    <NextIntlClientProvider locale='en' messages={enMessages}>
      {ui}
    </NextIntlClientProvider>
  );

describe('Main component', () => {
  it('should render CallToAction when user is not authenticated', () => {
    mockedUseAuth.mockReturnValue({
      authUser: null,
      loading: false,
      signUpUser: vi.fn(),
      signInUser: vi.fn(),
      signOutUser: vi.fn(),
    });

    renderWithIntl(<Main messages={mockMessages} />);

    expect(screen.getByText(mockMessages.team.title)).toBeInTheDocument();
    expect(screen.getByText(mockMessages.projectInfo.title)).toBeInTheDocument();
  });

  it('should render username when user is authenticated', () => {
    mockedUseAuth.mockReturnValue({
      authUser: { name: 'JohnDoe', email: 'john@example.com', uid: '123' },
      loading: false,
      signUpUser: vi.fn(),
      signInUser: vi.fn(),
      signOutUser: vi.fn(),
    });

    renderWithIntl(<Main messages={mockMessages} />);

    expect(screen.getByText('Welcome back, JohnDoe!')).toBeInTheDocument();
    expect(screen.getByText(mockMessages.team.title)).toBeInTheDocument();
  });
});
