"use client";

import modpacks from "@/app/constants/modpacks";
import Pill from "../Pill/Pill";
import PillClosed from "../Pill/Closed";

const PageHeadWithLogo = ({ packId = "dawncraft", logo, title = "", image, height = 300, gradientFromClass = "from-black" }) => {
  let imgHeight = height + 20;

  const pack = modpacks.find((pack) => pack.id === packId);

  const renderTags = ({ tags }) => {
    return tags.map((tag, index) => {
      return (
        <div key={index} className="inline-block uppercase">
          <Pill label={tag}></Pill>
        </div>
      );
    });
  };

  if (!pack) return null;
  return (
    <>
      <div className="bg-gradient-to-b from-black to-transparent h-[150px] md:h-[120px] w-full absolute z-10"></div>
      <section className={`md:h-256 flex w-full overflow-hidden lg:max-h-screen relative h-[${height}px]`}>
        <div className={`bg-gradient-to-t to-transparent h-[40px] md:h-[80px] w-full absolute bottom-0 z-10 ${gradientFromClass}`}></div>
        <img src={image.src} className={`min-w-full object-cover blur-sm min-h-[${imgHeight}px]`} alt="" />
        <div className="absolute bottom-6 m-8 mx-auto w-full z-20 justify-center flex flex-col items-center">
          <img className="w-[350px] md:w-[450px] xl:w-[500px]" src={logo} alt={title} />
          <div className="flex flex-row flex-wrap gap-2 md:gap-4 mt-8 ml-8 md:ml-4 lg:ml-4 text-sm md:text-base">
            {!pack.active ? <PillClosed /> : null}
            <Pill label={`v${pack.version.modpack}`} />
            {renderTags({ tags: pack.tags })}
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeadWithLogo;
