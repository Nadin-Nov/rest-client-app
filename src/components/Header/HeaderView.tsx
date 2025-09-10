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
}

export const HeaderView = ({ isAuth, username, scrolled, currentLang, onSignOut, onLangChange }: Props) => {
  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
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
