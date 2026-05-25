"use client";
import React from "react";
import PageMobile from "./pageMobile";
import PagePc from "./pagePc";

const Page = () => {
  return (
    <div className="h-full w-full flex">
      <div className="hidden h-full w-full sm:block">
        <PagePc />
      </div>
      <div className="w-full sm:hidden">
        <PageMobile />
      </div>
    </div>
  );
};

export default Page;
