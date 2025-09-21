'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { PawSpinner } from '@/components/ui/PawSpinner/PawSpinner';
import { useAuthContext } from '@/hooks/useAuthContext';

import styles from './styles.module.css';

const Variables = dynamic(() => import('@/components/Variables/VariablesComponent/Variables'), {
  ssr: false,
  loading: () => <PawSpinner />,
});

export default function VariablesPage() {
  const { authUser, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.replace('/sign-in');
    }
  }, [loading, authUser, router]);

  if (loading || !authUser) return <PawSpinner />;

  return (
    <div className={styles.container}>
      <Variables />
    </div>
  );
}
