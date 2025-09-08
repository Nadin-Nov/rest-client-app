import clsx from 'clsx';
import type { FC, ButtonHTMLAttributes } from 'react';

import styles from './NavButton.module.css';

interface NavButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isActive?: boolean;
}

const NavButton: FC<NavButtonProps> = ({ isActive = false, children, className, ...props }) => {
  return (
    <button className={clsx(styles['nav-button'], isActive && styles.active, className)} {...props}>
      {children}
    </button>
  );
};

export default NavButton;
