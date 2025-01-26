import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import {
  createWeddingInspiration,
  deleteWeddingInspiration,
  getWeddingInspiration,
} from "../../../stores/wedding-inspiration/async";
import Button from "../../../components/ui/button";
import { ComponentTypes } from "../../../types/component-types";
import { useForm } from "react-hook-form";
import {
  CreateWeddingInspirationDTO,
  createWEddingInspirationSchema,
} from "../../../validation/weddingInspirationSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import FormInput from "../../../components/ui/form-input";
import Loading from "../../../components/ui/loading";

export default function Wedding({ type }: ComponentTypes) {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector(
    (state) => state.weddingInspiration,
  );
  const weddingInspiration = entities;

  useEffect(() => {
    dispatch(getWeddingInspiration());
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CreateWeddingInspirationDTO>({
    resolver: zodResolver(createWEddingInspirationSchema),
  });

  async function onSubmit(data: CreateWeddingInspirationDTO) {
    await dispatch(createWeddingInspiration(data)).unwrap();
    reset();
  }

  function onDelete(id: number) {
    dispatch(deleteWeddingInspiration(id));
  }

  if (loading === "pending") {
    return <Loading />;
  }

  if (!weddingInspiration) {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Inspirasi wedding tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Inspirasi Wedding</p>
      {type === "admin" && (
        <div className="justify-center py-10" onSubmit={handleSubmit(onSubmit)}>
          <p className="pb-4 text-center text-lg font-semibold">
            Tambah Inspirasi Wedding
          </p>
          <form className="flex flex-col justify-center">
            <FormInput
              {...register("title")}
              type="Text"
              placeholder="Masukkan nama inspirasi wedding"
              label="Nama inspirasi wedding"
            ></FormInput>
            {errors.title && (
              <p className="text-rose-600">* {errors.title.message}</p>
            )}
            <FormInput
              {...register("imageUrl")}
              type="file"
              label="Product Image"
              required
            />
            <div className="mt-4 grid grid-cols-3 gap-2 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
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
                isSubmitting
                  ? "Menambah inspirasi wedding..."
                  : "Tambah inspirasi wedding"
              }
              type="submit"
            />
          </form>
        </div>
      )}
      <div className="grid grid-cols-1 grid-rows-3 gap-4 py-4 sm:grid-cols-2 md:grid-cols-4">
        {weddingInspiration.map((item, index) => {
          // Tentukan apakah elemen berada di posisi spesifik dalam grup
          const isColSpan2 =
            (Math.floor(index / 3) % 2 === 0 && index % 3 === 0) || // Grup ganjil, elemen pertama
            (Math.floor(index / 3) % 2 === 1 && index % 3 === 1); // Grup genap, elemen terakhir

          return (
            <div
              key={item.id}
              className={`relative row-span-1 overflow-hidden rounded-lg bg-gray-100 shadow hover:shadow-lg ${
                isColSpan2 ? "md:col-span-2" : "md:col-span-1"
              }`}
            >
              <img
                src={item.imageUrl}
                alt={`Image ${item.id}`}
                className="h-72 w-full object-cover"
              />
              {type === "admin" && (
                <div
                  className="cursor-pointer"
                  onClick={() => onDelete(item.id)}
                >
                  <p className="bg-red p-1 text-center text-white">Hapus</p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
