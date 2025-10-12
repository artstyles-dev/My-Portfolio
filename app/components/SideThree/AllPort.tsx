"use client";
import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Image from "next/image";


const AllPort = () => {

    const swiperRef = useRef<SwiperType | null>(null);
  return (
    <div className="glassPopup overflow-hidden p-10">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full max-w-md rounded-xl overflow-hidden"
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide className="flex flex-col items-center">
          <a href="https://stylesshop-pc.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video relative">
            <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
              <Image
                src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1760247439/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD_2568-10-12_%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2_12.35.21_mcgmpe.jpg"
                alt="web-ecom"
                fill
                className="object-cover rounded-xl hover:opacity-70 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
          </a>
          <h1 className="text-2xl text-amber-300 font-bold text-center py-5">
            Full Stack E-commerce Web
          </h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <a href="https://myrestaurant-styles.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video relative">
            <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
              <Image
                src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1760115975/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD_2568-10-10_%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2_15.58.38_skuwpn.jpg"
                alt="web-ecom"
                fill
                className="object-cover rounded-xl hover:opacity-70 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
          </a>
          <h1 className="text-2xl text-amber-300 font-bold text-center py-5">
            Restaurant Menu Web
          </h1>
        </SwiperSlide>
        <SwiperSlide className="flex flex-col items-center">
          <a href="https://todolist-doitnow.vercel.app/" target="_blank" rel="noopener noreferrer" className="block w-full aspect-video relative">
            <div className="relative w-full h-0" style={{ paddingBottom: "56.25%" }}>
              <Image
                src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1760115975/%E0%B8%A0%E0%B8%B2%E0%B8%9E%E0%B8%96%E0%B9%88%E0%B8%B2%E0%B8%A2%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%88%E0%B8%AD_2568-10-10_%E0%B9%80%E0%B8%A7%E0%B8%A5%E0%B8%B2_14.54.48_ww6oxv.jpg"
                alt="web-ecom"
                fill
                className="object-cover rounded-xl hover:opacity-70 transition-opacity duration-300"
                sizes="(max-width: 640px) 100vw, 640px"
              />
            </div>
          </a>
          <h1 className="text-2xl text-amber-300 font-bold text-center py-5">
            Todo List Web App
          </h1>
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center gap-4 mt-6">
        <button
          className="glass px-4 py-2 font-semibold"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="glass px-4 py-2 font-semibold"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPort;