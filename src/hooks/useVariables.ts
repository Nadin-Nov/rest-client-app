'use client';

import { useContext } from 'react';

import type { VariablesContextValue } from '@/contexts/VariablesContextTypes';
import { VariablesContext } from '@/contexts/variablesContextCore';

export const useVariables = (): VariablesContextValue => {
  const ctx = useContext(VariablesContext);
  if (!ctx) throw new Error('useVariables must be used inside VariablesProvider');
  return ctx;
};
