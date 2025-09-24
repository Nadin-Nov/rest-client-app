import { Button, Group, TextInput } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';

import styles from './HeadersEditor.module.css';

export interface Header {
  key: string;
  value: string;
}

interface HeadersEditorProps {
  headers: Header[];
  onChange: (headers: Header[]) => void;
}

export const HeadersEditor: FC<HeadersEditorProps> = ({ headers, onChange }) => {
  const t = useTranslations('RestClient');

  const handleAddHeader = () => {
    onChange([...headers, { key: '', value: '' }]);
  };

  const handleRemoveHeader = (index: number) => {
    onChange(headers.filter((_, i) => i !== index));
  };

  const handleUpdateHeaderKey = (index: number, newKey: string) => {
    const newHeaders = [...headers];

    newHeaders[index] = { ...headers[index], key: newKey };
    onChange(newHeaders);
  };

  const handleUpdateHeaderValue = (index: number, newValue: string) => {
    const newHeaders = [...headers];

    newHeaders[index] = { ...headers[index], value: newValue };
    onChange(newHeaders);
  };

  return (
    <>
      <h3>{t('headers')}</h3>
      <Button onClick={handleAddHeader} className={styles.addHeaderButton}>
        {t('addHeader')}
      </Button>
      <div className={styles.headersWrapper}>
        {headers.map((header, index) => (
          <Group key={index}>
            <TextInput
              placeholder={t('keyPlaceholder')}
              value={header.key}
              onChange={(e) => handleUpdateHeaderKey(index, e.currentTarget.value)}
            ></TextInput>
            <TextInput
              placeholder={t('valuePlaceholder')}
              value={header.value}
              onChange={(e) => handleUpdateHeaderValue(index, e.currentTarget.value)}
            ></TextInput>
            <Button onClick={() => handleRemoveHeader(index)} className={styles.removeButton}>
              {t('removeHeader')}
            </Button>
          </Group>
        ))}
      </div>
    </>
  );
};
