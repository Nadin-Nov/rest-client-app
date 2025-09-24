import { Tabs } from '@mantine/core';
import { useTranslations } from 'next-intl';
import { type FC, useEffect, useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';
import { languageMap, languages } from '@/constants/constants';
import { decodeBase64UrlForCode } from '@/helpers/base64';

import styles from './Code.module.css';

interface CodeProps {
  method: string;
  url: string;
  headers: { key: string; value: string }[];
  body?: string;
  bodyType?: 'json' | 'text';
}

interface GenerateCodeResponse {
  snippet: string;
}

export const Code: FC<CodeProps> = ({ method, url, headers, body, bodyType }) => {
  const t = useTranslations('RestClient');

  const [language, setLanguage] = useState(languages[0]);
  const [codeMap, setCodeMap] = useState<Record<string, string>>({});

  useEffect(() => {
    const generateAll = async () => {
      const newLangMap: Record<string, string> = {};
      const decodedUrl = decodeBase64UrlForCode(url);

      const validHeaders = headers?.filter((h) => h.key.trim() && h.value.trim()) || [];

      for (const lang of languages) {
        const { lang: langCode, variant } = languageMap[lang];
        try {
          const res = await fetch('/api/generateCode', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              method,
              url: decodedUrl,
              headers: validHeaders,
              body,
              bodyType: bodyType || (body ? 'json' : undefined),
              language: langCode,
              variant,
            }),
          });

          const data = (await res.json()) as GenerateCodeResponse;
          newLangMap[lang] = data.snippet || t('newLangMap', { lang });
        } catch {
          newLangMap[lang] = t('newLangMap', { lang });
        }
      }

      setCodeMap(newLangMap);
    };

    void generateAll();
  }, [method, url, headers, body, bodyType, t]);

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
            <TextArea
              placeholder={t('generatedCodePlaceholder', { el })}
              value={codeMap[el] || t('loading')}
              readOnly
            />
          </Tabs.Panel>
        ))}
      </Tabs>
    </div>
  );
};
