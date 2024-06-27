"use client";

import Image from "next/image";
import Link from "next/link";
import cobblemon from "../../../../public/cobblemon.png";
import grass from "../../../../public/grass.png";
import PillClosed from "../Pill/Closed";
import modpacks from "@/app/constants/modpacks";
import Pill from "../Pill/Pill";

const GameCardCobblemon = () => {
  const pack = modpacks.find((pack) => pack.id === "cobblemon");

  return (
    <>
      <div className="flex-1 lg:w-1/2 w-full bg-brown-900">
        <section className=" ">
          <div className="px-8 pb-2">
            <div className="text-center mb-20">
              <div className="flex items-center mx-auto mb-4 md:mb-10 relative h-[80px] md:h-[200px] w-[200px] md:w-[750px]">
                <Image src={cobblemon} alt="Cobblemon logo" title="Cobblemon" className="absolute z-30" style={{ margin: "0 auto" }} />
              </div>

              <div className="flex flex-row flex-wrap gap-2 md:gap-4 text-sm md:text-base justify-center mb-8 mt-4">
                {!pack.active ? <PillClosed /> : null}
                <Pill label={`v${pack.version.modpack}`} />
              </div>

              <p className="text-2xl leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-200 px-4">
                Buckle-up buttercup, because in DawnCraft everything is monstrously difficult. The latest episode Echoes of Legends tasks you on a hardcore
                adventure that will require all your skills in combat, building and exploration. Dive into dungeons, battle dozens of bosses and complete a
                unique questline. Can you engineer your survival?
              </p>
              <Link
                className="flex mx-auto bg-[#51ce18] text-white border-0 py-4 pb-5 pl-20 px-8 focus:outline-none hover:bg-indigo-800 rounded text-2xl mt-16 lg:inline-flex relative"
                href="/modpacks/atm9"
              >
                <Image
                  src={grass}
                  alt="A Minecraft grass block emblem"
                  title="Into the breach! Onto Dawncraft!"
                  className="tgb-logo absolute w-20 -top-1.5 -left-6"
                  style={{ margin: "0 auto" }}
                />
                <span className="text-lg md:text-1xl lg:text-2xl">Revisit what was...</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GameCardCobblemon;
