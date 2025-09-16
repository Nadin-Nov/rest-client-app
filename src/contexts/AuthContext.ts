'use client';

import { createContext } from 'react';

interface AuthContextType {
  isAuth: boolean;
  username: string;
  signIn: (username: string) => void;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);
