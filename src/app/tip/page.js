"use client";

import DiscordInvite from "../components/DiscordInvite/DiscordInvite";
import zombie from "../../../public/stock/dooburt_httpss.mj.runM81V1YZVBB0_a_mangrove_in_minecraft_dark_6f3b9e07-8976-41ce-8cbf-763771feea19_0.png";
import PageHead from "../components/PageHead/PageHead";

export default function Tip({ params, searchParams }) {
  return (
    <>
      <PageHead image={zombie} title="Help out" subtitle="How you can help our community" height={600} gradientFromClass="from-pink-900" />
      <section className="py-8 bg-pink-900">
        <div className="container px-8 xl:px-0 mx-auto">
          <p className="font-body py-8 text-base md:text-2xl leading-relaxed text-white">
            The Great Beyond is a community of modded-Minecraft servers ran by the players themselves. We run powerful, dedicated servers and host a mix of
            popular and obscure packs for players to enjoy. We've grown in a few months to hundreds of players in our community and from one single modpack to
            seven.
          </p>
          <p className="font-body py-2 text-base md:text-2xl leading-relaxed text-white">
            Our aim is to continue to grow, continue to host excellent, fun-to-play modpacks and enjoy the games together. We're working on clever integrations
            with Discord, our website and the modpacks themselves, giving players plenty to enjoy and explore here if after they've completed a play-through.
          </p>
        </div>
      </section>

      <DiscordInvite />
    </>
  );
}
