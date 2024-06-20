"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";

const TransparentHeader = () => {
  return (
    <>
      <Hamburger />
      <header className="font-body absolute z-30 w-full text-xl text-gray-600">
        <div className="bg-gradient-to-b from-slate-900 to-transparent h-[150px] md:h-[120px] w-full absolute z-10"></div>
        <div className="container mx-auto flex flex-col flex-wrap items-center p-5 md:flex-row justify-between z-20 relative">
          <div className=" ml-8 mt-4 flex w-[280px] items-center font-medium text-gray-900 md:mb-0 md:w-[450px]">
            <a href="/">
              <Logo />
            </a>
          </div>
          <a
            href="https://discord.gg/MXmcyScFEZ"
            target="_blank"
            rel="noreferrer"
            className="mt-4 hidden items-center rounded border-0 bg-[#1f162c] px-6 py-1 pb-2 text-2xl text-white hover:bg-indigo-800 focus:outline-none md:mt-8 lg:inline-flex"
          >
            Join the adventure
            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="ml-1 h-4 w-4" viewBox="0 0 24 24">
              <path d="M5 12h14M12 5l7 7-7 7"></path>
            </svg>
          </a>
        </div>
      </header>
    </>
  );
};

export default TransparentHeader;
