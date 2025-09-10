import { Select } from '@mantine/core';
import type { FC } from 'react';

interface MethodSelectorProps {
  method: string;
  onChange: (method: string) => void;
}
export const MethodSelector: FC<MethodSelectorProps> = ({ method, onChange }) => {
  const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'];

  console.log(method);
  return (
    <div>
      <Select
        label='Method:'
        data={METHODS}
        value={method}
        placeholder='Pick method'
        onChange={(value) => value && onChange(value)}
      ></Select>
    </div>
  );
};
