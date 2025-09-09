import { SimpleGrid } from '@mantine/core';
import Image from 'next/image';
import { type FC } from 'react';

import styles from './AuthWrapper.module.css';

interface Props {
  children: React.ReactNode;
}

export const AuthWrapper: FC<Props> = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <SimpleGrid cols={{ base: 1, sm: 2 }} spacing='lg'>
        <div>{children}</div>
        <Image src='/assets/images/form_img.webp' alt='cat' width={350} height={350} />
      </SimpleGrid>
    </div>
  );
};
