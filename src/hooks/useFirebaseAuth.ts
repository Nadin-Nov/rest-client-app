import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/lib/firebase';
import type { AuthUser } from '@/types/types';
import { formatAuthUser } from '@/utils/formatAuthUser';

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);

  const authStateChanged = (authState: User | null) => {
    if (!authState) {
      setLoading(false);
      return;
    }
    setAuthUser(formatAuthUser(authState));
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  const signUpUser = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Failed to sign up', error);
    }
  };

  const signInUser = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.error('Failed to sign in', error);
    }
  };

  const signOutUser = async () => {
    try {
      await signOut(auth);
      setAuthUser(null);
      setLoading(false);
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  return { authUser, loading, signUpUser, signInUser, signOutUser };
};
