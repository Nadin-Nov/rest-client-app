import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './Response.module.css';

interface ResponseProps {
  status: number | null;
  body: string;
}
export const Response: FC<ResponseProps> = ({ status, body }) => {
  const t = useTranslations('RestClient');

  return (
    <div className={styles.responseContainer}>
      <h2 className={styles.responseHeader}>{t('responseHeader')}</h2>
      <div className={styles.statusWrapper}>
        <h3>{t('status')}</h3>
        <div>{status ?? t('responseStatus')}</div>
      </div>
      <h3>{t('body')}</h3>
      <TextArea value={body} placeholder={t('placeholderForFutureResponse')} readOnly={true} />
    </div>
  );
};
