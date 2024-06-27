"use client";

import modpacks from "@/app/constants/modpacks";
import creeper from "../../../../public/pink-creeper.png";
import StaffMemberPill from "../Pill/StaffMember";
import moderators from "@/app/constants/moderators";

const HowToInstall = ({ packId = "dawncraft", bg = "bg-gray-900" }) => {
  const pack = modpacks.find((pack) => pack.id === packId);

  const renderDisabledScrim = () => {
    return (
      <>
        <div className="absolute top-0 left-0 w-full h-full bg-black/85 z-10 flex justify-center items-center">
          <span className="text-white text-2xl">😴 This server is closed (for now)</span>
        </div>
      </>
    );
  };

  return (
    <section className={`font-body text-gray-600 relative ${bg}`} id="get-started">
      {!pack.active ? renderDisabledScrim() : null}
      <div className={`w-full py-32 ${!pack.active ? "blur-sm" : null}`}>
        <section>
          <div className="mx-8 text-center">
            <div className="mb-8">
              <img
                src={creeper.src}
                alt="A pink creeper face from Minecraft"
                title="What is The Great Beyond?"
                className="tgb-logo w-20"
                style={{ margin: "0 auto" }}
              />
            </div>
            <h1 className="title-font mb-4 text-2xl md:text-4xl font-medium text-white">Get started</h1>

            <div className="flex flex-col gap-4">
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">1</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  Join{" "}
                  <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="text-[#7289da] underline hover:text-[#677dcd]">
                    Discord
                  </a>{" "}
                  if you haven't already. Other players can help you. The admin can help you. The admins for {pack.abbrev} are:
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 pl-[48px] gap-1 w-full">
                {pack.moderators.map((moderator, index) => {
                  let m = moderators.find((mod) => mod.id === moderator);
                  let avatar = m.avatar || null;
                  let discordId = m.discordId || "";
                  return (
                    <span key={index} className="inline-block">
                      <a href={`discord://-/users/${discordId}`}>
                        <StaffMemberPill label={moderator} avatar={avatar} />
                      </a>
                    </span>
                  );
                })}
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">2</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  If you aren't already, you should use{" "}
                  <a href="https://curseforge.com/" target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                    CurseForge
                  </a>{" "}
                  or{" "}
                  <a href="https://atlauncher.com/downloads" target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                    ATLauncher
                  </a>{" "}
                  to set Minecraft up for each modpack correctly. Install CurseForge/ATL and ensure you can start Minecraft via it.
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">3</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  Install the{" "}
                  <a href={pack.download} target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                    {pack.name}
                  </a>{" "}
                  modpack. You need version <span className="underline">v{pack.version.modpack}</span>.
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">4</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  Smack that big, juicy <span className="text-orange-400">Play</span> button.
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">5</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  When {pack.abbrev} starts (and looks like the main Minecraft menu), hit Multiplayer and Add Server. Enter{" "}
                  <span className="text-purple-200 ">The Great Beyond</span> as your server name and <span className="text-purple-200 ">{pack.join}</span> in
                  the address box. You must add the port number. Connect!
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">6</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                  When in game and you need help or want to know more, ask in game or on our{" "}
                  <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="text-[#7289da] underline hover:text-[#677dcd]">
                    Discord
                  </a>
                  .
                </p>
              </div>
              <div className="mx-auto flex lg:w-3/4 xl:w-2/4 w-full">
                <h2 className="mr-8 text-2xl text-white md:text-4xl">7</h2>
                <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">Welcome to The Great Beyond! glhf!</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowToInstall;
