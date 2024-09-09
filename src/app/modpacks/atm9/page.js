"use client";

import DiscordInvite from "../../components/DiscordInvite/DiscordInvite";
import eyes from "../../../../public/stock/dooburt_steve_character_from_minecraft_staring_with_white_eye_9fc140f7-0a95-4640-9097-d7860ebccee5_0.png";
import PageHeadWithLogo from "@/app/components/PageHead/PageHeadWithLogo";
import { PictureSliceFarrin } from "@/app/components/PictureSlice/PictureSlice";
import ServerJoin from "@/app/components/ServerJoin/ServerJoin";
import HowToInstall from "@/app/components/HowToInstall/HowToInstall";
import PackScroller from "@/app/components/PackScroller/PackScroller";
import modpacks from "@/app/constants/modpacks";

export default function ATM9({ params, searchParams }) {
  const pack = modpacks.find((pack) => pack.id === "atm9");
  return (
    <>
      <PageHeadWithLogo
        packId={pack.id}
        logo={pack.image}
        image={eyes}
        title={pack.abbrev}
        subtitle="What we're playing..."
        height={800}
        gradientFromClass="from-black"
      />
      <PackScroller packId={pack.id} />
      <section className="py-8 bg-black">
        <div className="container mx-auto px-8 xl:px-0 xl:mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">{pack.upsell}</p>
        </div>
      </section>
      <PictureSliceFarrin />
      <ServerJoin pack={pack.name} server={pack.join} disabled={!pack.active} />
      <HowToInstall packId="atm9" />
      <DiscordInvite />
    </>
  );
}
