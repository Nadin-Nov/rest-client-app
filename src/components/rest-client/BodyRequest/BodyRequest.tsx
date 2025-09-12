import { Button, Group } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './BodyRequest.module.css';
interface BodyEditorProps {
  value: string;
  onChange: (value: string) => void;
  readOnly?: boolean;
}

export const BodyRequest: FC<BodyEditorProps> = ({ value, onChange, readOnly }) => {
  const [bodyType, setBodyType] = useState<'json' | 'text'>('json');

  const toggle = () => {
    setBodyType((prev) => (prev === 'json' ? 'text' : 'json'));
  };
  return (
    <>
      <h3>Body:</h3>

      <div className={styles.switchRow}>
        <div className={styles.toggle} onClick={toggle}>
          <div className={`${styles.dot} ${bodyType === 'text' ? styles.right : styles.left}`} />
        </div>
        <div className={bodyType === 'json' ? styles.activeLabel : ''}>JSON</div>
        <div className={bodyType === 'text' ? styles.activeLabel : ''}>Text</div>
      </div>

      <TextArea
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        placeholder={bodyType === 'json' ? 'Write JSON here...' : 'Write plain text here...'}
      />

      <Group>
        <Button style={{ visibility: bodyType === 'json' ? 'visible' : 'hidden' }} className={styles.prettifyButton}>
          Prettify
        </Button>
      </Group>
    </>
  );
};
