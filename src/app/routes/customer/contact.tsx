import { TbMapSearch } from "react-icons/tb";
import { IoMailOutline, IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      {/* Title */}
      <p className="text-3xl font-extrabold text-gray-800 md:text-4xl">
        Contact
      </p>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Contact Details */}
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-md md:p-8">
          <div>
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">
              Bambang Agus H
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <IoCallOutline size={28} className="text-blue-500" />
              <p className="text-lg text-gray-700">
                <span className="font-medium">Telpon:</span> 085743311822
              </p>
            </div>
            <div className="flex items-center gap-4">
              <IoLogoWhatsapp size={28} className="text-green-500" />
              <p className="text-lg text-gray-700">
                <span className="font-medium">WhatsApp:</span> 085743311822
              </p>
            </div>
            <div className="flex items-center gap-4">
              <IoMailOutline size={28} className="text-indigo-500" />
              <p className="text-lg text-gray-700">
                <span className="font-medium">Email:</span>{" "}
                persewaandewa@gmail.com
              </p>
            </div>
            <div className="flex items-start gap-4">
              <TbMapSearch size={28} className="text-red-500" />
              <p className="text-lg text-gray-700">
                <span className="font-medium">Alamat:</span> Karanggeng
                RT04/RW32, Purwobinangun Pakem, Sleman, Yogyakarta
              </p>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-gray-300" />
          {/* Action Button */}
          <div className="flex justify-center">
            <a
              href="tel:085743311822"
              className="rounded-lg bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.064625276419!2d109.90771869678953!3d-7.233469599999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e700da120c1333d%3A0xbfaa9d1832340de9!2sVila%20tugu%20langit!5e0!3m2!1sid!2sid!4v1668151351280!5m2!1sid!2sid"
            className="h-[400px] w-full"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
