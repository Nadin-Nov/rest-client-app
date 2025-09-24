import { describe, it, expect } from 'vitest';

import { getPasswordStrength } from './getPasswordStrength';

describe('getPasswordStrength.ts', () => {
  it('should return empty string for empty password', () => {
    expect(getPasswordStrength('')).toBe('');
  });

  it('should return "Weak" for password meeting 1 criterion', () => {
    expect(getPasswordStrength('abcdefg')).toBe('Weak');
  });

  it('should return "Medium" for password meeting 2 criteria', () => {
    expect(getPasswordStrength('abc123')).toBe('Medium');
  });

  it('should return "Strong" for password meeting 3 criteria', () => {
    expect(getPasswordStrength('Abcd1234')).toBe('Strong');
  });

  it('should return "Very strong" for password meeting all 4 criteria', () => {
    expect(getPasswordStrength('Abcd1234!')).toBe('Very strong');
  });
});
