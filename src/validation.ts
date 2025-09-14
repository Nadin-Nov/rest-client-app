import * as z from 'zod';

export const formSchema = z
  .object({
    name: z.string().regex(/\p{Lu}/u, 'Name should start with a capital letter'),
    email: z.email('Email should have valid format'),
    password: z
      .string()
      .min(8, 'Password must be minimum 8 symbols long')
      .regex(/\d/, 'Password should contain 1 digit')
      .regex(/\p{L}/u, 'Password should contain 1 letter')
      .regex(/[\W_]/, 'Password should contain 1 special character'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ['confirmPassword'],
    when(payload) {
      return formSchema.pick({ password: true, confirmPassword: true }).safeParse(payload.value).success;
    },
  });
