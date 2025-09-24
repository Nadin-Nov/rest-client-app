'use client';

import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { useState, type FC } from 'react';

import { useMakeRequest } from '@/hooks/useMakeRequest';

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
  initialMethod: string;
  initialUrl?: string;
  initialBody?: string;
  initialHeaders?: Header[];
  initialBodyType?: 'json' | 'text';
}

export const RestClient: FC<RestClientProps> = ({
  className,
  initialMethod,
  initialUrl,
  initialBody,
  initialHeaders = [{ key: '', value: '' }],
  initialBodyType = 'json',
}) => {
  const t = useTranslations('RestClient');

  const [method, setMethod] = useState(initialMethod || 'GET');
  const [url, setURL] = useState(initialUrl || '');
  const [headers, setHeaders] = useState<Header[]>(initialHeaders);
  const [bodyRequest, setBodyRequest] = useState(initialBody || '');
  const [bodyType, setBodyType] = useState<'text' | 'json'>(initialBodyType);

  const { status, bodyResponse, sendRequest } = useMakeRequest();

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
        <Code method={method} url={url} headers={headers} body={bodyRequest} bodyType={bodyType} />
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
