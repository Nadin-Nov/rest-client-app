'use client';

import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

import { PawSpinner } from '@/components/ui/PawSpinner/PawSpinner';
import { useAuthContext } from '@/hooks/useAuthContext';

import styles from './styles.module.css';

const RestClient = dynamic(
  () => import('@/components/RestClient/RestClientComponent/RestClient').then((mod) => mod.RestClient),
  {
    ssr: false,
    loading: () => (
      <div className={styles.container}>
        <PawSpinner />
      </div>
    ),
  }
);

export default function RESTClientPage() {
  const { authUser, loading } = useAuthContext();
  const router = useRouter();

  useEffect(() => {
    if (!loading && !authUser) {
      router.replace('/main');
    }
  }, [loading, authUser, router]);

  if (loading || !authUser)
    return (
      <div className={styles.container}>
        <PawSpinner />
      </div>
    );

  return (
    <div className={styles.container}>
      <RestClient className={styles.container} initialMethod={''} />
    </div>
  );
}
