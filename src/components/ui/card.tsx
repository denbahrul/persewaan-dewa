import { Link } from "react-router-dom";

export default function Card({
  image,
  name,
  price,
}: {
  image: string;
  name: string;
  price: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-xl bg-[#e2fde2] p-2">
      <img
        className="h-52 rounded-lg object-cover"
        src={image}
        alt="wedding inspiration"
      />
      <div className="flex items-center justify-between">
        <div>
          <p className="text-md font-semibold">{name}</p>

          <p className="text-sm font-semibold">Rp. {price}</p>
        </div>
      </div>
      <Link to={"/detail-tenda"}>
        <p className="rounded-md bg-black px-2 py-2 text-center text-xs text-white">
          Detail
        </p>
      </Link>
    </div>
  );
}
