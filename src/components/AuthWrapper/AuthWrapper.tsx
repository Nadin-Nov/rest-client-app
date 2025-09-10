import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import { type ReactNode, type FC } from 'react';

import styles from './AuthWrapper.module.css';

interface Props {
  children: ReactNode;
}

export const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='lg' style={{ alignItems: 'center' }}>
        <div>{children}</div>
        <Image src='/assets/images/form_img.webp' alt='cat' width={420} height={420} />
      </SimpleGrid>
    </div>
  );
};
