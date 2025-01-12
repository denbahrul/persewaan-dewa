import { z } from "zod";

export const createTentPackageSchema = z.object({
  name: z.string().min(1, "Nama produk wajib diisi"),
  price: z.number(),
  description: z.string(),
  imageUrl: z.any(),
});

export type CreateTentPackageDTO = z.infer<typeof createTentPackageSchema>;
