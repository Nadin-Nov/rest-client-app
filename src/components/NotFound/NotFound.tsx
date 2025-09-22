import Image from 'next/image';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import Button from '@/components/ui/Button/Button';

import styles from './NotFound.module.css';

interface NotFoundProps {
  locale?: string;
}

const NotFound: FC<NotFoundProps> = ({ locale }) => {
  const t = useTranslations('NotFound');
  const homeUrl = locale ? `/${locale}` : '/';

  return (
    <div className={styles.container}>
      <Image src='/assets/images/cat-box.webp' alt={t('title')} width={250} height={250} />
      <h1 className={styles.title}>{t('title')}</h1>
      <p className={styles.subtitle}>{t('subtitle')}</p>
      <Link href={homeUrl} className={styles.buttonWrapper}>
        <Button variant='primary'>{t('button')}</Button>
      </Link>
    </div>
  );
};

export default NotFound;
