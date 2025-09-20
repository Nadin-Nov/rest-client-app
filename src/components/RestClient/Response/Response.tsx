import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';
import type { RequestStatus } from '@/hooks/useMakeRequest';

import styles from './Response.module.css';

interface ResponseProps {
  status: RequestStatus;
  body: string;
}
export const Response: FC<ResponseProps> = ({ status, body }) => {
  const t = useTranslations('RestClient');

  function checkStatus() {
    if (status === 'noURL') return t('responseStatus');
    if (status === 'error') return t('responseError');
    if (typeof status === 'number') return status;
  }

  return (
    <div className={styles.responseContainer}>
      <h2 className={styles.responseHeader}>{t('responseHeader')}</h2>
      <div className={styles.statusWrapper}>
        <h3>{t('status')}</h3>
        <div>{checkStatus()}</div>
      </div>
      <h3>{t('body')}</h3>
      <TextArea value={body} placeholder={t('placeholderForFutureResponse')} readOnly={true} />
    </div>
  );
};
