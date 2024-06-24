"use client";

import React from "react";
import bg from "../../../../public/steve_slimes_big.png";
import Image from "next/image";

const Wallpaper = () => {
  return (
    <section className="bg-flat-grey relative flex h-screen min-h-[960px] w-full items-center justify-center overflow-hidden">
      <Image
        src={bg}
        className="absolute z-10 h-[100%] min-h-[960px] object-cover min-w-full max-w-none overflow-hidden lg:ml-0 lg:-translate-x-0 min-[2200px]:h-auto"
        fill="cover"
        alt="Picture of Minecraft Steve fighting through slimes"
      />
      <div className="absolute top-[70%] z-20 px-5 pt-0 md:top-[70%] md:w-auto lg:px-2">
        <h1 className="font-header mb-4 text-center text-4xl font-medium leading-none text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] md:text-5xl lg:text-8xl">
          Explore, build &amp; conquer.
        </h1>
        <span className="font-body mb-8 block text-center text-2xl leading-tight text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
          Play on a blazing fast modded Minecraft server, running DawnCraft, Steampunk or Better MC for your next adventure!
        </span>
      </div>
    </section>
  );
};

export default Wallpaper;
