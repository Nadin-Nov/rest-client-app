import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import NavButton from '@/components/ui/NavButton/NavButton';
import { useLocalePrefix } from '@/hooks/useLocalePrefix';

interface AuthSectionProps {
  isAuth: boolean;
  username?: string | null;
  onSignOut?: () => void;
}

export const AuthSection: FC<AuthSectionProps> = ({ isAuth, username, onSignOut }) => {
  const t = useTranslations('Header');
  const localePrefix = useLocalePrefix();

  const containerClass = clsx('authSection', {
    authSectionLoggedIn: isAuth,
  });

  return (
    <div className={containerClass}>
      {isAuth ? (
        <>
          <span>{username}</span>
          <NavButton onClick={onSignOut}>{t('signOut')}</NavButton>
        </>
      ) : (
        <>
          <NavButton href={`${localePrefix}/sign-in`}>{t('signIn')}</NavButton>
          <NavButton href={`${localePrefix}/sign-up`}>{t('signUp')}</NavButton>
        </>
      )}
    </div>
  );
};
