import Image from 'next/image';
import Link from 'next/link';

import styles from './header.module.css';

export const Logo = () => (
  <Link href='/main' className={styles.logo}>
    <Image src='/meowman_logo.png' alt='Logo' width={186} height={87.5} className={styles['logo-img']} priority />
  </Link>
);
