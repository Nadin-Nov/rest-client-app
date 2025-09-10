import { Button, Group, TextInput } from '@mantine/core';
import { type FC } from 'react';

export interface Header {
  key: string;
  value: string;
}

interface HeadersEditorProps {
  headers: Header[];
  onChange: (headers: Header[]) => void;
}

export const HeadersEditor: FC<HeadersEditorProps> = ({ headers, onChange }) => {
  console.log(headers);

  const addHeader = () => {
    onChange([...headers, { key: '', value: '' }]);
  };

  const removeHeder = (index: number) => {
    onChange(headers.filter((_, i) => i !== index));
  };

  const updateHeaderKey = (index: number, newValue: string) => {
    const newHeaders = [...headers];

    newHeaders[index] = { ...headers[index], key: newValue };
    onChange(newHeaders);
  };

  const updateHeaderValue = (index: number, newValue: string) => {
    const newHeaders = [...headers];

    newHeaders[index] = { ...headers[index], value: newValue };
    onChange(newHeaders);
  };

  return (
    <>
      <div>Headers:</div>
      {headers.map((header, index) => (
        <Group key={index}>
          <TextInput
            placeholder='key'
            value={header.key}
            onChange={(e) => updateHeaderKey(index, e.currentTarget.value)}
          ></TextInput>
          <TextInput
            placeholder='value'
            value={header.value}
            onChange={(e) => updateHeaderValue(index, e.currentTarget.value)}
          ></TextInput>
          <Button onClick={() => removeHeder(index)}>Remove</Button>
        </Group>
      ))}
      <Button onClick={addHeader}>Add</Button>
    </>
  );
};
