import { z } from "zod";

export const userProfileSchema = z.object({
  name: z.string().min(1, "name is required"),
});

export type TUserProfileSchema = z.infer<typeof userProfileSchema>;
