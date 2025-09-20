'use client';

import { useContext } from 'react';

import { VariablesContext } from '@/contexts/variablesContextCore';
import type { VariablesContextValue } from '@/types/variablesContext';

export const useVariables = (): VariablesContextValue => {
  const ctx = useContext(VariablesContext);
  if (!ctx) throw new Error('useVariables must be used inside VariablesProvider');
  return ctx;
};
