import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import NotFound from './NotFound';

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

describe('NotFound', () => {
  it('should show go back button', () => {
    render(<NotFound />);

    const btn = screen.getByRole('button');
    expect(btn).toBeInTheDocument();
  });
});
