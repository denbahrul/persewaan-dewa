export default function Header() {
  return (
    <div className="flex h-[100vh] items-center justify-center bg-green p-4">
      <div className="flex max-w-screen-xl flex-col items-center justify-between gap-8 md:flex-row">
        {/* Bagian Teks */}
        <div className="flex w-[40%] flex-col gap-4">
          <p className="text-5xl font-extrabold leading-tight text-black">
            MENYEWAKAN ALAT PESTA
          </p>
          <p className="text-2xl font-semibold">
            Tenda, panggung, floring, kursi, alat catering & sound system
          </p>
        </div>

        <div className="relative w-[55%]">
          {/* <div className="bg-green-300 absolute -left-4 -top-4 h-full w-full rounded-lg"></div> */}
          <div className="absolute -top-4 left-3 h-[450px] w-full bg-[#6B923A]"></div>
          <img
            className="relative z-10 h-[420px] w-full object-cover"
            src="./header.jpg"
            alt="Pesta"
          />
        </div>
      </div>
    </div>
  );
}
