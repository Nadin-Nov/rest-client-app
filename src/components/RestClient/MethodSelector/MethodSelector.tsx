import { Select } from '@mantine/core';
import type { FC } from 'react';

import { methods } from '@/constants/constants';

import styles from './MethodSelector.module.css';
interface MethodSelectorProps {
  method: string;
  onChange: (method: string) => void;
}
export const MethodSelector: FC<MethodSelectorProps> = ({ method, onChange }) => {
  console.log(method);
  return (
    <div className={styles.method}>
      <Select
        data={methods}
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
