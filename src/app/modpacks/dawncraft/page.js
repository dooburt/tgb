"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import village from "../../../../public/stock/village.jpg";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";
import { PictureSliceDawncraftSpawn } from "@/app/components/PictureSlice/PictureSlice";
import ServerJoin from "@/app/components/ServerJoin/ServerJoin";
import HowToInstall from "@/app/components/HowToInstall/HowToInstall";
import modpacks from "@/app/constants/modpacks";
import PackScroller from "@/app/components/PackScroller/PackScroller";

export default function Dawncraft({ params, searchParams }) {
  const pack = modpacks.find((pack) => pack.id === "dawncraft");
  return (
    <>
      <PageHeadWithLogo
        packId="dawncraft"
        logo={"https://thegreatbeyond.s3.eu-west-1.amazonaws.com/dawncraft.png"}
        image={village}
        title="Dawncraft"
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-indigo-900"
      />
      <PackScroller packId={pack.id} bg="bg-indigo-900" linkColor="text-indigo-200" />
      <section className="py-8 bg-indigo-900">
        <div className="container mx-auto px-8 py-16 xl:px-0 xl:mx-auto">
          <h2 className="font-header text-white text-3xl">Play DawnCraft</h2>
          <p className="font-body pb-8 text-base md:text-2xl leading-relaxed text-white">
            Enter the extraordinary world of{" "}
            <a
              href="https://www.curseforge.com/minecraft/modpacks/dawn-craft"
              target="_blank"
              rel="noreferrer"
              className="text-orange-500 hover:text-orange-600"
            >
              DawnCraft
            </a>{" "}
            and really test your abilities against a harsh environment, brutal bosses and challenging quests and play through the new episode: Echoes of
            Legends.
          </p>
          <p className="font-body text-base md:text-2xl leading-relaxed text-white mt-2 mb-8">
            DawnCraft is monstrously difficult and can test even a seasoned player. This latest episode takes you on a hardcore adventure that will require all
            your skills in combat, building and exploration. Dive into dungeons, battle dozens of bosses and complete a unique, interesting RPG storyline. Can
            you engineer your survival?{" "}
            <a href="https://discord.gg/MXmcyScFEZ" target="_blank" rel="noreferrer" className="text-orange-500 underline hover:text-orange-600">
              Into the breach!
            </a>
          </p>
        </div>
      </section>
      <PictureSliceDawncraftSpawn />
      <ServerJoin pack="DAWNCRAFT" server="dawncraft.thegreatbeyond.org:25503" disabled />
      <HowToInstall />
      <DiscordInvite />
    </>
  );
}
