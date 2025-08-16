import * as z from "zod";

export const loginSchema = z.object({
  email: z
    .string()
    .regex(
      /^[a-z0-9]+@[a-z]+\.[a-z]+(\.[a-z]+)?$/,
      "Invalid email format"
    ),
  password: z
    .string()
    .min(6, "Password must be at least 6 characters long")
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{6,}$/,
      "Password must contain at least one uppercase letter, one lowercase letter, and one number"
    ),
});
