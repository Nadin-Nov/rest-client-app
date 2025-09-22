import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';

import RootLayout from './layout';

describe('RootLayout', () => {
  it('should render its children', () => {
    render(
      <RootLayout>
        <div data-testid='child'>This is a child</div>
      </RootLayout>
    );

    expect(screen.getByTestId('child')).toBeInTheDocument();
    expect(screen.getByText('This is a child')).toBeInTheDocument();
  });
});
