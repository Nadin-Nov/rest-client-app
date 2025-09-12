'use client';

import { useState, type FC } from 'react';

import { BodyRequest } from '../BodyRequest/BodyRequest';
import { Code } from '../Code/Code';
import type { Header } from '../HeadersEditor/HeadersEditor';
import { HeadersEditor } from '../HeadersEditor/HeadersEditor';
import { MethodSelector } from '../MethodSelector/MethodSelector';
import { ResponseStatus } from '../Response/Response';
import { UrlInput } from '../UrlInput/UrlInput';

import styles from './RestClient.module.css';

export const RestClient: FC = () => {
  const [method, setMethod] = useState('GET');
  const [url, setURL] = useState('');
  const [headers, setHeaders] = useState<Header[]>([{ key: '', value: '' }]);
  const [body, setBody] = useState('');

  return (
    <>
      <div className={styles.container}>
        <h1>Rest Client</h1>
        <div className={styles.methodUrlContainer}>
          <MethodSelector method={method} onChange={setMethod} />
          <UrlInput value={url} onChange={setURL} />
        </div>

        <HeadersEditor headers={headers} onChange={setHeaders} />
        <Code />
        <BodyRequest value={body} onChange={setBody} readOnly={false} />
        <div>
          <ResponseStatus status={null} body={''} />
        </div>
      </div>
    </>
  );
};
