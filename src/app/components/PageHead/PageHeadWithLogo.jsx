"use client";

import modpacks from "@/app/constants/modpacks";
import Pill from "../Pill/Pill";
import PillClosed from "../Pill/Closed";
import StaffMemberPill from "../Pill/StaffMember";
import moderators from "@/app/constants/moderators";

const PageHeadWithLogo = ({ packId = "dawncraft", logo, title = "", image, height = 500, gradientFromClass = "from-black" }) => {
  let imgHeight = height + 20;

  const pack = modpacks.find((pack) => pack.id === packId);

  if (!pack) return null;
  return (
    <>
      <div className="bg-gradient-to-b from-black to-transparent h-[150px] md:h-[120px] w-full absolute z-10"></div>
      <section className={`flex w-full overflow-hidden lg:max-h-screen relative`} style={{ minHeight: height }}>
        <div className={`bg-gradient-to-t to-transparent h-[40px] md:h-[80px] w-full absolute bottom-0 z-10 ${gradientFromClass}`}></div>
        <img src={image.src} className={`min-w-full object-cover blur-sm min-h-[${imgHeight}px]`} alt="" />
        <div className="absolute bottom-6 lg:bottom-16 m-8 mx-auto w-full z-20 justify-center flex flex-col items-center">
          <img className="w-[350px] md:w-[450px] xl:w-[500px]" src={logo} alt={title} />
          <div className="flex flex-col lg:flex-row mt-8 ml-8 md:ml-4 lg:ml-4 gap-2">
            <div className="flex flex-row flex-wrap gap-2 md:gap-4 text-sm md:text-base justify-center lg:justify-start">
              {!pack.active ? <PillClosed /> : null}
              <Pill label={`v${pack.version.modpack}`} />
            </div>
            <div className="hidden lg:flex mx-4 text-white text-3xl">&middot;</div>
            <div className="hidden md:flex flex-row gap-2  justify-center lg:justify-start">
              {pack.moderators.map((moderator, index) => {
                let m = moderators.find((mod) => mod.id === moderator);
                console.log("moderator", moderator, m);
                let avatar = m.avatar || null;
                let discordId = m.discordId || "";
                return (
                  <div key={index} className="inline-block">
                    <a href={`discord://-/users/${discordId}`}>
                      <StaffMemberPill label={moderator} avatar={avatar} />
                    </a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PageHeadWithLogo;
