"use client";
import React from "react";
import PageMobile from "./pageMobile";
import PagePc from "./pagePc";

const Page = () => {
  return (
    <div className="h-full w-full flex">
      <div className="hidden sm:block">
        <PagePc />
      </div>
      <div className="sm:hidden">
        <PageMobile />
      </div>
    </div>
  );
};

export default Page;
