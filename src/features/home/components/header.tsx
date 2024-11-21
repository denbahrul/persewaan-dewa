export default function Header() {
  return (
    <div className="bg-green h-[100vh] p-4 py-24">
      <div className="m-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="text-5xl font-extrabold">Menyewakan Alat Pesta</p>
          <p className="text-lg">
            Tenda, Panggung, Floring, Kursi, Alat Catering & Sound System
          </p>
        </div>
        <div>
          <img
            className="h-80 rounded-lg object-cover"
            src="./header.jpg"
            alt="header"
          />
        </div>
      </div>
    </div>
  );
}
