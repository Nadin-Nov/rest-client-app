import { notFound } from 'next/navigation';
import { getMessages } from 'next-intl/server';

import Main from '@/components/MainPage/Main/Main';
import type { MainMessages } from '@/components/MainPage/types';

interface MainPageProps {
  params: Promise<{ locale: 'en' | 'ru' }>;
}

export default async function MainPage({ params }: MainPageProps) {
  const { locale } = await params;

  if (!['en', 'ru'].includes(locale)) {
    notFound();
  }

  const allMessages = (await getMessages({ locale })) as Record<string, unknown>;
  const mainMessagesRaw = allMessages['MainPage'];

  if (!mainMessagesRaw || typeof mainMessagesRaw !== 'object') {
    notFound();
  }

  const mainMessages = mainMessagesRaw as MainMessages;

  const mainMessagesWithAvatars: MainMessages = {
    ...mainMessages,
    team: {
      title: mainMessages.team.title,
      memberMarta: { ...mainMessages.team.memberMarta, urlAvatar: '/avatars/marta.png' },
      memberKate: { ...mainMessages.team.memberKate, urlAvatar: '/avatars/kate.png' },
      memberNadin: { ...mainMessages.team.memberNadin, urlAvatar: '/avatars/nadin.png' },
    },
  };

  return <Main messages={mainMessagesWithAvatars} />;
}
