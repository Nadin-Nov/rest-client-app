import { render } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { AuthContext } from '@/contexts/AuthContext';
import type { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

import { AuthProvider } from './AuthProvider';

vi.mock('@/hooks/useFirebaseAuth', () => ({
  useFirebaseAuth: vi.fn(() => ({ authUser: { uid: '123' }, loading: false })),
}));

describe('AuthProvider', () => {
  it('renders children', () => {
    const { getByText } = render(
      <AuthProvider>
        <div>Test Child</div>
      </AuthProvider>
    );

    expect(getByText('Test Child')).toBeInTheDocument();
  });

  it('provides auth context value', () => {
    let contextValue: ReturnType<typeof useFirebaseAuth> | null = null;

    render(
      <AuthProvider>
        <AuthContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </AuthContext.Consumer>
      </AuthProvider>
    );

    expect(contextValue).toBeDefined();
    expect(contextValue!.authUser).toEqual({ uid: '123' });
    expect(contextValue!.loading).toBe(false);
  });
});
