import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, expect, vi, afterEach } from 'vitest';

import NotFound from './NotFound';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/components/ui/Button/Button', () => ({
  default: ({ children }: { children: string }) => <button>{children}</button>,
}));

describe('NotFound.tsx', () => {
  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('should render the image, title, subtitle, and button with locale', () => {
    render(<NotFound locale='en' />);

    const image = screen.getByRole('img');
    expect(image).toBeInTheDocument();

    expect(screen.getByText('title')).toBeInTheDocument();
    expect(screen.getByText('subtitle')).toBeInTheDocument();

    const button = screen.getByRole('button', { name: 'button' });
    expect(button).toBeInTheDocument();
    const link = button.closest('a') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', '/en');
  });

  it('should render root link if locale is not provided', () => {
    render(<NotFound />);

    const button = screen.getByRole('button', { name: 'button' });
    const link = button.closest('a') as HTMLAnchorElement;
    expect(link).toHaveAttribute('href', '/');
  });
});
