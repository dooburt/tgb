"use client";

import steampunk from "../../../../public/steampunk.png";
import dawncraft from "../../../../public/dawncraft.png";
import dirt from "../../../../public/dirt.png";
import grass from "../../../../public/grass.png";
import Image from "next/image";
import Link from "next/link";

const FeatureBlock = () => {
  return (
    <section className="font-body bg-[#170b23] text-gray-600">
      <div className="order-first flex flex-wrap items-stretch text-base">
        <div className="flex-1 lg:w-1/2 w-full bg-purple-800">
          <section className=" ">
            <div className="px-8 pb-2">
              <div className="text-center mb-20">
                <div className="flex items-center mx-auto mb-4 md:mb-10 relative h-[80px] md:h-[200px] w-[200px] md:w-[450px]">
                  <Image src={dawncraft} alt="DawnCraft logo" title="DawnCraft" className="tgb-logo absolute -top-[40px] z-30" style={{ margin: "0 auto" }} />
                </div>
                <h1 className="font-header text-4xl font-medium text-white mb-4">Nothing comes easy...</h1>
                <p className="text-2xl leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-200 px-4">
                  Buckle-up buttercup, because in DawnCraft everything is monstrously difficult. The latest episode Echoes of Legends tasks you on a hardcore
                  adventure that will require all your skills in combat, building and exploration. Dive into dungeons, battle dozens of bosses and complete a
                  unique questline. Can you engineer your survival?
                </p>
                <Link
                  className="flex mx-auto bg-[#51ce18] text-white border-0 py-4 pb-5 pl-20 px-8 focus:outline-none hover:bg-indigo-800 rounded text-2xl mt-16 lg:inline-flex relative"
                  href="/modpacks/dawncraft"
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
        <div className="w-full flex-1 bg-slate-900">
          <section className=" ">
            <div className="px-8 pb-2">
              <div className="mb-20 text-center">
                <div className="relative mx-auto mb-4 flex h-[120px] w-[300px] items-center md:mb-10 md:h-[220px] md:w-[600px]">
                  <Image
                    src={steampunk}
                    alt="Steampunk logo"
                    title="Steampunk"
                    className="tgb-logo absolute -top-[20px] md:-top-[50px] z-30"
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <h1 className="font-header mb-4 text-4xl font-medium text-white">Victorian aesthetics and mechanical marvels!</h1>
                <p className="mx-auto px-4 text-2xl leading-relaxed text-gray-200 lg:w-3/4 xl:w-3/4">
                  Transform you Minecraft experience into a fanastical adventure filled with steam-powered creations, intricate gears and gigantic airships!
                  Battle new bosses and explore new strongholds and fortresses.
                </p>
                <Link
                  className="relative mx-auto mt-16 flex rounded border-0 bg-orange-800 px-8 py-4 pb-5 pl-20 text-2xl text-white hover:bg-indigo-800 focus:outline-none lg:inline-flex"
                  href="/modpacks/steampunk"
                >
                  <Image
                    src={dirt}
                    alt="A Minecraft block of dirt emblem"
                    title="Fire up your furnace in Steampunk!"
                    className="tgb-logo absolute -left-6 -top-1.5 w-20"
                    style={{ margin: "0 auto" }}
                  />
                  <span className="md:text-1xl text-lg  lg:text-2xl">Fire up your furnace!</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlock;
