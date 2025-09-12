'use client';

import Image from 'next/image';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './hero.module.css';

interface HeroProps {
  isAuth: boolean;
  username?: string;
}

const Hero: FC<HeroProps> = ({ isAuth, username }) => {
  const t = useTranslations('MainPage.hero');

  return (
    <section className={styles.hero}>
      <div className={styles.card}>
        <h1 className={styles.title}>{isAuth && username ? t('welcomeUser', { username }) : t('welcomeGuest')}</h1>
        <p className={styles.subtitle}>{isAuth ? 'Glad to see you again!' : 'Explore our app!'}</p>
        <Image src='/cat-main.png' alt='Cute cartoon cat' width={300} height={300} className={styles.heroCat} />
      </div>
    </section>
  );
};

export default Hero;
