import { Link } from "react-router-dom";

export default function Detail({
  title,
  name,
  info,
  price,
  image,
}: {
  title: string;
  name: string;
  info: string;
  price: string;
  image: string;
}) {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      {/* Title */}
      <p className="text-center text-2xl font-extrabold text-gray-800">
        {title}
      </p>
      <p className="my-4 text-2xl font-extrabold">{name}</p>
      <div className="flex gap-8">
        <div className="w-[40%]">
          <img
            className="h-96 w-full rounded-lg object-cover"
            src={image}
            alt="wedding inspiration"
          />
          <div className="mt-4">
            <p>Harga :</p>
            <p className="text-xl font-bold">Rp. {price}</p>
          </div>
        </div>
        <div>
          <p className="pb-4 text-lg font-semibold">Keterangan</p>
          <p>{info}</p>
        </div>
      </div>
      <Link to={"/payment"}>
        <div className="m-auto mt-10 flex w-52 justify-center rounded-full bg-black p-2">
          <p className="items-center text-xl text-white">Order Sekarang</p>
        </div>
      </Link>
    </div>
  );
}
