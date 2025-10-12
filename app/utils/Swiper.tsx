import React from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Swiper } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { ReactNode } from "react";

const Swipe = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        centeredSlides={false}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        // breakpoints={{
        //   320: {
        //     slidesPerView: 2,
        //     spaceBetween: 10,
        //   },
        //   640: {
        //     slidesPerView: 3,
        //     spaceBetween: 10,
        //   },
        //   768: {
        //     slidesPerView: 4,
        //     spaceBetween: 10,
        //   },
        //   1024: {
        //     slidesPerView: 5,
        //     spaceBetween: 10,
        //   },
        // }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {children}
      </Swiper>
    </div>
  );
};

export default Swipe;
