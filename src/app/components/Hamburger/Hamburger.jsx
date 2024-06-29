"use client";

import React, { useState, useEffect } from "react";
import classNames from "classnames";
import { mergeClasses } from "../../core/utils";
import Scrim from "../Scrim/Scrim";
import tgb from "../../../../public/tgb-square.png";
import { useGesture } from "@use-gesture/react";

import "./Hamburger.css";
import Image from "next/image";
import modpacks from "@/app/constants/modpacks";

const Hamburger = ({ styles = {}, classes = [], isOpen = false, children }) => {
  const _styles = Object.assign({}, styles);
  const [open, setOpen] = useState(isOpen);

  function comparitor(a, b) {
    return a.sort - b.sort;
  }

  const bind = useGesture(
    {
      onDrag: (state) => {
        console.log("drag");
        setOpen(!isOpen);
      },
    },
    {
      drag: {
        threshold: 5,
      },
    }
  );

  const renderCopyright = () => {
    return (
      <>
        <p className="text-xs text-slate-500">
          &copy; 2024 The Great Beyond. All rights reserved. The Great Beyond is a collection of modified Minecraft&reg; servers. The Great Beyond is not
          affiliated with Mojang&trade;, Microsoft&trade;.
        </p>
      </>
    );
  };

  useEffect(() => {
    const handleKeyPress = (e) => {
      if ((open && e.key === "Escape") || e.code === "Escape") {
        setOpen(false);
      }
      e.preventDefault();
      e.stopPropagation();
      return false;
    };

    if (open) {
      window.addEventListener("keydown", handleKeyPress);
    }

    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, [open]);

  const handleClick = (e) => {
    setOpen(!open);
  };

  const exitHandler = (url, timeout = 250) => {
    handleClick();
    setTimeout(() => {
      window.location.href = url;
    }, timeout);
  };

  const EXIT_DELAY = 200;

  return (
    <>
      <div>
        <Scrim active={open} handleClick={handleClick} />
        <div style={_styles} className={classNames(mergeClasses(["hamburger"], classes))} onClick={handleClick}>
          <div className="hamburger__button-container">
            <button className={classNames([open ? "opened" : ""])} aria-label="Main Menu" aria-expanded={open}>
              <svg width="50" height="50" viewBox="0 0 100 100">
                <path
                  className="line line1"
                  d="M 20,29.000046 H 80.000231 C 80.000231,29.000046 94.498839,28.817352 94.532987,66.711331 94.543142,77.980673 90.966081,81.670246 85.259173,81.668997 79.552261,81.667751 75.000211,74.999942 75.000211,74.999942 L 25.000021,25.000058"
                />
                <path className="line line2" d="M 20,50 H 80" />
                <path
                  className="line line3"
                  d="M 20,70.999954 H 80.000231 C 80.000231,70.999954 94.498839,71.182648 94.532987,33.288669 94.543142,22.019327 90.966081,18.329754 85.259173,18.331003 79.552261,18.332249 75.000211,25.000058 75.000211,25.000058 L 25.000021,74.999942"
                />
              </svg>
            </button>
          </div>
        </div>

        <div className={classNames(["font-body hamburger__shade max-w-[320px] md:max-w-[500px]", open ? "opened" : ""])}>
          <div className="hamburger__shade-inner"> </div>
          <div className="hamburger__menu-container">
            <div {...bind}>
              <div className="relative w-[96%] -top-[80px] flex flex-col items-center justify-center">
                <Image
                  src={tgb}
                  alt="The Great Beyond logo"
                  title="The Great Beyond - Explore, build and conquer on modded Minecraft servers"
                  className="m-0 w-[70%] md:w-[300px]"
                />

                <ul className="mt-2 mb-2 w-[96%]">
                  <li className="px-8 py-1 md:py-2">
                    <span className="text-pink-200 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500" onClick={() => exitHandler("/", EXIT_DELAY)}>
                      🏡 Home
                    </span>
                  </li>
                  <li className="px-8 py-1 md:py-2">
                    <a
                      href="https://discord.gg/MXmcyScFEZ"
                      target="_blank"
                      rel="noreferrer"
                      className="text-[#7289da] hover:text-[#677dcd] text-lg md:text-2xl"
                    >
                      🧭 Join Discord
                    </a>
                  </li>
                  <li className="px-8 py-1 md:py-2">
                    <span
                      className="text-pink-200 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500"
                      onClick={() => exitHandler("/modpacks", EXIT_DELAY)}
                    >
                      ⚔️ Our Modpacks
                    </span>
                  </li>
                  {/* <li className="px-8 py-1 md:py-2">
                    <ul className="mt-2 mb-2 w-[96%]">
                      {modpacks.sort(comparitor).map((modpack, index) => (
                        <li key={index} className="px-12 py-1 md:py-2">
                          <span
                            className="text-pink-100 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500"
                            onClick={() => exitHandler(`${modpack.url}`, EXIT_DELAY)}
                          >
                            {modpack.name}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </li> */}
                  <li className="px-8 py-1 md:py-2">
                    <span
                      className="text-pink-200 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500"
                      onClick={() => exitHandler("/team", EXIT_DELAY)}
                    >
                      😎 Our Team
                    </span>
                  </li>
                  <li className="px-8 py-1 md:py-2">
                    <span
                      className="text-pink-200 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500"
                      onClick={() => exitHandler("/rules", EXIT_DELAY)}
                    >
                      📓 Rules
                    </span>
                  </li>
                  <li className="px-8 py-1 md:py-2">
                    <span
                      className="text-pink-200 text-lg md:text-2xl hover:cursor-pointer hover:text-pink-500"
                      onClick={() => exitHandler("/tip", EXIT_DELAY)}
                    >
                      🎉 Helping &amp; Tip Jar
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[70%] ml-8">{renderCopyright()}</div>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
