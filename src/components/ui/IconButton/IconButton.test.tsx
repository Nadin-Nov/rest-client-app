import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { describe, it, vi, expect } from 'vitest';

import { IconSave } from '../icons';

import IconButton from './IconButton';

describe('IconButton', () => {
  it('should renders the icon', () => {
    render(<IconButton icon={<IconSave />} variant='save' />);
    const button = screen.getByRole('button', { name: /save/i });
    expect(button.querySelector('svg')).toBeInTheDocument();
  });

  it('should handles click events', () => {
    const handleClick = vi.fn();
    render(<IconButton icon={<IconSave />} variant='save' onClick={handleClick} />);
    const button = screen.getByRole('button', { name: /save/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('should renders disabled state', () => {
    render(<IconButton icon={<IconSave />} variant='save' disabled />);
    const button = screen.getByRole('button', { name: /save/i });
    expect(button).toBeDisabled();
  });

  it('should applies correct variant classes', () => {
    const { rerender } = render(<IconButton icon={<IconSave />} variant='save' />);
    let button = screen.getByRole('button', { name: /save/i });
    expect(button.className).toMatch(/save/);

    rerender(<IconButton icon={<IconSave />} variant='delete' />);
    button = screen.getByRole('button', { name: /delete/i });
    expect(button.className).toMatch(/delete/);

    rerender(<IconButton icon={<IconSave />} variant='edit' />);
    button = screen.getByRole('button', { name: /edit/i });
    expect(button.className).toMatch(/edit/);
  });
});
