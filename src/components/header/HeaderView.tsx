import type { useTranslations } from 'next-intl';

import { AuthSection } from './AuthSection';
import { LangToggle } from './LangToggle';
import { Logo } from './Logo';
import { NavMenu } from './NavMenu';
import styles from './header.module.css';

interface Props {
  isAuth: boolean;
  username?: string;
  scrolled: boolean;
  currentLang: string;
  onSignOut?: () => void;
  onLangChange?: (lang: string) => void;
  t: ReturnType<typeof useTranslations>;
}

export const HeaderView = ({ isAuth, username, scrolled, currentLang, onSignOut, onLangChange, t }: Props) => {
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.container}>
        <Logo />
        {isAuth && <NavMenu />}
        <div className={styles.actions}>
          <AuthSection isAuth={isAuth} username={username} onSignOut={onSignOut} t={t} />
          <LangToggle currentLang={currentLang} onLangChange={onLangChange} />
        </div>
      </div>
      <div className={styles['header-line']} />
    </header>
  );
};
