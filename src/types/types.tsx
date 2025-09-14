import type * as z from 'zod';

import type { signUpFormSchema } from '@/validation';
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
