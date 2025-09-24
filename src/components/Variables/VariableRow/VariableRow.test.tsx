import { MantineProvider } from '@mantine/core';
import { fireEvent, render, screen } from '@testing-library/react';
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

vi.mock('@/components/ui/IconButton/IconButton', () => ({
  default: ({ onClick, 'aria-label': ariaLabel }: { onClick: () => void; 'aria-label'?: string }) => (
    <button onClick={onClick} aria-label={ariaLabel}>
      Btn
    </button>
  ),
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

  it('should manage edit, save, delete', () => {
    render(
      <MantineProvider>
        <VariableRow idx={0} variable={variable} onUpdate={onUpdate} onDelete={onDelete} />
      </MantineProvider>
    );

    fireEvent.click(screen.getByLabelText('editVariable'));

    fireEvent.click(screen.getByLabelText('saveVariable'));
    expect(onUpdate).toHaveBeenCalled();

    fireEvent.click(screen.getByLabelText('removeVariable'));
    expect(onDelete).toHaveBeenCalled();
  });
});
