import React from "react";

const TodoList = () => {
  return (
    <div className="flex h-full items-center justify-center">
      <div className="glassPopup flex h-full max-w-md flex-col justify-center rounded-xl p-6 shadow-lg">
        <div className="space-y-4 p-4">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-200">
            Frontend Practice Project
          </p>
          <h1 className="text-2xl font-bold text-amber-300">
            Todo List Web App
          </h1>
          <p className="text-sm leading-relaxed text-white/85 xl:text-base">
            โปรเจกต์ฝึกทำ CRUD ฝั่งหน้าเว็บสำหรับจัดการรายการงานประจำวัน
            โดยเก็บข้อมูลไว้ใน localStorage ของ browser
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Tech:</span> React,
            Tailwind CSS, LocalStorage
          </p>
          <p className="text-sm text-white/75">
            <span className="font-semibold text-amber-200">Flow:</span> เพิ่ม,
            แก้ไข, ลบ, ทำเครื่องหมายเสร็จ และโหลดข้อมูลเดิมกลับมาเมื่อเปิดเว็บใหม่
          </p>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
