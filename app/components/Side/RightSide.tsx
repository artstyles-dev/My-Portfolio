import React from "react";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="relative flex h-40 w-40 items-center justify-center overflow-visible rounded-full border border-white bg-gradient-to-b from-white via-blue-50 to-teal-50 shadow-[0_30px_90px_rgba(37,99,235,0.16)] sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-[420px] lg:w-[420px]">
        <div className="hero-orbit hidden lg:block" />
        <Image
          src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1759833758/IMG_2418-Photoroom_ef44bz.png"
          alt="profile"
          width={520}
          height={520}
          className="absolute bottom-0 h-44 w-40 rounded-b-full object-cover sm:h-64 sm:w-60 md:h-70 md:w-60 lg:h-[460px] lg:w-[420px]"
        />
      </div>
    </div>
  );
};

export default RightSide;
