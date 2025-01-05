import { Link } from "react-router-dom";
import { ITentPackage } from "../../types/tent-package";

export default function PackageCard({
  name,
  description,
  price,
  imageUrl,
  link,
  satuan,
}: ITentPackage & { link: string; satuan?: string }) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#e2fde2] p-4">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="mt-2 line-clamp-5 text-xs">{description}</p>
        </div>

        <p className="text-md font-bold">
          Rp.{price}
          <span className="text-sm font-normal">{satuan}</span>
        </p>

        <Link to={link}>
          <div className="flex w-full justify-center rounded-md bg-black py-1">
            <a className="text-center text-sm text-white">Detail</a>
          </div>
        </Link>
      </div>
      <img
        className="h-52 w-full rounded-lg object-cover"
        src={imageUrl}
        alt="wedding inspiration"
      />
    </div>
  );
}
