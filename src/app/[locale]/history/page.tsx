'use client';

import dynamic from 'next/dynamic';
import { useTranslations } from 'next-intl';

import { PawSpinner } from '@/components/ui/PawSpinner/PawSpinner';

import styles from './page.module.css';

const HistoryComponent = dynamic(() => import('@/components/History/HistoryComponent'), {
  ssr: false,
  loading: () => <PawSpinner />,
});

export default function HistoryPage() {
  const t = useTranslations('History');

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{t('historyHeader')}</h2>
      <HistoryComponent />
    </div>
  );
}
