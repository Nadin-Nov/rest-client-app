import type * as z from 'zod';

import type { signInFormSchema, signUpFormSchema } from '@/validation';
export interface Messages {
  MainPage?: {
    title: string;
  };
  Header?: {
    title: string;
  };
  Footer?: {
    title: string;
  };
  NotFound?: {
    title: string;
  };
}

export type SignUpFormData = z.infer<typeof signUpFormSchema>;

export type SignInFormData = z.infer<typeof signInFormSchema>;

export interface AuthUser {
  name: string | null;
  email: string | null;
  uid: string;
}
