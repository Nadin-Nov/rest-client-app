import { TextInput } from '@mantine/core';
import type { ChangeEvent, FC } from 'react';

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
    <div>
      <TextInput label='Endpoint URL' value={value} onChange={handleChange}></TextInput>
    </div>
  );
};
