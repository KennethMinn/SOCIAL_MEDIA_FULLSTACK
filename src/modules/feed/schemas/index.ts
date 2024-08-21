import { z } from "zod";

export const postFormSchema = z.object({
  caption: z.string().min(1, "caption is required"),
  tags: z.array(z.string()),
});

export type TPostFormSchema = z.infer<typeof postFormSchema>;
