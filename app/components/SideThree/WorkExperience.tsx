import React from "react";

const WorkExperience = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-6 shadow-lg">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Real Work Experience
          </p>
          <h1 className="text-2xl font-bold text-amber-300">
            Web App & Mobile App Development
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            ประสบการณ์ทำงานจริง 1 ปี พัฒนา web app และ mobile app
            สำหรับระบบรับซื้อน้ำมันใช้แล้วจากร้านค้าต่าง ๆ โดยดูแล flow
            ทั้งฝั่ง admin และ collector
          </p>
          <p className="text-sm leading-relaxed text-white/75">
            <span className="font-semibold text-amber-200">Admin Web:</span>{" "}
            ระบบ login, roles, CRUD, upload รูปภาพ และหน้าจัดการข้อมูลใน flow
            งานทั้งหมดด้วย TypeScript, Tailwind CSS และ Supabase
          </p>
          <p className="text-sm leading-relaxed text-white/75">
            <span className="font-semibold text-amber-200">Collector App:</span>{" "}
            แอปสำหรับทีม collector ใช้งานภาคสนาม พัฒนาด้วย React Native และ
            NativeWind
          </p>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
