'use client';

import { createContext } from 'react';

import type { VariablesContextValue } from './VariablesContextTypes';

export const VariablesContext = createContext<VariablesContextValue | null>(null);
