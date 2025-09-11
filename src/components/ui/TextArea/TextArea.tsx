import { Textarea } from '@mantine/core';
import type { FC, ChangeEvent } from 'react';

interface MyTextareaProps {
  value: string;
  onChange?: (value: string) => void;
  readOnly?: boolean;
  placeholder?: string;
}

export const TextArea: FC<MyTextareaProps> = ({ value, onChange, readOnly = false, placeholder = '' }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    if (onChange) onChange(e.currentTarget.value);
  };

  return <Textarea value={value} onChange={handleChange} readOnly={readOnly} placeholder={placeholder} />;
};
