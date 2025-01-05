import { useEffect } from "react";
import PackageCard from "../../../components/ui/package-card";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getProduct } from "../../../stores/product/async";

export default function SoundSystem() {
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.product);
  const product = entities;
  const SoundSystem = product?.filter(
    (product) => product.category.name === "Sound System",
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading === "pending") {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Loading</p>;
      </div>
    );
  }

  if (!SoundSystem) {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Sound System tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Sound System</p>
      <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
        {SoundSystem.map((sound) => {
          return (
            <PackageCard
              id={sound.id}
              name={sound.name}
              price={sound.price}
              imageUrl={sound.imageUrl}
              description={sound.description}
              satuan={`/${sound.satuan}`}
              link="/detail-sound"
            />
          );
        })}
      </div>
    </div>
  );
}
