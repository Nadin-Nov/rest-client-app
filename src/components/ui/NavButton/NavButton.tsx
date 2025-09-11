import clsx from 'clsx';
import Link from 'next/link';
import type { FC } from 'react';

import styles from './NavButton.module.css';
import type { NavButtonProps, ButtonProps } from './types';

const NavButton: FC<NavButtonProps> = ({ isActive = false, className, children, ...props }) => {
  const classes = clsx(styles.navButton, isActive && styles.active, className);

  if ('href' in props && props.href) {
    return (
      <Link href={props.href} className={classes} onClick={props.onClick}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(props as ButtonProps)}>
      {children}
    </button>
  );
};

export default NavButton;
