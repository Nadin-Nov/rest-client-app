import { render } from '@testing-library/react';
import { vi, describe, it, beforeEach, expect } from 'vitest';

import { VariablesContext } from '@/contexts/variablesContextCore';
import type { VariablesContextValue, Variable } from '@/types/variablesContext';

import { VariablesProvider } from './VariablesProvider';

vi.mock('@/hooks/useAuthContext', () => ({
  useAuthContext: () => ({ authUser: { email: 'test@example.com' } }),
}));

describe('VariablesProvider', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('should renders children', () => {
    const { getByTestId } = render(
      <VariablesProvider>
        <div data-testid='child' />
      </VariablesProvider>
    );
    expect(getByTestId('child')).toBeInTheDocument();
  });

  it('should loads variables from localStorage', () => {
    const variables: Variable[] = [{ key: 'foo', value: 'bar' }];
    localStorage.setItem('variables_test@example.com', JSON.stringify(variables));

    let contextValue: VariablesContextValue | null = null;
    render(
      <VariablesProvider>
        <VariablesContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </VariablesContext.Consumer>
      </VariablesProvider>
    );

    expect(contextValue!).toBeDefined();
    expect(contextValue!.state).toEqual(variables);
    expect(contextValue!.hasVariables).toBe(true);
  });

  it('should handles invalid localStorage JSON', () => {
    localStorage.setItem('variables_test@example.com', 'not-json');

    let contextValue: VariablesContextValue | null = null;
    render(
      <VariablesProvider>
        <VariablesContext.Consumer>
          {(value) => {
            contextValue = value;
            return null;
          }}
        </VariablesContext.Consumer>
      </VariablesProvider>
    );

    expect(contextValue!).toBeDefined();
    expect(contextValue!.state).toEqual([]);
    expect(contextValue!.hasVariables).toBe(false);
  });
});
