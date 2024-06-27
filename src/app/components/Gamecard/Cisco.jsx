"use client";

import Image from "next/image";
import Link from "next/link";
import ciscos from "../../../../public/ciscos-logo.png";
import modpacks from "@/app/constants/modpacks";
import PillClosed from "../Pill/Closed";
import Pill from "../Pill/Pill";

const GameCardCiscos = () => {
  const pack = modpacks.find((pack) => pack.id === "ciscos-rpg-adventure");

  return (
    <>
      <div className="flex-1 lg:w-1/2 w-full bg-gray-900">
        <section className=" ">
          <div className="px-8 pb-2">
            <div className="text-center mb-20">
              <div className="flex items-center mx-auto mb-4 md:mb-10 relative h-[80px] md:h-[200px] w-[250px] md:w-[750px]">
                <Image
                  src={ciscos}
                  alt="Cisco's RPG Adventure logo"
                  title="Cisco's RPG Adventure"
                  className="absolute -top-[20px] z-30"
                  style={{ margin: "0 auto" }}
                />
              </div>

              <div className="flex flex-row flex-wrap gap-2 md:gap-4 text-sm md:text-base justify-center mb-8 mt-4">
                {!pack.active ? <PillClosed /> : null}
                <Pill label={`v${pack.version.modpack}`} />
              </div>

              <p className="text-2xl leading-relaxed xl:w-3/4 lg:w-3/4 mx-auto text-gray-200 px-4">{pack.description}</p>
              <Link
                className="flex mx-auto bg-pink-900 text-white border-0 py-4 pb-5 px-8 focus:outline-none hover:bg-pink-800 rounded text-2xl mt-16 lg:inline-flex relative"
                href="/modpacks/ciscos-rpg-adventure"
              >
                <span className="text-lg md:text-1xl lg:text-2xl">{pack.buttonLabel}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GameCardCiscos;
