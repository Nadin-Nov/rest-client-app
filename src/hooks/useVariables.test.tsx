import { renderHook } from '@testing-library/react';
import type React from 'react';
import { useReducer } from 'react';
import { describe, it, expect } from 'vitest';

import { VariablesContext } from '@/contexts/variablesContextCore';
import type { VariablesContextValue, VariablesState } from '@/types/variablesContext';

import { useVariables } from './useVariables';

describe('useVariables.ts', () => {
  it('should throw if used outside provider', () => {
    expect(() => renderHook(() => useVariables())).toThrow('useVariables must be used inside VariablesProvider');
  });

  it('should return context value inside provider', () => {
    const initialState: VariablesState = [{ key: 'API_URL', value: 'https://example.com' }];
    const reducer = (state: VariablesState) => state;

    const Wrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
      const [state, dispatch] = useReducer(reducer, initialState);
      const value: VariablesContextValue = { state, dispatch, hasVariables: true };

      return <VariablesContext.Provider value={value}>{children}</VariablesContext.Provider>;
    };

    const { result } = renderHook(() => useVariables(), { wrapper: Wrapper });

    expect(result.current.state).toEqual([{ key: 'API_URL', value: 'https://example.com' }]);
    expect(typeof result.current.dispatch).toBe('function');
    expect(result.current.hasVariables).toBe(true);
  });
});
