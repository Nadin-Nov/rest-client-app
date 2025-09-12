import type { ButtonHTMLAttributes, ReactNode } from 'react';

export interface BaseProps {
  isActive?: boolean;
  className?: string;
  children: ReactNode;
}

export type ButtonProps = BaseProps & ButtonHTMLAttributes<HTMLButtonElement> & { href?: undefined };
export type LinkProps = BaseProps & { href: string; onClick?: () => void };

export type NavButtonProps = ButtonProps | LinkProps;
