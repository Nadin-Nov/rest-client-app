'use client';

import { TextInput } from '@mantine/core';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { useState } from 'react';

import IconButton from '@/components/ui/IconButton/IconButton';
import { IconPlus } from '@/components/ui/icons';

import styles from './NewVariableRow.module.css';

interface VariableRowType {
  key: string;
  value: string;
}

interface NewVariableRowProps {
  onSave: (newVar: VariableRowType) => void;
}

const NewVariableRow: FC<NewVariableRowProps> = ({ onSave }) => {
  const t = useTranslations('Variables');
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
        placeholder={t('keyPlaceholder')}
        type='text'
        value={newVar.key}
        onChange={(e) => setNewVar({ ...newVar, key: e.currentTarget.value })}
      />
      <TextInput
        className={styles.input}
        placeholder={t('valuePlaceholder')}
        type='text'
        value={newVar.value}
        onChange={(e) => setNewVar({ ...newVar, value: e.currentTarget.value })}
      />
      <div className={styles.buttonWrapper}>
        <IconButton
          icon={<IconPlus />}
          variant='save'
          onClick={handleSave}
          disabled={!newVar.key || !newVar.value}
          aria-label={t('addVariable')}
        />
      </div>
    </div>
  );
};

export default NewVariableRow;
