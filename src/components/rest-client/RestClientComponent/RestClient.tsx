'use client';

import { useState, type FC } from 'react';

import type { Header } from '../HeadersEditor/HeadersEditor';
import { HeadersEditor } from '../HeadersEditor/HeadersEditor';
import { MethodSelector } from '../MethodSelector/MethodSelector';
import { UrlInput } from '../UrlInput/UrlInput';

export const RestClient: FC = () => {
  const [method, setMethod] = useState('GET');
  const [url, setURL] = useState('');
  const [headers, setHeaders] = useState<Header[]>([]);

  return (
    <>
      <MethodSelector method={method} onChange={setMethod} />
      <UrlInput value={url} onChange={setURL} />
      <HeadersEditor headers={headers} onChange={setHeaders} />
    </>
  );
};
