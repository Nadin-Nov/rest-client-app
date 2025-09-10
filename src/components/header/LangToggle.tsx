import styles from './header.module.css';

interface Props {
  currentLang: string;
  onLangChange?: (lang: string) => void;
}

export const LangToggle = ({ currentLang, onLangChange }: Props) => {
  return (
    <select className={styles.langSelect} value={currentLang} onChange={(e) => onLangChange?.(e.target.value)}>
      <option value='en'>EN</option>
      <option value='ru'>RU</option>
    </select>
  );
};
