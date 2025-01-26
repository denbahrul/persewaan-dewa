import { useParams } from "react-router-dom";
import Detail from "../../../components/detail";
import { useAppDispatch, useAppSelector } from "../../../hooks/use-store";
import { useEffect } from "react";
import { getTentPackageById } from "../../../stores/tent-package/async";
import Loading from "../../../components/ui/loading";
import NotFound from "../../../components/ui/not-found";

export default function DetailTenda() {
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const product = useAppSelector(
    (state) => state.tentPackage.currentTentPackage,
  );
  const loading = useAppSelector((state) => state.tentPackage.loading);

  useEffect(() => {
    dispatch(getTentPackageById(+id!));
  }, [id]);

  if (loading === "pending") {
    return <Loading />;
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <Detail
      title="Detail Paket"
      name={product.name}
      description={product.description}
      price={product.price}
      image={product.imageUrl}
    />
  );
}
