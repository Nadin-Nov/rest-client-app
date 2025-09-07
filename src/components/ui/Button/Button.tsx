import clsx from 'clsx';
import type { FC, ButtonHTMLAttributes } from 'react';

import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

const Button: FC<ButtonProps> = ({ variant = 'primary', children, className, ...props }) => {
  return (
    <button
      className={clsx(styles.button, variant === 'primary' ? styles.primary : styles.secondary, className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
