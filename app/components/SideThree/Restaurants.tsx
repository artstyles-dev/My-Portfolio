import React from "react";

const Restaurants = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-6 shadow-lg">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Small Showcase Project
          </p>
          <h1 className="text-2xl font-bold text-amber-300">
            Restaurant Menu Web
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            โปรเจกต์เล็กสำหรับโชว์หน้าเมนูร้านอาหาร ดึงข้อมูลผ่าน Next.js API
            แล้วแสดงรายการอาหารแบบ responsive
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Tech:</span> Next.js,
            API Routes, Tailwind CSS
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Flow:</span>{" "}
            โหลดข้อมูลเมนูจาก API, แสดงหมวดหมู่/รายการอาหาร, รองรับทุกขนาดหน้าจอ
          </p>
        </div>
      </div>
    </div>
  );
};

export default Restaurants;
