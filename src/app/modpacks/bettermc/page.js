"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import sky from "../../../../public/stock/bettermc-sky.png";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";
import { PictureSliceFarrin } from "@/app/components/PictureSlice/PictureSlice";
import ServerJoin from "@/app/components/ServerJoin/ServerJoin";
import HowToInstall from "@/app/components/HowToInstall/HowToInstall";
import PackScroller from "@/app/components/PackScroller/PackScroller";
import modpacks from "@/app/constants/modpacks";

export default function BetterMC({ params, searchParams }) {
  const pack = modpacks.find((pack) => pack.id === "bettermc");
  return (
    <>
      <PageHeadWithLogo
        packId={pack.id}
        logo={pack.image}
        image={sky}
        title={pack.abbrev}
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-purple-900"
      />
      <PackScroller packId={pack.id} bg="bg-purple-900" linkColor="text-white" />
      <section className="py-8 bg-purple-900">
        <div className="container mx-auto px-8 py-16 xl:px-0 xl:mx-auto">
          <h2 className="font-header text-white text-3xl">Play Better Minecraft (BMC1)</h2>
          <p className="font-body pb-8 text-base md:text-2xl leading-relaxed text-white">{pack.upsell}</p>
        </div>
      </section>
      <PictureSliceFarrin />
      <ServerJoin pack={pack.name} server={pack.join} />
      <HowToInstall packId={pack.id} />
      <DiscordInvite />
    </>
  );
}
