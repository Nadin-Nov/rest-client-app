import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import { vi, describe, it, expect, beforeEach } from 'vitest';

import VariableRow from './VariableRow';

vi.mock('@/components/ui/IconButton/IconButton', () => ({
  default: ({ onClick, icon }: { onClick: () => void; icon: React.ReactNode }) => (
    <button onClick={onClick}>{icon}</button>
  ),
}));

vi.mock('next-intl', () => ({
  useTranslations: () => (key: string) => key,
}));

vi.mock('@/hooks/useVariables', () => ({
  useVariables: () => ({
    state: [],
  }),
}));

describe('VariableRow', () => {
  const variable = { key: 'foo', value: 'bar' };
  const idx = 0;
  const onUpdate = vi.fn();
  const onDelete = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  const renderWithProvider = () =>
    render(
      <MantineProvider>
        <VariableRow idx={idx} variable={variable} onUpdate={onUpdate} onDelete={onDelete} />
      </MantineProvider>
    );

  it('should renders variable row correctly', () => {
    renderWithProvider();
    expect(screen.getByDisplayValue('foo')).toBeInTheDocument();
    expect(screen.getByDisplayValue('bar')).toBeInTheDocument();
  });
});
