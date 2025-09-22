import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import VariablesPage from './page';

const replaceMock = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({ replace: replaceMock }),
}));

vi.mock('@/components/Variables/VariablesComponent/Variables', () => ({
  __esModule: true,
  default: () => <div data-testid='variables-component'>Variables Component</div>,
}));

describe('VariablesPage', () => {
  beforeEach(() => {
    replaceMock.mockClear();
  });

  it('should show PawSpinner when loading', () => {
    vi.mock('@/hooks/useAuthContext', () => ({
      useAuthContext: () => ({ authUser: null, loading: true }),
    }));

    render(<VariablesPage />);
    const spinner = screen.getByRole('status', { name: /loading/i });
    expect(spinner).toBeInTheDocument();
  });

  it('should show Variables component when authenticated', () => {
    vi.mock('@/hooks/useAuthContext', () => ({
      useAuthContext: () => ({ authUser: 'user', loading: false }),
    }));

    render(<VariablesPage />);
    expect(screen.getByTestId('variables-component')).toBeInTheDocument();
  });
});
