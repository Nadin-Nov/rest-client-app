import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import type { Messages } from '@/types/types';

import { routing } from './routing';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested) ? requested : routing.defaultLocale;

  const messagesModule = (await import(`../../messages/${locale}.json`)) as { default: Messages };
  const messages: Messages = messagesModule.default;

  return { locale, messages };
});
