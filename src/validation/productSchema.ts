import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string().min(1, "Nama produk wajib diisi"),
  price: z.number(),
  satuan: z.string().min(1, "Satuan wajib diisi"),
  description: z.string(),
  imageUrl: z.any(),
  categoryId: z.number(),
});

export type CreateProductDTO = z.infer<typeof createProductSchema>;
