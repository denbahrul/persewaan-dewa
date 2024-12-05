import { PiMapPinArea } from "react-icons/pi";
import { IoMailOutline, IoCallOutline, IoLogoWhatsapp } from "react-icons/io5";

export default function Contact() {
  return (
    <div className="m-auto max-w-screen-xl p-6 pt-24">
      <p className="text-center text-3xl font-extrabold text-gray-800">
        Contact
      </p>
      <div className="mt-8 grid grid-cols-1 gap-10 md:grid-cols-2">
        {/* Contact Details */}
        <div className="space-y-6 rounded-lg p-6">
          <div>
            <p className="text-2xl font-bold text-gray-800 md:text-3xl">
              Bambang Agus H
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <div>
                <IoCallOutline size={28} className="w-8 text-black" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Telpon :</p>
                <p className="text-lg font-semibold">085743311822</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <IoLogoWhatsapp size={28} className="w-8 text-black" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">
                  WhatsApp :
                </p>
                <p className="text-lg font-semibold">085743311822</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div>
                <IoMailOutline size={28} className="w-8 text-black" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Email :</p>
                <p className="text-lg font-semibold">persewaandewa@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div>
                <PiMapPinArea size={28} className="w-8 text-black" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-700">Alamat :</p>
                <p className="text-lg font-semibold">
                  Karanggeng RT04/RW32, Purwobinangun Pakem, Sleman, Yogyakarta
                </p>
              </div>
            </div>
          </div>
          {/* Divider */}
          <hr className="border-gray-300" />
          {/* Action Button */}
          <div className="flex">
            <a
              href="tel:085743311822"
              className="rounded-lg bg-black px-6 py-3 text-sm font-semibold text-white shadow-md hover:bg-indigo-500"
            >
              Hubungi Sekarang
            </a>
          </div>
        </div>

        {/* Map */}
        <div className="overflow-hidden rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3954.1515057363345!2d110.3809250759307!3d-7.666855775879649!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwNDAnMDAuNyJTIDExMMKwMjMnMDAuNiJF!5e0!3m2!1sid!2sid!4v1733238733289!5m2!1sid!2sid"
            className="h-full w-full"
            loading="lazy"
          ></iframe>
          {/* <iframe
            src="https://maps.app.goo.gl/aNZoSRiLsDMup99z6"
            className="h-[400px] w-full"
            loading="lazy"
          ></iframe> */}
        </div>
      </div>
    </div>
  );
}
