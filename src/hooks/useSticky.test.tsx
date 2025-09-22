import { fireEvent, renderHook } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { useSticky } from './useSticky';

describe('useSticky', () => {
  it('should be false in its state on render', () => {
    const { result } = renderHook(() => useSticky());

    expect(result.current).toBe(false);
  });

  it('should become true in its state on scroll', () => {
    const { result } = renderHook(() => useSticky());

    fireEvent.scroll(window, { target: { scrollY: 300 } });

    expect(result.current).toBe(true);
  });
});
