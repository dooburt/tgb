"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";

const TransparentHeader = () => {
  return (
    <>
      <Hamburger />
      <header className="font-body absolute z-30 w-full text-xl text-gray-600">
        <div className="md:max-w-[360px] ml-24 mt-2">
          <a href="/">
            <Logo />
          </a>
        </div>
        <div className="bg-gradient-to-b from-slate-900 to-transparent h-[150px] md:h-[120px] w-full absolute z-10"></div>
      </header>
    </>
  );
};

export default TransparentHeader;
