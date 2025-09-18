'use client';

import clsx from 'clsx';
import type { FC, ReactNode } from 'react';

import styles from './IconButton.module.css';

interface IconButtonProps {
  icon: ReactNode;
  variant: 'save' | 'delete' | 'edit';
  onClick?: () => void;
  disabled?: boolean;
}

const IconButton: FC<IconButtonProps> = ({ icon, variant, onClick, disabled = false }) => {
  return (
    <button
      className={clsx(styles.button, styles[variant], disabled && styles.disabled)}
      onClick={onClick}
      disabled={disabled}
      aria-label={variant}
    >
      {icon}
    </button>
  );
};

export default IconButton;
