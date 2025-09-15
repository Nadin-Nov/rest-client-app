'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';

import { BodyRequest } from '../BodyRequest/BodyRequest';
import { Code } from '../Code/Code';
import type { Header } from '../HeadersEditor/HeadersEditor';
import { HeadersEditor } from '../HeadersEditor/HeadersEditor';
import { MethodSelector } from '../MethodSelector/MethodSelector';
import { Response } from '../Response/Response';
import { SendRequestButton } from '../SendRequestButton/SendRequestButton';
import { UrlInput } from '../UrlInput/UrlInput';

import styles from './RestClient.module.css';

interface RestClientProps {
  className: string;
}

export const RestClient: FC<RestClientProps> = ({ className }) => {
  const t = useTranslations('RestClient');

  const [method, setMethod] = useState('GET');
  const [url, setURL] = useState('');
  const [headers, setHeaders] = useState<Header[]>([{ key: '', value: '' }]);
  const [body, setBody] = useState('');

  return (
    <>
      <div className={clsx(styles.container, className)}>
        <div className={styles.wrapper}>
          <h1>{t('restClientHeader')}</h1>
          <div className={styles.methodUrlContainer}>
            <MethodSelector method={method} onChange={setMethod} />
            <UrlInput value={url} onChange={setURL} />
          </div>
          <SendRequestButton className={styles.sendRequestBtn} />
          <HeadersEditor headers={headers} onChange={setHeaders} />
          <Code />
          <BodyRequest value={body} onChange={setBody} readOnly={false} />
          <div>
            <Response status={null} body={''} />
          </div>
        </div>
      </div>
    </>
  );
};
