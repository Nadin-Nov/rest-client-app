import type { User } from 'firebase/auth';
import { describe, it, expect } from 'vitest';

import { formatAuthUser } from './formatAuthUser';

describe('formatAuthUser.ts', () => {
  it('should format a Firebase user correctly', () => {
    const mockUser: User = {
      uid: '123',
      email: 'test@example.com',
      displayName: 'John Doe',
    } as User;

    const formatted = formatAuthUser(mockUser);

    expect(formatted).toEqual({
      uid: '123',
      email: 'test@example.com',
      name: 'John Doe',
    });
  });
});
