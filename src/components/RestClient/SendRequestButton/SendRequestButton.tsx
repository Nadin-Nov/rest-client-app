import { Button } from '@mantine/core';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './SendRequestButton.module.css';

interface SendRequestButtonProps {
  className?: string;
}
export const SendRequestButton: FC<SendRequestButtonProps> = ({ className }) => {
  const t = useTranslations('RestClient');

  return <Button className={clsx(styles.sendRequestButton, className)}>{t('sendRequestBtn')}</Button>;
};
