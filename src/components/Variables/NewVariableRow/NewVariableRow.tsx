'use client';

import { TextInput } from '@mantine/core';
import type { FC } from 'react';
import { useState } from 'react';

import IconButton from '@/components/ui/IconButton/IconButton';
import { IconSave } from '@/components/ui/icons';

import styles from './NewVariableRow.module.css';

interface VariableRowType {
  key: string;
  value: string;
}

interface NewVariableRowProps {
  onSave: (newVar: VariableRowType) => void;
}

const NewVariableRow: FC<NewVariableRowProps> = ({ onSave }) => {
  const [newVar, setNewVar] = useState<VariableRowType>({ key: '', value: '' });

  const handleSave = () => {
    if (!newVar.key || !newVar.value) return;
    onSave(newVar);
    setNewVar({ key: '', value: '' });
  };

  return (
    <div className={styles.row}>
      <TextInput
        className={styles.input}
        placeholder='Enter variable name'
        type='search'
        value={newVar.key}
        onChange={(e) => setNewVar({ ...newVar, key: e.currentTarget.value })}
      />
      <TextInput
        className={styles.input}
        placeholder='Enter variable value'
        type='search'
        value={newVar.value}
        onChange={(e) => setNewVar({ ...newVar, value: e.currentTarget.value })}
      />
      <div className={styles.buttonWrapper}>
        <IconButton icon={<IconSave />} variant='save' onClick={handleSave} disabled={!newVar.key || !newVar.value} />
      </div>
      <div className={styles.buttonWrapper}>{}</div>
    </div>
  );
};

export default NewVariableRow;
