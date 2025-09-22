import { render } from '@testing-library/react';
import type { ReactNode } from 'react';
import { describe, it, expect } from 'vitest';

import MantineProviderWrapper from './MantineProviderWrapper';

describe('MantineProviderWrapper', () => {
  const TestChild = ({ children }: { children: ReactNode }) => <div>{children}</div>;

  it('renders children correctly', () => {
    const { getByText } = render(
      <MantineProviderWrapper>
        <TestChild>Test Content</TestChild>
      </MantineProviderWrapper>
    );

    expect(getByText('Test Content')).toBeInTheDocument();
  });
});
