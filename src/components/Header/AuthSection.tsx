import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import NavButton from '@/components/ui/NavButton/NavButton';

interface AuthSectionProps {
  isAuth: boolean;
  username?: string;
  onSignOut?: () => void;
}

export const AuthSection: FC<AuthSectionProps> = ({ isAuth, username, onSignOut }) => {
  const t = useTranslations('Header');

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
          <NavButton>{t('signIn')}</NavButton>
          <NavButton>{t('signUp')}</NavButton>
        </>
      )}
    </div>
  );
};
