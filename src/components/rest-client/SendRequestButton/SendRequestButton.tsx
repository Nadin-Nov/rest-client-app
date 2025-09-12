import { Button } from '@mantine/core';
import type { FC } from 'react';

import styles from './SendRequestButton.module.css';

export const SendRequestButton: FC = () => {
  return <Button className={styles.sentRequestButton}>Send Request</Button>;
};
