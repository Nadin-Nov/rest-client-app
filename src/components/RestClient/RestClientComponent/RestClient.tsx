'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';

import { MakeRequest } from '@/hooks/sendRequest';

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
  const [bodyRequest, setBodyRequest] = useState('');
  const [bodyType, setBodyType] = useState<'text' | 'json'>('json');

  const { status, bodyResponse, sendRequest } = MakeRequest();

  return (
    <div className={clsx(styles.container, className)}>
      <div className={styles.wrapper}>
        <h1>{t('restClientHeader')}</h1>
        <div className={styles.methodUrlContainer}>
          <MethodSelector method={method} onChange={setMethod} />
          <UrlInput value={url} onChange={setURL} />
        </div>
        <SendRequestButton
          className={styles.sendRequestBtn}
          onClick={() => void sendRequest(method, url, headers, bodyType, bodyRequest)}
        />
        <HeadersEditor headers={headers} onChange={setHeaders} />
        <Code />
        <BodyRequest
          value={bodyRequest}
          onChange={setBodyRequest}
          onBodyTypeChange={setBodyType}
          bodyType={bodyType}
          readOnly={false}
        />
        <Response status={status} body={bodyResponse} />
      </div>
    </div>
  );
};
