'use client';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import Button from '@/components/ui/Button/Button';

import styles from './CallToAction.module.css';

const CallToAction: FC = () => {
  const t = useTranslations('MainPage.callToAction');

  return (
    <section className={styles.callToAction}>
      <h2 className={styles.title}>{t('title')}</h2>
      <div className={styles.buttons}>
        <Link href='/signin'>
          <Button variant='secondary'>{t('signInButton')}</Button>
        </Link>
        <Link href='/signup'>
          <Button variant='secondary'>{t('signUpButton')}</Button>
        </Link>
      </div>
    </section>
  );
};

export default CallToAction;
