import type { Header } from '@/components/RestClient/HeadersEditor/HeadersEditor';

import { base64Encode, base64EncodeUrl } from './base64';

export function buildURL(locale: string, method: string, url: string, headers?: Header[], body?: string) {
  const urlEncoded = base64Encode(url);
  const searchParams = new URLSearchParams();

  if (body) {
    searchParams.set('body', base64EncodeUrl(body));
  }

  headers?.forEach((header) => {
    if (header.key.trim() && header.value.trim()) {
      searchParams.set(header.key, header.value);
    }
  });

  const basicPath = `/${locale}/rest-client`;
  const route = `${basicPath}/${method}/${urlEncoded}?${searchParams.toString()}`;

  window.history.replaceState(null, '', route);
  return route;
}
