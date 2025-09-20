import { Button } from '@mantine/core';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import styles from './SendRequestButton.module.css';

interface SendRequestButtonProps {
  className?: string;
  onClick: () => void;
}

export const SendRequestButton: FC<SendRequestButtonProps> = ({ className, onClick }) => {
  const t = useTranslations('RestClient');

  return (
    <Button className={clsx(styles.sendRequestButton, className)} onClick={onClick} type='button'>
      {t('sendRequestBtn')}
    </Button>
  );
};
