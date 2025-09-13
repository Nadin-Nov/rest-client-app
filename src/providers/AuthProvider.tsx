'use client';

import type { ReactNode } from 'react';
import { useState } from 'react';

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

  return <AuthContext.Provider value={{ isAuth, username, signIn, signOut }}>{children}</AuthContext.Provider>;
};
