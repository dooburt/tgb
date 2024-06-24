"use client";

import Link from "next/link";
import modpacks from "../../constants/modpacks";
import { Carousel, IconButton } from "@material-tailwind/react";
import Pill from "../Pill/Pill";
import PillClosed from "../Pill/Closed";

const Hero = () => {
  function comparitor(a, b) {
    return a.sort - b.sort;
  }

  const renderTags = ({ tags }) => {
    return tags.map((tag, index) => {
      return (
        <div key={index} className="inline-block uppercase">
          <Pill label={tag}></Pill>
        </div>
      );
    });
  };

  const renderNot = () => {
    return (
      <>
        <span className="text-red-700 font-bold">not</span>
      </>
    );
  };

  return (
    <>
      <div className="h-[100vh] min-h-[1000px] lg:min-h-[1150px] w-full bg-black">
        <div className="bg-gradient-to-b from-slate-900 to-transparent h-[150px] md:h-[120px] w-full absolute z-50"></div>
        <Carousel
          //autoplay
          //loop
          transition={{ duration: 0.5, type: "tween" }}
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"}`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
          prevArrow={({ handlePrev }) => (
            <IconButton variant="text" color="white" size="lg" onClick={handlePrev} className="!absolute z-20 top-2/4 left-4 -translate-y-2/4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton variant="text" color="white" size="lg" onClick={handleNext} className="!absolute z-20 top-2/4 !right-4 -translate-y-2/4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="h-6 w-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </IconButton>
          )}
        >
          {modpacks.sort(comparitor).map((pack, index) => (
            <div className="relative h-full w-full" key={pack.id}>
              <div className="absolute w-2/3 top-0 bottom-0 left-0 bg-gradient-to-r from-black to-transparent z-[11]">&nbsp;</div>
              <div className="absolute w-full h-full z-10 right-0 top-0 left-0 bottom-0 bg-blue-gray-900 overflow-hidden">
                <img className="object-cover h-full w-full blur-sm" src={pack.background} alt={pack.name} />
              </div>
              <div className="absolute z-20 mt-[130px] px-8 py-8 lg:mt-[105px] md:px-32 lg:py-32">
                <h1 className="text-white font-body text-base uppercase ml-4 pb-4 mb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                  We&apos;re {!pack.active ? renderNot() : ""} playing...
                </h1>
                <img className={pack.styles.logo} src={pack.image} alt={pack.name} />
                <div className="flex flex-row flex-wrap gap-2 md:gap-4 mt-8 ml-8 md:ml-4 lg:ml-4 text-sm md:text-base">
                  {!pack.active ? <PillClosed /> : null}
                  <Pill label={`v${pack.version.modpack}`} />
                  {renderTags({ tags: pack.tags })}
                </div>

                <div className="mt-4 md:mt-4 lg:mt-8 pl-8 pr-8 md:pl-4 md:pr-4">
                  <h2 className="text-white font-header text-2xl lg:text-3xl pb-4 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">{pack.title || ""}</h2>
                  <p className="font-body leading-relaxed mx-auto text-gray-200 text-lg lg:text-2xl shadow-sm drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
                    {pack.description}
                  </p>

                  <Link className={pack.styles.link} href={pack.url}>
                    {/* <ShineHover label={pack.buttonLabel} /> */}
                    <span className="font-body text-2xl p-4">{pack.buttonLabel}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </>
  );
};

export default Hero;
