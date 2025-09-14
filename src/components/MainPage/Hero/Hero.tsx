'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './Hero.module.css';

interface HeroProps {
  isAuth: boolean;
  username?: string;
}

const Hero: FC<HeroProps> = ({ isAuth, username }) => {
  const t = useTranslations('MainPage.hero');

  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <h1 className={styles.title}>{username ? t('welcomeUser', { username }) : t('welcomeGuest')}</h1>
        <p className={styles.subtitle}>{isAuth ? t('subtitleUser') : t('subtitleGuest')}</p>
        <Image
          src='/cat-main.webp'
          alt='Cute cartoon cat'
          width={300}
          height={300}
          className={styles.heroCat}
          priority
        />
      </div>
    </section>
  );
};

export default Hero;
