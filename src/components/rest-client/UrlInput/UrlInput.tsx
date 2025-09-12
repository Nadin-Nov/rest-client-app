import { TextInput } from '@mantine/core';
import type { ChangeEvent, FC } from 'react';

import styles from './UrlInput.module.css';
interface UrlInputProps {
  value: string;
  onChange: (url: string) => void;
}
export const UrlInput: FC<UrlInputProps> = ({ value, onChange }) => {
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  console.log(value);
  return (
    <div className={styles.urlInputWrapper}>
      <TextInput
        value={value}
        onChange={handleChange}
        placeholder='EndpointURL'
        className={styles.urlInput}
      ></TextInput>
    </div>
  );
};
