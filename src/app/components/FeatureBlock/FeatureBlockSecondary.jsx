"use client";

import Image from "next/image";
import prominence from "../../../../public/25cec6f9fb1a3b211df1ae0629e2af8c.png";
import bettermc from "../../../../public/better-minecraft.png";
import nether from "../../../../public/nether.png";
import grass from "../../../../public/grass.png";
import Link from "next/link";

const FeatureBlockSecondary = () => {
  return (
    <section className="font-body bg-[#170b23] text-gray-600">
      <div className="order-first flex flex-wrap items-stretch text-base">
        <div className="w-full flex-1 bg-[#0f0518]">
          <section className=" ">
            <div className="px-8 pb-2">
              <div className="mb-20 text-center">
                <div className="relative mx-auto mb-4 flex h-[120px] w-[300px] items-center md:mb-10 md:h-[220px] md:w-[600px]">
                  <Image
                    src={prominence}
                    alt="Prominence logo"
                    title="Prominence II RPG is a modpack for everyone"
                    className="tgb-logo absolute -top-[20px] md:-top-[50px] z-30"
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <h1 className="font-header mb-4 text-4xl font-medium text-white">A modpack for everyone...</h1>
                <p className="mx-auto px-4 text-2xl leading-relaxed text-gray-200 lg:w-3/4 xl:w-3/4">
                  Prepare your equipment and your homestead; Hasturian Era is coming and we invite players who believe they have what it takes to survive to
                  join the fray...
                </p>
                <Link
                  className="relative mx-auto mt-16 flex rounded border-0 bg-[#360939] pl-20 px-8 py-4 pb-5 text-2xl text-white hover:bg-indigo-800 focus:outline-none lg:inline-flex"
                  href="/modpacks/prominence"
                >
                  <Image
                    src={grass}
                    alt="A Minecraft grass block emblem"
                    title="Into the breach! Onto Dawncraft!"
                    className="tgb-logo absolute w-20 -top-1.5 -left-6"
                    style={{ margin: "0 auto" }}
                  />
                  <span className="md:text-1xl text-lg lg:text-2xl">Into the breach!</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
        <div className="flex-1 lg:w-1/2 w-full bg-indigo-800">
          <section className=" ">
            <div className="px-8 pb-2">
              <div className="text-center mb-20">
                <div className="flex items-center mx-auto mb-4 md:mb-10 relative h-[80px] md:h-[200px] w-[200px] md:w-[450px] xl:w-[650px]">
                  <Image
                    src={bettermc}
                    alt="Better Minecraft logo"
                    title="Better Minecraft"
                    className="tgb-logo absolute -top-[40px] z-30"
                    style={{ margin: "0 auto" }}
                  />
                </div>
                <h1 className="font-header text-4xl font-medium text-white mb-4">Breathe life into your blocky universe...</h1>
                <p className="text-2xl leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-200 px-4 mb-12">
                  Elevate your vanilla Minecraft experience with Better Minecraft (BMC1 for 1.19.2) with overhauled world gen, over 100 quests, 5 new dimensions
                  and new bosses and foes from AdventureZ and Bosses of Mass Destruction.
                </p>

                <Link
                  className="flex mx-auto bg-pink-600 text-white border-0 py-4 pb-5 pl-20 px-8 focus:outline-none hover:bg-pink-900 rounded text-2xl mt-16 lg:inline-flex relative"
                  href="/modpacks/bettermc"
                >
                  <Image
                    src={nether}
                    alt="A Minecraft nether block emblem"
                    title="Into the breach! Onto Better Minecraft!"
                    className="tgb-logo absolute w-20 -top-1.5 -left-6"
                    style={{ margin: "0 auto" }}
                  />
                  <span className="text-lg md:text-1xl lg:text-2xl">Don&apos;t play vanilla, play this...</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default FeatureBlockSecondary;
