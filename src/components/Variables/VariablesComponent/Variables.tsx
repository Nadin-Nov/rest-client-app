'use client';

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
  };

  const handleUpdate = (idx: number, updatedVar: { key: string; value: string }) => {
    dispatch({ type: 'UPDATE', key: updatedVar.key, value: updatedVar.value });
  };

  const handleDelete = (idx: number) => {
    dispatch({ type: 'REMOVE', key: state[idx].key });
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
