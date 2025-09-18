'use client';

import { createContext } from 'react';

import { type AuthUser } from '@/types/types';

interface AuthContextType {
  authUser: AuthUser | null;
  loading: boolean;
  signUpUser: (email: string, password: string) => Promise<void>;
  signInUser: (email: string, password: string) => Promise<void>;
  signOutUser: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType>({
  authUser: null,
  loading: true,
  signUpUser: async () => {},
  signInUser: async () => {},
  signOutUser: async () => {},
});
