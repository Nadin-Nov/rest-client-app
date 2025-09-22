'use client';

import { MantineProvider } from '@mantine/core';
import { notifications } from '@mantine/notifications';
import { render, screen, fireEvent } from '@testing-library/react';
import { useTranslations } from 'next-intl';
import type { MockedFunction } from 'vitest';
import { describe, beforeEach, afterEach, it, expect, vi } from 'vitest';

import { useVariables } from '@/hooks/useVariables';
import type { VariablesContextValue, Variable } from '@/types/variablesContext';

import Variables from './Variables';

vi.mock('@/hooks/useVariables');
vi.mock('next-intl');
vi.mock('@mantine/notifications', () => ({
  notifications: { show: vi.fn() },
}));

const renderWithMantine = (ui: React.ReactElement) => render(<MantineProvider>{ui}</MantineProvider>);

describe('Variables Component', () => {
  let mockDispatch: VariablesContextValue['dispatch'];
  const mockState: Variable[] = [
    { key: 'VAR1', value: 'Value 1' },
    { key: 'VAR2', value: 'Value 2' },
  ];

  const mockedUseVariables = useVariables as MockedFunction<typeof useVariables>;

  beforeEach(() => {
    mockDispatch = vi.fn();

    mockedUseVariables.mockReturnValue({
      state: mockState,
      dispatch: mockDispatch,
      hasVariables: mockState.length > 0,
    });

    const translations = {
      variablesHeader: 'Your Variables',
      successTitle: 'Success! 😺',
      addedVariable: 'Variable added',
      updatedVariable: 'Variable updated',
      deletedVariable: 'Variable deleted',
      errorTitle: 'Error 😿',
      duplicateKey: 'This key already exists',
      saveVariable: 'Save variable',
      editVariable: 'Edit variable',
      removeVariable: 'Remove variable',
      keyPlaceholder: 'Enter variable key',
      valuePlaceholder: 'Enter variable value',
      addVariable: 'Add new variable',
    };

    const mockedUseTranslations = () => {
      const t = (key: keyof typeof translations) => translations[key];
      t.rich = () => null;
      t.markup = () => '';
      t.raw = () => '';
      t.has = () => true;
      return t;
    };
    // @ts-expect-error: мокируем useTranslations
    (useTranslations as MockedFunction<typeof useTranslations>).mockImplementation(mockedUseTranslations);
  });

  afterEach(() => {
    vi.clearAllMocks();
  });

  it('renders header and variables', () => {
    renderWithMantine(<Variables />);

    expect(screen.getByText('Your Variables')).toBeInTheDocument();
    expect(screen.getByDisplayValue('VAR1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value 1')).toBeInTheDocument();
    expect(screen.getByDisplayValue('VAR2')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Value 2')).toBeInTheDocument();
  });

  it('adds a new variable', () => {
    renderWithMantine(<Variables />);

    const keyInput = screen.getAllByPlaceholderText('Enter variable key')[0];
    const valueInput = screen.getAllByPlaceholderText('Enter variable value')[0];
    const saveButton = screen.getByLabelText('save');

    fireEvent.change(keyInput, { target: { value: 'NEW_VAR' } });
    fireEvent.change(valueInput, { target: { value: 'New Value' } });
    fireEvent.click(saveButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'ADD',
      payload: { key: 'NEW_VAR', value: 'New Value' },
    });
    expect(notifications.show).toHaveBeenCalledWith({
      title: 'Success! 😺',
      message: 'Variable added',
      color: 'green',
    });
  });

  it('deletes a variable', () => {
    renderWithMantine(<Variables />);

    const deleteButtons = screen.getAllByLabelText('delete');
    fireEvent.click(deleteButtons[0]);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'REMOVE',
      key: 'VAR1',
    });
    expect(notifications.show).toHaveBeenCalledWith({
      title: 'Success! 😺',
      message: 'Variable deleted',
      color: 'green',
    });
  });
});
