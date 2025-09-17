import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';
import { isValidURL } from '@/helpers/helpers';

export type RequestStatus = number | 'noURL' | 'error' | null;

export function MakeRequest() {
  const t = useTranslations('MakeRequestHook');

  const [status, setStatus] = useState<RequestStatus>(null);
  const [bodyResponse, setBodyResponse] = useState('');

  async function sendRequest(method: string, url: string, headers: Header[], bodyType: string, bodyRequest?: string) {
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

      if (bodyRequest) {
        if (bodyType === 'json') {
          try {
            JSON.parse(bodyRequest);
            headersObj['Content-Type'] = 'application/json';
          } catch (error) {
            setStatus('error');
            if (error instanceof Error) {
              setBodyResponse(`Invalid JSON: ${error.message}`);
            }
            return;
          }
        }
        if (bodyType === 'text') {
          headersObj['Content-Type'] = 'text/plain';
        }
      }

      const response = await fetch(trimmedURL, { method, headers: headersObj, body: bodyRequest });
      const responseText = await response.text();
      console.log({ method, trimmedURL, headersObj, body: bodyRequest });

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
