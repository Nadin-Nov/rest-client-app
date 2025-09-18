import clsx from 'clsx';

import type { routing } from '@/i18n/routing';

import { AuthSection } from '../AuthSection/AuthSection';
import styles from '../Header/Header.module.css';
import { LangToggle } from '../LangToggle/LangToggle';
import { Logo } from '../Logo/Logo';
import { NavMenu } from '../NavMenu/NavMenu';

interface Props {
  isAuth: boolean;
  username?: string | null;
  sticky: boolean;
  currentLang: string;
  onSignOut?: () => void;
  onLangChange?: (lang: (typeof routing.locales)[number]) => void;
}

export const HeaderView = ({ isAuth, username, sticky, currentLang, onSignOut, onLangChange }: Props) => {
  return (
    <header className={clsx(styles.header, { [styles.sticky]: sticky })}>
      <div className={styles.container}>
        <Logo />
        {isAuth && <NavMenu />}
        <div className={styles.actions}>
          <AuthSection isAuth={isAuth} username={username} onSignOut={onSignOut} />
          <LangToggle currentLang={currentLang} onLangChange={onLangChange} />
        </div>
      </div>
      <div className={styles.headerLine} />
    </header>
  );
};
