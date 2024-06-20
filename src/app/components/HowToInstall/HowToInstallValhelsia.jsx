import creeper from "../../assets/pink-creeper.png";

const HowToInstallValhelsia = () => {
  return (
    <section className="text-gray-600 body-font bg-pink-800">
      <div className="w-full py-32">
        <section>
          <div className="text-center mx-8">
            <div className="mb-8">
              <img
                src={creeper}
                alt="A pink creeper face from Minecraft"
                title="What is The Great Beyond?"
                className="tgb-logo w-20"
                style={{ margin: "0 auto" }}
              />
            </div>
            <h1 className="text-4xl font-medium title-font text-white mb-4">Get started</h1>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">1</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                Join{" "}
                <a href="https://discord.gg/6dk62uR4tt" target="_blank" rel="noreferrer" className="text-[#7289da] hover:text-[#677dcd] underline">
                  Discord
                </a>{" "}
                if you haven't already. Other players can help you. The admin can help you. There are instructions and rules and all sorts of other bits of
                information.
              </p>
            </div>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">2</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                If you aren't already, you should use{" "}
                <a href="https://curseforge.com/" target="_blank" rel="noreferrer" className="text-yellow-200 underline">
                  CurseForge
                </a>{" "}
                to set Minecraft up for each modpack correctly. Install CurseForge and ensure you can start Minecraft via it.
              </p>
            </div>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">3</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                Install the{" "}
                <a
                  href="https://www.curseforge.com/minecraft/modpacks/valhelsia-enhanced-vanilla"
                  target="_blank"
                  rel="noreferrer"
                  className="text-yellow-200 underline"
                >
                  Valhelsia Enhanced Vanilla
                </a>{" "}
                modpack.
              </p>
            </div>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">4</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                Smack that big, juicy <span className="text-orange-400">Play</span> button.
              </p>
            </div>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">5</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">
                When Valhelsia Enhanced Vanilla starts (and looks like the main Minecraft menu), hit Multiplyer and Add Server. Enter{" "}
                <span className="text-purple-300 ">The Great Beyond</span> as your server name and{" "}
                <span className="text-purple-300 ">valhelsia.thegreatbeyond.org:25570</span> in the address box. Connect!
              </p>
            </div>
            <div className="flex xl:w-2/4 lg:w-3/4 mx-auto">
              <h2 className="text-2xl md:text-4xl text-white mr-8">6</h2>
              <p className="text-lg md:text-2xl leading-relaxed text-gray-200 text-left">Welcome to The Great Beyond! glhf!</p>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default HowToInstallValhelsia;
