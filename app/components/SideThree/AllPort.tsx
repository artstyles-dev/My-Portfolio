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
    <div className="w-100 overflow-hidden p-4 md:w-full md:p-8">
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
        className="w-full max-w-md overflow-hidden rounded-xl pb-10"
        style={
          {
            "--swiper-navigation-color": "#fff",
            "--swiper-pagination-color": "#fff",
          } as React.CSSProperties
        }
        slidesPerView={1}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        <SwiperSlide>
          <Restaurants />
        </SwiperSlide>
        <SwiperSlide>
          <TodoList />
        </SwiperSlide>
        <SwiperSlide>
          <PcEcom />
        </SwiperSlide>
        <SwiperSlide>
          <WorkExperience />
        </SwiperSlide>
      </Swiper>
      <div className="mt-6 flex justify-center gap-4">
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
