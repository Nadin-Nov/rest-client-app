'use client';

import { createContext } from 'react';

import type { VariablesContextValue } from '@/types/variablesContext';

export const VariablesContext = createContext<VariablesContextValue | null>(null);
