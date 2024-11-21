import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="fixed left-0 right-0 top-0 z-50 mx-2 mt-2">
        <div className="text-white bg-black mx-auto flex max-w-screen-xl items-center justify-between rounded-xl p-4 px-6">
          <Link to={"/"}>
            <div className="flex gap-2">
              <p className="font-extrabold">DW</p>
              <p>Persewaan Dewa</p>
            </div>
          </Link>
          <div className="flex gap-4">
            <Link to={"/wedding-inspiration"}>
              <p>Wedding Inspirasi</p>
            </Link>
            <Link to={"/tent-and-stage"}>
              <p>Tenda & Panggung</p>
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
      <Outlet />
    </div>
  );
}
