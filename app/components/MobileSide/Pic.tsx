import React from "react";
import Image from "next/image";

const Pic = () => {
  return (
    <div className="flex justify-center items-center h-full w-full py-30">
      <div className="relative h-70 w-70 shadow-2xl shadow-white rounded-full overflow-visible flex items-center justify-center bg-gradient-to-b to-transparent from-white">
        {/* circle frame stays (rounded-full + border) but we allow children to overflow */}
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
