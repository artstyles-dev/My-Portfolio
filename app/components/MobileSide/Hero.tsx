import React from "react";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center">
        <div className="space-y-5">
          <h1 className="text-4xl">สวัสดีครับ ผม อาร์ต </h1>
          <p className="text-6xl whitespace-nowrap text-amber-300">จิรัฐ บุญให้</p>
          <p className="text-lg leading-relaxed text-neutral-300">
            นักพัฒนาเว็บไซต์ เว็บแอปพลิเคชั่น และแอปพลิเคชั่นด้าน{" "}
            <span className="text-amber-300 text-xl font-semibold">
              Frontend Developer
            </span>{" "}
            ออกแบบและพัฒนาเว็บไซต์ และแอปพลิเคชั่นให้ใช้งานง่าย ดูสวยงาม
            และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน
          </p>
          <a href="/Jirut_CV.pdf" target="_blank" className="glass px-3 py-1 mb-10">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
