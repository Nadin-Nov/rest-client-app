import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { afterEach, describe, it, expect, vi } from 'vitest';

import Header from './Header';

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

const signOutUser = vi.fn().mockResolvedValue(undefined);

vi.mock('@/hooks/useAuth', () => ({
  useAuth: vi.fn(() => ({ authUser: { name: 'JohnDoe' }, signOutUser })),
}));

vi.mock('@/hooks/useSticky', () => ({
  useSticky: () => false,
}));

vi.mock('@/hooks/useLocalePrefix', () => ({
  useLocalePrefix: () => '/en',
}));

vi.mock('@/i18n/navigation', () => ({
  useRouter: () => ({ push: vi.fn() }),
  usePathname: () => '/test-path',
}));

afterEach(() => {
  vi.resetAllMocks();
  vi.restoreAllMocks();
  vi.unstubAllGlobals();
});

describe('Header component', () => {
  it('should render username when user is authenticated', () => {
    render(<Header />);
    expect(screen.getByText('JohnDoe')).toBeInTheDocument();
  });

  it('should call signOutUser when HeaderView onSignOut is triggered', async () => {
    const user = userEvent.setup();
    render(<Header />);

    const signOutButton = screen.getByRole('button', { name: 'Sign Out' });
    await user.click(signOutButton);

    expect(signOutUser).toHaveBeenCalled();
  });
});
