import { Box, Group } from '@mantine/core';
import { type FC } from 'react';

import { defaultPawObject, pawsObjectForPassword } from '@/utils/pawsObjectForPassword';

import styles from './PasswordStrengthMeter.module.css';

interface Props {
  strength: string;
}

export const PasswordStrengthMeter: FC<Props> = ({ strength }) => {
  const pawsActive = pawsObjectForPassword[strength as keyof typeof pawsObjectForPassword] || defaultPawObject;

  return (
    <Box mt='xs'>
      <Group gap={5}>
        {Array.from({ length: 4 }).map((_, index) => {
          const isActive = index < pawsActive.active;
          const color = isActive ? pawsActive.color : defaultPawObject.color;

          return (
            <Box
              key={index}
              className={styles.pawMask}
              style={{
                backgroundColor: color,
              }}
            />
          );
        })}
      </Group>
    </Box>
  );
};
