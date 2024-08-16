import { z } from "zod";

export const registerSchema = z.object({
  name: z.string().min(1, "name is required"),
  email: z.string().email(),
  password: z.string().min(8, "passwords must be at least 8 characters"),
});

export type TRegisterSchema = z.infer<typeof registerSchema>;
