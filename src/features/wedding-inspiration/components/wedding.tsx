import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getWeddingInspiration } from "../../../stores/wedding-inspiration/async";

export default function Wedding() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector(
    (state) => state.weddingInspiration,
  );
  const weddingInspiration = entities;

  useEffect(() => {
    dispatch(getWeddingInspiration());
  }, []);

  if (loading === "pending") {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Loading</p>;
      </div>
    );
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
      <div className="grid grid-cols-4 grid-rows-3 gap-4 py-4">
        {weddingInspiration.map((item, index) => {
          // Tentukan apakah elemen berada di posisi spesifik dalam grup
          const isColSpan2 =
            (Math.floor(index / 3) % 2 === 0 && index % 3 === 0) || // Grup ganjil, elemen pertama
            (Math.floor(index / 3) % 2 === 1 && index % 3 === 1); // Grup genap, elemen terakhir

          return (
            <div
              key={item.id}
              className={`relative row-span-1 overflow-hidden rounded-lg bg-gray-100 shadow hover:shadow-lg ${
                isColSpan2 ? "col-span-2" : "col-span-1"
              }`}
            >
              <img
                src={item.imageUrl}
                alt={`Image ${item.id}`}
                className="h-72 w-full object-cover"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
