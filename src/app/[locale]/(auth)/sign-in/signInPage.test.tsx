import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/components/SignInForm/SignInForm', () => ({
  SignInForm: () => <div>Sign In Form</div>,
}));

vi.mock('@/components/AuthWrapper/AuthWrapper', () => ({
  AuthWrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

import SignInPage from './page';

describe('SignInPage', () => {
  it('should render the Sign In form', () => {
    render(<SignInPage />);

    expect(screen.getByText('Sign In Form')).toBeInTheDocument();
  });
});
