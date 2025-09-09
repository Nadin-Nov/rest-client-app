import { MantineProvider } from '@mantine/core';
import type { ReactNode } from 'react';

interface MantineProviderWrapperProps {
  children: ReactNode;
}

export default function MantineProviderWrapper({ children }: MantineProviderWrapperProps) {
  return (
    <MantineProvider
      theme={{
        primaryColor: 'primary',
        colors: {
          primary: [
            '#f25019',
            '#d74313',
            '#bf3b11',
            '#a22e0f',
            '#842409',
            '#681a07',
            '#4c0f04',
            '#300701',
            '#1b0300',
            '#0a0100',
          ],
          secondary: [
            '#f1a501',
            '#e09c00',
            '#c48700',
            '#a66e00',
            '#885500',
            '#693d00',
            '#4b2600',
            '#2e0f00',
            '#1a0600',
            '#0a0100',
          ],
          error: [
            '#ff3d00',
            '#e63700',
            '#cc3100',
            '#b32b00',
            '#992400',
            '#7f1d00',
            '#651600',
            '#4c0f00',
            '#330900',
            '#1a0400',
          ],
          success: [
            '#4caf50',
            '#439e45',
            '#38873a',
            '#2d7030',
            '#225a26',
            '#18441c',
            '#0d2f12',
            '#021908',
            '#000000',
            '#000000',
          ],
          gray: [
            '#bfbfbf',
            '#a6a6a6',
            '#8c8c8c',
            '#737373',
            '#595959',
            '#404040',
            '#262626',
            '#0d0d0d',
            '#000000',
            '#000000',
          ],
          warning: [
            '#ffc107',
            '#e6a700',
            '#c48700',
            '#a36600',
            '#844e00',
            '#662f00',
            '#4c1a00',
            '#2e0f00',
            '#1a0600',
            '#0a0100',
          ],
          danger: [
            '#df6951',
            '#c85d47',
            '#b14f3d',
            '#9a4333',
            '#823628',
            '#6a281e',
            '#511b14',
            '#390f0b',
            '#210604',
            '#100202',
          ],
        },
        fontFamily: 'Inter Tight, sans-serif',
      }}
    >
      {children}
    </MantineProvider>
  );
}
