'use client';

import { usePathname, useRouter } from 'next/navigation';
import { type FC } from 'react';

import { useSticky } from '@/hooks/useSticky';

import { HeaderView } from './HeaderView';

const SCROLL_THRESHOLD = 10;

interface HeaderProps {
  isAuth?: boolean;
  username?: string;
  onSignOut?: () => void;
}

const Header: FC<HeaderProps> = ({ isAuth = false, username, onSignOut }) => {
  const scrolled = useSticky(SCROLL_THRESHOLD);
  const router = useRouter();
  const pathname = usePathname();

  const currentLang = pathname.startsWith('/ru') ? 'ru' : 'en';

  const handleLangChange = (lang: string) => {
    const newPath = pathname.replace(/^\/(en|ru)/, `/${lang}`);
    router.push(newPath);
  };

  return (
    <HeaderView
      isAuth={isAuth}
      username={username}
      scrolled={scrolled}
      currentLang={currentLang}
      onSignOut={onSignOut}
      onLangChange={handleLangChange}
    />
  );
};

export default Header;
