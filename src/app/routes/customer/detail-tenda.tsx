import { useParams } from "react-router-dom";
import Detail from "../../../components/detail";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { useEffect } from "react";
import { getProductById } from "../../../stores/product/async";

export default function DetailTenda() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector((state) => state.product.currentProduct);
  const loading = useAppSelector((state) => state.product.loading);

  useEffect(() => {
    dispatch(getProductById(+id!));
  }, [id]);

  if (loading === "pending") {
    return <p>Loading</p>;
  }

  if (!product) {
    return <p>Product tidak ditemukan</p>;
  }

  return (
    <Detail
      title="Detail Produk"
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.imageUrl}
    />
  );
}
