import Image from "next/image";
import Link from "next/link";
import steampunk from "../../../../public/steampunk.png";
import modpacks from "@/app/constants/modpacks";
import PillClosed from "../Pill/Closed";
import Pill from "../Pill/Pill";

const GameCardSteampunk = () => {
  const pack = modpacks.find((pack) => pack.id === "steampunk");

  return (
    <>
      <div className="w-full flex-1 bg-slate-900">
        <section className=" ">
          <div className="px-8 pb-2">
            <div className="mb-20 text-center">
              <div className="relative mx-auto mb-4 flex h-[120px] w-[300px] items-center md:mb-10 md:h-[220px] md:w-[700px]">
                <Image
                  src={steampunk}
                  alt="Steampunk logo"
                  title="Steampunk"
                  className="tgb-logo absolute -top-[20px] md:-top-[50px] z-30"
                  style={{ margin: "0 auto" }}
                />
              </div>

              <div className="flex flex-row flex-wrap gap-2 md:gap-4 text-sm md:text-base justify-center mb-8 mt-4">
                {!pack.active ? <PillClosed /> : null}
                <Pill label={`v${pack.version.modpack}`} />
              </div>

              <p className="mx-auto px-4 text-2xl leading-relaxed text-gray-200 lg:w-3/4 xl:w-3/4">{pack.description}</p>
              <Link
                className="relative mx-auto mt-16 flex rounded border-0 bg-orange-800 px-8 py-4 pb-5 text-2xl text-white hover:bg-indigo-800 focus:outline-none lg:inline-flex"
                href={pack.url}
              >
                <span className="md:text-1xl text-lg  lg:text-2xl">{pack.buttonLabel}</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default GameCardSteampunk;
