'use client';

import { useRouter, usePathname } from 'next/navigation';
import type { FC } from 'react';

import { useAuth } from '@/hooks/useAuth';
import { useLocalePrefix } from '@/hooks/useLocalePrefix';
import { useSticky } from '@/hooks/useSticky';

import { HeaderView } from '../HeaderView/HeaderView';

const SCROLL_THRESHOLD = 10;

const Header: FC = () => {
  const { isAuth, username, signOut } = useAuth();
  const sticky = useSticky(SCROLL_THRESHOLD);
  const router = useRouter();
  const pathname = usePathname();
  const localePrefix = useLocalePrefix();

  const handleLangChange = (lang: string) => {
    const newPath = pathname.replace(/^\/(en|ru)/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <HeaderView
      isAuth={isAuth}
      username={username}
      sticky={sticky}
      currentLang={localePrefix.replace('/', '')}
      onSignOut={signOut}
      onLangChange={handleLangChange}
    />
  );
};

export default Header;
