import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useLocalePrefix } from './useLocalePrefix';

vi.mock('next/navigation', () => ({
  usePathname: () => '/ru/page',
}));

describe('useLocalePrefix', () => {
  it('returns /ru for ru path', () => {
    const { result } = renderHook(() => useLocalePrefix());
    expect(result.current).toBe('/ru');
  });
});
