import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, beforeEach, expect } from 'vitest';

import { SignInForm } from './SignInForm';

const mockSignInUser = vi.fn(async () => {});
const mockSignUpUser = vi.fn(async () => {});
const mockSignOutUser = vi.fn(async () => {});
const mockReplace = vi.fn();
const mockUseTranslations = vi.fn((key: string) => key);

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({
    authUser: null,
    loading: false,
    signInUser: mockSignInUser,
    signUpUser: mockSignUpUser,
    signOutUser: mockSignOutUser,
  }),
}));

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: mockReplace }),
}));

vi.mock('next-intl', () => ({
  useTranslations: () => mockUseTranslations,
}));

vi.mock('@mantine/notifications', () => ({
  notifications: {
    show: vi.fn(),
  },
}));

const renderWithProvider = () =>
  render(
    <MantineProvider>
      <SignInForm />
    </MantineProvider>
  );

describe('SignInForm', () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it('should render form inputs and button', () => {
    renderWithProvider();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('password')).toBeInTheDocument();
    expect(screen.getByText('signInBtn')).toBeInTheDocument();
  });
});
