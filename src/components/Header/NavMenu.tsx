'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import styles from '@/components/Header/header.module.css';
import NavButton from '@/components/ui/NavButton/NavButton';

export const NavMenu = () => {
  const pathname = usePathname();
  const t = useTranslations();

  return (
    <nav className={styles.nav}>
      <NavButton href='/rest-client' isActive={pathname === '/rest-client'}>
        {t('Header.restClient')}
      </NavButton>
      <NavButton href='/history' isActive={pathname === '/history'}>
        {t('Header.history')}
      </NavButton>
      <NavButton href='/variables' isActive={pathname === '/variables'}>
        {t('Header.variables')}
      </NavButton>
    </nav>
  );
};
