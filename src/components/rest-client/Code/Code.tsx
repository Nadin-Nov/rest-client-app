import { type FC, useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './Code.module.css';

const languages = ['curl', 'JavaScript (Fetch api)', 'JavaScript (XHR)', 'NodeJS', 'Python', 'Java', 'C#', 'Go'];

export const Code: FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(languages[0]);

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        {languages.map((el) => {
          const isActive = el === language;
          return (
            <div key={el}>
              <div className={`${styles.tab} ${isActive ? styles.active : ''}`} onClick={() => setLanguage(el)}>
                {el}
              </div>
            </div>
          );
        })}
      </div>

      <TextArea placeholder={`Generated code for ${language}...`} value={code} onChange={setCode} readOnly={true} />
    </div>
  );
};
