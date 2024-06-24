"use client";

import modpacks from "../../constants/modpacks";
import { Carousel } from "@material-tailwind/react";
import Link from "next/link";

const ModpacksCarousel = () => {
  return (
    <div className="bg-indigo-800 lg:h-[900px] relative">
      <div className="mx-auto h-full">
        <Carousel
          autoplay
          loop
          transition={{ duration: 0.5, type: "tween" }}
          className="rounded-xl"
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
        >
          {modpacks.map((pack, index) => (
            <div className="relative h-full w-full" key={pack.id}>
              <div className="absolute w-full h-full z-10 right-0 top-0 left-0 bottom-0 bg-blue-gray-900 overflow-hidden">
                <img className="object-cover h-full w-full blur-sm" src={pack.background} alt={pack.name} />
              </div>
              <div className="absolute h-full z-20 px-32 py-32 lg:w-1/4">
                <img className="w-[300px]" src={pack.image} alt={pack.name} />
                <div className="mt-16">
                  <div className="w-full bg-black rounded-lg px-4 py-2 bg-opacity-70">
                    <p className="font-body text-lg leading-relaxed mx-auto text-gray-200">{pack.description}</p>
                  </div>
                  <Link className={pack.styles.link} href={pack.url}>
                    {/* <ShineHover label={pack.buttonLabel} /> */}
                    <span className="text-lg md:text-1xl lg:text-2xl p-4">{pack.buttonLabel}</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
          {/* <img
            src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
            alt="image 1"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
            alt="image 2"
            className="h-full w-full object-cover"
          />
          <img
            src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
            alt="image 3"
            className="h-full w-full object-cover"
          /> */}
        </Carousel>
      </div>
    </div>
  );
};

export default ModpacksCarousel;
