import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

export default function Header() {
  const images = [
    "./header.jpg",
    "https://images.pexels.com/photos/574011/pexels-photo-574011.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2291462/pexels-photo-2291462.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  return (
    <div className="flex h-[100vh] items-center justify-center p-4">
      <div className="flex max-w-screen-xl flex-col items-center justify-between gap-8 md:flex-row">
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
          {/* <img
            className="relative z-10 h-[420px] w-full object-cover"
            src="./header.jpg"
            alt="Pesta"
          /> */}
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000 }}
            loop
            className="relative h-[420px] w-full"
          >
            {images.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full w-full">
                  <img
                    className="relative z-10 h-[420px] w-full object-cover"
                    src={image}
                    alt={`Slide ${index + 1}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
}
