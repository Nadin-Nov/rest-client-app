import { redirect } from 'next/navigation';
import { describe, it, expect, vi } from 'vitest';

import RootPage from './page';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

describe('RootPage', () => {
  it('should redirect to /en', () => {
    RootPage();

    expect(redirect).toHaveBeenCalledWith('/en');
  });
});
