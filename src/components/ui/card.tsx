import { AiOutlineHeart } from "react-icons/ai";

export default function Card({ image, name }: { image: string; name: string }) {
  return (
    <div className="flex flex-col gap-1">
      <img
        className="h-52 rounded-lg object-cover"
        src={image}
        alt="wedding inspiration"
      />
      <div className="flex items-center justify-between">
        <p className="text-sm">{name}</p>
        <AiOutlineHeart />
      </div>
    </div>
  );
}
