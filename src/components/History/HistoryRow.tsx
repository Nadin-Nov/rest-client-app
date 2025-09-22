'use client';

import Link from 'next/link';
import type { FC } from 'react';

import styles from './HistoryRow.module.css';
import type { HistoryItem } from './types';

interface HistoryRowProps {
  item: HistoryItem;
}

const HistoryRow: FC<HistoryRowProps> = ({ item }) => (
  <div className={styles.row}>
    <Link href={`/rest-client?id=${item.id}`} className={styles.link}>
      <span className={styles.method}>{item.method}</span>
      <span className={styles.url}>{item.url}</span>
    </Link>

    <span className={styles.status}>{item.status ?? '-'}</span>
    <span className={styles.timestamp}>{item.timestamp ? new Date(item.timestamp).toLocaleString() : '-'}</span>
    <span className={styles.duration}>{item.duration ?? '-'} ms</span>
    <span className={styles.reqSize}>{item.requestSize ?? '-'} B</span>
    <span className={styles.resSize}>{item.responseSize ?? '-'} B</span>
    <span className={styles.error}>{item.errorDetails ?? '-'}</span>
  </div>
);

export default HistoryRow;
