'use client';

import { usePathname } from 'next/navigation';

export const useLocalePrefix = () => {
  const pathname = usePathname();
  return pathname.startsWith('/ru') ? '/ru' : '/en';
};
