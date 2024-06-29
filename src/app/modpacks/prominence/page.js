"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import cathedral from "../../../../public/stock/catherdral.jpg";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";
import { PictureSliceFarrin } from "@/app/components/PictureSlice/PictureSlice";
import ServerJoin from "@/app/components/ServerJoin/ServerJoin";
import HowToInstall from "@/app/components/HowToInstall/HowToInstall";
import PackScroller from "@/app/components/PackScroller/PackScroller";
import modpacks from "@/app/constants/modpacks";

export default function Prominence({ params, searchParams }) {
  const pack = modpacks.find((pack) => pack.id === "prominence");
  return (
    <>
      <PageHeadWithLogo
        packId={pack.id}
        logo={pack.image}
        image={cathedral}
        title={pack.abbrev}
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-black"
      />
      <PackScroller packId={pack.id} />
      <section className="py-8 bg-black">
        <div className="container mx-auto px-8 py-16 xl:px-0 xl:mx-auto">
          <h2 className="font-header text-white text-3xl">Play Prominence II RPG</h2>
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
