import { useTranslations } from 'next-intl';
import { useState } from 'react';

import { isValidURL } from '@/helpers/helpers';

export type RequestStatus = number | 'noURL' | 'error' | null;

export function MakeRequest() {
  const t = useTranslations('MakeRequestHook');

  const [status, setStatus] = useState<RequestStatus>(null);
  const [bodyResponse, setBodyResponse] = useState('');

  async function sendRequest(method: string, url: string) {
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
      const response = await fetch(trimmedURL, { method });
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
