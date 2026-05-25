"use client";

import React, { useRef } from "react";
import { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PcEcom from "./PcEcom";
import Restaurants from "./Restaurants";
import TodoList from "./TodoList";
import WorkExperience from "./WorkExperience";

const AllPort = () => {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <div className="mx-auto w-full max-w-md overflow-hidden px-0 pb-2 md:max-w-xl">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full overflow-hidden rounded-xl pb-10"
        style={
          {
            "--swiper-navigation-color": "#2563eb",
            "--swiper-pagination-color": "#2563eb",
          } as React.CSSProperties
        }
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <WorkExperience />
        </SwiperSlide>
        <SwiperSlide>
          <PcEcom />
        </SwiperSlide>
        <SwiperSlide>
          <TodoList />
        </SwiperSlide>
        <SwiperSlide>
          <Restaurants />
        </SwiperSlide>
      </Swiper>
      <div className="mt-6 flex justify-center gap-4">
        <button
          className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          Prev
        </button>
        <button
          className="rounded-full border border-slate-200 bg-white px-4 py-2 font-semibold text-slate-700 shadow-sm transition hover:border-blue-200 hover:text-blue-600"
          onClick={() => swiperRef.current?.slideNext()}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default AllPort;
