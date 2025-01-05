import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 mx-2 mt-2">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between rounded-xl bg-black px-6 py-1 text-white">
          <Link to={"/"}>
            <div className="flex items-center gap-2">
              <img src="./logo.png" className="w-12" />
              <p className="font-bold">PERSEWAAN DEWA</p>
            </div>
          </Link>
          <div className="flex gap-4">
            <Link to={"/wedding-inspiration"}>
              <p>Inspirasi Wedding</p>
            </Link>
            <Link to={"/product"}>
              <p>Product</p>
            </Link>
            <Link to={"/tent-package"}>
              <p>Paket Tenda</p>
            </Link>
            <Link to={"/sound-system"}>
              <p>Sound System</p>
            </Link>
            <Link to={"/contact"}>
              <p>Kontak</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
