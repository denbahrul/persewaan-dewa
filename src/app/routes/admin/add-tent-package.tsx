import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../../../hooks/use-store";
import FormInput from "../../../components/ui/form-input";
import Button from "../../../components/ui/button";
import {
  CreateTentPackageDTO,
  createTentPackageSchema,
} from "../../../validation/tentPackageSchema";
import { createTentPackage } from "../../../stores/tent-package/async";

export default function AddTentPackage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<CreateTentPackageDTO>({
    resolver: zodResolver(createTentPackageSchema),
  });

  async function onSubmit(data: CreateTentPackageDTO) {
    await dispatch(createTentPackage(data)).unwrap();

    navigate("/admin/tent-package");
  }
  return (
    <div className="m-auto max-w-3xl py-24" onSubmit={handleSubmit(onSubmit)}>
      <p className="my-8 text-center text-xl font-bold">Tambah paket baru</p>

      <form className="flex flex-col gap-3">
        <FormInput
          {...register("name")}
          type="Text"
          placeholder="Masukkan nama paket"
          label="Nama Paket"
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
          {...register("description")}
          type="Text"
          placeholder="Masukkan deskripsi paket tenda"
          label="Deskripsi Paket"
        />
        {errors.description && (
          <p className="text-rose-600">* {errors.description.message}</p>
        )}
        <FormInput {...register("imageUrl")} type="file" label="Gambar Paket" />
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
          {watch("imageUrl") &&
            Array.from(watch("imageUrl")).map((image, index) => (
              <img
                key={index}
                src={URL.createObjectURL(image as Blob)}
                alt="foto paket tenda"
                className="h-28 w-full rounded-md object-cover"
              />
            ))}
        </div>

        <Button
          buttonName={
            isSubmitting
              ? "Menambahkan paket tenda..."
              : "Buat paket tenda baru"
          }
          type="submit"
        />
      </form>
    </div>
  );
}
