import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(2).max(50),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Max 12 characters Allowed in Password"),
});
