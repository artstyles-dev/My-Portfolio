import React from "react";
import Image from "next/image";

const Pic = () => {
  return (
    <div className="flex h-full w-full items-center justify-center pb-10 pt-32">
      <div className="relative flex h-70 w-70 items-center justify-center overflow-visible rounded-full border border-white bg-gradient-to-b from-white to-blue-50 shadow-[0_24px_70px_rgba(37,99,235,0.18)]">
        <Image
          src="https://res.cloudinary.com/dzjiwk7yy/image/upload/v1759833758/IMG_2418-Photoroom_ef44bz.png"
          alt="profile"
          width={520}
          height={520}
          className="object-cover absolute rounded-b-full h-90 w-70 bottom-0"
        />
      </div>
    </div>
  );
};

export default Pic;
