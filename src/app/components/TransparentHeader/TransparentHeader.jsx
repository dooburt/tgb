"use client";

import React from "react";
import Logo from "../Logo/Logo";
import Hamburger from "../Hamburger/Hamburger";
import ShineHover from "../ShineHover/ShineHover";
import { Avatar } from "@material-tailwind/react";
import Link from "next/link";

const TransparentHeader = () => {
  return (
    <>
      <Hamburger />
      <header className="font-body absolute z-30 w-full text-xl text-gray-600">
        <div className="mx-auto flex flex-col flex-wrap items-center md:flex-row justify-between relative pt-1 md:px-16 xl:px-32">
          <div className="w-[330px] md:max-w-[360px] mt-2">
            <a href="/">
              <Logo />
            </a>
          </div>

          <div className="hidden 2xl:flex mt-4">
            <ul>
              <li className="inline-block mr-4">
                <Link className="text-2xl text-white hover:text-pink-300" href="/">
                  Home
                </Link>
              </li>
              <li className="inline-block mr-4">
                <Link className="text-2xl text-white hover:text-pink-300" href="/modpacks">
                  Modpacks
                </Link>
              </li>
              <li className="inline-block mr-4">
                <Link className="text-2xl text-white hover:text-pink-300" href="/tip">
                  Help out
                </Link>
              </li>
            </ul>
          </div>

          <a
            href="https://discord.gg/MXmcyScFEZ"
            target="_blank"
            rel="noreferrer"
            className="mt-4 hidden overflow-hidden items-center rounded border-0 bg-white lg:px-2 xl:px-4 drop-shadow-md text-2xl text-purple-900 hover:bg-purple-900 hover:text-white hover:cursor-pointer focus:outline-none md:mt-2 lg:inline-flex"
          >
            <ShineHover label={`Join the adventure`} />
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
