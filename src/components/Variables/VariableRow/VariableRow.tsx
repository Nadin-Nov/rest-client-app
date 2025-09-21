'use client';

import { TextInput } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';
import { useState } from 'react';

import IconButton from '@/components/ui/IconButton/IconButton';
import { IconEdit, IconSave, IconMinus } from '@/components/ui/icons';
import { useVariables } from '@/hooks/useVariables';

import styles from './VariableRow.module.css';

interface VariableRowProps {
  idx: number;
  variable: { key: string; value: string };
  onUpdate: (idx: number, updatedVar: { key: string; value: string }) => void;
  onDelete: (idx: number) => void;
}

const VariableRow: FC<VariableRowProps> = ({ idx, variable, onUpdate, onDelete }) => {
  const t = useTranslations('Variables');
  const [isEditing, setIsEditing] = useState(false);
  const [row, setRow] = useState(variable);

  const { state } = useVariables();

  const toggleEdit = () => setIsEditing(!isEditing);

  const handleSave = () => {
    if (!row.key || !row.value) return;

    if (state.some((v, i) => v.key === row.key && i !== idx)) {
      notifications.show({
        title: t('errorTitle') || 'Error',
        message: t('duplicateKey') || 'Variable key already exists',
        color: 'red',
      });
      return;
    }

    onUpdate(idx, row);
    setIsEditing(false);

    notifications.show({
      title: t('successTitle') || 'Success',
      message: t('updatedVariable') || 'Variable updated',
      color: 'green',
    });
  };

  return (
    <div className={styles.row}>
      <TextInput
        className={styles.input}
        value={row.key}
        onChange={(e) => setRow({ ...row, key: e.currentTarget.value })}
        readOnly={!isEditing}
      />
      <TextInput
        className={styles.input}
        value={row.value}
        onChange={(e) => setRow({ ...row, value: e.currentTarget.value })}
        readOnly={!isEditing}
      />
      <div className={styles.buttonWrapper}>
        {isEditing ? (
          <IconButton icon={<IconSave />} variant='save' onClick={handleSave} aria-label={t('saveVariable')} />
        ) : (
          <IconButton icon={<IconEdit />} variant='edit' onClick={toggleEdit} aria-label={t('editVariable')} />
        )}
      </div>
      <div className={styles.buttonWrapper}>
        <IconButton
          icon={<IconMinus />}
          variant='delete'
          onClick={() => onDelete(idx)}
          aria-label={t('removeVariable')}
        />
      </div>
    </div>
  );
};

export default VariableRow;
