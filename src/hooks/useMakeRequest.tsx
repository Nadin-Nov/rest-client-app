import { useTranslations } from 'next-intl';
import { useState } from 'react';

import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';
import { buildURL } from '@/helpers/buildURL';
import { isValidURL } from '@/helpers/isValidURL';

export type RequestStatus = number | 'noURL' | 'error' | null;

export function useMakeRequest() {
  const t = useTranslations('MakeRequestHook');

  const [status, setStatus] = useState<RequestStatus>(null);
  const [bodyResponse, setBodyResponse] = useState('');

  async function sendRequest(method: string, url: string, headers: Header[], bodyType: string, body?: string) {
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
      const headersObj: Record<string, string> = {};
      for (const header of headers) {
        if (header.key.trim()) {
          headersObj[header.key.trim()] = header.value.trim();
        }
      }

      if (body) {
        if (bodyType === 'json') {
          try {
            JSON.parse(body);
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

      const requestOptions: RequestInit = {
        method,
        headers: headersObj,
      };

      if (body && ['POST', 'PUT', 'PATCH', 'DELETE'].includes(method)) {
        requestOptions.body = body;
      }

      const currentLocale = window.location.pathname.split('/')[1];
      const routeURL = buildURL(currentLocale, method, trimmedURL, headers, body || undefined);
      window.history.pushState(null, '', routeURL);

      const response = await fetch(trimmedURL, requestOptions);

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
