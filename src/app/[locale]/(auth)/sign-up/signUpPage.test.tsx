import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

vi.mock('@/components/SignUpForm/SignUpForm', () => ({
  SignUpForm: () => <div>Sign Up Form</div>,
}));

vi.mock('@/components/AuthWrapper/AuthWrapper', () => ({
  AuthWrapper: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

import SignUpPage from './page';

describe('SignUpPage', () => {
  it('should render the SignUpForm form', () => {
    render(<SignUpPage />);

    expect(screen.getByText('Sign Up Form')).toBeInTheDocument();
  });
});
