export default function Detail() {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      {/* Title */}
      <p className="text-center text-2xl font-extrabold text-gray-800">
        Detail
      </p>
      <p className="text-2xl font-extrabold">SOUND 5000 WATT</p>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <img
            className="h-52 w-full rounded-lg object-cover"
            src="https://images.pexels.com/photos/373638/pexels-photo-373638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="wedding inspiration"
          />
        </div>
        <div>
          <p>Keterangan</p>
          <p>Paket Sound System</p>
        </div>
      </div>
    </div>
  );
}
