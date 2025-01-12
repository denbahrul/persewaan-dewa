import { Link } from "react-router-dom";
import { IProduct } from "../../types/product";
import { deleteProduct } from "../../stores/product/async";
import { useAppDispatch } from "../../hooks/use-store";

export default function Card({
  imageUrl,
  name,
  price,
  satuan,
  type,
  id,
}: IProduct & { type: "admin" | "customer" }) {
  const dispatch = useAppDispatch();

  function onDelete(id: number) {
    dispatch(deleteProduct(id));
  }

  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#e2fde2] p-2">
      <img
        className="h-52 rounded-lg object-cover"
        src={imageUrl}
        alt="wedding inspiration"
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-md font-semibold">{name}</p>

          <p className="text-sm font-semibold">
            Rp. {price}
            <span className="text-xs font-light"> /{satuan}</span>
          </p>
        </div>
      </div>
      {type === "customer" && (
        <Link to={`/detail-tenda/${id}`}>
          <p className="cursor-pointer rounded-md bg-black px-2 py-2 text-center text-xs text-white">
            Detail
          </p>
        </Link>
      )}
      {type === "admin" && (
        <p
          onClick={() => onDelete(id)}
          className="cursor-pointer rounded-md bg-red px-2 py-2 text-center text-xs text-white"
        >
          Hapus
        </p>
      )}
    </div>
  );
}
