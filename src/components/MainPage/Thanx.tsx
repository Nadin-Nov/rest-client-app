'use client';

import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './thanx.module.css';

const Thanx: FC = () => {
  const t = useTranslations('MainPage.thanx');

  return (
    <section className={styles.thanx}>
      <div className={styles.thanxCard}>
        {t.rich('text', {
          link: (chunks) => (
            <a href='https://github.com/' target='_blank' rel='noopener noreferrer'>
              {chunks}
            </a>
          ),
        })}
      </div>
    </section>
  );
};

export default Thanx;
