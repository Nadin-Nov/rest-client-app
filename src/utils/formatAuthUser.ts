import { type User } from 'firebase/auth';

export const formatAuthUser = (user: User) => ({
  uid: user.uid,
  email: user.email,
  name: user.displayName,
});
