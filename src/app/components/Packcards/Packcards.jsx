"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import classNames from "classnames";
import dirt from "../../../../public/dirt.png";
import grass from "../../../../public/grass.png";
import modpacks from "../../constants/modpacks";
import Link from "next/link";
import ShineHover from "../ShineHover/ShineHover";

//https://www.frontend.fyi/v/building-stripes-carousel-with-tailwind

const Packcards = () => {
  const [activeItem, setActiveItem] = useState(2);
  const wrapperRef = useRef(null);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (!wrapperRef.current) return;
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    wrapperRef.current.style.setProperty("--transition", "600ms cubic-bezier(0.22, 0.61, 0.36, 1)");
    timeoutRef.current = setTimeout(() => {
      wrapperRef.current?.style.removeProperty("--transition");
    }, 900);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [activeItem]);

  return (
    <div className="flex flex-col bg-slate-900 items-center justify-center w-full">
      {/* <h2 className="font-header text-white pt-8 text-4xl">What we&apos;re playing...</h2> */}
      <div className="flex h-full w-full items-center justify-center">
        <div className="w-[1200px] max-w-full">
          <ul ref={wrapperRef} className="group flex flex-col gap-3 md:h-[640px] my-8 md:flex-row md:gap-[1.5%] ">
            {modpacks.map((pack, index) => (
              <li
                onClick={() => setActiveItem(index)}
                aria-current={activeItem === index}
                className={classNames(
                  "relative cursor-pointer md:w-[8%] md:[&[aria-current='true']]:w-[64%]",
                  "md:[transition:width_var(--transition,200ms_ease-in)]",
                  "md:before-block before:absolute before:bottom-0 before:left-[-10px] before:right-[-10px] before:top-0 before:hidden before:bg-white",
                  "md:[&:not(:hover)]:group-hover:w-[7%] md:hover:w-[12%]",
                  ""
                )}
                key={pack.id}
              >
                {/* <p>{index}</p>
                <p>{pack.background}</p> */}
                <div className="relative h-full w-full overflow-hidden rounded-2xl shadow-lg">
                  <img
                    className="absolute right-0 top-1/2 h-auto w-24 max-w-none -translate-y-1/2 blur-sm object-cover md:left-1/2 md:h-[640px] md:w-[590px] md:-translate-x-1/2"
                    src={pack.background}
                    alt={pack.name}
                    width={590}
                    height={640}
                  />
                  <div
                    className={classNames(
                      "inset-0 opacity-25 duration-300 before:absolute before:bottom-0 before:left-[-546px] before:right-0 before:top-[-148px] before:z-10 before:bg-texture after:bottom-[28px] after:left-0 after:right-[-434px] after:top-0 after:z-10 after:bg-texture md:absolute md:transition-opacity",
                      activeItem === index ? "md:opacity-25" : "md:opacity-0"
                    )}
                  />
                  <div
                    className={classNames(
                      "left-8 top-8 w-[590px] p-4 transition-[transform,opacity] md:absolute md:p-0",
                      activeItem === index ? "md:translate-x-0 md:opacity-100" : "md:translate-x-4 md:opacity-0"
                    )}
                  >
                    <img className="" src={pack.image} alt={pack.name} width={520} height={640} />
                    <div className="w-[86%] mt-16">
                      <div className="w-full bg-black rounded-lg px-4 py-2 bg-opacity-70">
                        <p className="font-body text-lg leading-relaxed mx-auto text-gray-200">{pack.description}</p>
                      </div>
                      <Link className={pack.styles.link} href={pack.url}>
                        {/* <ShineHover label={pack.buttonLabel} /> */}
                        <span className="font-body text-lg md:text-1xl lg:text-2xl p-4">{pack.buttonLabel}</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Packcards;
