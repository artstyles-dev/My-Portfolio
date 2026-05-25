import React from "react";

const LeftSide = () => {
  return (
    <div className="h-full">
      <div className="flex h-full flex-col justify-center">
        <div className="max-w-2xl space-y-6">
          <p className="inline-flex w-fit rounded-full bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            Frontend Developer
          </p>
          <div className="space-y-3">
            <h1 className="text-3xl font-semibold text-slate-700 lg:text-5xl">สวัสดีครับ ผม อาร์ต</h1>
            <p className="text-5xl font-bold text-slate-950 lg:text-8xl">จิรัฐ บุญให้</p>
          </div>
          <p className="text-lg leading-8 text-slate-600 lg:text-2xl lg:leading-10">
            นักพัฒนาเว็บไซต์ เว็บแอปพลิเคชั่นและแอปพลิเคชั่นด้าน{" "}
          <span className="font-semibold text-blue-600">
            Frontend Developer
          </span>{" "}
            ออกแบบพัฒนาเว็บไซต์และแอปพลิเคชั่นให้ใช้งานง่าย ดูสวยงาม และสร้างประสบการณ์ที่ดีให้กับผู้ใช้งาน
          </p>
          <a href="/Jirut_CV.pdf" target="_blank" className="inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-slate-300 transition hover:-translate-y-0.5 hover:bg-blue-600">Download CV</a>
        </div>
      </div>
    </div>



  );
};

export default LeftSide;
