import { z } from "zod";

export const createWEddingInspirationSchema = z.object({
  title: z.string().min(1, "Nama inspirasi wedding harus diisi"),
  imageUrl: z.any(),
});

export type CreateWeddingInspirationDTO = z.infer<
  typeof createWEddingInspirationSchema
>;
