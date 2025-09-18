'use client';

import { redirect } from 'next/navigation';

import Variables from '@/components/Variables/VariablesComponent/Variables';
import { useAuthContext } from '@/hooks/useAuthContext';

import styles from './styles.module.css';

export default function VariablesPage() {
  const { isAuth } = useAuthContext();

  if (!isAuth) {
    redirect('/sign-in');
  }

  return (
    <div className={styles.container}>
      <Variables />
    </div>
  );
}
