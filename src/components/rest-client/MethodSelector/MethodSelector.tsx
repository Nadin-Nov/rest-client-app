import { Select } from '@mantine/core';
import type { FC } from 'react';

import styles from './MethodSelector.module.css';
interface MethodSelectorProps {
  method: string;
  onChange: (method: string) => void;
}
export const MethodSelector: FC<MethodSelectorProps> = ({ method, onChange }) => {
  const METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS', 'TRACE', 'CONNECT'];

  console.log(method);
  return (
    <div className={styles.method}>
      <Select
        data={METHODS}
        value={method}
        placeholder='Pick method'
        onChange={(value) => value && onChange(value)}
        classNames={{
          input: styles.selectInput,
          dropdown: styles.selectDropdown,
        }}
      ></Select>
    </div>
  );
};
