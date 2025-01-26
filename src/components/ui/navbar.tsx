import { Link, Outlet } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import ImageBg from "./image-bg";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <ImageBg />
      <div className="fixed left-0 right-0 top-0 z-50 mx-2 mt-2">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between rounded-xl bg-black px-6 py-1 text-white">
          {/* Logo */}
          <Link to={"/"} className="flex items-center gap-2">
            <img src="./logo.png" className="w-12" alt="Logo" />
            <p className="text-md font-bold">PERSEWAAN DEWA</p>
          </Link>

          {/* Menu Desktop */}
          <div className="hidden gap-6 text-sm lg:flex">
            <Link to={"/wedding-inspiration"}>Inspirasi Wedding</Link>
            <Link to={"/product"}>Product</Link>
            <Link to={"/tent-package"}>Paket Tenda</Link>
            <Link to={"/sound-system"}>Sound System</Link>
            <Link to={"/contact"}>Kontak</Link>
          </div>

          {/* Tombol Menu Mobile */}
          <button
            className="text-2xl lg:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>

        {/* Dropdown Menu Mobile */}
        <div
          className={`absolute left-0 right-0 top-16 rounded-lg bg-black text-white transition-all duration-300 ease-in-out ${
            isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden lg:hidden`}
        >
          <Link
            to={"/wedding-inspiration"}
            className="block border-b px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            Inspirasi Wedding
          </Link>
          <Link
            to={"/product"}
            className="block border-b px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            Product
          </Link>
          <Link
            to={"/tent-package"}
            className="block border-b px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            Paket Tenda
          </Link>
          <Link
            to={"/sound-system"}
            className="block border-b px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            Sound System
          </Link>
          <Link
            to={"/contact"}
            className="block px-6 py-3"
            onClick={() => setIsOpen(false)}
          >
            Kontak
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  );
}
