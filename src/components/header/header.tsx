'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslations } from 'next-intl';

import { useSticky } from '../../hooks/useSticky';

import { HeaderView } from './HeaderView';

const SCROLL_THRESHOLD = 10;

interface HeaderProps {
  isAuth?: boolean;
  username?: string;
  onSignOut?: () => void;
}

export default function Header({ isAuth = false, username, onSignOut }: HeaderProps) {
  const scrolled = useSticky(SCROLL_THRESHOLD);
  const t = useTranslations();
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
      t={t}
    />
  );
}
