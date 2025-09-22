import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import GlobalNotFound from './not-found';

vi.mock('@/components/NotFound/NotFound', () => ({
  default: () => <div data-testid='not-found'>Not Found</div>,
}));

describe('GlobalNotFound', () => {
  it('should render NotFound component', () => {
    render(<GlobalNotFound />);
    expect(screen.getByTestId('not-found')).toBeInTheDocument();
  });
});
