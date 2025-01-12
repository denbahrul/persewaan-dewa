import { useEffect } from "react";
import Card from "../../../components/ui/card";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { getProduct } from "../../../stores/product/async";
import { ComponentTypes } from "../../../types/component-types";
import Button from "../../../components/ui/button";
import { useNavigate } from "react-router-dom";

export default function Product({ type }: ComponentTypes) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { entities, loading } = useAppSelector((state) => state.product);
  const products = entities;
  const TentAndStage = products?.filter(
    (products) =>
      products.category.name === "Tenda" ||
      products.category.name === "Panggung",
  );
  const otherProducts = products?.filter(
    (products) => products.category.name === "Lainnya",
  );

  useEffect(() => {
    dispatch(getProduct());
  }, []);

  if (loading === "pending") {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Loading</p>
      </div>
    );
  }

  if (!products) {
    return (
      <div className="m-auto max-w-screen-xl p-4 pt-24">
        <p>Product tidak ditemukan</p>
      </div>
    );
  }

  return (
    <div className="m-auto max-w-screen-xl p-4 pt-24">
      <p className="text-2xl font-bold">Tenda dan Panggung</p>
      {type === "admin" && (
        <div className="flex justify-center pb-8">
          <Button
            onClick={() => navigate("/admin/add-product")}
            buttonName="Tembah produk"
          />
        </div>
      )}
      {TentAndStage ? (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {TentAndStage.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product.id}
              satuan={product.satuan}
            />
          ))}
        </div>
      ) : (
        <p>Not Found</p>
      )}
      <p className="mt-4 text-2xl font-bold">Produk Lainya</p>
      {otherProducts ? (
        <div className="mt-4 grid grid-cols-4 gap-4">
          {otherProducts.map((product) => (
            <Card
              key={product.id}
              imageUrl={product.imageUrl}
              name={product.name}
              price={product.price}
              category={product.category}
              id={product.id}
              satuan={product.satuan}
            />
          ))}
        </div>
      ) : (
        <p>Not Found</p>
      )}
    </div>
  );
}
