'use client';

import type { FC } from 'react';

import { useAuthContext } from '@/hooks/useAuthContext';
import { useLocalePrefix } from '@/hooks/useLocalePrefix';
import { useSticky } from '@/hooks/useSticky';
import { useRouter as useIntlRouter, usePathname as useIntlPathname } from '@/i18n/navigation';
import type { routing } from '@/i18n/routing';

import { HeaderView } from '../HeaderView/HeaderView';

const SCROLL_THRESHOLD = 10;

const Header: FC = () => {
  const { isAuth, username, signOut } = useAuthContext();
  const sticky = useSticky(SCROLL_THRESHOLD);
  const localePrefix = useLocalePrefix();

  const router = useIntlRouter();
  const pathname = useIntlPathname();

  const handleLangChange = (lang: (typeof routing.locales)[number]) => {
    router.push(pathname, { locale: lang });
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
