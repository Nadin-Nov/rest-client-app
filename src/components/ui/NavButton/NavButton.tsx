import clsx from 'clsx';
import Link from 'next/link';
import type { FC, ButtonHTMLAttributes } from 'react';

import styles from './NavButton.module.css';

interface BaseProps {
  isActive?: boolean;
  className?: string;
  children: React.ReactNode;
}

type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
type LinkProps = BaseProps & { href: string; onClick?: () => void };

type NavButtonProps = ButtonProps | LinkProps;

const NavButton: FC<NavButtonProps> = ({ isActive = false, className, children, ...props }) => {
  const classes = clsx(styles['nav-button'], isActive && styles.active, className);

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
