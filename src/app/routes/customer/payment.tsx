export default function Payment() {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      <div>
        <p className="my-4 text-2xl font-extrabold">Detail Pembayaran</p>

        <div className="mt-4">
          <p>Sub Total :</p>
          <p className="text-xl font-bold">Rp. 2.000.000</p>
        </div>
        <div className="mt-4">
          <p>Biaya Pengiriman :</p>
          <p className="text-xl font-bold">Rp. 100.000</p>
        </div>
        <div className="mt-4">
          <p>Total :</p>
          <p className="text-xl font-bold">Rp. 2.100.000</p>
        </div>
      </div>
      <div className="m-auto mt-10 flex w-52 justify-center rounded-full bg-black p-2">
        <p className="items-center text-xl text-white">Bayar</p>
      </div>
    </div>
  );
}
