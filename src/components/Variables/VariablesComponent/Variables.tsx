'use client';

import { notifications } from '@mantine/notifications';
import { useTranslations } from 'next-intl';
import type { FC } from 'react';

import { useVariables } from '@/hooks/useVariables';

import NewVariableRow from '../NewVariableRow/NewVariableRow';
import VariableRow from '../VariableRow/VariableRow';

import styles from './Variables.module.css';

const Variables: FC = () => {
  const t = useTranslations('Variables');
  const { state, dispatch } = useVariables();

  const handleAdd = (newVar: { key: string; value: string }) => {
    dispatch({ type: 'ADD', payload: newVar });

    notifications.show({
      title: t('successTitle') || 'Success',
      message: t('addedVariable') || 'Variable added',
      color: 'green',
    });
  };

  const handleUpdate = (idx: number, updatedVar: { key: string; value: string }) => {
    dispatch({ type: 'UPDATE', key: updatedVar.key, value: updatedVar.value });

    notifications.show({
      title: t('successTitle') || 'Success',
      message: t('updatedVariable') || 'Variable updated',
      color: 'green',
    });
  };

  const handleDelete = (idx: number) => {
    const deletedVar = state[idx];
    dispatch({ type: 'REMOVE', key: deletedVar.key });

    notifications.show({
      title: t('successTitle') || 'Success',
      message: t('deletedVariable') || 'Variable removed',
      color: 'green',
    });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.header}>{t('variablesHeader')}</h2>

      <NewVariableRow onSave={handleAdd} />

      <div className={styles.table}>
        {state.map((variable, idx) => (
          <VariableRow
            key={variable.key}
            idx={idx}
            variable={variable}
            onUpdate={handleUpdate}
            onDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Variables;
