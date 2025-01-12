import { useEffect } from "react";
import PackageCard from "../../../components/ui/package-card";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getTentPackage } from "../../../stores/tent-package/async";
import { ComponentTypes } from "../../../types/component-types";
import Button from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function TentPackage({ type }: ComponentTypes) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.tentPackage);
  const tentPackage = entities;

  useEffect(() => {
    dispatch(getTentPackage());
  }, []);

  if (loading === "pending") {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Loading</p>;
      </div>
    );
  }

  if (!tentPackage) {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Paket tenda tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Paket Tenda</p>
      {type === "admin" && (
        <div className="flex justify-center pb-8">
          <Button
            onClick={() => navigate("/admin/add-tent-package")}
            buttonName="Tembah paket tenda"
          />
        </div>
      )}
      <div className="mt-4 grid grid-cols-2 gap-6 lg:grid-cols-3">
        {tentPackage.map((tent) => {
          return (
            <PackageCard
              id={tent.id}
              name={tent.name}
              price={tent.price}
              imageUrl={tent.imageUrl}
              description={tent.description}
              link="/detail-sound"
            />
          );
        })}
      </div>
    </div>
  );
}
