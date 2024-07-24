"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import wall from "../../../../public/stock/wall.jpg";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";
import { PictureSliceFarrin } from "@/app/components/PictureSlice/PictureSlice";
import ServerJoin from "@/app/components/ServerJoin/ServerJoin";
import HowToInstall from "@/app/components/HowToInstall/HowToInstall";
import PackScroller from "@/app/components/PackScroller/PackScroller";
import modpacks from "@/app/constants/modpacks";

export default function Cobblemon({ params, searchParams }) {
  const pack = modpacks.find((pack) => pack.id === "cobblemon");
  return (
    <>
      <PageHeadWithLogo
        packId={pack.id}
        logo={pack.image}
        image={wall}
        title={pack.abbrev}
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-red-900"
      />
      <PackScroller packId={pack.id} bg="bg-red-900" linkColor="text-white" />
      <section className="py-8 bg-red-900">
        <div className="container mx-auto px-8 py-16 xl:px-0 xl:mx-auto">
          <h2 className="font-header text-white text-3xl">Play Cobblemon</h2>
          <p className="font-body pb-8 text-base md:text-2xl leading-relaxed text-white">{pack.upsell}</p>
        </div>
      </section>
      <PictureSliceFarrin />
      <ServerJoin pack={pack.name} server={pack.join} disabled={!pack.active} />
      <HowToInstall packId={pack.id} />
      <DiscordInvite />
    </>
  );
}
