import { Link } from "react-router-dom";

export default function PackageCard({
  image,
  name,
  link,
}: {
  image: string;
  name: string;
  link: string;
}) {
  return (
    <div className="grid grid-cols-2 gap-2 rounded-lg bg-[#e2fde2] p-4">
      <div className="flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold">{name}</p>
          <p className="mt-2 text-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <p className="text-md font-bold">Rp.3.000.000</p>

        <Link to={link}>
          <div className="flex w-full justify-center rounded-md bg-black py-1">
            <a className="text-center text-sm text-white">Detail</a>
          </div>
        </Link>
      </div>
      <img
        className="h-52 w-full rounded-lg object-cover"
        src={image}
        alt="wedding inspiration"
      />
    </div>
  );
}
