'use client';

import type { ReactNode } from 'react';

import { AuthContext } from '@/contexts/AuthContext';
import { useFirebaseAuth } from '@/hooks/useFirebaseAuth';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const auth = useFirebaseAuth();

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};
