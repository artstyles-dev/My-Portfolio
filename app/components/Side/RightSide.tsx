import React from "react";
import Image from "next/image";

const RightSide = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="relative h-40 w-40 sm:h-60 sm:w-60 md:h-60 md:w-60 lg:h-[440px] lg:w-[440px] shadow-xl transfrom duration-300 hover:shadow-2xl shadow-white rounded-full overflow-visible flex items-center justify-center bg-gradient-to-b to-transparent from-white">
        <Image
          src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1759833758/IMG_2418-Photoroom_ef44bz.png"
          alt="profile"
          width={520}
          height={520}
          className="object-cover absolute rounded-b-full w-40 h-44 sm:w-60 sm:h-64 md:w-60 md:h-70 lg:w-[440px] lg:h-[480px] bottom-0"
        />
      </div>
    </div>
  );
};

export default RightSide;

