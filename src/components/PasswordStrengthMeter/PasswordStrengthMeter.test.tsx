import { MantineProvider } from '@mantine/core';
import { render, screen } from '@testing-library/react';
import type { JSX } from 'react';
import { describe, it, expect } from 'vitest';

import { pawsObjectForPassword, defaultPawObject } from '@/utils/pawsObjectForPassword';

import { PasswordStrengthMeter } from './PasswordStrengthMeter';

const renderWithProvider = (ui: JSX.Element) => render(<MantineProvider>{ui}</MantineProvider>);

describe('PasswordStrengthMeter', () => {
  it('renders 4 paws', () => {
    renderWithProvider(<PasswordStrengthMeter strength='weak' />);
    const paws = screen.getAllByTestId('paw-svg');
    expect(paws).toHaveLength(4);
  });

  it('applies correct color for strength "weak"', () => {
    const strength = 'weak';
    renderWithProvider(<PasswordStrengthMeter strength={strength} />);

    const pawsActive = pawsObjectForPassword[strength as keyof typeof pawsObjectForPassword] || defaultPawObject;
    const paws = screen.getAllByTestId('paw-svg');

    paws.forEach((box, index) => {
      const svg = box.querySelector('svg');
      const expectedColor = index < pawsActive.active ? pawsActive.color : defaultPawObject.color;
      expect(svg).toHaveAttribute('fill', expectedColor);
    });
  });

  it('falls back to defaultPawObject if unknown strength', () => {
    renderWithProvider(<PasswordStrengthMeter strength='unknown' />);
    const paws = screen.getAllByTestId('paw-svg');
    paws.forEach((box) => {
      const svg = box.querySelector('svg');
      expect(svg).toHaveAttribute('fill', defaultPawObject.color);
    });
  });
});
