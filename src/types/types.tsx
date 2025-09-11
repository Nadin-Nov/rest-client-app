import type * as z from 'zod';

import type { formSchema } from '@/validation';
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

export type FormData = z.infer<typeof formSchema>;
