'use client';

import dynamic from 'next/dynamic';
import { redirect } from 'next/navigation';

import { PawSpinner } from '@/components/ui/PawSpinner/PawSpinner';
import { useAuthContext } from '@/hooks/useAuthContext';

import styles from './styles.module.css';

const Variables = dynamic(() => import('@/components/Variables/VariablesComponent/Variables'), {
  ssr: false,
  loading: () => <PawSpinner />,
});

export default function VariablesPage() {
  const { isAuth } = useAuthContext();

  if (!isAuth) redirect('/sign-in');

  return (
    <div className={styles.container}>
      <Variables />
    </div>
  );
}
