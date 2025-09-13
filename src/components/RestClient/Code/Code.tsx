import { Tabs } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { type FC, useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './Code.module.css';

export const Code: FC = () => {
  const t = useTranslations('RestClient');
  const languages = ['curl', 'JavaScript (Fetch api)', 'JavaScript (XHR)', 'NodeJS', 'Python', 'Java', 'C#', 'Go'];

  const [code, setCode] = useState('');
  const [language, setLanguage] = useState(languages[0]);

  const handleTabChange = (value: string | null) => {
    if (value && languages.includes(value)) {
      setLanguage(value);
    }
  };

  return (
    <div className={styles.container}>
      <h3>{t('code')}</h3>
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
            <TextArea placeholder={t('generatedCodePlaceholder', { el })} value={code} onChange={setCode} readOnly />
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};
