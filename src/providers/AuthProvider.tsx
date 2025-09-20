'use client';

import type { ReactNode } from 'react';
import { useState, useMemo } from 'react';

import { AuthContext } from '@/contexts/AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [username, setUsername] = useState('');

  const signIn = (name: string) => {
    setUsername(name);
  };

  const signOut = () => {
    setUsername('');
  };

  const value = useMemo(() => {
    const isAuth = !!username;
    return { isAuth, username, signIn, signOut };
  }, [username]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
