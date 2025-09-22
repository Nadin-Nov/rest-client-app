import { render, screen } from '@testing-library/react';
import { afterEach, describe, it, expect, vi } from 'vitest';

import { AuthSection } from './AuthSection';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => {
    const translations: Record<string, string> = {
      signIn: 'Sign In',
      signUp: 'Sign Up',
      signOut: 'Sign Out',
    };
    return translations[key] || key;
  },
}));

vi.mock('@/hooks/useLocalePrefix', () => ({
  useLocalePrefix: () => '',
}));

afterEach(() => {
  vi.resetAllMocks();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('AuthSection component', () => {
  it('should render sign in/up buttons when user is not authenticated', () => {
    render(<AuthSection isAuth={false} onSignOut={vi.fn()} />);

    expect(screen.getByRole('link', { name: 'Sign In' })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Sign Up' })).toBeInTheDocument();
  });

  it('should render username and sign out button when user is authenticated', () => {
    const onSignOut = vi.fn().mockResolvedValue(undefined);
    render(<AuthSection isAuth={true} username='JohnDoe' onSignOut={onSignOut} />);

    expect(screen.getByText('JohnDoe')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Sign Out' })).toBeInTheDocument();
  });
});
