'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { useState, useEffect } from 'react';

import styles from './HistoryComponent.module.css';
import HistoryRow from './HistoryRow';
import type { HistoryItem } from './types';

const HistoryComponent = () => {
  const t = useTranslations('History');
  const [history, setHistory] = useState<HistoryItem[]>([]);

  useEffect(() => {
    const savedHistory = localStorage.getItem('requestHistory');
    if (savedHistory) {
      setHistory(JSON.parse(savedHistory) as HistoryItem[]);
    }
  }, []);

  return (
    <div className={styles.table}>
      {history.length === 0 ? (
        <div className={styles.emptyRow}>
          <p>{t('noRequests')}</p>
          <Link href='/rest-client'>{t('tryRestClient')}</Link>
        </div>
      ) : (
        <>
          <div className={styles.headerRow}>
            <span>{t('method')}</span>
            <span>{t('url')}</span>
            <span>{t('status')}</span>
            <span>{t('timestamp')}</span>
            <span>{t('duration')}</span>
            <span>{t('requestSize')}</span>
            <span>{t('responseSize')}</span>
            <span>{t('error')}</span>
            <span>{t('actions')}</span>
          </div>
          {history.map((item) => (
            <HistoryRow key={item.id} item={item} />
          ))}
        </>
      )}
    </div>
  );
};

export default HistoryComponent;
