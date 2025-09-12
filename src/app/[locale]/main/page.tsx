import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

import type { MainMessages } from '@/components/MainPage/Main';
import Main from '@/components/MainPage/Main';

interface MainPageProps {
  params: Promise<{ locale: 'en' | 'ru' }>;
}

export default async function MainPage({ params }: MainPageProps) {
  const { locale } = await params;

  if (!['en', 'ru'].includes(locale)) {
    notFound();
  }

  const allMessages = (await getMessages({ locale })) as Record<string, unknown>;

  const mainMessages = allMessages['MainPage'];
  if (!mainMessages || typeof mainMessages !== 'object') {
    notFound();
  }

  return <Main messages={mainMessages as MainMessages} />;
}
