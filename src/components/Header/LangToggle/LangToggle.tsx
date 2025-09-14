import { routing } from '@/i18n/routing';

import styles from '../Header/Header.module.css';

interface Props {
  currentLang: string;
  onLangChange?: (lang: (typeof routing.locales)[number]) => void;
}

export const LangToggle = ({ currentLang, onLangChange }: Props) => {
  return (
    <select
      className={styles.langSelect}
      value={currentLang}
      onChange={(e) => {
        const lang = e.target.value as (typeof routing.locales)[number];
        onLangChange?.(lang);
      }}
    >
      {routing.locales.map((lang) => (
        <option key={lang} value={lang}>
          {lang.toUpperCase()}
        </option>
      ))}
    </select>
  );
};
