import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../hooks/use-store";
import {
  CreateProductDTO,
  createProductSchema,
} from "../../validation/productSchema";
import { createProduct } from "../../stores/product/async";
import FormInput from "../../components/ui/form-input";
import Button from "../../components/ui/button";

export default function AddProduct({
  category,
}: {
  category: "sound-system" | "others";
}) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateProductDTO>({
    resolver: zodResolver(createProductSchema),
  });

  async function onSubmit(data: CreateProductDTO) {
    await dispatch(createProduct(data)).unwrap();
    {
      category === "others"
        ? navigate("/admin/product")
        : navigate("/admin/sound-system");
    }
  }
  return (
    <div className="m-auto max-w-3xl py-24" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-8 text-center text-xl font-bold">Tambah produk baru</p>

      <form className="flex flex-col gap-3">
        <FormInput
          {...register("name")}
          type="Text"
          placeholder="Masukkan nama produk"
          label="Nama Produk"
        />
        {errors.name && (
          <p className="text-rose-600">* {errors.name.message}</p>
        )}
        <FormInput
          {...register("price", { valueAsNumber: true })}
          type="number"
          placeholder="Masukkan harga"
          label="Harga"
        />
        {errors.price && (
          <p className="text-rose-600">* {errors.price.message}</p>
        )}
        <FormInput
          {...register("satuan")}
          type="Text"
          placeholder="Makukkan satuan"
          label="Satuan Produk"
        />
        {errors.satuan && (
          <p className="text-rose-600">* {errors.satuan.message}</p>
        )}
        <FormInput
          {...register("description")}
          type="Text"
          placeholder="Enter product description"
          label="Deskripsi Produk"
        />
        {errors.description && (
          <p className="text-rose-600">* {errors.description.message}</p>
        )}
        {category === "sound-system" && (
          <>
            <div>
              <p>Choose a category</p>
              <select
                {...register("categoryId", { valueAsNumber: true })}
                form="categoryform"
                disabled
                className="mt-2 w-full rounded-xl bg-gray-200 p-3"
              >
                <option key={3} value={3}>
                  Sound System
                </option>
              </select>
            </div>
            {errors.categoryId && (
              <p className="text-rose-600">* {errors.categoryId.message}</p>
            )}
          </>
        )}
        {category === "others" && (
          <>
            <div>
              <p>Choose a category</p>
              <select
                {...register("categoryId", { valueAsNumber: true })}
                form="categoryform"
                className="mt-2 w-full rounded-xl bg-gray-200 p-3"
              >
                <option key={1} value={1}>
                  Tenda
                </option>
                <option key={2} value={2}>
                  Panggung
                </option>
                <option key={3} value={3}>
                  Sound System
                </option>
                <option key={4} value={4}>
                  Lainnya
                </option>
              </select>
            </div>
            {errors.categoryId && (
              <p className="text-rose-600">* {errors.categoryId.message}</p>
            )}
          </>
        )}
        <FormInput
          {...register("imageUrl")}
          type="file"
          label="Gambar Produk"
        />
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {watch("imageUrl") &&
            Array.from(watch("imageUrl")).map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image as Blob)}
                alt="product photo"
                className="h-28 w-full rounded-md object-cover"
              />
            ))}
        </div>

        <Button
          buttonName={
            isSubmitting ? "Creating product..." : "Crate new product"
          }
          type="submit"
        />
      </form>
    </div>
  );
}
