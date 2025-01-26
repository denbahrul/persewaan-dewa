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
      <div className="flex max-w-screen-xl flex-col items-center justify-between gap-8 lg:flex-row">
        <div className="flex flex-col text-center lg:w-[40%] lg:gap-4 lg:text-start">
          <p className="text-2xl font-extrabold leading-tight text-black md:text-3xl lg:text-5xl">
            MENYEWAKAN ALAT PESTA
          </p>
          <p className="text:md font-semibold md:text-lg lg:text-2xl">
            Tenda, panggung, floring, kursi, alat catering & sound system
          </p>
        </div>
        <div className="relative mt-5 w-[90vw] lg:mt-0 lg:w-[55%]">
          <div className="absolute -top-4 left-3 h-[450px] w-full bg-[#6B923A]"></div>
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
