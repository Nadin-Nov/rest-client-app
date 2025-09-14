'use client';

import { usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';

import styles from '@/components/Header/Header/Header.module.css';
import NavButton from '@/components/ui/NavButton/NavButton';
import { useLocalePrefix } from '@/hooks/useLocalePrefix';

export const NavMenu = () => {
  const pathname = usePathname();
  const t = useTranslations('Header');
  const localePrefix = useLocalePrefix();

  return (
    <nav className={styles.nav}>
      <NavButton href={`${localePrefix}/rest-client`} isActive={pathname === `${localePrefix}/rest-client`}>
        {t('restClient')}
      </NavButton>

      <NavButton href={`${localePrefix}/history`} isActive={pathname === `${localePrefix}/history`}>
        {t('history')}
      </NavButton>

      <NavButton href={`${localePrefix}/variables`} isActive={pathname === `${localePrefix}/variables`}>
        {t('variables')}
      </NavButton>
    </nav>
  );
};
