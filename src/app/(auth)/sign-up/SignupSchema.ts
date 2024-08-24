import { z } from "zod";

export const signupSchema = z.object({
  avatar: z.instanceof(File),
  username: z
    .string()
    .min(2, "Username must be at least 2 characters")
    .max(50, "Username cannot exceed 50 characters"),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters")
    .max(12, "Max 12 characters allowed in password"),
  email: z.string().email("Invalid email address"),
});
