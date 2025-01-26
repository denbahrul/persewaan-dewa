import { Link } from "react-router-dom";

export default function Detail({
  title,
  name,
  description,
  price,
  image,
}: {
  title: string;
  name: string;
  description?: string;
  price: number;
  image?: string;
}) {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      {/* Title */}
      <p className="text-center text-2xl font-extrabold text-gray-800">
        {title}
      </p>
      <p className="my-4 text-2xl font-extrabold">{name}</p>
      <div className="gap-8 md:flex">
        <div className="md:w-[40%]">
          <img
            className="h-96 w-full rounded-lg object-cover"
            src={image}
            alt="wedding inspiration"
          />
          <div className="mt-4">
            <p className="font-lg font-semibold">Harga :</p>
            <p className="text-xl">Rp. {price}</p>
          </div>
        </div>
        <div>
          <p className="mt-8 pb-4 text-lg font-semibold md:mt-0">Keterangan</p>
          <p>{description}</p>
        </div>
      </div>
      <Link to={"https://wa.me/6285743311822"}>
        <div className="m-auto mt-10 flex w-52 justify-center rounded-full bg-black p-2">
          <p className="items-center text-xl text-white">Order Sekarang</p>
        </div>
      </Link>
    </div>
  );
}
