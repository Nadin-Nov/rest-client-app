import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import { AuthWrapper } from './AuthWrapper';

describe('GlobalNotFound', () => {
  it('should render children', () => {
    render(
      <MantineProvider>
        <AuthWrapper>
          <p>Child</p>
        </AuthWrapper>
      </MantineProvider>
    );
    const child = screen.getByText(/child/i);

    expect(child).toBeInTheDocument();
  });
});
