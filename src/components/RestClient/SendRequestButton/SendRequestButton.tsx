import { Button } from '@mantine/core';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './SendRequestButton.module.css';

export const SendRequestButton: FC = () => {
  const t = useTranslations('RestClient');

  return <Button className={styles.sentRequestButton}>{t('sendRequestBtn')}</Button>;
};
