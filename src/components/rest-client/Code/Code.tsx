import { Tabs } from '@mantine/core';
import { type FC, useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './Code.module.css';

const languages = ['curl', 'JavaScript (Fetch api)', 'JavaScript (XHR)', 'NodeJS', 'Python', 'Java', 'C#', 'Go'];

export const Code: FC = () => {
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(languages[0]);

  const handleTabChange = (value: string | null) => {
    if (value && languages.includes(value)) {
      setLanguage(value);
    }
  };

  return (
    <div className={styles.container}>
      <h3>Code:</h3>
      <Tabs value={language} onChange={handleTabChange} variant='outline'>
        <Tabs.List>
          {languages.map((el) => (
            <Tabs.Tab key={el} value={el} className={styles.tab}>
              {el}
            </Tabs.Tab>
          ))}
        </Tabs.List>

        {languages.map((el) => (
          <Tabs.Panel key={el} value={el} pt='sm'>
            <TextArea placeholder={`Generated code for ${el}...`} value={code} onChange={setCode} readOnly />
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};
