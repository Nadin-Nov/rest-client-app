import type { FC } from 'react';

import { TextArea } from '@/components/ui/TextArea/TextArea';

import styles from './Response.module.css';

interface ResponseStatusProps {
  status: number | null;
  body: string;
}
export const ResponseStatus: FC<ResponseStatusProps> = ({ status, body }) => {
  return (
    <div className={styles.responseContainer}>
      <h2 className={styles.responseHeader}>Response</h2>
      <div className={styles.statusWrapper}>
        <h3>Status: </h3>
        <div>{status !== null ? status : ' No response yet'}</div>
      </div>
      <h3>Body:</h3>
      <TextArea value={body} placeholder='Response will appear here...' readOnly={true} />
    </div>
  );
};
