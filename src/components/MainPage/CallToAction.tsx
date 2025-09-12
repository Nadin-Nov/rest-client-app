'use client';

import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import Button from '@/components/ui/Button/Button';

import styles from './callToAction.module.css';

const CallToAction: FC = () => {
  const t = useTranslations('MainPage.callToAction');

  const handleClick = () => {
    alert('Action triggered!');
  };

  return (
    <section className={styles.callToAction}>
      <h2 className={styles.title}>{t('title')}</h2>
      <Button variant='secondary' onClick={handleClick}>
        {t('button')}
      </Button>
    </section>
  );
};

export default CallToAction;
