import { z } from "zod";

export const postCreateSchema = z.object({
  caption: z.string().min(1, "caption is required"),
  tags: z.array(z.string()),
});

export type TPostCreateSchema = z.infer<typeof postCreateSchema>;
