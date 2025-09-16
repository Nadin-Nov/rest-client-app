import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';
import { isValidURL } from '@/helpers/helpers';

export type RequestStatus = number | 'noURL' | 'error' | null;

export function MakeRequest() {
  const t = useTranslations('MakeRequestHook');

  const [status, setStatus] = useState<RequestStatus>(null);
  const [bodyResponse, setBodyResponse] = useState('');

  async function sendRequest(method: string, url: string, headers: Header[]) {
    const trimmedURL = url.trim();

    if (!trimmedURL) {
      setStatus('noURL');
      setBodyResponse(t('emptyURL'));
      return;
    }
    if (!isValidURL(trimmedURL)) {
      setStatus('error');
      setBodyResponse(t('invalidURL'));
      return;
    }

    try {
      const headersObj = Object.fromEntries(
        headers.filter((header) => header.key.trim()).map((header) => [header.key, header.value])
      );

      const response = await fetch(trimmedURL, { method, headers: headersObj });
      console.log(trimmedURL, { method, headers: headersObj });
      const responseText = await response.text();

      setStatus(response.status);
      setBodyResponse(responseText);
    } catch (error) {
      setStatus('error');
      if (error instanceof Error) {
        setBodyResponse(error.message);
      }
    }
  }
  return { status, bodyResponse, sendRequest };
}
