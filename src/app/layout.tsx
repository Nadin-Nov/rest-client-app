import { mantineHtmlProps } from '@mantine/core';
import { Inter } from 'next/font/google';

import './globals.css';
import '@mantine/core/styles.css';

import MantineProviderWrapper from '../providers/MantineProviderWrapper';

const inter = Inter({ subsets: ['latin', 'cyrillic'], display: 'swap' });

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang='en' className={inter.className} {...mantineHtmlProps}>
      <body>
        <MantineProviderWrapper>{children}</MantineProviderWrapper>
      </body>
    </html>
  );
}
