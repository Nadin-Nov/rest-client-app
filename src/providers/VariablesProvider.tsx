'use client';

import { useEffect, useReducer, type FC, type ReactNode } from 'react';

import { VariablesContext } from '@/contexts/variablesContextCore';
import { useAuthContext } from '@/hooks/useAuthContext';
import type { Variable, VariablesAction, VariablesState, VariablesContextValue } from '@/types/variablesContext';

const variablesReducer = (state: VariablesState, action: VariablesAction): VariablesState => {
  switch (action.type) {
    case 'LOAD':
      return action.payload;
    case 'ADD':
      return [...state, action.payload];
    case 'UPDATE':
      return state.map((v) => (v.key === action.key ? { ...v, value: action.value } : v));
    case 'REMOVE':
      return state.filter((v) => v.key !== action.key);
    case 'CLEAR':
      return [];
    default:
      return state;
  }
};

interface VariablesProviderProps {
  children: ReactNode;
}

export const VariablesProvider: FC<VariablesProviderProps> = ({ children }) => {
  const { username } = useAuthContext();
  const [state, dispatch] = useReducer(variablesReducer, []);

  useEffect(() => {
    if (!username) return;

    const raw = localStorage.getItem(`variables_${username}`);
    if (!raw) return;

    try {
      const parsed: unknown = JSON.parse(raw);
      const variables: Variable[] = Array.isArray(parsed)
        ? parsed.filter(
            (item): item is Variable =>
              typeof item === 'object' &&
              item !== null &&
              'key' in item &&
              'value' in item &&
              typeof (item as { key?: unknown; value?: unknown }).key === 'string' &&
              typeof (item as { key?: unknown; value?: unknown }).value === 'string'
          )
        : [];

      dispatch({ type: 'LOAD', payload: variables });
    } catch {
      console.log('Failed to parse variables from localStorage');
      dispatch({ type: 'LOAD', payload: [] });
    }
  }, [username]);

  useEffect(() => {
    if (!username) return;
    localStorage.setItem(`variables_${username}`, JSON.stringify(state));
  }, [state, username]);

  const value: VariablesContextValue = { state, dispatch, hasVariables: state.length > 0 };

  return <VariablesContext.Provider value={value}>{children}</VariablesContext.Provider>;
};
