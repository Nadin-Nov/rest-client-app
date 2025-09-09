import type { useTranslations } from 'next-intl';

import NavButton from '@/components/ui/NavButton/NavButton';

interface AuthSectionProps {
  isAuth: boolean;
  username?: string;
  onSignOut?: () => void;
  t: ReturnType<typeof useTranslations>;
}

export const AuthSection = ({ isAuth, username, onSignOut, t }: AuthSectionProps) => {
  if (isAuth) {
    return (
      <div style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
        <span>{username}</span>
        <NavButton onClick={onSignOut}>{t('Header.signOut')}</NavButton>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', gap: '0.5rem' }}>
      <NavButton>{t('Header.signIn')}</NavButton>
      <NavButton>{t('Header.signUp')}</NavButton>
    </div>
  );
};
