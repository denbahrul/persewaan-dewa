import { z } from "zod";

export const createWEddingInspirationSchema = z.object({
  title: z.string().min(1, "INspiration wedding title is required"),
  imageUrl: z.any(),
});

export type CreateWeddingInspirationDTO = z.infer<
  typeof createWEddingInspirationSchema
>;
