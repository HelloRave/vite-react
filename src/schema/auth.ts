import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(1, { message: 'Password is required' }),
  code: z.string().optional(),
});

export type TLoginSchema = z.infer<typeof loginSchema>;
