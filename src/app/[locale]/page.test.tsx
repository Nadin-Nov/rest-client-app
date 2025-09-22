import { redirect } from 'next/navigation';
import { describe, it, expect, vi } from 'vitest';

vi.mock('next/navigation', () => ({
  redirect: vi.fn(),
}));

import LocalePage from './page';

describe('LocalePage', () => {
  it('should redirect correctly', async () => {
    const params = Promise.resolve({ locale: 'en' });

    await LocalePage({ params });

    expect(redirect).toHaveBeenCalledWith('/en/main');
  });
});
