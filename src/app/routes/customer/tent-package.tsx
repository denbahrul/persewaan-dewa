import { useEffect } from "react";
import PackageCard from "../../../components/ui/package-card";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getTentPackage } from "../../../stores/tent-package/async";
import { ComponentTypes } from "../../../types/component-types";
import Button from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/ui/loading";

export default function TentPackage({ type }: ComponentTypes) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.tentPackage);
  const tentPackage = entities;

  useEffect(() => {
    dispatch(getTentPackage());
  }, []);

  if (loading === "pending") {
    return <Loading />;
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
      {type === "admin" && (
        <div className="flex justify-center pb-8">
          <Button
            onClick={() => navigate("/admin/add-tent-package")}
            buttonName="Tembah paket tenda"
          />
        </div>
      )}
      <p className="text-2xl font-bold">Paket Tenda</p>
      <div className="mt-4 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {tentPackage.map((tent) => {
          return (
            <PackageCard
              id={tent.id}
              name={tent.name}
              price={tent.price}
              imageUrl={tent.imageUrl}
              description={tent.description}
              link="/detail-paket"
              type={type}
              data="tent"
            />
          );
        })}
      </div>
    </div>
  );
}
