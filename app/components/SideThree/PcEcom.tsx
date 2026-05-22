import React from "react";

const PcEcom = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-6 shadow-lg">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Full Stack Project
          </p>
          <h1 className="text-2xl font-bold text-amber-300">
            Full Stack E-commerce Web
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            เว็บขายอุปกรณ์คอมพิวเตอร์แบบ full stack มีระบบ login แยก admin/user
            และระบบหลังบ้านสำหรับจัดการข้อมูลสินค้า
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Tech:</span> React,
            Axios, Zustand, Tailwind CSS, Node.js, Express, MySQL
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Flow:</span> user
            เลือกสินค้าและใช้งานหน้าร้าน, admin login เพื่อ CRUD สินค้า/ข้อมูลระบบ
          </p>
        </div>
      </div>
    </div>
  );
};

export default PcEcom;
