import creeper from "../../assets/pink-creeper.png";

const HowToInstallDawncraft = () => {
  return (
    <section className="body-font bg-orange-800 text-gray-600" id="get-started">
      <div className="w-full py-32">
        <section>
          <div className="mx-8 text-center">
            <div className="mb-8">
              <img
                src={creeper}
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
                if you haven't already. Other players can help you. The admin can help you. The admin for BetterMC is{" "}
                <span className="text-purple-300">@SenZ0</span>.
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
                <a href="https://www.curseforge.com/minecraft/modpacks/dawn-craft" target="_blank" rel="noreferrer" className="text-blue-400 underline">
                  DawnCraft
                </a>{" "}
                modpack.
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
                When DawnCraft starts (and looks like the main Minecraft menu), hit Multiplayer and Add Server. Enter{" "}
                <span className="text-purple-400 ">The Great Beyond</span> as your server name and{" "}
                <span className="text-purple-400 ">dawncraft.thegreatbeyond.org:25503</span> in the address box. Connect!
              </p>
            </div>
            <div className="mx-auto flex lg:w-3/4 xl:w-2/4">
              <h2 className="mr-8 text-2xl text-white md:text-4xl">6</h2>
              <p className="text-left text-lg leading-relaxed text-gray-200 md:text-2xl">
                When in game and you need to know more, hit up the{" "}
                <a href="https://dawncraft.fandom.com/wiki/DawnCraft_Wiki" target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                  DawnCraft wiki
                </a>{" "}
                for more information or ask in game or in the Dawncraft channel on our{" "}
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

export default HowToInstallDawncraft;
