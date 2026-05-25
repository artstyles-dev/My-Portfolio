import React from "react";

const Hero = () => {
  return (
    <div className="h-full">
      <div className="h-full flex flex-col justify-start items-center">
        <div className="space-y-5">
          <p className="inline-flex rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">Frontend Developer</p>
          <h1 className="text-3xl font-semibold text-slate-700">สวัสดีครับ ผม อาร์ต</h1>
          <p className="text-5xl font-bold text-slate-950">จิรัฐ บุญให้</p>
          <p className="text-lg leading-relaxed text-slate-600">
            นักพัฒนาเว็บไซต์ เว็บแอปพลิเคชั่น และแอปพลิเคชั่นด้าน{" "}
            <span className="text-xl font-semibold text-blue-600">
              Frontend Developer
            </span>{" "}
            ออกแบบและพัฒนาเว็บไซต์ และแอปพลิเคชั่นให้ใช้งานง่าย ดูสวยงาม
            และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน
          </p>
          <a href="/Jirut_CV.pdf" target="_blank" className="mb-10 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300">Download CV</a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
