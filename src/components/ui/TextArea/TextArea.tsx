import type { FC, ChangeEvent } from 'react';

import styles from './TextArea.module.css';

interface TextareaProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const TextArea: FC<TextareaProps> = ({ value, onChange, readOnly = false, placeholder = '' }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.currentTarget.value);
  };

  return (
    <textarea
      value={value}
      onChange={handleChange}
      readOnly={readOnly}
      placeholder={placeholder}
      className={styles.customTextarea}
    />
  );
};
