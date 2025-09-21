import { json, jsonParseLinter } from '@codemirror/lang-json';
import { linter, lintGutter } from '@codemirror/lint';
import { EditorView } from '@codemirror/view';
import { Button, Group } from '@mantine/core';
import ReactCodeMirror from '@uiw/react-codemirror';
import clsx from 'clsx';
import { useTranslations } from 'next-intl';
import { type FC } from 'react';

import styles from './BodyRequest.module.css';

const editorTheme = EditorView.theme({
  '&': {
    minHeight: '9rem',
  },
});

interface BodyRequestProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
  bodyType: 'json' | 'text';
  onBodyTypeChange: (type: 'json' | 'text') => void;
}

export const BodyRequest: FC<BodyRequestProps> = ({ value, onChange, bodyType, onBodyTypeChange }) => {
  const t = useTranslations('RestClient');

  const toggle = () => {
    onBodyTypeChange(bodyType === 'json' ? 'text' : 'json');
  };

  const prettify = () => {
    if (bodyType === 'json') {
      try {
        const parsedData: unknown = JSON.parse(value);
        const makeItPretty = JSON.stringify(parsedData, null, 2);
        onChange(makeItPretty);
      } catch {
        //left empty because ReactCodeMirror already manages errors in JSON
      }
    }
  };

  return (
    <>
      <h3> {t('body')}</h3>

      <div className={styles.switchRowWrapper} role='group'>
        <div className={styles.toggle} onClick={toggle} data-testid='body-toggle'>
          <div className={`${styles.dot} ${bodyType === 'text' ? styles.right : styles.left}`} />
        </div>
        <div className={clsx(bodyType === 'json' && styles.activeLabel)}>JSON</div>
        <div className={clsx(bodyType === 'text' && styles.activeLabel)}>{t('text')}</div>
      </div>

      <div
        style={{
          height: '9.2rem',
          border: '2px solid #ffd1b0',
          backgroundColor: '#fff',
          borderRadius: '6px',
          marginBottom: '0.5rem',
        }}
      >
        <ReactCodeMirror
          value={value}
          height='9rem'
          placeholder={bodyType === 'json' ? t('jsonPlaceholder') : t('textPlaceholder')}
          onChange={onChange}
          extensions={
            bodyType === 'json' ? [json(), linter(jsonParseLinter()), lintGutter(), editorTheme] : [editorTheme]
          }
        />
      </div>

      <Group>
        <Button
          style={{ visibility: bodyType === 'json' ? 'visible' : 'hidden' }}
          className={styles.prettifyButton}
          onClick={prettify}
        >
          {t('prettify')}
        </Button>
      </Group>
    </>
  );
};
