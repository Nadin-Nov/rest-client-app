import { Tabs } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';

const languages: string[] = [
  'curl',
  'JavaScript (Fetch api)',
  'JavaScript (XHR)',
  'NodeJS',
  'Python',
  'Java',
  'C#',
  'Go',
];

export const Code: FC = () => {
  const [language, setLanguage] = useState<string>('curl');

  const handleTabChange = (value: string | null) => {
    if (value && languages.includes(value) && value !== null) {
      setLanguage(value);
    }
  };

  return (
    <Tabs value={language} onChange={handleTabChange} variant='outline'>
      <Tabs.List>
        {languages.map((el) => (
          <Tabs.Tab key={el} value={el}>
            {el}
          </Tabs.Tab>
        ))}
      </Tabs.List>

      {languages.map((el) => (
        <Tabs.Panel key={el} value={el}>
          <div>code for {el}</div>
        </Tabs.Panel>
      ))}
    </Tabs>
  );
};
