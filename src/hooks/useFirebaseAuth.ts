import {
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  type User,
  updateProfile,
} from 'firebase/auth';
import { useEffect, useState } from 'react';

import { auth } from '@/lib/firebase';
import type { AuthUser } from '@/types/types';
import { formatAuthUser } from '@/utils/formatAuthUser';

export const useFirebaseAuth = () => {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  const authStateChanged = (authState: User | null) => {
    if (!authState) {
      return;
    }
    setAuthUser(formatAuthUser(authState));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, authStateChanged);
    return () => unsubscribe();
  }, []);

  const signUpUser = async (email: string, password: string, displayName: string) => {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      const newUser = result.user;
      if (displayName) {
        await updateProfile(newUser, {
          displayName: displayName,
        });

        await newUser.reload();

        const updatedUser = auth.currentUser;
        if (updatedUser) {
          setAuthUser(formatAuthUser(updatedUser));
        }
      }
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
    } catch (error) {
      console.error('Failed to sign out', error);
    }
  };

  return { authUser, signUpUser, signInUser, signOutUser };
};
