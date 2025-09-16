import { useState } from 'react';

import { isValidURL } from '@/helpers/helpers';

export function MakeRequest() {
  const [status, setStatus] = useState<number | null>(null);
  const [bodyResponse, setBodyResponse] = useState('');

  async function sendRequest(method: string, url: string) {
    const trimmedURL = url.trim();

    if (!trimmedURL) {
      setStatus(status);
      setBodyResponse('URL cannot be empty');
      return;
    }
    if (!isValidURL(trimmedURL)) {
      setStatus(status);
      setBodyResponse('Invalid URL');
      return;
    }
    try {
      const response = await fetch(trimmedURL, { method });
      const responseText = await response.text();

      setStatus(response.status);
      setBodyResponse(responseText);
    } catch (error) {
      setStatus(null);
      if (error instanceof Error) {
        setBodyResponse(error.message);
      }
    }
  }
  return { status, bodyResponse, sendRequest };
}
