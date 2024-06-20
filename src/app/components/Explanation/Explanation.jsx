"use client";

import Image from "next/image";
import creeper from "../../../../public/pink-creeper.png";

const Explanation = () => {
  return (
    <section className="font-body text-gray-600 bg-pink-800">
      <div className="w-full py-32">
        <section>
          <div className="text-center">
            <div className="mb-8">
              <Image
                src={creeper}
                alt="A pink creeper face from Minecraft"
                title="What is The Great Beyond?"
                className="tgb-logo w-20"
                style={{ margin: "0 auto" }}
              />
            </div>
            <h1 className="font-header text-4xl font-medium text-white mb-4">What is The Great Beyond?</h1>
            <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-200 px-4">
              The Great Beyond is just a single admin from the UK who decided to run some modded-Minecraft servers for some kids in his family. Since starting
              the servers, there have a been a few changes and plenty of players. We&apos;re not a business, we don&apos;t make money, we don&apos;t sell
              anything. We just run a few happy, fun, places to play modded Minecraft.
            </p>
            <p className="text-2xl leading-relaxed xl:w-2/4 lg:w-3/4 mt-8 mx-auto text-gray-200">
              Why not{" "}
              <a href="https://discord.gg/6dk62uR4tt" target="_blank" rel="noreferrer" className="text-[#7289da] hover:text-[#677dcd]">
                join us
              </a>
              ?
            </p>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Explanation;
