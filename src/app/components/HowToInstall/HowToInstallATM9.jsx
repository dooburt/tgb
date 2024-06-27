"use client";

import modpacks from "@/app/constants/modpacks";
import creeper from "../../../../public/pink-creeper.png";
import StaffMemberPill from "../Pill/StaffMember";
import moderators from "@/app/constants/moderators";

const HowToInstallATM9 = ({ disabled }) => {
  const pack = modpacks.find((pack) => pack.id === "atm9");

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
    <section className="font-body bg-gray-900 text-gray-600 relative" id="get-started">
      {disabled ? renderDisabledScrim() : null}
      <div className={`w-full py-32 ${disabled ? "blur-sm" : null}`}>
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
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">1</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                Join{" "}
                <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="text-[#7289da] underline hover:text-[#677dcd]">
                  Discord
                </a>{" "}
                if you haven't already. Other players can help you. The admin can help you. The admins for {pack.abbrev} are:
                <div className="inline-block ml-2 text-sm">
                  {pack.moderators.map((moderator, index) => {
                    let m = moderators.find((mod) => mod.id === moderator);
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
              </p>
            </div>
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
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
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">3</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                Install the{" "}
                <a href={pack.download} target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                  {pack.name}
                </a>{" "}
                modpack. You need version <span className="underline">v{pack.version.modpack}</span>.
              </p>
            </div>
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">4</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                Smack that big, juicy <span className="text-orange-400">Play</span> button.
              </p>
            </div>
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">5</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                When {pack.abbrev} starts (and looks like the main Minecraft menu), hit Multiplayer and Add Server. Enter{" "}
                <span className="text-purple-200 ">The Great Beyond</span> as your server name and <span className="text-purple-200 ">{pack.join}</span> in the
                address box. You must add the port number. Connect!
              </p>
            </div>
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">6</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                When in game and you need help or want to know more, ask in game or on our{" "}
                <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="text-[#7289da] underline hover:text-[#677dcd]">
                  Discord
                </a>
                .
              </p>
            </div>
            {/* <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">6</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                Eek! Minecraft says I need to download Easy Villagers! Dafuq?
                How to fix? Easy! Download Easy Villagers from here:{" "}
                <a
                  href="https://www.curseforge.com/minecraft/mc-mods/easy-villagers/files/3887794"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-200 underline"
                >
                  https://www.curseforge.com/minecraft/mc-mods/easy-villagers/files/3887794
                </a>{" "}
                and put the jar file (
                <span className="text-slate-900 ">
                  easy_villagers-1.18.2-1.0.11.jar
                </span>
                ) in your DawnCraft mods folder. Restart and rejoin.
              </p>
            </div> */}
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">7</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">Welcome to The Great Beyond! glhf!</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowToInstallATM9;
