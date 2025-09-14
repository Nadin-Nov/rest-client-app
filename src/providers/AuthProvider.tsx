'use client';

import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  const signIn = (name: string) => {
    setIsAuth(true);
    setUsername(name);
  };

  const signOut = () => {
    setIsAuth(false);
    setUsername('');
  };

  const value = useMemo(() => ({ isAuth, username, signIn, signOut }), [isAuth, username]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
