import { Button, Group } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './BodyRequest.module.css';

interface BodyRequestProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const BodyRequest: FC<BodyRequestProps> = ({ value, onChange, readOnly }) => {
  const t = useTranslations('RestClient');

  const [bodyType, setBodyType] = useState<'json' | 'text'>('json');

  const toggle = () => {
    setBodyType((prev) => (prev === 'json' ? 'text' : 'json'));
  };

  return (
    <>
      <h3> {t('body')}</h3>

      <div className={styles.switchRowWrapper}>
        <div className={styles.toggle} onClick={toggle}>
          <div className={`${styles.dot} ${bodyType === 'text' ? styles.right : styles.left}`} />
        </div>
        <div className={bodyType === 'json' ? styles.activeLabel : ''}>JSON</div>
        <div className={bodyType === 'text' ? styles.activeLabel : ''}>{t('text')}</div>
      </div>

      <TextArea
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={bodyType === 'json' ? t('jsonPlaceholder') : t('textPlaceholder')}
      />

      <Group>
        <Button style={{ visibility: bodyType === 'json' ? 'visible' : 'hidden' }} className={styles.prettifyButton}>
          {t('prettify')}
        </Button>
      </Group>
    </>
  );
};
