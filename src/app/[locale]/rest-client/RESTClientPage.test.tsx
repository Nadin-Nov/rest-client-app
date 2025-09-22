import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect } from 'vitest';

import RESTClientPage from './page';

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: vi.fn(),
  }),
}));

vi.mock('@/components/RestClient/RestClientComponent/RestClient', () => ({
  RestClient: () => <h1 data-testid='rest-client'>RestClient</h1>,
}));

describe('RESTClientPage', () => {
  it('should show PawSpinner when loading', () => {
    vi.mock('@/hooks/useAuthContext', () => ({
      useAuthContext: () => ({ authUser: null, loading: true }),
    }));

    render(<RESTClientPage />);
    const spinner = screen.getByRole('status', { name: /loading/i });

    expect(spinner).toBeInTheDocument();
  });

  it('should show rest client', () => {
    vi.mock('@/hooks/useAuthContext', () => ({
      useAuthContext: () => ({ authUser: 'user', loading: false }),
    }));

    render(<RESTClientPage />);
    expect(screen.getByTestId('rest-client')).toBeInTheDocument();
  });
});
