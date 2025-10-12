import React from "react";

const LeftSide = () => {
  return (
    <div className="h-full sm:px-20 sm:mt-10 lg:mt-0 lg:p-20 xl:p-30">
      <div className="h-full flex flex-col justify-start items-center">
        <div className="space-y-5 md:px-10">
          <h1 className="text-3xl lg:text-5xl">สวัสดีครับ ผม อาร์ต </h1>
          <p className="text-5xl lg:text-8xl whitespace-nowrap">จิรัฐ บุญให้</p>
          <p className="text-xl lg:text-2xl leading-relaxed">
            นักพัฒนาเว็บไซต์และเว็บแอปพลิเคชั่นด้าน{" "}
          <span className="text-amber-300 text-3xl font-semibold">
            Frontend Developer
          </span>{" "}
            ออกแบบและพัฒนาเว็บไซต์ให้ใช้งานง่าย ดูสวยงาม และสร้างประสบการณ์ที่ดีให้กับผู้ใช้ 
          </p>
          <a href="/Jirut_CV.pdf" target="_blank" className="glass px-3 py-1">Download CV</a>
        </div>
      </div>
    </div>



  );
};

export default LeftSide;
